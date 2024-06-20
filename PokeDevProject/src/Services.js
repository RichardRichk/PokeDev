import axios from "axios";

const pokeDexApi = `https://pokeapi.co/api/v2/pokemon/`

export const api = axios.create({
    baseURL: pokeDexApi
  })