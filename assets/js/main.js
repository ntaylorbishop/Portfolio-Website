var offsetForNavbar = -100;
var scrollSpeed = 250;

var fillContainer;
var currPage;
var projectPages;

$(window).on('load', function() {

});

jQuery(document).ready(function($) {

    var aboutMeSection = $('#aboutMe');
    var projectsSection = $('#projects');
    currPage = aboutMeSection;
    fillContainer = $('#fillContainer');
    projectPages = $('.projectPage');

    CollectProjectLinksAndAttachClickHandlers();
    HideAllProjectPages();

    projectsSection.hide();
    fillContainer.hide();
    
    $("#aboutMeLink").click(function(e) {
        ShowNewPage(aboutMeSection);
    });

    $('#projectsLink').click(function(e) {
        ShowNewPage(projectsSection);
    });
});

function HideAllProjectPages() {
    projectPages.each(function(index) {
        $(this).hide();
    });
}

function CollectProjectLinksAndAttachClickHandlers() {
    var projectLinks = $(".projectLink");

    projectLinks.each(function(index) {
        $(this).on("click", function() {
            var projectLinkId = "#" + $(this).data("projectsectionname");
            ShowNewPage($(projectLinkId));
        });
    });
}

function ShowNewPage(section) {
    var newFillContainerHeight = fillContainer.height();

    fillContainer.css("min-height", newFillContainerHeight);
    
    if(currPage != section) {
        fillContainer.show();

        currPage.slideUp(scrollSpeed, function() {
            section.slideDown(scrollSpeed, function() {
                fillContainer.hide();
            });
        });
        currPage = section;
    }
    else {
        $("HTML, BODY").animate({scrollTop: currPage.offset().top + offsetForNavbar }, 'slow');
    }

    return false;
}