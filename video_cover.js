// * ———————————————————————————————————————————————————————— * //
// * 	video_cover
// *
// *	stretches video to cover it's parent
// * ———————————————————————————————————————————————————————— * //

function cover (video_element) {
	console.log(video_element)

	// direct parent of the video tag
	container = video_element.parent()

	// set overflow to hidden for the video container
	container.css('overflow', 'hidden')

	// makes sure the resizing is not done more than 5 times per second
	timeout_throttle = setTimeout(resize_video, 200)

	// main resizing function
	function resize_video () {

		// calculates aspect ratio of the video
		var video_ratio = video_element.width() / video_element.height()

		// calculates ratio of the container
		var size_ratio = container.width() / container.height()

		// checks if video is more oblong than the container
		if (size_ratio < video_ratio) {
			// if it's more oblong, that means the height of the video will be the same as the height of the container
			// and the video will overflow to the sides
			video_element
				.css('height', container.height())
				.css('width', container.height() * video_ratio)
				.css('left', -(video_element.width() - container.width()) / 2)
		} else {
			// if the video is less oblong, width of the video and the container will match and the video will overflow to the bottom
			video_element
				.css('width', container.width())
				.css('height', container.width() / video_ratio)
				.css('left', 0)
		}
	}

	// resizes the video on window resize event
	$(window).on('resize', function () {

		// cancel the scheduled resizing if there is any
		if (timeout_throttle) {
			clearTimeout(timeout_throttle)
		}

		// schedule the resizing in 200ms
		timeout_throttle = setTimeout(resize_video, 100)
	})
}

// extend jquery if jquery is initialized
if (typeof $ !== 'undefined') {
	$.fn.video_cover = function () {
		cover(this)

		// return itself for chaining
		return this
	}
}

// commonJs module
if (define) {
	define(['jquery'],
		function ($) {
			var video_cover = function () {}

			video_cover.cover = function (elements) {
				elements.each(function (index, element) {
					cover($(element))
				})
			}

			return video_cover
		}
	)
}
