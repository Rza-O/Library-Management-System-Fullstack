import App from "@/App";
import AllBooks from "@/pages/AllBooks";
import Home from "@/pages/Home";
import Summary from "@/pages/Summary";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
   {
      path: '/',
      Component: App,
      children: [
         {
            index: true,
            Component: Home
         },
         {
            path: 'all-books',
            Component: AllBooks
         },
         {
            path: 'summary',
            Component: Summary
         }
      ]
   }
])

export default router;