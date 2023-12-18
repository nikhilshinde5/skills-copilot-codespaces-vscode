// Create web server using express module
const express = require('express');
const app = express();
const port = 3000;
// Create web server using express module
const bodyParser = require('body-parser');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet');
// Use helmet
app.use(helmet());
// Use compression
app.use(compression());
// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// Use static
app.use(express.static('public'));
// Use pug
app.set('view engine', 'pug');
app.set('views', './views');
// Create router
const indexRouter = require('./routes/index');
const topicRouter = require('./routes/topic');
// Use router
app.use('/', indexRouter);
app.use('/topic', topicRouter);
// Error handling
app.use((req, res, next) => {
  res.status(404).send('Sorry can\'t find that!');
});
// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Listen port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));