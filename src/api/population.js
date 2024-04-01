import axios from "axios";

const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

export const getPopulation = async() => await axios.get(URL);