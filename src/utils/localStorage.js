import toast from "react-hot-toast";

const getBooksFromLS = (key) => {
  let books = [];
  const storedBooks = localStorage.getItem(key);
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

const saveBookToLS = (book, type) => {
  let readBooks = getBooksFromLS("read");
  let wishlistBooks = getBooksFromLS("wishlist");

  const isExistInRead = readBooks.find((b) => b.bookId === book.bookId);
  const isExistInWishlist = wishlistBooks.find((b) => b.bookId === book.bookId);

  if (type === "read" && isExistInRead) {
    return toast.error("You have already Whislist this books!");
  } else if (type === "wishlist" && (isExistInRead || isExistInWishlist)) {
    return toast.error("You have already Read this books!");
  }

  if (type === "read") {
    readBooks.push(book);
    localStorage.setItem("read", JSON.stringify(readBooks));
    toast.success("Book added to Read List successfully!");
  } else if (type === "wishlist") {
    wishlistBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(wishlistBooks));
    toast.success("Book added to Wishlist successfully!");
  }
};

export { saveBookToLS, getBooksFromLS };
