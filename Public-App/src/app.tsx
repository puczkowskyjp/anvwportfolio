import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { clientOnly } from "@solidjs/start";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";

const NavBar = clientOnly(() => import("~/components/Nav"));

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={props => (
          <>
            <NavBar />
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
