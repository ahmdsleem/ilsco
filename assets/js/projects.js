
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle-desc");

    toggles.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const content = btn.parentElement;
            const shortDesc = content.querySelector(".project-desc.short");
            const fullDesc = content.querySelector(".project-desc.full");

            shortDesc.classList.toggle("hidden");
            fullDesc.classList.toggle("visible");

            btn.textContent = btn.textContent === "عرض المزيد" ? "عرض أقل" : "عرض المزيد";
        });
    });
});