import Loading from "@/components/layout/common/Loading";
import BookCard from "@/components/layout/home/BookCard";
import { AddBookModal } from "@/components/layout/home/modals/AddBookModal";
import ViewModal from "@/components/layout/home/modals/ViewModal";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";

const AllBooks = () => {
   const [page, setPage] = useState(1);
   const limit = 10;
   const { data: books, isLoading } = useGetBooksQuery({ page, limit });
   const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

   if (isLoading) {
      return <Loading />
   }

   const total = books?.total || 0;
   const totalPages = Math.ceil(total / limit);

   return (
      <div className="m-4">
         <div className="flex justify-between items-center mb-3">
            <h1 className="mb-2 text-sm md:text-xl lg:text-3xl">All <strong className="text-red-500 italic">Books</strong></h1>
            {/* <Button className="rounded-2xl shadow-lg hover:shadow-red-600 transition "><Plus />Add Book</Button> */}
            <AddBookModal />
         </div>
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  ">
            {!isLoading && books?.data?.map((book: IBook) => (
               <BookCard key={book.isbn} book={book} onView={() => setSelectedBookId(book._id)} />
            ))}
         </div>
         {/* Pagination */}
         {totalPages > 1 && (
            <Pagination className="mt-8">
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        aria-disabled={page === 1}
                     />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, idx) => (
                     <PaginationItem key={idx}>
                        <PaginationLink
                           isActive={page === idx + 1}
                           onClick={() => setPage(idx + 1)}
                        >
                           {idx + 1}
                        </PaginationLink>
                     </PaginationItem>
                  ))}
                  <PaginationItem>
                     <PaginationNext
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        aria-disabled={page === totalPages}
                     />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         )}
         <ViewModal
            bookId={selectedBookId}
            onClose={() => setSelectedBookId(null)}
         />
      </div>
   );
};

export default AllBooks;