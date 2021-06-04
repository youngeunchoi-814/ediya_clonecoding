$('.gnb i').click(function(e){
    e.preventDefault();
    if($(this).parents('li').hasClass('active')){
       $('.gnb > li').removeClass('active');
       $('.gnb .sub').slideUp();
    }else{
       $('.gnb > li').removeClass('active');
       $('.gnb .sub').slideUp();
       $(this).parents('li').addClass('active');
       $(this).parents('li').find('.sub').slideDown();
    }
 })