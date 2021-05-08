# Learn SQL by Building a Student Database

> Welcome to the SQL Lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello SQL` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. psql login

### 20.1

You are started with two `.csv` files with info about your computer science students. You should take a look at them. The top row in each file has titles, and the rest are values for those titles. You will be adding all that info to a PostgreSQL database. Log into the psql interactive terminal with `psql --username=freecodecamp --dbname=postgres` to get started.

#### HINTS

- Type `psql --username=freecodecamp --dbname=postgres` into the terminal and press enter

## 30. \l

### 30.1

View the existing databases with the `\l` shortcut command to see what's here.

#### HINTS

- Type `\l` into the psql prompt and press enter

## 40. CREATE DATABASE students;

### 40.1

All the info from the CSV files will go into a single database. Create a new database named `students`.

#### HINTS

- Use the `CREATE DATABASE` keywords
- Here's an example: `CREATE DATABASE <database_name>;`
- Type `CREATE DATABASE students;` into the psql prompt and press enter

## 50. \l

### 50.1

View the databases again to make sure it got created.

#### HINTS

- Use the **list** shortcut command in the psql prompt
- Type `\l` into the psql prompt and press enter

## 60. \c students

### 60.1

There it is. Connect to your new database so you can start adding tables.

#### HINTS

- Use the `\c` shortcut command
- Here's an example: `\c <database_name>`
- Type `\c students` in the psql prompt

## 70. CREATE TABLE students

### 70.1

The CSV files have a bunch of students with info about them, and some courses and majors. You will have four tables. One for the students and their info, one for each major, another for each course, and a final one for showing what courses are included in each major. First, create the `students` table.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE students();` into the psql prompt

## 80. CREATE TABLE majors

### 80.1

The second table will be for each unique major that appears in the data. Create a table named `majors`.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE majors();` into the psql prompt

## 90. CREATE TABLE courses

### 90.1

The third table is for each unique course in the data. Create another table named `courses`.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE courses();` into the psql prompt

## 100. CREATE TABLE majors_courses

### 100.1

The final table will be a junction table for the majors and courses. Create it with the name `majors_courses`.

#### HINTS

- Use the `CREATE TABLE` keywords
- There should be parenthesis after the table name
- Here's an example: `CREATE TABLE <table_name>();`
- Type `CREATE TABLE majors_courses();` into the psql prompt

## 110. \d

### 110.1

Use the **d**isplay shortcut command to view your tables to make sure your satisfied with them.

#### HINTS

- It's the `\d` shortcut command
- Type `\d` in the psql prompt

## 120. Create student_id Column

### 120.1

Onto the columns. The `students.csv` file has four fields, you will make a column for each of those as well as an ID column. Add a column to your `students` table named `student_id`. Give it a type of `SERIAL` so it automatically increments and make it a `PRIMARY KEY`

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL` and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE students ADD COLUMN student_id SERIAL PRIMARY KEY;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 130. Create first_name Column

### 130.1

The first column in `students.csv` is `first_name`. Add a column to the `students` table with that name. Make it a type of `VARCHAR(50)` and give it the `NOT NULL` constaint.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE students ADD COLUMN first_name VARCHAR(50) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 140. Create last_name Column

### 140.1

The next column in the data is `last_name`. Add it to the `students` table. Give it the same data type and max-length as `first_name` and make sure it has the `NOT NULL` constraint.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- The max-length should be `50`
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE students ADD COLUMN last_name VARCHAR(50) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 143. Create major_id Column

### 143.1

The next column is for the major. Since you will have each major in another table this column will be a foreign key that references it. Create a column in the `students` table named `major_id`, give it a data type of `INT` for now. You will come back and set the foreign key later.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, and `INT` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE students ADD COLUMN major_id INT;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 146. Create gpa Column

### 146.1

Create the last column, `gpa`. The data in the CSV shows that they are decimals with a length of `2` and `1` number is to the right of the decimal. So give it a data type of `NUMERIC(2,1)`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, and `NUMERIC()` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE students ADD COLUMN gpa NUMERIC(2,1);` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 150. \d students

### 150.1

Use the shortcut command to **d**isplay the details of the `students` table to make sure you like it.

#### HINTS

- It's the `\d` shortcut command
- Add the table name after the command
- Here's an example: `\d <table_name>`
- Type `\d students` in the psql prompt

## 160. Create major_id Column

### 160.1

The foreign key is still missing. Let's fill in the `majors` table next. Add a `major_id` column to it. Make it a type of `SERIAL` and the `PRIMARY KEY` for this table.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL` and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE majors ADD COLUMN major_id SERIAL PRIMARY KEY;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 170. Create major Column

### 170.1

This table will only have one other column for the name of the major. Add a column to it named `major`. Make it a `VARCHAR` with a max-length of `50` and give it the `NOT NULL` constraint.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- The max-length of `50` should go in the parenthesis of `VARCHAR`
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE majors ADD COLUMN major VARCHAR(50) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 180. \d majors

### 180.1

View the details of the majors table to make sure you like it.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d majors` into the psql prompt

## 183. Create major_id foreign key

### 183.1

This table looks good. Now, set the `major_id` column from the `students` table as a foreign key that references the `major_id` column from the `majors` table. Here's an example of how to do that: `ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);`

#### HINTS

- Type `ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);` in the psql prompt

## 187. \d students

### 187.1

View the details of the `students` table again to make sure the key is there.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt

## 190. Create course_id Column

### 190.1

Next, is the `courses` table. Add a `course_id` column to it. Give it a type of `SERIAL` and make it the primary key.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL` and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE coureses ADD COLUMN course_id SERIAL PRIMARY KEY;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 200. Create course Column

### 200.1

Add a `course` column to the `courses` table that's a type of `VARCHAR`. The course names are a little longer, so give them a max-length of `100`. Also, make sure it can't accept null values.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()` and `NOT NULL` keywords
- The max-length of `100` should go in the parenthesis of `VARCHAR`
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE> <CONSTRAINTS>;`
- Type `ALTER TABLE courses ADD COLUMN course VARCHAR(100) NOT NULL;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 220. \d courses

### 220.1

View the details of the courses table to make sure it looks good.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d courses` into the psql prompt

## 230. Create major_id column

### 230.1

One more table to go. The `majors_courses` junction table will have two columns, each referencing the primary key from two related table. First, add a `major_id` column to it. Just give it a type of `INT` for now.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, and `INT` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE majors_courses ADD COLUMN major_id INT;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 240. Set major_id Foreign Key

### 240.1

Set the `major_id` column you just created as a foriegn key that references the `major_id` column from the `majors` table.

#### HINTS

- Use the `ALTER TABLE`, `ADD FOREIGN KEY`, and `REFERENCES` keywords
- Here's an example: `ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);`
- You previously used: `ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);`
- Type `ALTER TABLE majors_courses ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);` into the psql prompt

## 250. Create course_id Column

### 250.1

Next, add a `course_id` column to the same table. Just give it a type of `INT` again for now.

#### HINTS

- It goes in the `majors_courses` table
- Use the `ALTER TABLE`, `ADD COLUMN`, and `INT` keywords
- Here's an example: `ALTER TABLE <table_name> ADD COLUMN <column_name> <DATA_TYPE>;`
- Type `ALTER TABLE majors_courses ADD COLUMN course_id INT;` into the psql prompt
- You can drop a column with `ALTER TABLE <table_name> DROP COLUMN <column_name>;` if you want to delete a column and try again

## 260. Set course_id Foreign Key

### 260.1

Set your new `course_id` column as a foriegn key that references the other `course_id` column.

#### HINTS

- The referenced column is `course_id` from the `courses` table
- Use the `ALTER TABLE`, `ADD FOREIGN KEY`, and `REFERENCES` keywords
- Here's an example: `ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);`
- You previously used: `ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);`
- Type `ALTER TABLE majors_courses ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);` into the psql prompt

## 270. \d majors_courses

### 270.1

View the details of the table you just worked on to make sure the structure is finished.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d courses` into the psql prompt

## 280. Create Composite Primary Key

### 280.1

There's one thing missing. This table doesn't have a primary key. The data from `courses.csv` will go in this table. A single major will be in it multiple times, and same with a course. So neither of them can be a primary key. But there will never be a row with the same two values as another row. So the two columns together, are unique. You can create a composite primary key that uses more than one column as a unique pair like this: `ALTER TABLE <table_name> ADD PRIMARY KEY(<column_name>, <column_name>);` Add a composite primary key to the table using the two columns.

#### HINTS

- It's the `major_id` and `course_id` columns from the `majors_courses` table
- Type `ALTER TABLE majors_courses ADD PRIMARY KEY(major_id, course_id);` into the psql prompt

## 290. \d majors_courses

### 290.1

View the details of the table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d courses` into the psql prompt

## 300. \d

### 300.1

Okay, now it's finished. View all the tables you ended up with.

#### HINTS

- Use the **d**isplay shortcut command
- Don't include a table name after the command
- It's the `\d` command
- Type `\d` into the psql prompt

## 310. \d majors

### 310.1

Next, you can start adding some info. Since the `students` table needs a `major_id`, you can add a major first. View the details of the `majors` table to see what info it expects.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d majors` into the psql prompt

## 320. INSERT INTO majors

### 320.1

It only needs the name of a major. The ID will be added automatically. Add the first major from the `courses.csv` file into the `majors` table. It's a `VARCHAR`, so make sure to put the value in single quotes.

#### HINTS

- The major is `Database Administration`
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO <table_name>(<column_name>) VALUES(<value>);`
- Type `INSERT INTO majors(major) VALUES('Database Administration');`

## 340. SELECT * FROM majors

### 340.1

Use `SELECT` to view all the data in the `majors` table to make sure it got inserted correctly.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM majors;` into the psql prompt

## 350. INSERT INTO courses

### 350.1

Next, insert the first course from `courses.csv` into the `courses` table.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- View the details of the table with `\d courses` to see what it expects
- The course name is `Data Structures and Algorithms`
- Make sure to put `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO <table_name>(<column_name>) VALUES(<value>);`
- Type `INSERT INTO courses(course) VALUES('Data Structures and Algorithms');`

## 360. SELECT * FROM courses

### 360.1

View all the data in the `courses` table to make sure it got added.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM majors;` into the psql prompt

