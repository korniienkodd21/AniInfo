import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

import Container from "./ui/Container.jsx";
import App from "./App.jsx";

import "./index.css";

const client = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

createRoot(document.getElementById("root")).render(
   <QueryClientProvider client={client}>
      <Container>
         <BrowserRouter basename="/AniInfo/">
            <App />
         </BrowserRouter>
      </Container>
   </QueryClientProvider>
);
