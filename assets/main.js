// Tema claro/oscuro: respeta el sistema y recuerda la elección de quien visita.
(function () {
  var root = document.documentElement;
  var guardado = null;
  try { guardado = localStorage.getItem("tema"); } catch (e) {}
  if (guardado === "light" || guardado === "dark") root.setAttribute("data-theme", guardado);

  function oscuro() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Las figuras tienen versión clara y oscura: el enlace apunta a la que toca.
  function actualizarFiguras() {
    document.querySelectorAll("a[data-figura]").forEach(function (a) {
      var n = a.getAttribute("data-figura");
      a.href = a.getAttribute("data-base") + "figuras/" + n + "/" + n + (oscuro() ? "" : "-light") + ".html";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".theme");
    function icono() { if (b) b.textContent = oscuro() ? "☀" : "☾"; }
    if (b) b.addEventListener("click", function () {
      var nuevo = oscuro() ? "light" : "dark";
      root.setAttribute("data-theme", nuevo);
      try { localStorage.setItem("tema", nuevo); } catch (e) {}
      icono(); actualizarFiguras();
    });
    icono(); actualizarFiguras();
  });
})();