## 370. \d majors_courses

### 370.1

Next, you can add a row into the junction table. View the details of it to see what it expects.

#### HINTS

- It's the `majors_courses` table
- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d majors` into the psql prompt

## 380. INSERT INTO majors_courses

### 380.1

It wants a `major_id` and `course_id`. Add a row to `majors_courses` for the first entry in `courses.csv`.

#### HINTS

- Use `SELECT * FROM <table_name>;` to find the two ID's you already added
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO <table_name>(<column_1_name>, <column_2_name>) VALUES(<value_1>, <value_2>);`
- Type `INSERT INTO majors_courses(major_id, course_id) VALUES(1, 1);` Note that your ID's may differ. You can reset the lesson to ensure they are the same

## 390. SELECT * FROM majors_courses

### 390.1

View all the data in the table you just added to.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM majors_courses;` into the psql prompt

## 400. \d students

### 400.1

Looks like the row got added. View the details of the `students` table to remind yourself what it expects so you can add the first student to the database.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt

## 420. INSERT INTO students

### 420.1

The output shows what the table needs. Insert the first person from `students.csv` into the `students` table.

#### HINTS

- Enter `SELECT * FROM majors;` to find the `major_id` for the students major
- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO <table_name>(<column_1_name>, <column_N_name>) VALUES(<value_1>, <value_N>);`
- The first part to insert the student looks like this: `INSERT INTO students(first_name, last_name, major_id, gpa)`
- Type `INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('Rhea', 'Kellems', 1, 2.5);` into the psql prompt

## 430. SELECT * FROM students

### 430.1

Looks like it worked. View all the data in the students table to make sure.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>;`
- Type `SELECT * FROM students;` into the psql prompt

## 440. touch insert_data.sh

### 440.1

Okay, you added a row into each table. It might be wise to review the data and the database structure. Adding the rest of the info one at a time would be tedious. You are going to make a script to do it for you. I recommend "splitting" the terminal for this part. You can do that by clicking the "hamburger" menu at the top left of the window, going to the "Terminal" menu, and clicking "Split Terminal". Once you've done that, use the `touch` command to create a file named `insert_data.sh` in your `project` folder.

#### HINTS

- You cannot use regular terminal commands in the psql prompt. So follow the instructions to split the terminal. Then, type `touch insert_data.sh` in the new terminal and press enter
- Make sure you are in the `project` folder first
- You can get there by entering `cd ~/project` in the terminal

## 450. chmod +x insert_data.sh

### 450.1

You should have two terminals open. One connected to PostgreSQL, and one for entering terminal commands. In the one for terminal commands, use the `chmod` command with the `+x` flag to give you new script executable permissions.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Type `chmod +x insert_data.sh` in the terminal and press enter
- Make sure it's the regular terminal and not the psql one
- You can log back in to psql with `psql --username=freecodecamp --dbname=students`

## 460. Add shebang

### 460.1

Open your new file and add a "shebang" that uses `bash` at the top. It looks like this: `#!/bin/bash`.

#### HINTS

- Add the text, `#!/bin/bash` to your `insert_data.sh` file

## 470. Add comment

### 470.1

Below that, add a single line comment with the text, `Script to insert data from courses.csv and students.csv into students database`.

#### HINTS

- A comment look like this: `# <comment>`
- Add `# Script to insert data from courses.csv and students.csv into students database` below the "shebang" in your `insert_data.sh` file

## 480. Add cat courses.csv

### 480.1

First, you should add all the info from the `courses.csv` file since you need the `major_id` for inserting the student info. `cat` is a terminal command for printing the contents of a file. Here's an example: `cat <filename>`. Below the comment you added, use it to print `courses.csv`.

#### HINTS

- Add `cat courses.csv` to your `insert_data.sh` file below your comment

## 490. ./insert_data.sh

### 490.1

Run your script to see if the file contents get printed.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 500. Add while read

### 500.1

It worked. Instead of printing the content, you can pipe that output into a while loop so you can go through the rows one at a time. It looks like this:

```sh
cat courses.csv | while read MAJOR COURSE
do
  <STATEMENTS>
done
```

Each new line will be read into the variables, `MAJOR` and `COURSE`. Add the above to your `cat` command. In the `STATMENTS` area, use `echo` to print the `MAJOR` variable.

#### HINTS

- You can print the suggested variable with `echo $MAJOR`
- The whole loop should look like this:
```sh
cat courses.csv | while read MAJOR COURSE
do
  echo $MAJOR
done
```

## 510. ./insert_data

### 510.1

Run the script to see if it worked.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 515. declare -p IFS

### 515.1

It's looping, but the `MAJOR` variable is only being set to the first word. There's a default `IFS` variable in bash. IFS stands for "Internal Field Separator". View it with `declare -p IFS`.

#### HINTS

- Enter `declare -p IFS` in the terminal

## 520. Add IFS

### 520.1

This variable is used to determine word boundaries. It defaults to spaces, tabs, and new lines. This is why the `MAJOR` variable was set to only the first word on each line from the data. Between the `while` and `read` commands, set the `IFS` to a comma like this: `IFS=","`

#### HINTS

- Here's how it looks:
```sh
cat courses.csv | while IFS="," read MAJOR COURSE
do
  echo $MAJOR
done
```

## 530. ./insert_data.sh

### 530.1

Now, it should use the comma in the data to separate words instead of spaces. Run the script again to see if it's working.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 533. Add echo all variables

### 533.1

Looks like that worked. It prints the whole major, including the space. Print the `COURSE` variable on the same line as where you print `MAJOR` to make sure it's all working.

#### HINTS

- Change the `echo` line to `echo $MAJOR $COURSE`
- The whole loop should look like this:
```sh
cat courses.csv | while IFS="," read MAJOR COURSE
do
  echo $MAJOR $COURSE
done
```

## 536. ./insert_data.sh

### 536.1

Run the script again to check.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 540. Delete echo

### 540.1

Okay, your loop is working. You can use the `MAJOR` and `COURSE` variables to access the major or course when you need to insert data or query the database. Delete the echo line so you can figure out what to do next.

#### HINTS

- Delete the `echo $MAJOR $COURSE` line

## 550. Add comments

### 550.1

It helps to plan out what you want to happen. For each loop, you will want to add the major to the database if it isn't in there yet. Same for the course. Then add a row to the `majors_courses` table. Add these single line comments in your loop in this order: `get major_id`, `if not found`, `insert major`, `get new major_id`, `get course_id`, `if not found`, `insert course`, `get new course_id`, `insert into majors_courses`.

#### HINTS

- Here's an example of a single comment: `# <comment>`
- Add the nine suggested single line comments, each on their own line, in the order given
- It should look like this:
```sh
do
  # get major_id

  # if not found

  # insert major

  # get new major_id

  # get course_id

  # if not found

  # insert course

  # get new course_id

  # insert into majors_courses

done
```

## 560. Add PSQL Variable

### 560.1

You used the `psql` command to log in and interact with the database. You can use it to just run a single command and exit. Above your loop, add a `PSQL` variable that looks like this: `PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"`. This will allow you to query your database from your script. The important parts are the `username`, `dbname`, and the `-c` flag that is for running a single command and exiting. The rest of the flags are for formatting.

#### HINTS

- Add the suggested variable between your first command and the loop
- The suggested area should look like this:
```sh
PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"
```

## 562. Add MAJOR_ID

### 562.1

Now, you can query your database using the `PSQL` variable like this: `$($PSQL "<query_here>")`. Below the `get major_id` comment in your loop, create a `MAJOR_ID` variable. Set it equal to the result of a query that gets the `major_id` of the current `MAJOR` in the loop. Make sure to put your `MAJOR` variable in single quotes.

#### HINTS

- Here's an example of how it looks: `MAJOR_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `major_id='$MAJOR'`
- Here's how the query should look: `SELECT major_id FROM majors WHERE major='$MAJOR'`
- Here's how the whole line should look: `MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")`

## 564. Add echo MAJOR_ID

### 564.1

Below the variable you just created, use `echo` to print it so you can see it's value when you run the script.

#### HINTS

- Add `echo $MAJOR_ID` below the `MAJOR_ID` variable you created

## 566. ./insert_data.sh

### 566.1

Run the script to see what happens.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 568. Add if -z MAJOR_ID

### 568.1

So it went through each major from the CSV file and tried to find `major_id` for each one from the database. Looks like it only found the one you manually inserted earlier. The rest were empty. Below your first `if not found` comment, add an `if` condition that checks if the `MAJOR_ID` variable is empty. You can do that with this test: `[[ -z $MAJOR_ID ]]`. Place the next two comments in the statements area of the `if`.

#### HINTS

- Here's an example of an `if`:
```sh
if CONDITION
then
  STATEMENTS
fi
```
- Make sure your `insert major` and `get new major_id` comments are in the statements area in that order
- Here's how it should look:
```sh
if [[ -z $MAJOR_ID ]]
then
  # insert major

  # get new major_id

fi
```

## 570. Add INSERT_MAJOR_RESULT

### 570.1

The loop will go into this `if` whenever a major isn't found. Here, you will want to insert the major and then get the new id. You will need the id for inserting data into the `majors_courses` table later. Below your `insert major` comment, create an `INSERT_MAJOR_RESULT` variable. Set it's value to a query that inserts the current major into the database. Don't forget to use single quotes around the value.

#### HINTS

- Here's an example of how to query the database: `INSERT_MAJOR_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_name>) VALUES(<value>)`
- You want to insert the `$MAJOR` value
- Here's how the query looks: `INSERT INTO majors(major) VALUES('$MAJOR')`
- Here's how the whole line should look: `INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")`

## 580. Add echo INSERT_MAJOR_RESULT

### 580.1

Below the variable you just created, use `echo` to print it.

