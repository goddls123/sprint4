import { fireEvent, screen } from "@testing-library/react";
import JoinForm from "./JoinForm";
import { renderWithRouter } from "../utils/renderWithRouter";

describe("JoinForm", () => {
  test("렌더 확인", () => {
    const onSubmit = jest.fn();
    renderWithRouter(<JoinForm onSubmit={onSubmit} />);
    expect(
      screen.getByText("회원가입", { selector: "h2" })
    ).toBeInTheDocument();
  });

  test("로그인하기", () => {
    const onSubmit = jest.fn();
    renderWithRouter(<JoinForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByText("로그인하기"));
    expect(window.location.pathname).toBe("/login");
  });

  test("회원정보를 입력하고 회원가입 버튼을 누르면 onSubmit 콜백이 호출된다.", () => {
    const onSubmit = jest.fn((email, password) => {
      return Promise.resolve({ email, password });
    });
    renderWithRouter(<JoinForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "test@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "1234" },
    });
    fireEvent.change(screen.getByLabelText("checkPassword"), {
      target: { value: "1234" },
    });
    screen.getByText("회원가입", { selector: "button" }).click();

    expect(onSubmit).toBeCalledWith({
      email: "test@gmail.com",
      password: "1234",
      checkPassword: "1234",
    });
  });
  test("비밀번호 체크", () => {
    const onSubmit = jest.fn();
    renderWithRouter(<JoinForm onSubmit={onSubmit} />);

    fireEvent.input(screen.getByLabelText("password"), {
      target: {
        value: "123",
      },
    });
    fireEvent.submit(screen.getByRole("button"));

    expect(onSubmit).not.toBeCalled();
  });
});
