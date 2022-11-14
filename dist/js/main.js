/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./U-4/src/js/script.js ***!
  \******************************/


(function () {
    // Find name of page
    function parse_active_page() {
        let paths = window.location.pathname

        paths = paths.split("/")
        let name = paths[paths.length - 1]

        var node;

        switch (name) {
            case "":
            case "index.html":
                node = "nav_box1";
                break;
            case "stratton.html":
                node = "nav_box2";
                break;
            case "gh.html":
                node = "nav_box3";
                break;
            case "franklin.html":
                node = "nav_box4";
                break;

        }
        activate_nav_link(node)
    }

    // Make nav link active when on page.
    function activate_nav_link(node) {
        let active_link = document.querySelector(`body .nav .${node}`)
        active_link.classList.add('active');
    }

    function slicks() {
        $('.slider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    parse_active_page();
    slicks();
})();
/******/ })()
;
//# sourceMappingURL=main.js.map