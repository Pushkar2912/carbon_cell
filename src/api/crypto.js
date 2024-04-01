import axios from "axios"

const URL = "https://api.coindesk.com/v1/bpi/currentprice.json"

export const getCrypto = async() => await axios.get(URL)


