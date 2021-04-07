# Learn Bash and SQL by Building a Bike Rental Shop

> Welcome to the SQL Joins and Functions Lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello world` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. psql login

### 20.1

psql login

#### HINTS

- hint1

## 30. \l

### 30.1

\l

#### HINTS

- hint1

## 40. CREATE DATABASE students;

### 40.1

CREATE DATABASE students;

#### HINTS

- hint1

## 50. \l

### 50.1

\l

#### HINTS

- hint1

## 60. \c students

### 60.1

\c students

#### HINTS

- hint1

## 70. CREATE TABLE students

### 70.1

CREATE TABLE students

#### HINTS

- hint1

## 80. CREATE TABLE majors

### 80.1

CREATE TABLE majors

#### HINTS

- hint1

## 90. CREATE TABLE gpas

### 90.1

CREATE TABLE gps

#### HINTS

- hint1

## 100. CREATE TABLE students_majors

### 100.1

CREATE TABLE students_majors

#### HINTS

- hint1

## 110. \d

### 110.1

\d

#### HINTS

- hint1

## 120. Create student_id Column

### 120.1

create student_id - serial primary key

#### HINTS

- hint1

## 130. Create first_name Column

### 130.1

Create first_name column - varchar(50) not null

#### HINTS

- hint1

## 140. Create last_name Column

### 140.1

Create last_name column - varchar(50) not null

#### HINTS

- hint1

## 150. \d students

### 150.1

\d students

#### HINTS

- hint1

## 160. Create major_id Column

### 160.1

Create major_id column - serial primary key

#### HINTS

- hint1

## 170. Create major Column

### 170.1

Create major column - varchar(50) not null

#### HINTS

- hint1

## 180. \d majors

### 180.1

\d majors

#### HINTS

- hint1

## 190. Create student_id Column

### 190.1

Create student_id column in gpas - int primary key

#### HINTS

- hint1

## 200. Set student_id as Foreign Key

### 200.1

Set student_id in gpas as foreign key

#### HINTS

- hint1

## 210. Create gpa Column

### 210.1

Create gpa column - numeric(2, 1) not null

#### HINTS

- hint1

## 220. \d gpas

### 220.1

\d gpas

#### HINTS

- hint1

## 230. Create student_id column

### 230.1

Create student_id column - int not null - in s_m

#### HINTS

- hint1

## 240. Set student_id Foreign Key

### 240.1

set student_id foreign key

#### HINTS

- hint1

## 250. Create major_id Column

### 250.1

Create major_id column - int not null

#### HINTS

- hint1

## 260. Set major_id Foreign Key

### 260.1

set major_id fkey

#### HINTS

- hint1

## 270. \d students_majors

### 270.1

\d students_majors

#### HINTS

- hint1

## 280. Create Composite Primary Key

### 280.1

Create componsite pKey - alter table _ add primary key (s_id, m_id);

#### HINTS

- hint1

## 290. \d students_majors

### 290.1

\d students_majors

#### HINTS

- hint1

## 300. \d

### 300.1

\d

#### HINTS

- hint1

## 310. \d students

### 310.1

\d students

#### HINTS

- hint1

## 320. INSERT INTO students

### 320.1

INSERT INTO students ('Rhea', 'Kellems')

#### HINTS

- hint1

## 330. \d gpas

### 330.1

\d gpas

#### HINTS

- hint1

## 340. SELECT * FROM students

### 340.1

SELECT * FROM students

#### HINTS

- hint1

## 350. INSERT INTO gpas

### 350.1

INSERT INTO gpas (1, '2.5')

#### HINTS

- hint1

## 360. SELECT * FROM gpas

### 360.1

SELECT * FROM gpas;

#### HINTS

- hint1

## 370. \d majors

### 370.1

\d majors

#### HINTS

- hint1

## 380. INSERT INTO majors

### 380.1

INSERT INTO majors ('db admin')

#### HINTS

- hint1

## 390. SELECT * FROM majors

### 390.1

SELECT * FROM majors;

#### HINTS

- hint1

## 400. \d students_majors

### 400.1

\d students_majors

#### HINTS

- hint1

## 410. SELECT * FROM majors

### 410.1

SELECT * FROM majors

#### HINTS

- hint1

## 420. INSERT INTO students_majors

### 420.1

INSERT INTO students_majors (1,1)

#### HINTS

- hint1

## 430. SELECT * FROM students_majors

### 430.1

SELECT * FROM students_majors

#### HINTS

- hint1

## 440. touch insert_data.sh

### 440.1

touch insert_data.sh

#### HINTS

- hint1

## 450. chmod +x insert_data.sh

### 450.1

chmod +x insert_data.sh

#### HINTS

- hint1

## 460. Add shebang

### 460.1

Add shebang

#### HINTS

- hint1

## 470. Add comment

### 470.1

Add comment - Script to insert data from students.csv into students database

#### HINTS

- hint1

## 480. Add cat students.csv

### 480.1

add cat students.csv

#### HINTS

- hint1

## 490. ./insert_data.sh

### 490.1

./insert_data.sh

#### HINTS

- hint1

## 500. Add while read

### 500.1

Add | while read
do 
  echo $something
done

#### HINTS

- hint1

## 510. ./insert_data

### 510.1

./insert_data

#### HINTS

- hint1

## 520. Add IFS

### 520.1

Add IFS

#### HINTS

- hint1

## 530. ./insert_data.sh

### 530.1

./insert_data.sh

#### HINTS

- hint1

## 540. Delete echo

### 540.1

Delete echo

#### HINTS

- hint1

## 550. Add comments

### 550.1

Add psuedo code

#### HINTS

- hint1

## 560. Add PSQL Variable

### 560.1

Add PSQL Variable

#### HINTS

- hint1

## 570. Add INSERT_STUDENT_RESULT

### 570.1

Add INSERT_STUDENT_RESULT

#### HINTS

- hint1

## 580. Add echo INSERT_STUDENT_RESULT

### 580.1

Add echo INSERT_STUDENT_RESULT

#### HINTS

- hint1

## 590. touch students_test.csv

### 590.1

touch students_test.csv

#### HINTS

- hint1

## 600. Add three records to students_test.csv

### 600.1

Add three records to students_test.csv

#### HINTS

- hint1

## 610. Change to cat students_test.csv

### 610.1

Change to cat students_test.csv

#### HINTS

- hint1

## 620. ./insert_data.sh

### 620.1

./insert_data.sh

#### HINTS

- hint1

## 630. SELECT * FROM students

### 630.1

SELECT * FROM students;

#### HINTS

- hint1

## 640. TRUNCATE students

### 640.1

TRUNCATE students

#### HINTS

- hint1

## 650. TRUNCATE students, gpas

### 650.1

TRUNCATE students, gpas

#### HINTS

- hint1

## 660. TRUNCATE students, gpas, students_majors

### 660.1

TRUNCATE students, gpas, students_majors

#### HINTS

- hint1

## 670. SELECT * FROM students

### 670.1

SELECT * FROM students

#### HINTS

- hint1

## 680. SELECT * FROM gpas

### 680.1

SELECT * FROM gpas

#### HINTS

- hint1

## 690. SELECT * FROM students_majors

### 690.1

SELECT * FROM students_majors

#### HINTS

- hint1

## 700. SELECT * FROM majors

### 700.1

SELECT * FROM majors

#### HINTS

- hint1

## 710. TRUNCATE majors, students_majors

### 710.1

TRUNCATE majors, students_majors

#### HINTS

- hint1

## 720. SELECT * FROM majors

### 720.1

SELECT * FROM majors

#### HINTS

- hint1

## 730. ./insert_data.sh

### 730.1

./insert_data.sh

#### HINTS

- hint1

## 740. SELECT * FROM students

### 740.1

SELECT * FROM students

#### HINTS

- hint1

## 750. Add if first_name

### 750.1

Add if [[ $FIRST != first_name ]]

#### HINTS

- hint1

## 760. TRUNCATE students CASCADE

### 760.1

TRUNCATE students CASCADE

#### HINTS

- hint1

## 770. SELECT * FROM students

### 770.1

SELECT * FROM students;

#### HINTS

- hint1

## 780. ./insert_data.sh

### 780.1

./insert_data.sh

#### HINTS

- hint1

## 790. SELECT * FROM students

### 790.1

SELECT * FROM students

#### HINTS

- hint1

## 800. Delete echo INSERT_STUDENT_RESULT

### 800.1

Delete echo INSERT_STUDENT_RESULT

#### HINTS

- hint1

## 810. Add if INSERT_STUDENT_RESULT

### 810.1

add if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]
then
  echo success message
fi

#### HINTS

- hint1

## 820. TRUNCATE students CASCADE

### 820.1

TRUNCATE students CASCADE;

#### HINTS

- hint1

## 830. ./insert_data.sh

### 830.1

insert_data.sh

#### HINTS

- hint1

## 840. Add STUDENT_ID

### 840.1

Add STUDENT_ID = $($PSQL ...)

#### HINTS

- hint1

## 850. echo STUDENT_ID

### 850.1

add echo $STUDENT_ID

#### HINTS

- hint1

## 860. TRUNCATE students CASCADE

### 860.1

TRUNCATE students CASCADE

#### HINTS

- hint1

## 870. ./insert_data.sh

### 870.1

./insert_data.sh

#### HINTS

- hint1

## 880. Add echo TRUNCATE tables

### 880.1

Add echo $($PSQL "TRUNCATE students, gpas, majors, students_majors;")

#### HINTS

- hint1

## 890. ./insert_data.sh

### 890.1

./insert_data.sh

#### HINTS

- hint1

## 900. SELECT * FROM students

### 900.1

SELECT * FROM students

#### HINTS

- hint1

## 910. Add INSERT_GPA_RESULT

### 910.1

Add INSERT_GPA_RESULT=

#### HINTS

- hint1

## 920. Add if INSERT_GPA_RESULT

### 920.1

Add if [[ $INSERT_GPA_RESULT == "INSERT 0 1" ]]
then
  echo success
fi

#### HINTS

- hint1

## 930. ./insert_data.sh

### 930.1

./insert_data.sh

#### HINTS

- hint1

## 940. Delete echo STUDENT_ID

### 940.1

Delete echo STUDENT_ID

#### HINTS

- hint1

## 950. SELECT * FROM students

### 950.1

SELECT * FROM STUDENTS

#### HINTS

- hint1

## 960. SELECT * FROM gpas

### 960.1

SELECT * FROM gpas;

#### HINTS

- hint1

## 970. Add MAJOR_ID

### 970.1

Add MAJOR_ID = $(...)

#### HINTS

- hint1

## 980. Add if -z MAJOR_ID

### 980.1

Add if [[ -z $MAJOR_ID ]]
then
  echo major_id not found
fi

#### HINTS

- hint1

## 990. Add INSERT_MAJOR_RESULT

### 990.1

Add INSERT_MAJOR_RESULT

#### HINTS

- hint1

## 1000. Add if INSERT_MAJOR_RESULT

### 1000.1

Add if [[ INSERT_MAJOR RESULT == "INSERT 0 1" ]]
then
  echo success
fi

#### HINTS

- hint1

## 1010. ./insert_data.sh

### 1010.1

./insert_data.sh

#### HINTS

- hint1

## 1020. SELECT * FROM majors

### 1020.1

SELECT * FROM majors;

#### HINTS

- hint1

## 1030. SELECT * FROM students

### 1030.1

SELECT * FROM students

#### HINTS

- hint1

## 1040. SELECT * FROM gpas

### 1040.1

SELECT * FROM gpas;

#### HINTS

- hint1

## 1050. Add MAJOR_ID

### 1050.1

Add MAJOR_ID=

#### HINTS

- hint1

## 1060. Add INSERT_S_M_RESULT

### 1060.1

Add INSERT_S_M_RESULT

#### HINTS

- hint1

## 1070. Add if INSERT_S_M_RESULT

### 1070.1

Add if [[ INSERT_S_M_RESULT == INSERT 0 1 ]]
then
 echo success
fi

#### HINTS

- hint1

## 1080. ./insert_data.sh

### 1080.1

./insert_data.sh

#### HINTS

- hint1

## 1090. SELECT * FROM students

### 1090.1

SELECT * FROM students

#### HINTS

- hint1

## 1100. SELECT * FROM gpas

### 1100.1

SELECT * FROM gpas

#### HINTS

- hint1

## 1110. SELECT * FROM majors

### 1110.1

SELECT * FROM majors

#### HINTS

- hint1

## 1120. SELECT * FROM students_majors

### 1120.1

SELECT * FROM students_majors

#### HINTS

- hint1

## 1130. Change to cat students.csv

### 1130.1

Change to cat students.csv

#### HINTS

- hint1

## 1140. ./insert_data.sh

### 1140.1

./insert_data.sh

#### HINTS

- hint1

## 1150. SELECT * FROM students

### 1150.1

SELECT * FROM students

#### HINTS

- hint1

## 1160. SELECT * FROM gpas

### 1160.1

SELECT * FROM gpas

#### HINTS

- hint1

## 1170. SELECT * FROM majors

### 1170.1

SELECT * FROM majors

#### HINTS

- hint1

## 1180. SELECT * FROM students_majors

### 1180.1

SELECT * FROM students_majors

#### HINTS

- hint1

## 1190. ls

### 1190.1

ls

#### HINTS

- hint1

## 1200. rm students_test.csv

### 1200.1

rm students_test.csv

#### HINTS

- hint1

## 1210. ls

### 1210.1

ls

#### HINTS

- hint1

## 1220. touch student_info.sh

### 1220.1

touch student_info.sh

#### HINTS

- hint1

## 1230. chmod +x student_info.sh

### 1230.1

chmod +x student_info.sh

#### HINTS

- hint1

## 1240. Add shebang

### 1240.1

Add shebang

#### HINTS

- hint1

## 1250. Add comment

### 1250.1

Add comment # Info about my computer science students from students database

#### HINTS

- hint1

## 1260. Add echo title

### 1260.1

Add echo -e "\n~~ My Computer Science Students ~~\n"

#### HINTS

- hint1

## 1270. Add PSQL Variable

### 1270.1

Add PSQL Variable

#### HINTS

- hint1
