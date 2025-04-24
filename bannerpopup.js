window.onload = function () {
  const popup = document.getElementById("popup-banner");
  const cerrar = document.getElementById("cerrar-banner");

  if (sessionStorage.getItem("bannerMostrado") === "1") {
    popup.style.display = "none";
  } else {
    sessionStorage.setItem("bannerMostrado", "1");

    setTimeout(() => {
      popup.style.display = "none";
    }, 10000);

    cerrar.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
};
