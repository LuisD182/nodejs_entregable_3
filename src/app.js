const express = require('express');
const app = express();
const PORT = 7887
const cors = require("cors");
const morgan = require("morgan");
const myDataBase = require('./utils/database');
const initModels = require('./modules/initModules');
const routerUser = require('./routes/users.routes');
const routerToDos = require('./routes/todos.routes')

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
initModels();

app.use(routerUser);
app.use(routerToDos);


myDataBase.authenticate()
    .then( ()=>{console.log('myDataBase has been authenticated!')} )
    .catch ( (error)=>{ console.log(error) } );

myDataBase.sync({ alter: true })
    .then ( ()=> {console.log('myDataBase has been sync!')} )
    .catch( (error)=>{console.log(error) } );






app.get('/', (req, res)=>{
    res.status(400).send({mesagge: "Welcome to the server LD"})
})



app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})