const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/xyz', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Name of the Wind ... mapped"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    },
    {
      "id":"4",
      "title":"Ernesto Cuadros"
    },
    {
      "id":"5",
      "title":"Ana Flavia Cuadros"
    },
    {
      "id":"6",
      "title":"Eduardo Tejada"
    },
    {
      "id":"7",
      "title":"Guillermo Camara"
    },
    {
      "id":"8",
      "title":"Jorge Neyra"
    },
  ])
})

app.get('/abj', (req, res) => {
  res.json([
    {
      "id":"6",
      "title":"Eduardo Tejada"
    },
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000 jajaja')
})