require.config({
	baseUrl: 'assets/',

	paths: {
		'jquery': 'vendor/jquery/dist/jquery.min',
		'video_cover': 'vendor/video_cover/video_cover',
	},
})

require(['jquery', 'video_cover'], function ($, video_cover) {
	$(document).ready(function () {
		video_cover.cover($('video'))

		var is_dragging = false
		$('.resize_handle')
			.mousedown(function (e) {
				is_dragging = true
				$('.container').addClass('dragging')
				$('video').hide()
			})
			.mouseup(function () {
				is_dragging = false
				$('.container').removeClass('dragging')
				video_cover.cover($('video'))
			})

		$(window)
			.mousemove(function (e) {
				if (is_dragging) {

					var width = (e.pageX - $(window).width() / 2) * 2
					var height = (e.pageY - $(window).height() / 2) * 2

					$('.container').css('width', width).css('height', height)
				}
			})
	})
})
