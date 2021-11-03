$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function(){

        //defining statuses
        var status_fname = false;
        var status_sname = false;
        var status_mobilenumber = false;
        var status_idnumber = false;
        var status_vaccine = false;
        var status_vaccine_used = false;
        var status_destination = false;
        var status_airline = false;
        var status_passport = false;

        //defining variables
        var firstname = $("#firstname");
        var secondname = $("#secondname");
        var mobileNumber = $("#mobile_number");
        var idnumber = $("#id_number");
        var number = /^\d{10}$/;
        var vaccine = $("#vaccine");
        var vaccine_used = $("#vaccine_used");
        var destination = $("#destination");
        var airline = $("#airline");
        var passport_photo = $("#passport_photo");


        /*
            Writting regular expressions:
            Start with double slash,
            Inside double slash the expression starts with ^ sign and ends with a
            dollar sign ($),
            (^) sign masks the first part of the string ($) sign masks the last part of the string

        */

            //validation conditionals
        if(firstname.val() == "" || firstname.val().length < 2){
            firstname.addClass("border-danger");
            $("#firstname_error").html("<span class='text-danger'>Please enter a valid name</span>");
            status_fname = false;
        }else{
            firstname.removeClass("border-danger");
            $("#firstname_error").html("");
            status_fname = true;
        }
        if(secondname.val() == "" || secondname.val().length < 2){
            secondname.addClass("border-danger");
            $("#secondname_error").html("<span class='text-danger'>Please enter a valid name</span>");
            status_sname = false;
        }else{
            secondname.removeClass("border-danger");
            $("#secondname_error").html("");
            status_sname = true;
        }
          if(!number.test(mobileNumber.val())){
            mobileNumber.addClass("border-danger");
            $("#mobilenumber_error").html("<span class='text-danger'>Please enter a valid mobile number</span>");
            status_mobilenumber = false;
        }else{
            mobileNumber.removeClass("border-danger");
            $("#mobilenumber_error").html("");
            status_mobilenumber = true;
        }
        if(idnumber.val() == ""){
            idnumber.addClass("border-danger");
            $("#id_number_error").html("<span class='text-danger'>Please enter a vaild ID</span>");
            status_idnumber = false;
        }else{
            idnumber.removeClass("border-danger");
            $("#id_number_error").html("");
            status_idnumber = true;
        }
        if(vaccine.val() == ""){
            vaccine.addClass("border-danger");
            $("#vaccine_error").html("<span class='text-danger'>Please give an answer</span>");
            status_vaccine = false;
        }else{
            vaccine.removeClass("border-danger");
            $("#vaccine_error").html("");
            status_vaccine = true;
        }
        if(vaccine_used.val() == ""){
            vaccine_used.addClass("border-danger");
            $("#vaccine_used_error").html("<span class='text-danger'>Please enter the vaccined used</span>");
            status_vaccine_used = false;
        }else{
            vaccine_used.removeClass("border-danger");
            $("#vaccine_used_error").html("");
            status_vaccine_used = true;
        }
        if(destination.val() == ""){
            destination.addClass("border-danger");
            $("#destination_error").html("<span class='text-danger'>Please give a destination</span>");
            status_destination = false;
        }else{
            destination.removeClass("border-danger");
            $("#destination_error").html("");
            status_destination = true;
        }
        if(airline.val() == ""){
            airline.addClass("border-danger");
            $("#airline_error").html("<span class='text-danger'>Please give an airline</span>");
            status_airline = false;
        }else{
            airline.removeClass("border-danger");
            $("#airline_error").html("");
            status_airline = true;
        }
        if(passport_photo.val() == ""){
            passport_photo.addClass("border-danger");
            $("#passport_photo_error").html("<span class='text-danger'>Please give a passport photo</span>");
            status_passport = false;
        }else{
            passport_photo.removeClass("border-danger");
            $("#passport_photo_error").html("");
            status_passport = true;
        }
        
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        next_fs.css({'opacity': opacity});
        },
        duration: 600
        });
        });
        
        $(".previous").click(function(){
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show();
        
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        previous_fs.css({'opacity': opacity});
        },
        duration: 600
        });
        });
        
        $('.radio-group .radio').click(function(){
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
        });
        
        $(".submit").click(function(){
        return false;
        })
    
    });