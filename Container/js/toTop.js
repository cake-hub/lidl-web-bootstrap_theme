import "./cakeDOM";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    buttonElements: [],
    buttonQuerySelector: '[data-controller="totop"]',
    offset: 20,
    enableSmoothScrolling: true,
};

window.cake.toTop = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};
    const buttons = window.cake.utils.getElements (options.buttonElements, options.buttonQuerySelector);

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > options.offset || document.documentElement.scrollTop > options.offset) {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons [i].classList.contains ("show")) continue;
                    toggleDisplay (buttons [i], false);
                    buttons[i].classList.add("show");
            }
        } else {
            for (let i = 0; i < buttons.length; i++) {
                if (!buttons [i].classList.contains ("show")) continue;
                    buttons[i].classList.remove("show");
                    toggleDisplay (buttons [i], true);
            }
        }
    });

    let timeout;
    function toggleDisplay (button, show) {
        clearTimeout (timeout);
        if (!show) {
            button.classList.remove("invisible");
            return;
        }
        const delay = window.getComputedStyle(button).getPropertyValue('transition-duration') || 0;
        timeout = setTimeout(
            () => {
                button.classList.add("invisible");
            },
            parseFloat (delay) * 1000
        );
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", ( ev ) => {
            ev.preventDefault();
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    //Add smooth scroll behavior to html-element
    if (options.enableSmoothScrolling) {
        document.documentElement.style.scrollBehavior = "smooth";
    }
};

export default window.cake.toTop;
