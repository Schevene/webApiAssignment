import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'FyreFestPt2'
  });
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is listening at  http://localhost:${PORT}`);
});