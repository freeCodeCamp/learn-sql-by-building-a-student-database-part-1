cp ./.freeCodeCamp/reset_files/students.csv .
cp ./.freeCodeCamp/reset_files/courses.csv .
psql -U postgres < ./.freeCodeCamp/reset_files/db.sql
