const Footer = () => {
   return (
      <footer className="bg-black text-white border-t border-red-500/20 mt-8">
         <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-400">
               &copy; {new Date().getFullYear()} LibraBox. All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-400 text-xs md:text-sm">
               <a
                  href="#"
                  className="hover:text-red-500 transition-colors"
               >
                  Privacy Policy
               </a>
               <a
                  href="#"
                  className="hover:text-red-500 transition-colors"
               >
                  Terms of Service
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
