require('dotenv').config()
const mongoose = require('mongoose')
const Person = require('./models/person')

const name = process.argv[2]
const number = process.argv[3]

if ( name && number ) {
  const person = new Person({
    name,
    number,
  })

  person.save().then(person => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(results => {
    console.log('phonebook:')
    results.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}
