import { useState } from "react";

export const useSearchbar = () => {
   const [queryInputValue, setQueryInputValue] = useState("");

   const handleGetQueryInputValue = (queryValue) => {
      setQueryInputValue(queryValue);
   };

   return {
      queryInputValue,
      handleGetQueryInputValue,
   };
};
