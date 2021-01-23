const http = require('http');
const fs = require('fs');
const requests = require('requests');


const htmlf = fs.readFileSync('./home.html','utf-8')

const replaceContent = (tempval,orgval)=>{
let tempreature = tempval.replace("{%tempval%}", orgval.main.temp);
tempreature = tempreature.replace("{%tempmin%}", orgval.main.feels_like);
tempreature = tempreature.replace("{%tempmax%}", orgval.main.humidity);
tempreature = tempreature.replace("{%location%}", orgval.name);
tempreature = tempreature.replace("{%country%}", orgval.sys.country);
tempreature = tempreature.replace("{%tempstatus%}", orgval.weather[0].main);
return tempreature;

}

const server = http.createServer((req,res)=>{
    if (req.url == '/') {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Faisalabad&units=metric&appid=ab73cc07d1fb9665741228a363920be9')
           .on('data',(chunk)=>{
                const objd = JSON.parse(chunk);
                const arrobj = [objd];
                // const tempc = arrobj[0].main.temp
                // console.log(tempc)
                const realtimedata = arrobj.map((val) => replaceContent(htmlf,val)).join("");
                res.write(realtimedata);
                // console.log(realtimedata);
           })
           .on('end',(err)=>{
               if(err) return console.log('connection closed due to errors', err);
                res.end();
            });
    };
});

server.listen(5000,'127.0.0.1');