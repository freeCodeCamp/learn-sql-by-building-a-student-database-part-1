#!/bin/bash

# Script to insert data from courses.csv and students.csv into students database

PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"

cat courses.csv | while IFS="," read MAJOR COURSE
do
  # get major_id
  MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
  echo $MAJOR_ID

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

done
