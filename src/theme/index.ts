import { extendTheme } from "@chakra-ui/react";
import ColorTheme from "./colors";
import FontTheme from "./fonts";
import GlobalTheme from "./global";

const theme = extendTheme(GlobalTheme, ColorTheme, FontTheme);

export default theme;
