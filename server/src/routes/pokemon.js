const express = require("express");
const pokedex = require('../data/pokedex.json');

const router = express.Router();


function sortById(key1, key2){
  return key1.numéro - key2.numéro;
}

pokedex.sort(sortById);


router.get('/pokemons', (req, res) => {
  if (!pokedex) {
    return res.status(400).send("Sorry Pokemons not found")
  }
  res.json(pokedex);
})

router.get('/pokemons/:id', (req, res) => {
  const pokeid = req.params.id;

  const pokeverif =  pokedex.find(c => c.numéro === pokeid);

  if (!pokeverif) {
    return res.status(400).send("Sorry Pokemons not found")
  }
  res.json(pokeverif);
})

module.exports = router;