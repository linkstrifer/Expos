$(document).on('ready',setSize);
$(window).on('resize',setSize);
$(window).on('keydown',key );
function fixContainer(section)
{
	var sectionHeight = $(section).height();
	var center = sectionHeight / 2;
	center -= 10;
	var container = $(section).children('.container');
	var position = center - ( $(container).height() / 2 );
	$(section).css('padding-top',position+'px');
}
function key(event)
{
	var key = event.which;
	if( key == 37 )
	{
		prev();
	}
	if( key == 38 )
	{
		prev(1);
	}
	if( key == 39 )
	{
		next();
	}
	if( key == 40 )
	{
		next( $('section').length );
	}
}
function next(step)
{
	var current = $('section.active').attr('data-step');
	var sections = $('section').length;
	if( step )
	{
		var next = step;
		$.scrollTo( $('#s'+next), 1000 );
		$('section.active').removeClass('active');
		$('#s'+next).addClass('active');
	} else
	{
		if( current != sections )
		{
			var next = parseInt(current) + 1;
			$.scrollTo( $('#s'+next), 1000 );
			$('section.active').removeClass('active');
			$('#s'+next).addClass('active');
		}
	}
	console.log(current);
}
function prev(step)
{
	var current = $('section.active').attr('data-step');
	var sections = $('section').length;
	if( step )
	{
		var next = step;
		$.scrollTo( $('#s'+next), 1000 );
		$('section.active').removeClass('active');
		$('#s'+next).addClass('active');
	} else
	{
		if( current != 1 )
		{
			var next = parseInt(current) - 1;
			$.scrollTo( $('#s'+next), 1000 );
			$('section.active').removeClass('active');
			$('#s'+next).addClass('active');
		}
	}	
}
function setSize()
{
	var windowHeight = $(window).height();
	
	$('section').height( windowHeight );

	$('section').each( function(){
		fixContainer( this );
	});
}