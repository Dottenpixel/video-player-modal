var launchVideoModal = function(tTxt,vSrc,clickTxt,clickUrl){
	$("div.videoModal").remove();
	$("body").append('<div class="videoModal"><div id="videoModalSWF" class="swfArea"></div></div>');
	$(".videoModal").css({
		"width": "680px",
		"height": "430px",
		"background": "transparent",
		"position": "fixed",
	    "top": "5px",
		"left": "50%",
	    "margin-left": "-340px",
		"z-index": "9999"
	});
	//$("div.videoModal").append('<p>' + tTxt + '</p><p>' + vSrc + '</p><p>' + clickTxt + '</p><p>' + clickUrl + '</p>');

	var flashvars = { 
		"titleTxt": tTxt,		// "Posters" 
		"vidSrc" : vSrc,		// "http://opti.snapfish.com/db/USA/meijer/meijerPhotoPage/assetsreskin/Meijer_Poster.flv"
		"clickTxt" : clickTxt,	// "Create a Poster Now"
		"clickUrl" : clickUrl	// "http://www.snapfish.com/meijer.com_posters"
		
	};
	var params = { "wmode":"transparent", "allowScriptAccess":"sameDomain", "allowFullscreen":"true", "base":"swf" };
	var setAttributes = function (id) {
		return { "id":id, "class":"flash-swf-object" };
	}
	swfobject.embedSWF("swf/meijer_photo_vidplayer.swf", "videoModalSWF", "640", "390", "9.0.0", "swf/expressInstall.swf", flashvars, params, setAttributes("swfLPHero"));
};

var closeVideoModal = function() {
	$("div.videoModal").remove();
}
	
$(document).ready(function(){
	//$("input.launcher").bind("click",function(){ launchVideoModal(new Date(),new Date(),new Date(),new Date()) });
});