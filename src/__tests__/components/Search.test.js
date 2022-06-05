import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import ThemeProvider from "../../theme";
import { store } from "../../redux/store";
import SearchComponent from "../../components/Search";

describe("Search Component Test", () => {
  let props;
  let props2;
  beforeAll(() => {
    props = {
      searchString: "exams",
      setSearchString: jest.fn(),
      isMobileTablet: false,
    };
    props2 = {
      searchString: "exams",
      setSearchString: jest.fn(),
      isMobileTablet: true,
    };
  });
  it("should match snapshot when isMobileTablet is false", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider>
          <SearchComponent {...props} />
        </ThemeProvider>
      </Provider>
    );
    wrapper
      .find("#paper")
      .at(0)
      .props()
      .onSubmit({
        preventDefault() {},
      });
    wrapper
      .find("#paper")
      .at(0)
      .find("#input")
      .at(0)
      .props()
      .onChange({
        preventDefault() {},
        target: {
          value: "exams",
        },
      });
    wrapper.find("#paper").at(0).find("#icon").at(0).props().onClick();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match snapshot", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider>
          <SearchComponent {...props2} />
        </ThemeProvider>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
