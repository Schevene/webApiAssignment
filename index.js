import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

//connect database
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 

//Assign port and start express
const app = express();
const PORT = 3000;

//Display UI page when it is created here
app.get('/', (req, res) => {
  res.json({
    message: 'FyreFestPt2'
  });
});

//use graphql to connect to database
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

//test that the app is running on the port specified
app.listen(PORT, () => {
  console.log(`Server is listening at  http://localhost:${PORT}`);
});