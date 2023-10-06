Queries that I run on the server

CREATE TABLE postUsers (
    ID SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    canCreatePosts BOOLEAN DEFAULT FALSE
);

CREATE TABLE posts (
    postID SERIAL PRIMARY KEY,
    postUserID INT REFERENCES postUsers(ID),
    postTitle VARCHAR(255) NOT NULL,
    coverImageUrl VARCHAR(1000),
    body TEXT
);

INSERT INTO postUsers (email, canCreatePosts) VALUES ('myemail@gmail.com', true);