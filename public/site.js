$("#splash_search").keypress(function(e){
  if (e.which == '13'){
    $(".Splash-screen").slideUp();
  }
});

$('#UploadBtn').click(function() {
  $('#uploadModalCenter').modal('show')
});
function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const myLatLng1 = { lat: 25.363, lng: -131.044 };
  const myLatLng2 = { lat: -29.363, lng: 31.044 };
  const latlnng = [myLatLng, myLatLng1, myLatLng2];
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    mapId: "25beecf3843296ec",
    center: myLatLng,
  });
  for (let i = 0; i < latlnng.length; i++) {
    new google.maps.Marker({
      position: latlnng[i],
      map,
      title: "Hello World!",
    });
  }
};
