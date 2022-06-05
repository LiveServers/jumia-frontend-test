import React from "react";
import { useRouter } from "next/router";
import RightPageLayout from "../layout/rightpage/RightPageLayout";
import AppHeader from "../components/AppHeader";

const MobileView = ({ setImage, image, isMobileTablet }) => {
  const router = useRouter();
  React.useEffect(() => {
    if (!isMobileTablet) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <AppHeader isMobileTablet={isMobileTablet} />
      <RightPageLayout setImage={setImage} image={image} />
    </>
  );
};

export default MobileView;
