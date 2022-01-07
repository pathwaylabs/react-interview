# Goal
Create a UI/view to give admissions officers and other schools administrators a high-level overview of applicants

# Tasks

## Primary

- Consume `All Applicants` response and display in UI
  - Columns to include:
    - Name
    - Status (derivation from a few things)
    - Document Ids
    - Days as applicant (how many days since creation)

## Secondary

- Create New Applicant
- How would you incorporate light/dark mode functionality that will result in different themes across the application

# Assumptions/Constraints

- Time is a Unix timestamp
- A `null` value for `payment_id` indicates the payment has not been received
- 2  `document_ids`'s indicate all documents have been received
- The "status" column = `Completed` if:
  - `application_status` === "completed"
  - Payment has been received
  - Documents have been received
