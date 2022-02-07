import { mode } from "@chakra-ui/theme-tools";

const GlobalTheme = {
  styles: {
    global: (props: any) => ({
      body: {
        background: mode("bg.light", "bg.dark")(props),
      },
      "*": {
        "font-family": "'Spoqa Han Sans Neo', 'sans-serif' !important",
        color: mode("modern.500", "modern.50")(props),
      },
    }),
  },
};

export default GlobalTheme;
