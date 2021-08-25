/*i use microsoft sql server 2018 with windows authentication
made some configurations concerning connection from sql server manager
activated tcp/ip connection and also condfiguring the localhost to a specific port(as far as i remember)
also started user agent program running in the background(wasnt easy i ha to go to services and change it from there)

i created a database called favourite_books
and i created a table called books*/

CREATE TABLE books (
    wokr_id int primary key,
    title varchar(100),
	author varchar(100)
);
/*that was the initital table for storing book information sent from client js to server node js 
making work_id primary key was the best solution because node js couldnt insert duplicates in the database
and i could handle messages much easier

for the needs of 3rd exercise i made another column called review
use could make a review about the book and store it there*/

ALTER TABLE books
ADD review varchar(800);

/* so everytime i connect to database localhost do what my request wants to(ADD,DELETE,UPDATE) and return a message of course with async/await and promises */