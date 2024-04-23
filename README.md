# Hacker News: the frontend

This repo is the frontend part of a project developed by me, Carolina, for Good Tape.

The project uses the Hacker News API provided by Ycombinator. More info on the [backend part of the project](https://github.com/carolinaviero/hacker-news-be).

The frontend is responsible for displaying the 10 stories, sorted by points in descending order. Each story shows you the title, the author (and their karma score), the date and how many points it has received so far.
You can use the search bar to search within the stories shown, and at the bottom of the page you can refresh the stories and get 10 new ones.

## Running the app

Please make sure you already have [the backend](https://github.com/carolinaviero/hacker-news-be) up and running. After that, you can clone this repo and run:

### `npm install`

to make sure you install all the dependencies and then run:

### `npm start`

You should then be able to see the app the app when accessing [http://localhost:3000](http://localhost:3000).
