/* Progressive enhancement only. With JavaScript off the map is fully
   drawn, every star is a working link, and the button still scrolls. */
(function () {
  "use strict";

  document.documentElement.classList.add("js"); // no-op if the inline head script ran

  var land = document.querySelector(".land");
  if (land && typeof land.getTotalLength === "function") {
    // Match the dash pattern to the real outline so the trace finishes clean.
    var len = Math.ceil(land.getTotalLength());
    land.style.strokeDasharray = len;
    land.style.strokeDashoffset = len;
  }

  // Nudge focus to the communities list so the keyboard lands where the eye does.
  var cta = document.querySelector(".cta");
  var target = document.getElementById("communities");
  if (cta && target) {
    cta.addEventListener("click", function () {
      var first = target.querySelector(".card");
      if (!first) return;
      window.setTimeout(function () {
        first.focus({ preventScroll: true });
      }, 500);
    });
  }
})();
