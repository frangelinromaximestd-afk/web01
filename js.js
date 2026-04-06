const navButtons = document.querySelectorAll("[data-target]");

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const section = document.querySelector(button.dataset.target);

        if (!section) {
            return;
        }

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
