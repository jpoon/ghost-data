//Setup Page
$(document).ready(function () {
    // Portfolio Tabs
    $(function () {
        $("#tabs").tabs();
    });

    //      First Selector
    $('#tab').each(function () {
        $(this).find('ul > li:first').addClass('active');
        $(this).find('div.tab_container > div:first').addClass('active');
    });


    //      Data Filter
    var $container = $('div#works').isotope({
        itemSelector: 'img.work',
        layoutMode: 'fitRows'
    });

    $('#works_filter a').click(function () {
        var selector = $(this).attr('data-filter');
        $('#works').isotope({
            filter: selector,
            itemSelector: '.work',
            layoutMode: 'fitRows'
        });

        $('#works_filter').find('a.selected').removeClass('selected');
        $(this).addClass('selected');

        return false;
    });
});
