/*WEB SERVER FUNCTIONALITY*/ 

var http = require("http");
var express = require("express");

var app = express();

//Enable CORS security
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});//this essentially allows everyone to access the innards of my computer


app.get("/",function(req,res){
    res.send("<h1 style='color:darkblue'>Hello from my own Server</h1>");
})



app.get("/contact", function (req, res) {
    res.send("My contact info is 808-888-9148, william.i.reediv@gmail.com")
})//keep in mind, each / dicates a new page

app.get("/about", function (req, res){
    res.send("My name is William, the fourth of my name");
})


app.listen(8080, function () {
    console.log("<Server running at http://localhost:8080");
});

//local IP Address: 127..0.0.1 = my machine
//8080 = a port


//read req body as obj
var bodyParser = require("body-parser");
app.use(bodyParser.json()); //using the body-Parser to read JSON files
//now we can read data that the client is sending.
//the server can read the data the client is sending, specifically



//*API FUNCTIONALITY*/
var items = [];
var count = 0;

app.get('/api/products', function (req,res){
    console.log("User wants the catalog");

    res.json(items);
});

app.post('/api/products', function (req,res){
    console.log("User wants to save item");

    var item = req.body;//contains object the client sends
    console.log(item);

    //assign unique id
    item.id = count;
    count+= 1;

    items.push(item);//this pushes array

    res.json(item);


    res.send("OK");
});




