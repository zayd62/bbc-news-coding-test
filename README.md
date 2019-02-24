# BBC Software Engineering 2019/20 Front-end Test
This is a website built using React and Material-UI that allows users to rank articles on a scale of 1 to 10. It obtains the articles as JSON files using the GitHub API from the [BBC Repository](https://github.com/bbc/news-coding-test-dataset "BBC Repository").

> I would like to be considered for all three area's (Native App trainees, Web App trainees and Backend trainees) however, I have a preference for **Backend** but since there is not test for backend, the email stated to complete either code test so I have completed the Web App test.

## Prerequisites

- NodeJS (tested on v10.15.1)
- NPM (tested on v6.4.1)
- tested on Ubuntu 18.04

### How to view

The following commands are to be run in a terminal

1. Clone the GitHub repository ```git clone https://github.com/zayd62/bbc-news-coding-test.git ```
2. Change the working directory ```cd bbc-news-coding-test```
3. install dependencies ```npm install```
4. Run the development server ```npm start```


## API information

The code obtains the article data via the GitHub API. The GitHub API has a limit of 60 requests per hour associated with the originating IP address (see https://developer.github.com/v3/#rate-limiting). The application presents 3 articles therefore there is a limit of viewing the page 20 times.

