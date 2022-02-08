import { mode } from "@chakra-ui/theme-tools";

const GlobalTheme = {
  fonts: {
    body: "'Spoqa Han Sans Neo', 'sans-serif'",
    heading: "'Spoqa Han Sans Neo', 'sans-serif'",
    mono: "'Spoqa Han Sans Neo', 'sans-serif'",
  },
  styles: {
    global: (props: any) => ({
      body: {
        background: mode("bg.light", "bg.dark")(props),
      },
      "*": {
        "-ms-overflow-style": "none",
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
};

export default GlobalTheme;
