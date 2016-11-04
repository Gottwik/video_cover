<p align="center">
Check out the <a href="https://gottwik.github.io/video_cover/" target="_blank">DEMO HERE</a>
</p>

<p align="center">
	<img src="http://i.imgur.com/QAwiBJk.png">
</p>

## Why video_cover
video_cover stretches video element to cover it's parent, essentially emulating `background-size: cover;` for `video` elements.

## Installation

Install video_cover by bower:

```
bower i video_cover -S
```

## Usage
There are two ways to use video_cover: **CommonJS** module and **jQuery** plugin.

### CommonJS
```js
require(['video_cover'], function (video_cover) {
	video_cover.cover($('video'))
})
```

### jQuery plugin
Other option is to just include video_cover library using a `<script>` tag and just call the **video_cover** function on any jquery object:
```html
<script type="text/javascript" src="/assets/vendor/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="/assets/vendor/video_cover/video_cover.js"></script>
<script type="text/javascript">
	$('video').video_cover()
</script>
```

## Pure css approach
video_cover uses javascript to calculate optimal size and position of the video so that the container is covered. For some cases, javascript is not really required and the same effect can be achieved much more efficiently using pure css:
```css
.parent-element-to-video {
    overflow: hidden;
}
video {
    height: 100%;
    width: 177.77777778vh; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vw; /* 100 * 9 / 16 */
}
```
Credit goes to @quertman's answer at SO: http://stackoverflow.com/a/29997746/4742670

This approach works flawlessly if you know the aspect ratio of your video and you are trying to fill the whole screen(full background).
