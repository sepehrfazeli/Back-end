create table books_authors(
  book_isbn varchar(50) references
  book(isbn),
  author_email varchar(100) references author(email),
  primary key (book_isbn,author_email)
);
select constraint_name, table_name, column_name
from information_schema.key_column_usage
where table_name = 'books_authors';