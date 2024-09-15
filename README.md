**Disclaimer**

For this task I used font-awesome and there were few icons unavailable in free version. Therefore, you might not see them rendered in their respective components.

Secondly, I use reactivity API instead of utilising any open source state management libraries such as pinia or vuex. I decided this not to over complicate things.

Thirdly, the search feature is only working for the `Home` page as it is clearly stated in the technical assignment to be functioning on the `Home` page.

In addition, I also add additional aliases in webpack config file to make it possible for developer to import files with absolute paths.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project make a request to API service to retrieve list of categories and renders them on the home page. You can filter these categories using filter box. Clicking on single category will redirect you to articles list page.

### Built With

Below are the core technologies I used for this project.

* [Vuejs](https://vuejs.org/)
* [Sass](https://sass-lang.com/)
* [Github](https://github.com/)
* [Axios](https://axios-http.com/)
* [Font-Awesome](https://fontawesome.com/)
* [Moment](https://momentjs.com/)


## Getting Started

To run this project, please follow the steps below.

### Prerequisites

To install node 12.22.12, run the command below.

* node
  ```sh
  nvm install v12.22.12
  ```

### Installation

1. Clone the repo
   ```sh
   git@github.com:zafar-saleem/tawkto.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


## Usage

To run the project, below command will help.

  ```sh
  npm start
  ```


<!-- FOLDER STRUCTURE -->
## Folder Structure

  ```bash
  .
├── README.md
├── data
│   └── data.json
├── design
│   ├── kb-category-content.psd
│   └── kb-home.psd
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.vue
│   ├── app.js
│   ├── assets
│   │   └── fonts
│   │       ├── fa-regular-400.eot
│   │       ├── fa-regular-400.svg
│   │       ├── fa-regular-400.ttf
│   │       ├── fa-regular-400.woff
│   │       ├── fa-regular-400.woff2
│   │       ├── fa-solid-900.eot
│   │       ├── fa-solid-900.svg
│   │       ├── fa-solid-900.ttf
│   │       ├── fa-solid-900.woff
│   │       └── fa-solid-900.woff2
│   ├── components
│   │   ├── breadcrumb
│   │   │   ├── Breadcrumb.vue
│   │   │   └── Breadcumb.scss
│   │   ├── category-info
│   │   │   ├── CategoryInfo.scss
│   │   │   └── CategoryInfo.vue
│   │   ├── header
│   │   │   ├── Header.scss
│   │   │   └── Header.vue
│   │   └── time-ago
│   │       ├── TimeAgo.scss
│   │       └── TimeAgo.vue
│   ├── font-awesome.css
│   ├── pages
│   │   ├── category
│   │   │   ├── Category.vue
│   │   │   └── components
│   │   │       └── article-list
│   │   │           ├── ArticleList.scss
│   │   │           └── ArticleList.vue
│   │   └── home
│   │       └── Home.vue
│   ├── router
│   │   └── index.js
│   ├── scss
│   │   ├── _variables.scss
│   │   └── main.scss
│   └── store
│       └── index.js
└── webpack.config.js
  ```


## Live
[Click Here for live demo](https://youtu.be/UwG9qptHEx0)
