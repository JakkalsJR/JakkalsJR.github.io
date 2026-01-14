const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const currentDetails = btn
      .closest(".project-row")
      .querySelector(".project-details");

    document.querySelectorAll(".project-details").forEach(detail => {
      if (detail !== currentDetails) {
        detail.style.display = "none";
      }
    });

    currentDetails.style.display =
      currentDetails.style.display === "block" ? "none" : "block";
  });
});
