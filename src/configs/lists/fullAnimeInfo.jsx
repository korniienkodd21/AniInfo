export const getFullAnimeInfo = ({
   title,
   episodes,
   episodeDuration,
   genres,
   rank,
   score,
   rating,
   year,
   studios,
   producers,
}) => [
   {
      titleId: 1,
      titleLabel: "Title:",
      titleValue: title,
   },
   {
      titleId: 2,
      titleLabel: "Episodes:",
      titleValue: episodes ? `${episodes} episode(s)` : "",
   },
   {
      titleId: 3,
      titleLabel: "Episode duration:",
      titleValue: episodeDuration,
   },
   {
      titleId: 4,
      titleLabel: "Genres:",
      titleValue: genres,
   },
   {
      titleId: 5,
      titleLabel: "Rank:",
      titleValue: rank ? `#${rank}` : "",
   },
   {
      titleId: 6,
      titleLabel: "Score:",
      titleValue: `★ ${score}`,
   },
   {
      titleId: 7,
      titleLabel: "Rating:",
      titleValue: rating,
   },
   {
      titleId: 8,
      titleLabel: "Year:",
      titleValue: year,
   },
   {
      titleId: 9,
      titleLabel: "Studios:",
      titleValue: studios,
   },
   {
      titleId: 10,
      titleLabel: "Producers:",
      titleValue: producers,
   },
];
