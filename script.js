const questions = document.querySelectorAll(".question");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    const answer = document.getElementById(`answer-${index + 1}`);
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    const isOpen = answer.style.display === "block";

    // Close all answers
    document
      .querySelectorAll(".answer")
      .forEach((ans) => (ans.style.display = "none"));
    document
      .querySelectorAll(".plus-icon")
      .forEach((icon) => (icon.style.display = "inline"));
    document
      .querySelectorAll(".minus-icon")
      .forEach((icon) => (icon.style.display = "none"));

    // Toggle current one
    if (!isOpen) {
      answer.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline";
    }
  });
});
