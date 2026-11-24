/* NEMA office map — all zonal and operations offices.
 *
 * With a Google Maps API key in nema-map-config.js, this uses the Google Maps
 * JavaScript API. Without a key it uses Leaflet with OpenStreetMap streets and
 * Esri satellite imagery, so every office is pinned and satellite mode works
 * immediately.
 */
(function () {
  "use strict";

  var OFFICES = [
    {
      id: "north-west",
      name: "North West Zonal Directorate",
      type: "zonal",
      city: "Kaduna, Kaduna State",
      address: "15 Wurno Road, Unguwan Sarki, Kaduna",
      lead: "Zonal Director: Dr. Ishaya (Chonoko) Isa",
      phone: "0806 512 3532",
      lat: 10.52,
      lng: 7.436,
      query: "NEMA North West Zonal Office Kaduna Nigeria"
    },
    {
      id: "north-central",
      name: "North Central Zonal Directorate",
      type: "zonal",
      city: "Jos, Plateau State",
      address: "Direct Labour Compound, Vom Road, Jos",
      lead: "Zonal Director: Bashir Garga Idris",
      phone: "0803 700 0749",
      lat: 9.89,
      lng: 8.87,
      query: "NEMA North Central Zonal Office Jos Nigeria"
    },
    {
      id: "north-east",
      name: "North East Zonal Directorate",
      type: "zonal",
      city: "Maiduguri, Borno State",
      address: "Medical Store Premises, Baga Road, Off Auno Street, Maiduguri",
      lead: "Zonal Director: Yakubu Suleiman Abdullahi",
      phone: "0802 318 3908",
      lat: 11.85,
      lng: 13.16,
      query: "NEMA North East Zonal Office Maiduguri Nigeria"
    },
    {
      id: "south-south",
      name: "South South Zonal Directorate",
      type: "zonal",
      city: "Port Harcourt, Rivers State",
      address: "51 Ikwerre Road, Mile One, Diobu, Port Harcourt",
      lead: "Zonal Director: Walson Brandon Ibarakumo",
      phone: "0803 536 4844",
      lat: 4.79,
      lng: 6.99,
      query: "NEMA South South Zonal Office Port Harcourt Nigeria"
    },
    {
      id: "south-west",
      name: "South West Zonal Directorate",
      type: "zonal",
      city: "Ikeja, Lagos State",
      address: "Mobolaji Bank Anthony Way, Opposite Ikeja Plaza, Ikeja",
      lead: "Zonal Director: Adewale Stephen",
      phone: "0806 984 5685",
      lat: 6.595,
      lng: 3.356,
      query: "NEMA South West Zonal Office Lagos Nigeria"
    },
    {
      id: "south-east",
      name: "South East Zonal Directorate",
      type: "zonal",
      city: "Enugu, Enugu State",
      address: "55A Ezillo Avenue, Independence Layout, Enugu",
      lead: "Zonal Director: James Eze",
      phone: "0803 708 3767",
      lat: 6.44,
      lng: 7.51,
      query: "NEMA South East Zonal Office Enugu Nigeria"
    },
    {
      id: "abuja-ops",
      name: "Abuja Operations Office",
      type: "operations",
      city: "Wuse, Abuja, FCT",
      address: "58 Mambolo Street, Zone 2, Abuja",
      lead: "Head of office: Justin Nwazuronye",
      phone: "0812 560 3242",
      lat: 9.0595,
      lng: 7.4630,
      query: "NEMA Abuja Operations Office 58 Mambolo Street Zone 2 Abuja Nigeria"
    },
    {
      id: "gombe-ops",
      name: "Gombe Operations Office",
      type: "operations",
      city: "Gombe, Gombe State",
      address: "Gombe, Gombe State",
      lead: "Head of office: Ummuna Ahmed",
      phone: "0806 904 3205",
      lat: 10.2897,
      lng: 11.1673,
      query: "NEMA Gombe Operations Office Nigeria"
    },
    {
      id: "uyo-ops",
      name: "Uyo Operations Office",
      type: "operations",
      city: "Uyo, Akwa Ibom State",
      address: "Uyo, Akwa Ibom State",
      lead: "Head of office: Aisueni Mmandu",
      phone: "0803 569 8886",
      lat: 5.0378,
      lng: 7.9128,
      query: "NEMA Uyo Operations Office Nigeria"
    },
    {
      id: "yola-ops",
      name: "Yola Operations Office",
      type: "operations",
      city: "Yola, Adamawa State",
      address: "Yola, Adamawa State",
      lead: "Head of office: Ladan Ayuba",
      phone: "0806 425 7881",
      lat: 9.2035,
      lng: 12.4954,
      query: "NEMA Yola Operations Office Nigeria"
    },
    {
      id: "owerri-ops",
      name: "Owerri Operations Office",
      type: "operations",
      city: "Owerri, Imo State",
      address: "Owerri, Imo State",
      lead: "Head of office: Igwe Nnamdi",
      phone: "0803 824 2354",
      lat: 5.4836,
      lng: 7.0332,
      query: "NEMA Owerri Operations Office Nigeria"
    },
    {
      id: "ekiti-ops",
      name: "Ekiti Operations Office",
      type: "operations",
      city: "Ado-Ekiti, Ekiti State",
      address: "Ado-Ekiti, Ekiti State",
      lead: "Head of office: Kofoworola Soleye",
      phone: "0803 300 4504",
      lat: 7.6211,
      lng: 5.2214,
      query: "NEMA Ekiti Operations Office Nigeria"
    },
    {
      id: "edo-ops",
      name: "Edo Operations Office",
      type: "operations",
      city: "Benin City, Edo State",
      address: "Benin City, Edo State",
      lead: "Head of office: Dahiru Yusuf",
      phone: "0809 334 9254",
      lat: 6.335,
      lng: 5.6037,
      query: "NEMA Edo Operations Office Benin City Nigeria"
    },
    {
      id: "sokoto-ops",
      name: "Sokoto Operations Office",
      type: "operations",
      city: "Sokoto, Sokoto State",
      address: "No. 7 Dendo Road, Sokoto",
      lead: "Head of office: Aliyu Shehu Kafindangi",
      phone: "0803 564 3701",
      lat: 13.0059,
      lng: 5.2476,
      query: "NEMA Sokoto Operations Office Sokoto Nigeria"
    },
    {
      id: "lagos-ops",
      name: "Lagos Operations Office",
      type: "operations",
      city: "Lagos, Lagos State",
      address: "Lagos, Lagos State",
      lead: "Head of office: Mohammed Olatunde",
      phone: "—",
      lat: 6.4541,
      lng: 3.3947,
      query: "NEMA Lagos Operations Office Lagos Nigeria"
    },
    {
      id: "ibadan-ops",
      name: "Ibadan Operations Office",
      type: "operations",
      city: "Ibadan, Oyo State",
      address: "Federal Secretariat Complex, Ikolaba Area, Ibadan",
      lead: "Head of office: Mr. Yinusa Deji G.",
      phone: "—",
      lat: 7.3776,
      lng: 3.9059,
      query: "NEMA Ibadan Operations Office Ibadan Nigeria"
    },
    {
      id: "minna-ops",
      name: "Minna Operations Office",
      type: "operations",
      city: "Minna, Niger State",
      address: "Minna, Niger State",
      lead: "Head of office: Hussaini Isah",
      phone: "—",
      lat: 9.6152,
      lng: 6.5478,
      query: "NEMA Minna Operations Office Minna Nigeria"
    },
    {
      id: "jos-ops",
      name: "Jos Operations Office",
      type: "operations",
      city: "Jos, Plateau State",
      address: "No. 5 Naraguta Avenue, Anglo Jos",
      lead: "Head of office: Bintu Wana",
      phone: "—",
      lat: 9.89,
      lng: 8.87,
      query: "NEMA Jos Operations Office Jos Nigeria"
    },
    {
      id: "enugu-ops",
      name: "Enugu Operations Office",
      type: "operations",
      city: "Enugu, Enugu State",
      address: "Enugu, Enugu State",
      lead: "Head of office: Mrs. Priscilla Madukwe (Acting)",
      phone: "—",
      lat: 6.4413,
      lng: 7.4988,
      query: "NEMA Enugu Operations Office Enugu Nigeria"
    },
    {
      id: "portharcourt-ops",
      name: "Port Harcourt Operations Office",
      type: "operations",
      city: "Port Harcourt, Rivers State",
      address: "13 Finima Street, Port Harcourt",
      lead: "Head of office: Dr. Chidi Ogundu",
      phone: "—",
      lat: 4.8242,
      lng: 7.0336,
      query: "NEMA Port Harcourt Operations Office Port Harcourt Nigeria"
    },
    {
      id: "kano-ops",
      name: "Kano Operations Office",
      type: "operations",
      city: "Kano, Kano State",
      address: "Kano, Kano State",
      lead: "Head of office: Dr. Nura Abdullahi",
      phone: "—",
      lat: 12.0,
      lng: 8.5167,
      query: "NEMA Kano Operations Office Kano Nigeria"
    },
    {
      id: "kaduna-ops",
      name: "Kaduna Operations Office",
      type: "operations",
      city: "Kaduna, Kaduna State",
      address: "Kaduna, Kaduna State",
      lead: "Head of office: Hajiya Halima Suleiman",
      phone: "—",
      lat: 10.5264,
      lng: 7.4388,
      query: "NEMA Kaduna Operations Office Kaduna Nigeria"
    },
    {
      id: "maiduguri-ops",
      name: "Maiduguri Operations Office",
      type: "operations",
      city: "Maiduguri, Borno State",
      address: "Maiduguri, Borno State",
      lead: "Head of office: Sirajo Abdullahi",
      phone: "—",
      lat: 11.8333,
      lng: 13.15,
      query: "NEMA Maiduguri Operations Office Maiduguri Nigeria"
    },
    {
      id: "abuja-hq",
      name: "NEMA Headquarters",
      type: "headquarters",
      city: "Maitama, Abuja, FCT",
      address: "No. 8, Adetokunbo Ademola Crescent, Maitama, Abuja",
      lead: "Director General: Mrs. Zubaida Umar",
      phone: "—",
      lat: 9.0764,
      lng: 7.4934,
      query: "NEMA Headquarters Maitama Abuja Nigeria"
    }
  ];

  var TYPE_LABEL = { zonal: "Zonal directorate", operations: "Operations office", headquarters: "Headquarters" };
  var TYPE_COLOR = { zonal: "#008751", operations: "#b45309", headquarters: "#1d4ed8" };

  var canvas = document.getElementById("nema-office-map");
  var legendHost = document.getElementById("nema-map-legend");
  var note = document.getElementById("nema-map-note");
  var filterButtons = document.querySelectorAll("[data-map-filter]");
  var baseButtons = document.querySelectorAll("[data-map-base]");

  var mapApi = null; /* "leaflet" or "google" */
  var lmap = null;
  var gmap = null;
  var lMarkers = [];
  var gMarkers = [];
  var infoWindow = null;
  var streetLayer = null;
  var satelliteLayer = null;
  var labelsLayer = null;
  var activeFilter = "all";
  var activeBase = "street";
  var failed = false;

  if (!canvas) return;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function mapsSearchUrl(office) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(office.query);
  }

  function directionsUrl(office) {
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(office.lat + "," + office.lng);
  }

  function streetViewUrl(office) {
    return "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=" + office.lat + "," + office.lng;
  }

  function infoContent(office) {
    return (
      '<div class="nema-info">' +
      '<p class="nema-info__type">' + escapeHtml(TYPE_LABEL[office.type] || "") + "</p>" +
      '<h3 class="nema-info__title">' + escapeHtml(office.name) + "</h3>" +
      '<p class="nema-info__meta">' + escapeHtml(office.address) + "<br>" + escapeHtml(office.city) + "</p>" +
      '<p class="nema-info__meta">' + escapeHtml(office.lead) + "<br>" + escapeHtml(office.phone) + "</p>" +
      '<p class="nema-info__links"><a href="' + directionsUrl(office) + '" target="_blank" rel="noopener">Directions</a>' +
      ' <a href="' + mapsSearchUrl(office) + '" target="_blank" rel="noopener">Open in Google Maps</a>' +
      ' <a href="' + streetViewUrl(office) + '" target="_blank" rel="noopener">Street View</a></p>' +
      "</div>"
    );
  }

  function renderLegend() {
    if (!legendHost) return;
    legendHost.innerHTML = OFFICES.map(function (office) {
      return (
        '<li class="map-legend__item" data-office-type="' + office.type + '">' +
        '<button class="map-legend__btn" type="button" data-office="' + office.id + '">' +
        '<span class="map-legend__dot map-legend__dot--' + office.type + '" aria-hidden="true"></span>' +
        '<span class="map-legend__text"><strong>' + escapeHtml(office.name) + "</strong>" +
        "<span>" + escapeHtml(office.city) + "</span></span></button>" +
        '<a class="map-legend__link" href="' + mapsSearchUrl(office) + '" target="_blank" rel="noopener" aria-label="Open ' + escapeHtml(office.name) + ' in Google Maps">Open</a>' +
        "</li>"
      );
    }).join("");
  }

  function updateFilterButtons() {
    filterButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-map-filter") === activeFilter ? "true" : "false");
    });
    if (legendHost) {
      legendHost.querySelectorAll("[data-office-type]").forEach(function (item) {
        item.hidden = activeFilter !== "all" && item.getAttribute("data-office-type") !== activeFilter;
      });
    }
  }

  function applyFilter(filter) {
    activeFilter = filter || "all";
    updateFilterButtons();

    if (mapApi === "google") {
      gMarkers.forEach(function (entry) {
        var visible = activeFilter === "all" || entry.office.type === activeFilter;
        entry.marker.setMap(visible ? gmap : null);
        entry.visible = visible;
      });
      fitVisible();
    } else if (mapApi === "leaflet") {
      lMarkers.forEach(function (entry) {
        var visible = activeFilter === "all" || entry.office.type === activeFilter;
        if (visible && !lmap.hasLayer(entry.marker)) lmap.addLayer(entry.marker);
        if (!visible && lmap.hasLayer(entry.marker)) lmap.removeLayer(entry.marker);
        entry.visible = visible;
      });
      fitVisible();
    }
  }

  function applyBase() {
    baseButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-map-base") === activeBase ? "true" : "false");
    });

    if (mapApi === "google" && gmap) {
      gmap.setMapTypeId(activeBase === "satellite" ? "hybrid" : "roadmap");
    } else if (mapApi === "leaflet" && lmap) {
      if (activeBase === "satellite") {
        if (lmap.hasLayer(streetLayer)) lmap.removeLayer(streetLayer);
        if (!lmap.hasLayer(satelliteLayer)) lmap.addLayer(satelliteLayer);
        if (!lmap.hasLayer(labelsLayer)) lmap.addLayer(labelsLayer);
      } else {
        if (lmap.hasLayer(satelliteLayer)) lmap.removeLayer(satelliteLayer);
        if (lmap.hasLayer(labelsLayer)) lmap.removeLayer(labelsLayer);
        if (!lmap.hasLayer(streetLayer)) lmap.addLayer(streetLayer);
      }
    }
  }

  function setBase(base) {
    if (base !== "street" && base !== "satellite") return;
    activeBase = base;
    applyBase();
  }

  function visibleMarkers() {
    return mapApi === "google" ? gMarkers : lMarkers;
  }

  function fitVisible() {
    var entries = visibleMarkers().filter(function (entry) { return entry.visible; });
    if (!entries.length) return;

    if (mapApi === "google" && gmap && window.google && google.maps.LatLngBounds) {
      var gbounds = new google.maps.LatLngBounds();
      entries.forEach(function (entry) { gbounds.extend(entry.marker.getPosition()); });
      if (entries.length === 1) {
        gmap.setCenter(gbounds.getCenter());
        gmap.setZoom(11);
      } else {
        gmap.fitBounds(gbounds, 48);
      }
    } else if (mapApi === "leaflet" && lmap) {
      if (entries.length === 1) {
        lmap.setView([entries[0].office.lat, entries[0].office.lng], 11);
      } else {
        lmap.fitBounds(entries.map(function (entry) {
          return [entry.office.lat, entry.office.lng];
        }), { padding: [42, 42], maxZoom: 12 });
      }
    }
  }

  function focusOffice(id, openInfo) {
    var entry = visibleMarkers().filter(function (item) {
      return item.office.id === id;
    })[0];
    if (!entry) return;

    if (activeFilter !== "all" && entry.office.type !== activeFilter) {
      applyFilter(entry.office.type);
    }

    if (mapApi === "google" && gmap) {
      gmap.panTo(entry.marker.getPosition());
      gmap.setZoom(12);
      if (openInfo && infoWindow) {
        infoWindow.setContent(infoContent(entry.office));
        infoWindow.open({ map: gmap, anchor: entry.marker });
      }
    } else if (mapApi === "leaflet" && lmap) {
      lmap.flyTo([entry.office.lat, entry.office.lng], 12, { duration: 0.6 });
      if (openInfo) entry.marker.openPopup();
    }
  }

  function bindLegend() {
    if (!legendHost) return;
    legendHost.addEventListener("click", function (event) {
      var button = event.target.closest("[data-office]");
      if (button) focusOffice(button.getAttribute("data-office"), true);
    });
  }

  function leafletPin(office) {
    var color = TYPE_COLOR[office.type] || "#008751";
    var html =
      '<span class="nema-pin" style="--pin-color:' + color + '">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" aria-hidden="true">' +
      '<path d="M12 0.6C5.4 0.6 0.6 5.4 0.6 12c0 8.2 11.4 17.6 11.4 17.6s11.4-9.4 11.4-17.6C23.4 5.4 18.6 0.6 12 0.6z" fill="currentColor" stroke="#ffffff" stroke-width="2"/>' +
      '<circle cx="12" cy="12" r="4" fill="#ffffff"/></svg></span>';
    return L.divIcon({
      className: "nema-pin-wrap",
      html: html,
      iconSize: [24, 30],
      iconAnchor: [12, 30],
      popupAnchor: [0, -30]
    });
  }

  function initLeaflet() {
    if (mapApi) return true;
    if (!window.L) return false;

    try {
      mapApi = "leaflet";
      lmap = L.map(canvas, {
        center: [9.082, 8.6753],
        zoom: 6,
        minZoom: 3,
        maxZoom: 19,
        scrollWheelZoom: true,
        zoomControl: true
      });

      streetLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?cb=" + Date.now(), {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });
      satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?cb=" + Date.now(), {
        maxZoom: 19,
        attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> — Esri, Maxar, Earthstar Geographics'
      });
      labelsLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}?cb=" + Date.now(), {
        maxZoom: 19,
        attribution: ""
      });

      lMarkers = OFFICES.map(function (office) {
        var marker = L.marker([office.lat, office.lng], {
          icon: leafletPin(office),
          title: office.name,
          riseOnHover: true,
          keyboard: true
        }).addTo(lmap);
        marker.bindPopup(infoContent(office), { maxWidth: 290 });
        marker.on("click", function () { marker.openPopup(); });
        return { office: office, marker: marker, visible: true };
      });

      applyBase();
      applyFilter(activeFilter);
      canvas.setAttribute("data-map-ready", "leaflet");
      if (note) note.hidden = true;
      return true;
    } catch (error) {
      mapApi = null;
      if (lmap) {
        try { lmap.remove(); } catch (ignored) { /* noop */ }
        lmap = null;
      }
      return false;
    }
  }

  function googleMarkerIcon(office) {
    var color = TYPE_COLOR[office.type] || "#008751";
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="46" viewBox="0 0 36 46">' +
      '<path d="M18 1C8.6 1 1 8.6 1 18c0 12.4 17 27 17 27s17-14.6 17-27C35 8.6 27.4 1 18 1z" fill="' +
      color +
      '" stroke="#ffffff" stroke-width="2.5"/>' +
      '<circle cx="18" cy="18" r="6.2" fill="#ffffff"/></svg>';
    return {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg),
      scaledSize: new google.maps.Size(24, 30),
      anchor: new google.maps.Point(12, 30)
    };
  }

  function initGoogleMap() {
    if (mapApi) return;
    try {
      gmap = new google.maps.Map(canvas, {
        center: { lat: 9.082, lng: 8.6753 },
        zoom: 6,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        gestureHandling: "cooperative",
        mapTypeId: activeBase === "satellite" ? "hybrid" : "roadmap",
        styles: [
          { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
          { featureType: "transit", elementType: "labels", stylers: [{ visibility: "off" }] }
        ]
      });
      infoWindow = new google.maps.InfoWindow();
      gMarkers = OFFICES.map(function (office) {
        var marker = new google.maps.Marker({
          position: { lat: office.lat, lng: office.lng },
          map: gmap,
          title: office.name,
          icon: googleMarkerIcon(office)
        });
        marker.addListener("click", function () {
          infoWindow.setContent(infoContent(office));
          infoWindow.open({ map: gmap, anchor: marker });
        });
        return { office: office, marker: marker, visible: true };
      });

      mapApi = "google";
      applyBase();
      applyFilter(activeFilter);
      canvas.setAttribute("data-map-ready", "google");
      if (note) note.hidden = true;
    } catch (error) {
      mapApi = null;
      gmap = null;
      showFallback("Google Maps could not start. Showing OpenStreetMap instead.");
    }
  }

  function showFallback(message) {
    if (mapApi) return;
    if (initLeaflet()) return;

    if (failed) return;
    failed = true;
    canvas.innerHTML =
      '<iframe title="Google map of NEMA zonal directorates and operations offices in Nigeria" ' +
      'src="https://www.google.com/maps?q=' + encodeURIComponent("NEMA zonal and operations offices Nigeria") + '&z=6&output=embed" ' +
      'loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
    if (note && message) {
      note.hidden = false;
      note.textContent = message;
    }
  }

  function loadGoogleMaps(key) {
    window.initNemaMap = initGoogleMap;
    window.gm_authFailure = function () {
      showFallback("Google Maps could not authenticate. Showing OpenStreetMap instead.");
    };

    var script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      encodeURIComponent(key) +
      "&callback=initNemaMap&loading=async&v=weekly";
    script.onerror = function () {
      showFallback("Google Maps could not load. Showing OpenStreetMap instead.");
    };
    document.head.appendChild(script);

    window.setTimeout(function () {
      if (!mapApi) showFallback("Google Maps did not load. Showing OpenStreetMap instead.");
    }, 9000);
  }

  renderLegend();
  bindLegend();

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-map-filter"));
    });
  });

  baseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setBase(button.getAttribute("data-map-base"));
    });
  });

  var key = (window.NEMA_MAPS_API_KEY || "").trim();
  if (!key || /YOUR_|PASTE_|EXAMPLE/i.test(key)) {
    if (!initLeaflet()) {
      showFallback("The interactive map could not load. Showing a Google Maps preview instead.");
    }
    return;
  }

  loadGoogleMaps(key);
})();
