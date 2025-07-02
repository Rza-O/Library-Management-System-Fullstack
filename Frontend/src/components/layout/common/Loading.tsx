import { PropagateLoader } from "react-spinners";

const Loading = ({ height = "h-screen" }) => {
   return (
      <div className={`w-full ${height} flex items-center justify-center`}>
         <PropagateLoader color="#f90000" />
      </div>
   );
};

export default Loading;
