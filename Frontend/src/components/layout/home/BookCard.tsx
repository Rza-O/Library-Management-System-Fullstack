import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { IBook } from "@/types";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface IBookCardProp {
   book: IBook,
   onView: () => void;
}

const BookCard = ({ book, onView }: IBookCardProp) => {
   return (
      <Card className="bg-black text-white rounded-2xl shadow-lg hover:shadow-red-600 transition">
         <CardHeader>
            <CardTitle className="text-red-500 text-xl">{book.title}</CardTitle>
            <CardDescription className="text-gray-400">by {book.author}</CardDescription>
         </CardHeader>
         <CardContent className="flex flex-col md:flex-row gap-4">
            <img
               src={book.image}
               alt={book.title}
               className="w-full md:w-32 h-48 object-cover rounded-xl border border-red-500"
            />
            <div className="flex flex-col justify-between">
               <p className="text-sm text-gray-300 mb-2 line-clamp-4">{book.description}</p>
               <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
                  <Badge className="bg-red-600 text-white capitalize">{book.genre.toLowerCase()}</Badge>
                  <Badge className={book.available ? "bg-green-600" : "bg-gray-600"}>
                     {book.available ? "Available" : "Not Available"}
                  </Badge>
               </div>
               <p className="text-xs text-gray-400 mt-2">ISBN: {book.isbn}</p>
               <p className="text-xs text-gray-400">Copies: {book.copies}</p>
               {/* 3 buttons */}
               <div className="flex gap-2 mt-4 justify-end">
                  <Button
                     size="icon"
                     variant="ghost"
                     className="text-red-500 hover:bg-red-600 hover:text-white transition"
                     onClick={onView}
                  >
                     <Eye className="h-5 w-5" />
                  </Button>
                  <Button
                     size="icon"
                     variant="ghost"
                     className="text-yellow-500 hover:bg-yellow-600 hover:text-white transition"
                     onClick={() => console.log(`Edit book ${book.isbn}`)}
                  >
                     <Pencil className="h-5 w-5" />
                  </Button>
                  <Button
                     size="icon"
                     variant="ghost"
                     className="text-red-700 hover:bg-red-700 hover:text-white transition"
                     onClick={() => console.log(`Delete book ${book.isbn}`)}
                  >
                     <Trash2 className="h-5 w-5" />
                  </Button>
               </div>
            </div>

         </CardContent>
      </Card>
   );
};

export default BookCard;