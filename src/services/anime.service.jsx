export const AnimeService = {
   getRandomAnime: async () => (await fetch("https://api.jikan.moe/v4/random/anime")).json(),
   getAnimeListWithLimit: async (page) =>
      (await fetch(`https://api.jikan.moe/v4/anime?limit=24&page=${page}`)).json(),
   getFullPageAnimeList: async () => (await fetch("https://api.jikan.moe/v4/anime")).json(),
   getAnimeGenres: async () => (await fetch("https://api.jikan.moe/v4/genres/anime")).json(),
   getAnimeByTitle: async (animeTitle) =>
      (await fetch(`https://api.jikan.moe/v4/anime?q=${animeTitle}`)).json(),
   getTopAnimeWithLimit: async (page) =>
      (await fetch(`https://api.jikan.moe/v4/top/anime?limit=24&page=${page}`)).json(),
   getAnimeByGenre: async (genreID, page) =>
      (
         await fetch(`https://api.jikan.moe/v4/anime?genres=${genreID}&limit=24&page=${page}`)
      ).json(),
   getRecommendedAnimeList: async () =>
      (await fetch("https://api.jikan.moe/v4/recommendations/anime")).json(),
   getFullAnimeInfo: async (animeId) =>
      (await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)).json(),
   getCollectionAnimeList: async (genreID) =>
      (await fetch(`https://api.jikan.moe/v4/anime?genres=${genreID}&limit=24`)).json(),
};
