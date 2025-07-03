import { useGetSummaryQuery } from "@/redux/api/baseApi";
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";

type BorrowSummaryItem = {
   totalQuantity: number;
   book: {
      title: string;
      isbn: string;
   };
};


const Summary = () => {
   const { data, isLoading, isError } = useGetSummaryQuery(undefined);

   return (
      <div className="m-4">
         <Card className="bg-black text-white rounded-2xl shadow border border-red-500/30 border-t-0 border-r-0 border-l-0">
            <CardHeader>
               <CardTitle className="text-white text-2xl font-semibold text-center">Borrow <strong className="text-red-500 italic">Summary</strong></CardTitle>
            </CardHeader>
            <CardContent>
               {isLoading && (
                  <div className="flex justify-center items-center py-10">
                     <Loader2 className="h-6 w-6 animate-spin text-red-500" />
                  </div>
               )}
               {isError && (
                  <p className="text-center text-red-500">Error loading borrow summary.</p>
               )}
               {!isLoading && data && data.data.length === 0 && (
                  <p className="text-center text-gray-400">No borrow summary found.</p>
               )}
               {!isLoading && data && data.data.length > 0 && (
                  <div className="overflow-x-auto rounded-xl">
                     <Table className="min-w-full">
                        <TableHeader>
                           <TableRow className="border-b border-red-500/30">
                              <TableHead className="text-left text-xs uppercase tracking-wider text-gray-300">
                                 Title
                              </TableHead>
                              <TableHead className="text-left text-xs uppercase tracking-wider text-gray-300">
                                 ISBN
                              </TableHead>
                              <TableHead className="text-left text-xs uppercase tracking-wider text-gray-300">
                                 Total Borrowed
                              </TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {data?.data.map((item: BorrowSummaryItem, idx: number) => (
                              <TableRow
                                 key={idx}
                                 className="hover:bg-zinc-800 transition-colors"
                              >
                                 <TableCell className="py-3 px-4">{item.book.title}</TableCell>
                                 <TableCell className="py-3 px-4 text-gray-400">{item.book.isbn}</TableCell>
                                 <TableCell className="py-3 px-4 text-gray-400">{item.totalQuantity}</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>
               )}
            </CardContent>
         </Card>
      </div>
   );
};

export default Summary;
