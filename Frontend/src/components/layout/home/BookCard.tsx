import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { IBook } from "@/types";

interface IBookCardProp {
   book: IBook
}

const BookCard = ({ book }: IBookCardProp) => {
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
               <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <Badge className="bg-red-600 text-white capitalize">{book.genre.toLowerCase()}</Badge>
                  <Badge className={book.available ? "bg-green-600" : "bg-gray-600"}>
                     {book.available ? "Available" : "Not Available"}
                  </Badge>
               </div>
               <p className="text-xs text-gray-400 mt-2">ISBN: {book.isbn}</p>
               <p className="text-xs text-gray-400">Copies: {book.copies}</p>
            </div>
         </CardContent>
      </Card>
   );
};

export default BookCard;