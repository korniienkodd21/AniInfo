const Text = ({ className = "", text = "", children }) => {
   return <span className={className}>{text.length || text ? text : children}</span>;
};

export default Text;
