import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import ScholarshipView from "./ScholarshipView";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ScholarshipView />
  </QueryClientProvider>
);
