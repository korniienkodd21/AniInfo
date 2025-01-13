const Image = ({ className = "", alt, src, width = "", height = "" }) => {
   return <img className={className} alt={alt} src={src} width={width} height={height} />;
};

export default Image;
