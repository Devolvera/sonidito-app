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
    var buttonPress = new Howl({
      urls: ['sonidito.mp3'],
      buffer: true,
      onloaderror: function() {
        alert('There was a load error.');
      }
    });

    buttonPress.play();
  }
});
