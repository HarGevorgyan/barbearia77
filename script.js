(function () {
  "use strict";

  var translations = {
    pt: {
      navServices: "Serviços",
      navAbout: "A barbearia",
      navContact: "Contacto",
      heroHeadline: "Barbearia à moda antiga,<br>no coração do Porto.",
      heroSub: "Cadeiras de couro, navalha afiada e o mesmo cuidado de sempre — em Sarmento de Beires.",
      heroBtnCall: "Ligar e marcar",
      heroBtnInsta: "Seguir no Instagram",
      aboutBeardTitle: "Cada barba pede tempo.",
      aboutBeardP1: "Não despachamos ninguém. Toalha quente, navalha bem afiada e mão firme — é assim que fazemos desde sempre. A cadeira é de couro, o chão é em xadrez e o espelho já viu passar meio bairro.",
      aboutBeardP2: "Passa por cá para um corte, uma barba feita como deve ser, ou só para o café e a conversa do costume.",
      aboutHaircutTitle: "Um corte bem feito não se atropela.",
      aboutHaircutP1: "Máquina, tesoura e olho treinado — cada corte é pensado para o formato da cabeça e o estilo de quem senta na cadeira. Contornos limpos, degradê sem risco e um acabamento que dura semanas, não dias.",
      aboutHaircutP2: "Do clássico ao degradê mais moderno, ajustamos a técnica ao que o cliente pede e ao que sabemos fazer bem.",
      servicesTitle: "Preços",
      priceHaircut: "Corte",
      priceBeard: "Barba",
      priceBoth: "Corte + Barba",
      priceNote: "Preços de referência — para confirmar, é só ligar.",
      galleryCap1: "Gente que já passou pela cadeira.",
      galleryCap2: "À porta, à espera do próximo cliente.",
      contactTitle: "Contacto",
      dtAddress: "Morada",
      dtPhone: "Telefone",
      dtHours: "Horário",
      hoursValue: "Ter–Sáb, 10h00–19h00<br>Dom e Seg, encerrado",
      footerText: "Barbearia77 — Rua de Sarmento de Beires 266, Porto",
      devBy: "Site por"
    },
    en: {
      navServices: "Services",
      navAbout: "About us",
      navContact: "Contact",
      heroHeadline: "Old-school barbershop,<br>in the heart of Porto.",
      heroSub: "Leather chairs, a sharp razor and the same care as always — on Sarmento de Beires.",
      heroBtnCall: "Call to book",
      heroBtnInsta: "Follow on Instagram",
      aboutBeardTitle: "Every beard takes time.",
      aboutBeardP1: "We don't rush anyone out the door. Hot towel, a sharp razor and a steady hand — that's how it's always been done here. Leather chair, checkerboard floor, and a mirror that's seen half the neighbourhood come and go.",
      aboutBeardP2: "Stop by for a haircut, a proper beard trim, or just for the coffee and the usual barbershop chat.",
      aboutHaircutTitle: "A good haircut can't be rushed.",
      aboutHaircutP1: "Clippers, scissors and a trained eye — every cut is shaped to the head and the style of whoever's in the chair. Clean lines, a fade with no shortcuts, and a finish that lasts weeks, not days.",
      aboutHaircutP2: "From the classic cut to the sharpest modern fade, we match the technique to what the client asks for and what we do well.",
      servicesTitle: "Prices",
      priceHaircut: "Haircut",
      priceBeard: "Beard",
      priceBoth: "Haircut + Beard",
      priceNote: "Reference prices — call to confirm.",
      galleryCap1: "People who've sat in the chair.",
      galleryCap2: "Right outside, waiting for the next client.",
      contactTitle: "Contact",
      dtAddress: "Address",
      dtPhone: "Phone",
      dtHours: "Hours",
      hoursValue: "Tue–Sat, 10am–7pm<br>Sun &amp; Mon, closed",
      footerText: "Barbearia77 — Rua de Sarmento de Beires 266, Porto",
      devBy: "Website by"
    }
  };

  var STORAGE_KEY = "barbearia77-lang";
  var nodes = document.querySelectorAll("[data-i18n]");
  var buttons = document.querySelectorAll(".lang-btn");

  function applyLang(lang) {
    var dict = translations[lang] || translations.pt;

    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-PT");

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — language just won't persist across visits */
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var saved = null;
  try {
    saved = window.localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    saved = null;
  }

  applyLang(saved === "en" ? "en" : "pt");
})();
