var prefix = "/api/images/";
var cur_prefix;
function MenuLink(uri,text) {
  var link = $(document.createElement('a')).attr("href", "#" + uri).text(text);
  link.click(function(uri) {
    return function() {
      console.log("Fetching: " + uri);
      getData(uri);
    };
  }(uri));
  return $(document.createElement('p')).append(link);
}

function getData(path) {
  path = path || "";
  cur_prefix = path;
  $.getJSON(prefix+path, function(data) {
    $("#mainbox").html("");

    var hash = window.location.hash;
    console.log("up_str: " + hash);
    
    // create an 'up' link if not at the top level
    if (hash.length != 0 || hash === "#") {
      var up_str = hash.substring(0, hash.lastIndexOf("/"));
      $("#mainbox").append(new MenuLink(up_str, "Up"));
    }

    // create the rest of the directory links.
    for (var i = 0; i < data.dirs.length; ++i) {
      $("#mainbox").append(new MenuLink(data.dirs[i], data.dirs[i]));
    }

    // insert the images
    cur_imgs = data.imgs;
    $('div').text("");
    for (i = 0; i < cur_imgs.length; ++i) {
      var url = "/images/" + path + "/"+ cur_imgs[i];
      console.log(url);
      var img = $(document.createElement('img')).attr("src", decodeURI(url));
      $("div").append(img);
    }
  });
}

var cur_imgs;
$(document).ready(function() {
  getData(window.location.hash.slice(1));
});

