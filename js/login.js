window.addEventListener("load", () => {
  const loginTabBtn = document.querySelector("#tab-1");
  const signupTabBtn = document.querySelector("#tab-2");
  const formState = localStorage.getItem("formState");

  if (formState) {
    if (formState === "login") {
      signupTabBtn.checked = false;
      loginTabBtn.checked = true;
    } else if (formState === "signup") {
      loginTabBtn.checked = false;
      signupTabBtn.checked = true;
    }
  }
});
