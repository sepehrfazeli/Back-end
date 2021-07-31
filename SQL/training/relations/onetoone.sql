CREATE TABLE book_details (
  id integer primary key,
  book_isbn varchar(50) references
  book(isbn) unique,
  rating decimal,
  language varchar(10),
  keywords text[],
  date_published date
);
select constraint_name, table_name, column_name
from information_schema.key_column_usage
where table_name = 'book_details';

INSERT INTO book VALUES (
  'Learn PostgreSQL',
  '123457890',
  100,
  2.99,
  'Great course',
  'Codecademy'
);

INSERT INTO book_details VALUES (
  1,
  '123457890',
  3.95,
  'English',
  '{sql, postgresql, database}',
  '2020-05-20'
);

INSERT INTO book_details VALUES (
  2,
  '123457890',
  3.95,
  'French',
  '{sql, postgresql, database}',
  '2020-05-20'
);
select book.title,
book.price,
book_details.language,
book_details.rating
from book, book_details
where book.isbn = book_details.book_isbn;