#### HINTS

- Add `echo $INSERT_MAJOR_RESULT` right below where you created it

## 590. cp courses.csv

### 590.1

Instead of running through all the data in the CSV file, you should make some test data. In the terminal, use the copy (`cp`) command to copy the `courses.csv` into a new file named `courses_test.csv`.

#### HINTS

- Here's an example: `cp <filename> <new_name>`
- Type `cp courses.csv courses_test.csv` in the terminal and press enter
- Make sure you are using the bash terminal and not the psql one

## 600. Add four records to courses_test.csv

### 600.1

In your new file, remove all the data except for the first five lines. Make sure there's a single empty line at the bottom.

#### HINTS

- Remove all but the first five lines from the `courses_test.csv` file
- Or, replace everything in `courses_test.csv` with the first five lines from `course.csv`
- Make sure there's one empty line at the bottom
- The `courses_test.csv` file should look like this:
```csv
major,course
Database Administration,Data Structures and Algorithms
Web Development,Web Programming
Database Administration,Database Systems
Data Science,Data Structures and Algorithms

```

## 610. Change to cat courses_test.csv

### 610.1

Back in the `insert_data.sh` script, change your `cat` command to loop through the test file instead of the full one.

#### HINTS

- Change your `cat` command to `cat courses_test.csv` instead of `cat courses.csv`
- The suggested line should look like this:
```sh
cat courses_test.csv | while IFS="," read MAJOR COURSE
```

## 620. ./insert_data.sh

### 620.1

Run the script. It will go through the test data and insert a major into the database each time it doesn't find one already there and print the `MAJOR_ID` and `INSERT_MAJOR_RESULT` variables.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 625. Delete echo MAJOR_ID

### 625.1

Looks like it inserted three items into the database. You don't need to print the ID anymore so delete the `echo $MAJOR_ID` line.

#### HINTS

- Delete the `echo $MAJOR_ID` line

## 630. SELECT * FROM majors

### 630.1

In the psql prompt, use `SELECT` to view all the data from the `majors` table to see what the script added.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 640. TRUNCATE majors

### 640.1

I forgot you inserted `Database Administration` earlier. The script ran and inserted `major` from the top line of the file. Then it added the other two that weren't already in there. You can use `TRUNCATE` to delete all data from a table. In the psql prompt, try to delete all the data in the majors table by entering `TRUNCATE majors;`

#### HINTS

- Enter `TRUNCATE majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 660. TRUNCATE majors, students, majors_courses

### 660.1

It says you "cannot truncate a table referenced in a foreign key constraint." The `students` and `majors_courses` tables use the `major_id` from `majors` as a foreign key. So if you want to delete the data from `majors`, you need to delete the data from those two tables at the same time. Use `TRUNCATE` to delete the data from those three tables. Separate the tables with commas.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>, <table_3>;`
- The three tables you want are `majors`, `students`, and `majors_courses`
- Enter `TRUNCATE majors, students, majors_courses` in the psql prompt

## 670. SELECT * FROM majors

### 670.1

View all the data in the `majors` table to make sure it's empty.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 680. SELECT * FROM majors_courses

### 680.1

Looks like it worked. View all the data in the `majors_courses` table to see if that one is empty.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 690. SELECT * FROM students

### 690.1

It is, check the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 700. SELECT * FROM courses

### 700.1

Last, check the `courses` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 710. TRUNCATE courses, majors_courses

### 710.1

There should still be one entry in there. Use `TRUNCATE` to delete all the data from the `courses` table. You will need to truncate any tables that use a column from it as a foreign key at the same time.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- The tables you want are `courses`, and `majors_courses`
- Enter `TRUNCATE majors, students, majors_courses` in the psql prompt

## 720. SELECT * FROM courses

### 720.1

View all the data in the `courses` table again.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 730. ./insert_data.sh

### 730.1

Now the database is completely empty. Run the script again to see what gets inserted when the database is empty.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 740. SELECT * FROM majors

### 740.1

It inserted four that time. In the psql prompt, view all the data in the `majors` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 750. Add if major

### 750.1

You won't want to add the first line from the CSV file to the database since those are just titles. In your script, add an `if` condition at the top of your loop that checks if `$MAJOR != major`. Put all the existing code and comments in your loop in it's statements area so it only does any of it if it's not the first line.

#### HINTS

- Here's an example of an `if`:
```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```
- Your loop area should look like this:
```sh
do
  if [[ $MAJOR != major ]]
  then
    # get major_id
    MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")

    # if not found
    if [[ -z $MAJOR_ID ]]
    then
      # insert major
      INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
      echo $INSERT_MAJOR_RESULT

      # get new major_id

    fi

    # get course_id

    # if not found

    # insert course

    # get new course_id

    # insert into majors_courses

  fi
done
```

## 760. TRUNCATE majors CASCADE

### 760.1

In the psql prompt, use `TRUNCATE` to delete all the data in the `majors` table. 

#### HINTS

