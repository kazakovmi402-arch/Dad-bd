function showSection(id) {

    const sections = document.querySelectorAll(".page");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const next = document.getElementById(id);

    next.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}