# Write your MySQL query statement below
select e.name as Employee from Employee as e
join Employee as m
where m.id = e.managerId
and e.salary > m.salary;
