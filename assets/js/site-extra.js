/* NEMA site expansion — small progressive enhancements (no dependencies). */
(function () {
  "use strict";

  var more = document.querySelector(".nav-more");
  if (more) {
    var btn = more.querySelector(".nav-more__btn");
    var menu = more.querySelector(".nav-more__menu");

    function setOpen(open) {
      more.classList.toggle("is-open", open);
      if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    if (btn) {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        setOpen(!more.classList.contains("is-open"));
      });
    }

    document.addEventListener("click", function (event) {
      if (!more.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    if (menu) {
      menu.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(false);
      });
    }
  }

  var dg = document.querySelector(".nav-dg");
  if (dg) {
    var dgBtn = dg.querySelector(".nav-dg__btn");
    var dgMenu = dg.querySelector(".nav-dg__menu");
    var dgSub = dg.querySelector(".nav-dg__sub");
    var dgSubBtn = dgSub ? dgSub.querySelector(".nav-dg__sub-btn") : null;

    function setDgSubOpen(open) {
      if (!dgSub) return;
      dgSub.classList.toggle("is-open", open);
      if (dgSubBtn) dgSubBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    function setDgOpen(open) {
      dg.classList.toggle("is-open", open);
      if (dgBtn) dgBtn.setAttribute("aria-expanded", open ? "true" : "false");
      if (!open) setDgSubOpen(false);
    }

    if (dgBtn) {
      dgBtn.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        setDgOpen(!dg.classList.contains("is-open"));
      });
    }

    if (dgSubBtn) {
      dgSubBtn.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        setDgSubOpen(!dgSub.classList.contains("is-open"));
      });
    }

    document.addEventListener("click", function (event) {
      if (!dg.contains(event.target)) setDgOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (dgSub && dgSub.classList.contains("is-open")) {
        setDgSubOpen(false);
        return;
      }
      setDgOpen(false);
    });

    if (dgMenu) {
      dgMenu.addEventListener("click", function (event) {
        if (event.target.closest("a")) setDgOpen(false);
      });
    }

    var current = document.querySelector(".nav-dg__menu a[aria-current='page']");
    if (current && dg) {
      var trigger = dg.querySelector(".nav-dg__btn");
      if (trigger) trigger.classList.add("is-current");
    }
  }

  /* Site-wide search should cover the latest news and the archive. */
  var searchForm = document.querySelector("#site-search form");
  if (searchForm && /(^|\/)news\.html$/.test(searchForm.getAttribute("action") || "")) {
    var scope = document.createElement("input");
    scope.type = "hidden";
    scope.name = "view";
    scope.value = "all";
    searchForm.appendChild(scope);
  }

  /* Keep the "More" trigger highlighted on pages that live in its menu. */
  var current = document.querySelector(".nav-more__menu a[aria-current='page']");
  if (current && more) {
    var trigger = more.querySelector(".nav-more__btn");
    if (trigger) trigger.classList.add("is-current");
  }
})();
