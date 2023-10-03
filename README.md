## This project was made using React/Next.js

Clone this repository to your local computer and in your terminal run 
```bash
npm run dev
``` 
in the root directory of the project.

State data was shared between components through the React Context API.
Reducers were used to manage state.

Property details are gotten from mock data in JSON file which can be found in <rootDir>/app/_data. To start the server, in your terminal run
```bash
json-server --watch --port 8000 ./app/_data/db.json
``` 
in the root directory of the project.

A few sample unit tests were created for some test cases. Tests were carried out using Jest and React testing library. ESlint was also employed for error checking/formatting.
Test files can be found in <rootDir>/app/_tests/
To run tests, in your terminal run
```bash
npm t
``` 
in the root directory of the project