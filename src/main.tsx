import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = lazy(() => import("./pages/Home.tsx"));
const Experience = lazy(() => import("./pages/Experience.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Education = lazy(() => import("./pages/Education.tsx"));

// import { gsapLoader } from "./gaspLoader.tsx";
import AnimatedBackground from "./components/AnimatedBackground.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        path: "/",
        // loader: gsapLoader,
      },
      {
        element: <About />,
        path: "/about",
        // loader: gsapLoader,
      },
      {
        element: <Experience />,
        path: "/experience",
        // loader: gsapLoader,
      },
      {
        element: <Education />,
        path: "/education",
        // loader: gsapLoader,
      },
      {
        element: <Contact />,
        path: "/contact",
        // loader: gsapLoader,
      },
      {
        element: <Home />,
        path: "*",
        // loader: gsapLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* TODO: work on loader */}
    <Suspense fallback={<div>Loading</div>}>
      <RouterProvider router={router} />
      {/* Animated background needs to be loaded outside of router provider as it was blocking animation to start */}
      <AnimatedBackground />
    </Suspense>
  </StrictMode>
);
