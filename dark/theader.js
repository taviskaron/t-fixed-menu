(function() {



    var ham = document.getElementById('hamburger-button');
    var menu = document.getElementById('top-menu');


    function changeHeader(elem, scheme) {
        var header = document.getElementById(elem);
        if (window.scrollY >= header.offsetHeight) {
            header.classList.remove('top-header-default');
            header.classList.add('top-header-' + scheme.toString());
        } else {
            header.classList.remove('top-header-' + scheme.toString());
            header.classList.add('top-header-default');
        }
    }


    function toggleHamburger() {
        if (ham.classList.contains('is-active')) {
            ham.classList.remove('is-active');
        }
        else {
            ham.classList.add('is-active');
        }

        if (menu.classList.contains('menu-active')) {
            menu.classList.remove('menu-active');
        } else {
            menu.classList.add('menu-active');
        }
    }


    window.addEventListener("scroll", changeHeader.bind(null,
        'masthead', // HEADER ID
        'dark' // COLOUR SCHEME
    ));
    ham.addEventListener("click", toggleHamburger, true);



})();



