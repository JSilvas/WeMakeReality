(function(){
	var words = [
			'Reality',
			'Culture',
			'Possibilities',
			'Friendships',
			'Change',
			'Impact',
			'Mistakes',
			'Discoveries',
			'Connections',
			'Stories',
			'Better Futures'
			], i = 0;
	setInterval(function(){
			$('#changingword').fadeOut(function(){
					$(this).html(words[i=(i+1)%words.length]).fadeIn();
			});
	}, 3000);	
})();