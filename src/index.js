let $ = require('jquery');
window.$ = window.jQuery = $;
/* If needed, add other dependencies here.

   Remember:
   - Use npm or yarn to install them.
   - Require them here, like `require('waypoints');`
   - Leave the `$ = window.$` before the requires.
*/
$ = window.$;


$( document ).ready(function() {
	var audio = $("#clickSound")[0];
	$("#button").mousedown(function() {
    audio.pause();
    audio.currentTime = 0;
	  audio.play();
	});
});