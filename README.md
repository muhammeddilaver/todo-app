
# TODO App RestfulAPI

Restful API developed for TODO App FrontEnd

## Yükleme 

benim-projem'i npm kullanarak yükleyin

```bash 
  npm install
```
    
## API Usage

#### Tüm öğeleri getir

```http
  GET /
```

| Method | Path | Parameters     | Description                |
| :----  | :-------- | :------- | :------------------------- |
|  `GET` | `/` | optional: `page` | List all TODOs |
|  `GET` | `/:id` |  | Get one TODO |
|  `POST` | `/` | `name`, `end_date` | Create a TODO |
|  `PUT` | `/:id` | `name`, `end_date` | Update a TODO |
|  `DELETE` | `/:id` |  | Delete a TODO |


  