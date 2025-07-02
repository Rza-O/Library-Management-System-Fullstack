const Banner = () => {
   return (
      <div className="relative w-full h-64 md:h-96 lg:h-[500px] bg-cover bg-center bg-[url('/banner2.jpg')] flex items-center justify-center">
         <div className="absolute inset-0 bg-black opacity-50" />
         <h1 className="relative text-center text-red-600 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold px-2 sm:px-4">
            Welcome to <strong className="text-red-500 italic">LibraBox</strong>
            <br />
            <span className="block text-white text-sm sm:text-base md:text-2xl lg:text-3xl font-medium mt-2">
               Browse our collection for your next book
            </span>
         </h1>
      </div>
   );
};

export default Banner;
