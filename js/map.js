$(function() {
  var latlng = new google.maps.LatLng(35.272963643074036,-120.65957058906555);
  var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      myOptions);
  setMarkers(map, markers);

    var r = Raphael("holder"),
        axisy = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisx = ["12am", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12pm", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    r.g.txtattr.font = "11px 'Fontin Sans', Fontin-Sans, sans-serif";
    
    r.g.dotchart(10, 10, 620, 260, xs, ys, data, {symbol: "o", max: 10, heat: true, axis: "0 0 1 1", axisxstep: 23, axisystep: 6, axisxlabels: axisx, axisxtype: " ", axisytype: " ", axisylabels: axisy}).hover(function () {
        this.tag = this.tag || r.g.tag(this.x, this.y, this.value, 0, this.r + 2).insertBefore(this);
        this.tag.show();
    }, function () {
        this.tag && this.tag.hide();
    });

});

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
//  var image = new google.maps.MarkerImage('images/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels tall.
//      new google.maps.Size(20, 32),
      // The origin for this image is 0,0.
//      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
//      new google.maps.Point(0, 32));
//  var shadow = new google.maps.MarkerImage('images/beachflag_shadow.png',
      // The shadow image is larger in the horizontal dimension
      // while the position and offset are the same as for the main image.
//      new google.maps.Size(37, 32),
//      new google.maps.Point(0,0),
//      new google.maps.Point(0, 32));
      // Shapes define the clickable region of the icon.
      // The type defines an HTML <area> element 'poly' which
      // traces out a polygon as a series of X,Y points. The final
      // coordinate closes the poly by connecting to the first
      // coordinate.
  var shape = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
//        shadow: shadow,
//        icon: image,
        shape: shape,
        title: beach[0].toString(),
        zIndex: beach[3]
    });
  }
}