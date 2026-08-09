-- Widen recipe/ingredient columns to match server/init/database.sql.
-- Needed on any DB volume created before init/database.sql had these sizes
-- (init scripts only run on a fresh/empty volume, so existing DBs diverged).
--
-- Symptom this fixes: saving a recipe with a normal-length image URL failed with
--   ERROR: value too long for type character varying(50)
-- which the server returned as HTTP 500 (previously swallowed silently by the frontend).
--
-- Apply to production:
--   docker exec -i RecipesDB psql -U myPostgres -d recipes_db < server/migrations/001_widen_columns.sql

ALTER TABLE recipes     ALTER COLUMN title        TYPE varchar(100);
ALTER TABLE recipes     ALTER COLUMN description  TYPE varchar(1000);
ALTER TABLE recipes     ALTER COLUMN instructions TYPE varchar(5000)[];
ALTER TABLE recipes     ALTER COLUMN imageurls    TYPE varchar(500)[];
ALTER TABLE ingredients ALTER COLUMN unit         TYPE varchar(100);
ALTER TABLE ingredients ALTER COLUMN name         TYPE varchar(200);