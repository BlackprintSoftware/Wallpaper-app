$(document).ready(function(){

alert("in getwallpapers.js");

	$.ajax({
	   type: "GET",
	   url: "http://blackprint.ca/Wallpaper/export.php",
	   dataType: "xml",
	   success: parseXml
	   });
	   
	   
	function parseXml(xml) {
		$(xml).find('wallpapers').each(function(){
			$("#thelist").append('<li>') + $(this).find("CONTENT").text() + '</li>');
		});
	}

});