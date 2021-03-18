const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request

        var arr=["microoven","inductionstove","fruits","veggies","utensils","woodenscratchers"];
var min=0;
var max=arr.length;
var value=Math.floor(Math.random()*(max-min)+min)

//console.log(value)
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> bonus webpage of a javascript file  </title> </head>')
      res.write('<body>')
     
      res.write('<h1>picking random one</h1>')
      res.write(`<p>${arr[value]}</p>`)
      res.end('</body></html>')
      //Close the responset
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})