import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";

interface ViewModalProps {
   bookId: string | null;
   onClose: () => void;
}

const ViewModal = ({ bookId, onClose }: ViewModalProps) => {
   const { data: response, isLoading, isError } = useGetSingleBookQuery(bookId!, {
      skip: !bookId,
   });
   const book = response?.data;

   return (
      <Dialog open={!!bookId} onOpenChange={onClose}>
         <DialogContent className="bg-black text-white max-w-lg md:max-w-2xl rounded-xl">
            <DialogHeader className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
               <DialogTitle className="text-red-500 text-xl">Book Details</DialogTitle>
            </DialogHeader>

            {isLoading && <p className="text-center">Loading...</p>}
            {isError && <p className="text-center text-red-600">Error loading book.</p>}
            {book && (
               <div className="space-y-3">
                  <img
                     src={book.image}
                     alt={book.title}
                     className="w-full h-64 object-cover rounded-lg border border-red-600"
                  />
                  <h2 className="text-2xl font-bold text-red-500">{book.title}</h2>
                  <p className="text-gray-400">by {book.author}</p>
                  <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded capitalize">
                     {book.genre.toLowerCase()}
                  </span>
                  <p className="text-sm mt-2">{book.description}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                     <div>ISBN: <span className="text-gray-300">{book.isbn}</span></div>
                     <div>Copies: <span className="text-gray-300">{book.copies}</span></div>
                     <div className="space-x-5">Available:
                        <span className={book.available ? "text-green-500 ml-1" : "text-gray-500 ml-1"}>
                           {book.available ? "Yes" : "No"}
                        </span>
                     </div>
                  </div>
               </div>
            )}
         </DialogContent>
      </Dialog>
   );
};

export default ViewModal;
