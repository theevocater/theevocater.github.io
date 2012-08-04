var prefix = "/api/images/";
var cur_prefix;
function MenuLink(uri,text) {
  var link = $(document.createElement('a')).attr("href", uri).text(text);
  link.click(function(uri) {
    return function() {
      console.log("Fetching: " + uri);
      getData(uri);
    };
  }(uri.slice(1)));
  return $(document.createElement('li')).append(link);
}

function removeExtension(file) {
  var match = /^(.*)\./.exec(file);
  if (match && match.length == 2)
    return match[1];
  else
    return file;
}

function ImageBox(url, text) {
  var image_box = $(document.createElement('div')).addClass("image_box").hide();

  // add the image
  image_box.append($(document.createElement('img')).load(function() {
    // add a fade in animation on load
    image_box.fadeIn('slow');
  }).attr("src", decodeURI(url)));

  image_box.append($(document.createElement('div')).addClass("caption").text(removeExtension(text)));

  return image_box;
}


function getData(path) {
  path = path || "";
  cur_prefix = path;
  $.getJSON(prefix+path, function(data) {
    $("nav > ul").html("");
    $("nav > ul").hide();

    var hash = window.location.hash;

    // create an 'up' link if not at the top level
    if (hash.length > 1) {
      var up_str = hash.substring(0, hash.lastIndexOf("/"));
      $("nav > ul").append(new MenuLink(up_str.length ? up_str : "#", "Up"));
    }

    // create the rest of the directory links.
    for (var i = 0; i < data.dirs.length; ++i) {
      var url ;
      if (hash.length > 1)
        url = hash + "/" + data.dirs[i];
      else
        url = "#" + data.dirs[i];
      $("nav > ul").append(new MenuLink(url, data.dirs[i]));
    }

    $("nav > ul").slideDown();

    // insert the images
    cur_imgs = data.imgs;
    $('#image_display').text("");
    for (i = 0; i < cur_imgs.length; ++i) {
      var url = "/images/" + path + "/"+ cur_imgs[i];
      console.log(url);
      $("#image_display").append(new ImageBox(url, cur_imgs[i]));
    }
  });
}

var cur_imgs;
$(document).ready(function() {
  getData(window.location.hash.slice(1));
});

/*
 * Create images with a real frame and give the image a name.
 * Fix up the menu links to be buttons or something.
 *
 *
 */
