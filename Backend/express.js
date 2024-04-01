const express = require('express')
const app = express()

const port = 8080



app.get('/createNewCard', function (req, res) {
  res.send('Hello World')
})






app.listen(port,() => {
	console.log(`Sunucum ${port} 'ta ayağa kalktı. Tebrikler`);
})