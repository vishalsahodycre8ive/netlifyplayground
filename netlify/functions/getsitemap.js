const fetch = require("node-fetch");

const API_ENDPOINT = "https://bookeasy.visitcanberra.siteinprod.com.au/sitemap.xml";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: "utf8" } })
    .then((response) => response.text())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};