$('[data-toggle="collapsible-nav"]').on('click', function (e) {
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');
});

$(document).ready(function () {
    if (window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('hide');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

$(window).resize(
    function () {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

$(document).on("click", function (e) {
    if (window.innerWidth < 992) {
        if (!(e.target.id == 'collapsible-nav' || e.target.id == 'hambtn' || e.target.id == "hamimg"))
            $('.collapsible-nav').removeClass('show');
    }
});

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max($(this).width(), $(this).height()) * 2 + 50;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if (jQuery.fn.entry) { //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    },

    function (event) {

        var direction = "up";
        if (jQuery.fn.entry) {
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);

/*header stick*/
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementsByTagName('header')[0];

// Get the offset position of the navbar
var sticky;// = header.offsetTop;

if (window.innerWidth >= 992) {
    sticky = header.offsetTop;
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    if (window.innerWidth < 992) {
        if ($(window).scrollTop() > 10)
            header.style['border-bottom'] = 'grey solid';
        else
            header.style['border-bottom'] = 'none';


    }

}
/*header stick*/
/*download*/
$('#dld').click(function () { $('#link')[0].click(); });
//fbcomments

