// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const querystring = require("querystring");
const handler = async (event) => {

    if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);

  return {
    statusCode: 200,
    body: params,
  };

}

module.exports = { handler }
