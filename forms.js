$('document').ready( ()=>{



    //  this is so if you click on the h2  line it'll open and close everything
    $('.sectionBox h2').click(function(event){
        $(event.currentTarget).next('.sectionContents').toggle();
    
        if ($(event.currentTarget).html() == 'close'){
            $(event.currentTarget).html('open');
        } else if($(event.currentTarget).html() == 'open'){
            $(event.currentTarget).html('close');
        };
    });
    

    // this is the section 3 project cost calculator
    $('#sbc, #lbc, #sdc, #ldc, #srwc, #lrwc, #soc, #loc ').on('input',()=>{
        var sbc = parseFloat($('#sbc').val())
        var lbc = parseFloat($('#lbc').val());
        var sdc = parseFloat($('#sdc').val())
        var ldc = parseFloat($('#ldc').val())
        var srwc = parseFloat($('#srwc').val())
        var lrwc = parseFloat($('#lrwc').val())
        var soc = parseFloat($('#soc').val())
        var loc = parseFloat($('#loc').val())
        var tbc = sbc + lbc;
        var tdc = sdc + ldc;
        var sts = sbc + sdc;
        var stl = lbc + ldc;
        var stt = sts + stl;
        var trwc = srwc + lrwc;
        var toc = soc + loc;
        var gts = sts + srwc + soc;
        var gtl = stl + lrwc+ loc;
        var gtt = stt + trwc + toc;

        $('#tbc').val(tbc);
        $('#tdc').val(tdc);
        $('#sts').val(sts);
        $('#stl').val(stl);
        $('#stt').val(stt);
        $('#trwc').val(trwc);
        $('#toc').val(toc);
        $('#gts').val(gts);
        $('#gtl').val(gtl);
        $('#gtt').val(gtt);


    })

    
    // this is the add row function for section 6 "add milestones"
    
    $('.add-milestone1').on('click',()=>{
        var markupMilestone = '<div class="row"><div class="col"><select class="custom-select mr-sm-2 form-control"><option selected>Choose Type</option><option value="1">PSR</option><option value="2">PA & ED</option><option value="3">PS 4E to HC</option><option value="4">Advertise</option></select></div><div class="col"><input type="Date" class="form-control" placeholder="Date"></div><div class="col"></div></div>';
    
        $(event.currentTarget).parent().parent().parent().append(markupMilestone);
        return false;
    });
    
    // this is the add row function for section 5 "add phase1"
    
    $('.add-phase1').on('click',()=>{
        var markupPhases1 = '<div class="row"><div class="col"><select class="custom-select mr-sm-2"><option selected>Choose Type</option><option value="1">PID</option><option value="2">PA & ED</option><option value="3">PS & E</option><option value="4">RW</option><option value="5">CON</option></select></div><div class="col"><input type="Agency" class="form-control" placeholder="Enter Agency"></div><div class="col"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" value="option1"><label class="form-check-label" for="inlineRadio1">Yes</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"><label class="form-check-label" for="inlineRadio2">No</label></div></div><div class="col"></div></div>';
    
        $(event.currentTarget).parent().parent().parent().append(markupPhases1);
        return false;
    });
    
    // this is the add row function for section 5 "add phase2"
    
    $('.add-phase2').on('click',()=>{
        var markupPhases2 = '<div class="row"><div class="col"><select class="custom-select mr-sm-2"><option selected>Choose Type</option><option value="1">PS&E</option><option value="2">CON</option></select></div><div class="col"><form class="form-inline" role="form"><input type="Agency" class="form-control" placeholder="Enter Agency"></form></div><div class="col"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"><label class="form-check-label" for="inlineRadio1">Yes</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"><label class="form-check-label" for="inlineRadio2">No</label></div></div><div class="col"></div></div>';
    
        $(event.currentTarget).parent().parent().parent().append(markupPhases2);
        return false;
    });
    
    // this is the add row function for section 6 "add report"
    
    $('.add-report').on('click',()=>{
        var markupReport = '<div class="row"><div class="col"><select class="custom-select mr-sm-2"><option selected>Choose Environmental Report</option><option value="1">CE/EX</option><option value="2">ND/FI</option><option value="3">ER/ES</option></select></div><div class="col"><input type="Date" class="form-control" id="PSR" placeholder="Date"> </div><div class="col"></div>  </div>';
    
        $(event.currentTarget).parent().parent().parent().append(markupReport);
        return false;
    });
    
    // this is the add row function for section 7 "add funding"
    
    $('.add-funding').on('click',()=>{
        var markupFunding = '<div class="row"><div class="col"><select class="custom-select mr-sm-2"><option selected>Choose Program Type</option><option value="1">BOND(CMIA)</option><option value="2">Directors Orders</option><option value="3">Local</option><option value="4">Maintenance</option><option value="5">Measure</option><option value="6">Minor A</option><option value="7">Minor B</option><option value="8">Permit</option><option value="9">SHOPP</option><option value="10">STIP</option><option value="11">TCRF</option><option value="12">Toll</option></select></div><div class="col"><input type="fundsSource" class="form-control" placeholder="Enter Funds Source"></div><div class="col"><input type="fundsPercentage" class="form-control" placeholder="Enter Funds %"></div><div class="col"></div></div>';
    
        $(event.currentTarget).parent().parent().parent().append(markupFunding);
        return false;
    });
    
    // this is the add row function for section 8 "add managers"
    
    $('.add-manager').on('click',()=>{
        var markupManagers = '<div class="row"><div class="col"><select class="custom-select mr-sm-2"><option selected>Choose Type</option><option value="1">Program Advisor</option><option value="2">Project Manager</option><option value="3">Design Manager</option><option value="4">Resource Manager</option><option value="5">Program Manager</option><option value="6">Planning Manager</option></select></div><div class="col"><input type="Name" class="form-control" placeholder="Name"></div><div class="col"><input type="Signature" class="form-control" placeholder="Signature"></div><div class="col"><input type="Date" class="form-control" id="PSR" placeholder="Date"></div><div class="col"></div></div>';
    
        $(event.currentTarget).parent().parent().parent().append(markupManagers);
        return false;
    });
    
    
    
    });