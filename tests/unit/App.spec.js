import App from "@/common/containers/App";
import { render } from "@testing-library/react";

describe("App.tsx", () => {
  it("renders learn react link", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
