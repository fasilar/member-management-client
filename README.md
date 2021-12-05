# MemberManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Instructions

1. Run API project and replace the API Base URL in environments.ts file
2. Run `npm install` to install all packages specified in package.json

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Submissions

1. Header with Navigation Bar
2. A listing screen for members
3. Filter option for members (By policy number and/or Member Card Number)
        => Validations : 
            1. Policy Number or member card number are required 
            2. Policy Number should be a number (10 digits).
            3. Member Card Number should be a number (10 digits).
4. A field 'Service Date' does nothing, but it displays a nice date picker 
        => Validations : 
            1. Restrict the dates in the datepicker to 30 days in the past month, to 30 days in the future.
5. Make sure the results for the specified parameters are cached for an hour


## Considerations & Decisions

1. Modularized design for the application considering future aspects along with separation of concerns
2. Included reusable components

## Limitations. & Improvements Needed

1. Time Constraint
2. Now the screen is empty unless we search for some records. It would be better if we could list all the records with pagination intially. 
3. Currently we are displaying the records as grid, It would be nice to have a listing view of records as well along with sort option
4. UI/UX experience can be improved (Due to lack of time)
5. Exception handling need to be done




