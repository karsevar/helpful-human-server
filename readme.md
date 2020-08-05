# API Documentation

#### 1️⃣ Backend delpoyed at https://morning-spire-68989.herokuapp.com/<br>

- This repository is the accompanying backend and database for helpful-human-frontend. Please refer to https://github.com/karsevar/helpful-human-frontend on information regarding the interview challenge and the application structure.

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

#### Server Routes

| Method | Endpoint                 | Access Control | Description                                                                                                                                                                                                                   |
| ------ | ------------------------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/getAllColors`          | all users      | Returns All color entries within the database.                                                                                                                                                                                |
| GET    | `/getColorById/:colorId` | all users      | Returns an object that matches the passed in colorId.                                                                                                                                                                         |
| GET    | `/getColorsByPagination` | all users      | Returns color entries by page query. Each page contains 12 color entries.                                                                                                                                                     |
| GET    | `/getLastIndex`          | all users      | Returns the id of the last entry within the database and the maximum number of pages that can be rendered (calculated by the total number of entries in the database divided by 12, the total number of entries in each page) |

#### Routes

---

GET `/getAllColors` will return an object containing a message and an array of length 252, which is the total number of color entries in the database:

_Example_

```javascript
{
    "message": "Receiving all colors from database",
    "data": [
        {
            "id": 1,
            "name": "Black",
            "hexString": "#000000"
        },
        {
            "id": 2,
            "name": "Maroon",
            "hexString": "#800000"
        },
        {
            "id": 3,
            "name": "Green",
            "hexString": "#008000"
        },
        {
            "id": 4,
            "name": "Olive",
            "hexString": "#808000"
        },
        ...
    ]
}
```

GET `/getColorById/:colorId` will return an object containing the information of the passed in colorId:

Example query:
`/getColorById/1`

_Example_

```javascript
{
    "data": {
        "id": 1,
        "name": "Black",
        "hexString": "#000000"
    }
}
```

GET `/getColorsByPagination?page=[pageNum]` will return an object containing a message and an array that has 12 total color objects. Make sure to include the query `page=[some number]` in the endpoint to assess a specific page:

Example query:
`/getColorsByPagination?page=21`

_Example_

```javascript
{
    "message": "Querying colors from page number: 21",
    "data": {
        "data": [
            {
                "id": 241,
                "name": "Grey35",
                "hexString": "#585858"
            },
            {
                "id": 242,
                "name": "Grey39",
                "hexString": "#626262"
            },
            ...
        ],
        "pagination": {
            "perPage": 12,
            "currentPage": "21",
            "from": 240,
            "to": 252
        }
    }
}

```

GET `/getColorById/:colorId` will return an object containing a message, the maximum number of pages that the entries in the database can fill (calculated with the assumption of 12 entries per page), and the total number of entries in the database:

_Example_

```javascript
{
    "message": "Returning the last Index Value in the Database",
    "data": 252,
    "maxPages": 21
}
```
