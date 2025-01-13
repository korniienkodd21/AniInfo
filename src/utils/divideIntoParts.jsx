export const divideIntoParts = (data, numberOfParts) => {
   const partSize = Math.ceil(data?.length / numberOfParts);
   const parts = [];

   for (let i = 0; i < numberOfParts; i++) {
      const start = i * partSize;
      const end = start + partSize;

      parts.push(data?.slice(start, end));
   }

   return parts;
};
