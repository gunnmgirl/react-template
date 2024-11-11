import { ThemeProvider } from "providers/ThemeProvider";
import { RouterProvider } from "providers/RouterProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <RouterProvider />
      {children}
    </ThemeProvider>
  );
};
