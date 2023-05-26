// @packages
import { useState } from "react";

// @constants
import { STYLES, THEMES } from "../constants";

// @types
import { ThemeType, UseThemeOutputType } from "../types";

const useTheme = (): UseThemeOutputType => {
  const [theme, setTheme] = useState<ThemeType>(THEMES.light);
  const switchTheme = () => {
    setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light);
  };

  return [theme, STYLES[theme], switchTheme];
};

export default useTheme;
