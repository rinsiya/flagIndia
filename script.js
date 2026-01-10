function raiseFlag() {
  const flag = document.getElementById("flag");

  // Move up
  flag.style.bottom = "240px";

  // Unfold
  flag.classList.add("unfold-animate");
flag.style.removeProperty("width");
  // Start waving after unfolding
  setTimeout(() => {
    flag.classList.add("wave");
  }, 3000);
  
}


