console.log("scripts working");

$(document).ready(function() {
    
  $(window).scroll( function(){
    
    $('.feature').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object/1.2 ){
            
            $(this).animate({'opacity':'1'},500);
                
        }
        
    });

    $('#about-content').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
                
        }
        
    }); 

    
  });
    
});


