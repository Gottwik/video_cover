<p align="center">
Check out the <a href="https://gottwik.github.io/video_cover/" target="_blank">DEMO HERE</a>
</p>

<p align="center">
	<img src="http://i.imgur.com/QAwiBJk.png">
</p>

## Why video_cover
Stretches video element to cover it's parent, essentially emulating `background-size: cover;` for `video` elements.

## Bower

You can install video_cover using bower with:

```
bower i video_cover -S
```

## Usage
There are two ways to use video_cover: **CommonJS** module and **jQuery** plugin.

### CommonJS
```
require(['video_cover'], function (video_cover) {
	video_cover.cover($('video'))
})
```

### jQuery plugin
Other option is to just include video_cover library using a `<script>` tag and just call the **video_cover** function on any jquery object:
```
<script type="text/javascript" src="/assets/vendor/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="/assets/vendor/video_cover/video_cover.js"></script>
<script type="text/javascript">
	$('video').video_cover()
</script>
```

## Dependencies
**video_cover** is currently dependent on jQuery
