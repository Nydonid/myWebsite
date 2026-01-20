-- psql -h localhost -U myPostgres -d recipes_db --TO CONNECT TO DATABASE IN TERMINAL

-- WARNING DO NOT RUN IN PRODUCTION UNLESS 100% SURE WHAT YOU DO

DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
     recipe_id SERIAL PRIMARY KEY,
     title VARCHAR(100) NOT NULL,
     prep_time VARCHAR(15),
     description VARCHAR(1000),
     instructions VARCHAR(5000)[] NOT NULL,
     imageurls VARCHAR(500)[] NOT NULL
);

CREATE TABLE ingredients (
     ingredient_id SERIAL PRIMARY KEY,
     recipe_id INTEGER REFERENCES recipes(recipe_id) ON DELETE CASCADE,
     amount NUMERIC,
     unit VARCHAR(100),
     name VARCHAR(200) NOT NULL
);