- Make sure to delete data in the tables that use any of the `majors` columns as a foreign key at the same time
- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- You need to trunacte `majors`, `students`, and `majors_courses` together
- Enter `TRUCATE majors, students, majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 770. SELECT * FROM majors

### 770.1

View all the data in `majors` table to make sure it's empty.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 780. ./insert_data.sh

### 780.1

Run the script to make sure it's not adding the first line anymore.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 790. SELECT * FROM majors

### 790.1

It only showed three inserts, that's a good sign. View all the data in `majors` table to make sure it's three you want.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 800. Delete echo INSERT_MAJOR_RESULT

### 800.1

There's three unique majors in your test data. Those were the three added to the database, so it looks like it's working. Delete the line where you print `INSERT_MAJOR_RESULT`.

#### HINTS

- Delete the `echo $INSERT_MAJOR_RESULT` line

## 810. Add if INSERT_MAJOR_RESULT

### 810.1

You want a nicer message when something get's inserted so it's more infomative. Below your `INSERT_MAJOR_RESULT` variable, add an `if` statement that checks if the variable is equal to `INSERT 0 1`, which was what it was printing. Use `echo` to print `Inserted into majors, $MAJOR` in the statements area of the `if`.

#### HINTS

- Make sure to put the test value (`INSERT 0 1`) in double quotes since it has spaces.
- The condition you want is: `[[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]`
- The `echo` part looks like this: `echo "Inserted into majors, $MAJOR"`
- The whole thing should look like this:
```sh
if [[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into majors, $MAJOR"
fi
```

## 820. TRUNCATE majors CASCADE

### 820.1

In the psql prompt, truncate the `majors` table again so you can run the script and see the output.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- Make sure to delete data in the tables that use any of the `majors` columns as a foreign key at the same time
- You need to trunacte `majors`, `students`, and `majors_courses` together
- Enter `TRUCATE majors, students, majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 830. ./insert_data.sh

### 830.1

Check to make sure the table is empty. Then, run the script.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 835. Add MAJOR_ID

### 835.1

It's starting to come together. Below your `get new major_id` comment, set the `MAJOR_ID` variable to a query that gets the new `major_id` from the database.

#### HINTS

- Here's an example of how to query the database: `MAJOR_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `major_id='$MAJOR'`
- Here's how the query should look: `SELECT major_id FROM majors WHERE major='$MAJOR'`
- Here's how the whole line should look: `MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")`
- Make sure it's in the `if [[ -z $MAJOR_ID ]]` statements area

## 840. Add COURSE_ID

### 840.1

So the script will insert the majors correctly. Next is the courses. It will be the same steps as for the majors. Below your `get course_id` comment, add a `COURSE_ID` variable that gets the `course_id` from the database. Remember that your `COURSE` variable will have the current course in the loop.

#### HINTS

- Here's an example of how to query the database: `COURSE_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `course_id='$COURSE'`
- Here's how the query should look: `SELECT course_id FROM courses WHERE course='$COURSE'`
- Here's how the whole line should look: `COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")`

## 850. Add if -z COURSE_ID

### 850.1

It's the same as the majors, so below the second `if not found` comment, add an `if` statement that checks if the query was empty so you can insert the course if needed. Place the existing `insert course` and `get new course_id` comments in the statements area of the `if`. 

#### HINTS

- Here's an example of an `if`:
```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```
- Make sure your `insert course` and `get new course_id` comments are in the statements area in that order
- Here's how it should look:
```sh
if [[ -z $COURSE_ID ]]
then
  # insert course

  # get new course_id

fi
```

## 853. Add INSERT_COURSE_RESULT

### 853.1

Below the `insert course` comment, create an `INSERT_COURSE_RESULT` variable that inserts the course into the database.

#### HINTS

- Check the table structure in the psql prompt with `\d courses` if you need to see the columns
- Here's an example of how to query the database: `INSERT_COURSE_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_name>) VALUES(<value>)`
- You want to insert the `$COURSE` value
- Here's how the query looks: `INSERT INTO courses(course) VALUES('$COURSE')`
- Here's how the whole line should look: `INSERT_COURSE_RESULT=$($PSQL "INSERT INTO courses(course) VALUES('$COURSE')")`

## 857. Add if INSERT_COURSE_RESULT

### 857.1

The variable should be `INSERT 0 1` again if something gets inserted. Below the variable you just created, add an `if` condition that checks if it is and print `Inserted into courses, $COURSE` using `echo` in it's statements area.

#### HINTS

- The condition you want is: `[[ $INSERT_COURSE_RESULT == "INSERT 0 1" ]]`
- The `echo` part looks like this: `echo "Inserted into courses, $COURSE"`
- The whole thing should look like this:
```sh
if [[ $INSERT_COURSE_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into courses, $COURSE"
fi
```

## 860. TRUNCATE majors CASCADE

### 860.1

In the psql prompt, truncate the data from the `majors` table so you can run the script again.

#### HINTS

- Here's an example: `TRUNCATE <table_1>, <table_2>;`
- Make sure to delete data in the tables that use any of the `majors` columns as a foreign key at the same time
- You need to trunacte `majors`, `students`, and `majors_courses` together
- Enter `TRUCATE majors, students, majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 870. ./insert_data.sh

### 870.1

Run the script to see if the courses get inserted into the database.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 877. SELECT * FROM courses

### 877.1

It looks like it worked. The test data has three unique courses, and three got added to the database. View the data in the `courses` table to make sure they are correct.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 880. Add echo TRUNCATE tables

### 880.1

Excellent. Instead of manually deleting the data each time you want to run the script, add the command to do it for you. Neat the top of the file below your `PSQL` variable, use `echo` to query the database. In the query, truncate your four tables in this order: `students`, `majors`, `courses`, `majors_courses`.

#### HINTS

- Here's an example: `echo $($PSQL "<query_here>")`
- The query you want looks like this: `TRUNCATE students, majors, courses, majors_courses`
- The whole line should look like this: `echo $($PSQL "TRUNCATE students, majors, courses, majors_courses")`

## 890. ./insert_data.sh

### 890.1

Run the script to see if it works.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 900. Add COURSE_ID

### 900.1

Awesome. That makes it easier. Below your `get new course_id` comment, set the `COURSE_ID` to the newly inserted `course_id`.

#### HINTS

- Here's an example: `COURSE_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `course_id='$COURSE'`
- Here's how the query should look: `SELECT course_id FROM courses WHERE course='$COURSE'`
- Here's how the whole line should look: `COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")`
- Make sure it's in the `if [[ -z $COURSE_ID ]]` statements area

## 910. Add INSERT_MAJORS_COURSES_RESULT

### 910.1

One more thing to add for this file. Below the `insert into majors_courses` courses comment, create a `INSERT_MAJORS_COURSES_RESULT` variable. Use it and the `MAJOR_ID` and `COURSE_ID` variables you created to insert a row into the `majors_courses` table. Make sure the query has the `major_id` column first. Also, you won't need and quotes around the values for the ID's.

#### HINTS

- Here's an example: `INSERT_MAJORS_COURSES_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_name>) VALUES(<value>)`
- Check the table structure in the psql prompt with `\d majors_courses` if you need to see the columns
- You want to add values for the `major_id` and `course_id` columns
- The query you want is: `INSERT INTO majors_courses(major_id, course_id) VALUES($MAJOR_ID, $COURSE_ID)`
- Here's how the whole line should look: `INSERT_MAJORS_COURSES_RESULT=$($PSQL "INSERT INTO majors_courses(major_id, course_id) VALUES($MAJOR_ID, $COURSE_ID)")`

## 920. Add if INSERT_MAJORS_COURSES_RESULT

### 920.1

Below the variable you just created, add an if condition that checks if it's equal to `INSERT 0 1` like the others. In it's statements area, use `echo` to print `Inserted into majors_courses, $MAJOR : $COURSE`.

#### HINTS

- The condition you want is: `[[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]`
- The `echo` part looks like this: `echo "Inserted into majors_courses, $MAJOR : $COURSE"`
- The whole thing should look like this:
```sh
if [[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into majors_courses, $MAJOR : $COURSE"
fi
```

## 930. ./insert_data.sh

### 930.1

Run the script. Your tables should get truncated and then it should go through the loop and add all the data from the `courses_test.csv` into the three tables of the database.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 950. SELECT * FROM majors

### 950.1

Looks like it works. You better look around to make sure. View the data in the `majors` table.

#### HINTS

- Use the psql prompt
- Use the `SELECT` and `FROM` keywords with `*` to view all the data in the `majors` table
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 960. SELECT * FROM courses

### 960.1

Cool, check the `courses` table.

#### HINTS

- Use the psql prompt
- Use the `SELECT` and `FROM` keywords with `*` to view all the data in the `courses` table
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 965. SELECT * FROM majors_courses

### 965.1

Lastly, view the data in the `majors_courses` table. There should be four rows.

#### HINTS

- Use the psql prompt
- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 970. cp students.csv

### 970.1

Alright, that part of the script is done. Next, you need to add everything from the `students.csv` file. Make some test data again. In the terminal, use the copy command to copy `students.csv` into a file named `students_test.csv`.
cp students.csv students_test.csv

#### HINTS

- `cp` is the copy command
- Here's an example: `cp <filename> <new_name>`
- Enter `cp students.csv students_test.csv` in the terminal

## 975. Remove all but fours lines

### 975.1

In the `students_test.csv` file, remove everything but the first five lines like you did for the other test file. Make sure there's an empty line at the bottom again.

#### HINTS

- Remove all but the first five lines from the `students_test.csv` file
- Or, replace everything in `students_test.csv` with the first five lines from `students.csv`
- Make sure there's one empty line at the bottom
- The `students_test.csv` file should look like this:
```csv
first_name,last_name,major,gpa
Rhea,Kellems,Database Administration,2.5
Emma,Gilbert,null,null
Kimberly,Whitley,Web Development,3.8
Jimmy,Felipe,Database Administration,3.7

```

## 980. Add cat students_test.csv

### 980.1

You want to loop through all this info like you did for the other CSV file. The process is the same. Below your existing loop, use `cat` to print your new test file. Pipe the results into a `while` loop, setting the `IFS` to a comma again, and then use `read` to create `FIRST`, `LAST`, `MAJOR` and `GPA` variables from the data. In the loop, use `echo` to print the `FIRST` variable.

#### HINTS

- It should look real similar to your other loop like this
- Here's an example:
```sh
cat <filename> | while IFS="," read VARIABLE_1 VARIABLE_2 VARIABLE_3 VARIABLE_4
do
  STATEMENTS
done
```
Here's how it looks:
```sh
cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  echo $FIRST
done
```

## 985. ./insert_data.sh

### 985.1

Run the script to see if it prints the `FIRST` (`first_name`) variable correctly. It will take a second since it has to go through the first loop.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1020. Delete echo all variables

### 1020.1

It works :sweat_smile: It printed the first item in each row of the CSV file. It's printing the first line again, you will have to take care of that. First, delete the `echo` line.

#### HINTS

- Delete the `echo $FIRST` line

## 1022. Add if first_name

### 1022.1

Add an if condition to the loop that checks if the `FIRST` variable is not equal to `first_name` so it doesn't do anything for the first line of the file. Don't put anything in the statements area for now.

#### HINTS

- Here's an example of an `if`:
```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```
- The condition you want is `[[ $FIRST != "first_name" ]]`
- Your second loop should look like this:
```sh
cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  if [[ $FIRST != "first_name" ]]
  then

  fi
done
```

## 1025. Add comments

### 1025.1

All the columns in the CSV file can be inserted directly into the database except for the major. You will need to get the `major_id` again for that. There's some `null` values in there as well, so you will need to use `null` if the `major_id` isn't found. Add four single line comments in your loop; `get major_id`, `if not found`, `set to null`, and `insert student` in that order.

#### HINTS

- Here's an example of a single comment: `# <comment>`
- Add the four suggested single line comments, each on their own line, in the order given in the `if` part of your new loop
- It should look like this:
```sh
cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  if [[ $FIRST != "first_name" ]]
  then
    # get major_id

    # if not found

    # set to null

    # insert student

  fi
done
```

## 1030. Add MAJOR_ID

### 1030.1

Below the new `get major_id` comment, set the `MAJOR_ID` variable to a query that gets the `major_id` for the current students major.

#### HINTS

- Here's an example of how it looks: `MAJOR_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `major_id='$MAJOR'`
- Here's how the query should look: `SELECT major_id FROM majors WHERE major='$MAJOR'`
- Here's how the whole line should look: `MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")`

## 1033. Add echo MAJOR_ID

### 1033.1

Below that, use `echo` to print the variable so you can see if it's working.

#### HINTS

- Add `echo $MAJOR_ID` below the `MAJOR_ID` variable you just created

## 1037. ./insert_data.sh

### 1037.1

Run the script to see what happens.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1047. Add if -z MAJOR_ID

### 1047.1

Looking at the test data, it found the id for all of it except the `null` value. Below the newest `if not found` comment, add an `if` that checks if the variable is empty. Put the `set to null` comment in its statements area.

#### HINTS

- It looks similar to the `if` condition in your first loop
- The condition you want is `[[ -z $MAJOR_ID ]]`
- Makr sure the `set to null` comment is in the statements area
- It should look like this:
```sh
if [[ -z $MAJOR_ID ]]
then
  # set to null

fi
```

## 1048. Set MAJOR_ID to null

### 1048.1

When you go to insert the student data, you want to use the `MAJOR_ID` if it's found, or `null` if not. Below the `set to null` comment, set the `MAJOR_ID` variable to `null` so you can use it to insert the data.

#### HINTS

- It should look like this:
```sh
if [[ -z $MAJOR_ID ]]
then
  # set to null
  MAJOR_ID=null
fi
```

## 1049. move echo MAJOR_ID

### 1049.1

Move the `echo $MAJOR_ID` line to below the `if` statement so you can run the script and see the value of the variable if the `major_id` is or isn't found.

#### HINTS

- Move the suggested line below the closing `fi` of the `if [[ -z $MAJOR_ID ]]` statement

## 1050. ./insert_data.sh

### 1050.1

Run the script.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1053. Delete echo MAJOR_ID

### 1053.1

Okay, that should work for inserting the student. Delete the `echo $MAJOR_ID` line.

#### HINTS

- Delete the `echo $MAJOR_ID` line from the file

## 1057. \d students

### 1057.1

One last thing to add. In the psql prompt, view the details of the `students` table so you can see what columns to add.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name after the command
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1060. Add INSERT_STUDENT_RESULT

### 1060.1

You will need to set the four columns when adding the student info. All of them except `student_id`. Below the `insert student` comment, create an `INSERT_STUDENT_RESULT` variable that adds the student to the database. Add the columns in the order they appear in the data, and make sure to only put the two `VARCHAR` columns in single quotes.

#### HINTS

- Here's an example: `INSERT_STUDENT_RESULT=$($PSQL "<query_here>")`
- For the query, you want to use the `INSERT INTO`, and `VALUES` keywords
- Here's an example of how the query part looks: `INSERT INTO <table_name>(<column_1>, <column_N>) VALUES(<value_1>, <value_N>)`
- In your query, make sure the columns to add are in this order: `first_name`, `last_name`, `major_id`, and `gpa`
- The query you want is: `INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('$FIRST', '$LAST', $MAJOR_ID, $GPA)`
- Here's how the whole line should look: `INSERT_STUDENT_RESULT=$($PSQL "INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('$FIRST', '$LAST', $MAJOR_ID, $GPA)")`

## 1070. Add if INSERT_STUDENT_RESULT

### 1070.1

Below the variable you just created, add an `if` statement that checks if it's equal to `INSERT 0 1` like the others. If it is, use `echo` to print `Inserted into students, <first_name> <last_name>`.

#### HINTS

- The condition should look like this: `if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]`
- Use the `FIRST` and `LAST` variables to print the students name
- The `echo` should look like this: `echo Inserted into students, $FIRST $LAST`
- The whole thing should look like this:
```sh
if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]
then
  echo "Inserted into students, $FIRST $LAST"
fi
```

## 1080. ./insert_data.sh

### 1080.1

Run the script to see if the students are getting added.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1090. SELECT * FROM students

### 1090.1

I think it's working. View all the data in the `students` table to make sure it matches the CSV file.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1120. Change to cat courses.csv

### 1120.1

Excellent. It added all the students from the test data. Time to try it with the original files. Change the `cat courses_test.csv` line to use the original file again.

#### HINTS

- Change `cat courses_test.csv` to `cat courses.csv`
- The suggested line should look like this: `cat courses.csv | while IFS="," read MAJOR COURSE`

## 1130. Change to cat students.csv

### 1130.1

Next, change the `cat students_test.csv` line to use the original file as well.

#### HINTS

- Change the `cat students_test.csv` to `cat students.csv`
- The suggested line should look like this: `cat students.csv | while IFS="," read FIRST LAST MAJOR GPA`

## 1140. ./insert_data.sh

### 1140.1

Time for the moment of truth. Run the script and see if it works.

#### HINTS

- Run your `insert_data.sh` script by executing it
- Type `./insert_data.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1150. SELECT * FROM students

### 1150.1

That was cool. View all the data in the `students` table to see what you ended up with.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1160. SELECT * FROM majors

### 1160.1

31 rows. That's how many are in the CSV file. Perfect. Next, check the `majors` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1170. SELECT * FROM courses

### 1170.1

7 rows. There must be 7 unique majors in the CSV file. View what's in the `courses` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1180. SELECT * FROM majors_courses

### 1180.1

Looks like there's 17 unique courses in the CSV file. Last, view the data in `majors_courses`. This should have the same number of rows at the CSV file.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors_courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1190. ls

### 1190.1

28 rows, same as the CSV file. I think all the data got added correctly. You don't need your test files anymore. In the terminal, use the list command to check what files are in your project folder.

#### HINTS

- It's the `ls` command
- Don't use any flags with the command
- Enter `ls` in the terminal

## 1200. rm students_test.csv

### 1200.1

Use the remove command (`rm`) to delete the `students_test.csv` file.

#### HINTS

- Here's an example `rm <filename>`
- Enter `rm students_test.csv` in the terminal

## 1205. rm courses_test.csv

### 1205.1

Use the same command to delete the `courses_test.csv` file.

#### HINTS

- Here's an example `rm <filename>`
- Enter `rm courses_test.csv` in the terminal

## 1210. ls

### 1210.1

List the contents of the folder again to make sure they're gone.

#### HINTS

- Use the **l**ist command
- It's the `ls` command
- Don't use any flags with the command
- Enter `ls` in the terminal

## 1220. touch student_info.sh

### 1220.1

Next, you are going to make a script to print info about your students. In the terminal, use `touch` to create a `student_info.sh` file.

#### HINTS

- Here's an example: `touch <filename>`
- Enter `touch student_info.sh` in the terminal
- Make sure you are in the `project` folder first

## 1230. chmod +x student_info.sh

### 1230.1

Give your file executable permissions.

#### HINTS

- It's the `chmod` command with the `+x` flag
- Here's an example: `chmod +x <filename>`
- Type `chmod +x student_info.sh` in the terminal and press enter

## 1240. Add shebang

### 1240.1

Add shebang that uses bash to your new script.

#### HINTS

- The shebang you want is `#!/bin/bash`
- Add the text, `#!/bin/bash` to your `student_info.sh` file

## 1250. Add comment

### 1250.1

Below the shebang, add a comment that says `Info about my computer science students from students database`.

#### HINTS

- Make sure it's a single line comment
- A comment look like this: `# <comment>`
- Add `# Info about my computer science students from students database` below the "shebang" in your `student_info.sh` file

## 1260. Add echo title

### 1260.1

In the new script, use `echo` to print `~~ My Computer Science Students ~~`. Use the `-e` flag with it to put at the beginning and end of the text.

#### HINTS

- The new line character is `\n`
- Here's an example: `echo -e "\n<text>\n"`
- Add `echo -e "\n~~ My Computer Science Students ~~\n"` below the comment in your `student_info.sh` file

## 1265. ./student_info.sh

### 1265.1

Run the script to make sure it's working.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1270. Add PSQL Variable

### 1270.1

You will want to query the database again to get info about the students to display. Add the same `PSQL` variable from your other script.

#### HINTS


- Make sure to use all the same flags in the same order
- Add the following to the bottom of the `student_info.sh` file:
```sh
PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"
```

## 1280. Add echo students with 4.0

### 1280.1

Below the PSQL variable you just added, use `echo` to print `First name, last name, and GPA of students with a 4.0 GPA:`. Use the `-e` flag to put a new line at the begginning of the sentence.

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nFirst name, last name, and GPA of students with a 4.0 GPA:"
```

## 1290. psql SELECT * FROM students

### 1290.1

You will want to print what that sentence is asking for. You should know how to make that query, but lets practice a little first. `SQL` stands for "Structured Query Language". It's the language you have been using to manage your relational databases. In the psql prompt, view all the data in the students table like you have done many times.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1300. psql SELECT first_name

### 1300.1

You should look at the column titles that were returned. The `*` gets all columns in a table with your query. You can return specific columns by putting the column name in the query instead of `*`. In the psql prompt, view just the `first_name` column from the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT <column_name> FROM <table_name>;`
- Enter `SELECT first_name FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1310. psql SELECT first_name, last_name, gpa

### 1310.1

Just the `first_name` column was returned that time. You can specify as many columns you want returned by separating them with commas. View the `first_name`, `last_name` and `gpa` columns from the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT <column_1>, <column_2>, FROM <table_name>;`
- Enter `SELECT first_name, last_name, gpa FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already
- Don't filter any rows

## 1320. psql SELECT WHERE gpa < 2.5

### 1320.1

You can return only rows you want by adding `WHERE <condition>` to your query. A condition can consist of a column, an operator, and a value. Use one of these to view the same columns as before but only rows `WHERE gpa < 2.5`.

#### HINTS

- Here's an example: `SELECT <columns> FROM <table_name> WHERE <condition>;`
- The previous command you used was `SELECT first_name, last_name, gpa FROM students;`
- The condition you want is `WHERE gpa < 2.5`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa < 2.5;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1330. psql SELECT WHERE gpa >= 3.8

### 1330.1

The `<` only return rows where the `gpa` column was less than `2.5`. Some other operators are: `<`, `>`, `<=`, `>=`. View the same columns, but only rows for students with a `gpa` greater than or equal to `3.8`.

#### HINTS

- The greater than or equal to operator is `>=`
- Here's an example: `SELECT <columns> FROM <table_name> WHERE <condition>;`
- The previous command you used was `SELECT first_name, last_name, gpa FROM students WHERE gpa < 2.5;`
- The condition you want here is `WHERE gpa >= 3.8`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1340. psql SELECT WHERE != 4.0

### 1340.1

That only returned students with a GPA of 3.8 or better. There's equal (`=`) and not equal (`!=`) operators as well. View the same columns for students that don't have a 4.0 gpa.

#### HINTS

- Use the not equal (`!=`) operator
- The previous command you used was `SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.8;`
- The condition you want here is `WHERE gpa != 4.0`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa != 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1360. Add echo query result

### 1360.1

The right query will get you only the data you are looking for. Back in your `student_info.sh` file, add an `echo` command to the bottom that prints what the sentence above it asks for. Place double quotes around it like this: `echo "$($PSQL "<query_here>")"`. This will make it so the output isn't all on one line.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used, `SELECT first_name, last_name, gpa FROM students WHERE gpa != 4.0;` in the psql prompt
- The condition you want here is `WHERE gpa = 4.0`
- Practice the query in the psql prompt to make sure it's getting what you want
- If you run your script, the last echo statement should print:
```sh
Casares|Hijo|4.0
Vanya|Hassanah|4.0
Dejon|Howell|4.0
```
- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE gpa = 4.0")"` to the bottom of the `student_info.sh` file

## 1370. ./student_info.sh

### 1370.1

Run the script to see your students with the highest GPA's.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1380. Add echo courses before D

### 1380.1

Add another `echo` statment at the bottom of the script. Make it print `All course names whose first letter is before 'D' in the alphabet:`. Put a new line in front of it like the first sentence.

#### HINTS

- Use `echo` with the `-e` flag and a new line character
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nAll course names whose first letter is before 'D' in the alphabet:"
```

## 1390. psql SELECT * FROM majors

### 1390.1

Use the psql prompt to view all the data in the `majors` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1400. psql SELECT WHERE major = Game Design

### 1400.1

The operators you used with numbers in the last section can be used on text as well. Use the `=` to view all majors named `Game Design`. Don't forget that You need single quotes around text values.

#### HINTS

- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major = 'Game Design'`
- Enter `SELECT * FROM majors WHERE major = 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1410. psql SELECT WHERE major != Game Design

### 1410.1

View all the rows not equal to `Game Design`.

#### HINTS

- The not equal operator is `!=`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major != 'Game Design'`
- Enter `SELECT * FROM majors WHERE major != 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1420. psql SELECT WHERE major > Game Design

### 1420.1

Use the greater than operator to see majors that come after it alphabetically.

#### HINTS

- The greater than operator is `>`
- You want to see what rows are `> 'Game Design'`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major > 'Game Design'`
- Enter `SELECT * FROM majors WHERE major > 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1430. psql SELECT WHERE major >= Game Design

### 1430.1

Try it with the greater than or equal to operator.

#### HINTS

- The greater than or equal to operator is `>=`
- You want to see what rows are `>= 'Game Design'`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major >= 'Game Design'`
- Enter `SELECT * FROM majors WHERE major >= 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1440. psql SELECT WHERE major < G

### 1440.1

It included `Game Design` in the results that time. So if you want to see results that start with a `G` or after, you could use `major >= 'G'`. View the majors that come before `G`.

#### HINTS

- Use the less than (`<`) operator to see rows that come before `G`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major < 'G'`
- Enter `SELECT * FROM majors WHERE major < 'G';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1450. Add echo query result

### 1450.1

In your script, add an `echo` at the bottom to print the suggested info like you did before. Make sure to use double quotes where needed.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used, `SELECT * FROM majors WHERE major < 'G';` in the psql prompt
- The condition you want here is `WHERE course < 'D'`
- You only want to get the `course` column from the `courses` table
- Practice the query in the psql prompt to make sure it's getting what you want
- If you run your script, the last echo statement should print:
```sh
Computer Networks
Computer Systems
Artificial Intelligence
Calculus
Algorithms
```
- Add `echo "$($PSQL "SELECT course FROM courses WHERE course < 'D'")"` to the bottom of the `student_info.sh` file


## 1460. ./student_info.sh

### 1460.1

Run the script to see what course names come before the letter `D`.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1470. Add echo students after R with gpa above 3.8 or below 2.0 

### 1470.1

Add another sentence like the others that says: `First name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nFirst name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:"
```

## 1480. psql SELECT * FROM students

### 1480.1

To find that, start by using the psql prompt to view all the data in the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1490. psql SELECT WHERE last_name < M

### 1490.1

It returned 31 rows. Use the same command, but only return the rows for students whose last name comes before `M` in the alphabet.

#### HINTS

- Use the less than (`<`) operator to see rows that come before `M`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `last_name < 'M'`
- Enter `SELECT * FROM students WHERE last_name < 'M';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1500. SELECT WHERE last_name < M OR gpa = 3.9

### 1500.1

That returned 18 rows. You can use multiple conditions after `WHERE` with `AND` or `OR`, among others. Just add the keyword and another condition. In the psql prompt, use the same command as before, but add an `OR` to also return rows of students with a 3.9 GPA.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M';`
- Here's an example of the `WHERE` part: `WHERE <condition_1> OR <condition_2>`
- Add an `OR <condition>` to the previous command
- The condition you want to add is `OR gpa = 3.9`
- The whole condition is `WHERE last_name < 'M' OR gpa = 3.9`
- Enter `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1510. psql SELECT WHERE last_name < M AND gpa = 3.9

### 1510.1

It showed rows where one of the conditions was true, there was one more than last time. Enter the previous command, but use `AND` to view only students that meet both conditions.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;`
- Here's an example of the `WHERE` part: `WHERE <condition_1> AND <condition_2>`
- Enter `SELECT * FROM students WHERE last_name < 'M' AND gpa = 3.9;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1520. psql SELECT WHERE last_name < M AND gpa = 3.9 OR gpa < 2.3

### 1520.1

Now it only shows rows where both conditions are true, one person. Enter the previous command, but add a third condition of `OR gpa < 2.3`.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;`
- Here's an example of the `WHERE` part: `WHERE <condition_1> AND <condition_2> OR <condition_2>`
- The conditions look like this: `WHERE last_name < 'M' AND gpa = 3.9 OR gpa < 2.3;`
- Enter `SELECT * FROM students WHERE last_name < 'M' AND gpa = 3.9 OR gpa < 2.3;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1530. psql SELECT WHERE last_name < M AND (gpa = 3.9 OR gpa < 2.3)

### 1530.1

This showed all students whose GPA is less than 2.3 because the final `OR` condition was true for them. It didn't matter what their last name started with. You can group conditions together with parenthesis like this: `WHERE <condition_1> AND (<condition_2> OR <condition_2>)`. This would only return rows where `<condition_1>` is true and one of the others is true. View students whose last name is before `M` that have a GPA of 3.9 or less than 2.3.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9 OR gpa < 2.3;`
- Enter the previous command but group your conditions with parenthesis to only view the suggested rows
- Enter `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1540. Add echo query result

### 1540.1

Back in the student info file, add an echo command at the bottom to print the suggested rows.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Practice the query in the psql prompt to make sure it's getting what you want
- The conditions should be `last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)`
- If you run your script, the last echo statement should print:
```sh
Efren|Reilly|3.9
Mariana|Russel|1.8
Mehdi|Vandenberghe|1.9
```
- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)")"` to the bottom of the `student_info.sh` file

## 1550. ./student_info

### 1550.1

Run the script to see the results.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1560. Add echo students containing sa or r as second to last letter

### 1560.1

Add another `echo` command, like the others, with a sentence that says: `Last name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nLast name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:"
```

## 1570. psql SELECT * FROM courses

### 1570.1

Start by viewing everything from the `courses` table in the psql prompt to see how you might be able to find this out.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1580. psql SELECT WHERE course LIKE _lgorithms

### 1580.1

There's a few that contain the word `Algorithms`. You can use `LIKE` to find text matching patterns like this: `WHERE <column> LIKE '<pattern>'`. An underscore (`_`) in a pattern will return rows that have any character in that spot. View the rows in this table with a course name that matches the pattern `'_lgorithms'`.

#### HINTS

- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- Enter `SELECT * FROM courses WHERE course LIKE '_lgorithms';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1590. psql SELECT WHERE course LIKE %lgorithms

### 1590.1

That pattern matched only rows that had exactly one character, followed by `lgorithms`. Another pattern character is `%`. It means as many of anything can be there. To find names that start with `W`, you could use `W%`. View the courses that end in `lgorithms`.

#### HINTS

- Use `LIKE` and a pattern with `%` to view the courses ending in `lgorithms`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `%lgorithms`
- Enter `SELECT * FROM courses WHERE course LIKE '%lgorithms';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1600. psql SELECT WHERE course LIKE Web%

### 1600.1

It found two that time. Try viewing courses that start with `Web`.

#### HINTS

- Use `LIKE` and a pattern with `%` to view the courses starting with `Web`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `Web%`
- Enter `SELECT * FROM courses WHERE course LIKE 'Web%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1610. psql SELECT WHERE course LIKE _e%

### 1610.1

Combine the two pattern matching characters to show courses that have a second letter of `e`.

#### HINTS

- Use `LIKE` and a pattern with `_` and `%` to view the courses whose second letter is `e`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- Remember that the `_` will match any single character and `%` will match any number of characters
- The pattern you want is `_e%`
- Enter `SELECT * FROM courses WHERE course LIKE '_e%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1620. psql SELECT WHERE course LIKE % %

### 1620.1

Try viewing the courses with a space in their names.

#### HINTS

- Use `LIKE` and a pattern with two `%`'s to view the courses with a space
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `% %`
- Enter `SELECT * FROM courses WHERE course LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1630. psql SELECT WHERE course NOT LIKE % %

### 1630.1

You use `NOT LIKE` to find things that don't match a pattern. View courses that don't contain a space.

#### HINTS

- Use `NOT LIKE` and a pattern with two `%`'s to view the courses without a space
- Here's an example: `SELECT * FROM courses WHERE course NOT LIKE '<pattern>';`
- The pattern you want is `% %`
- Enter `SELECT * FROM courses WHERE course NOT LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1640. psql SELECT WHERE course LIKE %A%

### 1640.1

Try finding the courses that contain an `A`.

#### HINTS

- Use `LIKE` and a pattern with two `%`'s to view the courses containing `A`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course LIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1650. psql SELECT WHERE course ILIKE %A%

### 1650.1

This showed all the courses with a capital `A`. `ILIKE` will ignore the case of the letters when matching. Use it to see the coureses with an `A` or `a`.

#### HINTS

- Use `ILIKE` and a pattern with two `%`'s to view the courses containing `A` in any case
- Here's an example: `SELECT * FROM courses WHERE course ILIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course ILIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1670. psql SELECT WHERE course NOT ILIKE %a%

### 1670.1

You can put `NOT` in front of `ILIKE` as well. Use it to see the courses that don't contain an `A` or `a`.
select * from courses where course NOT ILIKE ‘%A%’;

#### HINTS

- Use `NOT ILIKE` and a pattern with two `%`'s to view the courses not containing `A` in any case
- Here's an example: `SELECT * FROM courses WHERE course NOT ILIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course NOT ILIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1680. psql SELECT WHERE course NOT ILIKE %A% AND LIKE % %

### 1680.1

You combine these like any other conditions. View the courses that don't have a capital or lowercase `A` and have a space.

#### HINTS

- Use two conditions, one with `NOT ILIKE` and one with `LIKE`
- Here's an example: `SELECT * FROM courses WHERE course NOT ILIKE '<pattern>' AND course LIKE <pattern> ;`
- The two patterns you want are `%A%` and `% %`
- Enter `SELECT * FROM courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1690. Add echo query result

### 1690.1

In your student info script, add `echo` statemtent at the bottom like the other to print the results of the suggested query.
Add echo “select last_name from students where last_name ilike '%an%' or last_name like ‘%r_’”

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used `SELECT * FROM courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';` in the psql prompt
- Practice the query in the psql prompt to make sure it's getting what you want
- The conditions should be `last_name LIKE '%sa%' OR last_name LIKE %r_`
- If you run your script, the last echo statement should print:
```sh
Gilbert
Savage
Saunders
Hilpert
Hassanah
```
- Add `echo "$($PSQL "SELECT last_name FROM students WHERE last_name LIKE '%sa' OR last_name LIKE '%r_'")"` to the bottom of the `student_info.sh` file

## 1700. ./student_info.sh

### 1700.1

Run the script to see the output.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1710. Add echo students without major begin with D or gpa > 3.0

### 1710.1

Nice work! Add another `echo` command at the bottom, like the others. Make this one say: `First name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3.0:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nFirst name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3.0:"
```

## 1715. psql SELECT * FROM students

### 1715.1

Start by looking at all the data in the students table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1720. psql SELECT * FROM students WHERE gpa IS NULL

### 1720.1

All the fields that are empty or blank are `null`. You can access them using `IS NULL` as a condition like this: `WHERE <column> IS NULL`. View the students who don't have a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `IS NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `gpa IS NULL`
- Enter `SELECT * FROM students WHERE gpa IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1730. psql SELECT WHERE gpa IS NOT NULL

### 1730.1

Inversely, you can use `IS NOT NULL` to see rows that aren't null. View all the info on students that do have a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `IS NOT NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `gpa IS NULL`
- Enter `SELECT * FROM students WHERE gpa IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1740. psql SELECT WHERE major IS NULL

### 1740.1

View all the info on students who haven't chosen a major.

#### HINTS

- A null `major_id` field means that student hasen't chosen a major
- Use the `SELECT`, `FROM`, `WHERE`, and `IS NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major_id IS NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1750. psql SELECT WHERE major IS NULL and gpa IS NOT NULL

### 1750.1

View the students who don't have a major, but don't include students without a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, `AND` and `IS NOT NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition_1> AND <condition_2>;`
- The condition you want is `major_id IS NULL AND gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL AND gpa IS NOT NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1760. psql SELECT WHERE major_id IS NULL AND gpa IS NULL

### 1760.1

One more. View the students who don't have a major or gpa.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, and `AND` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition_1> AND <condition_2>;`
- The condition you want is `major_id IS NULL AND gpa IS NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL AND gpa IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1770. Add echo query result

### 1770.1

In your script, add an `echo` command at the bottom to print the results the sentence is looking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- Practice the query in the psql prompt to make sure it's getting what you want
- You will need to use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, `AND`, `LIKE`, and `OR` keywords
- If you run your script, the last echo statement should print:
```sh
Noe|Savage|3.6
Danh|Nhung|2.4
Hugo|Duran|3.8
```
- You previously used `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Here's an example of the conditions you want: `WHERE <condition_1> AND (<condition_2> OR <condition_3>)`
- The condtions should look like this: `WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)`
- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)")"` to the bottom of the `student_info.sh` file

## 1780. ./student_info.sh

### 1780.1

Run the script to see the students that meet those conditions.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1790. Add echo first five courses

### 1790.1

Moving along. Add another sentence, like the others that says `Course name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nCourse name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':"
```

## 1800. psql SELECT students ORDER BY gpa

### 1800.1

You can specify the order you want your results to be in by adding `ORDER BY <column_name>` at the end of a query. View all the info in the students table in order by the GPA's.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `ORDER BY` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> ORDER BY <column>;`
- You want to use `ORDER BY gpa` at the end of the query
- Enter `SELECT * FROM students ORDER BY gpa;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1810. psql SELECT students ORDER BY gpa DESC

### 1810.1

That put the lowest GPA's at the top. When using `ORDER BY`, it will be in ascending (`ASC`) order by default. Add `DESC` (descending) at the end of the last query to put the highest ones at the top.

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa;`
- Add `DESC` to the end of the last command
- Enter `SELECT * FROM students ORDER BY gpa DESC;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1820. psql SELECT students ORDER BY gpa DESC, first_name

### 1820.1

You can more columns to order things separating them with a comma like this: `ORDER BY <column_1>, <column_2>`. Any matching values in the first ordered column will then be ordered by the next. View all the student info with the highest GPA's at the top, and in alphabetical order by `first_name` if the GPA's match.

#### HINTS

- Here's an example: `SELECT <columns> FROM <table> ORDER BY <column_1> DESC, <column_2>;`
- You want to use `ORDER BY gpa DESC, first_name` for the order
- Enter `SELECT * FROM students ORDER BY gpa DESC, first_name;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1830. psql SELECT students ORDER BY gpa DESC, first_name LIMIT 10

### 1830.1

Many times, you only want to return a certain number of rows. You can add `LIMIT <number>` at the end of the query to only get the amount you want. View the students in the same order as the last command, but only return the first 10 rows.

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa DESC, first_name;`
- Add `LIMIT 10` to the end of the last command
- Enter `SELECT * FROM students ORDER BY gpa DESC, first_name LIMIT 10;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1835. psql SELECT students WHERE gpa IS NOT NULL ORDER BY gpa DESC, first_name LIMIT 10

### 1835.1

The order of the keywords in your query matters. You cannot put `LIMIT` before `ORDER BY`, or either of them before `WHERE`. View the same number of students, in the same order, but don't get the ones who don't have a GPA. 

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa DESC, first_name LIMIT 10;`
- The keywords you want are `SELECT`, `FROM`, `WHERE`, `IS NOT NULL`, `ORDER BY`, and `LIMIT`, in that order
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition> ORDER BY <column> LIMIT <number>;`
- The condition you want is `gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE gpa IS NOT NULL ORDER BY gpa DESC, first_name LIMIT 10;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1840. Add echo query result

### 1840.1

In your script, add the `echo` command to print the rows the sentence is asking for.
Add echo select course from courses where course like ‘_e%’ OR course like ‘%s’ order by course desc limit 5;

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
Web Programming
Web Applications
Server Administration
Network Security
Database Systems
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You will need the `SELECT`, `FROM`, `WHERE`, `LIKE`, `OR`, `ORDER BY`, `DESC`, and `LIMIT` keywords
- Add `echo "$($PSQL "SELECT course FROM courses WHERE course LIKE '_e%' OR course LIKE '%s' ORDER BY course DESC LIMIT 5")"` to the bottom of the `student_info.sh` file

## 1850. ./student_info.sh

### 1850.1

Run the script to make sure it worked.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1860. Add echo average GPA to two decimal places

### 1860.1

 :sunglasses: Add new `echo` command at the bottom of the script. Make this one say, `Average GPA of all students rounded to two decimal places:`

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nAverage GPA of all students rounded to two decimal places:"
```

## 1870. psql SELECT MIN(gpa)

### 1870.1

There's a number of mathematic functions to use with numerical columns. One of them is `MIN`, you can use it when selecting a column like this: `SELECT MIN(<column>) FROM <table>`. It will find the lowest value in the column. In the psql prompt, view the lowest value in the `gpa` column of the `students` table.

#### HINTS

- Enter `SELECT MIN(gpa) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1880. psql SELECT MAX(gpa)

### 1880.1

Another one is `MAX`, use it to see the largest `gpa` of the same table.

#### HINTS

- You previously used `SELECT MIN(gpa) FROM students;`
- Enter `SELECT MAX(gpa) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1890. psql SELECT SUM major_id

### 1890.1

In the same fashion, use a `SUM` function find out what all the values of the `major_id` column in the `students` table add up to. 
Select sum(major_id) from students;

#### HINTS

- Use `SUM` like you used `MIN` and `MAX`
- You previously used `SELECT MAX(gpa) FROM students;`
- Enter `SELECT SUM(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1900. psql SELECT AVG(major_id)

### 1900.1

`AVG` will give you the average of all the values in a column. Use it to see the average of the same column.
Select avg(major_id) from students;

#### HINTS

- It's the `major_id` column in the `students` table
- Use `AVG` like you used `SUM`, `MIN` and `MAX`
- You previously used `SELECT SUM(major_id) FROM students;`
- Enter `SELECT AVG(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1910. psql SELECT CEIL(AVG(major_id))

### 1910.1

You can find the round decimals up or down to the nearest whole number with `CEIL` and `FLOOR`, respectively. Use `CEIL` to round the average `major_id` up to the nearest whole number. Here's an example: `CEIL(<number_to_round>)`.

#### HINTS

- Here's another example: `CEIL(<average_of_major_id's_here>)`
- You previously used `SELECT AVG(major_id) FROM students;` to get the average
- Put `AVG(major_id)` inside the parenthesis of the `CEIL` function
- Enter `SELECT CEIL(AVG(major_id)) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1920. psql SELECT ROUND(AVG(major_id))

### 1920.1

Or, you can round a number to the nearest whole number with `ROUND`. Use it to round the average of the `major_id` column to the nearest whole number.

#### HINTS

- Here's an example: `ROUND(<average_of_major_id's_here>)`
- You previously used `SELECT CEIL(AVG(major_id)) FROM students;` to round a number up
- Put `AVG(major_id)` inside the parenthesis of the `ROUND` function
- Enter `SELECT ROUND(AVG(major_id)) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1930. psql SELECT ROUND(AVG(major_id),5)

