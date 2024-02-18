import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";

// utils
import { HarbourSpaceApiClient } from "utils";

// providers
import { HarbourSpaceApiClientProvider } from "providers";

// views
import ScholarshipView from "./ScholarshipView";

// styles
import "./index.css";

const queryClient = new QueryClient();

const harbourSpaceClient = new HarbourSpaceApiClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HarbourSpaceApiClientProvider client={harbourSpaceClient}>
      <ScholarshipView />
    </HarbourSpaceApiClientProvider>
  </QueryClientProvider>
);
