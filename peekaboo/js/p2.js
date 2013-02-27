/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
    // <script type="text/javascript" src="js/supersized.3.1.3.core.min.js.donotload"></script>
	//$.supersized({
		//Background image
		//slides	:  [ { image : 'img/bg3.jpg' } ]
	//});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"https://maps.google.com/maps/ms?msid=217962229817434978410.0004b681b38ebd8846675&msa=0&ll=47.759407,-116.803551&spn=0.073855,0.105228&iwloc=0004b681b727dc12d9b08&output=embed" });
});




