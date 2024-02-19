import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";

// utils
import { HarbourSpaceApiClient } from "utils";

// providers
import { HarbourSpaceApiClientProvider } from "providers";

// views
import { Home, ScholarshipView } from "views";

// styles
import "./index.css";

const queryClient = new QueryClient();

const harbourSpaceClient = new HarbourSpaceApiClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HarbourSpaceApiClientProvider client={harbourSpaceClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/:slug" element={<ScholarshipView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HarbourSpaceApiClientProvider>
  </QueryClientProvider>
);
