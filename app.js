const path = require('path');
const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cors = require('cors');
const methodOverride = require('method-override');



const sql = require('./database/mysql');

env.config();
const app = express();

var http = require('http').Server(app);


app.use(cors());
app.use(methodOverride('_method'));

sql.connect();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(
  session({
    secret: process.env.SESSION_SECRET='secret',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

const adminRoutes = require('./routes/admin');
const staffRoutes = require('./routes/staff');
const studentRoutes = require('./routes/student');
const homeRoutes = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/admin', adminRoutes);
app.use('/staff', staffRoutes);
app.use('/student', studentRoutes);
app.use('/', homeRoutes);

// Home Page
app.use(homeRoutes);

 const { SerialPort } = require('serialport')
  const { ReadlineParser } = require('@serialport/parser-readline')


//   const port = new SerialPort({ path: 'COM10', baudRate: 9600 })

//  const io = require('socket.io')(http);
// // io.on('connect', socket => {
    

// //   socket.on('son', (DATA_RECEIVED_FROM_HTML) => {
// //       socket.emit('events', 'On');
// //       ports.write("1");
// //   });

// //   socket.on('soff', (DATA_RECEIVED_FROM_HTML) => {
// //       socket.emit('events', 'Off');
// //       ports.write("2");
// //   });

// // });

// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
// // const datas = parser.on('data', console.log)

// parser.on('data', function(data) {
   
//    console.log(data);
   
// });





//  const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
//   parser.on('data', console.log)





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started @ ${PORT}`);
});
