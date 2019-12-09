var offsetForNavbar = -100;
var scrollSpeed = 250;

$(window).on('load', function() {

});

jQuery(document).ready(function($) {

    var aboutMeSection = $('#aboutMe');
    var projectsSection = $('#projects');
    var currPage = aboutMeSection;
    //var aboutMePage = $('');

    projectsSection.hide();
    
    $("#aboutMeLink").on('click', function() {
        if(currPage != aboutMeSection) {
            currPage.slideUp(scrollSpeed, function() {
                projectsSection.slideDown(scrollSpeed);
            });
            currPage = aboutMeSection;
        }
        else {
            $("HTML, BODY").animate({scrollTop: currPage.offset().top + offsetForNavbar }, 'slow');
        }
    });

    $('#projectsLink').on('click', function() {
        currPage = aboutMeSection;
        $("HTML, BODY").animate({scrollTop: currPage.offset().top + offsetForNavbar }, 'slow');
    });
});