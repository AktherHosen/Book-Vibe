import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";

import BookDetails from "../components/BookDetails/BookDetails";
import Read from "../components/Read/Read";
import Whislist from "../components/Whislist/Whislist";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import Testimonial from "../pages/Testimonial/Testimonial";
import Pricing from "../pages/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("../book.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        children: [
          {
            path: "read",
            element: <Read />,
          },
          {
            path: "wishlist",
            element: <Whislist />,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);
export { router };
