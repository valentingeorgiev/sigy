var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    this.$el.on('click', '.change-pic-btn', this.changePicture);
    this.$el.on('click', '.add-location-btn', this.addLocation);
    
};


app.initialize();


this.changePicture = function(event) {
  event.preventDefault();
  if (!navigator.camera) {
      alert("Camera API not supported", "Error");
      return;
  }
  var options =   {   quality: 50,
                      destinationType: Camera.DestinationType.DATA_URL,
                      sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                      encodingType: 0     // 0=JPG 1=PNG
                  };

  navigator.camera.getPicture(
      function(imgData) {
          $('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
      },
      function() {
          alert('Error taking picture', 'Error');
      },
      options);

  return false;
};

this.addLocation = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(
      function(position) {
          alert(position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
          alert('Error getting location');
      });
  return false;
};


