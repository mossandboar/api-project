function getApi(query){
	console.log(query);
	var URL = 'https://www.googleapis.com/youtube/v3/search';
	var request = {
	 part: 'snippet',
	 q:query, 
	 key:'AIzaSyBgx65ARtzqSbsyNc0iRZOr8Tr4ZPQx0c0'};
$.getJSON(URL,request,function(data){
	
	console.log(data);
	for (var i = 0; i < data.items.length; i++) {
		console.log(data.items[i].snippet.thumbnails.default.url);
	$('#search-results ul').append('<li>' + data.items[i].snippet.title + '</li>');
	};
});
}

$(document).ready(function(){
	$( '#search-form').submit(function(event){
	event.preventDefault();
	var query = $('#query').val();
	getApi(query);
	}
	)

	;
});
