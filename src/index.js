const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
//const { send } = require('express/lib/response')

const app = express()
const port= process.env.PORT

// app.use((req,res,next)=> {
//   res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () =>{
  console.log('Server is up listening on port ' + port);
})