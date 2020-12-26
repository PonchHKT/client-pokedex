const express = require('express')
const cors = require('cors')
/* API Routes */
const pokemons = require('./routes/pokemon')

const app = express()
app.use(cors())

app.use('/api', pokemons)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`)
})