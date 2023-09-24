module.exports = function (app) {

  /* GET home page. */
  app.get('/', function (req, res) {
    res.render('index', { title: 'Home Page' });
  });

  app.get('/about', function (req, res) {
    res.render('about', { title: 'About Me' });
  })

  app.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
  })

  app.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
  })

  app.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
  })

  app.get('/resume', function (req, res) {
    res.render('resume', { title: 'resume' });
  })
}