### 1930.1

You can round to a specific number of decimal places by adding a comma and number to `ROUND`, like this: `ROUND(<number_to_round>, <decimals_places>)`. Round the average of the `major_id` to five decimal places.

#### HINTS

- You previously used `SELECT ROUND(AVG(major_id)) FROM students;` to get the average
- Put `AVG(major_id), 5` inside the parenthesis of the `ROUND` function
- Enter `SELECT ROUND(AVG(major_id), 5) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1940. Add echo query result

### 1940.1

You should be able to find what your script is asking for now. Add the command to print what it is asking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
3.09
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT ROUND(AVG(major_id), 5) FROM students;` in the psql prompt
- Add `echo "$($PSQL "SELECT ROUND(AVG(gpa), 2) FROM students")"` to the bottom of the `student_info.sh` file

## 1950. ./student_info.sh

### 1950.1

Run the script to see the average GPA of all your students.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1960. Add echo count of students per major with more than one student

### 1960.1

Add echo major_id, count of students named number_of_students, and average gpa rounded to two decimal places named average_gpa, for each major_id in the students table having a student count greater than 1:

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\n"
```

## 1970. psql SELECT COUNT(*) FROM majors

### 1970.1

Select count(*) from majors;

#### HINTS

- hint1

## 1980. psql SELECT COUNT(*) FROM students

### 1980.1

Select count(*) from students;

#### HINTS

- hint1

## 1990. psql SELECT COUNT(major_id) FROM students

### 1990.1

Select count(major_id) from students;

#### HINTS

- hint1

## 2000. psql SELECT DISTINCT(major_id) FROM students

### 2000.1

Select distinct(major_id) from students;

#### HINTS

- hint1

## 2010. psql SELECT FROM students GROUP BY major_id

### 2010.1

Select major_id from students group by major_id;

#### HINTS

- hint1

## 2020. psql SELECT count(*) FROM students GROUP BY major_id

### 2020.1

select major_id, count(*) from students group by major_id; - any columns must be in group by or use aggregate()

#### HINTS

- hint1

## 2030. psql SELECT MAX(gpa) FROM students GROUP BY major_id

### 2030.1

Select major_id, max(gpa) from students group by major_id;

#### HINTS

- hint1

## 2040. psql SELECT MIN(gpa), MAX(gpa) FROM students GROUP BY major_id

### 2040.1

select major_id, min(gpa), max(gpa) FROM students group by major_id;

#### HINTS

- hint1

## 2050. psql SELECT MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2050.1

Select major_id min(gpa), max(gpa) from students group by major_id having max(gpa) = 4;

#### HINTS

- hint1

## 2060. psql SELECT MIN(gpa) AS, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2060.1

Select major_id min(gpa) AS min_gpa, max(gpa) from students group by major_id having max(gpa) = 4;

#### HINTS

- hint1

## 2070. psql SELECT MIN(gpa) AS, MAX(gpa) AS FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2070.1

Select major_id min(gpa) AS min_gpa, max(gpa) AS max_gpa from students group by major_id having max(gpa) = 4;

#### HINTS

- hint1

## 2080. psql SELECT COUNT(*) AS FROM students GROUP BY major_id HAVING COUNT(*) < 8

### 2080.1

Select major_id, count(*) AS number_of_students FROM students group by major_id having count(*) < 8;

#### HINTS

- hint1

## 2090. Add echo query result

### 2090.1

select major_id, count(*) AS number_of_students, round(avg(gpa),2) AS average_gpa, from students group by major_id having count(*) > 1;

#### HINTS

- hint1

## 2100. ./student_info.sh

### 2100.1

Run the script to see the output.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2110. Add echo majors with no students or student with ma

### 2110.1

Add echo List of majors, in alphabetical order, that either no student is taking or has a student whose first name contains a case incentive ‘ma’:

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\n"
```

