# AniInfo

A simple application for all anime fans. Here you will find detailed information about your favorite series and movies: description, rating, genres, ranking and much more. The easy interface and convenient navigation allow you to quickly find the information you need and immerse yourself in the world of anime.


## 🚀 Basic functions

-  Search anime by title
-  Pagination
-  View detailed information about anime
-  Animation showing some information about the anime when you hover over the card (Works only on PC).
-  Collections page allows users to browse anime grouped by genres such as martial arts, fantasy, romance, and more. This makes it easier to find anime that matches the user's interests and helps them discover new works in the chosen genre.
-  Simple slider to display interesting anime


## 🛠 Technologies

-  **React** - a library for building user interfaces.
-  **Framer Motion** - for smooth animation.
-  **Tailwind CSS** - is a utilitarian CSS framework for flexible styling.
-  **React Router DOM @5.2.0** - a library for routing and navigation in React, enabling smooth page transitions and dynamic content based on the URL.
-  **React Query** - a library for fetching, caching, and syncing data in React, simplifying server-state management with hooks.
-  **Swiper** - a modern touch slider library for creating mobile-friendly and responsive carousels and image galleries in React applications


## 🧑‍💻 The usePageManager hook

### usePageManager - is used to manage the current page in an application, such as pagination. It stores the state of the current page and provides functions to navigate to the next or previous page.

#### States

-  **currentPage** - state that stores the current page number. Initially it is set to 1.

#### Methods

-  **handleNextPagePagination** - a function that increases the current page number by 1 (go to the next page)
-  **handlePreviousPagePagination** - a function that decreases the current page number by 1 (goes to the previous page)

## 🧑‍💻 The useSearchbar hook

### useSearchbar - is used to manage the state of the search field in the application. It stores the value entered by the user and provides a function to update that value.

#### States

-  **queryInputValue** - state that stores the value entered in the search field. Initially, it is empty.

#### Methods

-  **handleGetQueryInputValue** - a function that updates the queryInputValue state with the new value passed as an argument


## ⚙️ Installation and launch

1. Make sure you have **Node.js** installed
2. Clone the repository
   git clone https://github.com/korniienkodd21/AniInfo.git
3. Go to the project folder
4. Install the dependencies (yarn install) or (npm install)
5. Run the project (yarn run dev) or (npm run dev)
