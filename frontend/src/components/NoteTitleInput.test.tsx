import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "../utils/renderWithRouter";
import NoteTitleInput from "./NoteTitleInput";

describe("NoteTitleInput", () => {
  //   test("랜더 확인", () => {
  //     renderWithRouter(<NoteTitleInput />);
  //     expect(screen.getByPlaceholderText("제목 없음")).toBeInTheDocument();
  //   });
  //   test("onChangeTitle 콜백 호출", () => {
  //     const onChangeTitle = jest.fn();
  //     renderWithRouter(<NoteTitleInput onChangeTitle={onChangeTitle} />);
  //     fireEvent.change(screen.getByPlaceholderText("제목 없음"), {
  //       target: { value: "fake" },
  //     });
  //     expect(onChangeTitle).toBeCalledWith("fake");
  //   });
  //   test("onChangeTitle 개행문자 제외", () => {
  //     const onChangeTitle = jest.fn();
  //     renderWithRouter(<NoteTitleInput onChangeTitle={onChangeTitle} />);
  //     fireEvent.change(screen.getByPlaceholderText("제목 없음"), {
  //       target: { value: "fake\nname" },
  //     });
  //     expect(onChangeTitle).toBeCalledWith("fakename");
  //   });
});
