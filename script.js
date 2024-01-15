$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-time');
        $('.nav-bar').toggleClass('nav-toggle');
    })

    $(window).on('load scroll', function(){
        $('.fa-bars').remove('fa-time');
        $('.nav-bar').remove('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'black','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    });
});