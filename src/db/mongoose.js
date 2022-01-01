const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT,{
  useNewUrlParser:true,
  //useCreateIndex:true
});
//mongodb+srv://dbUser:<password>@cluster0.6r3gb.mongodb.net/test



