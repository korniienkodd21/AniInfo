import AnimeSearchbarButton from "./AnimeSearchbarButton";

import { useState } from "react";

const AnimeSearchbar = ({ onGetQueryInputValue }) => {
   const [queryInputValue, setQueryInputValue] = useState("");

   const handleGetQueryInputValue = (event) => {
      setQueryInputValue(event.target.value);
   };

   const fetchAnimeByTitle = (event) => {
      event.preventDefault();

      if (queryInputValue) {
         onGetQueryInputValue(queryInputValue);
      }

      setQueryInputValue("");

      return;
   };

   return (
      <form
         className="flex items-center gap-3 relative xsm:w-full sm:w-[50%]"
         onSubmit={fetchAnimeByTitle}
      >
         <input
            className="
            w-full px-8 py-3 rounded-base border-2
          border-raspberry-pink bg-dark-slate-blue
            placeholder:font-light placeholder:text-[#65708C]
            "
            type="text"
            placeholder="Search anime..."
            onChange={handleGetQueryInputValue}
            value={queryInputValue}
         />
         <AnimeSearchbarButton isQueryAnimeInputEmpty={!!queryInputValue} />
      </form>
   );
};

export default AnimeSearchbar;
