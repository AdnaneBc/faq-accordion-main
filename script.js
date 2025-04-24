const questions = document.querySelectorAll(".question");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    const answer = document.getElementById(`answer-${index + 1}`);
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");
    const isOpen = answer.classList.contains("open");

    // Close all
    document
      .querySelectorAll(".answer")
      .forEach((ans) => ans.classList.remove("open"));
    document
      .querySelectorAll(".plus-icon")
      .forEach((icon) => (icon.style.display = "inline"));
    document
      .querySelectorAll(".minus-icon")
      .forEach((icon) => (icon.style.display = "none"));

    // Toggle current
    if (!isOpen) {
      answer.classList.add("open");
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline";
    }
  });
});
