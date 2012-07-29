var title = "jake kaufman";
function setTitle(new_title) {
  new_title = new_title || title;
  $('#title').text(new_title);
};

$(document).ready(function() {
  setTitle();
  $("a").mouseover(function() { setTitle($(this).attr("title")); });
  $("a").mouseout(function() { setTitle(); });
});

