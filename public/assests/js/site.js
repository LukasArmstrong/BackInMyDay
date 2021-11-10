$(document).ready(function() {
  $("#input-files").on("change", function() {
    imagesPreview(this, "div.preview-images");
  });
  checkCookie()
});

$("#splash_search").keypress(function(e){
  if (e.which == '13'){
    $(".Splash-screen").slideUp();
  }
});

$('.close_modal').click(function() {
  $('#uploadModalCenter').modal('hide');
});


$('#UploadBtn').click(function() {
  $('#uploadModalCenter').modal('show');
});

function test(message){
  alert(message)
}

let imagesPreview = function(input, placeToInsertImagePreview) {
  if (input.files) {
    let filesAmount = input.files.length;
    for (i = 0; i < filesAmount; i++) {
      let reader = new FileReader();
      reader.onload = function(event) {
        $($.parseHTML("<img>"))
          .attr("src", event.target.result)
          .attr("height",200)
          .appendTo(placeToInsertImagePreview);
      };
      reader.readAsDataURL(input.files[i]);
    }
  }
};

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let visit = getCookie("Visited-BIMD");
  if (visit != "" && !window.location.href.includes('localhost')) {
    $(".Splash-screen").slideUp();
  } else {
     setCookie("Visited-BIMD", true, 30);
  }
}

function initMap() {
  const myLatLng = { lat: 38.212852184793654,  lng: -85.76085961907903 };
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
