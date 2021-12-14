// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {

    if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  console.log(event.body);
  return {
    statusCode: 200,
    body: event.body,
  };

}

module.exports = { handler }
