const express = require('express')
const app = express()

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  },
  {
    "name": "Teppo Testaaja",
    "number": "123 456 7890",
    "id": 5
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Welcome to phonebook API!</h1>')
})

app.get('/info', (request, response) => {
  let html = '';
  html += `<p>Phonebook has info for ${persons.length} people</p>`
  html += `<p>${new Date()}</p>`
  response.send(html)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
