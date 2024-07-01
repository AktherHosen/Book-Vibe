import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import BookDetails from "../components/BookDetails/BookDetails";
import Read from "../components/Read/Read";
import Whislist from "../components/Whislist/Whislist";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
            path: "whislist",
            element: <Whislist />,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);
export { router };
