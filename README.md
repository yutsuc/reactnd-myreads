# MyReads Project

This app allows you to assign books into different shelves and search for books with predefined serach terms.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md # This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms 
├── package.json
├── public
│   ├── favicon.icon
│   └── index.html
└── src
    ├── App.css
    ├── App.js # Routes different path to different component
    ├── App.test.js
    ├── Book.js # Book component that is in charge of displaying each book
    ├── BooksAPI.js
    ├── Bookshelf.js # Bookshelf component that contains a given list of books
    ├── BookshelfChanger.js # BookshelfChanger component that handles changing a book to a different bookshelf
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    ├── index.js # Added BrowserRouter
    ├── Library.js # Library component that acts as the main page to display different bookshelves
    └── SearchPage.js # SearchPage component that allows you to search for books with predefined search terms
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
