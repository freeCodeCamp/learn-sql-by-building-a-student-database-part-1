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

Instead of running through all the data in the CSV file, you should make some test data. Use the copy (`cp`) command to copy the `courses.csv` into a new file named `courses_test.csv`.

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

Change your `cat` command to loop through the test file instead of the full one.

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

You won't want to add the first line from the CSV file since those are just titles. In your `insert_data.sh` script, add an `if` condition that checks if `$MAJOR != major`. Put all the code in your loop in it's statements area so it only does any of it if it's not the first line.

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

You want a nicer message when something get's inserted so it's more infomative. Below your `INSERT_MAJOR_RESULT` variable, add an `if` statement that checks if the variable is equal to `INSERT 0 1`, which was what it was printing. Make sure to put the value in double quotes since it has spaces. Use `echo` to print `Inserted into majors, $MAJOR` in the statements area of the `if`.

#### HINTS

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

So the script will insert the majors correctly. Next is the courses. It will be the same steps as for the majors. Below your `get course_id` comment, add a `COURSE_ID` variable that get the `course_id` from the database. Remember that your `COURSE` variable will have the current course in the loop.

#### HINTS

- Here's an example of how to query the database: `COURSE_ID=$($PSQL "<query_here>")`
- For the query, you want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Here's an example of how the query part looks: `SELECT <column_name> FROM <table_name> WHERE <condition>`
- The condition you want is `course_id='$COURSE'`
- Here's how the query should look: `SELECT course_id FROM courses WHERE course='$COURSE'`
- Here's how the whole line should look: `COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")`

## 850. Add if -z COURSE_ID

### 850.1

It's the same as the majors, so below the second `if not found` comment, add an `if` statement that checks if the query was empty so you can insert the course if needed. Place the `insert course` and `get new course_id` comments in the statements area of the `if`. 

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

Below the `insert course` comment, create an `INSERT_COURSE_RESULT` variable that insert the course into the database.

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

Excellent. Instead of manually deleting the data each time you want to run the script, add the command to do it for you. Below your `PSQL` variable, use `echo` to query the database. In the query, truncate your four tables in this order: `students`, `majors`, `courses`, `majors_courses`.

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

