// @components
import TextContent from "./components/TextContent";

// @hooks
import useTheme from "./hooks/useTheme";

// @styles
import "./styles.scss";

export default function App() {
  const [theme, classStyle, setTheme] = useTheme();
  const appStyles = `App ${classStyle}`;
  return (
    <div className={appStyles}>
      <TextContent theme={theme} />
      <button onClick={() => setTheme()}>Toggle theme</button>
    </div>
  );
}
