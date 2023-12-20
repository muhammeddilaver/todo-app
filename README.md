
# TODO App RestfulAPI

Restful API developed for TODO App FrontEnd

## Installation and Run

```bash 
  npm install
  ( for local ) npx ts-node ./src/index.ts
```
    
## API Usage

| Method | Path | Parameters     | Description                |
| :----  | :-------- | :------- | :------------------------- |
|  `GET` | `/` | optional: `page` | List all TODOs |
|  `GET` | `/:id` |  | Get one TODO |
|  `POST` | `/` | `name`, `end_date` | Create a TODO |
|  `PUT` | `/:id` | `name`, `end_date` | Update a TODO |
|  `DELETE` | `/:id` |  | Delete a TODO |


  
