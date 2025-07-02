import { useGetBooksQuery } from "@/redux/api/baseApi";
import Loading from "../common/Loading";

const BookSection = () => {

   const { data, isLoading } = useGetBooksQuery(undefined);
   const books = data?.data;

   if (isLoading) {
      return <Loading />
   }

   
   console.log("🚀 ~ BookSection ~ books:", books)



   return (
      <div>
         This is BookSection
      </div>
   );
};

export default BookSection;