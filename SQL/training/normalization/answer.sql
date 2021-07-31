/* which advisors are the most popular? -- using the college table */

SELECT MIN(advisor_name) as name, count(*)
FROM college
GROUP BY advisor_email
ORDER BY count DESC
LIMIT 5;

/* which advisors are the most popular? -- using the normalized database */
SELECT MIN(advisors.name) as name, count(students.id)
FROM advisors, students
WHERE students.advisor_id = advisors.id
GROUP BY advisors.id
ORDER BY count DESC
LIMIT 5;


/* What are emails of all students in math or statistics department? -- using the college table */

SELECT student_email 
FROM college
WHERE major_1 IN ('Mathematics', 'Statistics')
OR
major_2 IN ('Mathematics', 'Statistics')
ORDER BY student_email;

/* What are emails of all students in math or statistics department? -- using the normalized database */

SELECT students.email 
FROM students, students_majors, majors
WHERE students_majors.student_id = students.id
AND
students_majors.major_id = majors.id
AND
majors.major IN ('Mathematics', 'Statistics')ORDER BY students.email;


/* Sort student names and emails by major -- using the college table */

SELECT full_name, student_email, major_1 AS major 
FROM college
UNION ALL 
SELECT full_name, student_email, major_2 AS major 
FROM college
WHERE major_2 IS NOT NULL
ORDER BY major;

/* Sort student names and emails by major -- using the normalized database */

SELECT students.name, students.email, majors.major 
FROM students, students_majors, majors
WHERE students.id = students_majors.student_id
AND majors.id = students_majors.major_id
ORDER BY majors.major