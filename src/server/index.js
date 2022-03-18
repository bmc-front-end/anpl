var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// using env vars
const dotenv = require('dotenv')
dotenv.config()

  
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", "YOUR TEXT HERE");
  formdata.append("lang", "en");  // 2-letter code, like en es fr ...
  
  const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    const app = express()
    
    app.use(express.static('dist'))
    
    console.log(__dirname)
    
    app.get('/', function (req, res) {
        res.sendFile('dist/index.html')
        // res.sendFile(path.resolve('src/client/views/index.html'))
    })
    
    // designates what port the app will listen to for incoming requests
    app.listen(8080, function () {
        console.log('Example app listening on port 8080!')
        console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
