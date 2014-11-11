# AngularJS Vimeo Embed

This is a simple [AngularJS][1] directive to embed Vimeo videos easily onto your website.


##Installation

The easiest way to get the file in your project is by running the following
command:
```bash
$ bower install --save angular-vimeo-embed
```


Include the file in your HTML
```html
<script src="path/to/angular-vimeo-embed.min.js"></script>
```

And add a dependency to the module
```javascript
angular.module('myApp', ['vimeoEmbed']);
```


##Usage

Now you can use the directive in your app! It can be used as an element or attribute. It **must** have an id.

**Demo:** http://plnkr.co/edit/axwDjgX8Ba9yJj0275er

```html
<!-- Include by id -->
<vimeo-video player-id="video1" video-id="103384798"></vimeo-video>

<!-- Include by URL -->
<vimeo-video player-id="video2" video-url="'https://vimeo.com/76979871'"></vimeo-video>

<!-- Define the player's width and height -->
<vimeo-video player-id="video3" video-url="'https://vimeo.com/97564754'" player-width="640" player-height="360"></vimeo-video>

<!-- Define some options for the video -->
<vimeo-video player-id="video4" video-id="30509290" player-opts="{ autoplay: 1, color: 'f00'}"></vimeo-video>

```

I have exposed some of the query parameters as attributes. The rest can be passed in as an object to **player-opts** attribute.
Available options are listed [here][2]. If none are passed, the embedded video will load with Vimeo's predefined defaults.



##TODO
- ~~Implement the [oEmbed API][2] for embedding the video.~~
- Implement the [Javascript API][3] to control the embedded player


##License
The MIT License

Copyright (c) 2014 Vincenzo Merolla

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[1]:https://angularjs.org
[2]:https://developer.vimeo.com/apis/oembed
[3]:https://developer.vimeo.com/player/js-api
