const cors = require("cors"); //security?
const express = require("express");
const app = express();
const PORT = 5000;
const pokemonRouter = require("./routes/pokemon"); // need to say 'USE THIS' somewhere in the file!

app.use((req, res, next) => {
  //MIDDLEWARE.... will send back requests to node with information.
  console.log(`${req.method} request received for ${req.url}`);
  next();
});

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); //allows any origin.
//   res.header(
//     "Access-Control-Allow-Headers", //allows all headers to be accepted.
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(cors());
app.use(express.json()); //middleware.Will work on anything.

// //get creates server
// app.get("/pokemon", async (req, res) => {
//   const pokemon = await getPokemon();
//   //express method of json automatically sorts this as a stringified file. Could have written JSON.stringify(pokemon) underneath.
//   res.json(pokemon);
// });

// app.get("/pokemon/:pokemonId", async (req, res) => {
//   // using : tells Express to put eg. pokemonId into the req.params property.
//   const { pokemonId } = req.params; // could have written as const id = req.params.pokemonId
//   const pokemon = await getPokemonById(pokemonId);
//   res.json(pokemon);
// });

app.use(pokemonRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
