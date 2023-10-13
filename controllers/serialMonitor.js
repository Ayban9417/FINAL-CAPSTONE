// // const express = require("express");
// // app = express();
// // //const controller = require('../controllers/admin');

// // //app.set("view engine", "ejs");
// // const { SerialPort } = require('serialport')
// // const { ReadlineParser } = require('@serialport/parser-readline')


// // const port = new SerialPort({ path: 'COM10', baudRate: 9600 })

// // const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
// // const datas = parser.on('data', console.log)



// const serialPortLIB = require('serialport');
// var SerialPort = serialPortLIB.SerialPort;
// var portNumber = "";
// var port ="";
// const ports = new SerialPort({ path: 'COM10', baudRate: 9600 })


// const { ReadlineParser } = require('@serialport/parser-readline')


// var itemList = [];
// // list all serial ports available    
// (async () => {
//     try {
//         const serialPortList = await SerialPort.list();
//         if (serialPortList.length > 0) {
//             itemList.push("select a port");
//             serialPortList.forEach(port => {
//                 itemList.push(port.path);
//             });
//         }
//     } catch (e) {
//         console.log(e);
//     }
// })();


// //server
// const content = require('fs').readFileSync('//addStaff.ejs');

// const httpServer = require('http').createServer((req, res) => {
//     res.setHeader('Content-Type', 'ejs');
//     res.setHeader('Content-Length', Buffer.byteLength(content));
//     res.end(content);
// });

// const io = require('socket.io')(httpServer);

// io.on('connect', socket => {
    

//     socket.on('son', (DATA_RECEIVED_FROM_HTML) => {
//         socket.emit('events', 'On');
//         ports.write("1");
//     });

//     socket.on('soff', (DATA_RECEIVED_FROM_HTML) => {
//         socket.emit('events', 'Off');
//         ports.write("2");
//     });

// });

// const parser = ports.pipe(new ReadlineParser({ delimiter: '\r\n' }))
//  // const datas = parser.on('data', console.log)
 
// parser.on('data', function(data) {
     
//      console.log(data);
     
//  });




