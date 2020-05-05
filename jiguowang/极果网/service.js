let http = require('http');
let fs = require('fs');


function readFile(filename){
    return new Promise((res,rej)=>{
        fs.readFile(filename,(err,data)=>{
            if(err) rej(err);
            res(data)
        })
    })
}
http.createServer((req,res)=>{
    if(req.url == '/favicon.ico') return;
    res.writeHead(200,{"Content-type":"text/json;charest = utf-8","Access-Control-Allow-Origin":"*"});
    let dataurl = req.url;
    console.log(dataurl)
    if(dataurl=='/index'){
        async function fn(){
            let data = await readFile(`json${dataurl}.json`)
            res.end(data)
         }
        fn()
    }
}).listen(8000)