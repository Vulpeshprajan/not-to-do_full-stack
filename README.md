# No to do backend api

this is the backend api for out not to do react app

## How to use

- Clone the project
- run `npm install`
- Make sure to have `nodemon` install globally in your system if you dont have then run `node i -g nodemon`

### API Endpoints

`all the api endpoint will follow the`rootUrl/api/v1` path

| #   | API | Method | Description                                 |
| --- | --- | ------ | ------------------------------------------- |
| 1.  | `/` | GET    | fetch all the ticket list from the server   |
| 2.  | `/` | POST   | add new ticket in the database              |
| 3.  | `/` | DELETE | Expects IDs to be deleted from database.    |
| 4.  | `/` | PATCH  | Expects IDs to be updated from the database |
