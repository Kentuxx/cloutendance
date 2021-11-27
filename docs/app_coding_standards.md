# Cloutendance Coding Standard

## Database standards
- Database name should start with db (dbdatabasename)
- Database table/collection should be snake case and in plural form (ctn_users/tbl_users)
- Field id name shoud start with id followed by the table name and should be snake case (id_user)
- Field names should start with 3 letter abbrv of the table name followed by the name
- Field names should be snake case (usr_email, usr_password, usr_role, usr_timestamp)

## Code standards
- File name should be snake case
- Function name and variable name should be camel case
- Using prefixes such as is, set, get or suffixes max, min, cnt, key in functions or variables can be helpful
- Global variable should be capslock
  
### ReactJs
- Variables/state should end with its type (nameStr, fruitArry, studentObj, etc.)
- State setter should start with set followed by state name and should be camel case.(setNameStr, setFruitsArry, setStudentObj, etc.)
- Functional components should be pascal case

### SCSS
- Only create one scss file generator named main.scss
- All other scss file should start with underscore and should be snake case
- A color should contain a value of 6 opacity level (1.0, 0.8, 0.6, 0.4, 0.2, 0.1)