## 2120. psql students FULL JOIN majors

### 2120.1

select * from students FULL join majors on students.major_id = majors.major_id;
 = will show all students and all majors
 = if you want to see all students and all majors

#### HINTS

- hint1

## 2130. psql students LEFT JOIN majors

### 2130.1

select * from students LEFT join majors on students.major_id = majors.major_id;
 = will show all students but only majors if there’s a linked major_id in the students table
 = if you want to see all students but only majors if there’s a student taking it

#### HINTS

- hint1

## 2140. psql students RIGHT JOIN majors

### 2140.1

select * from students RIGHT join majors on students.major_id = majors.major_id;
 = will show all majors whether there’s a student with that major_id or not
 = if you want to see all majors but only students that are enrolled in a major 

#### HINTS

- hint1

## 2150. psql students INNER JOIN majors

### 2150.1

select * from students INNER join majors on students.major_id = majors.major_id;
 = will only show students that have a major and majors that have a student
 = if you only want to see students that have a major

#### HINTS

- hint1

## 2160. psql majors LEFT JOIN students

### 2160.1

Use a left join to show all majors but only students that are enrolled in a major
=When querying the database, you only want to get the exact info you need… These different types of join will help 

#### HINTS

- hint1

## 2170. psql majors LEFT JOIN students

