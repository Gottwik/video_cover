require.config({
	baseUrl: '/assets/',

	paths: {
		'jquery': 'vendor/jquery/dist/jquery.min',
		'video_cover': 'vendor/video_cover/video_cover',
	},
})

require(['jquery', 'video_cover'], function ($, video_cover) {
	$(document).ready(function () {
		video_cover.cover($('video'))
	})
})
