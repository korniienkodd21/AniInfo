import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";

import Home from "../pages/Home";
import AnimeInfo from "../pages/AnimeInfo";
import TopAnime from "../pages/TopAnime";
import Collections from "../pages/Collections";
import AnimeByGenre from "../pages/AnimeByGenre";
import CollectionsByGenre from "../pages/CollectionsByGenre";
import Genres from "../pages/Genres";

import { routePaths } from "../constants/routes";

const Pages = () => {
   return (
      <Switch>
         <Route exact path="/">
            <Redirect to={routePaths.redirectPath} />
         </Route>
         <Route exact path={routePaths.animePath} component={Home} />
         <Route path={routePaths.animeInfoPath} component={AnimeInfo} />
         <Route exact path={routePaths.topAnimePath} component={TopAnime} />
         <Route path={routePaths.topAnimeInfoPath} component={AnimeInfo} />
         <Route exact path={routePaths.collectionsPath} component={Collections} />
         <Route exact path={routePaths.collectionsByGenrePath} component={CollectionsByGenre} />
         <Route path={routePaths.collectionAnimeInfoPath} component={AnimeInfo} />
         <Route exact path={routePaths.genresPath} component={Genres} />
         <Route exact path={routePaths.animeByGenrePath} component={AnimeByGenre} />
         <Route path={routePaths.genreAnimeInfoPath} component={AnimeInfo} />
      </Switch>
   );
};

export default Pages;
