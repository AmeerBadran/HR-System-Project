
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        home
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
      about
      </div>
      )
  },
  {
    path: "contact",
    element: <div>
    contact
    </div>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