### 2170.1

Use a right join to show all students but only majors if a student is enrolled in it

#### HINTS

- hint1

## 2180. psql majors INNER JOIN students

### 2180.1

Use the appropriate join to show only students that are enrolled in a major, and only majors that have a student enrolled in it

#### HINTS

- hint1

## 2190. psql majors FULL JOIN students

### 2190.1

Use the appropriate join to show all students and all majors
= SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2200. psql SELECT * students INNER JOIN majors

### 2200.1

“List of majors students are taking:” INNER JOIN
SELECT * FROM students INNER JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2210. psql SELECT major students INNER JOIN majors

### 2210.1

SELECT major FROM students INNER JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2220. psql SELECT DISTINCT(major) students INNER JOIN majors

### 2220.1

SELECT DISTINCT(major) FROM students INNER JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2230. psql SELECT * students RIGHT JOIN majors

### 2230.1

“List of majors students aren’t taking:” right join
SELECT * FROM students RIGHT JOIN MAJORS ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2240. psql SELECT * students RIGHT JOIN majors WHERE student_id IS NULL

### 2240.1

SELECT * FROM Students RIGHT JOIN majors on students.major_id=majors.major_id WHERE student_id IS NULL;

#### HINTS

- hint1

## 2245. psql SELECT major students RIGHT JOIN majors WHERE student_id IS NULL

