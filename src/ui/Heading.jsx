const Heading = ({ className = "", level, text }) => {
   const HeadingLevel = `h${level}`;

   const headingTextSizes = {
      1: "text-vlarge",
      2: "text-large",
      3: "text-medium",
   };

   const headingTextSize = headingTextSizes[level];

   return (
      <HeadingLevel className={`font-semibold break-words ${headingTextSize} ${className}`}>
         {text}
      </HeadingLevel>
   );
};

export default Heading;
