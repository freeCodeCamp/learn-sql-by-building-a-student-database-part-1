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

## 90. CREATE TABLE courses

### 90.1

CREATE TABLE courses

#### HINTS

- hint1

## 100. CREATE TABLE majors_courses

### 100.1

CREATE TABLE majors_courses

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

## 143. Create major_id Column

### 143.1

Create major_id column - int

#### HINTS

- hint1

## 146. Create gpa Column

### 146.1

Create gpa column - numeric(2,1);

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

## 183. Create major_id foreign key

### 183.1

Add major_id fkey to students

#### HINTS

- hint1

## 187. \d students

### 187.1

\d students

#### HINTS

- hint1

## 190. Create course_id Column

### 190.1

Create course_id serial pkey

#### HINTS

- hint1

## 200. Create course Column

### 200.1

Create course column - varchar(100) not null

#### HINTS

- hint1

## 220. \d courses

### 220.1

\d courses

#### HINTS

- hint1

## 230. Create major_id column

### 230.1

Create major_id column - int - in majors_courses

#### HINTS

- hint1

## 240. Set major_id Foreign Key

### 240.1

set major_id foreign key - in majors_courses

#### HINTS

- hint1

## 250. Create course_id Column

### 250.1

Create course_id column - int - in majors_courses

#### HINTS

- hint1

## 260. Set course_id Foreign Key

### 260.1

set course_id fkey - in majors_courses

#### HINTS

- hint1

## 270. \d majors_courses

### 270.1

\d majors_courses

#### HINTS

- hint1

## 280. Create Composite Primary Key

### 280.1

Create componsite pKey - alter table _ add primary key (m_id, c_id);

#### HINTS

- hint1

## 290. \d majors_courses

### 290.1

\d majors_courses

#### HINTS

- hint1

## 300. \d

### 300.1

\d

#### HINTS

- hint1

## 310. \d majors

### 310.1

\d majors

#### HINTS

- hint1

## 320. INSERT INTO majors

### 320.1

INSERT INTO majors ('dba')

#### HINTS

- hint1

## 340. SELECT * FROM majors

### 340.1

SELECT * FROM majors

#### HINTS

- hint1

## 350. INSERT INTO courses

### 350.1

INSERT INTO courses ('Data Structures and Algorithms')

#### HINTS

- hint1

## 360. SELECT * FROM courses

### 360.1

SELECT * FROM courses;

#### HINTS

- hint1

## 370. \d majors_courses

### 370.1

\d majors_courses

#### HINTS

- hint1

## 380. INSERT INTO majors_courses

### 380.1

INSERT INTO majors_courses (1,1)

#### HINTS

- hint1

## 390. SELECT * FROM majors_courses

### 390.1

SELECT * FROM majors_courses;

#### HINTS

- hint1

## 400. \d students

### 400.1

\d students

#### HINTS

- hint1

## 410. SELECT * FROM majors

### 410.1

SELECT * FROM majors

#### HINTS

- hint1

## 420. INSERT INTO students

### 420.1

INSERT INTO students ('Rhea', 'Kellems', 1, 2.5)

#### HINTS

- hint1

## 430. SELECT * FROM students

### 430.1

SELECT * FROM students

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

## 480. Add cat courses.csv

### 480.1

add cat courses.csv

#### HINTS

- hint1

## 490. ./insert_data.sh

### 490.1

./insert_data.sh

#### HINTS

- hint1

## 500. Add while read

### 500.1

Add | while read MAJOR COURSE
do 
  echo $MAJOR
done

#### HINTS

- hint1

## 510. ./insert_data

### 510.1

./insert_data

#### HINTS

- hint1

## 515. declare -p IFS

### 515.1

declare -p IFS

#### HINTS

- hint1

## 520. Add IFS

### 520.1

Add IFS=","

#### HINTS

- hint1

## 530. ./insert_data.sh

### 530.1

./insert_data.sh

#### HINTS

- hint1

## 533. Add echo all variables

### 533.1

Add echo $MAJOR $COURSE

#### HINTS

- hint1

## 536. ./insert_data.sh

### 536.1

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

## 562. Add MAJOR_ID

### 562.1

MAJOR_ID

#### HINTS

- hint1

## 564. Add echo MAJOR_ID

### 564.1

Add echo MAJOR_ID

#### HINTS

- hint1

## 566. ./insert_data.sh

### 566.1

./insert_data.sh

