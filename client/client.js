Router.route('/', function() {
  this.render('Home');
}, {
  name: 'tab.home'
});

Router.route('/about', function() {
  this.render('About');
}, {
  name: 'tab.about'
});

Template.Home.events({
  "click .button": function (event) {
    var button = new Howl({
      urls: ['sonidito.mp3', 'sonidito.ogg, sonidito.m4a']
    }).play();
  }
});
