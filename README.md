**Disclaimers**

I use `vuejs` for the first time. I am a heavy Reactjs Engineer however, I really enjoyed working on this vuejs project and I would like to transition into vuejs when given the opportunity.

There are certain differences between the design in `Figma` and the design provided in `PDF` file. Design in the pdf file `Category` page, there is `Other Category` section at the bottom, which is missing in `Figma`. Since Figma designs are considered to be production level designs therefore, I followed `Figma` design. In real world, I would communicate with design teams for further clarification.

In this case, I thought it will be time consuming to communicate with HR team and HR communicate with development team and I receive information back from HR(HR would be used as a relay department in this case). I wanted to avoid these delays. I hope this is fine with everyone.

For this task I used font-awesome and there were few icons unavailable in free version. Therefore, you might not see them rendered in their respective components.

Secondly, I use reactivity API instead of utilising any open source state management libraries such as pinia or vuex. I decided this not to over complicate things.

Thirdly, the search feature is only working for the `Home` page as it is clearly stated in the technical assignment to be functioning on the `Home` page.

Furthermore, the font-awesome has solid versions of icons are free therefore, I only used the solid version which are different than in figma design.

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
* [Browserslist](https://github.com/browserslist/browserslist)
* [Visual Studio Code](https://code.visualstudio.com/)


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
