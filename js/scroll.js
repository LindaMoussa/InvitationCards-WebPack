$(window).scroll(function(){

   if($(window).scrollTop()>500)
    {
    $(".homePage .nevs").css("backgroundColor","white");
    $(".homePage .nevs li a").css("color","#000");
    $('.homePage .form-inline').css("border-left","rgba(0,0,0,0.5) 1px solid");
    $('.homePage .logo').attr("src","images/darklogo.png");
        
    }
    else{
        
    $(".homePage .nevs").css("backgroundColor","rgba(0,0,0,.1)");
    $(".homePage .nevs li a").css("color","#fff");
    $('.homePage .form-inline').css("border-left","rgba(250,250,250,0.5) 1px solid"); $('.logo').attr("src","images/WhiteLogolastttt.png");
    }

})