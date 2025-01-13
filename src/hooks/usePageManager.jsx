import { useState, useCallback } from "react";

export const usePageManager = () => {
   const [currentPage, setCurrentPage] = useState(1);

   const handleNextPagePagination = useCallback(
      () => setCurrentPage((prevPage) => prevPage + 1),
      []
   );

   const handlePreviousPagePagination = useCallback(
      () => setCurrentPage((prevPage) => prevPage - 1),
      []
   );

   return {
      currentPage,
      handleNextPagePagination,
      handlePreviousPagePagination,
   };
};
