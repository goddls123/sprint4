import InputBoxForm from "./InputBoxForm";
import { render, screen } from "@testing-library/react";

const getValues = jest.fn();
const register = jest.fn();
describe("InputBoxForm", () => {
  test("렌더 확인", () => {
    render(
      <InputBoxForm type="email" getValues={getValues} register={register} />
    );
    expect(screen.getByLabelText("email")).toBeInTheDocument();
  });
  test("errors", () => {
    render(
      <InputBoxForm type="email" getValues={getValues} register={register} />
    );
    expect(screen.getByLabelText("email")).toBeInTheDocument();
  });
});
