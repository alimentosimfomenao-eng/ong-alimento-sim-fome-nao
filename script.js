(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-menu");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      toggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  var copyBtn = document.getElementById("copy-pix");
  var feedback = document.getElementById("copy-feedback");

  function showCopied() {
    if (!feedback) return;
    feedback.hidden = false;
    window.clearTimeout(showCopied._t);
    showCopied._t = window.setTimeout(function () {
      feedback.hidden = true;
    }, 2500);
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showCopied();
    } catch (e) {
      /* ignore */
    }
    document.body.removeChild(ta);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var pix = copyBtn.getAttribute("data-pix") || "26.313.280/0001-81";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pix).then(showCopied).catch(function () {
          fallbackCopy(pix);
        });
      } else {
        fallbackCopy(pix);
      }
    });
  }
})();
