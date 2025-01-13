import homeIcon from "./../../assets/icons/header-home-logo.svg";
import topAnimeIcon from "./../../assets/icons/header-top-anime-logo.svg";
import collectionsIcon from "./../../assets/icons/header-collection-icon.svg";
import genresIcon from "./../../assets/icons/header-genres-icon.svg";

export const headerNavigationLinks = [
   {
      navigationLinkId: 1,
      navigationLinkImg: homeIcon,
      navigationLinkText: "Home",
      path: "/anime",
   },
   {
      navigationLinkId: 2,
      navigationLinkImg: topAnimeIcon,
      navigationLinkText: "Top anime",
      path: "/top-anime",
   },
   {
      navigationLinkId: 3,
      navigationLinkImg: collectionsIcon,
      navigationLinkText: "Collections",
      path: "/collections",
   },
   {
      navigationLinkId: 4,
      navigationLinkImg: genresIcon,
      navigationLinkText: "Genres",
      path: "/genres",
   },
];
