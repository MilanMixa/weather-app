import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const ReactQueryProvider: FC<any> = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools position="bottom-right" />
      )}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
