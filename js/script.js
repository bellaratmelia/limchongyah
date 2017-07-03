
// Declare overlay and its components
var $overlay = $('<div id="overlay"></div>');
var $vid = $('<video src="" autoplay controls></video>');
var video;

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