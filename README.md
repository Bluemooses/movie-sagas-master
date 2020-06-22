(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# PROJECT NAME

## Description

_Duration: Weekend Challenge_

This weekend's challenge was allowing a user to manage a database of movies, manipulating their descriptions, titles, and removing them from the database.

I tackled this challenge by using a junction table to compare genres to movies, and cross reference that data.  Using SAGA and REDUX to connect to the DB through POOL helped keep things clean, concise, and organized.  

I thoroughly enjoyed this project and will spend some time styling it up and adding some new features in next few months.


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
This app let's you change the details of a movie on the fly, keep track of your changes as long as the server is running.  

1. Main screen loads up, nothing to do but click on a poster.
2. Oh look, more details cool.  There's a couple buttons.
3. Go home?  Edit?  Let's edit.
4. Okay, I can enter a description and title and I guess there's a save button so I click it
5. The button asks me if I'm sure, I'm not really so I don't change it.
6. I see I can go back and that leads me to the details page.
7. I don't want to mess with the details in this database, so I go home and see details on the next movie :)

## Built With

1. React JS
2. Material-UI
3. Chakra-UI/core
4. Node.js
5. SQL

_

## Acknowledgement
Thanks to my instructors Casie, Edan, and Kris, and all the wonderful people I've met along this journey through Prime.  I appreciate the support given to me by friends, family, and my partner Taylor.
## Support
If you have suggestions or issues, please email me at [jacob.brenke@gmail.com](www.google.com)
