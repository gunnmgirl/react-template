import { ThemeProvider } from "providers/ThemeProvider";
import { RouterProvider } from "providers/RouterProvider";
import { ReactQueryProvider } from "providers/ReactQueryProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <RouterProvider />
        {children}
      </ReactQueryProvider>
    </ThemeProvider>
  );
};
