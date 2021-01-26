$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__nav').toggleClass('active');
    });
    
    $('.tab__item').click(function (e) {
        e.preventDefault();

        $('.tab__item').removeClass('tab__item--active');
        $('.autopark__card').removeClass('autopark__card--active');

        $(this).addClass('tab__item--active');
        $($(this).children().attr('href')).addClass('autopark__card--active');
         
    });
    
    $('.tab__item:first').click();
});
