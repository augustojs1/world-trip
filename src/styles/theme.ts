import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      gray: {
        "50": "#DADADA",
        "500": "#999999",
        "800": "#47585B",
      },
    },
    white: {
      white: {
        "00": "#F5F8FA",
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.00",
        color: "gray.800",
      },
    },
  },
});
