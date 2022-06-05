import React from "react";
import Head from "next/head";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import LeftPageLayout from "../layout/leftpage/LeftPageLayout";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import RightPageLayout from "../layout/rightpage/RightPageLayout";
import { setData } from "../redux/reducers/dataReducer";
import { setLoading } from "../redux/reducers/loadingReducer";
import { setResults } from "../redux/reducers/cardReducer";
import { setAlert } from "../redux/reducers/alertReducer";

function Home({ isMobileTablet, image, setImage }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.paginationReducer.page);
  const keyword = useSelector((state) => state.searchReducer.keyword);
  const filter = useSelector((state) => state.filterReducer.filter);
  React.useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setLoading(true));
        dispatch(setResults({}));
        const response = await axios(
          `${process.env.NEXT_PUBLIC_NYT_BASE_URL}search/v2/articlesearch.json?q=${keyword}&fq=${filter}&page=${page}&api-key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        dispatch(setAlert(false));
        dispatch(setData(response?.data?.response?.docs));
        dispatch(setLoading(false));
      } catch (e) {
        dispatch(setLoading(false));
        dispatch(setAlert(true));
      }
    }
    fetchData();
  }, [page, keyword, filter]);
  return (
    <div>
      <Head>
        <title>Jumia NYT News</title>
        <meta name="description" content="Jumia test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout setImage={setImage} isMobileTablet={isMobileTablet}>
        <LeftPageLayout isMobileTablet={isMobileTablet} setImage={setImage} />
        <RightPageLayout setImage={setImage} image={image} />
      </MainLayout>
    </div>
  );
}

export default React.memo(Home);
