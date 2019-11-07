# "Ask Nicely"
"Ask Nicely" is a web application that allows a user to create a survey. They can create 4 response options for that one survey.  Other users can then log in, and vote on that survey.  The app records how many votes each option has, and can be displayed for all users to see.  Users can view all surveys that have been created, and vote on them. A user can also update and delete there own survey, but not others.

## Technologies Used
JavaScript, MongoDB, Handlebars, jQuery, Express, HTML, CSS, Bootstrap, Postman, Mongoose, Heroku, GitHub


## Links
-   [Frontend-Repo](https://github.com/ga-team-5/survey-client)
-   [Backend-Repo](https://github.com/ga-team-5/survey-api)
-   [Deployed-Frontend](https://ga-team-5.github.io/survey-client/)
-   [Deployed-Backend](https://fast-woodland-73230.herokuapp.com/)

## API Paths and Methods

| Method | URL Pattern  |
|:-------|:-------------|
| POST    | `/sign-up` |
| POST    | `/sign-up` |
| PATCH   | `/change-password` |
| DELETE  | `/sign-out` |

## Surveys

| Method | URL Pattern  |
|:-------|:-------------|
| POST    | `/surveys` |
| GET    | `/surveys` |
| GET   | `/surveys/:id` |
| PATCH  | `/surveys/:id` |
| DELETE   | `/surveys/:id` |

## Votes
| Method | URL Pattern  |
|:-------|:-------------|
| POST    | `/votes` |
| GET    | `/votes` |

## Entity Relationship Diagram:
<a href="https://imgur.com/S6lApeD"><img src="https://i.imgur.com/S6lApeD.png" title="source: imgur.com" /></a>

## Development Team
-   [Griffin Hood](https://github.com/ghood97)
-   [Harjinder Saini](https://github.com/khalsaniwas)
-   [Dasha Khobotova](https://github.com/dashakho)
-   [Jason Beharry](https://github.com/behappy23)
