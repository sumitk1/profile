$(function(){

	//Slide out/in of the options panel
	$(document).on('click', '#configurator .trigger.openme', function(){
		$('#configurator').animate({left: 0}, 500, 'easeInOutCubic' );
		$(this).removeClass('openme').addClass('closeme');
	});
	
	$(document).on('click', '#configurator .trigger.closeme', function(){
		$('#configurator').animate({left: '-195px'}, 500, 'easeInOutCubic' );
		$(this).removeClass('closeme').addClass('openme');
	});
	
	//export
	$('#configuratorexport').click(function(){
		skinRefresh(1);
	});
	
	
	//reset
	$('#configuratorreset').click(function(){
		var starter = $('#starter').val();		
		loadSkin(starter);
	});
	

	//Set skins params
	skins = new Array;
	skins['bootstrap_original'] = Array(
		'#0088cc', 	//primarycolor
		'#005580', 	//secondarycolor
		'#ffffff', 	//bgcolor
		'#ffffff', 	//navbgprimarycolor
		'#0088cc', 	//navbgsecondarycolor
		'#ffffff', 	//navborder
		'#0088cc', 	//navcolor
		'#fff',		//navcolorhover
		'#333333', 	//footercolor
		'#333333', 	//sectiontitlecolor
		'#ffffff', 	//sectiontitlebgprimarycolor
		'#ffffff', 	//sectiontitlebgsecondarycolor
		'#0088cc', 	//btnbgcolor
		'#005580', 	//btnbgcolorhover
		'#0088cc', 	//timelinebgcolor
		'#005580', 	//timelinebgcolorhover
		'#0088cc', 	//progressbarprimary
		'#005580', 	//progressbarsecondary
		'#0088cc', 	//itemhover
		'#fff', 	//itemhovertext
		'left', 	//navposition
		'15px', 	//shadowsize
		0, 			//shadowopacity
		'light', 	//colorscheme
		1,			//backgrounded
		'../images/textures/none.png',
		"'Droid Sans', sans-serif"
	);
	skins['bootstrap_dark'] = Array(
		'#0088cc', 	//primarycolor
		'#005580', 	//secondarycolor
		'#1B1B1B', 	//bgcolor
		'#1B1B1B', 	//navbgprimarycolor
		'#0088cc', 	//navbgsecondarycolor
		'#1B1B1B', 	//navborder
		'#0088cc', 	//navcolor
		'#fff',		//navcolorhover
		'#ccc', 	//footercolor
		'#fff', 	//sectiontitlecolor
		'#1B1B1B', 	//sectiontitlebgprimarycolor
		'#1B1B1B', 	//sectiontitlebgsecondarycolor
		'#0088cc', 	//btnbgcolor
		'#005580', 	//btnbgcolorhover
		'#0088cc', 	//timelinebgcolor
		'#005580', 	//timelinebgcolorhover
		'#0088cc', 	//progressbarprimary
		'#005580', 	//progressbarsecondary
		'#0088cc', 	//itemhover
		'#fff', 	//itemhovertext
		'left', 	//navposition
		'15px', 	//shadowsize
		0, 			//shadowopacity
		'dark', 	//colorscheme
		1,			//backgrounded
		'../images/textures/none.png',
		"'Droid Sans', sans-serif"
	);
	skins['pastel'] = Array(
		'#ce5252', 	//primarycolor
		'#9c383a', 	//secondarycolor
		'#ececec', 	//bgcolor
		'#ce5252', 	//navbgprimarycolor
		'#9c383a', 	//navbgsecondarycolor
		'#9c383a', 	//navborder
		'#fff', 	//navcolor
		'#fff',		//navcolorhover
		'#666666', 	//footercolor
		'#fff', 	//sectiontitlecolor
		'#ce5252', 	//sectiontitlebgprimarycolor
		'#9c383a', 	//sectiontitlebgsecondarycolor
		'#ce5252', 	//btnbgcolor
		'#9c383a', 	//btnbgcolorhover
		'#ce5252', 	//timelinebgcolor
		'#9c383a', 	//timelinebgcolorhover
		'#ce5252', 	//progressbarprimary
		'#9c383a', 	//progressbarsecondary
		'#ce5252', 	//itemhover
		'#fff', 	//itemhovertext
		'right', 	//navposition
		'15px', 	//shadowsize
		0.4, 		//shadowopacity
		'light', 	//colorscheme
		1,			//backgrounded
		'../images/textures/vichy.png',
		"'Droid Sans', sans-serif"
	);
	skins['acid'] = Array(
		'#e024d3', 	//primarycolor
		'#be02b1', 	//secondarycolor
		'#1c1c1c', 	//bgcolor
		'#181818', 	//navbgprimarycolor
		'#e024d3', 	//navbgsecondarycolor
		'#151515', 	//navborder
		'#fff', 	//navcolor
		'#fff',		//navcolorhover
		'#ccc', 	//footercolor
		'#fff', 	//sectiontitlecolor
		'#181818', 	//sectiontitlebgprimarycolor
		'#be02b1', 	//sectiontitlebgsecondarycolor
		'#e024d3', 	//btnbgcolor
		'#be02b1', 	//btnbgcolorhover
		'#e024d3', 	//timelinebgcolor
		'#be02b1', 	//timelinebgcolorhover
		'#e024d3', 	//progressbarprimary
		'#be02b1', 	//progressbarsecondary
		'#e024d3', 	//itemhover
		'#fff', 	//itemhovertext
		'right', 	//navposition
		'15px', 	//shadowsize
		0.8, 		//shadowopacity
		'dark', 	//colorscheme
		1,			//backgrounded
		'../images/textures/diagmonds.png',
		"'Open Sans', sans-serif"
	);
	
	skins['soft'] = Array(
		'#6b9c00', 	//primarycolor
		'#497a22', 	//secondarycolor
		'#fcfcfc', 	//bgcolor
		'#efefef', 	//navbgprimarycolor
		'#6b9c00', 	//navbgsecondarycolor
		'#6b9c00', 	//navborder
		'#444444', 	//navcolor
		'#fff',		//navcolorhover
		'#ccc', 	//footercolor
		'#444444', 	//sectiontitlecolor
		'#eeeeee', 	//sectiontitlebgprimarycolor
		'#6b9c00', 	//sectiontitlebgsecondarycolor
		'#6b9c00', 	//btnbgcolor
		'#497a22', 	//btnbgcolorhover
		'#6b9c00', 	//timelinebgcolor
		'#497a22', 	//timelinebgcolorhover
		'#6b9c00', 	//progressbarprimary
		'#497a22', 	//progressbarsecondary
		'#6b9c00', 	//itemhover
		'#fff', 	//itemhovertext
		'right', 	//navposition
		'15px', 	//shadowsize
		0.3, 		//shadowopacity
		'light', 	//colorscheme
		1,			//backgrounded
		'../images/textures/square_bg.png',
		"'Bitter', serif"
	);
	
	
	loadSkin('pastel');
	


	
	//Skin Starter
	$('#starter').change(function(){
		var newskin = $(this).val();
		loadSkin(newskin);
	});
	
	function loadSkin(skin){
	
		var skin = skins[skin];
		
		var primarycolor 					= skin[0];
		var secondarycolor 					= skin[1];
		var bgcolor 						= skin[2];
		var navbgprimarycolor 				= skin[3];
		var navbgsecondarycolor 			= skin[4];
		var navborder 						= skin[5];
		var navcolor 						= skin[6];
		var navcolorhover 					= skin[7];
		var footercolor 					= skin[8];
		var sectiontitlecolor 				= skin[9];
		var sectiontitlebgprimarycolor 		= skin[10];
		var sectiontitlebgsecondarycolor 	= skin[11];
		var btnbgcolor 						= skin[12];
		var btnbgcolorhover 				= skin[13];
		var timelinebgcolor 				= skin[14];
		var timelinebgcolorhover 			= skin[15];
		var progressbarprimary 				= skin[16];
		var progressbarsecondary 			= skin[17];
		var itemhover 						= skin[18];
		var itemhovertext 					= skin[19];
		var navposition 					= skin[20];
		var shadowsize 						= skin[21];
		var shadowopacity 					= skin[22];
		var colorscheme 					= skin[23];
		var backgrounded 					= skin[24];
		var bgimage 						= skin[25];
		var font 							= skin[26];
		
		$('#colorscheme').val(colorscheme);
		$('#navposition').val(navposition);
		$('#shadowsize').val(shadowsize);
		$('#shadowopacity').val(shadowopacity);
		$('#backgrounded').val(backgrounded);
		$('#font').val(font);
		$('#bgimage').val(bgimage);
		
		$('#primarycolor').attr('data-color', primarycolor);
		$('#secondarycolor').attr('data-color', secondarycolor);
		$('#bgcolor').attr('data-color', bgcolor);
		$('#navbgprimarycolor').attr('data-color', navbgprimarycolor);
		$('#navbgsecondarycolor').attr('data-color', navbgsecondarycolor);
		$('#navcolor').attr('data-color', navcolor);
		$('#navborder').attr('data-color', navborder);
		$('#navcolorhover').attr('data-color', navcolorhover);
		$('#sectiontitlecolor').attr('data-color', sectiontitlecolor);
		$('#sectiontitlebgprimarycolor').attr('data-color', sectiontitlebgprimarycolor);
		$('#sectiontitlebgsecondarycolor').attr('data-color', sectiontitlebgsecondarycolor);
		$('#btnbgcolor').attr('data-color', btnbgcolor);
		$('#btnbgcolorhover').attr('data-color', btnbgcolorhover);
		$('#timelinebgcolor').attr('data-color', timelinebgcolor);
		$('#timelinebgcolorhover').attr('data-color', timelinebgcolorhover);
		$('#progressbarprimary').attr('data-color', progressbarprimary);
		$('#progressbarsecondary').attr('data-color', progressbarsecondary);
		$('#itemhover').attr('data-color', itemhover);
		$('#itemhovertext').attr('data-color', itemhovertext);
		
		initColorpickers();
		skinRefresh('init');
	}
	
	
	//refresh
	$('.skinselect, #enableadvancedcustom').change(function(){skinRefresh();}).keypress(function(){skinRefresh();});
	
	//colorpickers
	function initColorpickers(){
		$('.colorpick').each(function(){
			var initcolor = $(this).attr('data-color');
			$(this).attr('data-initcolor', initcolor);
			var $target = $(this).find('div');
			var $picker = $(this);
			$target.css('backgroundColor', initcolor);
		});
	}
	
	$('.colorpick').on('mouseenter', function(){
		
		var initcolor = $(this).attr('data-color');
		var $target = $(this).find('div');
		var $picker = $(this);
		
		$(this).ColorPicker({
			color: initcolor,
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$target.css('backgroundColor', '#' + hex);
				$picker.attr('data-color', '#' + hex);
				skinRefresh();
			}
		});
	});
	
	
	function skinRefresh(exp){
	
		//skin color scheme
		var colorscheme = $('#colorscheme').val();
		$('body').removeClass('dark'); if(colorscheme == 'dark'){$('body').addClass('dark');} 
		
		var navposition = $('#navposition').val();
		if(navposition == 'right'){$('#sidebar').removeClass('sbleft').addClass('sbright').before($('#main-content'));}
		else{$('#sidebar').removeClass('sbright').addClass('sbleft').after($('#main-content'));}
		
		var navbgprimarycolor = $('#navbgprimarycolor').attr('data-color');
		var navborder = $('#navborder').attr('data-color');

		var font = $('#font').val();
		
		var bgimage = $('#bgimage').val();
		
		var shadowsize = $('#shadowsize').val();
		var shadowopacity = $('#shadowopacity').val();
		
		var backgrounded = $('#backgrounded').val();
		$('body').removeClass('backgrounded'); if(backgrounded == 1){$('body').addClass('backgrounded');} 

		var primarycolor = $('#primarycolor').attr('data-color');
		var bgcolor = $('#bgcolor').attr('data-color');
		
		var navcolor = $('#navcolor').attr('data-color');
		
		var customsettings = $('#enableadvancedcustom').attr('checked');
		
		if(customsettings == 'checked' || exp == 'init'){
			
			var secondarycolor = $('#secondarycolor').attr('data-color');
			var navbgsecondarycolor = $('#navbgsecondarycolor').attr('data-color');
			var navcolorhover = $('#navcolorhover').attr('data-color');
			var footercolor = $('#footercolor').attr('data-color');
			var sectiontitlecolor = $('#sectiontitlecolor').attr('data-color');
			var sectiontitlebgprimarycolor = $('#sectiontitlebgprimarycolor').attr('data-color');
			var sectiontitlebgsecondarycolor = $('#sectiontitlebgsecondarycolor').attr('data-color');
			var btnbgcolor = $('#btnbgcolor').attr('data-color');
			var btnbgcolorhover = $('#btnbgcolorhover').attr('data-color');
			var timelinebgcolor = $('#timelinebgcolor').attr('data-color');
			var timelinebgcolorhover = $('#timelinebgcolorhover').attr('data-color');
			var progressbarprimary = $('#progressbarprimary').attr('data-color');
			var progressbarsecondary = $('#progressbarsecondary').attr('data-color');
			var itemhover = $('#itemhover').attr('data-color');
			var itemhovertext = $('#itemhovertext').attr('data-color')

			
		}else{
		
			var primaryRGB = hexToRgb(primarycolor);
			
			var difRGB = hexToRgb('#222');
			var secondarycolorR = Math.abs(primaryRGB.r - difRGB.r);
			var secondarycolorG = Math.abs(primaryRGB.g - difRGB.g);
			var secondarycolorB = Math.abs(primaryRGB.b - difRGB.b);
			var secondarycolor = rgbToHex(secondarycolorR, secondarycolorG, secondarycolorB);
			$('#secondarycolor').attr('data-color', secondarycolor).find('div').css('backgroundColor', secondarycolor);
			
			var navbgsecondarycolor = primarycolor; 				
			$('#navbgsecondarycolor').attr('data-color', navbgsecondarycolor).find('div').css('backgroundColor', navbgsecondarycolor);
			
			var navcolorhover = '#fff'; 							
			$('#navcolorhover').attr('data-color', navcolorhover).find('div').css('backgroundColor', navcolorhover);
			
			var footercolor = '#ccc'; 							
			$('#footercolor').attr('data-color', footercolor).find('div').css('backgroundColor', footercolor);
			
			var sectiontitlecolor = '#fff'; 					
			$('#sectiontitlecolor').attr('data-color', sectiontitlecolor).find('div').css('backgroundColor', sectiontitlecolor);
			
			var sectiontitlebgprimarycolor = primarycolor; 		
			$('#sectiontitlebgprimarycolor').attr('data-color', sectiontitlebgprimarycolor).find('div').css('backgroundColor', sectiontitlebgprimarycolor);
			
			var sectiontitlebgsecondarycolor = secondarycolor; 	
			$('#sectiontitlebgsecondarycolor').attr('data-color', sectiontitlebgsecondarycolor).find('div').css('backgroundColor', sectiontitlebgsecondarycolor);
			
			var btnbgcolor = primarycolor; 						
			$('#btnbgcolor').attr('data-color', btnbgcolor).find('div').css('backgroundColor', btnbgcolor);
			
			var btnbgcolorhover = secondarycolor; 				
			$('#btnbgcolorhover').attr('data-color', btnbgcolorhover).find('div').css('backgroundColor', btnbgcolorhover);
			
			var timelinebgcolor = primarycolor; 				
			$('#timelinebgcolor').attr('data-color', timelinebgcolor).find('div').css('backgroundColor', timelinebgcolor);
			
			var timelinebgcolorhover = secondarycolor; 			
			$('#timelinebgcolorhover').attr('data-color', timelinebgcolorhover).find('div').css('backgroundColor', timelinebgcolorhover);
			
			var progressbarprimary = primarycolor; 				
			$('#progressbarprimary').attr('data-color', progressbarprimary).find('div').css('backgroundColor', progressbarprimary);
			
			var progressbarsecondary = secondarycolor; 			
			$('#progressbarsecondary').attr('data-color', progressbarsecondary).find('div').css('backgroundColor', progressbarsecondary);
			
			var itemhover = primarycolor; 						
			$('#itemhover').attr('data-color', itemhover).find('div').css('backgroundColor', itemhover);
			
			var itemhovertext = '#fff'; 						
			$('#itemhovertext').attr('data-color', itemhovertext).find('div').css('backgroundColor', itemhovertext);
			
		
		}

		
		css  = '<style>';
		css += 'h1, h2, h3, h4, h5, h6 {font-family: ' + font + '}';
		css += 'a,.primary-color, .dark .primary-color {color: ' + primarycolor + ';}';
		css += 'a:hover {color: ' + secondarycolor + ';}';
		css += '.blogitem .blogitem-hoverinfo, .portfolioitem .portfolioitem-hoverinfo {background-color: ' + itemhover + '; color: ' + itemhovertext + ';}';
		css += '#resumenav a {color: ' + navcolor + ';}';
		css += '#resumenav a:hover {background-color: ' + navbgsecondarycolor + '; color: ' + navcolorhover + ';}';
		css += '.nav-pills > .active > a, .nav-pills > .active > a:hover, .nav-list > .active > a, .nav-list > .active > a:hover,.icon-btn:hover,.btn-primary:hover, .blogitem .blogitem-actions a:hover, .portfolioitem .portfolioitem-actions a:hover {background-color: ' + btnbgcolorhover + '!important;}';
		css += '#resumenav li.active a, .nav-list > .active > a {background-color: ' + navbgsecondarycolor + '!important; color: ' + navcolorhover + ';}';
		css += '.icon-btn,.btn-primary {background-color: ' + btnbgcolor + ';}';
		css += '.progress .bar {background-color: ' + progressbarprimary + '; background-image: -moz-linear-gradient(top, ' + progressbarprimary + ', ' + progressbarsecondary + ');background-image: -webkit-gradient(linear, 0 0, 0 100%, from(' + progressbarprimary + '), to(' + progressbarsecondary + '));background-image: -webkit-linear-gradient(top, ' + progressbarprimary + ', ' + progressbarsecondary + ');background-image: -o-linear-gradient(top, ' + progressbarprimary + ', ' + progressbarsecondary + ');background-image: linear-gradient(to bottom, ' + progressbarprimary + ', ' + progressbarsecondary + ');}';
		css += 'body {background: ' + bgcolor + ' url(' + bgimage + ') fixed repeat !important;}';
		css += '#content {background: #fff;box-shadow: 0 0 ' + shadowsize + ' rgba(0,0,0,' + shadowopacity + ');}';
		css += '#sidebar.sbright .sidebar-nav {background: ' + navbgprimarycolor + '; border-left: 5px solid ' + navborder + '; border-right: none;}';
		css += '#sidebar.sbleft .sidebar-nav {background: ' + navbgprimarycolor + '; border-right: 5px solid ' + navborder + '; border-left: none;}';
		css += '#footer {color: ' + footercolor + ';}';
		css += '.section .section-title {color: ' + sectiontitlecolor + '; background-color: ' + sectiontitlebgprimarycolor + '; border-right: 5px solid  ' + sectiontitlebgsecondarycolor + ';}';
		css += '.section .section-title .glyphicons i:before{color: ' + sectiontitlecolor + '!important;}';
		css += '.timeline-item-trigger span i:before {background-color: ' + timelinebgcolor + '; border: 6px solid ' + timelinebgcolor + '; }';
		css += '.timeline-item-trigger span:hover i:before {background-color: ' + timelinebgcolorhover + '; border-color: ' + timelinebgcolorhover + ';}';
		css += '@media (max-width: 767px) {.section .section-title {border-bottom: 5px solid' + secondarycolor +'; border-top: 5px solid ' + secondarycolor +';}}';
		css += '</style>';
		
		$('#configuratorstyles').html(css);
		
		
		if(exp == 1){
		
			var lessExport = '';
			lessExport += '@primarycolor: ' + primarycolor + ';\n'; 
			lessExport += '@secondarycolor: ' + secondarycolor + ';\n';
			lessExport += '@bgcolor: ' + bgcolor + ';\n'; 
			lessExport += '@navbgprimarycolor: ' + navbgprimarycolor + ';\n';
			lessExport += '@navbgsecondarycolor: ' + navbgsecondarycolor + ';\n';
			lessExport += '@navborder: ' + navborder + ';\n';
			lessExport += '@navcolor: ' + navcolor + ';\n'; 
			lessExport += '@navcolorhover: ' + navcolorhover + ';\n';
			lessExport += '@footercolor:' + footercolor + ';\n';
			lessExport += '@sectiontitlecolor: ' + sectiontitlecolor + ';\n';
			lessExport += '@sectiontitlebgprimarycolor: ' + sectiontitlebgprimarycolor + ';\n';
			lessExport += '@sectiontitlebgsecondarycolor: ' + sectiontitlebgsecondarycolor + ';\n';
			lessExport += '@btnbgcolor: ' + btnbgcolor + ';\n';
			lessExport += '@btnbgcolorhover: ' + btnbgcolorhover + ';\n';
			lessExport += '@timelinebgcolor: ' + timelinebgcolor + ';\n';
			lessExport += '@timelinebgcolorhover: ' + timelinebgcolorhover + ';\n';
			lessExport += '@progressbarprimary: ' + progressbarprimary + ';\n';
			lessExport += '@progressbarsecondary: ' + progressbarsecondary + ';\n';
			lessExport += '@itemhover: ' + itemhover + ';\n';
			lessExport += '@itemhovertext: ' + itemhovertext + ';\n';
			lessExport += '@navposition: ' + navposition + ';\n';
			lessExport += '@shadowsize: ' + shadowsize + ';\n';
			lessExport += '@shadowopacity: ' + shadowopacity + ';\n';
			lessExport += '@bgimage: "' + bgimage + '";\n';
			lessExport += '@font: ' + font + ';\n';
			
			$('#exportModal textarea').html(lessExport);
			
			$('#exportModal').reveal({
     			animation: 'fade',                   //fade, fadeAndPop, none
     			animationspeed: 300,                       //how fast animtions are
     			closeonbackgroundclick: true,             //if you click background will modal close?
			});
			
			var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;
			$(documentBody).animate({scrollTop: $('#content').offset().top}, 1000,'easeInOutCubic');
			
		}
		
	
	}
	

	
});

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbStringToHex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 r = parseInt(rgb[1]);
 g = parseInt(rgb[2]);
 b = parseInt(rgb[3]);
 return rgbToHex(r, g, b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}