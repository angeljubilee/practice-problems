# Write your MySQL query statement below
select lastName, firstName, city, state from Person
left join Address using(personId);
