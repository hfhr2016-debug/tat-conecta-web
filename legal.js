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