Awesome. That makes it easier. Below your `get new course_id` comment, set the `COURSE_ID` to the new ID.

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
Add if [[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]
then
  echo Inserted into majors_courses, $MAJOR : $COURSE
fi

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

Run the script. All the data from the `courses_test.csv` file should get added.

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

Run the script to see if it's print the `FIRST` (`first_name`) variable correctly. It will take a second since it has to go through the first loop.

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

## 1280. Add “echo first name, last name and gpa of students with a 4.0 gpa:”

### 1280.1

Add “echo first name, last name and gpa of students with a 4.0 gpa:”

#### HINTS

- hint1

## 1290. Title

### 1290.1

Select * from students; - to see all the data in the table

#### HINTS

- hint1

## 1300. Title

### 1300.1

Select first_name from students;

#### HINTS

- hint1

## 1310. Title

### 1310.1

Select first_name, last_name, gpa from students;

#### HINTS

- hint1

## 1320. Title

### 1320.1

Select first_name, last_name, gpa from students where gpa < 2.5

#### HINTS

- hint1

## 1330. Title

### 1330.1

select first_name, last_name, gpa from students where gpa <= 1.3

#### HINTS

- hint1

## 1340. Title

### 1340.1

Select first_name, last_name, gpa from students where gpa != 4.0

#### HINTS

- hint1

## 1350. Title

### 1350.1

Select first_name, last_name, gpa from students where gpa > 1;

#### HINTS

- hint1

## 1360. Title

### 1360.1

Add echo select first_name, last_name gpa from students where gpa = 4.0;

#### HINTS

- hint1

## 1370. ./student_info.sh

### 1370.1

./student_info.sh

#### HINTS

- hint1

## 1380. Add All course names whose first letter starts with a letter before D

### 1380.1

Add echo All course names whose first letter starts with a letter **before** ‘D’

#### HINTS

- hint1

## 1390. Title

### 1390.1

select * from majors

#### HINTS

- hint1

## 1400. Title

### 1400.1

Select * from majors where major = ‘Game Design’

#### HINTS

- hint1

## 1410. Title

### 1410.1

select * from majors where major != ‘Game Design’

#### HINTS

- hint1

## 1420. Title

### 1420.1

Select * from majors where major > ’Game Design’

#### HINTS

- hint1

## 1430. Title

### 1430.1

Select * from majors where major >= ’Game Design’

#### HINTS

- hint1

## 1440. Title

### 1440.1

select * from majors where major < ‘G’;

#### HINTS

- hint1

## 1450. Title

### 1450.1

add echo “SELECT course from courses where first_name < ‘D’”

#### HINTS

- hint1

## 1460. ./student_info.sh

### 1460.1

./student_info.sh

#### HINTS

- hint1

## 1470. Title

### 1470.1

Add echo first name, last name, and gpa of students who’s last name begins with a letter ‘R’ or after and have a GPA greater than 3.5 or less than 2.5

#### HINTS

- hint1

## 1480. Title

### 1480.1

Select * from students;

#### HINTS

- hint1

## 1490. Title

### 1490.1

select * from students where last_name < ‘M’

#### HINTS

- hint1

## 1500. Title

### 1500.1

select * from students where last_name < ‘M’ OR gpa=3.9

#### HINTS

- hint1

## 1510. Title

### 1510.1

select * from students where last_name < ‘M’ AND gpa=3.9

#### HINTS

- hint1

## 1520. Title

### 1520.1

select * from students where last_name < ‘M’ AND gpa=3.9 OR gpa < 2.3;

#### HINTS

- hint1

## 1530. Title

### 1530.1

select * from students where last_name < ‘M’ AND (gpa=3.9 OR gpa < 2.3);

#### HINTS

- hint1

## 1540. Title

### 1540.1

Add echo “select * from students where last_name >= 'R' AND (GPA > 3.5 OR gpa < 2.5);”

#### HINTS

- hint1

## 1550. ./student_info

### 1550.1

./student_info

#### HINTS

- hint1

## 1560. Title

### 1560.1

Add echo “Last name of students whose last name have `sa` (case insensitive) in it or have an `r` as the second to last letter

#### HINTS

- hint1

## 1570. Title

### 1570.1

select * from courses;

#### HINTS

- hint1

## 1580. Title

### 1580.1

select * from courses where course like ‘_lgorithms';

#### HINTS

- hint1

## 1590. Title

### 1590.1

select * from courses where course like '%lgorithms';

#### HINTS

- hint1

## 1600. Title

### 1600.1

select * from courses where course like ‘Web%’;

#### HINTS

- hint1

## 1610. Title

### 1610.1

select * from courses where course like ‘_e%’;

#### HINTS

- hint1

## 1620. Title

### 1620.1

Select * from courses WHERE course LIKE '% %';

#### HINTS

- hint1

## 1630. Title

### 1630.1

Select * from courses WHERE course NOT LIKE '% %';

#### HINTS

- hint1

## 1640. Title

### 1640.1

select * from courses where course like ‘%A%’;

#### HINTS

- hint1

## 1650. Title

### 1650.1

select * from courses where course ilike ‘%A%’;

#### HINTS

- hint1

## 1660. Title

### 1660.1

select * from courses where course not like ‘%s%’;

#### HINTS

- hint1

## 1670. Title

### 1670.1

select * from courses where course NOT ILIKE ‘%s%’;

#### HINTS

- hint1

## 1680. Title

### 1680.1

select * from courses where course not ILIKE ‘%s%’ AND course LIKE ‘% %’;

#### HINTS

- hint1

## 1690. Title

### 1690.1

Add echo “select last_name from students where last_name ilike '%an%' or last_name like ‘%r_’”

#### HINTS

- hint1

## 1700. ./student_info.sh

### 1700.1

./student_info.sh

#### HINTS

- hint1

## 1710. Title

### 1710.1

Add echo first name, last name, and gpa of students who have not selected a major and either their first name begins with ‘D’ or they have a gpa greater than 3.0

#### HINTS

- hint1

## 1720. Title

### 1720.1

Select * from students where gpa IS NULL;

#### HINTS

- hint1

## 1730. Title

### 1730.1

Select * from students where gpa IS NOT NULL;

#### HINTS

- hint1

## 1740. Title

### 1740.1

select * from students where major_id is null;

#### HINTS

- hint1

## 1750. Title

### 1750.1

select * from students where major_id is null and gpa is not null;

#### HINTS

- hint1

## 1760. Title

### 1760.1

select * from students where major_id is null and gpa is null;

#### HINTS

- hint1

## 1770. Title

### 1770.1

Add echo “select first_name, last_name, gpa from students where major_id is null and (first_name like ‘D$’ or gpa > 3.0)”

#### HINTS

- hint1

## 1780. ./student_info.sh

### 1780.1

./student_info.sh

#### HINTS

- hint1

## 1790. Title

### 1790.1

add Echo course name of the first five courses, in reverse alphabetical order, that have an ‘e’ as the second letter or end with an ’s’

#### HINTS

- hint1

## 1800. Title

### 1800.1

Select * from students ORDER by gpa;

#### HINTS

- hint1

## 1810. Title

### 1810.1

Select * from students ORDER by gpa desc;

#### HINTS

- hint1

## 1820. Title

### 1820.1

Select * from students order by gpa desc, first_name;

#### HINTS

- hint1

## 1830. Title

### 1830.1

Select * from students order by gpa desc, first_name LIMIT 10;

#### HINTS

- hint1

## 1840. Title

### 1840.1

Add echo select course from courses where course like ‘_e%’ OR course like ‘%s’ order by course desc limit 5;

#### HINTS

- hint1

## 1850. ./student_info.sh

### 1850.1

./student_info.sh

#### HINTS

- hint1

## 1860. Title

### 1860.1

Add Echo Average GPA of all students rounded to two decimal places:

#### HINTS

- hint1

## 1870. Title

### 1870.1

Select min(major_id) from students;

#### HINTS

- hint1

## 1880. Title

### 1880.1

Select max(major_id) from students;

#### HINTS

- hint1

## 1890. Title

### 1890.1

Select sum(major_id) from students;

#### HINTS

- hint1

## 1900. Title

### 1900.1

Select avg(major_id) from students;

#### HINTS

- hint1

## 1910. Title

### 1910.1

select ceil(avg(major_id) from students;

#### HINTS

- hint1

## 1920. Title

### 1920.1

Select round(avg(major_id)) from students;

#### HINTS

- hint1

## 1930. Title

### 1930.1

Select round(avg(major_id), 5) from students;

#### HINTS

- hint1

## 1940. Title

### 1940.1

Add echo select round(avg(gpa), 2) from students;

#### HINTS

- hint1

## 1950. ./student_info.sh

### 1950.1

./student_info.sh

#### HINTS

- hint1

## 1960. Title

### 1960.1

Add echo major_id, count of students named number_of_students, and average gpa rounded to two decimal places named average_gpa, for each major_id in the students table having a student count greater than 1:

#### HINTS

- hint1

## 1970. Title

### 1970.1

Select count(*) from majors;

#### HINTS

- hint1

## 1980. Title

### 1980.1

Select count(*) from students;

#### HINTS

- hint1

## 1990. Title

### 1990.1

Select count(major_id) from students;

#### HINTS

- hint1

## 2000. Title

### 2000.1

Select distinct(major_id) from students;

#### HINTS

- hint1

## 2010. Title

### 2010.1

Select major_id from students group by major_id;

#### HINTS

- hint1

## 2020. Title

### 2020.1

select major_id, count(*) from students group by major_id; - any columns must be in group by or use aggregate()

#### HINTS

- hint1

## 2030. Title

### 2030.1

Select major_id, max(gpa) from students group by major_id;

#### HINTS

- hint1

## 2040. Title

### 2040.1

select major_id, min(gpa), max(gpa) FROM students group by major_id;

#### HINTS

- hint1

## 2050. Title

### 2050.1

Select major_id min(gpa), max(gpa) from students group by major_id having max(gpa) = 4;

#### HINTS

- hint1

## 2060. Title

### 2060.1

Select major_id min(gpa) AS min_gpa, max(gpa) from students group by major_id having max(gpa) = 4;

#### HINTS

- hint1

## 2070. Title

### 2070.1

Select major_id min(gpa) AS min_gpa, max(gpa) AS max_gpa from students group by major_id having max(gpa) = 4;

#### HINTS

- hint1

## 2080. Title

### 2080.1

Select major_id, count(*) AS number_of_students FROM students group by major_id having count(*) < 8;

#### HINTS

- hint1

## 2090. Title

### 2090.1

select major_id, count(*) AS number_of_students, round(avg(gpa),2) AS average_gpa, from students group by major_id having count(*) > 1;

#### HINTS

- hint1

## 2100. ./student_info.sh

### 2100.1

./student_info.sh

#### HINTS

- hint1

## 2110. Title

### 2110.1

Add echo List of majors, in alphabetical order, that either no student is taking or has a student whose first name contains a case incentive ‘ma’:

#### HINTS

- hint1

## 2120. Title

### 2120.1

select * from students FULL join majors on students.major_id = majors.major_id;
 = will show all students and all majors
 = if you want to see all students and all majors

#### HINTS

- hint1

## 2130. Title

### 2130.1

select * from students LEFT join majors on students.major_id = majors.major_id;
 = will show all students but only majors if there’s a linked major_id in the students table
 = if you want to see all students but only majors if there’s a student taking it

#### HINTS

- hint1

## 2140. Title

### 2140.1

select * from students RIGHT join majors on students.major_id = majors.major_id;
 = will show all majors whether there’s a student with that major_id or not
 = if you want to see all majors but only students that are enrolled in a major 

#### HINTS

- hint1

## 2150. Title

### 2150.1

select * from students INNER join majors on students.major_id = majors.major_id;
 = will only show students that have a major and majors that have a student
 = if you only want to see students that have a major

#### HINTS

- hint1

## 2160. Title

### 2160.1

Use a left join to show all majors but only students that are enrolled in a major
=When querying the database, you only want to get the exact info you need… These different types of join will help 

#### HINTS

- hint1

## 2170. Title

### 2170.1

Use a right join to show all students but only majors if a student is enrolled in it

#### HINTS

- hint1

## 2180. Title

### 2180.1

Use the appropriate join to show only students that are enrolled in a major, and only majors that have a student enrolled in it

#### HINTS

- hint1

## 2190. Title

### 2190.1

Use the appropriate join to show all students and all majors
= SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2200. Title

### 2200.1

“List of majors students are taking:” INNER JOIN
SELECT * FROM students INNER JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2210. Title

### 2210.1

SELECT major FROM students INNER JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2220. Title

### 2220.1

SELECT DISTINCT(major) FROM students INNER JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2230. Title

### 2230.1

“List of majors students aren’t taking:” right join
SELECT * FROM students RIGHT JOIN MAJORS ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2240. Title

### 2240.1

SELECT * FROM Students RIGHT JOIN majors on students.major_id=majors.major_id WHERE student_id IS NULL;

#### HINTS

- hint1

## 2250. Title

### 2250.1

“First name, last_name, gpa, and major of students who are taking data science or have a gpa of 3.8 or greater”: left join

#### HINTS

- hint1

## 2260. Title

### 2260.1

SELECT * FROM students LEFT JOIN majors ON students.major_id=majors.major_id WHERE major='Data Science' OR gpa >= 3.8;

#### HINTS

- hint1

## 2270. Title

### 2270.1

”List of majors that no student is taking or has a student with a 4.0 gpa”: full join
SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2280. Title

### 2280.1

SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id WHERE student_id IS NULL OR gpa = 4.0;

#### HINTS

- hint1

## 2290. Title

### 2290.1

SELECT major FROM students FULL JOIN majors ON students.major_id=majors.major_id WHERE student_id IS NULL OR gpa = 4.0;

#### HINTS

- hint1

## 2300. Title

### 2300.1

SELECT DISTINCT(major) FROM students FULL JOIN majors ON students.major_id=majors.major_id WHERE student_id IS NULL OR gpa = 4.0;

#### HINTS

- hint1

## 2310. Title

### 2310.1

Add echo “select * from students RIGHT JOIN majors on students.major_id=majors.major_id WHERE student_id IS NULL OR first_name ILIKE '%ma%';”

#### HINTS

- hint1

## 2320. ./student_info.sh

### 2320.1

./student_info.sh

#### HINTS

- hint1

## 2330. Title

### 2330.1

Add echo List of unique courses, in alphabetical order, that no student or ‘Obie Hilpert’ is taking:

#### HINTS

- hint1

## 2340. Title

### 2340.1

SELECT * FROM students FULL JOIN majors ON students.major_id=majors.major_id;

#### HINTS

- hint1

## 2350. Title

### 2350.1

select students.major_id from students FULL JOIN JOIN majors ON students.major_id = majors.major_id;

#### HINTS

- hint1

## 2360. Title

### 2360.1

select * from students AS s FULL JOIN majors ON s.major_id=majors.major_id;

#### HINTS

- hint1

## 2370. Title

### 2370.1

select * from students AS s FULL JOIN majors AS m ON s.major_id=m.major_id;

#### HINTS

- hint1

## 2380. Title

### 2380.1

select s.major_id from students AS s FULL JOIN majors AS m ON s.major_id=m.major_id;

#### HINTS

- hint1

## 2390. Title

### 2390.1

SELECT * FROM students FULL JOIN majors USING(major_id);

#### HINTS

- hint1

## 2400. Title

### 2400.1

SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id);

#### HINTS

- hint1

## 2410. Title

### 2410.1

SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses USING(course_id);

#### HINTS

- hint1

## 2420. Title

### 2420.1

Add echo “SELECT DISTINCT(course) FROM students RIGHT JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) WHERE (first_name = 'Obie' AND last_name = 'Hilpert') OR student_id IS NULL ORDER BY course;”

#### HINTS

- hint1

## 2430. ./student_info.sh

### 2430.1

./student_info.sh

#### HINTS

- hint1

## 2440. Title

### 2440.1

Add echo List of courses with only one student enrolled:

#### HINTS

- hint1

## 2450. Title

### 2450.1

Add echo $PSQL SELECT count(course), course FROM students RIGHT JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) group by course HAVING count(course)=1;

#### HINTS

- hint1

## 2460. ./student_info.sh

### 2460.1

./student_info.sh

#### HINTS

- hint1
