$('document').ready( ()=>{

    //$('.sectionBox h2 button').html('close')

// this is so if you click on the button it'll open and close stuff    
    $('.sectionBox h2 button').click(function(event){
        $(event.currentTarget).parent().next('.sectionContents').toggle();

        if ($(event.currentTarget).html() == 'close'){
            $(event.currentTarget).html('open');
        } else if($(event.currentTarget).html() == 'open'){
            $(event.currentTarget).html('close');
        };
    });


/*  this is so if you click on the h2  line it'll open and close everything
$('.sectionBox h2').click(function(event){
    $(event.currentTarget).next('.sectionContents').toggle();

    if ($(event.currentTarget).html() == 'close'){
        $(event.currentTarget).html('open');
    } else if($(event.currentTarget).html() == 'open'){
        $(event.currentTarget).html('close');
    };
});
*/
                                    
});