# No to do full stack app

-This project is deploying on heruku and here is the live link

- This is the monorepo for our notodo full stack application

## How to use

- Clone the repo
- run `npm install`from the root dir. for the node backend
- `cd react-frontend-app`
- run `npm install` to install all the react dependency
- `cd .. ` back to root folder
- run `npm start`

### API Endpoints

`all the api endpoint will follow the`rootUrl/api/v1` path

| #   | API | Method | Description                                 |
| --- | --- | ------ | ------------------------------------------- |
| 1.  | `/` | GET    | fetch all the ticket list from the server   |
| 2.  | `/` | POST   | add new ticket in the database              |
| 3.  | `/` | DELETE | Expects IDs to be deleted from database.    |
| 4.  | `/` | PATCH  | Expects IDs to be updated from the database |
