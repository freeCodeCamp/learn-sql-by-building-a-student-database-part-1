#!/bin/bash

# Script to insert data from courses.csv and students.csv into students database

cat courses.csv | while IFS="," read MAJOR COURSE
do
  echo $MAJOR $COURSE
done
