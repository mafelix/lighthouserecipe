$(document).ready(function(){
  $('#hide').on('click', function(){
    $('div.sidebar').toggle(500);
    $('#hide').html($('#hide').text()== 'Hide'? 'Show' : 'Hide')
  })
})
/*toggle #hide html to show/hide*/
/*image slider*/

function slideSwitch() {
    var $active = $('#slideshow img.active');

    if ( $active.length == 0 ) $active = $('#slideshow img:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow img:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}



$(function() {
    setInterval( "slideSwitch()", 5000 );
});





