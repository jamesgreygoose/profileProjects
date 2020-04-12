// const fs = require("fs"); //accesses file system.Core module, no need to install.
// const { promisify } = require("util"); //util is part of Node? Helps with promisify?
const { query } = require("../db/index.js");

// const readFile = promisify(fs.readFile);
// const writeFile = promisify(fs.writeFile); // writes to file from outside in Postman.

async function getPokemon() {
  const data = await query(`SELECT * FROM pokemon`); //query will automatically parse data.
  // const pokemon = JSON.parse(data); // turns in JS object from JSON.
  console.log(data);
  return data.rows;
}

async function getPokemonById(id) {
  const pokemon = await query(`SELECT * FROM pokemon WHERE pkdx_id=$1`, [id]); //What does $1 do?
  //   return pokemon.find(item => item.pkdx_id == id);                  //CHECK THIS!
  return pokemon.rows[0];
}

async function getPokemonByName(name) {
  const pokemon = await query(
    `SELECT * FROM pokemon WHERE name ILIKE '%' || $1 || '%'`,
    [name]
  );
  // return pokemon.find(item => item.name.toLowerCase() == name.toLowerCase());
  return pokemon.rows[0];
}

async function getPokemonBySearch(search) {
  const pokemon = await getPokemon();
  return pokemon.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}

async function savePokemon(pokemon) {
  //what we're taking in.
  const pokemonArray = await query(
    `INSERT INTO pokemon (pkdx_id,
    name,
    description,
    img_url,
    types,
    evolutions) VALUES ($1, $2, $3, $4, $5, $6)`,
    [pkdx_id, name, description, img_url, types, evolutions]
  );
  const newArray = [...pokemonArray, pokemon]; //... spread operator adds arrays to a new variable.
  await writeFile("pokedex.json", JSON.stringify(newArray));
}

async function deletePokemonById(id) {
  const res = await query(
    `DELETE FROM pokemon WHERE pkdx_id=$1 RETURNING name`,
    [id]
  );
  if (res.rowCount > 0) {
    return res.rows[0].name;
  } else {
    return undefined;
  }
}

async function updatePokemon(body, id) {
  const { pkdx_id, name, description, img_url, types, evolutions } = body;
  const res = await query(
    `UPDATE pokemon 
    SET pkdx_id = $1, 
    name = $2, 
    description = $3,
    img_url = $4,
    types = $5, 
    evolutions = $6 
    WHERE id = $7
    RETURNING name`, //very important when returning for console.log.
    [pkdx_id, name, description, img_url, types, evolutions, id]
  );
  return res.rows[0];
}

async function patchPokemon(body, id) {
  const { pkdx_id, name, description, img_url, types, evolutions } = body;
  const res = await query(
    `UPDATE pokemon
    SET 
    pkdx_id = COALESCE($1,pkdx_1),
    name = COALESCE($2,name),
    description = COALESCE($3,description),
    types = COALESCE($4,types),
    evolutions = COALESCE($5,evolutions)
    WHERE id = $7,`[
      (pkdx_id, name, description, img_url, types, evolutions, id)
    ]
  );
  return res;
}

module.exports = {
  getPokemon,
  getPokemonById,
  getPokemonByName,
  getPokemonBySearch,
  savePokemon,
  deletePokemonById,
  updatePokemon,
  patchPokemon
};
