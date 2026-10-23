/* Datos del prestador del servicio. Completa lo que está entre corchetes y se actualiza en las dos páginas legales. */
window.LEGAL = {
  nombre: "Hugo Fernando Hurtado Ruiz",
  documento: "C.C. 16.745.442",
  ciudad: "Bogotá D.C.",
  direccion: "por correo electrónico a tatconecta@gmail.com",
  correo: "tatconecta@gmail.com",
  actualizado: "21 de octubre de 2026",
  diasConservacion: 30
};
document.querySelectorAll("[data-l]").forEach((n) => {
  const v = window.LEGAL[n.dataset.l]; n.textContent = v;
  if (String(v).startsWith("[COMPLETAR")) n.classList.add("falta");
});

/* En computador no suele haber programa de correo: los enlaces de correo abren Gmail en una pestaña nueva. */
(function () {
  var pc = false; try { pc = !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && matchMedia("(pointer: fine)").matches; } catch (e) {}
  if (!pc) return;
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="mailto:"]'); if (!a) return;
    var u = new URL(a.getAttribute("href")); e.preventDefault();
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(u.pathname) + "&su=" + encodeURIComponent(u.searchParams.get("subject") || "") + "&body=" + encodeURIComponent(u.searchParams.get("body") || ""), "_blank", "noopener");
  });
})();
