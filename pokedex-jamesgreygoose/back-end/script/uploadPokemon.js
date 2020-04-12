const { query } = require("../index.js"); //  .. means up one folder.
const fs = require("fs");
const { promisify } = require("util"); //util is where promisify lives.
const readFile = promisify(fs.readFile); //allows sync await on readFile.

async function uploadPoke() {
  try {
    const data = await readFile(
      "/Users/jamesgreygoose/Projects/Week 3/pokedex-jamesgreygoose/pokedex.json"
    );
    const pokemon = JSON.parse(data);

    for (let i = 0; i < pokemon.length; i++) {
      const {
        pkdx_id,
        name,
        description,
        img_url,
        types,
        evolutions
      } = pokemon[i];

      const res = await query(
        `INSERT INTO pokemon (
    pkdx_id,
    name,
    description,
    img_url,
    types,
    evolutions
    )
    VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6
        )
     `,

        [pkdx_id, name, description, img_url, types, evolutions]
      );

      console.log(name);
    }
  } catch (err) {
    console.log(err);
  }
}

uploadPoke();
