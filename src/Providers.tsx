import { ChakraProvider } from "@chakra-ui/react";

import theme from "theme";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
};
