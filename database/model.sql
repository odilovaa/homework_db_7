CREATE DATABASE transaction;

CREATE TABLE users(
    id serial primary key,
    full_name varchar(32) not null,
    password text not null,
    balance text not null,
    created_at timestamp default current_timestamp
);

CREATE TABLE service(
    id serial primary key,
    title text not null, 
    cost text not null, 
    user_id INT REFERENCES users(id),
    created_at timestamp default current_timestamp
);

CREATE TABLE transactions(
    id serial primary key,
    from_id integer not null, 
    to_id integer not null, 
    cost text not null,
    created_at timestamp default current_timestamp
);