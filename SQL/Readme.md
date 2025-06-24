# My Project 🚀

Welcome to **My Project**! This is a simple demo to show how to write a proper `.md` file for GitHub.

## Features
- [x] Easy to read
- [x] Markdown syntax
- [ ] Add more content

## SQL Question
''' Which SQL statement is used to add a new column to an existing table? '''
`ALTER TABLE`
EXAMPLE : 
`syntax : ALTER TABLE table_name
ADD COLUMN column_name datatype;` <br/>
For example, to add a column named email of type VARCHAR(255) to the customers table, you would use the following statement:

ALTER TABLE customers
ADD COLUMN email VARCHAR(255);<br/>
<strong>DELETE</strong> :- It's delete a spectifc row or colum when meet thier condition.
<strong>TURNCATE</strong> :- It's delete the whole table data . but not the structure. 
<strong>DROP</strong> :- It's delete everything data and Structure. <br/>
Question: Which SQL statement is used to round a numeric column to the nearest integer value?<br/>
Answer : Round <br>
Question : What does the NOT LIKE operator do in SQL? <br>
Naswer : The NOT LIKE operator in SQL is used to filter rows where a column's value does not match a specific pattern.<br>
Example : Example 1: Strings that don’t start with "A"

SELECT * FROM employees
WHERE name NOT LIKE 'A%'; <br>
This returns all employees whose names do not start with "A".

    Question : What does the JOIN keyword do in SQL?
    Answer : Returns only matched rows from both tables

********************************
Question: What does the UNION operator do in SQL? <br>
Answet : Combines rows from two or more tables and removes duplicates
********************************
Question: How can you calculate the average age of male customers in the "customers" table?? <br>
Answet : SELECT AVG(age) FROM customers WHERE gender = 'Male';
********************************
Question:How can you retrieve the top 4 movies with the highest ratings from the "movies" table? ? <br>
Answet : SELECT * FROM movies ORDER BY rating DESC LIMIT 4;
********************************
Question: ? <br>
Answet : 
********************************
Question: ? <br>
Answet : 
********************************
Question: ? <br>
Answet : 