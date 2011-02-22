// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function charCount(element, limit) {
  var count = $(element).getValue().length;
  $('counter').update(limit - count);
  if (count >= (limit - 10)) {
    $('counter').setStyle({color: '#cc0000'});
  } else {
    $('counter').setStyle({color: '#cccccc'})
  }
}
