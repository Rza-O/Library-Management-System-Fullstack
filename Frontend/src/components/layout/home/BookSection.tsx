import { useGetBooksQuery } from "@/redux/api/baseApi";
import Loading from "../common/Loading";
import BookCard from "./BookCard";
import type { IBook } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import ViewModal from "./modals/ViewModal";

const BookSection = () => {
   const { data: books, isLoading } = useGetBooksQuery({ limit: 9 });
   const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

   if (isLoading) {
      return <Loading />;
   }

   return (
      <section className="max-w-7xl mx-auto px-4 py-8 text-center">
         <h1 className="mb-6 text-2xl md:text-4xl font-semibold">
            Our <span className="text-red-500 italic">Collection</span>
         </h1>

         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books?.data?.map((book: IBook) => (
               <BookCard
                  key={book._id}
                  book={book}
                  onView={() => setSelectedBookId(book._id)}
               />
            ))}
         </div>

         <div className="mt-10">
            <Link to="/all-books" aria-label="See more books">
               <Button className="rounded-2xl shadow-lg hover:shadow-red-600 transition-transform transform hover:scale-105">
                  See More
               </Button>
            </Link>
         </div>

         <ViewModal bookId={selectedBookId} onClose={() => setSelectedBookId(null)} />
      </section>
   );
};

export default BookSection;
