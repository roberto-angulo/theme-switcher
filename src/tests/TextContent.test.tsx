// @packages
import { render } from "@testing-library/react";

// @constants
import { THEMES } from "../constants";

// @components
import TextContent from "../components/TextContent";

describe("Test <TextContent />", () => {
  test("Check that, when dark theme is selected, the right theme name is displayed", () => {
    const { getByTestId } = render(<TextContent theme={THEMES.dark} />);
    expect(getByTestId("content-header")).toHaveTextContent(
      "Current theme: dark"
    );
  });
});