### 2245.1

SELECT major FROM Students RIGHT JOIN majors on students.major_id=majors.major_id WHERE student_id IS NULL;

#### HINTS

- hint1

## 2250. psql SELECT * students LEFT JOIN majors

### 2250.1

“First name, last_name, gpa, and major of students who are taking data science or have a gpa of 3.8 or greater”: left join

#### HINTS

- hint1

## 2260. psql SELECT students LEFT JOIN majors WHERE major = Data Science OR gpa >= 3.8

### 2260.1

SELECT * FROM students LEFT JOIN majors ON students.major_id=majors.major_id WHERE major='Data Science' OR gpa >= 3.8;

#### HINTS

- hint1

## 2265. psql SELECT columns LEFT JOIN WHERE major = Data Science OR gpa >= 3.8

### 2265.1

SELECT first_name, last_name, gpa FROM students LEFT JOIN majors ON students.major_id=majors.major_id WHERE major='Data Science' OR gpa >= 3.8;

#### HINTS

- hint1

## 2270. psql SELECT * students FULL JOIN majors

### 2270.1

”List of majors that no student is taking or has a student with a 4.0 gpa”: full join
SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2280. psql SELECT * students FULL JOIN majors WHERE student_id IS NULL OR gpa = 4.0

### 2280.1

SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id WHERE student_id IS NULL OR gpa = 4.0;

#### HINTS

- hint1

## 2290. psql SELECT major FROM students FULL JOIN majors WHERE student_id IS NULL OR gpa = 4.0

### 2290.1

SELECT major FROM students FULL JOIN majors ON students.major_id=majors.major_id WHERE student_id IS NULL OR gpa = 4.0;

#### HINTS

- hint1

## 2300. psql DISTINCT(major) students FULL JOIN majors WHERE student_id IS NULL OR gpa = 4.0

### 2300.1

SELECT DISTINCT(major) FROM students FULL JOIN majors ON students.major_id=majors.major_id WHERE student_id IS NULL OR gpa = 4.0;

#### HINTS

- hint1

## 2310. Add echo query result

### 2310.1

Add echo “select * from students RIGHT JOIN majors on students.major_id=majors.major_id WHERE student_id IS NULL OR first_name ILIKE '%ma%';”

#### HINTS

- hint1

## 2320. ./student_info.sh

### 2320.1

Run the script to see the output.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2330. Add echo courses with no students or Obie Hilpert

### 2330.1

Add echo List of unique courses, in alphabetical order, that no student or ‘Obie Hilpert’ is taking:

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\n"
```

## 2340. psql SELECT * FROM students FULL JOIN majors

### 2340.1

SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2350. psql SELECT students.major_id students FULL JOIN majors

### 2350.1

select students.major_id from students FULL JOIN JOIN majors ON students.major_id = majors.major_id;

#### HINTS

- hint1

## 2360. psql SELECT * FROM students AS s FULL JOIN majors

### 2360.1

select * from students AS s FULL JOIN majors ON s.major_id=majors.major_id;

#### HINTS

- hint1

## 2370. psql SELECT * FROM students AS s FULL JOIN majors AS m

### 2370.1

select * from students AS s FULL JOIN majors AS m ON s.major_id=m.major_id;

#### HINTS

- hint1

## 2380. psql s.major_id SELECT * FROM students AS s FULL JOIN majors AS m

### 2380.1

select s.major_id from students AS s FULL JOIN majors AS m ON s.major_id=m.major_id;

#### HINTS

- hint1

## 2390. psql SELECT * FROM students FULL JOIN majors USING

### 2390.1

SELECT * FROM students FULL JOIN majors USING(major_id);

#### HINTS

- hint1

## 2400. psql SELECT * FROM students FULL JOIN majors USING FULL JOIN major_courses USING

### 2400.1

SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id);

#### HINTS

- hint1

## 2410. psql SELECT * students FULL JOIN majors USING JOIN major_courses USING JOIN courses USING

### 2410.1

SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses USING(course_id);

#### HINTS

- hint1

## 2420. Add echo query result

### 2420.1

Add echo “SELECT DISTINCT(course) FROM students RIGHT JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) WHERE (first_name = 'Obie' AND last_name = 'Hilpert') OR student_id IS NULL ORDER BY course;”

#### HINTS

- hint1

## 2430. ./student_info.sh

### 2430.1

Run the script to see the output.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2440. Add echo courses with only one student

### 2440.1

Add echo List of courses with only one student enrolled:

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\n"
```

## 2450. Add echo query result

### 2450.1

Add echo $PSQL SELECT count(course), course FROM students RIGHT JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) group by course HAVING count(course)=1;

#### HINTS

- hint1

## 2460. ./student_info.sh

### 2460.1

Run the script to see the output.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
