'use strict';

const {faker} = require("@faker-js/faker");
const { default: axios } = require("axios");

module.exports.generator = async (event) => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    color: faker.internet.color(),
    company: faker.company.companyName()
  }
}

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully! ' + "hello " + event.pathParameters.name,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.pokemon = async (event) => {
  const pokemonName = event.pathParameters.name;

  const config = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/" + pokemonName,
    responseType: "application/json"
  };
  
  const {data} = await axios(config);
  const moves = data.moves.map(x => x.move.name);
  const stats = data.stats.map(x => x.stat.name)
  const types = data.types.map(x => x.type.name)
  const sprites = {
    back: data.sprites.back_default,
    front: data.sprites.front_default,
  }

  return {
    name: data.name,
    weight: data.weight,
    moves: moves,
    stats: stats,
    height: data.height,
    types: types,
    sprites: sprites
  }
}