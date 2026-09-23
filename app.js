// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');


// where to find static files - css, images, js
// this needs to be uncommented so that the css file can be found and used in the layout.hbs file
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {
  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home - Week 1"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')
});

// desktop environment list route
app.get('/de-list', (req, res) => {
  state={de_list: true}
  head={title:"List of Desktop Environments"}
  res.render('de-list', {state, head});
  console.log('de-list')
});

// distro route
app.get('/distro-list', (req, res) => {
  state={distro_list: true}
  head={title:"List of Distributions"}
  res.render('distro-list', {state, head});
  console.log('distro-list')
});

// getting started route
app.get('/getting-started', (req, res) => {
  state={getting_started: true}
  head={title:"Getting started"}
  res.render('getting-started', {state, head});
  console.log('getting-started')
});

// other route
app.get('/other', (req, res) => {
  state={other: true}
  head={title:"Other"}
  res.render('other', {state, head});
  console.log('other')
});

// why route
app.get('/why', (req, res) => {
  state={why: true}
  head={title:"Why use GNU/Linux?"}
  res.render('why', {state, head});
  console.log('why')
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});