psql -h localhost -U myPostgres -d recipes_db --TO CONNECT TO DATABASE IN TERMINAL

CREATE DATABASE recipes_db;

CREATE TABLE recipes(
    recipe_id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    ingredients VARCHAR(50)[] NOT NULL,
    instructions VARCHAR(400)[] NOT NULL,
    imageURLs VARCHAR(50)[]
);