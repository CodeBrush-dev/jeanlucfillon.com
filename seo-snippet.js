// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.jeanlucfillon.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.jeanlucfillon.com/","title_tag":"Hautbois Jazz, jazz oboe & Master Classes | Jean-Luc Fillon","meta_description":"Oboman, hautbois jazz et cor anglais, concerts, improvisation, Master Classes et projets Jazz et Classique en France, Oboa Nomade et Jazz do Brasil."},{"page_url":"https://www.jeanlucfillon.com/biography","title_tag":"Oboe jazz, orchestral soloist & jazz composer | Jean-Luc Fillon","meta_description":"Biographie du jazz oboist Jean-Luc Fillon, hautbois jazz, cor anglais, improvisation, projets european jazz, orchestres symphoniques et chamber jazz."},{"page_url":"https://www.jeanlucfillon.com/press","title_tag":"Hautbois Jazz, oboe soloist & reviews | Jean-Luc Fillon","meta_description":"Presse et critiques autour d’Oboman, hautbois jazz, cor anglais, jazz et classique, projets chamber jazz, symphonic jazz et improvisation contemporaine."},{"page_url":"https://www.jeanlucfillon.com/jumpin-with-art","title_tag":"Hautbois Jazz & Jazz Messengers tribute | Oboman Paris","meta_description":"Jumpin’ with Art, hommage modern jazz aux Jazz Messengers avec hautbois jazz, cor anglais et chamber jazz, concerts et enregistrements en France."},{"page_url":"https://www.jeanlucfillon.com/happy-men","title_tag":"Chamber Jazz Music & hautbois jazz trio | Oboman Paris","meta_description":"Happy Men, trio chamber jazz avec hautbois jazz, guitare et contrebasse, crossover jazz entre jazz et classique et improvisation européenne."},{"page_url":"https://www.jeanlucfillon.com/paris-by-song","title_tag":"Oboe Music France & Paris chamber jazz | Oboman Ithursarry","meta_description":"Paris by Song, duo hautbois jazz et accordéon, Oboe Music France entre jazz et classique, promenade parisienne, chamber jazz et european jazz."},{"page_url":"https://www.jeanlucfillon.com/late-trane","title_tag":"Contemporary oboe & Late Trane project | Oboman Hanson","meta_description":"Late Trane, duo oboe jazz et basson, contemporary jazz et improvising oboe inspirés par Coltrane, textures électroniques et jazz improvisation."},{"page_url":"https://www.jeanlucfillon.com/jazz-do-brasil","title_tag":"Oboa Nomade & Brazilian chamber jazz | Oboman Aquarela","meta_description":"Aquarela, hautbois jazz et mandoline, choro et Jazz do Brasil, Oboe Music France entre jazz et classique, modern jazz et musiques du monde."},{"page_url":"https://www.jeanlucfillon.com/oboa-nomade","title_tag":"Oboa Nomade, symphonic jazz & jazz meets classical | Oboman","meta_description":"Oboa Nomade, hautbois jazz soliste avec orchestre symphonique, jazz meets classical, symphonic jazz, orchestral improvisation et concerts en France."}],"keywords":["Hautbois Jazz","Jean-Luc Fillon","Oboman Paris","Master Classes","Concerts Jazz Paris","Oboe Music France","Jazz et Classique","Oboa Nomade","Academy Oboman","jazz oboe","oboe jazz","contemporary oboe","improvising oboe","oboe soloist","oboe player","Jazz oboist","european jazz","modern jazz","contemporary jazz","chamber jazz","crossover jazz","orchestral soloist","jazz improvisation","jazz composer","oboe & Cor Anglais Jazz","rare instrument","unique voice","jazz and classical","symphonic jazz","jazz meets classical","orchestral improvisation","Chamber Jazz Music","#jazzoboe","#oboist","#jazzmusician","#modernjazz","#europeanjazz","#jazzimprovisation","#contemporaryjazz","#jazzsoloist","#classicalmusic","#orchestra","#concertsoloist","#symphonicmusic","#newmusic"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.jeanlucfillon.com/#person",
  "name": "Jean-Luc \"Oboman\" Fillon",
  "alternateName": [
    "Oboman",
    "J-Luc Oboman Fillon",
    "Jean-Luc OBOMAN Fillon"
  ],
  "url": "https://www.jeanlucfillon.com/",
  "image": "https://static.wixstatic.com/media/d833e7_bfe3f67099a84db9891f55209df3e105%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/d833e7_bfe3f67099a84db9891f55209df3e105%7Emv2.png",
  "jobTitle": [
    "Jazz Oboist",
    "English Horn Player",
    "Composer",
    "Arranger",
    "Conductor",
    "Jazz Educator"
  ],
  "description": "Jean-Luc \"Oboman\" Fillon is a French jazz oboist and English horn player, composer, arranger, conductor and educator. Leader on 17 albums, he explores jazz and improvised music with oboe, oboe d'amore and English horn, and teaches jazz improvisation and masterclasses in conservatories and academies.",
  "knowsAbout": [
    "jazz oboe",
    "english horn",
    "hautbois jazz",
    "cor anglais",
    "improvisation",
    "jazz composition",
    "Brazilian choro",
    "Ellington repertoire",
    "Cole Porter repertoire",
    "master class improvisation",
    "contemporary jazz"
  ],
  "sameAs": [
    "https://open.spotify.com/",
    "https://www.deezer.com/",
    "https://www.youtube.com/",
    "https://soundcloud.com/",
    "https://www.facebook.com/",
    "https://www.instagram.com/"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Oboman",
    "logo": "https://static.wixstatic.com/media/d833e7_bfe3f67099a84db9891f55209df3e105%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/d833e7_bfe3f67099a84db9891f55209df3e105%7Emv2.png"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Ad Lib Production",
    "url": "https://www.jeanlucfillon.com/",
    "legalName": "Ad Lib Production",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "171, route de Marolles",
      "postalCode": "78670",
      "addressLocality": "Villennes-sur-Seine",
      "addressCountry": "FR"
    },
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "Association",
        "value": "09/41212152"
      },
      {
        "@type": "PropertyValue",
        "name": "SIRET",
        "value": "434 921 513 000 10"
      },
      {
        "@type": "PropertyValue",
        "name": "APE",
        "value": "923 A"
      },
      {
        "@type": "PropertyValue",
        "name": "Licence 2 de Producteur de Spectacles",
        "value": "2-1021523"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Booking",
        "name": "Catherine Lasalle",
        "email": "mailto:lakallas@yahoo.fr",
        "telephone": "+33-6-84-49-94-42",
        "url": "http://catherinelassalle.com"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Information",
        "email": "mailto:adlib@jeanlucfillon.com"
      }
    ],
    "logo": "https://www.jeanlucfillon.com/quality_auto/logo_ad_lib_ok_2_-_le%C3%8C%C2%81ger.jpg"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Master Class d'improvisation jazz pour hautbois, cor anglais et instruments classiques",
      "description": "\"Artiste-Enseignant\", Jean-Luc Oboman Fillon propose des masterclasses d'improvisation jazz pour étudiants issus d'un cursus classique, avec une approche basée sur l'oralité, l'improvisation et le jazz.",
      "url": "https://www.jeanlucfillon.com/",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Concerts et programmes jazz (Jumpin' with Art, Paris by Song, Jazz do Brasil, Oboa Nomade, Echoes of Freedom, African Dream, Late Trane, Happy Men)",
      "description": "Programmes de concerts jazz et musique du monde autour du hautbois, du cor anglais et de formations variées (quintet, trio, duo, orchestre symphonique).",
      "url": "https://www.jeanlucfillon.com/",
      "availability": "https://schema.org/InStock"
    }
  ],
  "event": {
    "@type": "Event",
    "@id": "https://www.jeanlucfillon.com/#event-oboa-nomade-2026-07-24",
    "name": "OBOA NOMADE => Oboman + Orchestre Symphonique de Porto",
    "description": "« Oboa Nomade » : la rencontre du Jazz et du Classique, d’un hautboïste atypique et d’un orchestre symphonique aventureux, avec Jean-Luc Oboman Fillon (hautbois), João Paulo Da Silva (piano), Jarrod Cagwin (percussions 360°) et l'Orchestre Symphonique de Porto - Casa Da Musica.",
    "startDate": "2026-07-24T22:00:00+02:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Praça Guilhermina Suggia",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Praça Guilhermina Suggia",
        "postalCode": "4450-154",
        "addressLocality": "Matosinhos",
        "addressCountry": "PT"
      }
    },
    "performer": [
      {
        "@type": "Person",
        "name": "Jean-Luc \"Oboman\" Fillon"
      },
      {
        "@type": "Person",
        "name": "João Paulo Da Silva"
      },
      {
        "@type": "Person",
        "name": "Jarrod Cagwin"
      },
      {
        "@type": "Organization",
        "name": "Orchestre Symphonique de Porto - Casa Da Musica"
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
