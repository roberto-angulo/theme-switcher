// @types
import { ThemeType } from "../types";

interface TextContentProps {
  theme: ThemeType;
}
const TextContent = ({ theme }: TextContentProps) => (
  <>
    <h1 data-testid="content-header">Current theme: {theme}</h1>
    <p>
      Light themes have lighter backgrounds and darker font colors. Meanwhile,
      dark themes have darker backgrounds and lighter font colors. Dark themes
      prevent <strong>Eyes Strain </strong>
      and reduce device energy consumption
    </p>
    <h3>What we expect?</h3>
    <p>The button below should toggle between light and dark mode</p>
  </>
);

export default TextContent;
