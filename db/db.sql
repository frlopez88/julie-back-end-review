-- Active: 1737679560011@@dpg-cu9e24hu0jms73fe07j0-a.oregon-postgres.render.com@5432@codex_11pa@public
create table bikes 
(
    id serial PRIMARY KEY,
    make text,
    model text,
    year int
);

select * from cars;