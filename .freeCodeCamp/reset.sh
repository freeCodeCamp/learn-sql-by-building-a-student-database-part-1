cp ./.freeCodeCamp/reset_files/students.csv .
cp ./.freeCodeCamp/reset_files/courses.csv .
psql -U postgres < ./.freeCodeCamp/reset_files/db.sql
cp ./.freeCodeCamp/reset_files/insert_data.sh .
cp ./.freeCodeCamp/reset_files/courses_test.csv .
