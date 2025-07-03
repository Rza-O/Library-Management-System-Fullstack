import { useGetBooksQuery } from "@/redux/api/baseApi";
import Loading from "../common/Loading";
import BookCard from "./BookCard";
import type { IBook } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import ViewModal from "./modals/ViewModal";

const BookSection = () => {

   const { data: books, isLoading } = useGetBooksQuery(undefined);
   const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

   if (isLoading) {
      return <Loading />
   }


   console.log("🚀 ~ BookSection ~ books:", books)

   return (
      <div className="text-center m-4">
         <h1 className="mb-2 text-sm md:text-xl lg:text-3xl">Our <strong className="text-red-500 italic">Collection</strong></h1>
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  ">
            {!isLoading && books?.data?.map((book: IBook) => (
               <BookCard key={book.isbn} book={book} onView={() => setSelectedBookId(book._id)} />
            ))}
         </div>
         <div className="mt-4">
            <Link to='all-books'>
               <Button className="rounded-2xl shadow-lg hover:shadow-red-600 transition">See more</Button>
            </Link>
         </div>
         <ViewModal
            bookId={selectedBookId}
            onClose={() => setSelectedBookId(null)}
         />
      </div>
   );
};

export default BookSection;