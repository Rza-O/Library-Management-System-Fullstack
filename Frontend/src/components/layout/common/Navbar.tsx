import { Link } from "react-router";

const Navbar = () => {
   return (
      <div className="flex h-16 justify-between items-center">
         {/* Logo */}
         <div className="p-4">
            <h1 className="text-xl lg:text-4xl"><strong className="text-red-500">Libra</strong>Box</h1>
         </div>
         {/* Links */}
         <div className="gap-2 flex p-4">
            <Link to='/' className="text-sm lg:text-xl hover:text-red-500">Home</Link>
            <Link to='/all-books' className="text-sm lg:text-xl hover:text-red-500">Books</Link>
            <Link to='/add-book' className="text-sm lg:text-xl hover:text-red-500">Summary</Link>
         </div>
      </div>
   );
};

export default Navbar;