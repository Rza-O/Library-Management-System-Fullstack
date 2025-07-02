import { useGetBooksQuery } from "@/redux/api/baseApi";
import Loading from "../common/Loading";
import BookCard from "./BookCard";
import type { IBook } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const BookSection = () => {

   const { data, isLoading } = useGetBooksQuery(undefined);
   const books = data?.data;

   if (isLoading) {
      return <Loading />
   }


   console.log("🚀 ~ BookSection ~ books:", books)

   return (
      <div className="text-center m-4">
         <h1 className="mb-2 text-sm md:text-xl lg:text-3xl">Our <strong className="text-red-500 italic">Collection</strong></h1>
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  ">
            {books.map((book: IBook) => (
               <BookCard key={book.isbn} book={book} />
            ))}
         </div>
         <div className="mt-4">
            <Link to='all-books'>
               <Button className="rounded-2xl shadow-lg hover:shadow-red-600 transition">See more</Button>
            </Link>
         </div>
      </div>
   );
};

export default BookSection;