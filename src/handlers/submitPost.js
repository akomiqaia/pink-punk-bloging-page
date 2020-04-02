const templates = require("../template");
const model = require("../model")

function submitPostHandler(req, res) {
  let body = ""
  req.on('data', chunk => body += chunk)
  req.on('end', () => {
    const message = new URLSearchParams(body);
    const messageObject = Object.fromEntries(message);
    console.log(messageObject); 
    model.newPost(messageObject)
      .then(() => {
        res.writeHead(302, {"location": "/" })
        res.end()
      } )
      .catch(err => console.error(err))
  } )
}

module.exports = submitPostHandler