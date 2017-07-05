
// Declare overlay and its components
var $overlay = $('<div id="overlay"></div>');
var $vid = $('<video src="" autoplay controls></video>');
var video;
var iframe_link;

// Append the components to overlay, then append it to html body
$overlay.append($vid);

// Append to body
$("body").append($overlay);

$overlay.click(function() {
	//hide overlay
	$overlay.fadeOut();
	video.pause();
});


// on gallery item click function
$(".video-item a").click(function(event) {
	event.preventDefault();
	
	// update overlay
	$vid.attr("src", $(this).attr("href"));
	video = $vid.get(0);
	
	
	// Show overlay
	$overlay.fadeIn();
});

//news iframe stuff
$(".news-headline-iframe").click(function(event) {
	event.preventDefault();
	
	// grab the link from href
	iframe_link = $(this).attr("href");
	
	//update iframe
	$("#news-iframe").attr("src", iframe_link);
});

// news popup window stuff
$(".news-headline-popup").click(function(event) {
	event.preventDefault();
	
	//open link in new window
	var NWin = window.open($(this).attr('href'), '', 'height=800,width=800');
    if (window.focus){
		NWin.focus();
    }
});