#### HINTS

- hint1

## 568. Add if -z MAJOR_ID

### 568.1

Add if -z MAJOR_ID
#two comments here
fi

#### HINTS

- hint1

## 570. Add INSERT_MAJOR_RESULT

### 570.1

Add INSERT_MAJOR_RESULT

#### HINTS

- hint1

## 580. Add echo INSERT_MAJOR_RESULT

### 580.1

Add echo INSERT_MAJOR_RESULT

#### HINTS

- hint1

## 590. cp courses.csv

### 590.1

cp courses.csv courses_test.csv

#### HINTS

- hint1

## 600. Add four records to courses_test.csv

### 600.1

Add three records to courses_test.csv

#### HINTS

- hint1

## 610. Change to cat courses_test.csv

### 610.1

Change to cat courses_test.csv

#### HINTS

- hint1

## 620. ./insert_data.sh

### 620.1

./insert_data.sh

#### HINTS

- hint1

## 625. Delete echo MAJOR_ID

### 625.1

Delete echo MAJOR_ID

#### HINTS

- hint1

## 630. SELECT * FROM majors

### 630.1

SELECT * FROM majors;

#### HINTS

- hint1

## 640. TRUNCATE majors

### 640.1

TRUNCATE majors

#### HINTS

- hint1

## 650. TRUNCATE majors, students

### 650.1

TRUNCATE majors, students

#### HINTS

- hint1

## 660. TRUNCATE majors, students, majors_courses

### 660.1

TRUNCATE majors, students, majors_courses

#### HINTS

- hint1

## 670. SELECT * FROM majors

### 670.1

SELECT * FROM majors

#### HINTS

- hint1

## 680. SELECT * FROM majors_courses

### 680.1

SELECT * FROM majors_courses

#### HINTS

- hint1

## 690. SELECT * FROM students

### 690.1

SELECT * FROM students

#### HINTS

- hint1

## 700. SELECT * FROM courses

### 700.1

SELECT * FROM courses

#### HINTS

- hint1

## 710. TRUNCATE courses, majors_courses

### 710.1

TRUNCATE courses, majors_courses

#### HINTS

- hint1

## 720. SELECT * FROM courses

### 720.1

SELECT * FROM courses

#### HINTS

- hint1

## 730. ./insert_data.sh

### 730.1

./insert_data.sh

#### HINTS

- hint1

## 740. SELECT * FROM majors

### 740.1

SELECT * FROM majors

#### HINTS

- hint1

## 750. Add if major

### 750.1

Add if [[ $MAJOR != "major" ]]

#### HINTS

- hint1

## 760. TRUNCATE majors CASCADE

### 760.1

TRUNCATE majors CASCADE

#### HINTS

- hint1

## 770. SELECT * FROM majors

### 770.1

SELECT * FROM majors;

#### HINTS

- hint1

## 780. ./insert_data.sh

### 780.1

./insert_data.sh

#### HINTS

- hint1

## 790. SELECT * FROM majors

### 790.1

SELECT * FROM majors

#### HINTS

- hint1

## 800. Delete echo INSERT_MAJOR_RESULT

### 800.1

Delete echo INSERT_MAJOR_RESULT

#### HINTS

- hint1

## 810. Add if INSERT_MAJOR_RESULT

### 810.1

