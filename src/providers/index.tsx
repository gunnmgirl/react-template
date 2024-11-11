import { ThemeProvider } from "providers/ThemeProvider";
import { RouterProvider } from "providers/RouterProvider";
import { ReactQueryProvider } from "providers/ReactQueryProvider";
import { ColorModeProvider } from "components/ui/ColorMode";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <ReactQueryProvider>
          <RouterProvider />
          {children}
        </ReactQueryProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
