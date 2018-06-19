$('document').ready( ()=>{

    //$('.sectionBox h2 button').html('close')

    $('.sectionBox h2 button').click(function(event){
        $(event.currentTarget).parent().next('.sectionContents').toggle();
        if ($(event.currentTarget).html() == 'close'){
            $(event.currentTarget).html('open');
        } else if($(event.currentTarget).html() == 'open'){
            $(event.currentTarget).html('close');
        };
    });
                                    
});