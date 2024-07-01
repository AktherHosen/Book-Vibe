import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import BookDetails from "../components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("./book.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
    ],
  },
]);
export { router };
