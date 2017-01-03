


var youtube_URL = 'https://developers.google.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query='searchTerm';
  part:'snippet'
  key:'AIzaSyAJZntSY3mRDBSpUaxQKhDDJrLy7EkeFA'
   q: 'json'
  
  $.getJSON(youtube_URL, query, callback);
}



function displayYouTubeSearchData(data) {
console.log(data);
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(video) {
     resultElement += '<p>' + item.Title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYouTubeSearchData);
  });
}

$(function(){watchSubmit();});