add if [[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]
then
  echo Inserted into majors, $MAJOR
fi

#### HINTS

- hint1

## 820. TRUNCATE majors CASCADE

### 820.1

TRUNCATE majors CASCADE;

#### HINTS

- hint1

## 830. ./insert_data.sh

### 830.1

insert_data.sh

#### HINTS

- hint1

## 835. Add MAJOR_ID

### 835.1

Add get new MAJOR_ID

#### HINTS

- hint1

## 840. Add COURSE_ID

### 840.1

Add COURSE_ID = $($PSQL ...)

#### HINTS

- hint1

## 850. Add if -z COURSE_ID

### 850.1

add if -z course_id
  two comments here
fi

#### HINTS

- hint1

## 853. Add INSERT_COURSE_RESULT

### 853.1

Add INSERT_COURSE_RESULT

#### HINTS

- hint1

## 857. Add if INSERT_COURSE_RESULT

### 857.1

add if INSERT_COURSE_RESULT
  echo Inserted into courses, $COURSE
fi

#### HINTS

- hint1

## 860. TRUNCATE majors CASCADE

### 860.1

TRUNCATE majors CASCADE

#### HINTS

- hint1

## 870. ./insert_data.sh

### 870.1

./insert_data.sh

#### HINTS

- hint1

## 873. SELECT * FROM majors

### 873.1

SELECT * FROM majors

#### HINTS

- hint1

## 877. SELECT * FROM courses

### 877.1

SELECT * FROM courses

#### HINTS

- hint1

## 880. Add echo TRUNCATE tables

### 880.1

Add echo $($PSQL "TRUNCATE students, majors, courses, majors_courses")

#### HINTS

- hint1

## 890. ./insert_data.sh

### 890.1

./insert_data.sh

#### HINTS

- hint1

## 900. Add COURSE_ID

### 900.1

Add get new COURSE_ID

#### HINTS

- hint1

## 910. Add INSERT_MAJORS_COURSES_RESULT

### 910.1

Add INSERT_MAJORS_COURSES_RESULT

#### HINTS

- hint1

## 920. Add if INSERT_MAJORS_COURSES_RESULT

### 920.1

Add if [[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]
then
  echo Inserted into majors_courses, $MAJOR : $COURSE
fi

#### HINTS

- hint1

## 930. ./insert_data.sh

### 930.1

./insert_data.sh

#### HINTS

- hint1

## 950. SELECT * FROM majors

### 950.1

SELECT * FROM majors

#### HINTS

- hint1

## 960. SELECT * FROM courses

### 960.1

SELECT * FROM courses;

#### HINTS

- hint1

## 965. SELECT * FROM majors_courses

### 965.1

SELECT * FROM majors_courses;

#### HINTS

- hint1

## 970. cp students.csv

### 970.1

cp students.csv students_test.csv

#### HINTS

- hint1

## 975. Remove all but fours lines

### 975.1

Remove all but four rows from students_test

#### HINTS

- hint1

## 980. Add cat students_test.csv

### 980.1

cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
do
  echo $FIRST
done

#### HINTS

- hint1

## 985. ./insert_data.sh

### 985.1

./insert_data.sh

#### HINTS

- hint1

## 1020. Delete echo all variables

### 1020.1

Delete echo all variables

#### HINTS

- hint1

## 1022. Add if first_name

### 1022.1

Add if [[ $FIRST != "first_name" ]]
  (existing code)
fi

#### HINTS

- hint1

## 1025. Add comments

### 1025.1

Add comments

#### HINTS

- hint1

## 1030. Add MAJOR_ID

### 1030.1

Add MAJOR_ID

#### HINTS

- hint1

## 1033. Add echo MAJOR_ID

### 1033.1

Add echo MAJOR_ID

#### HINTS

- hint1

## 1037. ./insert_data.sh

### 1037.1

./insert_data.sh

#### HINTS

- hint1

## 1047. Add if -z MAJOR_ID

### 1047.1

Add if [[ -z MAJOR_ID ]]
  MAJOR_ID=null
fi

#### HINTS

- hint1

## 1050. ./insert_data.sh

### 1050.1

./insert_data.sh

#### HINTS

- hint1

## 1053. Delete echo MAJOR_ID

### 1053.1

Delete echo MAJOR_ID

#### HINTS

- hint1

## 1057. \d students

### 1057.1

\d students

#### HINTS

- hint1

## 1060. Add INSERT_STUDENT_RESULT

### 1060.1

Add INSERT_STUDENT_RESULT

#### HINTS

- hint1

## 1070. Add if INSERT_STUDENT_RESULT

### 1070.1

Add if [[ INSERT_STUDENT_RESULT == INSERT 0 1 ]]
then
  echo Inserted into students, $FIRST $LAST
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

## 1120. Change to cat courses.csv

### 1120.1

Change to cat courses.csv

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

## 1160. SELECT * FROM majors

### 1160.1

SELECT * FROM majors

#### HINTS

- hint1

## 1170. SELECT * FROM courses

### 1170.1

SELECT * FROM courses

#### HINTS

- hint1

## 1180. SELECT * FROM majors_courses

### 1180.1

SELECT * FROM majors_courses

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

## 1205. rm courses_test.csv

### 1205.1

rm courses_test.csv

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

## 1265. ./student_info.sh

### 1265.1

./student_info.sh

#### HINTS

- hint1

## 1270. Add PSQL Variable

### 1270.1

Add PSQL Variable

#### HINTS

- hint1
