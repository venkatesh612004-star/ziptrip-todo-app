# API Documentation

## Base URL

```
http://localhost:5000
```

---

## 1. Get All Todos

### Endpoint

```
GET /todos
```

### Description

Returns all todos.

### Example Response

```json
[
  {
    "id": 1,
    "title": "Learn React",
    "description": "Complete the React tutorial",
    "completed": false,
    "priority": "High"
  }
]
```

---

## 2. Get Todo by ID

### Endpoint

```
GET /todos/:id
```

### Example

```
GET /todos/1
```

### Description

Returns a single todo based on its ID.

---

## 3. Create Todo

### Endpoint

```
POST /todos
```

### Request Body

```json
{
  "title": "Finish ZipTrip Challenge",
  "description": "Complete CRUD APIs",
  "completed": false,
  "priority": "High"
}
```

### Success Response

```json
{
  "id": 3,
  "title": "Finish ZipTrip Challenge",
  "description": "Complete CRUD APIs",
  "completed": false,
  "priority": "High"
}
```

---

## 4. Update Todo

### Endpoint

```
PUT /todos/:id
```

### Example

```
PUT /todos/1
```

### Request Body

```json
{
  "title": "Updated Todo",
  "description": "Updated Description",
  "completed": true,
  "priority": "Medium"
}
```

### Description

Updates the todo with the specified ID.

---

## 5. Delete Todo

### Endpoint

```
DELETE /todos/:id
```

### Example

```
DELETE /todos/1
```

### Description

Deletes the todo with the specified ID.

---

## HTTP Status Codes

| Status Code | Meaning                   |
| ----------- | ------------------------- |
| 200         | Request successful        |
| 201         | Todo created successfully |
| 404         | Todo not found            |
| 500         | Internal server error     |
