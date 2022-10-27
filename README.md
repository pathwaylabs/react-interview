## Prompt
Pathway Atlas is an SIS (Student Information System). We help our customers 
manage their student body, and track student progress towards their credentials.
Faculty often must record student attendance on a daily basis, and this data is 
vital both to supporting students' on their journey to graduation, and to our 
customers' Federal reporting obligations.

Using the provided starting point, create an application that allows faculty
to record student attendance, and that displays attendance records for each
student currently in the system.

## Context
### Libraries
We have included an assortment of libraries that are commonly used in our app.
You are welcome to use any of them to help manage form state, validation, or
otherwise reduce boilerplate.

### Material-UI
Our front-end is based entirely on Material-UI, and we'd like you to use the library
in this exercise. If you are not familiar with it, please refer to the 
[documentation](https://mui.com/material-ui/getting-started/overview/).

### Approach
Working on a small team with a rapidly-growing customer base, each of our engineers 
is expected to be able to design and build features with minimal guidance. Each 
engineer is also expected to hop in and out of different features or modules, 
so clear and concise code is critical.

We've endeavored to keep the scope of this feature fairly narrow, and our
guidelines open-ended, so you can focus on writing your best code, not the most code.

Above all, we're keen to see how you translate a set of product requirements 
into code. How you collect and display data, and how you structure your code,
are more important to us than your familiarity with any particular syntax or library.

## Instructions
### Your app should:
- [ ] Display all students currenltly "enrolled" (available in local storage)
- [ ] Allow the user to add an attendance record for one or more students
    - [ ] Attendance records must document at least the _hours_ and _date_ of attendance
- [ ] Allow the user to edit or delete an attendance record for one or more students
- [ ] Display the _total_ attendance hours for each student
- [ ] Display each attendance record per student

## Getting Started
1. Fork and clone the repo
2. Run the development server:
```bash
yarn && yarn dev
```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.