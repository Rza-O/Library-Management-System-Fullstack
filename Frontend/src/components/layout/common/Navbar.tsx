import { Link } from "react-router";

const Navbar = () => {
   return (
      <nav className="bg-black border-b border-red-500/20">
         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1">
               <h1 className="text-xl md:text-3xl font-bold">
                  <span className="text-red-500">Libra</span>Box
               </h1>
            </Link>

            {/* Links */}
            <div className="flex gap-4 items-center text-sm md:text-base">
               <Link
                  to="/"
                  className="hover:text-red-500 transition-colors"
               >
                  Home
               </Link>
               <Link
                  to="/all-books"
                  className="hover:text-red-500 transition-colors"
               >
                  Books
               </Link>
               <Link
                  to="/summary"
                  className="hover:text-red-500 transition-colors"
               >
                  Summary
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
