const http = require('http'); // http module

const server = http.createServer((req, res)=>{
    if(req.url === "/"){ // requesting url for home page
        res.end('Welcome to our home page'); // response if the url is in home page
        return;
    }
    if(req.url === "/about"){ // request url for about page
        res.end('Here is our short history');
        return;
    }
    // if url is not available
    res.end(`
        <h1> Oops! <h1> 
        <p> We can't seem to find the page you are looking for</p>
        <a href = "/">back home </a>
    `);
})

const port = 5000;
server.listen(port, (req, res) =>{
    console.log(`Listening to port ${port}...`);
});
