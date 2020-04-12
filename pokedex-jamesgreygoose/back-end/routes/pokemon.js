const express = require("express");
const router = express.Router();
const {
  getPokemon,
  getPokemonById,
  getPokemonByName,
  getPokemonBySearch,
  savePokemon,
  deletePokemonById,
  updatePokemon,
  patchPokemon
} = require("../models/pokemon.js");

router.get("/pokemon", async (req, res) => {
  const { name, id, search } = req.query;
  if (name) {
    const namedPokemon = await getPokemonByName(name);
    res.json(namedPokemon);
    return;
  }
  if (id) {
    const idPokemon = await getPokemonById(id);
    res.json(idPokemon);
    return;
  }
  if (search) {
    const searchPokemon = await getPokemonBySearch(search);
    res.json(searchPokemon);
    return;
  }
  console.log(req.query); //add here as no dots to get req.perams
  const pokemon = await getPokemon();
  //express method of json automatically sorts this as a stringified file. Could have written JSON.stringify(pokemon) underneath.
  res.json(pokemon);
  return;
});

router.get("/pokemon/:pokemonId", async (req, res) => {
  // using : tells Express to put eg. pokemonId into the req.params property.
  const { pokemonId } = req.params; // could have written as const id = req.params.pokemonId
  const pokemon = await getPokemonById(pokemonId);
  res.json(pokemon);
});

router.post("/pokemon", async (req, res) => {
  const { body } = req; //desructuring body from req request.
  await savePokemon(body);
  res.send(`You have saved ${body.name} as a new Pokemon!`);
});

router.delete(
  "/pokemon/:id", //check this with Ben.
  async (req, result) => {
    const { id } = req.params;
    const name = await deletePokemonById(id);
    if (name) {
      result.status(200).send(`You have deleted pokemon ${name}!`); //and this!
    } else {
      result.status(406).send(`There is no Pokemon with that Id.`);
    }
  }
);

router.put("/pokemon/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const result = await updatePokemon(body, id);
  res.json(
    `You have updated pokemon with id ${id} with the name ${result.name}!`
  );
});

router.patch("/pokemon/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const result = await patchPokemon(body, id);
  res.json(`You have updated pokemon with id of ${id}!`);
});



module.exports = router;
