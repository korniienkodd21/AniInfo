import Heading from "../../ui/Heading";

const AnimeQueryTitle = ({ title }) => {
   const displayAnimeQueryTitle = title && title.length ? `Search results: "${title}"` : "";
   return <Heading text={displayAnimeQueryTitle} level={1} />;
};

export default AnimeQueryTitle;
