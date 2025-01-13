import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PartOfGenresList = ({ data }) => {
   if (!data || data.length == 0) {
      return null;
   }

   return (
      <ul
         className="
         flex flex-col gap-y-2 w-full xsm:w-[calc(50%-8px)]
         md:w-[calc(33%-9px)] lg:w-[calc(20%-13px)]
         "
      >
         {data.map((genre) => (
            <li key={genre.mal_id}>
               <Link className="hover:text-raspberry-pink" to={`/genres/${genre.mal_id}`}>
                  {genre.name}
               </Link>
            </li>
         ))}
      </ul>
   );
};

export default PartOfGenresList;
