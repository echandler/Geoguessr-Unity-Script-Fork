// ==UserScript==
// @name          Geoguessr Unity Script
// @description   For a full list of features included in this script, see this document https://docs.google.com/document/d/18nLXSQQLOzl4WpUgZkM-mxhhQLY6P3FKonQGp-H0fqI/edit?usp=sharing
// @version       7.3.3
// @author        Jupaoqq
// @match         https://www.geoguessr.com/*
// @run-at        document-start
// @license       MIT
// @namespace     Unity script
// @namespace     https://greasyfork.org/users/838374
// @grant         none
// @downloadURL   https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/unity.user.js
// @updateURL     https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/unity.meta.js
// ==/UserScript==

/**
 * Custom your YouTube Search here!
 * Replace " Tour Visit" with any keyword,
 * e.g. "Drone", to customize YouTube mode
 * search results.
 */

let customWord = " Tour Visit";

/**
 * Custom your minimap here!
 */

/**
 * 1: replace "roadmap" in the customMode field with any of the options below:
 * "roadmap" displays the default road map view. This is the default map type.
 * "satellite" displays Google Earth satellite images.
 * "hybrid" displays a mixture of normal and satellite views.
 * "terrain" displays a physical map based on terrain information.
 */

let customMode = "roadmap";

/**
 * 2: Go to https://mapstyle.withgoogle.com/ first click "No thanks, take me to the old style wizard"
 * then click "MORE OPTIONS" to hide or reveal certain features.
 * When you are done, click "FINISH", then "COPY JSON", and replace my settings in custom with your settings below.
 */

let custom =

    [
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

/**
 * End of Minimap customization instruction section
 */

/**
 * Overlay anything on the minimap here!
 * 1. overlay an GeoJSON object
 * 2. overlay a custom image
 */

/**
 * Overlay an GeoJSON object:
 */

// change the GeoJson display style.
// strokeOpacity, strokeWeight, fillOpacity takes a value between 0 and 1.
// strokeColor and fillColor supports Hexadecimal color (#00FF00 is green)
// If clickable is set to true, you would not be able to make a guess within the shape

let GEOJSON_STYLE =
    {
        strokeColor: "black",
        strokeOpacity: 1,
        strokeWeight: 0.2,
        fillColor: "#00FF00",
        fillOpacity: 0,
        clickable: false,
    }

// replace the URL with your desired link
// For example, search "Germany GeoJson" on Github, find this link (https://github.com/isellsoap/deutschlandGeoJSON/blob/main/4_kreise/4_niedrig.geo.json)
// Then click "Download" to get the raw.githubusercontent.com link (https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/4_kreise/4_niedrig.geo.json)
// and replace the URL below with that URL.
// State zipcode: see this site https://github.com/OpenDataDE/State-zip-code-GeoJSON

let YOUR_URL = "https://raw.githubusercontent.com/severinlandolt/map-switzerland/main/02%20GeoJSON/CH_Kantonsgrenzen_100_geo.json"

// set it to true to add your custom GeoJSON by copy it to the code below (this is for

let GeoJsonCustomUser = false

// replace with your custom GeoJson, go to https://geojson.io/ to customize it then copy the Json to here

let CUSTOM_GEOJSON =

    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            2.493896484375,
                            52.7163309360463
                        ],
                        [
                            2.4609375,
                            53.15994678846807
                        ],
                        [
                            3.2025146484375,
                            53.179703893605385
                        ],
                        [
                            3.2080078125,
                            52.96518371955126
                        ],
                        [
                            2.48291015625,
                            52.948637884883205
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            3.218994140625,
                            52.05586831074774
                        ],
                        [
                            3.218994140625,
                            52.13685974852633
                        ],
                        [
                            2.515869140625,
                            52.1267438596429
                        ],
                        [
                            2.515869140625,
                            51.77803705914517
                        ],
                        [
                            3.2354736328125,
                            51.78993084774129
                        ],
                        [
                            3.228607177734375,
                            51.96119237712624
                        ],
                        [
                            2.8571319580078125,
                            51.95230623740452
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "stroke": "#555555",
                    "stroke-width": 2,
                    "stroke-opacity": 1
                },
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            2.5048828125,
                            52.619725272670266
                        ],
                        [
                            2.5103759765625,
                            52.274880130680536
                        ],
                        [
                            2.867431640625,
                            52.284962354465726
                        ],
                        [
                            3.2299804687499996,
                            52.29504228453735
                        ],
                        [
                            3.2135009765625,
                            52.63973017532399
                        ],
                        [
                            2.5096893310546875,
                            52.621392697207625
                        ]
                    ]
                }
            }
        ]
    }

/**
 * Overlay a custom image:
 */

// set it to true to add your image overlay

let OverlayCustom = false;

// replace the URL with your desired link

let OVERLAY_URL = "https://www.battleface.com/blog/wp-content/uploads/2020/10/patreon-profile-tom-geowizard.jpg"

// set the bounds for the image - latitude (North and South), longitude (North and South)

let OVERLAY_BOUNDS =
    {
        north: 53,
        west: -3,
        south: 51,
        east: 1,
    };

// change the image overlay display style.

let OVERLAY_STYLE =
    {
        fillOpacity: 0.2,
        clickable: false,
    }

/**
 * End of Minimap Overlay instruction section
 */

// API Keys

var MS_API_KEY = "Ap2DwDDitzY7jJuYeIJF6YyfqDkYt-QxIBjeQ6SDEJelSfb6ghAVb-V4I-G3om-s";
var YANDEX_API_KEY = "b704b5a9-3d67-4d19-b702-ec7807cecfc6";
var KAKAO_API_KEY = "cbacbe41e3a223d794f321de4f3e247b";
var MAPBOX_API_KEY = "pk.eyJ1IjoianVwYW9xcSIsImEiOiJjbDB2dTBnbngweWIzM2NtdWR5NXZ1dncyIn0.bJixk3kN5Mmedw_C3vQmmw";
const MAPS_API_URL = "https://maps.googleapis.com/maps/api/js"; // removed "?" from the link
var MAPILLARY_API_KEY_LIST =
    ["MLY|6723031704435203|5afd537469b114cf814881137ad74b7c",
     "MLY|6691659414239148|b45e7e82cde126044cbc2cf5d4a7c9b1",
     "MLY|5074369465929308|f7ad2802cbaf26c63f88046a292df68b",
     "MLY|7451643761528219|6477f2db0e3928b51e45ec9311983936",
     "MLY|4855256237866198|6d0464771831c8a4bf2be095e1e1aabc",
     "MLY|4772941976102161|8458d4f08d2e1970cdfe0a4e242c04ff",
     "MLY|4492067214235489|94c44703942362ad6f6b70b5d32c3a45",
     "MLY|4618251611628426|0cef71d6ec8b997a5ec06ecdeabf11ec",
     "MLY|4096846270415982|fa2ce29641503e6ef665f17459633570",
     "MLY|4231415756962414|fe353880fd246e8a4a6ae32152f7dbb0",]

var MAPILLARY_API_KEY = MAPILLARY_API_KEY_LIST[Math.floor(Math.random() * MAPILLARY_API_KEY_LIST.length)];
var MAPY_API_KEY = "placeholder";

console.log("Geoguessr Unity Script v7.3.3 by Jupaoqq");


// Store each player instance

let YandexPlayer, KakaoPlayer, GooglePlayer, MapillaryPlayer, MSStreetPlayer, MapboxPlayer, MapboxMarker, MapyPlayer;
let YANDEX_INJECTED = false;
let BAIDU_INJECTED = false;
let KAKAO_INJECTED = false;
let MAPILLARY_INJECTED = false;
let MS_INJECTED = false;
let MAPBOX_INJECTED = false;
let MAPY_INJECTED = false;
let rainLayer;

let GoogleMapsObj = null;

// Game mode detection

let isBattleRoyale = false;
let isDuel = false;
let isBullseye = false;
let isLiveChallenge = false;

// Player detection and coordinate conversion

let nextPlayer = "Google";
let nextPlayer_save = "Google";
let global_data = {};
let global_lat = 0;
let global_lng = 0;
let global_bounds = {max : {lat: 50.387397, lng: 57.412767}, min : {lat: 50.181227, lng: 57.077273}};
let global_cc = null;
let global_panoID = null;
let global_BDID, global_BDAh, global_BDBh;
let yId, yTime, yEnd, iId;
let global_heading = null;
let global_pitch = null;

let krCoordinates = [38.75292321084364, 124.2804539232574, 33.18509676203202, 129.597381999198]
let global_radi = 100

// Callback variables

let eventListenerAttached = false;
let povListenerAttached = false;
let playerLoaded = false;
let teleportLoaded = false;
let syncLoaded = false;

// Minimize Yandex API use

let yandex_map = false;
let Kakao_map = false;
let Wikipedia_map = false;
let Minecraft_map = false;
let Youtube_map = false;
let bing_map = false;
let Mapy_map = false;

// Mapillary Image Key

let mmKey = 0;

// Handle Yandex compass

let COMPASS = null;

// Handle undo

let locHistory = [];
let defaultPanoIdChange = true;

// Round check

let ROUND = 0;
let CURRENT_ROUND_DATA = null;

let switch_call = true;
let one_reset = false;
// let cnt = 0;

var isFirefox = typeof InstallTrigger !== 'undefined';

let linksList = []
let fire1 = true;
let allowDetect = false;
let planetType = "None";

// Satellite Map Radius (in Meters)
let ms_radius = 15000;
//let sat_choice = false;
const ls_sat_choice = localStorage['unity_sat_choice']; // Added by EC
let sat_choice = !(ls_sat_choice === undefined || ls_sat_choice === "false"); // Added by EC

// Create the Maps, but not reload API
let partialCreateYandex = false;
let partialCreateKakao = false;
let partialCreateMapillary = false;
let partialCreateMS = false;
let partialCreateMapbox = false;
let partialCreateMapy = false;

// let NEW_ROUND_LOADED = false;

// Geoguessr Canvas String Names

let GENERAL_LAYOUT = `[class*="game_canvas"]`;//`[aria-label="Street View"] > canvas`;//".game-layout__canvas";
let GENERAL_CANVAS = `[data-qa*="panorama-canvas"]`; //".game-layout__panorama-canvas";
let BR_CANVAS = ".br-game-layout__panorama-canvas";
let BR_WRAPPER = ".br-game-layout__panorama-wrapper";
let BR_LAYOUT = ".br-game-layout";
let FAIL_TO_LOAD_CANVAS = ".game-layout__panorama-message";
let DUEL_LAYOUT = ".game_layout__TO_jf";
let DUELS_CANVAS = ".game-panorama_panorama__rdhFg";
let DUELS_CANVAS2 = ".game-panorama_panoramaCanvas__PNKve";
let BULLSEYE_CANVAS = ".game-panorama_panorama__ncMwh";
let BULLSEYE_CANVAS2 = ".game-panorama_panoramaCanvas__r_5ea";
let LIVE_CANVAS = ".game-panorama_panorama__IuPsO";
let LIVE_CANVAS2 = ".game-panorama_panoramaCanvas__HbDig";
let DUELS_POPUP = ".overlay_overlay__AR02x";
let BR_POPUP = ".popup__content";

let BR_LOAD_KAKAO = false;
let BR_LOAD_YANDEX = false;
let BR_LOAD_MS = false;
let BR_LOAD_MP = false;
let BR_LOAD_MAPILLARY = false;
let BR_LOAD_MAPY = false;

let ms_sat_map = false;
let rtded = false;
let NM = false;
let NP = false;
let NZ = false;

let initBing = false;

let menuLocCounter = 0;
let wikiUrl = "";
let bullseyeMapillary = false;
let randomPlanets = false;

let corsString = "https://nameless-bastion-28139.herokuapp.com/"
// Additional: https://cors.eu.org/
let carteCity = ""

let youtubeIndex = -1;
let youtubeList = [];

let GAME_CANVAS = "";
let DUEL_CANVAS = "";

let skySpecial = false;
let soilSpecial = false;
let skewedSpecial = false;
let zoomSpecial = false;
let randomSpecial = false;
let nmpzSpecial = false;

let mosaicPre = false;
let restrictMovement = false;

var Weather = false;
var Dimension = true;
var mapSty = true;
var Building = false;

window.toggleSatellite = (e) => {
    if (e.checked)
    {
        sat_choice = true;
        document.getElementById('tgs').style.display = "";
    }
    else
    {
        sat_choice = false;
        document.getElementById('tgs').style.display = "none";
    }
    localStorage['unity_sat_choice'] = sat_choice;
}

window.toggleWeather = (e) => {
    Weather = e.checked ? true : false;
}

window.toggleBuildings = (e) => {
    Building = e.checked ? true : false;
}

window.toggle3D = (e) => {
    Dimension = e.checked ? true : false;
}

window.toggleSky = (e) => {
    skySpecial = e.checked ? true : false;
}

window.toggleSoil = (e) => {
    soilSpecial = e.checked ? true : false;
}

window.toggleSkewed = (e) => {
    skewedSpecial = e.checked ? true : false;
}

window.toggleMaxZoom = (e) => {
    zoomSpecial = e.checked ? true : false;
}

window.toggleRdn = (e) => {
    randomSpecial = e.checked ? true : false;
}

window.toggleNMPZSpecial = (e) => {
    nmpzSpecial = e.checked ? true : false;
}

window.toggleMosaic = (e) => {
    mosaicPre = e.checked ? true : false;
}

window.toggleRestrictMovement = (e) => {
    restrictMovement = e.checked ? true : false;
}

let guiEnabled = true;

const guiHTML = `
<div id="Unity Start Menu" style="margin-top: 20px;margin-bottom: 20px;">
<div class="section_sectionHeader__WQ7Xz section_sizeMedium__yPqLK"><div class="bars_root___G89E bars_center__vAqnw"><div class="bars_before__xAA7R bars_lengthLong__XyWLx"></div><span class="bars_content__UVGlL"><h3>Satellite Mode (Unity Script)</h3></span><div class="bars_after__Z1Rxt bars_lengthLong__XyWLx"></div></div></div>
<div class="start-standard-game_settings__x94PU">
  <div style="display: flex; justify-content: space-around;">
    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Enabled</span>
      <input type="checkbox" id="toggleSatellite" onclick="toggleSatellite(this)" class="toggle_toggle__hwnyw">
    </div>
  </div>
  <p class="body-text_sizeXSmall__rwJFf" style="margin-top: 20px;margin-bottom: 20px;">Radius (2D): Default - depending on map bounds. NZ - 5km. NM - 2km. NMPZ - 1km. <br> Radius (3D): 50% of the radius for 2D under the same setting.</p>
</div>
<div class="start-standard-game_settings__x94PU" id="tgs" style="display:none">
  <div style="display: flex; justify-content: space-around;">
    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Live Weather</span>
      <input type="checkbox" id="toggleWeather" onclick="toggleWeather(this)" class="toggle_toggle__hwnyw">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Buildings</span>
      <input type="checkbox" id="toggleBuildings" onclick="toggleBuildings(this)" class="toggle_toggle__hwnyw">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">3D</span>
      <input type="checkbox" id="toggle3D" onclick="toggle3D(this)" class="toggle_toggle__hwnyw">
    </div>
  </div>
  <p class="body-text_sizeXSmall__rwJFf" style="margin-top: 20px;margin-bottom: 20px;">If "3D" is toggled, right click and drag for 3D View.</p>
</div>
<div class="section_sectionHeader__WQ7Xz section_sizeMedium__yPqLK"><div class="bars_root___G89E bars_center__vAqnw"><div class="bars_before__xAA7R bars_lengthLong__XyWLx"></div><span class="bars_content__UVGlL"><h3>Mosaic & Peek Mode (Unity Script)</h3></span><div class="bars_after__Z1Rxt bars_lengthLong__XyWLx"></div></div></div>
<div class="start-standard-game_settings__x94PU">
  <div style="display: flex; justify-content: space-around;">
    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Enabled</span>
      <input type="checkbox" id="toggleMosaic" onclick="toggleMosaic(this)" class="toggle_toggle__hwnyw">
    </div>
  </div>
  <p class="body-text_sizeXSmall__rwJFf" style="margin-top: 20px;margin-bottom: 20px;">Default mosaic grid: 5x5.</p>
</div>
<div class="section_sectionHeader__WQ7Xz section_sizeMedium__yPqLK"><div class="bars_root___G89E bars_center__vAqnw"><div class="bars_before__xAA7R bars_lengthLong__XyWLx"></div><span class="bars_content__UVGlL"><h3>No Escape Mode (Unity Script)</h3></span><div class="bars_after__Z1Rxt bars_lengthLong__XyWLx"></div></div></div>
<div class="start-standard-game_settings__x94PU">
  <div style="display: flex; justify-content: space-around;">
    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Enabled</span>
      <input type="checkbox" id="toggleRestrictMovement" onclick="toggleRestrictMovement(this)" class="toggle_toggle__hwnyw">
    </div>
  </div>
  <p class="body-text_sizeXSmall__rwJFf" style="margin-top: 20px;margin-bottom: 20px;">Please make sure the "Move" option in Game Settings is allowed. Default radius: 250m.</p>
</div>
<div class="section_sectionHeader__WQ7Xz section_sizeMedium__yPqLK"><div class="bars_root___G89E bars_center__vAqnw"><div class="bars_before__xAA7R bars_lengthLong__XyWLx"></div><span class="bars_content__UVGlL"><h3>Circus Mode (Unity Script)</h3></span><div class="bars_after__Z1Rxt bars_lengthLong__XyWLx"></div></div></div>
<div class="start-standard-game_settings__x94PU">
  <div style="display: flex; justify-content: space-around;">
    <div style="display: flex; align-items: center;">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Sky</span>
      <input type="checkbox" id="toggleSky" onclick="toggleSky(this)" class="toggle_toggle__hwnyw">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Soiled</span>
      <input type="checkbox" id="toggleSoil" onclick="toggleSoil(this)" class="toggle_toggle__hwnyw">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Skewed</span>
      <input type="checkbox" id="toggleSkewed" onclick="toggleSkewed(this)" class="toggle_toggle__hwnyw">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Max Zoom</span>
      <input type="checkbox" id="toggleMaxZoom" onclick="toggleMaxZoom(this)" class="toggle_toggle__hwnyw">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">Random</span>
      <input type="checkbox" id="toggleRdn" onclick="toggleRdn(this)" class="toggle_toggle__hwnyw">
      <span class="game-options_optionLabel__dJ_Cy" style="margin: 0; padding-right: 6px;">NMPZ</span>
      <input type="checkbox" id="toggleNMPZSpecial" onclick="toggleNMPZSpecial(this)" class="toggle_toggle__hwnyw">
    </div>
  </div>
  <p class="body-text_sizeXSmall__rwJFf" style="margin-top: 20px;margin-bottom: 20px;">Please make sure the "Pan" option in Game Settings is allowed. To play in NMPZ, toggle "NMPZ".<br> More than one of the options above may be toggled at the same time.</p>
</div>
</div>
`

const checkInsertGui = () => {
    if ((document.querySelector('.copy-link_root__dBcXL') || document.querySelector('.radio-box_root__ka_9S')) && document.getElementById('toggleSky') === null && document.querySelector('.section_sectionMedium__yXgE6')) {
        document.querySelector('.section_sectionMedium__yXgE6').insertAdjacentHTML('beforeend', guiHTML);
        if (sat_choice) {
            document.getElementById('toggleSatellite').checked = true;
            document.getElementById('tgs').style.display = "";
        }
        if (Weather)
        {
            document.getElementById('toggleWeather').checked = true;
        }
        if (Building)
        {
            document.getElementById('toggleBuildings').checked = true;
        }
        if (Dimension)
        {
            document.getElementById('toggle3D').checked = true;
        }
        if (skySpecial) {
            document.getElementById('toggleSky').checked = true;
        }
        if (soilSpecial) {
            document.getElementById('toggleSoil').checked = true;
        }
        if (skewedSpecial) {
            document.getElementById('toggleSkewed').checked = true;
        }
        if (zoomSpecial) {
            document.getElementById('toggleMaxZoom').checked = true;
        }
        if (randomSpecial) {
            document.getElementById('toggleRdn').checked = true;
        }
        if (nmpzSpecial)
        {
            document.getElementById('toggleNMPZSpecial').checked = true;
        }
        if (mosaicPre)
        {
            document.getElementById('toggleMosaic').checked = true;
        }
        if (restrictMovement)
        {
            document.getElementById('toggleRestrictMovement').checked = true;
        }

    }
}

let observerNew = new MutationObserver((mutations) => {
    if (guiEnabled) {
        checkInsertGui();
    }
    if (document.getElementById('Unity Start Menu'))
    {
        if (document.querySelector('.rule-icons_icon__dcLov'))
        {
            document.getElementById('Unity Start Menu').style.display = "";
        }
        else
        {
            document.getElementById('Unity Start Menu').style.display = "none";
        }
    }
});

observerNew.observe(document.body, {
    characterDataOldValue: false,
    subtree: true,
    childList: true,
    characterData: false
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

// window.addEventListener('popstate', function(event) {
//     var photo = document.getElementById("sat_map");
//     console.log(photo);
//     document.body.appendChild(photo);
// }, false);



/**
 * Helper Functions
 */

// Highlight API Load Message

function myHighlight(...args) {
    console.log(`%c${[...args]}`, "color: dodgerblue; font-size: 24px;");
}

// Hex to number conversion for Baidu coordinate conversion

function hex2a(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
    {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}
window._hex2a = hex2a;

// Coordinate computation given heading, distance and current coordinates for teleport

function FindPointAtDistanceFrom(lat, lng, initialBearingRadians, distanceKilometres) {
    const radiusEarthKilometres = 6371.01;
    var distRatio = distanceKilometres / radiusEarthKilometres;
    var distRatioSine = Math.sin(distRatio);
    var distRatioCosine = Math.cos(distRatio);

    var startLatRad = DegreesToRadians(lat);
    var startLonRad = DegreesToRadians(lng);

    var startLatCos = Math.cos(startLatRad);
    var startLatSin = Math.sin(startLatRad);

    var endLatRads = Math.asin((startLatSin * distRatioCosine) + (startLatCos * distRatioSine * Math.cos(initialBearingRadians)));

    var endLonRads = startLonRad
    + Math.atan2(
        Math.sin(initialBearingRadians) * distRatioSine * startLatCos,
        distRatioCosine - startLatSin * Math.sin(endLatRads));

    return { lat: RadiansToDegrees(endLatRads), lng: RadiansToDegrees(endLonRads) };
}

function DegreesToRadians(degrees) {
    const degToRadFactor = Math.PI / 180;
    return degrees * degToRadFactor;
}

function RadiansToDegrees(radians) {
    const radToDegFactor = 180 / Math.PI;
    return radians * radToDegFactor;
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

function bearing(start_latitude, start_longitude, stop_latitude, stop_longitude){
    let y = Math.sin(stop_longitude-start_longitude) * Math.cos(stop_latitude);
    let x = Math.cos(start_latitude)*Math.sin(stop_latitude) -
        Math.sin(start_latitude)*Math.cos(stop_latitude)*Math.cos(stop_longitude-start_longitude);
    let brng = Math.atan2(y, x) * 180 / Math.PI;
    return brng
}

// Check if two floating point numbers are really really really really close to each other (to 10 decimal points)
function almostEqual (a, b) {
    return a.toFixed(10) === b.toFixed(10)
}

function almostEqual2 (a, b) {
    return a.toFixed(3) === b.toFixed(3)
}

function moveFrom(coords, angle, distance){
    const R_EARTH = 6378.137;
    const M = (1 / ((2 * Math.PI / 360) * R_EARTH)) / 1000;
    let radianAngle = -angle * Math.PI / 180;
    let x = 0 + (distance * Math.cos(radianAngle));
    let y = 0 + (distance * Math.sin(radianAngle));

    let newLat = coords.lat + (y * M);
    let newLng = coords.lng + (x * M) / Math.cos(coords.lat * (Math.PI / 180));
    return { lat: newLat, lng: newLng };
}

function getBBox(coordinates, meters){
    let SW = moveFrom(coordinates, 135, meters);
    let NE = moveFrom(coordinates, 315, meters);
    return `${SW.lng},${SW.lat},${NE.lng},${NE.lat}`;
}

// function getBBox2(coordinates, meters){
//     let SW = moveFrom(coordinates, 135, meters * 1.44);
//     let NE = moveFrom(coordinates, 315, meters * 1.44);
//     return [NE.lat,SW.lng,SW.lat,NE.lng];
// }

function getBBox2(coordinates, meters){
    let SW = moveFrom(coordinates, 135, meters * 1.44);
    let NE = moveFrom(coordinates, 315, meters * 1.44);
    if (NE.lat > 90)
    {
        SW.lat -= (NE.lat - 90);
        NE.lat = 90;
    }
    if (SW.lat < -90)
    {
        NE.lat += (-90 - SW.lat);
        SW.lat = -90;
    }
    if (SW.lng < -180)
    {
        NE.lng += (-180 - SW.lng);
        SW.lng = -180;
    }
    if (NE.lng > 180)
    {
        SW.lng -= (NE.lng - 180);
        NE.lng = 180;
    }
    return [NE.lat,SW.lng,SW.lat,NE.lng];
}

function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p))/2;

    return 1000 * 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function convertMMSS(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    return (minutes * 60 + seconds).toFixed(3);
}

function handleBtwRoundsClear()
{
    youtubeIndex = -1;
    youtubeList = [];
    locHistory = [];
    wikiUrl = "";
    one_reset = false;
    //     let iframe = document.getElementById("i_container");
    //     if (iframe && nextPlayer !== "Image")
    //     {
    //         iframe.src = "";
    //     }
}

// Script injection, extracted from extenssr:
// https://gitlab.com/nonreviad/extenssr/-/blob/main/src/injected_scripts/maps_api_injecter.ts

function overrideOnLoad(googleScript, observer, overrider) {
    const oldOnload = googleScript.onload
    googleScript.onload = (event) => {
        const google = window.google
        if (google) {
            observer.disconnect()
            overrider(google)
        }
        if (oldOnload) {
            oldOnload.call(googleScript, event)
        }
    }
}

function grabGoogleScript(mutations) {
    for (const mutation of mutations) {
        for (const newNode of mutation.addedNodes) {
            const asScript = newNode
            if (asScript && asScript.src && asScript.src.startsWith('https://maps.googleapis.com/')) {
                //asScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDqRTXlnHXELLKn7645Q1L_5oc4CswKZK4&v=3&libraries=places,drawing&language=ja&region=JP"
                return asScript
            }
        }
    }
    return null
}

function injecter(overrider) {
    if (document.documentElement)
    {
        injecterCallback(overrider);
    }
    else
    {
        alert("Script didn't load, refresh to try loading the script");
    }
}


function injecterCallback(overrider)
{
    new MutationObserver((mutations, observer) => {
        const googleScript = grabGoogleScript(mutations)
        if (googleScript) {
            overrideOnLoad(googleScript, observer, overrider)
        }
    }).observe(document.documentElement, { childList: true, subtree: true })
}

function magic_formula(boundary)
{
    let area = Math.abs((boundary[0] - boundary[2]) * (boundary[1] - boundary[3]))
    //     console.log(boundary);
    //     console.log(area);
    let dist = Math.pow((area / 50000), 0.25) * 20000
    if (dist < 250) dist = 250
    return dist
}

function formatDist()
{
    if (ms_radius > 999)
    {
        let d = ms_radius / 1000.0;
        return parseFloat(d.toPrecision(2)).toString() + "km";
    }
    else
    {
        let d = ms_radius;
        return parseFloat(d.toPrecision(3)).toString() + "m";
    }
}

// Getter function for the button elements

function setButtons()
{
    // console.log("set")
    return [document.getElementById("Teleport Forward"), document.getElementById("Teleport Reverse"), document.getElementById("Teleport Button"), document.getElementById("plus"), document.getElementById("minus"),
            document.getElementById("reset"), document.getElementById("switch"), document.getElementById("Show Buttons"),
            document.getElementById("Date Button"), document.getElementById("minus year"), document.getElementById("plus year"),
            document.getElementById("Teleport Options Button"), document.getElementById("Satellite Switch"),
            document.getElementById("Restrict Bounds Main"),
            document.getElementById("Restrict Distance"), document.getElementById("Increase Restrict Distance"),
            document.getElementById("Decrease Restrict Distance"), document.getElementById("Restrict Bounds Enable"),
            document.getElementById("Restrict Distance Reset")];
}

function setButtons2()
{
    // console.log("set")
    return [document.getElementById("Show Buttons"),
            document.getElementById("Youtube Button"),
            document.getElementById("Info Menu"),
            document.getElementById("Teleport Menu"),
            document.getElementById("Satellite Menu"),
            document.getElementById("Mosaic Menu"),
            document.getElementById("Minimap Menu Button"),
            document.getElementById("Space Menu Button"),
            document.getElementById("Time Machine Button"),
            document.getElementById("Circus Menu"),
           ];
}

// Store default position for the button elements

function btnPosFinal(element)
{
    if (element.id !== "Show Buttons")
    {
        if (element.classList.contains("menu-btn"))
        {
            element.style.right = "0.5em";
        }

        if (element.classList.contains("full") || element.classList.contains("extra-full"))
        {
            element.style.right = "4em";
        }
        else if (element.classList.contains("half"))
        {
            if (element.classList.contains("horizontal-1"))
            {
                element.style.right = "4em";
            }
            else if (element.classList.contains("horizontal-2"))
            {
                element.style.right = "11.75em";
            }
            else if (element.classList.contains("horizontal-3"))
            {
                element.style.right = "19.5em";
            }
        }
        else if (element.classList.contains("small"))
        {
            if (element.classList.contains("horizontal-1"))
            {
                element.style.right = "17em";
            }
            else if (element.classList.contains("horizontal-3"))
            {
                element.style.right = "4em";
            }
            else if (element.classList.contains("horizontal-sp"))
            {
                element.style.right = "14.5em";
            }
        }
        else if (element.classList.contains("large"))
        {
            element.style.right = "6.5em";
        }
        else if (element.classList.contains("lgMinus"))
        {
            element.style.right = "6.5em";
        }

        if (element.classList.contains("vertical-0"))
        {
            element.style.top = "6em";
        }
        else if (element.classList.contains("vertical-1"))
        {
            element.style.top = "9.5em";
        }
        else if (element.classList.contains("vertical-2"))
        {
            element.style.top = "12em";
        }
        else if (element.classList.contains("vertical-3"))
        {
            element.style.top = "14.5em";
        }
        else if (element.classList.contains("vertical-4"))
        {
            element.style.top = "17em";
        }
        else if (element.classList.contains("vertical-5"))
        {
            element.style.top = "19.5em";
        }
        else if (element.classList.contains("vertical-6"))
        {
            element.style.top = "22em";
        }
        else if (element.classList.contains("vertical-7"))
        {
            element.style.top = "24.5em";
        }
    }
}

function handleDropdown()
{
    function dropdownHelper1(nm, val)
    {
        let hC = 0
        for (let mapDiv of document.getElementsByClassName(nm)){
            mapDiv.style.top = (val + (hC * 1.65)).toString() + "em";
            hC++;
        }
    }

    // let classN = ["preset-minimap", "overlay-minimap", "space-mainmap", "space-minimap"]
    let classN = ["preset-minimap", "overlay-minimap", "space-minimap", "space-2minimap", "space-3minimap"]
    for (let x of classN)
    {
        dropdownHelper1(x, 11.85);
    }
    let classN2 = ["grid-size", "grid-opt", "satellite-style", "satellite-type"];
    for (let x of classN2)
    {
        dropdownHelper1(x, 14.1);
    }
    allowDetect = true;
}

function resetBtnPos()
{
    let [
        mainMenuBtn,
        YoutubeBtn,
        infoMenu,
        teleportMenu,
        satelliteMenu,
        mosaicMenu,
        MinimapMenuBtn,
        SpaceMenuBtn,
        ClockMenuBtn,
        SpecialMapMenuBtn
    ] = setButtons2();

    // Manu Buttons

    mainMenuBtn.style.top = "6em";
    YoutubeBtn.style.top = "6em";
    infoMenu.style.top = "9.5em";
    teleportMenu.style.top = "12.5em";
    MinimapMenuBtn.style.top = "15.5em";
    satelliteMenu.style.top = "18.5em";
    SpaceMenuBtn.style.top = "21.5em";
    mosaicMenu.style.top = "24.5em";
    ClockMenuBtn.style.top = "27.5em";
    SpecialMapMenuBtn.style.top = "30.5em";

    mainMenuBtn.style.right = "0.5em";
    mainMenuBtn.style.width = "3em";

    for (let element of document.getElementsByClassName("unity-btn")){
        btnPosFinal(element);
    }
    handleDropdown();

}

// Adjust Buttons for different game modes

function AdjustBtnPos(top, right, arg)
{
    if (arg)
    {
        resetBtnPos();
    }
    for (let element of document.getElementsByClassName("unity-btn")){
        let eTop = element.style.top;
        let eRight = element.style.right;
        element.style.top = "calc(" + top.toString() + " + " + eTop + ")";
        element.style.right = "calc(" + right.toString() + " + " + eRight + ")";
        // console.log(element.style.top)
    }
}

function handleStyles()
{
    let unityCSS =
        `visibility:hidden;
        border-radius: 25px;
        opacity: 0.8;
    height:2em;
    position:fixed;
    z-index:99990;
    background-color: #ba55d3;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border: none;
    color: white;
    padding: none;
    text-align: center;
    vertical-align: text-top;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;`;

    for (let element of document.getElementsByClassName("unity-btn")){
        if (element.id !== "Show Buttons")
        {
            element.style = unityCSS;
            // const classNames = ["preset-minimap", "overlay-minimap", "satellite-style", "satellite-type", "space-mainmap", "space-minimap"]
            const classNames = ["preset-minimap", "overlay-minimap", "satellite-style", "satellite-type", "space-minimap","space-2minimap","space-3minimap", "grid-size", "grid-opt"]
            if (classNames.some(className => element.classList.contains(className)))
            {
                element.style.height = "1.5em";
                element.style.background = "#ff69b4";
                if (["Clear", "Default", "Earth", "Grid 0"].includes(element.id))
                {
                    if (element.id == "Clear")
                    {
                        element.loaded = true;
                    }
                    element.style.background = "#ff1493";
                }
            }

            if (element.classList.contains("menu-btn"))
            {
                element.style.width = "3em";
                element.style.height = "2.5em";
                //                 element.style.borderStyle = "solid";
                //                 element.style.borderWidth = "0.1px"
                //                 element.style.borderColor = "black";

            }

            if (element.classList.contains("special-map-btn") && !element.classList.contains("full"))
            {
                element.style.background = "#ff69b4";
            }

            if (element.classList.contains("extra-height"))
            {
                element.style.height = "4.5em";
            }

            if (element.classList.contains("extra-full"))
            {
                element.style.width = "22.75em";
            }
            else if (element.classList.contains("full"))
            {
                element.style.width = "15em";
            }
            else if (element.classList.contains("half"))
            {
                element.style.width = "7.25em";
            }
            else if (element.classList.contains("small"))
            {
                element.style.width = "2em";
            }
            else if (element.classList.contains("large"))
            {
                element.style.width = "10em";
            }
            else if (element.classList.contains("lgMinus"))
            {
                element.style.width = "7.5em";
            }
            btnPosFinal(element);
        }
    }

    let dict = {
        'Info Menu': ["url(https://www.svgrepo.com/show/299161/big-data.svg)", "#ff9999"],
        'Teleport Menu': ["url(https://www.svgrepo.com/show/12767/car.svg)", "#ffcba4"],
        "Time Machine Button": ["url(https://www.svgrepo.com/show/38630/clock.svg)", "#D8BFD8"],
        'Minimap Menu Button': ["url(https://www.svgrepo.com/show/116365/map.svg)", "#faf0be"],
        'Mosaic Menu': ["url(https://www.svgrepo.com/show/77240/map.svg)", "#E6E6FA"],
        'Satellite Menu': ["url(https://www.svgrepo.com/show/29288/satellite.svg)", "#e8f48c"],
        'Space Menu Button': ["url(https://www.svgrepo.com/show/120980/saturn.svg)", "#e0ffff"],
        'Circus Menu': ["url(https://www.svgrepo.com/show/296852/circus.svg)", "#ff99c2"],
    };

    for (let element of document.getElementsByClassName("menu-btn"))
    {
        element.style.backgroundImage = dict[element.id][0];
        element.style.backgroundColor = dict[element.id][1];
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundOrigin = "content-box";
        element.style.backgroundSize = "50%";
        element.style.backgroundPositionX = "50%";
        element.style.backgroundPositionY = "50%";
        element.style.visibility = "";
    }

    handleDropdown();
}

/**
 * Creates Unity buttons
 *
 * @returns Promise
 */

function hideOtherBtn()
{
    for (let element of document.getElementsByClassName("unity-btn")){
        if (element.id !== "Show Buttons")
        {
           if (!element.styleTop){
               element.styleTop = element.style.top;
           }
           clearTimeout(element._timer);

           element.style.transition = "0.2s top ease";
           element.style.top = "calc(6em)";
           element._timer = setTimeout(()=>{
               element.style.visibility = "hidden";
               element.style.transition = "";
           }, 950)

           if (!element.classList.contains("menu-btn")) { element.style.visibility = "hidden"; }
        }
        if (nextPlayer == "Youtube" && element.classList.contains("youtube-btn"))
        {
            element.style.visibility = "";
        }
        if (nextPlayer == "Wikipedia" && element.id == "local language")
        {
            element.style.visibility = "";
        }
    }
}

function switchBtn(arg)
{
    for (let element of document.getElementsByClassName("unity-btn")){
        if (element.id !== "Show Buttons" && !element.classList.contains("menu-btn") && !element.classList.contains(arg))
        {
            element.style.visibility = "hidden";
        }
        if (nextPlayer == "Youtube" && element.classList.contains("youtube-btn"))
        {
            element.style.visibility = "";
        }
        if (nextPlayer == "Wikipedia" && element.id == "local language")
        {
            element.style.visibility = "";
        }
    }
}

function getVar(argm)
{
    if (argm == "Weather")
    {
        return Weather;
    }
    else if (argm == "Building")
    {
        return Building;
    }
    else if (argm == "Dimension")
    {
        return Dimension;
    }
    else if (argm == "mapSty")
    {
        return mapSty;
    }
    else
    {
        return false;
    }
}

function setVar(argm)
{
    if (argm == "Weather")
    {
        Weather = !Weather;
    }
    else if (argm == "Building")
    {
        Building = !Building;
    }
    else if (argm == "Dimension")
    {
        Dimension = !Dimension;
    }
    else if (argm == "mapSty")
    {
        mapSty = !mapSty;
    }
}

function handleSatColor(cond1, cond2)
{
    let sC = document.getElementById("Satellite Type Button");
    if (cond1)
    {
        for (let element of satType)
        {
            let ele0 = document.getElementById(element[0]);
            let strNmHere;
            if (ele0.id !== "SunPos")
            {
                strNmHere = getVar(ele0.id);
            }
            else
            {
                strNmHere = ele0.id;
            }
            if (strNmHere)
            {
                ele0.innerHTML = element[1];
                ele0.style.background = "#ff1493";
            }
            else
            {
                ele0.innerHTML = element[2];
                ele0.style.background = "#ff69b4";
            }
        }
    }
    if (cond2)
    {
        for (let element of document.getElementsByClassName("satellite-style")){
            if (element.id == sC.currentTime)
            {
                element.style.background = "#ff1493";
            }
            else
            {
                element.style.background = "#ff69b4";
            }
        }
    }
}

function enterChaosMode(heading)
{
    if (heading === -999)
    {
        try
        {
            heading = GooglePlayer.getPhotographerPov().heading;
        }
        catch (e) {
            heading = 0;
        }
    }
    setTimeout(
        function()
        {
            let hdn = heading;
            let pch = GooglePlayer.getPhotographerPov().pitch;
            if (randomSpecial)
            {
                hdn = Math.random() * 360;
            }
            else if (skewedSpecial)
            {
                hdn = (GooglePlayer.getPhotographerPov().heading + 90) % 360;
            }

            if (randomSpecial)
            {
                pch = Math.random() * 180 - 90;
            }
            else if (soilSpecial)
            {
                pch = -60;
            }
            else if (skySpecial)
            {
                pch = 90;
            }
            GooglePlayer.setPov({ heading: hdn, pitch: pch});
        }
        , 300);
    setTimeout(function() {
        let zmn = 0;
        if (randomSpecial)
        {
            zmn = Math.random() * 3;
        }
        else if (zoomSpecial)
        {
            zmn = 4;
        }
        GooglePlayer.setZoom(zmn);
    }, 300);
}



function UnityInitiate() {
    const google = window.google;
    let curPosition;
    let kakao_enabled = true;

    ZoomControls();

    function svCheck(data, status) {
        if (status === 'OK') {
            // console.log("STATUS OK");
            let l = data.location.latLng.toString().split(',');
            let lat = l[0].replaceAll('(', '');
            let lng = l[1].replaceAll(')', '');
            if (lat == curPosition.lat && lng == curPosition.lng && !switch_call)
            {
                console.log("Trying more distance");
                teleportMain.distance += 100;
                teleportMain.innerHTML = "Teleport: " + teleportMain.distance + " m";
            }
            else
            {
                // console.log("Teleport Success");
                let hd = 0;
                if (nextPlayer === "Yandex" || nextPlayer === "Kakao" || nextPlayer === "Bing Streetside" || nextPlayer === "Mapy")
                {
                    hd = switchCovergeButton.heading;
                }
                GooglePlayer.setPosition(data.location.latLng);
                if (hd !== 0)
                {
                    GooglePlayer.setPov({
                        heading: hd,
                        pitch: 0,
                    })
                }
                else
                {
                    GooglePlayer.setPov({
                        heading: switchCovergeButton.heading,
                        pitch: 0,
                    })
                }
                if (teleportMain.distance > 150)
                {
                    teleportMain.distance = 100;
                    teleportMain.innerHTML = "Teleport: " + teleportMain.distance + " m";
                }
            }
            switch_call = false;
        }
        else {
            console.log("STATUS NOT OK");
            teleportMain.distance += 100;
            teleportMain.innerHTML = "Teleport: " + teleportMain.distance + " m";
        }
    }

    google.maps.Map = class extends google.maps.Map {
        constructor(...args) {
            super(...args);

            GoogleMapsObj = this;

            if (GeoJsonCustomUser)
            {
                if (GeoJsonCustomUser)
                {
                    this.data.addGeoJson(CUSTOM_GEOJSON);
                }
                this.data.setStyle(function(feature) {
                    return GEOJSON_STYLE
                });
            }
            if (OverlayCustom)
            {
                let customOverlay = new google.maps.GroundOverlay(OVERLAY_URL, OVERLAY_BOUNDS, OVERLAY_STYLE);
                customOverlay.setMap(this);
            }

            for (let mapDiv of document.getElementsByClassName("preset-minimap")){
                google.maps.event.addDomListener(mapDiv, "click", () => {
                    MinimapBtn.current = mapDiv.id;
                    if (mapDiv.id == "Hybrid")
                    {
                        this.setMapTypeId('hybrid');
                    }
                    else if (mapDiv.id == "Terrain")
                    {
                        this.setMapTypeId('terrain');
                    }
                    else if (mapDiv.id == "Satellite")
                    {
                        this.setMapTypeId('satellite');
                    }
                    else if (mapDiv.id == "Custom")
                    {
                        this.setMapTypeId(customMode);
                    }
                    else
                    {
                        this.setMapTypeId('roadmap');
                    }
                    // this.setTilt(45);
                    for (let ar of presetMinimap)
                    {
                        if (ar[1] == mapDiv.id)
                        {

                            if (!this.set.alreadySet){

                                this.set.alreadySet = true;
                                let p = this.set;
                                this.set = function(...args){
                                    // Total hack by EC, because I can't be bothered with this
                                    // unpaid "job".
                                    if (args[0] === 'styles'){
                                        if (args[2] !== "unity" && this.unity_is_blocking_style_changes){
                                            return;
                                        }
                                    }
                                    p.apply(this, args);
                                }
                            }

                            this.unity_is_blocking_style_changes = ar[1] === 'Default'? false: true;

                            this.set('styles', ar[0], "unity");
                        }
                    }
                    for (let element of document.getElementsByClassName("preset-minimap")){
                        if (element.id == MinimapBtn.current)
                        {
                            element.style.background = "#ff1493";
                        }
                        else
                        {
                            element.style.background = "#ff69b4";
                        }
                        if (rtded || nextPlayer == "Planets") {
                            if (["Borders", "Satellite", "Terrain", "Hybrid", "Custom"].includes(element.id))
                            {
                                element.style.backgroundColor = "red";
                                element.disabled = true;
                            }
                        }
                    }
                });
            }

            for (let mapDiv of document.getElementsByClassName("overlay-minimap")){
                google.maps.event.addDomListener(mapDiv, "click", () => {
                    OverlayBtn.current = mapDiv.id;
                    //                     console.log(mapDiv.url)
                    //                     console.log(mapDiv.id)
                    //                     console.log(mapDiv.loaded)
                    if (!mapDiv.loaded)
                    {
                        this.data.loadGeoJson(mapDiv.url, {
                            id: mapDiv.id
                        });
                        mapDiv.loaded = true;
                    }
                    if (mapDiv.id == "Clear")
                    {
                        this.overlayMapTypes.clear();
                        this.data.setStyle(function(feature) {
                            return GEOJSON_INVISIBLE
                        });
                        for (let element of document.getElementsByClassName("overlay-minimap")){
                            if (element.id === "Clear")
                            {
                                element.style.background = "#ff1493";
                            }
                            else
                            {
                                element.style.background = "#ff69b4";
                                if (["Coverage", "Official", "OSM"].includes(element.id))
                                {
                                    if (rtded || nextPlayer == "Planets")
                                    {
                                        element.style.background = "red";
                                    }
                                }
                                if (["Coverage", "Official", "City Lights", "OSM", "Watercolor", "Toner", "Fire"].includes(element.id))
                                {
                                    element.loaded = false;
                                }
                            }
                        }
                    }
                    else
                    {
                        if (["Coverage", "Official", "City Lights", "OSM", "Watercolor", "Toner", "Fire"].includes(mapDiv.id))
                        {
                            this.overlayMapTypes.clear();
                            const coverageLayer = new google.maps.ImageMapType({
                                getTileUrl ({ x, y }, z) {

                                    // Omits photospheres
                                    // return `https://mts1.googleapis.com/vt?hl=en-US&lyrs=svv|cb_client:apiv3&style=5,8&x=${x}&y=${y}&z=${z}`

                                    // Omits unofficial and trekker, but also half of mongolia

                                    if (mapDiv.id == "Official")
                                    {
                                        return `https://mts1.googleapis.com/vt?hl=en-US&lyrs=svv|cb_client:app&style=5,8&x=${x}&y=${y}&z=${z}`
                                    }
                                    else if (mapDiv.id == "OSM")
                                    {
                                        return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`
                                    }
                                    else if (mapDiv.id == "City Lights")
                                    {
                                        return `https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/GoogleMapsCompatible_Level8/${z}/${y}/${x}.jpg`
                                    }
                                    else if (mapDiv.id == "Watercolor")
                                    {
                                        return `https://stamen-tiles.a.ssl.fastly.net/watercolor/${z}/${x}/${y}.jpg`
                                    }
                                    else if (mapDiv.id == "Toner")
                                    {
                                        return `https://stamen-tiles.a.ssl.fastly.net/toner/${z}/${x}/${y}.png`
                                    }
                                    else if (mapDiv.id == "Fire")
                                    {
                                        return `https://tile.thunderforest.com/spinal-map/${z}/${x}/${y}.png?apikey=1360c6d2440c4202bf725238d1b9c761`
                                    }
                                    // return `https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i${z}!2i${x}!3i${y}!4i256!2m8!1e2!2ssvv!4m2!1scb_client!2sapp!4m2!1scc!2s*211m3*211e3*212b1*213e2*211m3*211e2*212b1*213e2!3m3!3sUS!12m1!1e68!4e0`

                                    // Includes everything
                                    else if (mapDiv.id == "Coverage")
                                    {
                                        return `https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i${z}!2i${x}!3i${y}!4i256!2m8!1e2!2ssvv!4m2!1scb_client!2sapiv3!4m2!1scc!2s*211m3*211e3*212b1*213e2*211m3*211e2*212b1*213e2!3m3!3sUS!12m1!1e68!4e0`
                                    }
                                },
                                maxZoom: 20,
                                tileSize: new google.maps.Size(256, 256),
                            })
                            this.overlayMapTypes.push(coverageLayer);

                            //                             let other = "Official";
                            //                             if (mapDiv.id == "Official")
                            //                             {
                            //                                 other = "Coverage";
                            //                             }

                            for (let element of document.getElementsByClassName("overlay-minimap")){
                                if (["Clear", "City Lights", "Watercolor", "Toner", "Fire"].includes(element.id))
                                {
                                    element.style.background = "#ff69b4";
                                    element.loaded = false;
                                }
                                if (["Coverage", "Official", "OSM"].includes(element.id))
                                {
                                    if (!rtded && nextPlayer !== "Planets")
                                    {
                                        element.style.background = "#ff69b4";
                                        element.loaded = false;
                                    }
                                }
                            }
                            mapDiv.style.background = "#ff1493";
                            mapDiv.loaded = true;
                        }
                        else
                        {
                            this.data.setStyle(function(feature) {
                                return GEOJSON_STYLE
                            });
                            for (let element of document.getElementsByClassName("overlay-minimap")){
                                if (element.id !== "Clear" && element.loaded)
                                {
                                    element.style.background = "#ff1493";
                                }
                                else
                                {
                                    element.style.background = "#ff69b4";
                                }
                                if (["Coverage", "Official", "OSM"].includes(element.id))
                                {
                                    if (rtded || nextPlayer == "Planets")
                                    {
                                        element.style.background = "red";
                                    }
                                }

                            }
                        }
                    }
                });
            }




            for (let spMini of document.getElementsByClassName("spaceMM")) {
                google.maps.event.addDomListener(spMini, "click", () => {
                    OverlayBtn.current = spMini.id;
                    setMapstylePlanet(planetType);
                    if (spMini.id == "Earth") {
                        this.overlayMapTypes.clear();
                        this.setMapTypeId('roadmap');
                        this.set('styles', default_preset);
                        //                         for (let element of document.getElementsByClassName("space-minimap")) {
                        //                             if (element.id === spMini.id) {
                        //                                 element.style.background = "#ff1493";
                        //                             }
                        //                             else {
                        //                                 element.style.background = "#ff69b4";
                        //                             }
                        //                         }
                    }
                    else
                    {
                        this.set('styles', blank);
                        setTimeout(this.set('styles', blank), 1000)
                        this.overlayMapTypes.clear();
                        const coverageLayer = new google.maps.ImageMapType({
                            getTileUrl({ x, y }, z) {
                                if (spMini.id.includes("Moon") || spMini.id.includes("Mars"))
                                {
                                    if (spMini.id.includes("Label")) {
                                        return spMini.url + z + "/" + x + "/" + y + ".png";
                                    }
                                    else
                                    {
                                        y = Math.pow(2, z) - y - 1;
                                        return spMini.url + z + "/" + x + "/" + y + ".png";;
                                    }
                                }
                                else
                                {
                                    return handleSpURL(spMini.url, x, y, z);;
                                }
                            },
                            maxZoom: 20,
                            tileSize: new google.maps.Size(256, 256),
                        })

                        this.overlayMapTypes.push(coverageLayer);

                        if (spMini.id == ("Mars (Labels)"))
                        {
                            const coverageLayer2 = new google.maps.ImageMapType({
                                getTileUrl({ x, y }, z) {
                                    y = Math.pow(2, z) - y - 1;
                                    return `http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/${z}/${x}/${y}.png`;
                                },
                                maxZoom: 20,
                                tileSize: new google.maps.Size(256, 256),
                                opacity: 0.5
                            })
                            this.overlayMapTypes.push(coverageLayer2);
                        }
                    }
                    for (let element of document.getElementsByClassName("spaceMM")) {
                        if (element.id === spMini.id) {
                            element.style.background = "#ff1493";
                        }
                        else if (element.id.includes(planetType)) {
                            element.style.background = "#ff69b4";
                        }
                    }
                });
            }


        }

    }

    const svService = new google.maps.StreetViewService();
    google.maps.StreetViewPanorama = class extends google.maps.StreetViewPanorama {
        constructor(...args) {
            super(...args);
            GooglePlayer = this;

            const isGamePage = () => location.pathname.startsWith("/challenge/") || location.pathname.startsWith("/results/") ||
                  location.pathname.startsWith("/game/")|| location.pathname.startsWith("/battle-royale/") ||
                  location.pathname.startsWith("/duels/") || location.pathname.startsWith("/team-duels/") || location.pathname.startsWith("/bullseye/")
            || location.pathname.startsWith("/live-challenge/");

            this.addListener('position_changed', () => {
                // Maybe this could be used to update the position in the other players
                // so that they are always in sync
                try {
                    if (!isGamePage()) return;
                    // timeMachineBtn.panoId = GooglePlayer.pano;
                    // timeMachineBtn.index = -1;
                    const lat = this.getPosition().lat();
                    const lng = this.getPosition().lng();
                    const { heading, pitch } = this.getPov();

                    if (skySpecial || soilSpecial || skewedSpecial || zoomSpecial || randomSpecial)
                    {
                        enterChaosMode(heading);
                    }

                    curPosition = { lat, lng, heading };

                    if (switchCovergeButton.useGoogle)
                    {
                        switchCovergeButton.lng = lng;
                        switchCovergeButton.lat = lat;
                        switchCovergeButton.heading = heading;
                        if (!timeMachineBtn.list.some(row => row.includes(GooglePlayer.pano)))
                        {
                            timeMachineBtn.innerHTML = "Time Machine";
                            timeMachineBtn.panoId = GooglePlayer.pano;
                            timeMachineBtn.index = -1;
                            timeMachineBtn.plusminusLock = true;
                            timeMachineNewerBtn.style.backgroundColor = "red";
                            timeMachineNewerBtn.disabled = true;
                            timeMachineOlderBtn.style.backgroundColor = "red";
                            timeMachineOlderBtn.disabled = true;
                        }
                    }
                    //                     switchCovergeButton.useGoogle = true;
                    teleportMain.google = true;


                    if (restrictMovement)
                    {
                        let dist = distance(lat, lng , global_lat, global_lng);
                        if (dist > RestrictBoundsBtn.maxDist)
                        {
                            let prevD = distance(RestrictBoundsBtn.lat, RestrictBoundsBtn.lng, global_lat, global_lng);
                            if (prevD > RestrictBoundsBtn.maxDist)
                            {
                                svService.getPanorama({ location: { lat: global_lat, lng: global_lng }, radius: 1000 }, svCheck);
                                RestrictBoundsBtn.lng = global_lng;
                                RestrictBoundsBtn.lat = global_lat;
                            }
                            else
                            {
                                svService.getPanorama({ location: { lat: RestrictBoundsBtn.lat, lng: RestrictBoundsBtn.lng }, radius: 1000 }, svCheck);
                            }
                        }
                        else
                        {
                            RestrictBoundsBtn.lng = lng;
                            RestrictBoundsBtn.lat = lat;
                        }
                        let d = Math.round(distance(RestrictBoundsBtn.lat, RestrictBoundsBtn.lng , global_lat, global_lng));
                        let pct = Math.round((d / RestrictBoundsBtn.maxDist*100));
                        RestrictBoundsBtn.innerHTML = "<font size=2>Straight Line Distance: " + d + "m (" + pct + "%)</font>";
                    }
                }
                catch (e) {
                    console.error("Error:", e);
                }
            });
            this.addListener('pov_changed', () => {
                const { heading, pitch } = this.getPov();
                if (KakaoPlayer) {
                    if (typeof KakaoPlayer !== 'string' )
                    {
                        const vp = KakaoPlayer.getViewpoint();
                        // Prevent a recursive loop: only update kakao's viewpoint if it got out of sync with google's
                        if ((!almostEqual(vp.pan, heading) || !almostEqual(vp.tilt, pitch)) && nextPlayer == "Kakao") {
                            KakaoPlayer.setViewpoint({ pan: heading, tilt: pitch, zoom: vp.zoom });
                        }
                    }
                }
            });
        }
    };

    var mainMenuBtn = document.createElement("Button");
    mainMenuBtn.classList.add("unity-btn", "main-btn");
    mainMenuBtn.id = "Show Buttons";
    mainMenuBtn.hide = false;
    mainMenuBtn.menuBtnCache = true;
    mainMenuBtn.innerHTML = "<font size=2>Unity<br><font size=1>v7.3.3EC</font>";
    mainMenuBtn.style =
        "border-radius: 10px;visibility:hidden;height:2.5em;position:absolute;z-index:99999;background-repeat:no-repeat;background-image:linear-gradient(180deg, #0066cc 50%, #ffcc00 50%);border: none;color: white;padding: none;text-align: center;vertical-align: text-top;text-decoration: none;display: inline-block;font-size: 16px;line-height: 15px;";
    // document.querySelector(".game-layout__status").appendChild(mainMenuBtn)
    document.body.appendChild(mainMenuBtn);
    mainMenuBtn.addEventListener("click", () => {
        if (mainMenuBtn.hide) {
            for (let element of document.getElementsByClassName("unity-btn")){

                    if (!element.styleTop){
                        if (element.classList.contains("menu-btn")) {    element.style.visibility = "";}
                        //element.styleTop = element.style.top;
                       continue;
                    }
                    clearTimeout(element._timer);

                    if (element.classList.contains("menu-btn")) {    element.style.visibility = "";}

                   element.style.transition = "0.2s all ease";
                   element.style.top = element.styleTop;

                   element._timer = setTimeout(()=>{
                      element.style.transition = "";
                   }, 950)
                }

            mainMenuBtn.menuBtnCache = true;
            mainMenuBtn.hide = false;
        }
        else {
            hideOtherBtn();
            mainMenuBtn.menuBtnCache = false;
            mainMenuBtn.hide = true;
        }
    });

    var infoBtn = document.createElement("Button");
    infoBtn.classList.add("unity-btn", "info-btn", "full", "vertical-1", "extra-height");
    infoBtn.id = "Info Button";
    infoBtn.innerHTML = "Geoguessr Unity Script<font size=1><br>&#169; Jupaoqq | v7.3.3</font>";
    document.body.appendChild(infoBtn);
    //     infoBtn.addEventListener("click", () => {
    //         window.open('https://docs.google.com/document/d/18nLXSQQLOzl4WpUgZkM-mxhhQLY6P3FKonQGp-H0fqI/edit?usp=sharing');
    //     });

    var HelpBtn = document.createElement("Button");
    HelpBtn.classList.add("unity-btn", "info-btn", "half", "horizontal-1", "vertical-3");
    HelpBtn.id = "Help Button";
    HelpBtn.innerHTML = "Help & Credits";

    document.body.appendChild(HelpBtn);
    HelpBtn.addEventListener("click", () => {
        window.open('https://docs.google.com/document/d/18nLXSQQLOzl4WpUgZkM-mxhhQLY6P3FKonQGp-H0fqI/edit?usp=sharing');
    });

    var UpdateBtn = document.createElement("Button");
    UpdateBtn.classList.add("unity-btn", "info-btn", "half", "horizontal-2", "vertical-3");
    UpdateBtn.id = "Update Button";
    UpdateBtn.innerHTML = "Check Update";

    document.body.appendChild(UpdateBtn);
    UpdateBtn.addEventListener("click", () => {
        window.open('https://greasyfork.org/en/scripts/436813-geoguessr-unity-script');
    });

    var menuResetBtn = document.createElement("Button");
    menuResetBtn.classList.add("unity-btn", "info-btn", "large", "vertical-4");
    menuResetBtn.id = "Menu Reset";
    menuResetBtn.innerHTML = "Menu Position";
    document.body.appendChild(menuResetBtn);
    menuResetBtn.addEventListener("click", () => {
        menuLocCounter = 0;
        btnAll();
    });

    var menuUpBtn = document.createElement("Button");
    menuUpBtn.classList.add("unity-btn", "info-btn", "small", "horizontal-1", "vertical-4");
    menuUpBtn.id = "Menu Up";
    menuUpBtn.innerHTML = "↑";
    document.body.appendChild(menuUpBtn);
    menuUpBtn.addEventListener("click", () => {
        AdjustBtnPos("-2em", "0em", false);
        menuLocCounter++;
    });

    var menuDownBtn = document.createElement("Button");
    menuDownBtn.classList.add("unity-btn", "info-btn", "small", "horizontal-3", "vertical-4");
    menuDownBtn.id = "Menu down";
    menuDownBtn.innerHTML = "↓";
    document.body.appendChild(menuDownBtn);
    menuDownBtn.addEventListener("click", () => {
        AdjustBtnPos("2em", "0em", false);
        menuLocCounter--;
    });

    var unity_alert = document.createElement("Button");
    unity_alert.classList.add("unity-btn", "unity_alert", "extra-full", "vertical-0");
    unity_alert.id = "Unhackable Button";
    unity_alert.innerHTML = `Unity Alert Message`;
    document.body.appendChild(unity_alert);
    unity_alert.addEventListener("click", unhackableAnsswersShowPrompt);

    function unhackableAnsswersShowPrompt() {

    }

    document.body.addEventListener('keydown', function(e){
        if (e.altKey && e.key === 'u'){
            unhackableAnsswersShowPrompt();
        }
    });

    var infoMenu = document.createElement("Button");
    infoMenu.classList.add("unity-btn", "menu-btn");
    infoMenu.classList.add();
    infoMenu.id = "Info Menu";
    //     infoMenu.innerHTML = "In";
    document.body.appendChild(infoMenu);
    infoMenu.addEventListener("click", () => {
        switchBtn("info-btn");
        if (menuDownBtn.style.visibility == "hidden")
        {
            for (let element of document.getElementsByClassName("info-btn"))
            {
                element.style.visibility = "";
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("info-btn"))
            {
                element.style.visibility = "hidden";
            }
        }
    });

    function handleCountries(locStr)
    {
        let locStr2 = "";

        let hardCode = {"Finland": 3, "United Kingdom": 3, "France": 3, "Czech": 3, "Slovakia": 3};
        if (["Finland", "United Kingdom", "France", "Czech", "Slovakia"].some(v => locStr.includes(v)))
        {
            let ll = locStr.split(",");
            for (let [key, value] of Object.entries(hardCode)) {
                if (locStr.includes(key))
                {
                    for (let ct = 0; ct < value; ct++)
                    {
                        if (ct < ll.length)
                        {
                            locStr2 = locStr2 + ll[ct] + " ";
                        }
                    }
                }
            }
        }
        else if (["Poland", "Brazil", "Denmark"].some(v => locStr.includes(v)))
        {
            let ll = locStr.split(",");
            // console.log(ll);
            for (let ct = 0; ct < ll.length; ct++)
            {
                if (!["gmina", "Region"].some(v => ll[ct].includes(v)))
                {
                    locStr2 = locStr2 + ll[ct] + " ";
                }
            }
        }
        else if (["Russia"].some(v => locStr.includes(v)))
        {
            let ll = locStr.split(",");
            let index = 0;
            for (let ct1 = ll.length - 1; ct1 >= 0; ct1--)
            {
                if (["District", "district", "Oblast", "Krai", "Municipality", "Urban Okrug"].some(v => ll[ct1].includes(v)) && !["Federal District"].some(v => ll[ct1].includes(v)))
                {
                    index = ct1;
                }
            }
            if (locStr.includes("Amur"))
            {
                index = 0;
            }
            for (let ct = index; ct < ll.length; ct++)
            {
                if (!["Federal District"].some(v => ll[ct].includes(v)))
                {
                    locStr2 = locStr2 + ll[ct] + " ";
                }
            }
        }
        else
        {
            locStr2 = locStr;
        }

        const toStrip = ["Região Geográfica Intermediária de", "Região Geográfica Imediata de", "Região Imediata de", "Região Metropolitana de",
                         "Voivodeship", "okres", "kraj", "Oblast", "Krai", "Urban Okrug", "Hromada", "Urban Hromada", "Raion", "Settlement",
                         "Metropolitan Municipality", "Municipality", "Municipal", "Administrative", "District", "Subdistrict", "Province", "Regional", "Council", "Township", "Department", "Local",
                         "Département de", "Arrondissement de", "Communauté rurale de",
                         "Municipio de", "Municipio", "Departamento", "Provincia de", "Provincia", " of"];
        toStrip.forEach(x => {
            locStr2 = locStr2.replaceAll(x, '');
        });

        if (!locStr2.includes("United States"))
        {
            locStr2 = locStr2.replaceAll("County", '');
        }

        if (!locStr2.includes("Botswana"))
        {
            locStr2 = locStr2.replaceAll("Region", '');
        }

        if (playYoutubeBtn.travel)
        {
            console.log("travel video")
            locStr2 += customWord;
        }
        else
        {
            console.log("Any video")
        }

        return locStr2;
    }

    function moduleHandleYoutube()
    {
        // console.log(youtubeList);
        let iframe = document.getElementById("i_container");
        if (youtubeIndex !== -1)
        {
            yId = youtubeList[youtubeIndex];
        }

        let srcString = "https://www.youtube.com/embed/" + yId + "?&playlist=" + yId + "&autoplay=1&modestbranding=1&controls=0";

        if (yTime !== "0")
        {
            srcString += "&start=" + yTime;
        }
        if (yEnd)
        {
            if (yEnd !== "0")
            {
                srcString += "&end=" + yEnd;
            }
        }
        iframe.src = srcString;
        iframe.style.visibility = "";
        playYoutubeBtn.innerHTML = `Check | [${youtubeIndex + 1}]`;
    }

    var youtubeResetBtn = document.createElement("Button");
    youtubeResetBtn.classList.add("unity-btn", "youtube-btn", "small", "horizontal-1", "vertical-0");
    youtubeResetBtn.id = "Youtube Reset";
    youtubeResetBtn.innerHTML = "&#8635;";
    document.body.appendChild(youtubeResetBtn);
    youtubeResetBtn.addEventListener("click", () => {
        if (youtubeIndex !== -1 && youtubeIndex < youtubeList.length - 1)
        {
            moduleHandleYoutube();
        }
    });

    var youtubeRandomBtn = document.createElement("Button");
    youtubeRandomBtn.classList.add("unity-btn", "youtube-btn", "small", "horizontal-sp", "vertical-0");
    youtubeRandomBtn.id = "Youtube Random";
    youtubeRandomBtn.innerHTML = "&#8677;";
    document.body.appendChild(youtubeRandomBtn);
    youtubeRandomBtn.addEventListener("click", () => {
        if (youtubeIndex !== -1 && youtubeIndex < youtubeList.length - 1)
        {
            youtubeIndex++;
            moduleHandleYoutube();
        }
    });

    var youtubeTravelBtn = document.createElement("Button");
    youtubeTravelBtn.classList.add("unity-btn", "youtube-btn", "small", "horizontal-3", "vertical-0");
    youtubeTravelBtn.id = "Youtube Travel";
    youtubeTravelBtn.innerHTML = "<font size=2>Trip</font>";
    document.body.appendChild(youtubeTravelBtn);
    youtubeTravelBtn.addEventListener("click", () => {
        if (playYoutubeBtn.travel)
        {
            playYoutubeBtn.travel = false;
            youtubeTravelBtn.innerHTML = "<font size=2>Any</font>";
        }
        else
        {
            playYoutubeBtn.travel = true;
            youtubeTravelBtn.innerHTML = "<font size=2>Trip</font>";
        }
        playYoutubeBtn.innerHTML = "Check YouTube";

    });

    var playYoutubeBtn = document.createElement("Button");
    playYoutubeBtn.classList.add("unity-btn", "lgMinus", "youtube-btn", "vertical-0");
    playYoutubeBtn.id = "Youtube Button";
    playYoutubeBtn.travel = true;
    playYoutubeBtn.innerHTML = "Check YouTube";
    document.body.appendChild(playYoutubeBtn);
    playYoutubeBtn.addEventListener("click", () => {
        let iframe = document.getElementById("i_container");
        iframe.style.position = "absolute";
        iframe.allow = "autoplay";

        if (!yEnd)
        {
            let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=10&lat=${global_lat}&lon=${global_lng}`
            fetch(url).then(function(response) {
                return response.json();
            }).then(function(data) {
                // console.log(data)
                youtubeList = [];
                youtubeIndex = -1;
                let locStr = data.display_name.replaceAll(/[\u3400-\u9FBF]/g, "").replace(/[0-9]/g, '');;
                // console.log(locStr);
                let locStr2 = handleCountries(locStr)
                // console.log(locStr2);
                let url2 = corsString + `https://youtube-scrape.herokuapp.com/api/search?q=${locStr2}`
                fetch(url2).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    // console.log(data.results);
                    for (let vid of data.results)
                    {
                        if (vid.hasOwnProperty("video"))
                        {
                            let vidLen = convertMMSS(vid.video.duration);
                            if (vidLen > 120)
                            {
                                // console.log(vid.video.title);
                                youtubeList.push(vid.video.id);
                            }
                        }
                    }
                    if (youtubeList.length > 0)
                    {
                        youtubeIndex = 0;
                    }
                    yTime = 20;
                    moduleHandleYoutube();
                }).catch(function() {
                    console.log("youtube scrappe failure");
                });
            }).catch(function() {
                console.log("nominatim failure");
            });
        }
        else
        {
            moduleHandleYoutube();
        }
    });

    // Teleport Module Buttons
    // Class: teleport-btn
    // Button: teleportMenu
    // Buttons: teleportForward, teleportReverse, teleportMain, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, TeleportArisBtn

    function teleportModule(dir)
    {
        if (switchCovergeButton.init)
        {
            // console.log("run");
            switchCovergeButton.init = false;
            if (teleportMain.google)
            {
                switchCovergeButton.useGoogle = true;
                teleportMain.google = true;
            }
            else
            {
                switchCovergeButton.useGoogle = false;
                teleportMain.google = false;
            }
        }
        else
        {
            // console.log(teleportMenu.google)
            if (teleportMain.google && GooglePlayer != null)
            {
                let heading = GooglePlayer.getPov().heading;
                if (!dir)
                {
                    heading = (heading + 180) % 360;
                }
                let place = FindPointAtDistanceFrom(curPosition.lat, curPosition.lng , DegreesToRadians(heading), teleportMain.distance * 0.001)
                svService.getPanorama({ location: place, radius: 1000, source: teleportMain.teleType}, svCheck);
            }
        }
    }

    var teleportForward = document.createElement("Button");
    teleportForward.classList.add("unity-btn", "teleport-btn", "half", "horizontal-1", "vertical-1");
    teleportForward.id = "Teleport Forward";
    teleportForward.innerHTML = "↑ Forward";
    document.body.appendChild(teleportForward);

    teleportForward.addEventListener("click", () => {
        teleportModule(true);
    });

    var teleportReverse = document.createElement("Button");
    teleportReverse.classList.add("unity-btn", "teleport-btn", "half", "horizontal-2", "vertical-1");
    teleportReverse.id = "Teleport Reverse";
    teleportReverse.innerHTML = "↓ Reverse";
    document.body.appendChild(teleportReverse);

    teleportReverse.addEventListener("click", () => {
        teleportModule(false);
    });

    var teleportMain = document.createElement("Button");
    teleportMain.classList.add("unity-btn", "teleport-btn", "large", "vertical-2");
    teleportMain.teleType = "default";
    teleportMain.id = "Teleport Button";
    teleportMain.distance = 100;
    teleportMain.google = true;
    teleportMain.innerHTML = "Teleport: 100m";
    document.body.appendChild(teleportMain);

    var teleportMoreBtn = document.createElement("Button");
    teleportMoreBtn.classList.add("unity-btn", "teleport-btn", "small", "horizontal-3", "vertical-2");
    teleportMoreBtn.id = "plus"
    teleportMoreBtn.innerHTML = "+";
    document.body.appendChild(teleportMoreBtn);
    teleportMoreBtn.addEventListener("click", () => {
        if (teleportMain.distance > 21 && teleportMain.distance < 149) {
            teleportMain.distance = teleportMain.distance + 25;
        }
        teleportMain.innerHTML = "Teleport: " + teleportMain.distance + " m";
    });

    var teleportLessBtn = document.createElement("Button");
    teleportLessBtn.classList.add("unity-btn", "teleport-btn", "small", "horizontal-1", "vertical-2");
    teleportLessBtn.id = "minus"
    teleportLessBtn.innerHTML = "-";
    document.body.appendChild(teleportLessBtn);
    teleportLessBtn.addEventListener("click", () => {
        if (teleportMain.distance > 26) {
            teleportMain.distance = teleportMain.distance - 25;
        }
        teleportMain.innerHTML = "Teleport: " + teleportMain.distance + " m";
    });

    var teleportDistResetBtn = document.createElement("Button");
    teleportDistResetBtn.classList.add("unity-btn", "teleport-btn", "half", "horizontal-1", "vertical-3");
    teleportDistResetBtn.id = "reset"
    teleportDistResetBtn.innerHTML = "Reset Teleport";
    document.body.appendChild(teleportDistResetBtn);
    teleportDistResetBtn.addEventListener("click", () => {
        teleportMain.distance = 100;
        teleportMain.innerHTML = "Teleport: " + teleportMain.distance + " m";
    });

    var TeleportArisBtn = document.createElement("Button");
    TeleportArisBtn.classList.add("unity-btn", "teleport-btn", "half", "horizontal-2", "vertical-3");
    TeleportArisBtn.id = "Teleport Options Button";
    TeleportArisBtn.innerHTML = "+ Unofficial";
    document.body.appendChild(TeleportArisBtn);
    TeleportArisBtn.addEventListener("click", () => {
        if (teleportMain.teleType == "default")
        {
            teleportMain.teleType = "outdoor"
            TeleportArisBtn.innerHTML = "No Unofficial";
        }
        else
        {
            teleportMain.teleType = "default"
            TeleportArisBtn.innerHTML = "+ Unofficial";
        }
    });


    var RestrictBoundsBtn = document.createElement("Button");
    RestrictBoundsBtn.classList.add("unity-btn", "teleport-btn", "full", "horizontal-1", "vertical-4");
    RestrictBoundsBtn.id = "Restrict Bounds Main";
    RestrictBoundsBtn.innerHTML = "No Escape Mode Disabled";
    RestrictBoundsBtn.lat = 0;
    RestrictBoundsBtn.lng = 0;
    RestrictBoundsBtn.maxDist = 250;
    document.body.appendChild(RestrictBoundsBtn);


    var RestrictBoundsDistBtn = document.createElement("Button");
    RestrictBoundsDistBtn.classList.add("unity-btn", "teleport-btn", "large", "vertical-5");
    RestrictBoundsDistBtn.id = "Restrict Distance";
    RestrictBoundsDistBtn.innerHTML = "Limit: 250m";
    document.body.appendChild(RestrictBoundsDistBtn);

    var RestrictMoreBtn = document.createElement("Button");
    RestrictMoreBtn.classList.add("unity-btn", "teleport-btn", "small", "horizontal-3", "vertical-5");
    RestrictMoreBtn.id = "Increase Restrict Distance";
    RestrictMoreBtn.innerHTML = "+";
    document.body.appendChild(RestrictMoreBtn);
    RestrictMoreBtn.addEventListener("click", () => {
        if (RestrictBoundsBtn.maxDist > 49 && RestrictBoundsBtn.maxDist < 249) {
            RestrictBoundsBtn.maxDist = RestrictBoundsBtn.maxDist + 50;
        }
        else if (RestrictBoundsBtn.maxDist > 249 && RestrictBoundsBtn.maxDist < 999) {
            RestrictBoundsBtn.maxDist = RestrictBoundsBtn.maxDist + 250;
        }
        else if (RestrictBoundsBtn.maxDist > 999 && RestrictBoundsBtn.maxDist < 9999) {
            RestrictBoundsBtn.maxDist = RestrictBoundsBtn.maxDist + 1000;
        }
        else if (RestrictBoundsBtn.maxDist > 9999) {
            RestrictBoundsBtn.maxDist = 100000000;
        }
        if (RestrictBoundsBtn.maxDist < 10001)
        {
            RestrictBoundsDistBtn.innerHTML = "Limit: " + RestrictBoundsBtn.maxDist + "m";
        }
        else
        {
            RestrictBoundsDistBtn.innerHTML = "Limit: &#8734;";
        }
    });

    var RestrictLessBtn = document.createElement("Button");
    RestrictLessBtn.classList.add("unity-btn", "teleport-btn", "small", "horizontal-1", "vertical-5");
    RestrictLessBtn.id = "Decrease Restrict Distance";
    RestrictLessBtn.innerHTML = "-";
    document.body.appendChild(RestrictLessBtn);
    RestrictLessBtn.addEventListener("click", () => {
        if (RestrictBoundsBtn.maxDist > 51 && RestrictBoundsBtn.maxDist < 251) {
            RestrictBoundsBtn.maxDist = RestrictBoundsBtn.maxDist - 50;
        }
        else if (RestrictBoundsBtn.maxDist > 251 && RestrictBoundsBtn.maxDist < 1001) {
            RestrictBoundsBtn.maxDist = RestrictBoundsBtn.maxDist - 250;
        }
        else if (RestrictBoundsBtn.maxDist > 1001 && RestrictBoundsBtn.maxDist < 10001) {
            RestrictBoundsBtn.maxDist = RestrictBoundsBtn.maxDist - 1000;
        }
        else if (RestrictBoundsBtn.maxDist > 10001) {
            RestrictBoundsBtn.maxDist = 10000;
        }
        if (RestrictBoundsBtn.maxDist < 10001)
        {
            RestrictBoundsDistBtn.innerHTML = "Limit: " + RestrictBoundsBtn.maxDist + "m";
        }
        else
        {
            RestrictBoundsDistBtn.innerHTML = "Limit: &#8734;";
        }
    });

    var RestrictBoundsEnableBtn = document.createElement("Button");
    RestrictBoundsEnableBtn.classList.add("unity-btn", "teleport-btn", "half", "horizontal-2", "vertical-6");
    RestrictBoundsEnableBtn.id = "Restrict Bounds Enable";
    RestrictBoundsEnableBtn.innerHTML = "Enable Limit";
    document.body.appendChild(RestrictBoundsEnableBtn);
    RestrictBoundsEnableBtn.addEventListener("click", () => {
        if (restrictMovement)
        {
            restrictMovement = false;
            RestrictBoundsEnableBtn.innerHTML = "Enable Limit";
            RestrictBoundsBtn.innerHTML = "No Escape Mode Disabled";
        }
        else
        {
            restrictMovement = true;
            RestrictBoundsEnableBtn.innerHTML = "Disable Limit";
            RestrictBoundsBtn.innerHTML = "No Escape Mode Enabled";
        }
    });

    var RestrictResetBtn = document.createElement("Button");
    RestrictResetBtn.classList.add("unity-btn", "teleport-btn", "half", "horizontal-1", "vertical-6");
    RestrictResetBtn.id = "Restrict Distance Reset";
    RestrictResetBtn.innerHTML = "Reset Limit";
    document.body.appendChild(RestrictResetBtn);
    RestrictResetBtn.addEventListener("click", () => {
        RestrictBoundsBtn.maxDist = 250;
        RestrictBoundsDistBtn.innerHTML = "Limit: " + RestrictBoundsBtn.maxDist + "m";
    });



    // Switch Coverage Module

    var switchCovergeButton = document.createElement("Button");
    switchCovergeButton.classList.add("unity-btn", "timemachine-btn", "full", "vertical-1");
    switchCovergeButton.sat = false;
    switchCovergeButton.id = "switch";
    switchCovergeButton.init = false;
    switchCovergeButton.useGoogle = false;
    switchCovergeButton.lng = 0
    switchCovergeButton.lat = 0
    switchCovergeButton.heading = 0
    switchCovergeButton.innerHTML = "Switch to Google Streetview";
    document.body.appendChild(switchCovergeButton);
    switchCovergeButton.addEventListener("click", () => {
        nextPlayer = nextPlayer_save;
        let GOOGLE_MAPS_CANVAS1 = document.querySelector(GENERAL_CANVAS);
        let GOOGLE_MAPS_CANVAS2 = document.querySelector(BR_CANVAS);
        let GOOGLE_MAPS_CANVAS3 = document.querySelector(".inactive");
        let GOOGLE_MAPS_CANVAS4 = document.querySelector(BULLSEYE_CANVAS2);
        let GOOGLE_MAPS_CANVAS5 = document.querySelector(LIVE_CANVAS2);
        let duel = false;

        let GOOGLE_MAPS_CANVAS = null;
        if (GOOGLE_MAPS_CANVAS1 !== null)
        {
            GOOGLE_MAPS_CANVAS = GOOGLE_MAPS_CANVAS1;
        }
        else if (GOOGLE_MAPS_CANVAS2 !== null)
        {
            GOOGLE_MAPS_CANVAS = GOOGLE_MAPS_CANVAS2;
        }
        else if (GOOGLE_MAPS_CANVAS4 !== null)
        {
            GOOGLE_MAPS_CANVAS = GOOGLE_MAPS_CANVAS4;
        }
        else if (GOOGLE_MAPS_CANVAS5 !== null)
        {
            GOOGLE_MAPS_CANVAS = GOOGLE_MAPS_CANVAS5;
        }
        if (GOOGLE_MAPS_CANVAS3 !== null)
        {
            duel = true;
        }

        let KAKAO_MAPS_CANVAS = document.getElementById("roadview");
        let YANDEX_MAPS_CANVAS = document.querySelector(".ymaps-2-1-79-panorama-screen");
        let MAPILLARY_MAPS_CANVAS = document.getElementById("mapillary-player")
        let BAIDU_MAPS_CANVAS = document.getElementById("i_container");
        let MS_MAPS_CANVAS = document.getElementById("ms-player");
        let MAPBOX_MAPS_CANVAS = document.getElementById("sat_map");
        let MAPY_MAPS_CANVAS = document.getElementById("mapy-player");
        //         if (nextPlayer !== "Baidu") {
        if (switchCovergeButton.useGoogle == false) {
            if (duel)
            {

                if (nextPlayer == "Kakao")
                {
                    KAKAO_MAPS_CANVAS.className = "inactive";
                    KAKAO_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Bing Streetside")
                {
                    MS_MAPS_CANVAS.className = "inactive";
                    MS_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Mapbox Satellite")
                {
                    MAPBOX_MAPS_CANVAS.className = "inactive";
                    MAPBOX_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Yandex")
                {
                    YANDEX_MAPS_CANVAS.style.visibility = "hidden";
                    YANDEX_MAPS_CANVAS.style.zIndex = "none";
                }
                else if (nextPlayer == "Baidu" || nextPlayer == "Youtube" || nextPlayer == "Image" || nextPlayer === "Wikipedia" || nextPlayer === "Minecraft" || nextPlayer === "Carte")
                {
                    BAIDU_MAPS_CANVAS.className = "inactive";
                    BAIDU_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Mapy")
                {
                    MAPY_MAPS_CANVAS.className = "inactive";
                    MAPY_MAPS_CANVAS.style.visibility = "hidden";
                }
                else
                {
                    MAPILLARY_MAPS_CANVAS.className = "inactive";
                    MAPILLARY_MAPS_CANVAS.style.visibility = "hidden";
                }
                document.getElementById("default_player").className = "game-panorama_panoramaCanvas__PNKve";
                document.getElementById("default_player").style.visibility = "";
                window.dispatchEvent(new Event('resize'));
            }
            else
            {
                GOOGLE_MAPS_CANVAS.style.visibility = "";
                if (nextPlayer == "Kakao")
                {
                    KAKAO_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Yandex")
                {
                    YANDEX_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Baidu" || nextPlayer == "Youtube" || nextPlayer == "Image" || nextPlayer === "Wikipedia" || nextPlayer === "Minecraft" || nextPlayer === "Carte")
                {
                    BAIDU_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Mapillary" || nextPlayer == "Google")
                {
                    //MAPILLARY_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Bing Streetside" || nextPlayer == "Planets")
                {
                    MS_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Mapbox Satellite")
                {
                    MAPBOX_MAPS_CANVAS.style.visibility = "hidden";
                }
                else if (nextPlayer == "Mapy")
                {
                    MAPY_MAPS_CANVAS.style.visibility = "hidden";
                }
            }
            const lat = GooglePlayer.getPosition().lat();
            const lng = GooglePlayer.getPosition().lng();
            switch_call = true;
            if ((!almostEqual2(lat, switchCovergeButton.lat) || !almostEqual2(lat, switchCovergeButton.lng)) && !(NM || NP || NZ)) {
                svService.getPanorama({ location: { lat: switchCovergeButton.lat, lng: switchCovergeButton.lng }, radius: 1000 }, svCheck);
            }
            switchCovergeButton.useGoogle = true;
            teleportMain.google = true;
            switchCovergeButton.init = false;

            console.log("use Google");
        }
        else {
            //             if (MS_MAPS_CANVAS)
            //             {
            //                 MS_MAPS_CANVAS.style.visibility = "hidden";
            //             }

            if (duel)
            {
                document.getElementById("default_player").className = "inactive";
                document.getElementById("default_player").style.visibility = "hidden";
                if (nextPlayer == "Kakao")
                {
                    KAKAO_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
                    KAKAO_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Bing Streetside" || nextPlayer == "Planets")
                {
                    MS_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
                    MS_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Mapbox Satellite")
                {
                    MAPBOX_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
                    MAPBOX_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Baidu" || nextPlayer == "Youtube" || nextPlayer == "Image" || nextPlayer === "Wikipedia" || nextPlayer === "Minecraft" || nextPlayer === "Carte")
                {
                    BAIDU_MAPS_CANVAS.className = "game-panorama_panoramaCanvas__PNKve";
                    BAIDU_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Yandex")
                {
                    YANDEX_MAPS_CANVAS.style.visibility = "";
                    YANDEX_MAPS_CANVAS.style.zIndex = "1";
                }
                else if (nextPlayer == "Mapy")
                {
                    MAPY_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
                    MAPY_MAPS_CANVAS.style.visibility = "";
                }
                else
                {
                    MAPILLARY_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
                    MAPILLARY_MAPS_CANVAS.style.visibility = "";
                    MapillaryPlayer.resize();
                    //window.dispatchEvent(new Event('resize'));
                    // document.querySelector(".mapillary-canvas").style.;
                    // mapillary-canvas
                }

            }
            else
            {
                GOOGLE_MAPS_CANVAS.style.visibility = "hidden";
                if (nextPlayer == "Kakao")
                {
                    KAKAO_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Yandex")
                {
                    YANDEX_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Baidu" || nextPlayer == "Youtube" || nextPlayer == "Image" || nextPlayer === "Wikipedia" || nextPlayer === "Minecraft"|| nextPlayer === "Carte")
                {
                    BAIDU_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Mapillary" || nextPlayer == "Google" )
                {
                    //MAPILLARY_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Bing Streetside" || nextPlayer == "Planets")
                {
                    MS_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Mapbox Satellite")
                {
                    MAPBOX_MAPS_CANVAS.style.visibility = "";
                }
                else if (nextPlayer == "Mapy")
                {
                    MAPY_MAPS_CANVAS.style.visibility = "";
                }
            }
            switchCovergeButton.useGoogle = false;
            teleportMain.google = false;
            switchCovergeButton.init = true;
            console.log("use Others");
        }
        if (switchCovergeButton.useGoogle)
        {
            if (nextPlayer == "Google")
            {
                switchCovergeButton.innerHTML = "Switch to Mapillary";
                satelliteSwitchButton.disabled = false;
                satelliteSwitchButton.style.background = "#ba55d3";
            }
            else
            {
                switchCovergeButton.innerHTML = "Switch to " + nextPlayer;
                satelliteSwitchButton.disabled = true;
                satelliteSwitchButton.style.background = "red";
            }
        }
        else
        {
            if (nextPlayer == "Google" || nextPlayer == "Baidu")
            {
                switchCovergeButton.innerHTML = "Switch to Google Streetview";
                satelliteSwitchButton.disabled = true;
                satelliteSwitchButton.style.background = "red";
            }
            else
            {
                switchCovergeButton.innerHTML = "Switch to Google Streetview";
                satelliteSwitchButton.disabled = false;
                satelliteSwitchButton.style.background = "#ba55d3";
            }
        }
    });


    var timeMachineNewerBtn = document.createElement("Button");
    timeMachineNewerBtn.classList.add("unity-btn", "timemachine-btn", "small", "horizontal-3", "vertical-2");
    timeMachineNewerBtn.id = "plus year"
    timeMachineNewerBtn.innerHTML = "+";
    document.body.appendChild(timeMachineNewerBtn);
    timeMachineNewerBtn.addEventListener("click", () => {
        if (timeMachineBtn.index < timeMachineBtn.list.length - 1 && !timeMachineBtn.plusminusLock) {
            timeMachineBtn.index = timeMachineBtn.index + 1;
            GooglePlayer.setPano(timeMachineBtn.list[timeMachineBtn.index][0]);
            timeMachineBtn.innerHTML = "<font size=2>[" + (timeMachineBtn.index + 1) + "] " + timeMachineBtn.list[timeMachineBtn.index][1] + "</font>";
            // console.log(timeMachineBtn.index)
        }
        GenBtnColor();

    });

    var timeMachineOlderBtn = document.createElement("Button");
    timeMachineOlderBtn.classList.add("unity-btn", "timemachine-btn", "small", "horizontal-1", "vertical-2");
    timeMachineOlderBtn.id = "minus year"
    timeMachineOlderBtn.innerHTML = "-";
    document.body.appendChild(timeMachineOlderBtn);
    timeMachineOlderBtn.addEventListener("click", () => {
        if (timeMachineBtn.index > 0 && !timeMachineBtn.plusminusLock) {
            timeMachineBtn.index = timeMachineBtn.index - 1;
            GooglePlayer.setPano(timeMachineBtn.list[timeMachineBtn.index][0]);
            timeMachineBtn.innerHTML = "<font size=2>[" + (timeMachineBtn.index + 1) + "] " + timeMachineBtn.list[timeMachineBtn.index][1] + "</font>";
            // console.log(timeMachineBtn.index)
        }
        GenBtnColor();
    });

    function svCheck2(data, status) {
        let l = []
        if (status === 'OK') {
            // console.log("OK for " + data.location.latLng + " at ID " + data.location.pano);
            // console.log(data.time)
            for (const alt of data.time) {
                let date = Object.values(alt).find((value) => value instanceof Date)

                l.push([alt.pano, date.toDateString()]);
            }
            // console.log(l);
            timeMachineBtn.list = l
            timeMachineBtn.index = l.length - 1;
            timeMachineBtn.innerHTML = "<font size=2>[" + (timeMachineBtn.index + 1) + "] " + timeMachineBtn.list[timeMachineBtn.index][1] + "</font>";
            GenBtnColor();
            timeMachineBtn.plusminusLock = false;
            // timeMachineOlderBtn.click()
            // timeMachineBtn.innerHTML = "Default Date";
        }
    }

    function waitPopulate()
    {
        // console.log(timeMachineBtn.list);
        if (timeMachineBtn.list.length !== 0)
        {
            timeMachineBtn.index = timeMachineBtn.list.length - 1;
            GooglePlayer.setPano(timeMachineBtn.list[timeMachineBtn.index][0]);
        }
        else
        {
            setTimeout(waitPopulate, 250);
        }
    }

    var timeMachineBtn = document.createElement("Button");
    timeMachineBtn.classList.add("unity-btn", "timemachine-btn", "large", "vertical-2");
    timeMachineBtn.id = "Date Button";
    timeMachineBtn.plusminusLock = true;
    timeMachineBtn.panoId = 0;
    timeMachineBtn.index = -1;
    timeMachineBtn.list = [];
    timeMachineBtn.innerHTML = "Time Machine";
    document.body.appendChild(timeMachineBtn);
    timeMachineBtn.addEventListener("click", () => {
        // console.log(timeMachineBtn.index)
        if (timeMachineBtn.panoId != 0)
        {
            if(timeMachineBtn.index == -1)
            {
                timeMachineBtn.list = [];
                svService.getPanorama({pano: timeMachineBtn.panoId}, svCheck2);
                waitPopulate();
            }
            else
            {
                waitPopulate();
                timeMachineBtn.innerHTML = "<font size=2>[" + (timeMachineBtn.index + 1) + "] " + timeMachineBtn.list[timeMachineBtn.index][1] + "</font>";
                GenBtnColor();
            }
        }
        else
        {
            timeMachineBtn.panoId = GooglePlayer.pano;
            svService.getPanorama({pano: timeMachineBtn.panoId}, svCheck2);
            waitPopulate();
        }
    });


    var timeMachineMenu = document.createElement("Button");
    timeMachineMenu.classList.add("unity-btn", "menu-btn");
    timeMachineMenu.id = "Time Machine Button";
    document.body.appendChild(timeMachineMenu);
    timeMachineMenu.addEventListener("click", () => {
        switchBtn("timemachine-btn");
        if (timeMachineBtn.style.visibility == "hidden")
        {
            for (let element of document.getElementsByClassName("timemachine-btn"))
            {
                element.style.visibility = "";
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("timemachine-btn"))
            {
                element.style.visibility = "hidden";
            }
        }
    });


    var teleportMenu = document.createElement("Button");
    teleportMenu.classList.add("unity-btn", "menu-btn");
    teleportMenu.id = "Teleport Menu";
    document.body.appendChild(teleportMenu);
    teleportMenu.addEventListener("click", () => {
        switchBtn("teleport-btn");
        if (teleportForward.style.visibility == "hidden")
        {
            for (let element of document.getElementsByClassName("teleport-btn"))
            {
                element.style.visibility = "";
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("teleport-btn"))
            {
                element.style.visibility = "hidden";
            }
        }
    });

    // Satellite Module Buttons
    // Class: satelliteSwitchButton, satellite-menu
    // subclass 1: satellite-btn-type
    // subclass 2: satellite-btn-style
    // Buttons: satelliteRadius, satelliteType, satelliteStyle
    // satelliteDefault, satelliteNight, satelliteClassic, roadDefault, roadClassic
    // skyDefault, skyCurrent, skyLocal

    var satelliteTypeBtn = document.createElement("Button");
    satelliteTypeBtn.classList.add("unity-btn", "satellite-btn", "half", "horizontal-1", "vertical-2");
    satelliteTypeBtn.id = "Satellite Type Button";
    satelliteTypeBtn.innerHTML = "Map Style";
    satelliteTypeBtn.currentTime = "solarNoon";
    document.body.appendChild(satelliteTypeBtn);


    var satelliteStyleBtn = document.createElement("Button");
    satelliteStyleBtn.classList.add("unity-btn", "satellite-btn", "half", "horizontal-2", "vertical-2");
    satelliteStyleBtn.id = "Satellite Style Button";
    satelliteStyleBtn.innerHTML = "Time";

    document.body.appendChild(satelliteStyleBtn);


    for (let satT of satType)
    {
        let satTButton = document.createElement("Button");
        satTButton.id = satT[0];
        satTButton.classList.add("unity-btn", "satellite-btn", "satellite-type", "half", "horizontal-1");
        satTButton.addEventListener("click", () => {
            // let sB = document.getElementById("Satellite Type Button");
            let strNm = satTButton.id;
            let val = getVar(strNm);
            styleMapboxAll(strNm, !val);
            setVar(strNm);
            handleSatColor(true, false);
        })
        document.body.appendChild(satTButton);

        if (satT[0] === "Dimension"){
            satTButton.title = "In 3D mode, radius is 50%; tilt map to see full radius.";
        }
    }



    for (let satS of satStyle)
    {
        let satSButton = document.createElement("Button");
        satSButton.id = satS[0];
        satSButton.classList.add("unity-btn", "satellite-btn", "satellite-style", "half", "horizontal-2");
        satSButton.innerHTML = satS[1];
        satSButton.addEventListener("click", () => {
            styleMapboxAll("SunPos", satSButton.id);
            satelliteTypeBtn.currentTime = satSButton.id;
            handleSatColor(false, true);
        })
        document.body.appendChild(satSButton);
    }



    function handleSatMenu(cond)
    {
        let transition = true;
        if (cond)
        {
            transition = (satelliteSwitchButton.innerHTML == "Streetview mode");
        }
        else
        {
            transition = (satelliteSwitchButton.innerHTML !== "Streetview mode");
        }
        if (transition)
        {
            for (let element of document.getElementsByClassName("satellite-btn"))
            {
                if (element.id !== "Satellite Switch")
                {
                    element.style.visibility = "hidden";
                }
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("satellite-btn"))
            {
                if (element.id !== "Satellite Switch")
                {
                    element.style.visibility = "";
                }
            }
        }
    }

    var satelliteSwitchButton = document.createElement("Button");
    satelliteSwitchButton.classList.add("unity-btn", "satellite-btn", "full", "vertical-1");
    satelliteSwitchButton.id = "Satellite Switch";
    satelliteSwitchButton.state = false;
    satelliteSwitchButton.innerHTML = "Streetview mode";
    document.body.appendChild(satelliteSwitchButton);
    satelliteSwitchButton.addEventListener("click", () => {
        handleSatMenu(false);
        if (!initBing)
        {
            let di = formatDist();
            //             satelliteRadius.innerHTML = `Satellite (${di})`;
            satelliteSwitchButton.innerHTML = `Satellite (${di})`;

            initBing = true;
            MAPBOX_INJECTED = false;
            BR_LOAD_MP = true;

            let canvas = document.getElementById("sat_map");
            if (!canvas)
            {
                injectMapboxPlayer();
            }
            else
            {
                changeInnerHTML(canvas, false);
                MAPBOX_INJECTED = true;
            }
            nextPlayer = "Mapbox Satellite";
            injectCanvas();
            satCallback();

            sat_choice = true;
            console.log("Load Mapbox Satellite API")
            //
        }
        else
        {
            if (!satelliteSwitchButton.innerHTML.includes("Satellite"))
            {
                // console.log("true!!")
                let di2 = formatDist();
                satelliteSwitchButton.innerHTML = `Satellite (${di2})`;

                nextPlayer = "Mapbox Satellite";
                injectCanvas();
                satCallback();
                nextPlayer = nextPlayer_save;

                sat_choice = true;
                // console.log("hello")
            }
            else
            {
                satelliteSwitchButton.innerHTML = "Streetview mode";
                if (nextPlayer_save == "Mapbox Satellite")
                {
                    nextPlayer = "Google";
                }
                else
                {
                    nextPlayer = nextPlayer_save;
                }

                injectCanvas();
                if (sat_choice)
                {
                    if (nextPlayer !== "Google")
                    {
                        goToLocation(true);
                    }
                    handleButtons();
                }
                sat_choice = false;
            }
            if (satelliteSwitchButton.innerHTML !== "Streetview mode" || nextPlayer == "Baidu")
            {
                switchCovergeButton.disabled = true;
                switchCovergeButton.style.background = "red";
            }
            else
            {
                switchCovergeButton.disabled = false;
                switchCovergeButton.style.background = "#ba55d3";
            }
        }
        localStorage['unity_sat_choice'] = sat_choice;
    });

    var satelliteMenu = document.createElement("Button");
    satelliteMenu.classList.add("unity-btn", "menu-btn");
    satelliteMenu.id = "Satellite Menu";
    document.body.appendChild(satelliteMenu);
    satelliteMenu.addEventListener("click", () => {
        switchBtn("satellite-btn");
        if (satelliteSwitchButton.style.visibility == "hidden")
        {
            satelliteSwitchButton.style.visibility = "";
            handleSatMenu(true);
        }
        else
        {
            for (let element of document.getElementsByClassName("satellite-btn"))
            {
                element.style.visibility = "hidden";
            }
        }

    });


    // Mosaic Module Buttons

    var mosaicMain = document.createElement("Button");
    mosaicMain.classList.add("unity-btn", "mosaic-btn", "full", "vertical-1");
    mosaicMain.id = "Mosaic Enable";
    mosaicMain.grid = 0;
    // mosaicMain.random = false;
    mosaicMain.color = false;
    mosaicMain.label = true;
    // mosaicMain.blink = false;
    mosaicMain.innerHTML = "Mosaic Mode";
    document.body.appendChild(mosaicMain);

    var mosaicGridSize = document.createElement("Button");
    mosaicGridSize.classList.add("unity-btn", "mosaic-btn", "half", "horizontal-2", "vertical-2");
    mosaicGridSize.id = "Mosaic Grid";
    mosaicGridSize.innerHTML = "Grid Size";
    document.body.appendChild(mosaicGridSize);

    let gridWidth = [0, 3, 5, 7, 10, 20, 50, 100];
    for (let i = 0; i < gridWidth.length; i++)
    {
        let gridButton = document.createElement("Button");
        gridButton.id = `Grid ${gridWidth[i]}`;
        gridButton.classList.add("unity-btn", "mosaic-btn", "grid-size", "half", "horizontal-2");
        if (i !== 0)
        {
            gridButton.innerHTML = `${gridWidth[i]} x ${gridWidth[i]}`;
        }
        else
        {
            gridButton.innerHTML = `No Grid`;
        }
        document.body.appendChild(gridButton);
        gridButton.addEventListener("click", () => {
            mosaicMain.color = false;
            mosaicMain.label = true;
            loadGridBtn(gridWidth[i]);
        });
    }

    var mosaicGridOpt = document.createElement("Button");
    mosaicGridOpt.classList.add("unity-btn", "mosaic-btn", "half", "horizontal-1", "vertical-2");
    mosaicGridOpt.id = "Mosaic Options";
    mosaicGridOpt.innerHTML = "Options";
    document.body.appendChild(mosaicGridOpt);

    // ["Blink Mode"]
    let gridOpt = ["Add Color", "Remove Label", "Reveal 5%", "Reveal All", "Peek 0.01s", "Peek 0.1s", "Peek 0.25s", "Peek 0.5s" , "Peek 1s", "Peek 3s"];
    for (let i = 0; i < gridOpt.length; i++)
    {
        let gridButton = document.createElement("Button");
        gridButton.id = `Grid ${gridOpt[i]}`;
        gridButton.classList.add("unity-btn", "mosaic-btn", "grid-opt", "half", "horizontal-1");
        gridButton.innerHTML = `${gridOpt[i]}`;
        document.body.appendChild(gridButton);
        if (gridOpt[i] == "Reveal All")
        {
            gridButton.addEventListener("click", () => {
                let gridCanvas = document.getElementById("grid");
                if (gridCanvas)
                {
                    gridCanvas.style.visibility = "hidden";
                }
            });
        }
        else if (gridOpt[i].includes("Peek"))
        {
            gridButton.addEventListener("click", () => {
                let gridCanvas = document.getElementById("grid");
                if (gridCanvas)
                {
                    gridCanvas.style.visibility = "hidden";
                    let time = 500;
                    if (gridOpt[i].includes("0.01s"))
                    {
                        time = 10;
                    }
                    else if (gridOpt[i].includes("0.1s"))
                    {
                        time = 100;
                    }
                    else if (gridOpt[i].includes("0.25s"))
                    {
                        time = 250;
                    }
                    else if (gridOpt[i].includes("0.5s"))
                    {
                        time = 500;
                    }
                    else if (gridOpt[i].includes("1s"))
                    {
                        time = 1000;
                    }
                    else if (gridOpt[i].includes("3s"))
                    {
                        time = 3000;
                    }
                    setTimeout(function() {gridCanvas.style.visibility = "";}, time);
                }
            });
        }
        else if (gridOpt[i] == "Reveal 5%")
        {
            gridButton.addEventListener("click", () => {
                for (let grid of document.getElementsByClassName("grid-btn"))
                {
                    let num = Math.random();
                    if (num > 0.95)
                    {
                        grid.style.visibility = "hidden";
                    }
                }
            });
        }
        else if (gridOpt[i] == "Add Color")
        {
            gridButton.addEventListener("click", () => {
                mosaicMain.color = true;
                for (let grid of document.getElementsByClassName("grid-btn"))
                {
                    grid.style.background = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
                }
            });
        }
        else if (gridOpt[i] == "Remove Label")
        {
            gridButton.addEventListener("click", () => {
                mosaicMain.label = false;
                for (let grid of document.getElementsByClassName("grid-btn"))
                {
                    grid.innerHTML = "";
                }
            });
        }
    }

    var mosaicMenu = document.createElement("Button");
    mosaicMenu.classList.add("unity-btn", "menu-btn");
    mosaicMenu.id = "Mosaic Menu";
    document.body.appendChild(mosaicMenu);
    mosaicMenu.addEventListener("click", () => {
        switchBtn("mosaic-btn");
        if (mosaicMain.style.visibility == "hidden")
        {
            for (let element of document.getElementsByClassName("mosaic-btn"))
            {
                element.style.visibility = "";
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("mosaic-btn"))
            {
                element.style.visibility = "hidden";
            }
        }
    });



    // Minimap Module

    var MinimapBtn = document.createElement("Button");
    MinimapBtn.classList.add("unity-btn", "minimap-btn", "half", "horizontal-2", "vertical-1");
    MinimapBtn.id = "Minimap Button";
    MinimapBtn.innerHTML = "Minimap Style";
    MinimapBtn.current = "Default";
    //     MinimapBtn.childVisible = false;
    document.body.appendChild(MinimapBtn);

    for (let a of presetMinimap)
    {
        let aButton = document.createElement("Button");
        aButton.id = a[1];
        aButton.classList.add("unity-btn", "minimap-btn", "preset-minimap", "half", "horizontal-2");
        aButton.innerHTML = a[1];
        document.body.appendChild(aButton);
    }

    var OverlayBtn = document.createElement("Button");
    OverlayBtn.classList.add("unity-btn", "minimap-btn", "half", "horizontal-1", "vertical-1");
    OverlayBtn.id = "Overlay Button";
    OverlayBtn.innerHTML = "Overlay";
    OverlayBtn.current = "Clear";
    //     OverlayBtn.childVisible = false;
    document.body.appendChild(OverlayBtn);

    for (let b of presetOverlay)
    {
        let bButton = document.createElement("Button");
        bButton.id = b[0];
        bButton.url = b[1];
        bButton.loaded = false;
        bButton.classList.add("unity-btn", "minimap-btn", "overlay-minimap", "half", "horizontal-1");
        bButton.innerHTML = b[0];
        document.body.appendChild(bButton);
    }

    var MinimapMenuBtn = document.createElement("Button");
    MinimapMenuBtn.classList.add("unity-btn", "menu-btn");
    MinimapMenuBtn.id = "Minimap Menu Button";
    document.body.appendChild(MinimapMenuBtn);
    MinimapMenuBtn.addEventListener("click", () => {
        switchBtn("minimap-btn");
        if (OverlayBtn.style.visibility !== "hidden")
        {
            for (let element of document.getElementsByClassName("minimap-btn")){
                element.style.visibility="hidden";
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("minimap-btn")){
                element.style.visibility="";
            }
        }
    });







    // Space Buttons Module

    //     var SpaceMainmapBtn = document.createElement("Button");
    //     SpaceMainmapBtn.classList.add("unity-btn", "space-btn", "half", "horizontal-2", "vertical-1");
    //     SpaceMainmapBtn.id = "SpMini Button";
    //     SpaceMainmapBtn.innerHTML = "Minimap Style";
    //     SpaceMainmapBtn.current = "Default";
    //     //     SpaceMainmapBtn.childVisible = false;
    //     document.body.appendChild(SpaceMainmapBtn);

    //     for (let a of spaceMainmap)
    //     {
    //         let saButton = document.createElement("Button");
    //         saButton.id = a[0];
    //         saButton.url = a[1];
    //         saButton.classList.add("unity-btn", "space-btn", "space-mainmap", "half", "horizontal-2");
    //         saButton.innerHTML = a[0];
    //         document.body.appendChild(saButton);
    //     }

    var SpaceOverlayBtn = document.createElement("Button");
    SpaceOverlayBtn.classList.add("unity-btn", "space-btn", "extra-full", "horizontal-1", "vertical-1");
    SpaceOverlayBtn.id = "SpOver Button";
    SpaceOverlayBtn.innerHTML = "Space";
    SpaceOverlayBtn.current = "Clear";
    //     SpaceOverlayBtn.childVisible = false;
    document.body.appendChild(SpaceOverlayBtn);

    for (let b of spaceMinimap)
    {
        let sbButton = document.createElement("Button");
        sbButton.id = b[0];
        sbButton.url = b[1];
        sbButton.classList.add("unity-btn", "space-btn", "spaceMM", "space-minimap", "half", "horizontal-1");
        sbButton.innerHTML = b[0];
        document.body.appendChild(sbButton);
    }

    for (let c of spaceMinimap2)
    {
        let scButton = document.createElement("Button");
        scButton.id = c[0];
        scButton.url = c[1];
        scButton.classList.add("unity-btn", "space-btn", "spaceMM", "space-2minimap", "half", "horizontal-2");
        scButton.innerHTML = c[0];
        document.body.appendChild(scButton);
    }

    for (let d of spaceMinimap3)
    {
        let sdButton = document.createElement("Button");
        sdButton.id = d[0];
        sdButton.url = d[1];
        sdButton.classList.add("unity-btn", "space-btn", "spaceMM", "space-3minimap", "half", "horizontal-3");
        sdButton.innerHTML = d[0];
        document.body.appendChild(sdButton);
    }


    var SpaceMenuBtn = document.createElement("Button");
    SpaceMenuBtn.classList.add("unity-btn", "menu-btn");
    SpaceMenuBtn.id = "Space Menu Button";
    document.body.appendChild(SpaceMenuBtn);
    SpaceMenuBtn.addEventListener("click", () => {
        switchBtn("space-btn");
        if (document.getElementById("Ceres").style.visibility !== "hidden")
        {
            for (let element of document.getElementsByClassName("space-btn")){
                element.style.visibility = "hidden";
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("space-btn")){
                element.style.visibility = "";
            }
        }
    });

    var wikiLocalLang = document.createElement("Button");
    wikiLocalLang.classList.add("unity-btn", "full", "horizontal-1", "vertical-0");
    wikiLocalLang.id = "local language";
    wikiLocalLang.state = true;
    wikiLocalLang.innerHTML = "Switch to Local Language";
    document.body.appendChild(wikiLocalLang);
    wikiLocalLang.addEventListener("click", () => {
        if (wikiLocalLang.state && global_cc)
        {
            let cc = langDict[global_cc];
            let fi = "en";
            if (typeof cc !== typeof undefined)
            {
                fi = cc[Math.floor(Math.random() * cc.length)];
            }
            wiki(fi, document.getElementById("i_container"), teleportMenu);
            wikiLocalLang.innerHTML = "Switch to English";
            wikiLocalLang.state = false;
        }
        else
        {
            wiki("en", document.getElementById("i_container"), teleportMenu);
            wikiLocalLang.innerHTML = "Switch to Local Language";
            wikiLocalLang.state = true;
        }
    });


    var specialMapMain = document.createElement("Button");
    specialMapMain.classList.add("unity-btn", "special-map-btn", "full", "vertical-1");
    specialMapMain.id = "Circus Main";
    specialMapMain.innerHTML = "Circus Mode";
    document.body.appendChild(specialMapMain);

    var specialMapSky = document.createElement("Button");
    specialMapSky.classList.add("unity-btn", "special-map-btn", "half", "horizontal-1", "vertical-2");
    specialMapSky.id = "Circus Sky";
    specialMapSky.innerHTML = "Sky";
    document.body.appendChild(specialMapSky);
    specialMapSky.addEventListener("click", () => {
        skySpecial = !skySpecial;
        if (skySpecial)
        {
            enterChaosMode(-999);
        }
        handleSpecialColor();
    });

    var specialMapSkewed = document.createElement("Button");
    specialMapSkewed.classList.add("unity-btn", "special-map-btn", "half", "horizontal-2", "vertical-2");
    specialMapSkewed.id = "Circus Skewed";
    specialMapSkewed.innerHTML = "Skewed";
    document.body.appendChild(specialMapSkewed);
    specialMapSkewed.addEventListener("click", () => {
        skewedSpecial = !skewedSpecial;
        if (skewedSpecial)
        {
            enterChaosMode(-999);
        }
        handleSpecialColor();
    });

    var specialMapSoil = document.createElement("Button");
    specialMapSoil.classList.add("unity-btn", "special-map-btn", "half", "horizontal-1", "vertical-3");
    specialMapSoil.id = "Circus Soil";
    specialMapSoil.innerHTML = "Soiled";
    document.body.appendChild(specialMapSoil);
    specialMapSoil.addEventListener("click", () => {
        soilSpecial = !soilSpecial;
        if (soilSpecial)
        {
            enterChaosMode(-999);
        }
        handleSpecialColor();
    });

    var specialMapZoom = document.createElement("Button");
    specialMapZoom.classList.add("unity-btn", "special-map-btn", "half", "horizontal-2", "vertical-3");
    specialMapZoom.id = "Circus Zoom";
    specialMapZoom.innerHTML = "Max Zoom";
    document.body.appendChild(specialMapZoom);
    specialMapZoom.addEventListener("click", () => {
        zoomSpecial = !zoomSpecial;
        if (zoomSpecial)
        {
            enterChaosMode(-999);
        }
        handleSpecialColor();
    });

    var specialMapRandom = document.createElement("Button");
    specialMapRandom.classList.add("unity-btn", "special-map-btn", "half", "horizontal-2", "vertical-4");
    specialMapRandom.id = "Circus Random";
    specialMapRandom.innerHTML = "Random";
    document.body.appendChild(specialMapRandom);
    specialMapRandom.addEventListener("click", () => {
        randomSpecial = !randomSpecial;
        if (randomSpecial)
        {
            enterChaosMode(-999);
        }
        handleSpecialColor();
    });

    var specialMapNMPZ = document.createElement("Button");
    specialMapNMPZ.classList.add("unity-btn", "special-map-btn", "half", "horizontal-1", "vertical-4");
    specialMapNMPZ.id = "Circus NMPZ";
    specialMapNMPZ.innerHTML = "Force NMPZ";
    document.body.appendChild(specialMapNMPZ);
    specialMapNMPZ.addEventListener("click", () => {
        if (!document.getElementById("specialNMPZ"))
        {
            loadNMPZ();
        }
        else
        {
            if (nmpzSpecial)
            {
                document.getElementById("specialNMPZ").style.visibility = "hidden";
            }
            else
            {
                document.getElementById("specialNMPZ").style.visibility = "";
            }
            nmpzSpecial = !nmpzSpecial;
        }
        handleSpecialColor();
    });



    var specialMapClear = document.createElement("Button");
    specialMapClear.classList.add("unity-btn", "special-map-btn", "half", "horizontal-2", "vertical-5");
    specialMapClear.id = "Circus Clear";
    specialMapClear.innerHTML = "Clear All";
    document.body.appendChild(specialMapClear);
    specialMapClear.addEventListener("click", () => {
        skySpecial = false;
        skewedSpecial = false;
        soilSpecial = false;
        zoomSpecial = false;
        randomSpecial = false;
        enterChaosMode(-999);
        handleSpecialColor();
    });


    var specialMapMenu = document.createElement("Button");
    specialMapMenu.classList.add("unity-btn", "menu-btn");
    specialMapMenu.id = "Circus Menu";
    document.body.appendChild(specialMapMenu);
    specialMapMenu.addEventListener("click", () => {
        switchBtn("special-map-btn");
        if (specialMapMain.style.visibility == "hidden")
        {
            for (let element of document.getElementsByClassName("special-map-btn"))
            {
                element.style.visibility = "";
            }
        }
        else
        {
            for (let element of document.getElementsByClassName("special-map-btn"))
            {
                element.style.visibility = "hidden";
            }
        }
    });

    handleStyles();

   if (sat_choice){
       // Added by EC
       const svCanvas = document.body.querySelector(GENERAL_CANVAS);
       if (svCanvas) svCanvas.style.visibility = "hidden";
   }

    console.log("Script buttons Loaded");
}

function loadNMPZ()
{
    let gridBtn = document.createElement("div");
    gridBtn.id = "specialNMPZ";
    //                 visibility: hidden;
    gridBtn.style =
        `
                display: grid;
                gap: 0px;
                top: 0px;
                left: 0px;
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
                `;
    GAME_CANVAS.appendChild(gridBtn);
}

// Handle Grid Mode

function loadGridBtn(num)
{
    let gridCanvas = document.getElementById("grid");
    let reload = false;
    if (!gridCanvas && num !== 0)
    {
        let gridBtn = document.createElement("div");
        gridBtn.id = "grid";
        //                 visibility: hidden;
        gridBtn.style =
            `
                display: grid;
                gap: 0px;
                top: 0px;
                left: 0px;
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
                `;
        GAME_CANVAS.appendChild(gridBtn);
        gridCanvas = gridBtn;
        reload = true;
    }

    if (gridCanvas)
    {
        let mosaicMenu = document.getElementById("Mosaic Enable");
        if (num !== mosaicMenu.grid || reload)
        {
            console.log("Generate Mosaic tiles");
            gridCanvas.innerHTML = "";
            mosaicMenu.grid = num;
            // cond = true;
            if (num !== 0)
            {
                gridCanvas.style.visibility = "";
                for (let i = 1; i < num+1; i++)
                {
                    for (let ii = 1; ii < num+1; ii++)
                    {
                        let btn1 = document.createElement("Button");
                        btn1.style =
                            `grid-column: ${ii};
                            grid-row: ${i};
                         `;
                        btn1.classList.add("grid-btn");
                        if (num < 21 && mosaicMenu.label)
                        {
                            btn1.innerHTML = `(${ii}, ${i})`;
                        }
                        btn1.addEventListener("click", () => {
                            btn1.style.visibility = "hidden";
                        });
                        if (mosaicMenu.color)
                        {
                            btn1.style.background = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
                        }
                        gridCanvas.appendChild(btn1);
                    }
                }
                mosaicMenu.grid = num;
            }
            else
            {
                gridCanvas.style.visibility = "hidden";

            }

            for (let grid2 of document.getElementsByClassName("grid-size"))
            {
                grid2.style.background = "#ff69b4";
                if (parseInt(grid2.id.replace(/\D/g,'')) == mosaicMenu.grid)
                {
                    grid2.style.background = "#ff1493";
                }
            }
        }

        if (num !== 0)
        {
            gridCanvas.style.visibility = "";
            for (let grid1 of document.getElementsByClassName("grid-btn"))
            {
                grid1.style.visibility = "";
            }
            mosaicPre = true;
        }
        else
        {
            mosaicPre = false;
        }
    }
}


function GenBtnColor()
{
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let timeMachineOlderBtn = document.getElementById("minus year");
    let timeMachineNewerBtn = document.getElementById("plus year");
    let timeMachineBtn = document.getElementById("Date Button");
    if (timeMachineBtn.index == timeMachineBtn.list.length - 1)
    {
        timeMachineNewerBtn.style.backgroundColor = "red";
        timeMachineNewerBtn.disabled = true;
    }
    else
    {
        timeMachineNewerBtn.style.backgroundColor = "#ba55d3";
        timeMachineNewerBtn.disabled = false;
    }
    if (timeMachineBtn.index == 0)
    {
        timeMachineOlderBtn.style.backgroundColor = "red";
        timeMachineOlderBtn.disabled = true;
    }
    else
    {
        timeMachineOlderBtn.style.backgroundColor = "#ba55d3";
        timeMachineOlderBtn.disabled = false;
    }
}

/**
 * Handle Keyboard inputs
 */

function kBoard()
{
    document.addEventListener('keydown', logKey);
}

function logKey(e) {
    // console.log(e.code);
    let isGamePage2 = ["challenge", "results", "game", "battle-royale", "duels", "team-duels", "bullseye"].some(v => window.location.pathname.includes(v));
    if (isGamePage2)
    {
        let mainMenuBtn = document.getElementById("Show Buttons");
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        if (e.code == "Space")
        {
            setHidden(true);
        }
        if (e.code == "Digit4")
        {
            document.getElementById("Teleport Forward").click();
        }
        if (e.code == "Digit3")
        {
            document.getElementById("Teleport Reverse").click();
        }
        else if (e.code == "Digit5")
        {
            document.getElementById("minus year").click();
        }
        else if (e.code == "Digit6")
        {
            document.getElementById("Date Button").click();
        }
        else if (e.code == "Digit7")
        {
            document.getElementById("plus year").click();
        }
        else if (e.code == "Digit8")
        {
            if (mainMenuBtn.style.visibility == "hidden")
            {
                mainMenuBtn.style.visibility = "";
            }
            else
            {
                mainMenuBtn.style.visibility = "hidden";
            }
        }
        else if (e.code == "Digit9")
        {
            document.getElementById("Restrict Bounds Main").maxDist = 100000000;
            document.getElementById("Increase Restrict Distance").click();
            if (!document.getElementById("Restrict Bounds Main").enabled)
            {
                document.getElementById("Restrict Bounds Enable").click();
            }
        }
    }
}


/**
 * Hide or reveal the buttons, and disable buttons if such feature is not available
 */

function setHidden(cond)
{
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let teleportBtn = document.getElementById("Teleport Forward");
    let mainMenuBtn = document.getElementById("Show Buttons");
    if (mainMenuBtn != null)
    {
        mainMenuBtn.style.visibility = "";
        mainMenuBtn.hide = cond;
        // console.log(["cache", mainMenuBtn.menuBtnCache]);
        if (cond)
        {
            if (teleportBtn != null)
            {
                for (let element of document.getElementsByClassName("unity-btn")){
                    element.style.visibility = "hidden";
                }
            }
            let iframe = document.getElementById("i_container");
            if (iframe != null)
            {
                if (!isBattleRoyale)
                {
                    iframe.src = ""
                }
            }
            //                 else
            //                 {
            //                     // TODO
            //                 }
            //             }

        }
        else
        {
            for (let element of document.getElementsByClassName("unity-btn")){
                if (element.id !== "Show Buttons" && !element.classList.contains("menu-btn"))
                {
                    element.style.visibility = "hidden";
                }
            }
        }
    }
}

function setDisable(cond) {
    let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let btnList = [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ];

    function setAll(cond1, cond2)
    {
        for (let btn of btnList)
        {
            btn.style.backgroundColor = cond1;
            btn.disabled = cond2;
        }
    }

    function setMapstyle(cond1, cond2)
    {
        for (let mapDiv of document.getElementsByClassName("preset-minimap"))
        {
            if (["Borders", "Satellite", "Terrain", "Hybrid", "Custom"].includes(mapDiv.id))
            {
                mapDiv.style.backgroundColor = cond1;
                mapDiv.disabled = cond2;
            }
        }
        for (let mapDiv2 of document.getElementsByClassName("overlay-minimap"))
        {
            if (["Coverage", "Official", "OSM"].includes(mapDiv2.id))
            {
                mapDiv2.style.backgroundColor = cond1;
                mapDiv2.disabled = cond2;
            }
        }
    }

    if (teleportBtn != null) {
        setMapstylePlanet("None");
        if (rtded) {
            setAll("red", true);
            setMapstyle("red", true);
        }
        else
        {
            setMapstyle("#ff69b4", false)
            if (cond === "NMPZ") {
                setAll("red", true);
                if (nextPlayer !== "Baidu")
                {
                    satelliteSwitchButton.style.backgroundColor = "#ba55d3";
                    satelliteSwitchButton.disabled = false;
                }
                if (nextPlayer !== "Google")
                {
                    switchCovergeButton.style.backgroundColor = "#ba55d3";
                    switchCovergeButton.disabled = false;
                }
                if (NZ)
                {
                    if (ms_radius > 5000)
                    {
                        ms_radius = 5000;
                    }
                }
                if (NM)
                {
                    if (ms_radius > 2000)
                    {
                        ms_radius = 2000;
                    }
                }
                if (NM && NP && NZ)
                {
                    if (ms_radius > 1000)
                    {
                        ms_radius = 1000;
                    }
                }
            }
            else if (nextPlayer == "Google" || nextPlayer === "Wikipedia" || nextPlayer === "Youtube") {
                setAll("#ba55d3", false);
                if (bullseyeMapillary && nextPlayer === "Google")
                {
                    switchCovergeButton.style.backgroundColor = "red";
                    switchCovergeButton.disabled = true;
                }
            }
            else if (nextPlayer === "Baidu" || nextPlayer === "Image" || nextPlayer === "Minecraft" || nextPlayer === "Carte") {
                setAll("red", true);
                switchCovergeButton.style.backgroundColor = "#ba55d3";
                switchCovergeButton.disabled = false;
                if (nextPlayer !== "Baidu")
                {
                    satelliteSwitchButton.style.backgroundColor = "#ba55d3";
                    satelliteSwitchButton.disabled = false;
                }
            }
            else if (nextPlayer == "Kakao" || nextPlayer == "Yandex" || nextPlayer == "Mapillary" || nextPlayer == "Bing Streetside" || nextPlayer == "Mapy") {
                setAll("#ba55d3", false);
                timeMachineBtn.style.backgroundColor = "red";
                timeMachineBtn.disabled = true;
                let li = [RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn]
                for (let btns of li)
                {
                    btns.style.backgroundColor = "red";
                    btns.disabled = true;
                }

            }
            else if (nextPlayer == "Mapbox Satellite") {
                setAll("#ba55d3", false);
                timeMachineBtn.style.backgroundColor = "red";
                timeMachineBtn.disabled = true;
                for (let btns of document.getElementsByClassName("teleport-btn"))
                {
                    btns.style.backgroundColor = "red";
                    btns.disabled = true;
                }
            }
            else if (nextPlayer == "Planets") {
                setAll("red", true);
                console.log("setting map style");
                setMapstyle("red", true);
                setMapstylePlanet(planetType);
            }
        }
        timeMachineNewerBtn.style.backgroundColor = "red";
        timeMachineNewerBtn.disabled = true;
        timeMachineOlderBtn.style.backgroundColor = "red";
        timeMachineOlderBtn.disabled = true;

    }
}

function setMapstylePlanet(cond)
{
    for (let mapDiv of document.getElementsByClassName("spaceMM"))
    {
        if (cond == "None" && mapDiv.id.includes("Earth"))
        {
            mapDiv.style.backgroundColor = "#ff1493";
            mapDiv.disabled = false;
        }
        else if (mapDiv.id.includes(cond) || mapDiv.id.includes("Earth"))
        {
            mapDiv.style.backgroundColor = "#ff69b4";
            mapDiv.disabled = false;
        }
        else
        {
            mapDiv.style.backgroundColor = "red";
            mapDiv.disabled = true;
        }
    }
}


/**
 * This observer stays alive while the script is running
 */

let alreadyLaunchedObserver = false;
function launchObserver() {
    if (alreadyLaunchedObserver) return;
    alreadyLaunchedObserver = true;

    //let sat4 = document.body.querySelector(".fullscreen-spinner_square__mwMfl");
    let sat4 = document.body.querySelector(`div[class*="spinner"]`);
    if (sat4) {
        // Added by EC.
        const svCanvas = document.body.querySelector(GENERAL_CANVAS);
        if (svCanvas) svCanvas.style.visibility = "hidden";
    }

    UnityInitiate();
    handleTeleport();
    SyncListener();
    kBoard();
    console.log("Main Observer");
    //     const OBSERVER = new MutationObserver((mutations, observer) => {
    //         detectGamePage();
    //     });
    //     OBSERVER.observe(document.head, { attributes: true, childList: true, subtree: true });
    let observer3 = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (oldHref != document.location.href && allowDetect) {
                oldHref = document.location.href;
            }
            if (mutation.removedNodes)
            {
                for (let m of mutation.removedNodes) {
                    if (m.classList)
                    {
                        let sat = m.getElementsByTagName('sat-map');
                        let sat0 = null;
                        let minimap = m.querySelector('.game_guessMap__MTlQ_');

                        if (sat.length !== 0)
                        {
                            sat0 = sat[0];
                            sat0.style.display = "none";
                            // console.log(sat0)
                            //sat0.querySelector('.mapboxgl-map').classList.remove("inactive", "game-panorama_panorama__ncMwh", "game-panorama_panorama__IuPsO", "br-game-layout__panorama", "game-layout__panorama", "game-panorama_panorama__rdhFg")
                            document.body.appendChild(sat0);
                            document.body.appendChild(minimap);

                            let t = setInterval(()=>{

                                let GAME_CANVAS = document.querySelector(GENERAL_LAYOUT);
                                if (!GAME_CANVAS) return;

                                clearInterval(t);

                                GAME_CANVAS.id = "player";
                                GAME_CANVAS.appendChild(sat0)

                                GAME_CANVAS.appendChild(minimap)
                                sat0.style.display = "";

                                detectGamePage();

                            }, 100);
                        }


                    }
                }
            }
            if (mutation.addedNodes)
            {
                for (let m of mutation.addedNodes) {
                    // console.log(m);
                    if (m.classList)
                    {
                        // console.log(m)
                        // let sat3 = m.getElementsByClassName("tooltip_tooltip__CHe2s");
                        let PATHNAME = window.location.pathname;
                         //let sat4 = m.getElementsByClassName('fullscreen-spinner_square__mwMfl');
                        // console.log(m.classList.contains('round-starting_wrapper__1G_FC'));

                        //if (m.classList.contains("game-layout__panorama-message"))
                       // if (document.body.querySelector(`[class*="game_panoramaMessage"]`))
                        if (checkFailedToLoadRoundMsg())
                        {
                            console.log("Fail to load canvas message")
                            if (allowDetect)
                            {
                                detectGamePage();
                            }
                        }
                        else if (m.getElementsByClassName("tooltip_tooltip__CHe2s").length !== 0)
                        {
                            // console.log("detect setting")
                            let mainMenuBtn = document.getElementById("Show Buttons");
                            if (mainMenuBtn != null)
                            {
                                // console.log("try to show show buttons")
                                mainMenuBtn.style.visibility = "";
                                if (mainMenuBtn.menuBtnCache)
                                {
                                    for (let element of document.getElementsByClassName("menu-btn"))
                                    {
                                        element.style.visibility = "";
                                    }
                                }
                            }
                            detectGamePage();
                        }
                        else if ((PATHNAME.startsWith("/challenge/") ||PATHNAME.startsWith("/results/") ||
                                  PATHNAME.startsWith("/game/")|| PATHNAME.startsWith("/battle-royale/") ||
                                  PATHNAME.startsWith("/duels/") || PATHNAME.startsWith("/team-duels/") ||
                                  PATHNAME.startsWith("/bullseye/")) && (m.getElementsByClassName('fullscreen-spinner_square__mwMfl').length !== 0))
                        {
                            // console.log("detect spinner")
                            if (allowDetect)
                            {
                                detectGamePage();
                            }
                        }
                        else if ((PATHNAME.startsWith("/duels/") || PATHNAME.startsWith("/team-duels/")) && (m.classList.contains('new-round_roundInfo__UlMCc')))
                        {
                            // console.log("detect duel")
                            if (allowDetect)
                            {
                                detectGamePage();
                            }
                        }
                        else if (PATHNAME.startsWith("/live-challenge/") && (m.classList.contains('round-starting_wrapper__1G_FC')))
                        {
                            // console.log("detect live challie")
                            if (allowDetect)
                            {
                                detectGamePage();
                            }
                        }

                        let sat = m.getElementsByClassName('result-layout_bottom__qLPd2');

                        if (m.getElementsByClassName('result-layout_bottom__qLPd2').length !== 0)
                        {
                            // console.log("Round middle Callback");
                            nextButtonCallback();
                        }

                        let sat2 = m.getElementsByClassName('guess-map__canvas-container');
                        if (sat2.length !== 0)
                        {
                            // console.log("Minimap Callback");
                            handleMinimapCallback();
                            return;
                        }

                        if (PATHNAME.startsWith("/results/")){
                            // Made by EC for UAC
                            let mapsAnchor = document.querySelector('a[href^="/maps/"]');
                            if (mapsAnchor){
                                fetchOnce(`https://www.geoguessr.com/api/${mapsAnchor.href.replace(/.*(maps.*)/, "$1")}`, 5000)
                                .then((res) => res.json())
                                .then((json)=> {
                                    // TODO EC: Do something here.
                                    if (!/UAC/.test(json.name)){
                                        return;
                                    }

                                    if (!json?.description){
                                        showUACAnswerBtn(null);
                                        return;
                                    }

                                    const answerHref = json.description?.replace(/\[\[(http.*?)\]\]/, "$1");
                                    let t = fetch(answerHref)
                                    .then((res) => res.json())
                                    .then((json) => {
                                        showUACAnswerBtn(JSON.stringify(json));
                                        //unhackableAnswers(JSON.stringify(json));
                                    }).catch(()=>{
                                        showUACAnswerBtn(null);
                                    });
                                })
                                .catch(function(e){ console.warn("FetchOnce called more than once.")});
                            }
                        }
                    }
                }
            }
        })
    })
    observer3.observe(document.body, {childList: true, subtree: true, attributes: false, characterData: false})
}

let fetchOnce = function(){
    // Made by EC
    let obj = {};
    return function(url, timeToWait){
        if (obj[url]) return new Promise((res, rej) =>{ rej(); });
        obj[url] = true;
        return fetch(url);
    }
}();

/**
 * Once the Google Maps API was loaded we can do more stuff
 */

var oldHref = document.location.href;

const immediateLoad = localStorage['unity_immediate_load']; // EC
const _pathName = location.pathname; // EC
if (_pathName.startsWith("/challenge/") || _pathName.startsWith("/game/") || _pathName.startsWith("/results/") || immediateLoad === "true"){
        // EC made this to fix not loading during game.
        injecter(() => {
            launchObserver();
        })
        localStorage['unity_immediate_load'] = false;
}

window.addEventListener('DOMContentLoaded', (event) => {
   if (sat_choice){
       // Added by EC
       const svCanvas = document.body.querySelector(GENERAL_CANVAS);
       if (svCanvas) svCanvas.style.visibility = "hidden";
   }
   if (!document.getElementById("Show Buttons"))
    {
        injecter(() => {
            launchObserver();
        })
    }
});

const base62 = {
    charset: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split(''),
    encode: integer => {
        if (integer === 0) {
            return 0;
        }
        let s = [];
        while (integer > 0) {
            s = [base62.charset[integer % 62], ...s];
            integer = Math.floor(integer / 62);
        }
        return s.join('');
    },
    decode: chars => chars.split('').reverse().reduce((prev, curr, i) =>
                                                      prev + (base62.charset.indexOf(curr) * (62 ** i)), 0)
};


/**
 * Check whether the current page is a game, if so which game mode
 */

function detectGamePage() {
    // console.log("detect game change");
    if (document.querySelector(FAIL_TO_LOAD_CANVAS) !== null && !one_reset)
    {
        one_reset = true;
        console.log("Hide fail to load panorama canvas");
        document.querySelector(FAIL_TO_LOAD_CANVAS).style.visibility = "hidden";
    }
    function loadModule()
    {
        // console.log("load module")
        if (toLoad) {
            // console.log("initializeCanvas")
            initializeCanvas();
        }
        waitLoad();

    }

    let toLoad = !playerLoaded && !YANDEX_INJECTED && !KAKAO_INJECTED && !MAPILLARY_INJECTED && !MS_INJECTED && !MAPBOX_INJECTED && !MAPY_INJECTED;
    const PATHNAME = window.location.pathname;
    // console.log(PATHNAME)
    if (PATHNAME.startsWith("/game/") || PATHNAME.startsWith("/challenge/")) {
        // console.log("Game page");
        isBattleRoyale = false;
        isDuel = false;
        loadModule();
    }
    else if (PATHNAME.startsWith("/battle-royale/")) {
        if (document.querySelector(BR_LAYOUT) == null) {
            // console.log("Battle Royale Lobby");
            rstValues();
        }
        else {
            // console.log("Battle Royale");
            isBattleRoyale = true;
            isDuel = false;
            loadModule();
        }
    }
    else if (PATHNAME.startsWith("/duels/") || PATHNAME.startsWith("/team-duels/")) {
        if (document.querySelector(DUEL_LAYOUT) == null) {
            // console.log("Battle Royale Lobby");
            rstValues();
        }
        else {
            // console.log("Duels");
            isBattleRoyale = true;
            isDuel = true;
            loadModule();
        }
    }
    else if (PATHNAME.startsWith("/bullseye/")) {
        if (document.querySelector(".game_layout__0vAWj") == null) {
            //             console.log("Battle Royale Lobby");
            rstValues();
        }
        else {
            // console.log("bullseye");
            isBattleRoyale = true;
            isBullseye = true;
            // console.log(document.getElementById("player"));
            if (document.getElementById("player") == null)
            {
                loadModule();
            }
        }
    }
    else if (PATHNAME.startsWith("/live-challenge/")) {
        if (document.querySelector(".panorama-question_layout__wSP7g") == null) {
            // console.log("Battle Royale Lobby");
            rstValues();
        }
        else {
            //             console.log("bullseye");
            isLiveChallenge = true;
            isBattleRoyale = true;
            loadModule();
        }
    }
    else {
        rstValues();
        // console.log("Not a Game page");
    }
}

function rstValues()
{
    ROUND = 0;
    YandexPlayer = null;
    KakaoPlayer = null;
    MapillaryPlayer = null;
    MSStreetPlayer = null;
    MapyPlayer = null;

    // MapboxPlayer = null;
    // MapboxMarker = null;

    BAIDU_INJECTED = false;
    YANDEX_INJECTED = false;
    KAKAO_INJECTED = false;
    MAPILLARY_INJECTED = false;
    MS_INJECTED = false;
    MAPBOX_INJECTED = false;
    MAPY_INJECTED = false;

    nextPlayer = "Google";
    nextPlayer_save = "Google";

    global_data = {};
    global_lat = 0;
    global_lng = 0;
    global_bounds = {max : {lat: 50.387397, lng: 57.412767}, min : {lat: 50.181227, lng: 57.077273}};
    global_panoID = null;
    global_cc = null;
    global_BDAh = null;
    global_BDBh = null;
    global_BDID = null;
    yId = null;
    yTime = null;
    yEnd = null;
    iId = null;

    COMPASS = null;
    eventListenerAttached = false;
    povListenerAttached = false;
    playerLoaded = false;
    handleBtwRoundsClear();
    setHidden(true);
    yandex_map = false;
    Kakao_map = false;
    Wikipedia_map = false;
    Minecraft_map = false;
    Youtube_map = false;
    bing_map = false;
    Mapy_map = false;
    mmKey = 0;
    CURRENT_ROUND_DATA = null;
    ms_radius = 15000;

    isDuel = false;
    isBattleRoyale = false;
    isBullseye = false;
    isLiveChallenge = false;

    BR_LOAD_KAKAO = false;
    BR_LOAD_YANDEX = false;
    BR_LOAD_MS = false;
    BR_LOAD_MP = false;
    BR_LOAD_MAPILLARY = false;
    BR_LOAD_MAPY = false;

    ms_sat_map = false;
    rtded = false;

    linksList = [];

    NM = false;
    NP = false;
    NZ = false;
    initBing = false;

    planetType = "None";
    bullseyeMapillary = false;

    GAME_CANVAS = "";
    DUEL_CANVAS = "";
    randomPlanets = false;

    //     let RestrictBoundsBtn = document.getElementById("Restrict Bounds Main");
    //     let RestrictBoundsEnableBtn = document.getElementById("Restrict Bounds Enable");
    //     if (RestrictBoundsBtn && RestrictBoundsEnableBtn)
    //     {
    //         RestrictBoundsBtn.innerHTML = "No Escape Mode Disabled";
    //         RestrictBoundsBtn.enabled = false;
    //         RestrictBoundsEnableBtn.innerHTML = "Enable Limit";
    //     }
}

/**
 * Wait for various players to load
 */

function btnAll()
{
    // console.log([document.querySelector(BULLSEYE_CANVAS), "???"])
    if (document.querySelector(".ticket-bar_root__H8RcX") != null)
    {
        if (document.querySelector(BR_CANVAS) != null)
        {
            AdjustBtnPos("-2em + 2px", "300px", true);
        }
        else if (document.querySelector(DUELS_CANVAS) != null)
        {
            AdjustBtnPos("6em", "0em", true);
        }
        else if (document.querySelector(BULLSEYE_CANVAS) != null)
        {
            AdjustBtnPos("5em", "18.5em", true);
        }
        else if (document.querySelector(LIVE_CANVAS) != null)
        {
            AdjustBtnPos("4em", "0em", true);
        }
        else
        {
            AdjustBtnPos("4em", "0em", true);
        }
    }
    else
    {
        if (document.querySelector(BR_CANVAS) != null)
        {
            AdjustBtnPos("-6em + 2px", "300px", true);
        }
        else if (document.querySelector(DUELS_CANVAS) != null)
        {
            AdjustBtnPos("2em", "0em", true);
        }
        else if (document.querySelector(BULLSEYE_CANVAS) != null)
        {
            AdjustBtnPos("1em", "18.5em", true);
        }
        else if (document.querySelector(LIVE_CANVAS) != null)
        {
            AdjustBtnPos("0em", "0em", true);
        }
        else
        {
            AdjustBtnPos("0em", "0em", true);
        }
    }
    if (menuLocCounter > 0)
    {
        for (let i = 0; i < menuLocCounter; i++) {
            AdjustBtnPos("-2em", "0em", false);
        }
    }
    else if (menuLocCounter < 0)
    {
        for (let i = 0; i < -menuLocCounter; i++) {
            AdjustBtnPos("2em", "0em", false);
        }
    }
}

function waitLoad() {
    //if (!YandexPlayer || !KakaoPlayer || !MapillaryPlayer || !MSStreetPlayer || !MapboxPlayer || !MapyPlayer || !document.getElementById("i_container") || !YANDEX_INJECTED || !KAKAO_INJECTED || !MAPILLARY_INJECTED || !MS_INJECTED || !MAPBOX_INJECTED || !MAPY_INJECTED) {
    if (!YandexPlayer || !KakaoPlayer || !MapillaryPlayer || !MSStreetPlayer || !MapboxPlayer || !MapyPlayer /*|| !document.getElementById("i_container")*/ || !YANDEX_INJECTED || !KAKAO_INJECTED || !MAPILLARY_INJECTED || !MS_INJECTED || !MAPBOX_INJECTED || !MAPY_INJECTED) {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();

        if ((isBullseye || isLiveChallenge) && (document.getElementById("player") == null))
        {
            BAIDU_INJECTED = false;
            YANDEX_INJECTED = false;
            KAKAO_INJECTED = false;
            MAPILLARY_INJECTED = false;
            MS_INJECTED = false;
            MAPBOX_INJECTED = false;
            MAPY_INJECTED = false;
            initializeCanvas();
            // document.querySelector(BULLSEYE_CANVAS).id = "player";
            // injectContainer();
        }
        btnAll();
        // console.log("wait");
        // console.log([!YandexPlayer, !KakaoPlayer,!MapillaryPlayer,!MSStreetPlayer,!MapboxPlayer,!MapyPlayer,!document.getElementById("i_container"),!YANDEX_INJECTED,!KAKAO_INJECTED,!MAPILLARY_INJECTED,!MS_INJECTED,!MAPBOX_INJECTED,!MAPY_INJECTED])
        setTimeout(waitLoad, 250);
    } else {
        checkRound();
    }
}

/**
 * Checks for round changes
 */

function checkRound() {
    //   console.log("Check Round");
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let switchCovergeButton = document.getElementById("switch");
    if (!isBattleRoyale) {
        // console.log("Check Round");
        let currentRound = getRoundFromPage();
        if (ROUND != currentRound) {
            // fire1 = true;
            switchCovergeButton.init = true;
            console.log("New round");
            ROUND = currentRound;
            // NEW_ROUND_LOADED = true;
            COMPASS = null;
            handleBtwRoundsClear();
            getMapData();
            // nextButtonCallback();
        }
    }
    else {
        getMapData();
    }
}

/**
 * Add listeners if buttons have been created
 */

function finalDetail()
{
    let target = document.querySelector("a[data-qa='play-same-map']");
    if (target)
    {
        var div = document.createElement("div");
        div.classList.add("buttons_buttons__0B3SB")
        document.querySelector('.result-layout_content__jAHfP').appendChild(div);
        for (var rd of linksList)
        {
            let str;
            if (rd[1] == "Mapbox Satellite")
            {
                str = "Google Maps";
            }
            else
            {
                str = rd[1];
            }
            // console.log(rd)
            let cl = target.cloneNode( true );
            let tx = "View R" + rd[0] + " in " + str;
            cl.querySelector('.button_label__kpJrA').innerHTML = tx;
            cl.removeAttribute('data-qa');
            cl.removeAttribute('href');
            cl.urlStr = rd[2];
            cl.addEventListener("click", (e) => {
                window.open(cl.urlStr);
            })
            cl.style = "top:10px;right:-10px;";
            div.appendChild(cl);
        }
    }
    else
    {
        setTimeout(finalDetail, 500);
    }
}

function nextButtonCallback()
{
    let nextButton = document.querySelector("button[data-qa='close-round-result']");
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    //     if (nextButton != null && fire1)
    //     {
    //         fire1 = false;
    nextButton.addEventListener("click", (e) => {

        if (ROUND == 5)
        {
            console.log("Game Finished")
            if (linksList)
            {
                finalDetail();
            }
        }
    })
    let urlStr = ""

    if (nextPlayer !== "Google" && nextPlayer !== "Planets")
    {
        // console.log("Clone buttons");
        let clone = document.querySelector("button[data-qa='close-round-result']").cloneNode( true );
        let tx;
        if (nextPlayer == "Mapbox Satellite")
        {
            tx = "View Location in Google Maps";
        }
        else
        {
            tx = "View Location in " + nextPlayer;
        }
        clone.querySelector('.button_label__kpJrA').innerHTML = tx;
        clone.setAttribute('id', "LinkBtn");
        clone.removeAttribute('data-qa');
        if (nextPlayer == "Baidu")
        {
            urlStr = "https://map.baidu.com/?panotype=street&pid=" + global_BDID + "&panoid=" + global_BDID + "&from=api";
        }
        else if (nextPlayer == "Youtube")
        {
            urlStr = "https://www.youtube.com/watch?v=" + yId;
        }
        else if (nextPlayer == "Image")
        {
            urlStr = iId;
        }
        else if (nextPlayer == "Kakao")
        {
            urlStr = "https://map.kakao.com/link/roadview/" + global_lat + "," + global_lng;
        }
        else if (nextPlayer == "Mapillary")
        {
            urlStr = "https://www.mapillary.com/app/?pKey=" + mmKey + "&focus=photo";
        }
        else if (nextPlayer == "Yandex")
        {
            urlStr = "https://yandex.com/maps/?&panorama%5Bdirection%5D=16%2C0&panorama%5Bpoint%5D=" + global_lng + "%2C" + global_lat;
        }
        else if (nextPlayer == "Bing Streetside")
        {
            urlStr = "https://bing.com/maps/default.aspx?cp=" + global_lat + "~" + global_lng + "&lvl=20&style=r";
        }
        else if (nextPlayer == "Mapbox Satellite")
        {
            urlStr = `http://www.google.com/maps/place/${global_lat},${global_lng}`;
        }
        else if (nextPlayer == "Wikipedia")
        {
            urlStr = wikiUrl;
        }
        else if (nextPlayer == "Carte")
        {
            urlStr = carteCity;
        }
        // IMPLEMENT WIKIPEDIA
        clone.addEventListener("click", (e) => {
            window.open(urlStr);
        })
        if (ROUND == 5)
        {
            clone.style = "top:10px;";
        }
        else
        {
            clone.style = "right:-10px;";
        }
        linksList.push([ROUND, nextPlayer, urlStr]);
        document.querySelector('.round-result_actions__5j26U').appendChild(clone);
    }
    //     }
    //     else
    //     {
    //         setTimeout(nextButtonCallback, 1000);
    //     }
}

function guessButtonCallback()
{
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let guessButton = document.querySelector("button[data-qa='perform-guess']");
    let mainMenuBtn = document.getElementById("Show Buttons");
    if (guessButton != null)
    {

        guessButton.addEventListener("click", (e) => {
            if (mainMenuBtn != null)
            {
                console.log("try to hide show buttons")
                mainMenuBtn.style.visibility = "hidden";
                setHidden(true);
            }
        })
    }
    else
    {
        setTimeout(guessButtonCallback, 1000);
    }
}

/**
 * Load different streetview players
 */

function loaderChecker(map_name, map_description)
{
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let substrings = ["Yangle", "Goodex", "Yandex", "Bing Streetside", "Kakao", "Mapbox", "Bing Satellite", "Planets"]
    bullseyeMapillary = ((isBullseye || isLiveChallenge) && !["Mapillary", "A United World", "A Unity World", "Unity Test","Unity Special Edition"].some(v => map_name.includes(v)));
    if (substrings.some(v => map_name.includes(v)) || rtded || bullseyeMapillary)
    {
        MapillaryPlayer = "MA";
        MAPILLARY_INJECTED = true;

        console.log("Not loading Mapillary");
    }
    else
    {
        BR_LOAD_MAPILLARY = true;
        injectMapillaryPlayer();
    }

    const unityNerd = /unity nerd/i.test(map_name);
    const unityNoob = /unity noob/i.test(map_name);

    if (!unityNerd){
        deactivateUnityNerd();
    } else {
        activateUnityNerd();
    }

    if (!unityNoob){
        deactivateUnityNoob();
    } else {
        activateUnityNoob();
    }

    if (map_name.includes("A United World") || map_name.includes("A Unity World") || map_name.includes("Unity Test") || map_name.includes("Unity Special Edition"))
    {
        console.log("Complete Map");
        map_name = "Yandex Bing Streetside Kakao Mapbox Mapy";
    }

    if (map_name.includes("Yandex") || map_name.includes('Goodex') || map_name.includes('Yangle'))
    {
        console.log("Yandex Map or Goodex Map or Yangle Map");
        if (map_name == "Yandex Bing Streetside Kakao Mapbox Mapy")
        {
            yandex_map = false;
        }
        else
        {
            yandex_map = true;
        }

        injectYandexScript().then(() => {
            console.log("Ready to inject Yandex player");
            injectYandexPlayer();
        }).catch((error) => {
            console.log(error);
        });
        BR_LOAD_YANDEX = true;
    }
    else
    {
        // console.log("Not Yandex map");
        YANDEX_INJECTED = true;
        YandexPlayer = "YD";
    }

    if (map_name.includes("Bing Streetside") || map_name.includes("Planets"))
    {
        console.log("Bing Map");
        if (map_name.includes("Planets"))
        {
            let tempRad2;
            tempRad2 = map_name.split("Planets")[1];
            if (/\d/.test(tempRad2))
            {
                ms_radius = parseInt(tempRad2.replace(/\D/g,'')) * 1000;
            }
            bing_map = true;

            for (let pl of spaceList)
            {
                if (map_name.includes(pl))
                {
                    planetType = pl;
                }
            }
            if (planetType == "Solar System")
            {
                randomPlanets = true;
            }
            console.log(planetType)
            //             else if (map_name.includes("GTA V"))
            //             {
            //                 planetType = "GTAV";
            //             }
            //             else if (map_name.includes("GTA San Andreas"))
            //             {
            //                 planetType = "GTASA";
            //             }

        }
        if (map_name == "Yandex Bing Streetside Kakao Mapbox Mapy")
        {
            bing_map = false;
        }
        injectMSPlayer();
        // initBing = true;
        BR_LOAD_MS = true;
    }
    else
    {
        // console.log("Not Bing map");
        MS_INJECTED = true;
        MSStreetPlayer = "MS";
    }


    let canvas = document.getElementById("sat_map");
    if (/🛰️|🛰/.test(map_name) || map_name.includes("Bing Satellite") || map_name.includes("Mapbox") || map_name.includes("Unity Satellite") || (sat_choice && !rtded))
    {
        if (map_name == "Yandex Bing Streetside Kakao Mapbox Mapy")
        {
            ms_sat_map = false;
        }
        else
        {
            ms_sat_map = true;
        }
        let tempRad;
        if (map_name.includes("Bing Satellite"))
        {
            tempRad = map_name.split("Bing Satellite")[1];
        }
        else if (map_name.includes("Mapbox"))
        {
            tempRad = map_name.split("Mapbox")[1];
        }
        else if (map_name.includes("Unity Satellite"))
        {
            tempRad = map_name.split("Unity Satellite")[1];
        }
        else if (/🛰️|🛰/.test(map_name))
        {
            tempRad = map_name.replace(/(🛰️|🛰)(\d+)(🛰️|🛰)/, '$2');
        }

        if (/\d/.test(tempRad))
        {
            ms_radius = parseInt(tempRad.replace(/\D/g,'')) * 1000;
        }
        console.log("Mapbox Satellite Map");
        // console.log(canvas)

        if (!canvas)
        {
            injectMapboxPlayer();
        }
        else
        {
            changeInnerHTML(canvas, false);
            MAPBOX_INJECTED = true;
        }
        initBing = true;
        BR_LOAD_MP = true;
    }
    else
    {
        if (canvas == null)
        {
            MapboxPlayer = "MP";
        }
        MAPBOX_INJECTED = true;
        // console.log("Not Mapbox Satellite map");

    }

    if (map_name.includes("Kakao"))
    {
        console.log("Kakao Map");
        if (map_name == "Yandex Bing Streetside Kakao Mapbox Mapy")
        {
            Kakao_map = false;
        }
        else
        {
            Kakao_map = true;
        }
        injectKakaoScript().then(() => {
            console.log("Ready to inject Kakao player");
        }).catch((error) => {
            console.log(error);
        });
        BR_LOAD_KAKAO = true;
    }
    else{
        KAKAO_INJECTED = true;
        KakaoPlayer = "KK";
        // console.log("Not Kakao map");
    }

    if (map_name.includes("Mapy") || map_name.includes("mapy"))
    {
        console.log("Mapy Map");
        if (map_name == "Yandex Bing Streetside Kakao Mapbox Mapy")
        {
            Mapy_map = false;
        }
        else
        {
            Mapy_map = true;
        }
        injectMapyPlayer();
        BR_LOAD_MAPY = true;
    }
    else{
        MAPY_INJECTED = true;
        MapyPlayer = "MPP";
        // console.log("Not Kakao map");
    }

    if (map_name.includes("Wikipedia"))
    {
        console.log("Wikipedia Map");
        Wikipedia_map = true;

    }
    else{
        // console.log("Not Wikipedia map");
    }

    if (map_name.includes("Minecraft"))
    {
        console.log("Minecraft Map");
        Minecraft_map = true;

    }
    else{
        // console.log("Not Minecraft map");
    }

    if (map_name.includes("Youtube") || map_name.includes("YouTube"))
    {
        console.log("Youtube Map");
        Youtube_map = true;

    }
    else{
        // console.log("Not Minecraft map");
    }

    setHidden(false);

    if (map_name.includes("China Tips for each province"))
    {
        guaranteeUI();
        AdjustBtnPos("0em", "22em", true);
        console.log("AdjustBtnPos");
    }
}

function loadPlayers() {
    let mapBounds;

    playerLoaded = true;
    injectContainer();

    getSeed().then((data) => {
        console.log('get seed', data)
        let map_name = "Default"

        if (typeof data.isRated !== 'undefined')
        {
            rtded = data.isRated;
        }

        if (typeof data.options !== 'undefined')
        {
            if (typeof data.options.isRated !== 'undefined')
            {
                rtded = data.options.isRated;
            }
        }

        if (rtded)
        {
            map_name = "Public Game";
        }
        else
        {
            if (!isBattleRoyale)
            {
                mapBounds = [data.bounds.max.lat, data.bounds.max.lng, data.bounds.min.lat, data.bounds.min.lng];
                map_name = data.mapName;
            }
            else
            {
                if (isBullseye)
                {
                    mapBounds = [data.boundingBox.max.lat, data.boundingBox.max.lng, data.boundingBox.min.lat, data.boundingBox.min.lng];
                    map_name = data.mapName;
                }
                else if (isDuel)
                {
                    mapBounds = [data.mapBounds.max.lat, data.mapBounds.max.lng, data.mapBounds.min.lat, data.mapBounds.min.lng];
                    map_name = data.options.map.name;
                }
                else if (isLiveChallenge)
                {
                    mapBounds = [data.rounds[0].question.panoramaQuestionPayload.mapBounds.max.lat, data.rounds[0].question.panoramaQuestionPayload.mapBounds.max.lng,
                                 data.rounds[0].question.panoramaQuestionPayload.mapBounds.min.lat, data.rounds[0].question.panoramaQuestionPayload.mapBounds.min.lng];
                    map_name = data.rounds[0].question.panoramaQuestionPayload.mapName;
                }
                else
                {
                    map_name = "Unity Test";
                }
            }
        }

        if (mapBounds)
        {
            ms_radius = magic_formula(mapBounds);
            // console.log(ms_radius / 1000)
        }

        loaderChecker(map_name, data)

    }).catch((error) => {
        console.log(error);
    });
}

function guaranteeUI()
{
    // console.log("UI")
    if (document.getElementById("GH-ui") !== null)
    {
        document.getElementById("GH-ui").style.display = "block";
    }
    else
    {
        setTimeout(guaranteeUI, 500);
    }
}

/**
 * Handles Return to start and undo
 */

function handleReturnToStart() {
    let rtsButton = document.querySelector("button[data-qa='return-to-start']");
    // console.log("Handle Return to start");
    rtsButton.addEventListener("click", (e) => {
        if (nextPlayer !== "Baidu")
        {
            goToLocation(true);
        }
        else
        {
            document.getElementById("i_container").src = "https://map.baidu.com/?panotype=street&pid=" + global_BDID + "&panoid=" + global_BDID + "&from=api";
        }
        const elementClicked = e.target;
        elementClicked.setAttribute('listener', 'true');
        console.log("Return to start");
    });
    guessButtonCallback();
    // setTimeout(function () {goToLocation();}, 1000);
}

function handleUndo() {
    let undoButton = document.querySelector("button[data-qa='undo-move']");
    // console.log("Handle undo");
    undoButton.addEventListener("click", (e) => {
        if (locHistory.length > 0) {
            goToUndoMove();
            console.log("Undo Move");
        }
    })
}

/**
 * Load game information
 */

function satCallback()
{
    if (typeof MapboxPlayer.flyTo !== typeof undefined)
    {
        goToLocation(false);
    }
    else
    {
        setTimeout(satCallback, 250);
    }
}

function kakaoCallback()
{
    console.log("Kakao callback")
    if (typeof kakao.maps !== typeof undefined)
    {
        goToLocation(true);
        setTimeout(function () {goToLocation(true);}, 3000);
    }
    else
    {
        setTimeout(kakaoCallback, 250);
    }
}


function modularget(data)
{
    if (data)
    {
        locationCheck(data);
        if (nextPlayer == "Kakao")
        {
            kakaoCallback();
        }
        else
        {
            goToLocation(true);
        }
        // handleMinimapCallback();
        handleButtons();
    }
}

function getMapData() {
    // myHighlight("Seed data");

    getSeed().then((data) => {
        let switchCovergeButton = document.getElementById("switch");
        let mainMenuBtn = document.getElementById("Show Buttons")
        if (isBattleRoyale) {
            if (data.status == "Finished" || typeof data.gameId == typeof undefined) {
                // console.log("Battle Royale Lobby");
            }
            else
            {
                let origin = false;
                if (!CURRENT_ROUND_DATA) {
                    CURRENT_ROUND_DATA = data
                    origin = true;
                }

                if (origin || !(data.currentRoundNumber === CURRENT_ROUND_DATA.currentRoundNumber)) {
                    // myHighlight("Battle Royale New round");
                    switchCovergeButton.init = true;
                    // NEW_ROUND_LOADED = true;
                    COMPASS = null;
                    handleBtwRoundsClear();
                    setHidden(false);
                    if (!origin) {
                        CURRENT_ROUND_DATA = data;
                    }
                    modularget(data);
                }
            }
        }
        else {
            modularget(data);
        }

    }).catch((error) => {
        console.log(error);
    });
}

function handleMinimapCallback()
{
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let MinimapBtn = document.getElementById("Minimap Button");
    if (MinimapBtn)
    {
        let cur = MinimapBtn.current;
        // console.log(cur)
        for (let mapDiv of document.getElementsByClassName("preset-minimap")){
            if (cur == mapDiv.id)
            {
                setTimeout(function () {mapDiv.click();}, 500);
                setTimeout(function () {mapDiv.click();}, 1000);
                setTimeout(function () {mapDiv.click();}, 3000);
            }
        }
    }
    else
    {
        setTimeout(handleMinimapCallback, 1000);
    }
}

/**
 * Hide unnecessary buttons for non-Google coverages
 */

function handleButtons() {
    let CHECKPOINT = document.querySelector("button[data-qa='set-checkpoint']");
    let ZOOM_IN = document.querySelector("button[data-qa='pano-zoom-in']");
    let ZOOM_OUT = document.querySelector("button[data-qa='pano-zoom-out']");
    let UNDO_MOVE = document.querySelector("button[data-qa='undo-move']");
    //let DEFAULT_COMPASS = document.querySelector(".compass");
    let DEFAULT_COMPASS = document.querySelector("[title*='Compass' i]");
    let NEW_COMPASS = document.querySelector(".panorama-compass_compassContainer__MEnh0");
    let RETURN_TO_START = document.querySelector("button[data-qa='return-to-start']");

    let C1 = (CHECKPOINT !== null);
    let C2 = (ZOOM_IN !== null);
    let C3 = (ZOOM_OUT !== null);
    let C4 = (UNDO_MOVE !== null);
    let C5 = (DEFAULT_COMPASS !== null);
    let C6 = (NEW_COMPASS !== null);
    let C7 = (RETURN_TO_START !== null);

    let waitCond = C5 || C6;
    let cpCond = true;
    let comCond = true;
    if (!NM)
    {
        cpCond = C1 && C4 && C7;
    }
    if (!NZ)
    {
        comCond = C2 && C3;
    }

    function moduleButtons(cond)
    {

        if (!NM)
        {
            CHECKPOINT.style.visibility = cond;
            UNDO_MOVE.style.visibility = cond;
        }
        if (!NZ)
        {
            ZOOM_IN.style.visibility = cond;
            ZOOM_OUT.style.visibility = cond;
        }
        if (C5)
        {
            DEFAULT_COMPASS.style.visibility = cond;
        }
        if (C6)
        {
            NEW_COMPASS.style.visibility = cond;
        }
    }

    if (waitCond && cpCond && comCond)
    {
        // console.log("Handle Buttons");
        if (nextPlayer === "Google" || nextPlayer === "Wikipedia" || nextPlayer === "Youtube") {
            moduleButtons("");
        }
        else if (nextPlayer === "Baidu" || nextPlayer === "Image" || nextPlayer === "Mapbox Satellite" || nextPlayer === "Minecraft" || nextPlayer === "Planets" || nextPlayer === "Carte")
        {
            moduleButtons("hidden");
        }
        else if (nextPlayer === "Yandex" || nextPlayer === "Kakao" || nextPlayer === "Mapillary" || nextPlayer === "Bing Streetside" || nextPlayer === "Mapy")
        {
            moduleButtons("hidden");
            if (nextPlayer === "Yandex" || nextPlayer === "Kakao")
            {
                if (C5)
                {
                    DEFAULT_COMPASS.style.visibility = "";
                }
                if (C6)
                {
                    NEW_COMPASS.style.visibility = "";
                }
            }
            if (!NM)
            {
                UNDO_MOVE.style.visibility = "";
                handleUndo();
            }
        }
        if (!NM)
        {
            handleReturnToStart();
        }
    }
    else
    {
        setTimeout(handleButtons, 250);
    }
}

/**
 * Check which player to use for the next location
 */

function locationCheck(data) {
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    console.log(data)
    let curRound = data.rounds[data.rounds.length -1];


    let round;
    let switchCovergeButton = document.getElementById("switch");
    let satelliteSwitchButton = document.getElementById("Satellite Switch");
    // console.log(data)

    if (isBattleRoyale) {
        if (isDuel || isBullseye)
        {
            round = data.rounds[data.currentRoundNumber - 1].panorama;
            global_cc = round.countryCode;
        }
        else if (isLiveChallenge)
        {
            round = data.rounds[data.currentRoundNumber - 1].question.panoramaQuestionPayload.panorama;
            global_cc = round.countryCode;
        }
        else
        {
            round = data.rounds[data.currentRoundNumber - 1];
            global_cc = "us"; // No field available
        }

    }
    else {
        round = data.rounds[data.round - 1];
        global_cc = round.streakLocationCode;
    }

    global_data = data;
    global_lat = round.lat;
    global_lng = round.lng;
    global_panoID = round.panoId;
    global_bounds = data.bounds;

    global_heading = round.heading;
    global_pitch = round.pitch;

    nextPlayer = "Google";
    //
    // Start of Unity Nerd stuff
    //
    unityNerdFn(data);
    //
    // End of Unity Nerd stuff
    //

    function runCheck()
    {
        if (Kakao_map)
        {
            nextPlayer = "Kakao";
        }
        else if (yandex_map)
        {
            nextPlayer = "Yandex";
        }
        else if (Wikipedia_map)
        {
            nextPlayer = "Wikipedia";
        }
        else if (Minecraft_map)
        {
            nextPlayer = "Minecraft";
        }
        else if (Youtube_map)
        {
            nextPlayer = "Youtube";
        }
        else if (bing_map)
        {
            nextPlayer = "Planets";
        }
        else if (Mapy_map)
        {
            nextPlayer = "Mapy";
        }
        else
        {
            nextPlayer = "Google";
        }
    }

    if (global_panoID) {
        let locInfo;
        if (isBullseye)
        {
            locInfo = global_panoID;
        }
        else
        {
            locInfo = hex2a(global_panoID);
        }
        // console.log(locInfo)
        if (locInfo.substring(0, 3) == "YTB")
        {
            nextPlayer = "Youtube";
            let lengths = [3, 11, 4, 4];
            let toPiece = lengths.map((p => i => locInfo.slice(p, p += i))(0));
            let fullID = locInfo.substring(3).split('START');
            yId = toPiece[1];
            yTime = Number(toPiece[2]);
            yEnd = Number(toPiece[3]);
        }
        else
        {
            let mapType = locInfo.substring(0, 5);

            // panoId unchanged

            if (mapType === "YDMAP" ) {
                nextPlayer = "Yandex";
            }
            else if (mapType === "KKMAP" ) {
                nextPlayer = "Kakao";
            }

            // New panoId formats

            else if (mapType === "BAIDU" ) {
                nextPlayer = "Baidu";
                let lengths = [5, 7, 7, 3];
                let toPiece = lengths.map((p => i => locInfo.slice(p, p += i))(0));
                let panoId1 = base62.decode(toPiece[1]).toString().substring(1);
                let panoId2 = base62.decode(toPiece[2]).toString().substring(1);
                global_BDID = panoId1 + panoId2 + toPiece[3]
            }
            else if (mapType === "MAPIL")
            {
                nextPlayer = "Mapillary";
                mmKey = locInfo.substring(5).replace(/\D/g,'');
            }
            else if (mapType === "IMAGE")
            {
                nextPlayer = "Image";
                let lengths = [5, 4, 4, 7, 2];
                let toPiece = lengths.map((p => i => locInfo.slice(p, p += i))(0));
                iId = "https://i.ibb.co/" + toPiece[3] + "/" + toPiece[1] + "." + toPiece[2].replace(/[^0-9a-z]/gi, '')
            }
            else if (mapType.includes("BING")) {
                if (mapType === "BINGM")
                {
                    nextPlayer = "Bing Streetside";
                }
                else
                {
                    nextPlayer = "Planets";
                    let num = mapType.slice(-1).charCodeAt(0) - 65;
                    planetType = spaceList[num];

                    ms_radius = parseInt(locInfo.substring(5).replace(/\D/g,'')) * 1000;
                }
            }
            else if (mapType === "SATEL" ) {
                nextPlayer = "Mapbox Satellite";
                ms_radius = parseInt(locInfo.substring(5).replace(/\D/g,'')) * 1000;
            }
            else if (mapType === "MINEC" ) {
                nextPlayer = "Minecraft";
            }
            else if (mapType === "WIKIP" ) {
                nextPlayer = "Wikipedia";
            }
            else if (mapType === "CARTE")
            {
                nextPlayer = "Carte";
                let cityCode = locInfo.substring(5, 7);
                let panoNum = locInfo.substring(7).replace(/\D/g,'');
                console.log(cityCode);
                carteCity = "http://" + carteDict[cityCode] + ".carte.ma/view/" + carteDict[cityCode] + ".php?sv=" + panoNum;
            }
            else if (mapType === "YOUTU")
            {
                nextPlayer = "Youtube";
            }
            else if (mapType === "MAPYC")
            {
                nextPlayer = "Mapy";
                global_BDID = "";
            }
            else if (mapType === "MAPCZ")
            {
                nextPlayer = "Mapy";
                global_BDID = locInfo.substring(5, 13);
            }
            else
            {
                runCheck();
            }
        }
    }
    else
    {
        runCheck();
    }

    // Disable buttons if NM, NMPZ

    if(!isBattleRoyale)
    {
        NM = data.forbidMoving;
        NP = data.forbidRotating;
        NZ = data.forbidZooming;
    }
    else
    {
        // console.log(data)
        if (isBullseye || isLiveChallenge)
        {
            NM = data.options.movementOptions.forbidMoving;
            NP = data.options.movementOptions.forbidRotating;
            NZ = data.options.movementOptions.forbidZooming;
        }
        else
        {
            NM = data.movementOptions.forbidMoving;
            NP = data.movementOptions.forbidRotating;
            NZ = data.movementOptions.forbidZooming;
            let canvas = document.getElementById("sat_map");
            if (!canvas)
            {
                injectMapboxPlayer();
            }
            else
            {
                changeInnerHTML(canvas, false);
                MAPBOX_INJECTED = true;
            }
            nextPlayer = "Mapbox Satellite";
        }
    }
    if (NM || NP || NZ)
    {
        setDisable("NMPZ");
    }
    else
    {
        setDisable(nextPlayer);
    }

    if (nextPlayer == "Google")
    {
        switchCovergeButton.innerHTML = "Switch to Mapillary";
    }
    else
    {
        switchCovergeButton.innerHTML = "Switch to Google Streetview";
    }
    nextPlayer_save = nextPlayer;


    // console.log("??")
    // console.log(sessionStorage.getItem('Satellite') == "T")
    // console.log(ms_sat_map)
    if (ms_sat_map || (sat_choice && nextPlayer !== "Baidu" && !rtded))
    {
        nextPlayer = "Mapbox Satellite";
    }

    if (nextPlayer == "Mapbox Satellite")
    {
        let di3 = formatDist();
        satelliteSwitchButton.innerHTML = `Satellite (${di3})`;
    }
    else
    {
        satelliteSwitchButton.innerHTML = "Streetview mode";
    }
    console.log(nextPlayer_save + "," + nextPlayer);
    if (!rtded)
    {
        injectCanvas();
    }
    else
    {
        console.log("rated game, no canvas injection");
    }
}


/**
 * setID for canvas
 */

function initializeCanvas() {
    GAME_CANVAS = "";
    DUEL_CANVAS = "";
    //console.log("Is duels");
    //console.log(duels);

    if (isBattleRoyale) {
        if (isDuel) {
            GAME_CANVAS = document.querySelector(DUELS_CANVAS);
            DUEL_CANVAS = document.querySelector(DUELS_CANVAS2);
        }
        else if (isBullseye) {
            GAME_CANVAS = document.querySelector(BULLSEYE_CANVAS);
            DUEL_CANVAS = "dummy";
        }
        else if (isLiveChallenge)
        {
            GAME_CANVAS = document.querySelector(LIVE_CANVAS);
            DUEL_CANVAS = "dummy";
        }
        else
        {
            GAME_CANVAS = document.querySelector(BR_WRAPPER);
            DUEL_CANVAS = "dummy";
        }
    }
    else {
        GAME_CANVAS = document.querySelector(GENERAL_LAYOUT);
        DUEL_CANVAS = "dummy";
    }
    if (GAME_CANVAS && DUEL_CANVAS)
    {
        console.log("Canvas injected");
        GAME_CANVAS.id = "player";

        if (isDuel) {
            DUEL_CANVAS.id = "default_player";
        }

        let mosaicBtn = document.getElementById("Mosaic Enable");
        if (mosaicPre)
        {
            loadGridBtn(mosaicBtn.grid);
        }

        partialCreateMapillary = (typeof mapillary !== typeof undefined)
        partialCreateYandex = (typeof ymaps !== typeof undefined)
        partialCreateKakao = (typeof kakao !== typeof undefined)
        partialCreateMS = (typeof Microsoft !== typeof undefined);
        partialCreateMapbox = (typeof mapboxgl !== typeof undefined);
        partialCreateMapy = (typeof SMap !== typeof undefined);
        loadPlayers();


    }
    else
    {
        setTimeout(initializeCanvas, 250);
    }

}

/**
 * Hide or show players based on where the next location is
 */

function injectCanvas() {
    if (isDuel)
    {
        if (!rtded)
        {
            canvasSwitch();
        }
    }
    else
    {
        Google();
        Baidu();
        if (BR_LOAD_KAKAO)
        {
            Kakao();
        }
        if (BR_LOAD_YANDEX)
        {
            Yandex();
        }
        if (BR_LOAD_MS)
        {
            // console.log("Yes")
            Bing();
        }
        if (BR_LOAD_MP)
        {
            // console.log("Yes")
            Mapbox();
        }
        if (BR_LOAD_MAPILLARY)
        {
            Mapillary();
        }
        if (BR_LOAD_MAPY)
        {
            Mapy();
        }
    }

}

// for duels (class ID change)

function canvasSwitch()
{

    // console.log("canvas switch")
    //     let cond = true;
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let teleportMenu = document.getElementById("Teleport Button");
    let switchCovergeButton = document.getElementById("switch");

    let GOOGLE_MAPS_CANVAS = document.querySelector(DUELS_CANVAS);
    let BAIDU_MAPS_CANVAS = document.getElementById("i_container");
    let KAKAO_MAPS_CANVAS = document.getElementById("roadview");
    let YANDEX_MAPS_CANVAS = document.querySelector(".ymaps-2-1-79-panorama-screen");
    let BING_MAPS_CANVAS = document.getElementById("ms-player");
    let MAPILLARY_MAPS_CANVAS = document.getElementById("mapillary-player");
    let MAPBOX_MAPS_CANVAS = document.getElementById("mapbox-player");
    let MAPY_MAPS_CANVAS = document.getElementById("mapy-player");
    // console.log([GOOGLE_MAPS_CANVAS, BAIDU_MAPS_CANVAS, MAPILLARY_MAPS_CANVAS, BR_LOAD_KAKAO, KAKAO_MAPS_CANVAS, BR_LOAD_MS, BING_MAPS_CANVAS, BR_LOAD_YANDEX, YANDEX_MAPS_CANVAS])

    if (GOOGLE_MAPS_CANVAS && BAIDU_MAPS_CANVAS && (!BR_LOAD_MAPILLARY || MAPILLARY_MAPS_CANVAS) && (!BR_LOAD_KAKAO || KAKAO_MAPS_CANVAS) &&
        (!BR_LOAD_MS || BING_MAPS_CANVAS) && (!BR_LOAD_YANDEX || YANDEX_MAPS_CANVAS) && (!BR_LOAD_MP || MAPBOX_MAPS_CANVAS) && (!BR_LOAD_MAPY || MAPY_MAPS_CANVAS))
    {
        document.getElementById("default_player").style.position = "absolute";
        document.getElementById("default_player").className = "inactive";
        BAIDU_MAPS_CANVAS.style.position = "absolute";
        BAIDU_MAPS_CANVAS.className = "inactive";
        BAIDU_MAPS_CANVAS.visibility = "hidden";

        if (BR_LOAD_MAPILLARY)
        {
            MAPILLARY_MAPS_CANVAS.style.visibility = "hidden";
            MAPILLARY_MAPS_CANVAS.style.position = "absolute";
            MAPILLARY_MAPS_CANVAS.className = "inactive";
        }

        if (BR_LOAD_KAKAO)
        {
            KAKAO_MAPS_CANVAS.style.visibility = "hidden";
            KAKAO_MAPS_CANVAS.style.position = "absolute";
            KAKAO_MAPS_CANVAS.className = "inactive";
        }
        if (BR_LOAD_YANDEX)
        {
            YANDEX_MAPS_CANVAS.style.visibility = "hidden";
            YANDEX_MAPS_CANVAS.style.position = "absolute";
        }
        if (BR_LOAD_MS)
        {
            BING_MAPS_CANVAS.style.visibility = "hidden";
            BING_MAPS_CANVAS.style.position = "absolute";
            BING_MAPS_CANVAS.className = "inactive";
        }

        if (BR_LOAD_MP)
        {
            MAPBOX_MAPS_CANVAS.style.visibility = "hidden";
            MAPBOX_MAPS_CANVAS.style.position = "absolute";
            MAPBOX_MAPS_CANVAS.classList.remove("game-panorama_panorama__rdhFg")
            MAPBOX_MAPS_CANVAS.classList.add("inactive");
        }

        if (BR_LOAD_MAPY)
        {
            MAPY_MAPS_CANVAS.style.visibility = "hidden";
            MAPY_MAPS_CANVAS.style.position = "absolute";
            MAPY_MAPS_CANVAS.className = "inactive";
        }

        teleportMenu.google = false;
        switchCovergeButton.useGoogle = false;

        if (nextPlayer === "Google") {
            document.getElementById("default_player").className = "game-panorama_panoramaCanvas__PNKve";
            if (BR_LOAD_KAKAO)
            {
                //console.log("doing")
                window.dispatchEvent(new Event('resize'));
            }
            document.getElementById("default_player").style.visibility = "";
            teleportMenu.google = true;
            switchCovergeButton.useGoogle = true;
            console.log("Google Duel Canvas loaded");
        }
        else if (nextPlayer === "Baidu" || nextPlayer === "Youtube" || nextPlayer === "Image" || nextPlayer === "Wikipedia" || nextPlayer === "Minecraft" || nextPlayer === "Carte")
        {
            BAIDU_MAPS_CANVAS.style.visibility = "";
            BAIDU_MAPS_CANVAS.className = "game-panorama_panoramaCanvas__PNKve";
            console.log("Container Duel Canvas loaded");
        }
        else if (nextPlayer === "Kakao")
        {
            if (BR_LOAD_KAKAO)
            {
                KAKAO_MAPS_CANVAS.style.visibility = "";
                KAKAO_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
            }
            console.log("Kakao Duel Canvas loaded");
        }
        else if (nextPlayer === "Yandex")
        {
            if (BR_LOAD_YANDEX)
            {
                YANDEX_MAPS_CANVAS.style.visibility = "";
            }
            console.log("Yandex Duel Canvas loaded");
        }
        else if (nextPlayer === "Mapillary")
        {
            if (BR_LOAD_MAPILLARY)
            {
                MAPILLARY_MAPS_CANVAS.style.visibility = "";
                MAPILLARY_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
                MapillaryPlayer.resize();
            }
            //
            console.log("Mapillary Duel Canvas loaded");
        }
        else if (nextPlayer === "Bing Streetside" || nextPlayer === "Planets")
        {
            if (BR_LOAD_MS)
            {
                BING_MAPS_CANVAS.style.visibility = "";
                BING_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
            }
            console.log("MS Duel Canvas loaded");
        }
        else if (nextPlayer === "Mapbox Satellite")
        {
            if (BR_LOAD_MP)
            {
                MAPBOX_MAPS_CANVAS.style.visibility = "";
                MAPBOX_MAPS_CANVAS.classList.remove("inactive");
                MAPBOX_MAPS_CANVAS.classList.add("game-panorama_panorama__rdhFg");
                try
                {
                    MapboxPlayer.resize();
                }
                catch (e)
                {
                    console.error("MapboxPlayer resize failed", e);
                }
            }
            console.log("Mapbox Satellite Duel Canvas loaded");
        }
        else if (nextPlayer === "Mapy")
        {
            if (BR_LOAD_MAPY)
            {
                MAPY_MAPS_CANVAS.style.visibility = "";
                MAPY_MAPS_CANVAS.className = "game-panorama_panorama__rdhFg";
            }
            console.log("Mapy Duel Canvas loaded");
        }
    }
    else
    {
        setTimeout(canvasSwitch(), 1000);
    }
}

// for Battle Royale and classic (change visibility)

function gCanvas()
{
    let GOOGLE_MAPS_CANVAS = ""
    if (isBattleRoyale) {
        if (isBullseye)
        {
            GOOGLE_MAPS_CANVAS = document.querySelector(BULLSEYE_CANVAS2);
        }
        else if (isLiveChallenge)
        {
            GOOGLE_MAPS_CANVAS = document.querySelector(LIVE_CANVAS2);
        }
        else if (isDuel)
        {
            GOOGLE_MAPS_CANVAS = document.getElementById("default_player");
        }
        else
        {
            GOOGLE_MAPS_CANVAS = document.querySelector(BR_CANVAS);
        }
    }
    else {
        GOOGLE_MAPS_CANVAS = document.querySelector(GENERAL_CANVAS);
    }
    return GOOGLE_MAPS_CANVAS;
}

function Google() {
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let teleportMenu = document.getElementById("Teleport Button");
    let switchCovergeButton = document.getElementById("switch");

    let GOOGLE_MAPS_CANVAS = gCanvas();

    if (GOOGLE_MAPS_CANVAS !== null)
    {
        if (nextPlayer === "Google") {
            GOOGLE_MAPS_CANVAS.style.visibility = "";
            teleportMenu.google = true;
            switchCovergeButton.useGoogle = true;
        }
        else {
            GOOGLE_MAPS_CANVAS.style.visibility = "hidden";
            teleportMenu.google = false;
        }
    }
    else
    {
        setTimeout(Google, 250);
    }
}

function Baidu() {
    let BAIDU_MAPS_CANVAS = document.getElementById("i_container");
    let switchCovergeButton = document.getElementById("switch");
    // console.log("Baidu canvas");
    if (BAIDU_MAPS_CANVAS !== null)
    {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        BAIDU_MAPS_CANVAS.style.position = "absolute";
        if (nextPlayer === "Baidu" || nextPlayer === "Youtube" || nextPlayer === "Image" || nextPlayer === "Wikipedia" || nextPlayer === "Minecraft" || nextPlayer === "Carte") {
            BAIDU_MAPS_CANVAS.style.visibility = "";
            switchCovergeButton.useGoogle = false;
            console.log("Container Canvas loaded");
        }
        else {
            BAIDU_MAPS_CANVAS.style.visibility = "hidden";
            // console.log("Container Canvas hidden");
        }
    }
    else
    {
        setTimeout(Baidu, 250);
    }

}

function Kakao() {
    let KAKAO_MAPS_CANVAS = document.getElementById("roadview");
    let switchCovergeButton = document.getElementById("switch");
    // console.log("Kakao canvas");
    if (KAKAO_MAPS_CANVAS != null)
    {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        KAKAO_MAPS_CANVAS.style.position = "absolute";
        if (nextPlayer === "Kakao") {
            KAKAO_MAPS_CANVAS.style.visibility = "";
            switchCovergeButton.useGoogle = false;
            console.log("Kakao Canvas loaded");
        }
        else {
            KAKAO_MAPS_CANVAS.style.visibility = "hidden";
            // console.log("Kakao Canvas hidden");
        }
    }
    else
    {
        setTimeout(Kakao, 250);
    }

}

function Yandex() {
    let YANDEX_MAPS_CANVAS = document.querySelector(".ymaps-2-1-79-panorama-screen");
    let switchCovergeButton = document.getElementById("switch");
    if (YANDEX_MAPS_CANVAS != null)
    {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        if (isBullseye)
        {
            let div = document.getElementById("player");
            YANDEX_MAPS_CANVAS.classList.add("game-panorama_panorama__ncMwh");
            div.prepend(YANDEX_MAPS_CANVAS);
        }
        if (isLiveChallenge)
        {
            let div = document.getElementById("player");
            YANDEX_MAPS_CANVAS.classList.add("game-panorama_panorama__IuPsO");
            div.prepend(YANDEX_MAPS_CANVAS);
        }
        // console.log("Yandex canvas");
        document.querySelector(".ymaps-2-1-79-panorama-screen").style.position = "absolute";
        // console.log("Yandex canvas");
        /*   console.log(YANDEX_MAPS_CANVAS); */
        if (nextPlayer === "Yandex") {
            // Make google street view visible so it doesn't blink.
            gCanvas().style.visibility = "";

            YANDEX_MAPS_CANVAS.style.visibility = "";
            switchCovergeButton.useGoogle = false;
            console.log("Yandex Canvas loaded");
        }
        else {
            YANDEX_MAPS_CANVAS.style.visibility = "hidden";
            console.log("Yandex Canvas hidden");
        }
    }
    else
    {
        setTimeout(Yandex, 250);
    }

}

function Mapillary()
{
    let MAPILLARY_MAPS_CANVAS = document.getElementById("mapillary-player");
    let switchCovergeButton = document.getElementById("switch");
    if (MAPILLARY_MAPS_CANVAS != null)
    {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        // console.log("Mapillary canvas");
        MAPILLARY_MAPS_CANVAS.style.position = "absolute";
        if (nextPlayer === "Mapillary") {
            MAPILLARY_MAPS_CANVAS.style.visibility = "";
            switchCovergeButton.useGoogle = false;
            console.log("Mapillary Canvas loaded");

        }
        else {
            MAPILLARY_MAPS_CANVAS.style.visibility = "hidden";
            // console.log("Mapillary Canvas hidden");
        }
    }
    else
    {
        setTimeout(Mapillary, 250);
    }

}

function Bing() {
    let BING_MAPS_CANVAS = document.getElementById("ms-player");
    let switchCovergeButton = document.getElementById("switch");
    // console.log("stuck")
    if (BING_MAPS_CANVAS != null)
    {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        // console.log("Mapillary canvas");
        BING_MAPS_CANVAS.style.position = "absolute";
        if (nextPlayer === "Bing Streetside" || nextPlayer === "Planets") {
            BING_MAPS_CANVAS.style.visibility = "";
            switchCovergeButton.useGoogle = false;
            console.log("Bing Canvas loaded");
        }
        else {
            BING_MAPS_CANVAS.style.visibility = "hidden";
            console.log("Bing Canvas hidden");
        }
    }
    else
    {
        setTimeout(Bing, 500)
    }
}

function Mapbox()
{
    let MAPBOX_CANVAS = document.querySelector("sat-map");
    //let MAPBOX_CANVAS = document.getElementById("mapbox-player");
    let switchCovergeButton = document.getElementById("switch");
    if (MAPBOX_CANVAS != null)
    {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        // console.log("Mapillary canvas");
        MAPBOX_CANVAS.style.position = "absolute";
        if (nextPlayer === "Mapbox Satellite") {
            MAPBOX_CANVAS.style.visibility = "";
            switchCovergeButton.useGoogle = false;
            console.log("Mapbox Satellite Canvas loaded");

        }
        else {
            MAPBOX_CANVAS.style.visibility = "hidden";
            // console.log("Mapillary Canvas hidden");
        }
    }
    else
    {
        setTimeout(Mapbox, 250);
    }

}

function Mapy() {
    let MAPY_MAPS_CANVAS = document.getElementById("mapy-player");
    let switchCovergeButton = document.getElementById("switch");
    // console.log("Kakao canvas");
    if (MAPY_MAPS_CANVAS != null)
    {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        MAPY_MAPS_CANVAS.style.position = "absolute";
        if (nextPlayer === "Mapy") {
            MAPY_MAPS_CANVAS.style.visibility = "";
            switchCovergeButton.useGoogle = false;
            console.log("Mapy Canvas loaded");
        }
        else {
            MAPY_MAPS_CANVAS.style.visibility = "hidden";
            // console.log("Kakao Canvas hidden");
        }
    }
    else
    {
        setTimeout(Mapy, 250);
    }

}


/**
 * Adjust button placement
 */

function ZoomControls() {
    let style = `
	.ymaps-2-1-79-panorama-gotoymaps {display: none !important;}
	.ymaps-2-1-79-panorama-control__zoom {top: 2rem !important; left: 2rem !important; z-Index: 0}
    .mapillary-bearing-indicator-container {top: 2rem !important; left: 2rem !important;}
    .mapillary-zoom-container {top: 6rem !important; left: 2.20rem !important;}
    .NavBar_MapTypeButtonContainerWrapper {visibility: hidden !important;}
    .bm_LocateMeControl {visibility: hidden !important;}
    .NavBar_Container {top: -6rem !important; left: 2rem !important;}
    .streetsideToolPanel {top: 4rem !important; left: 2rem !important;}
    .NavBarButton_Container {visibility: hidden !important;}
    .mapboxgl-ctrl-top-left {z-Index: 999}
	`;

    //         let nav = document.querySelector('.NavBar_MapTypeButtonContainerWrapper');
    //     let locate = document.getElementById("LocateMeButton");
    //     let navAll = document.getElementById("MicrosoftNav");
    //     if (nav)
    //     {
    //         nav.style.visibility = "hidden";
    //     }
    //     if (locate)
    //     {
    //         locate.style.visibility = "hidden";
    //     }
    //     if (navAll)
    //     {
    //         navAll.style.top = "15em"
    //     }

    let style_element = document.createElement("style");
    style_element.innerHTML = style;
    document.body.appendChild(style_element);
    // document.getElementById("mapillary-bearing-indicator-container").style.top = "20em"
}

/**
 * Updates the compass to match Yandex Panorama facing
 */
function updateCompass() {
    let direction = YandexPlayer.getDirection()[0] * -1;
    if (!COMPASS) {
        //let compass = document.querySelector("img.compass__indicator");
        let compass = document.querySelector('[alt="compass" i]'); // EC made this
        if (compass != null) {
            COMPASS = compass;
    //        let direction = YandexPlayer.getDirection()[0] * -1;
           // COMPASS.setAttribute("style", `transform: rotate(${direction}deg);`);
            COMPASS.style.transform = `rotate(${direction}deg)`;
            return;
        }
        setTimeout(function(){
            addCustomYandexCompass();
            updateCompass();
        }, 2000);
    }
    else {
     //   let direction = YandexPlayer.getDirection()[0] * -1;
       // COMPASS.setAttribute("style", `transform: rotate(${direction}deg);`);
        COMPASS.style.transform = `rotate(${direction}deg)`;
    }
}

function addCustomYandexCompass(){
    if (COMPASS || document.querySelector('[alt="compass" i]')){
        return;
    }

    let arrow = document.createElement('img');
    arrow.src = 'https://www.geoguessr.com/_next/static/media/compass.f79e0d30.svg';
    arrow.style.cssText = "position: absolute; bottom: 22%; left: 3%; height: 3rem; width: 0.75rem;";
    arrow.setAttribute('alt', "Compass");
    arrow.title = "Custom Yandex compass.";

    let arrowBackground = document.createElement('img');
    arrowBackground.src = "https://cdn.discordapp.com/attachments/1087972736485298276/1206196948965793882/Base2.png?ex=65db2172&is=65c8ac72&hm=9b05e064ed56c17b5d5c56ecaf8f41c91a72b711d6125e544339bc4b4290e728&";
    arrowBackground.style.cssText = "position: absolute; bottom: 22%; left: 3%; width: calc(0.75rem * 5); translate: calc(-0.75rem *2) calc(0.4rem);";

    let ymaps = document.querySelector('ymaps');

    ymaps.parentElement.appendChild(arrowBackground)
    ymaps.parentElement.appendChild(arrow)
}
/**
 * Open next location in streetview player given next player and next coordinate
 */

function wiki(cc, iframe, teleportMenu)
{
    let url = `https://${cc}.wikipedia.org/w/api.php`;
    let widthRight = 325;
    //     console.log(cc);
    //     if (cc == "fr")
    //     {
    //         widthRight = 1200;
    //     }

    let params = {
        action: "query",
        list: "geosearch",
        gscoord: `${global_lat}|${global_lng}`,
        gsradius: "10000",
        gslimit: "1",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    let GOOGLE_MAPS_CANVAS = gCanvas();

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {
        // console.log(response)
        var pages = response.query.geosearch;
        if (pages.length !== 0)
        {
            GOOGLE_MAPS_CANVAS.style.visibility = "hidden";
            let pageId = pages[0].pageid;
            iframe.src = `https://${cc}.wikipedia.org/?curid=${pageId}`;
            wikiUrl = `https://${cc}.wikipedia.org/?curid=${pageId}`;
            iframe.style.visibility = "";
            iframe.style.right = `-${widthRight}px`;
            iframe.style.width = (window.innerWidth + widthRight) + 'px';

            // console.log(iframe.style.width);
            // iframe.style.visibility = "";
        }
        else
        {
            GOOGLE_MAPS_CANVAS.style.visibility = "";
            teleportMenu.google = true;
            iframe.style.right = '0px';
            iframe.style.width = window.innerWidth + 'px';
        }
    }).catch(function(error){console.log(error);});
}

function handleSpecialColor()
{
    document.getElementById("Circus Sky").style.background = skySpecial ? "#ff1493" : "#ff69b4";
    document.getElementById("Circus Soil").style.background = soilSpecial ? "#ff1493" : "#ff69b4";
    document.getElementById("Circus Skewed").style.background = skewedSpecial ? "#ff1493" : "#ff69b4";
    document.getElementById("Circus Zoom").style.background = zoomSpecial ? "#ff1493" : "#ff69b4";
    document.getElementById("Circus Random").style.background = randomSpecial ? "#ff1493" : "#ff69b4";
    document.getElementById("Circus NMPZ").style.background = nmpzSpecial ? "#ff1493" : "#ff69b4";
}

let yandexIntervalFailedToLoadMessage = null;
let __t = 0;

async function goToLocation(cond) {
    let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    console.log("Going to location");
    console.log(nextPlayer);

//    if (nextPlayer === "Yandex" && !document.querySelector("ymaps")){
//        // Hack by EC to fix yandex not showing when starting a new game.
//        location.reload();
//    }

    let mosaicBtn = document.getElementById("Mosaic Enable");
    if (mosaicPre)
    {
        if (mosaicPre && mosaicBtn.grid == 0)
        {
            mosaicBtn.grid = 5;
            document.getElementById("Mosaic Menu").click();
        }
        else if (mosaicBtn.grid !== 0)
        {
            document.getElementById("Mosaic Menu").click();
        }
        loadGridBtn(mosaicBtn.grid);
    }

    if (restrictMovement)
    {
        //         if (teleportMenu.style.visibility == "hidden")
        //         {
        //             document.getElementById("Teleport Menu").click();
        //         }
        RestrictBoundsEnableBtn.innerHTML = "Disable Limit";
        if (RestrictBoundsBtn.innerHTML == "No Escape Mode Disabled")
        {
            RestrictBoundsBtn.innerHTML = "No Escape Mode Enabled";
        }
    }

    if (skySpecial || soilSpecial || skewedSpecial || zoomSpecial || randomSpecial || nmpzSpecial)
    {
        if (nmpzSpecial && !document.getElementById("specialNMPZ"))
        {
            loadNMPZ();
        }
        handleSpecialColor();
    }

    let OverlayBtn = document.getElementById("Overlay Button");
    if (nextPlayer !== "Planets" && (spaceList.some(className => OverlayBtn.current.includes(className))))
    {
        document.getElementById("Earth").click();
    }

    if (nextPlayer === "Yandex") {
        // Everything between these curly braces is just stupid.

        const _ymaps = document.querySelector("ymaps");
console.log("yandex 1")
        if (!document.querySelector("ymaps")){
            // Hack by EC to fix yandex not showing when starting a new game.
            location.reload();
            return;
        }

        clearInterval(yandexIntervalFailedToLoadMessage);
        __t = 100;// For a wierd bug.

        const map_name = global_data.mapName;
        let panosAtThisLocation = null;

        if (map_name.includes('Goodex') || map_name.includes('Yangle')){
            // Apparently if the panoid is not length 22 then it isn't official?
            console.log('includes goodex')
            let pano = GooglePlayer.getPano();

            // TODO EC: check if global_data pano is same as GooglePlayer.getPano().
            pano = !checkFailedToLoadRoundMsg() ? pano : "Failed Pano message";


            let unofficial = pano? pano.length !== 22 : true;
            panosAtThisLocation = await ymaps.panorama.locate([global_lat, global_lng]).then(ret => ret);

            if (!unofficial || panosAtThisLocation.length == 0){

                if (panosAtThisLocation.length === 0){
                    console.log("No yandex panos, panos == 0")
                    //let spacey = document.getElementById('SpOver Button');
                    let unityAlert = document.querySelector('.unity_alert');
                    let _unityAlert = unityAlert.innerHTML;
                    unityAlert.innerHTML = "Couldn't find any panoramas for Yandex here!";
                    unityAlert.style.visibility = 'visible';
                    setTimeout(()=> {
                        unityAlert.style.visibility = 'hidden';
                        unityAlert.innerHTML = _unityAlert;
                    }, 5000);
                }

                 console.log("official coverage or no yandex, resorting back to google sv - ", pano, pano?.length)
                const GOOGLE_MAPS_CANVAS = gCanvas();
                GOOGLE_MAPS_CANVAS.style.visibility = "visible";

                _ymaps.style.display = "none";

                return;
            }
        }

       console.log("here is yandex")

        const showYmapsTimer = setTimeout(function(){
            const pano = GooglePlayer.getPano();
            let unofficial = pano? pano.length !== 22 : true;
            let failedToLoadRoundMsg = checkFailedToLoadRoundMsg();
            console.log("showYmapsTimer: Checking if official coverage or failed round before hidding ymaps")
            console.log("showYmapsTimer:", unofficial, failedToLoadRoundMsg, panosAtThisLocation?.length);
            if (!failedToLoadRoundMsg && !unofficial && panosAtThisLocation?.length) return;
            console.log("show maps timer hidden")

            _ymaps.style.display = "";
            // Hide google streetview that was un-hidden so it wouldn't blink,
            // but now can be hidden again.
            gCanvas().style.visibility = "hidden";

        }, 750);

        let options = {};
        YandexPlayer.moveTo([global_lat, global_lng], options);
        //YandexPlayer.setDirection([0, 16]);
        //YandexPlayer.setDirection([-55, 0]); // Hopefully points down the road.
        YandexPlayer.setDirection("auto"); // Hopefully points down the road.
       // YandexPlayer.setSpan([10, 67]);
        YandexPlayer.setSpan([-10, 67]);
        console.log("yandex moveto location", [global_lat, global_lng])

        __t = 0;
        clearInterval(yandexIntervalFailedToLoadMessage); // Double make sure it's cleared
        yandexIntervalFailedToLoadMessage = setInterval(async function(){
            console.log("yandex interval", __t)
            if (__t++ > 50) {
                clearInterval(yandexIntervalFailedToLoadMessage);
                return;
            }

            let failedToLoadRoundMsg = checkFailedToLoadRoundMsg();
            if(failedToLoadRoundMsg){
                clearInterval(yandexIntervalFailedToLoadMessage);

                let panosAtThisLocation = await ymaps.panorama.locate([global_lat, global_lng]).then(ret => ret);
                if (panosAtThisLocation.length == 0){
                    let spacey = document.getElementById('SpOver Button');
                    let _spacey = spacey.innerHTML;
                    spacey.innerHTML = "Couldn't find any panoramas for Yandex here spacey!";
                    spacey.style.visibility = 'visible';
                    setTimeout(()=> {
                        spacey.style.visibility = 'hidden';
                        spacey.innerHTML = _spacey;
                    }, 5000);

                    clearTimeout(showYmapsTimer);

                    _ymaps.style.display = "none";

                    return;
                }

                failedToLoadRoundMsg.style.display = 'none';
                console.log("failed to load display none");
                makeGuessMapHack({
                    markerIcon: {
                        // Path is just a filler for a 0 opacity marker.
                        path: "M49.07 0c.524.405.262.88.095 1.333l-6.643 18.095-8.047 22.12a4.21 4.21 0 0 0-.262 1.429v19.81c0 1.2-.024 1.2-1.214 1.2-1.238 0-2.476-.048-3.714.024-.786.024-1.07-.238-1.048-1.024l.024-7.333V42.928c0-.5-.07-1.048-.262-1.524L14.976 7.333c-.095-.262-.238-.476-.357-.714v-.5c.38-.12.762-.3 1.143-.3l4.12-.024s1.357 0 1.81 1.286l9.7 27.31.405.976.333-1.095 1.905-6.976 8.5-26.31c.12-.333.405-.62.62-.93L49.07 0z",
                        fillColor: "#e52620",
                        scale: 0.5,
                        fillOpacity: 1,
                        strokeColor: "#e52620",
                        strokeOpacity: 1,
                        anchor: new google.maps.Point(31, 64),
                    },
                    guessBtnText:"Yandex Guess Button",
                    mapContainer: document.querySelector('ymaps'),
                    locationUrl: "https://yandex.com/maps/?&panorama%5Bdirection%5D=16%2C0&panorama%5Bpoint%5D=" + global_lng + "%2C" + global_lat
                });
            }
        }, 500);
    }
    else if (nextPlayer === "Baidu" || nextPlayer === "Youtube" || nextPlayer === "Image" || nextPlayer === "Wikipedia" || nextPlayer === "Minecraft" || nextPlayer === "Carte") {
        if (document.getElementById("i_container") !== null)
        {
            let iframe = document.getElementById("i_container");

            if (nextPlayer === "Baidu")
            {
                if (!isFirefox)
                {
                    iframe.style.top = '-60px';
                    iframe.style.height = (window.innerHeight + 200) + 'px';
                }
                else
                {
                    iframe.style.top = '-60px';
                    iframe.style.height = (window.innerHeight + 219) + 'px';
                }

                if (!isFirefox)
                {
                    iframe.style.right = '-55px';
                    iframe.style.width = (window.innerWidth + 55) + 'px';
                }
                else
                {
                    iframe.style.right = '-15px';
                    iframe.style.width = (window.innerWidth + 15) + 'px';
                }

                let urlStr2 = "https://map.baidu.com/?panotype=street&pid=" + global_BDID + "&panoid=" + global_BDID + "&from=api";
                let urlStr = "https://map.baidu.com/@" + global_BDAh + "," + global_BDBh + "#panoid=" + global_BDID + "&panotype=street&l=12&tn=B_NORMAL_MAP&sc=0&newmap=1&shareurl=1&pid=" + global_BDID;

                // Hack to change status bar z index
                const statusBar = document.querySelector(`[class*="game_status"]`);
                statusBar.style.zIndex = 3;

                makeGuessMapHack({
                    guessBtnText:"Baidu Guess Button",
                    mapContainer: document.getElementById("i_container"),
                    locationUrl: urlStr2,
                });

                // console.log(urlStr)
                if (global_BDAh != null)
                {
                    iframe.src = urlStr;
                }
                else
                {
                    iframe.src = urlStr2;
                }
                iframe.style.visibility = "";
            }
            else if (nextPlayer === "Youtube")
            {
                iframe.src = "";
                if (!document.getElementById("mapbox-player"))
                {
                    switchCovergeButton.style.visibility = "";
                }
                for (let yBtn of document.getElementsByClassName("youtube-btn")){
                    yBtn.style.visibility = "";
                    if (yBtn.id === "Youtube Button")
                    {
                        yBtn.innerHTML = "Check YouTube";
                    }
                }
                iframe.allow = "autoplay";
                iframe.style.visibility = "hidden";
                iframe.style.top = '-250px';
                iframe.style.bottom = '250px';
                iframe.style.height = (window.innerHeight + 500) + 'px';
                iframe.style.right = '0px';
                iframe.style.width = window.innerWidth + 'px';
            }
            else if (nextPlayer === "Image")
            {
                iframe.style.top = '0px';
                iframe.style.height = (window.innerHeight) + 'px';
                iframe.style.right = '0px';
                iframe.style.width = window.innerWidth + 'px';
                iframe.style.visibility = "";
                iframe.src = iId;
            }
            else if (nextPlayer === "Wikipedia")
            {
                if (!document.getElementById("mapbox-player"))
                {
                    switchCovergeButton.style.visibility = "";
                }
                let wikiLocalLang = document.getElementById("local language")
                wikiLocalLang.style.visibility = "";
                iframe.style.top = '0px';
                iframe.style.height = (window.innerHeight) + 'px';
                let fi = "en";
                if (!wikiLocalLang.state && global_cc)
                {
                    let cc = langDict[global_cc];
                    if (typeof cc !== typeof undefined)
                    {
                        fi = cc[Math.floor(Math.random() * cc.length)];
                    }
                }
                wiki(fi, iframe, teleportMenu);
            }
            else if (nextPlayer === "Minecraft")
            {
                iframe.style.top = '0px';
                iframe.style.height = (window.innerHeight) + 'px';
                iframe.style.right = '0px';
                iframe.style.width = window.innerWidth + 'px';
                iframe.style.visibility = "";
                iframe.src = "https://classic.minecraft.net/?size=huge";
            }
            else if (nextPlayer === "Carte")
            {
                iframe.style.bottom = '190px';
                if ((1.14 * window.innerHeight) >= window.innerWidth)
                {
                    iframe.style.top = '-100px';
                    iframe.style.height = (window.innerHeight + 290) + 'px';
                }
                else
                {
                    iframe.style.top = '-60px';
                    iframe.style.height = (window.innerHeight + 250) + 'px';
                }
                iframe.style.left = '-20px';
                iframe.style.right = '20px';
                iframe.style.width = (window.innerWidth + 40) + 'px';
                iframe.style.visibility = "";
                iframe.src = corsString + carteCity;
            }
        }

        else
        {
            setTimeout(goToLocation(true), 250);
        }
        //         let a = new BMap.Point(global_lng, global_lat);
        //         BaiduPlayer.setPov({ heading: -40, pitch: 6 });
        //         BaiduPlayer.setPosition(a);
    }
    else if (nextPlayer === "Kakao") {
        var roadviewClient = new kakao.maps.RoadviewClient();
        var position = new kakao.maps.LatLng(global_lat, global_lng);
        roadviewClient.getNearestPanoId(position, 500, function (panoId) {
            KakaoPlayer.setPanoId(panoId, position);
            KakaoPlayer.setViewpoint({ pan: global_heading, tilt: global_pitch, zoom: -3 })
        });
    }
    else if (nextPlayer === "Mapillary") {
        MapillaryPlayer.resize()
        MapillaryPlayer.moveTo(mmKey).then(
            image => { //console.log(image);
            },
            error => { console.log(error); });
    }
    else if (nextPlayer === "Google" && !rtded) {
        if (!bullseyeMapillary)
        {
            handleMapillary({lat: global_lat, lng: global_lng}, {meters: 500, limit: 500});
        }
    }
    else if (nextPlayer === "Bing Streetside") {
        let mTId = MSStreetPlayer.getMapTypeId();
        if (mTId !== Microsoft.Maps.MapTypeId.streetside && mTId !== Microsoft.Maps.MapTypeId.road)
        {
            console.log("Reset Bing map type to Streetside")
            MSStreetPlayer = new Microsoft.Maps.Map(document.getElementById('ms-player'),{disableStreetsideAutoCoverage: true, allowHidingLabelsOfRoad: true});
        }
        MSStreetPlayer.setOptions({disableStreetside: false});
        MSStreetPlayer.setView({mapTypeId: Microsoft.Maps.MapTypeId.streetside,
                                zoom: 18,
                                streetsideOptions: {
                                    overviewMapMode: Microsoft.Maps.OverviewMapMode.hidden,
                                    showCurrentAddress: false,
                                    showProblemReporting: false,
                                    showExitButton: false,
                                },
                                center: new Microsoft.Maps.Location(global_lat, global_lng),
                                heading: 90,
                                pitch: -30});
    }
    else if (nextPlayer === "Planets") {
        // console.log("Bing Satellite Player")

        if (randomPlanets)
        {
            let tempSL = spaceList.slice(0, -1);
            planetType = tempSL[Math.floor(Math.random() * tempSL.length)];
            setMapstylePlanet(planetType);
        }

        let mTId = MSStreetPlayer.getMapTypeId();
        if (mTId !== Microsoft.Maps.MapTypeId.aerial && mTId !== Microsoft.Maps.MapTypeId.road)
        {
            console.log("Reset Bing map type to Satellite")
            MSStreetPlayer = new Microsoft.Maps.Map(document.getElementById('ms-player'),{disableStreetsideAutoCoverage: true, allowHidingLabelsOfRoad: true});
        }
        // MSStreetPlayer = new Microsoft.Maps.Map(document.getElementById('ms-player'),{disableStreetsideAutoCoverage: true, allowHidingLabelsOfRoad: true});
        let ctr = new Microsoft.Maps.Location(global_lat, global_lng)
        let loc_centre = {lat: global_lat, lng: global_lng};
        for (var i = MSStreetPlayer.entities.getLength() - 1; i >= 0; i--) {
            var pushpin = MSStreetPlayer.entities.get(i);
            if (pushpin instanceof Microsoft.Maps.Pushpin) {
                MSStreetPlayer.entities.removeAt(i);
            }
        }
        // console.log("Satellite radius: " + (ms_radius / 1000).toString() + "km");

        let maxZoomNum = 20;
        if (planetType == "Mars")
        {
            maxZoomNum = 5;
        }
        else if (planetType == "Moon")
        {
            maxZoomNum = 6;
        }

        if (ms_radius < 1500000)
        {
            ms_radius = 1500000;
        }

        if (ms_radius > 6000000)
        {
            ms_radius = 6000000;
        }

        // console.log(ms_radius);

        let latlngBounds = getBBox2(loc_centre, ms_radius);
        // console.log(latlngBounds)
        let bounds = Microsoft.Maps.LocationRect.fromLocations(new Microsoft.Maps.Location(latlngBounds[0], latlngBounds[1]), new Microsoft.Maps.Location(latlngBounds[2], latlngBounds[3]));
        MSStreetPlayer.setOptions({maxBounds: bounds, maxZoom: maxZoomNum})

        MSStreetPlayer.setOptions({disableStreetside: true});
        MSStreetPlayer.setView({mapTypeId: Microsoft.Maps.MapTypeId.mercator,
                                labelOverlay: Microsoft.Maps.LabelOverlay.hidden,
                                center: ctr,
                                zoom: 1,
                               })
        var weatherTileSource = new Microsoft.Maps.TileSource({
            uriConstructor: getTMSTilePath
        });
        var weatherTileLayer = new Microsoft.Maps.TileLayer({
            mercator: weatherTileSource,
        });
        if (planetType == "Moon")
        {
            document.getElementById("Moon (Labels)").click();
        }
        else if (planetType == "Mars")
        {
            document.getElementById("Mars (Labels)").click();
        }
        else
        {
            // console.log(planetType);
            // console.log(document.getElementById(planetType));
            document.getElementById(planetType).click();
        }
        MSStreetPlayer.layers.insert(weatherTileLayer);

        var pin = new Microsoft.Maps.Pushpin(ctr, {});
        MSStreetPlayer.entities.push(pin);

        // FixLink(); // DOM BASED SOLUTION
    }
    else if (nextPlayer === "Mapbox Satellite") {
        // MapboxPlayer.resize();
        let satelliteStyleBtn = document.getElementById("Satellite Style Button");
        let satelliteTypeBtn = document.getElementById("Satellite Type Button");
        function waitSky()
        {
            try
            {
                let l = [];
                for (let element of MapboxPlayer.getStyle().layers)
                {
                    l.push(element.id);
                }
                if (l.includes('sky'))
                {
                    styleMapboxAll("All", true);
                }
                else
                {
                    setTimeout(waitSky, 250);
                }
            }
            catch(error)
            {
                console.log(error)
                setTimeout(waitSky, 250);
            }
        }
        waitSky();
    }
    else if (nextPlayer === "Mapy")
    {
        if (global_BDID)
        {
            SMap.Pano.get(parseInt(global_BDID)).then(function(place) {
                // console.log(place)
                MapyPlayer.show(place);
            }, function() {
                alert("Panorama se nepodařilo zobrazit !");
            });
        }
        else
        {
            let mpcz = SMap.Coords.fromWGS84(global_lng, global_lat);
            // zobrazime panorama dle ID
            SMap.Pano.getBest(mpcz, 200).then(function(place) {
                MapyPlayer.show(place);
            }, function() {
                alert("Panorama se nepodařilo zobrazit !");
            });
        }
    }
    if (nextPlayer === "Google" && fire1)
    {
        window.dispatchEvent(new Event('resize'));
        if (rtded)
        {
            document.getElementById("Clear").click();
        }
        fire1 = false;
    }

    if (cond)
    {
        switchCovergeButton.lat = global_lat;
        switchCovergeButton.lng = global_lng;
        RestrictBoundsBtn.lat = global_lat;
        RestrictBoundsBtn.lng = global_lng;
    }

}

function checkFailedToLoadRoundMsg(){
    return document.body.querySelector(`[class*="game_panoramaMessage"]`);
}

/**
 * Handle undo using the location history of the current round
 */

function goToUndoMove(data) {
    /*   console.log(global_lat);
      console.log(global_lng); */
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let teleportMenu = document.getElementById("Teleport Button");
    let switchCovergeButton = document.getElementById("switch");
    let options = {};
    let prevStep = null;
    if (locHistory.length === 1) {
        prevStep = locHistory[0];
    }
    else {
        prevStep = locHistory.pop();
    }
    // console.log(prevStep);
    // console.log(locHistory)
    if (nextPlayer === "Yandex") {
        defaultPanoIdChange = false;
        YandexPlayer.moveTo([prevStep[0], prevStep[1]], options);
        YandexPlayer.setDirection([prevStep[2], prevStep[3]]);
        YandexPlayer.setSpan([10, 67]);
        switchCovergeButton.lat = prevStep[0];
        switchCovergeButton.lng = prevStep[1];
    }
    else if (nextPlayer === "Kakao") {
        let btn = document.querySelector("button[data-qa='undo-move']");
        btn.disabled = false;
        btn.classList.remove('styles_disabled__2YdHD');
        defaultPanoIdChange = false;
        let position = new kakao.maps.LatLng(prevStep[0], prevStep[1]);
        KakaoPlayer.setPanoId(prevStep[2], position);
        switchCovergeButton.lat = prevStep[0];
        switchCovergeButton.lng = prevStep[1];
        switchCovergeButton.useGoogle = false;
        teleportMenu.google = false;
        // console.log("Undo 1 step");
        // console.log(locHistory);
    }
    else if (nextPlayer === "Mapillary" ) {
        // console.log(prevStep[1]);

        MapillaryPlayer.moveTo(prevStep[2]).then(
            image => {
                //console.log(image);
                switchCovergeButton.lat = prevStep[1];
                switchCovergeButton.lng = prevStep[0];
            },
            error => { console.log(error); });
    }
    else if (nextPlayer === "Bing Streetside") {
        defaultPanoIdChange = false;
        // console.log(locHistory);
        MSStreetPlayer.setView({center: new Microsoft.Maps.Location(prevStep[0], prevStep[1]),});
        switchCovergeButton.lat = prevStep[0];
        switchCovergeButton.lng = prevStep[1];
        switchCovergeButton.heading = prevStep[2];
    }
    else if (nextPlayer === "Mapy") {
        defaultPanoIdChange = false;
        let mapyCords = SMap.Coords.fromWGS84(prevStep[1], prevStep[0]);
        SMap.Pano.getBest(mapyCords, 200).then(function(place) {
            MapyPlayer.show(place,{
                yaw: DegreesToRadians(prevStep[2]),
            });
        }, function() {
            alert("Panorama se nepodařilo zobrazit !");
        });
        // console.log(locHistory);
        switchCovergeButton.lat = prevStep[0];
        switchCovergeButton.lng = prevStep[1];
        switchCovergeButton.heading = prevStep[2];
    }

}

function handleTeleport()
{
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let teleportMenu = document.getElementById("Teleport Button");
    let switchCovergeButton = document.getElementById("switch");
    if (teleportMenu)
    {
        function tpt(direction)
        {
            if (!teleportMenu.google)
            {
                // console.log("non-Google Teleport");
                function forwardReverse(heading)
                {
                    if (direction)
                    {
                        return heading;
                    }
                    else
                    {
                        return (heading + 180) % 360;
                    }
                }

                let prevStep = null;
                if (locHistory.length === 1) {
                    prevStep = locHistory[0];
                }
                else {
                    prevStep = locHistory[locHistory.length - 1];
                }
                // console.log(locHistory);

                let options = {};
                let place, position, pID;
                if (nextPlayer === "Yandex") {

                    place = FindPointAtDistanceFrom(prevStep[0], prevStep[1], DegreesToRadians(forwardReverse(prevStep[2])), teleportMenu.distance * 0.001);
                    YandexPlayer.setDirection([prevStep[2], prevStep[3]]);
                    YandexPlayer.moveTo([place.lat, place.lng], options);
                    YandexPlayer.setSpan([10, 67]);
                    switchCovergeButton.lat = place.lat;
                    switchCovergeButton.lng = place.lng;
                }
                else if (nextPlayer === "Kakao") {
                    var roadviewClient = new kakao.maps.RoadviewClient();
                    place = FindPointAtDistanceFrom(prevStep[0], prevStep[1], DegreesToRadians(forwardReverse(prevStep[3])), teleportMenu.distance * 0.001);
                    position = new kakao.maps.LatLng(place.lat, place.lng);
                    roadviewClient.getNearestPanoId(position, 500, function (panoId) {
                        KakaoPlayer.setPanoId(panoId, position);
                    });
                    switchCovergeButton.lat = place.lat;
                    switchCovergeButton.lng = place.lng;
                }
                else if (nextPlayer === "Mapillary" || nextPlayer === "Google") {
                    place = FindPointAtDistanceFrom(prevStep[0], prevStep[1], DegreesToRadians(forwardReverse(prevStep[2])), teleportMenu.distance * 0.001);
                    handleMapillary(place, {meters: 500, limit: 500});
                    switchCovergeButton.lat = place.lat;
                    switchCovergeButton.lng = place.lng;
                    // locHistory.push([place.lat, place.lng, prevStep[2], prevStep[3]]);
                }
                else if (nextPlayer === "Bing Streetside") {
                    //                     console.log("teleport")
                    //                     console.log(prevStep);
                    place = FindPointAtDistanceFrom(prevStep[0], prevStep[1], DegreesToRadians(forwardReverse(prevStep[2])), teleportMenu.distance * 0.001);
                    let bounds = new Microsoft.Maps.LocationRect(new Microsoft.Maps.Location(place.lat, place.lng), 1, 1);
                    Microsoft.Maps.Map.getClosestPanorama(bounds, onSuccess, onMissingCoverage);
                    function onSuccess(panoramaInfo) {
                        //                         console.log("Coverage")
                        //                         console.log([panoramaInfo.la, panoramaInfo.lo])
                        MSStreetPlayer.setView({center: new Microsoft.Maps.Location(panoramaInfo.la, panoramaInfo.lo),
                                               });
                    }
                    function onMissingCoverage() {
                        console.log("No Coverage")
                    }
                }
                else if (nextPlayer === "Mapy") {
                    place = FindPointAtDistanceFrom(MapyPlayer.getPlace()._data.mark.lat, MapyPlayer.getPlace()._data.mark.lon, MapyPlayer.getCamera().yaw, teleportMenu.distance * 0.001);
                    let mapyCords = SMap.Coords.fromWGS84(place.lng, place.lat);
                    SMap.Pano.getBest(mapyCords, 200).then(function(placeN) {
                        MapyPlayer.show(placeN,{
                            yaw: MapyPlayer.getCamera().yaw,
                        });
                    }, function() {
                        alert("Panorama se nepodařilo zobrazit !");
                    });
                }

                if (teleportMenu.distance > 150)
                {
                    teleportMenu.distance = 100;
                    teleportMenu.innerHTML = "Teleport: " + teleportMain.distance + " m";
                }
            }
        }
        document.getElementById("Teleport Forward").addEventListener("click", () => {
            tpt(true);

        });
        document.getElementById("Teleport Reverse").addEventListener("click", () => {
            tpt(false);

        });
    }
}

function SyncListener()
{
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let switchCovergeButton = document.getElementById("switch");
    switchCovergeButton.addEventListener("click", () => {
        if (switchCovergeButton.useGoogle == false) {
            // switchCovergeButton.useGoogle = true;
            console.log(nextPlayer)
            if (nextPlayer === "Yandex") {
                let options = {};
                YandexPlayer.moveTo([switchCovergeButton.lat, switchCovergeButton.lng], options);
                YandexPlayer.setDirection([switchCovergeButton.heading, 0]);

                // nextPlayer = "Yandex";
            }
            else if (nextPlayer === "Kakao") {
                let roadviewClient = new kakao.maps.RoadviewClient();
                // console.log(switchCovergeButton.lat);
                let position = new kakao.maps.LatLng(switchCovergeButton.lat, switchCovergeButton.lng);
                roadviewClient.getNearestPanoId(position, 500, function (panoId) {
                    KakaoPlayer.setPanoId(panoId, position);
                });
                KakaoPlayer.setViewpoint({
                    pan: switchCovergeButton.heading,
                    tilt: 0,
                    zoom: -3
                });
                // nextPlayer = "Kakao";
            }
            else if (nextPlayer === "Mapy") {
                let mapyCords = SMap.Coords.fromWGS84(switchCovergeButton.lng, switchCovergeButton.lat);
                SMap.Pano.getBest(mapyCords, 200).then(function(place) {
                    MapyPlayer.show(place,{
                        yaw: DegreesToRadians(switchCovergeButton.heading),
                    });
                }, function() {
                    alert("Panorama se nepodařilo zobrazit !");
                });
            }
            else if (nextPlayer === "Mapillary" || nextPlayer === "Google") {
                // nextPlayer = "Kakao";
                handleMapillary({lat: switchCovergeButton.lat, lng: switchCovergeButton.lng}, {meters: 100, limit: 100});
            }
            else if (nextPlayer === "Bing Streetside") {
                let bounds = new Microsoft.Maps.LocationRect(new Microsoft.Maps.Location(switchCovergeButton.lat, switchCovergeButton.lng), 0.01, 0.01);
                Microsoft.Maps.Map.getClosestPanorama(bounds, onSuccess, onMissingCoverage);
                function onSuccess(panoramaInfo) {
                    MSStreetPlayer.setView({center: new Microsoft.Maps.Location(panoramaInfo.la, panoramaInfo.lo),
                                            heading: switchCovergeButton.heading
                                           });
                }
                function onMissingCoverage() {
                    console.log("No Coverage")
                }
            }
        }
    });

}

/**
 * Gets the seed data for the current game
 *
 * @returns Promise with seed data as object
 */
function getSeed() {

    console.log("get seed");
    // myHighlight("Get Seed");
    return new Promise((resolve, reject) => {
        let token = getToken();
        let URL;
        let cred = ""

        const PATHNAME = window.location.pathname;

        if (PATHNAME.startsWith("/game/")) {
            URL = `https://www.geoguessr.com/api/v3/games/${token}`;
        }
        else if (PATHNAME.startsWith("/results/")) {
            URL = `https://www.geoguessr.com/api/v3/challenges/${token}/game`;
        }
        else if (PATHNAME.startsWith("/challenge/")) {
            URL = `https://www.geoguessr.com/api/v3/challenges/${token}/game`;
        }
        else if (PATHNAME.startsWith("/battle-royale/")) {
            URL = `https://game-server.geoguessr.com/api/battle-royale/${token}`;
        }
        else if (PATHNAME.startsWith("/duels/") || PATHNAME.startsWith("/team-duels/")) {
            URL = `https://game-server.geoguessr.com/api/duels/${token}`;
        }
        else if (PATHNAME.startsWith("/bullseye/")) {
            URL = `https://game-server.geoguessr.com/api/bullseye/${token}`;
        }
        else if (PATHNAME.startsWith("/live-challenge/")) {
            URL = `https://game-server.geoguessr.com/api/live-challenge/${token}`;
        }

        if (getSeed.prevReqURL === URL && Date.now() - getSeed.prevReqDate < 1000){
            // Added by EC.
            return resolve(getSeed.prevReq);
        }

        if (isBattleRoyale) {
            fetch(URL, {
                // Include credentials to GET from the endpoint
                credentials: 'include'
            })
                .then((response) => response.json())
                .then((data) => {
                getSeed.prevReqURL = URL
                getSeed.prevReq = data;
                getSeed.prevReqDate = Date.now();
                resolve(data);
            })
                .catch((error) => {
                reject(error);
            });
        }
        else {
            fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                getSeed.prevReqURL = URL
                getSeed.prevReq = data;
                getSeed.prevReqDate = Date.now();

                resolve(data);
            })
                .catch((error) => {
                reject(error);
            });
        }
    });
}
getSeed.prevReq = null;
getSeed.prevReqDate = null;

/**
 * Gets the token from the current URL
 *
 * @returns token
 */
function getToken() {
    const PATHNAME = window.location.pathname;
    if (PATHNAME.startsWith("/game/")) {
        return PATHNAME.replace("/game/", "");
    }
    else if (PATHNAME.startsWith("/results/")) {
        return PATHNAME.replace("/results/", "");
    }
    else if (PATHNAME.startsWith("/challenge/")) {
        return PATHNAME.replace("/challenge/", "");
    }
    else if (PATHNAME.startsWith("/battle-royale/")) {
        return PATHNAME.replace("/battle-royale/", "");
    }
    else if (PATHNAME.startsWith("/duels/")) {
        return PATHNAME.replace("/duels/", "");
    }
    else if (PATHNAME.startsWith("/team-duels/")) {
        return PATHNAME.replace("/team-duels/", "");
    }
    else if (PATHNAME.startsWith("/bullseye/")) {
        return PATHNAME.replace("/bullseye/", "");
    }
    else if (PATHNAME.startsWith("/live-challenge/")) {
        return PATHNAME.replace("/live-challenge/", "");
    }
}

/**
 * Gets the round number from the ongoing game from the page itself
 *
 * @returns Round number
 */
function getRoundFromPage() {
    const roundData = document.querySelector("div[data-qa='round-number']");
    if (roundData) {
        let roundElement = roundData.querySelector("div:last-child");
        if (roundElement) {
            let round = parseInt(roundElement.innerText.charAt(0));
            if (!isNaN(round) && round >= 1 && round <= 5) {
                return round;
            }
        }
    }
    else {
        return ROUND;
    }
}


/**
 * Injects Yandex Script
 */
function injectYandexScript() {

    return new Promise((resolve, reject) => {
        if (!YANDEX_INJECTED) {
            if (YANDEX_API_KEY === "") {
                console.log("No Yandex Key")
                reject();
            }
            else {
                if (!partialCreateYandex)
                {
                    let spacey = document.getElementById('SpOver Button');
                    let _spacey = spacey.innerHTML;

                    const SCRIPT = document.createElement("script");
                    SCRIPT.type = "text/javascript";

                    SCRIPT.async = true;
                    SCRIPT.src = `https://api-maps.yandex.ru/2.1/?lang=en_US&apikey=${YANDEX_API_KEY}`;
                    document.body.appendChild(SCRIPT);
                    SCRIPT.onload = () => {
                        let timer = setTimeout(function(){
                            spacey.style.visibility = 'visible';
                            spacey.innerHTML = "Initializing Yandex, This Could Take Awhile!";
                        }, 2000);
                        console.log(ymaps);
                        ymaps.ready(() => {
                            spacey.innerHTML = _spacey;
                            spacey.style.visibility = 'hidden';
                            clearTimeout(timer);
                            YANDEX_INJECTED = true;
                            myHighlight("Yandex API Loaded");
                            resolve();
                        });
                    }
                }
                else
                {
                    YANDEX_INJECTED = true;
                    resolve();
                }
            }
        }
        else {
            resolve();
        }
    });
}

/**
 * Injects Yandex Player and calls handleReturnToStart
 */
function injectYandexPlayer() {
    // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
    let switchCovergeButton = document.getElementById("switch");

    let lng = 33.722662 ;//41.321861;
    let lat = 44.402915; //69.212920;

    let options = {
        "direction": [0, 16],
        "span": [10, 67],
        "controls": ["zoomControl"],
        //"scrollZoomBehavior": scrollZoom,
    };

    ymaps.panorama.createPlayer("player", [lat, lng], options)
        .done((player) => {
        let __ymaps = document.querySelector('ymaps');
        __ymaps.style.display = "none";

        // Remove markers and arrows then check for forbidmoving.
        player.getPanorama().__proto__.getMarkers = function(){}

        let trys = 0;
        let t = setInterval(function(){
           if (trys++ < 20 && !global_data?.token) return;
           let _ymaps = document.querySelector('ymaps');

           clearInterval(t);

           if (_ymaps && global_data?.forbidZooming && global_data?.forbidMoving && global_data?.forbidRotating){
               // NMPZ
               _ymaps.style.pointerEvents = 'none';
               return;
           }

           if (global_data?.forbidMoving){
               // Don't do anything because the arrows are alread removed.
               return;
           }

           // Remove pesky markers
           player.getPanorama().__proto__.getMarkers = function(){ return []; }
        }, 100);

        YandexPlayer = player;
        YandexPlayer.events.add("directionchange", (e) => {
            updateCompass();
            let pov = YandexPlayer.getDirection();
            if (locHistory.length > 0 && nextPlayer == "Yandex") {
                switchCovergeButton.heading = pov[0];
                locHistory[locHistory.length - 1][2] = pov[0];
                locHistory[locHistory.length - 1][3] = pov[1];
            }
        });

        YandexPlayer.events.add("panoramachange", (e) => {
            if (defaultPanoIdChange) {
                let num = YandexPlayer.getPanorama().getPosition();
                let pov = YandexPlayer.getDirection();
                // console.log(num);
                // console.log(pov);
                if (nextPlayer == "Yandex")
                {
                    locHistory.push([num[0], num[1], pov[0], pov[1]]);
                    switchCovergeButton.lat = num[0];
                    switchCovergeButton.lng = num[1];
                }
                let btn = document.querySelector("button[data-qa='undo-move']");
                if (locHistory.length > 1) {
                    btn.disabled = false;
                    btn.classList.remove('styles_disabled__2YdHD');
                }
                // console.log(locHistory);
            }
            defaultPanoIdChange = true;

        });

        YandexPlayer.events.add("error", (e) => {
            console.error("Yandex error:", e);
        });
        console.log("Yandex Player injected");
    });

}


/**
 * Injects Baidu script
 */

function reportWindowSize() {
    // console.log("report window size");
    let iframeC = document.getElementById("i_container");
    if (iframeC)
    {
        if (nextPlayer == "Baidu")
        {
            iframeC.style.top = '-60px';
            iframeC.style.height = (window.innerHeight + 200) + 'px';
            // TODO
            iframeC.style.right = '-55px';
            iframeC.style.width = (window.innerWidth + 55) + 'px';
        }
        else if (nextPlayer == "Youtube")
        {
            iframeC.style.top = '-250px';
            iframeC.style.bottom = '250px';
            iframeC.style.height = (window.innerHeight + 500) + 'px';
            iframeC.style.right = '0px';
            iframeC.style.width = window.innerWidth + 'px';
        }
        else if (nextPlayer == "Image" || nextPlayer === "Minecraft")
        {
            iframeC.style.top = '0px';
            iframeC.style.height = (window.innerHeight) + 'px';
            iframeC.style.right = '0px';
            iframeC.style.width = (window.innerWidth) + 'px';
        }
        else if (nextPlayer === "Wikipedia")
        {
            iframeC.style.top = '0px';
            iframeC.style.height = (window.innerHeight) + 'px';
            iframeC.style.right = '-325px';
            iframeC.style.width = (window.innerWidth + 325) + 'px';
        }
        else if (nextPlayer === "Carte")
        {
            // console.log([window.innerHeight, window.innerWidth])
            iframeC.style.bottom = '190px';
            if ((1.14 * window.innerHeight) >= window.innerWidth)
            {
                iframeC.style.top = '-100px';
                iframeC.style.height = (window.innerHeight + 290) + 'px';
            }
            else
            {
                iframeC.style.top = '-60px';
                iframeC.style.height = (window.innerHeight + 250) + 'px';
            }
            iframeC.style.left = '-20px';
            iframeC.style.right = '20px';
            iframeC.style.width = (window.innerWidth + 40) + 'px';
            iframeC.style.visibility = "";
            iframeC.src = carteCity;
        }


    }
}

window.onresize = reportWindowSize;



function injectContainer() {
    myHighlight("iframe container loaded")
    const iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.style.position = "absolute";
    iframe.style.zIndex = "2";
    iframe.id = "i_container";

    if (isBattleRoyale) {
        if (isDuel)
        {
            iframe.className = "inactive";
        }
        else if (isBullseye)
        {
            iframe.className = "game-panorama_panorama__ncMwh";
        }
        else if (isLiveChallenge)
        {
            iframe.className = "game-panorama_panorama__IuPsO";
        }
        else
        {
            iframe.className = "br-game-layout__panorama";
        }
    }
    else {
        iframe.className = "game-layout__panorama";
    }
    var div = document.getElementById("player");
    if (div)
    {
        div.style.overflow = "hidden";
        if (isBullseye || isLiveChallenge)
        {
            div.prepend(iframe);
        }
        else
        {
            div.appendChild(iframe);
        }
    }

}

/**
 * Injects Kakao script
 */

function injectKakaoScript() {
    return new Promise((resolve, reject) => {
        // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
        let switchCovergeButton = document.getElementById("switch");
        if (!KAKAO_INJECTED) {
            if (KAKAO_API_KEY === "") {
                console.log("No Kakao Key")
            }
            else {

                let canvas = document.createElement("kmap");
                if (isBattleRoyale) {
                    if (isDuel)
                    {
                        canvas.innerHTML = `
                 <div id="roadview" class="inactive" style="zIndex: 99999,position: "absolute", top: 0, left: 0, width: '100%', height: '100%',"> </div>
            `;
                    }
                    else if (isBullseye)
                    {
                        canvas.innerHTML = `
                 <div id="roadview" class="game-panorama_panorama__ncMwh" style="zIndex: 99999,position: "absolute", top: 0, left: 0, width: '100%', height: '100%',"> </div>
            `;
                    }
                    else if (isLiveChallenge)
                    {
                        canvas.innerHTML = `
                 <div id="roadview" class="game-panorama_panorama__IuPsO" style="zIndex: 99999,position: "absolute", top: 0, left: 0, width: '100%', height: '100%',"> </div>
            `;
                    }
                    else
                    {
                        canvas.innerHTML = `
                 <div id="roadview" class="br-game-layout__panorama" style="zIndex: 99999,position: "absolute", top: 0, left: 0, width: '100%', height: '100%',"> </div>
            `;
                    }
                }
                else {
                    canvas.innerHTML = `
                 <div id="roadview" class="game-layout__panorama" style="zIndex: 99999,position: "absolute", top: 0, left: 0, width: '100%', height: '100%',"> </div>
            `;
                }


                var div = document.getElementById("player");
                if (isBullseye || isLiveChallenge)
                {
                    div.prepend(canvas);
                }
                else
                {
                    div.appendChild(canvas);
                }

                let SCRIPT;
                if (!partialCreateKakao)
                {
                    SCRIPT = document.createElement("script");
                    SCRIPT.async = true;
                    // SCRIPT.type = "text/javascript";
                    SCRIPT.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
                    document.body.appendChild(SCRIPT);
                }

                function drawmapKakao()
                {
                    kakao.maps.load(function () {
                        var position = new kakao.maps.LatLng(33.450701, 126.560667);
                        let roadviewContainer = document.getElementById('roadview');
                        KakaoPlayer = new kakao.maps.Roadview(roadviewContainer);
                        var panoId = 1023434522;
                        KakaoPlayer.setPanoId(panoId, position);
                        KAKAO_INJECTED = true;
                        // Remove the compass from Kakao
                        kakao.maps.event.addListener(KakaoPlayer, 'init', () => {
                            const compassContainer = roadviewContainer.querySelector('div[id*="_box_util_"]');
                            if (compassContainer) compassContainer.style.display = 'none';
                        });
                        kakao.maps.event.addListener(KakaoPlayer, 'panoid_changed', function() {
                            if (defaultPanoIdChange && KakaoPlayer) {
                                let latlng = KakaoPlayer.getPosition();
                                let lat = latlng.getLat();
                                let lng = latlng.getLng();
                                let pID = KakaoPlayer.getViewpointWithPanoId();
                                if (nextPlayer == "Kakao" && lat != 33.45047613915499)
                                {
                                    // console.log("push");
                                    locHistory.push([lat, lng, pID.panoId, pID.pan]);
                                    switchCovergeButton.lat = lat;
                                    switchCovergeButton.lng = lng;
                                    switchCovergeButton.heading = pID.pan;
                                }
                                let btn = document.querySelector("button[data-qa='undo-move']");
                                if (locHistory.length > 1 && (btn != null)) {
                                    btn.disabled = false;
                                    btn.classList.remove('styles_disabled__2YdHD');
                                }
                                // console.log(locHistory);
                            }
                            defaultPanoIdChange = true;
                        });
                        kakao.maps.event.addListener(KakaoPlayer, 'viewpoint_changed', function() {
                            // console.log("pov_listener attached");
                            let pID = KakaoPlayer.getViewpointWithPanoId();
                            if (locHistory.length > 0 && nextPlayer == "Kakao") {
                                switchCovergeButton.heading = pID.pan;
                                locHistory[locHistory.length - 1][3] = pID.pan;
                            }
                            if (GooglePlayer) {
                                const { heading, pitch } = GooglePlayer.getPov()
                                if ((!almostEqual(pID.pan, heading) || !almostEqual(pID.tilt, pitch)) && nextPlayer == "Kakao") {
                                    // Updating the google street view POV will update the compass
                                    GooglePlayer.setPov({ heading: pID.pan, pitch: pID.tilt })
                                }
                            }
                            // console.log(locHistory);
                        })
                    });
                }

                if (partialCreateKakao)
                {
                    drawmapKakao();
                }
                else
                {
                    SCRIPT.onload = () => {
                        drawmapKakao();
                        myHighlight("Kakao API Loaded");
                        resolve();
                    };
                }

            }
        }
        else {
            resolve();
        }
    });
}

function getTMSTilePath(tile) {
    var yN = Math.pow(2, tile.zoom) - tile.y - 1;
    // console.log([tile.zoom,tile.x,yN]);
    if (planetType == "Moon")
    {
        // document.getElementById("Moon (Labels)").click();
        return "https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/" + tile.zoom + "/" + tile.x + "/" + yN + ".png";
    }
    else if (planetType == "Mars")
    {
        // document.getElementById("Mars (Labels)").click();
        return "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/" + tile.zoom + "/" + tile.x + "/" + yN + ".png";
    }
    else
    {
        return handleSpURL(document.getElementById(planetType).url, tile.x, tile.y, tile.zoom);
    }
    //     else if (planetType == "GTAV")
    //     {
    //         return "https://tiles.mapgenie.io/games/gta5/los-santos/satellite/" + tile.zoom + "/" + tile.x + "/" + yN + ".png";
    //         // https://tiles.mapgenie.io/games/gta5/los-santos/road/4/2/5.png
    //     }
    //     else if (planetType == "GTASA")
    //     {
    //         return "https://tiles.mapgenie.io/games/grand-theft-auto-san-andreas/san-andreas/satellite-v1/" + tile.zoom + "/" + tile.x + "/" + yN + ".png";
    //         // "https://tiles.mapgenie.io/games/grand-theft-auto-san-andreas/san-andreas/atlas-v1/" + tile.zoom + "/" + tile.x + "/" + yN + ".png";
    //     }
}

function injectMSPlayer() {
    return new Promise((resolve, reject) => {
        if (!MS_INJECTED) {
            if (MS_API_KEY === "") {
                let canvas = document.getElementById("player");
                console.log("No MS Key")
            }
            else {

                // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
                let switchCovergeButton = document.getElementById("switch");
                let SCRIPT;
                if (!partialCreateMS)
                {
                    SCRIPT = document.createElement("script");
                    SCRIPT.type = "text/javascript";
                    SCRIPT.async = true;
                    SCRIPT.src = `https://www.bing.com/api/maps/mapcontrol?key=${MS_API_KEY}`;
                    document.body.appendChild(SCRIPT);
                }
                let canvas = document.createElement("msmap");
                if (isBattleRoyale) {
                    if (isDuel)
                    {
                        canvas.innerHTML = `<div id="ms-player" class="inactive" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else if (isBullseye)
                    {
                        canvas.innerHTML = `<div id="ms-player" class="game-panorama_panorama__ncMwh" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else if (isLiveChallenge)
                    {
                        canvas.innerHTML = `<div id="ms-player" class="game-panorama_panorama__IuPsO" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else
                    {
                        canvas.innerHTML = `<div id="ms-player" class="br-game-layout__panorama" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                }
                else {
                    canvas.innerHTML = `<div id="ms-player" class="game-layout__panorama" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                }

                var div = document.getElementById("player");
                if (isBullseye || isLiveChallenge)
                {
                    div.prepend(canvas);
                }
                else
                {
                    div.appendChild(canvas);
                }
                function drawmapMS()
                {
                    try
                    {
                        MSStreetPlayer = new Microsoft.Maps.Map(document.getElementById('ms-player'),{disableStreetsideAutoCoverage: true, allowHidingLabelsOfRoad: true});
                        MS_INJECTED = true;
                        //                     MSStreetPlayer.setOptions({
                        //                         minZoom: 13
                        //                     });
                        Microsoft.Maps.Events.addHandler(MSStreetPlayer, 'viewchangeend', function () { updateView(MSStreetPlayer); });
                        function updateView(map) {
                            let ctrm = map.getCenter();
                            if (nextPlayer == "Bing Streetside" && (switchCovergeButton.lat !== ctrm.latitude && switchCovergeButton.lng !== ctrm.longitude))
                            {
                                let heading2 = bearing(switchCovergeButton.lat, switchCovergeButton.lng, ctrm.latitude, ctrm.longitude)
                                //                             console.log("moved");
                                //                             console.log([switchCovergeButton.lat, switchCovergeButton.lng, ctrm.latitude, ctrm.longitude])
                                //                             console.log(heading2);
                                locHistory.push([ctrm.latitude, ctrm.longitude, heading2]);
                                switchCovergeButton.lat = ctrm.latitude;
                                switchCovergeButton.lng = ctrm.longitude;
                                switchCovergeButton.heading = heading2;
                                let btn = document.querySelector("button[data-qa='undo-move']");
                                if (locHistory.length > 1 && (btn != null)) {
                                    btn.disabled = false;
                                    btn.classList.remove('styles_disabled__2YdHD');
                                }
                            }
                        }
                    }
                    catch(error)
                    {
                        console.log(error);
                        alert("Bing Maps API Loading Failed, please refresh");
                        // setTimeout(drawmapMS(), 1000);
                    }

                }

                if (partialCreateMS)
                {
                    // drawmapMS();
                    if (isBullseye)
                    {
                        setTimeout(drawmapMS(), 1000);
                    }
                    else
                    {
                        drawmapMS();
                    }
                    resolve();
                }
                else
                {
                    SCRIPT.addEventListener('load', () => {
                        myHighlight("Bing Maps API loaded");
                        let timeout = 0;
                        let interval = setInterval(() => {
                            // console.log(timeout);
                            if (timeout >= 40) {
                                reject();
                                clearInterval(interval);
                            }
                            if (document.getElementById('ms-player') !== null && Microsoft.Maps.Map !== typeof undefined) {
                                drawmapMS();
                                resolve();
                                clearInterval(interval);
                            }
                            timeout += 1;
                        }, 1000);
                    })
                }
            }
        }
        else {
            resolve();
        }
    });
}



function injectMapillaryPlayer() {
    return new Promise((resolve, reject) => {
        if (!MAPILLARY_INJECTED) {
            if (MAPILLARY_API_KEY === "") {
                let canvas = document.getElementById("player");
                console.log("No Mapillary Key")
            }
            else {
                // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
                let switchCovergeButton = document.getElementById("switch");
                let SCRIPT;
                if (!partialCreateMapillary)
                {
                    SCRIPT = document.createElement("script");
                    SCRIPT.type = "text/javascript";
                    SCRIPT.async = true;
                    SCRIPT.src = `https://unpkg.com/mapillary-js@4.0.0/dist/mapillary.js`;
                    document.body.appendChild(SCRIPT);
                    document.querySelector('head').innerHTML += '<link href="https://unpkg.com/mapillary-js@4.0.0/dist/mapillary.css" rel="stylesheet"/>';
                }
                let canvas = document.createElement("mmap");
                if (isBattleRoyale) {
                    if (isDuel)
                    {

                        canvas.innerHTML = `<div id="mapillary-player" class="inactive" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else if (isBullseye)
                    {
                        canvas.innerHTML = `<div id="mapillary-player" class="game-panorama_panorama__ncMwh" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else if (isLiveChallenge)
                    {
                        canvas.innerHTML = `<div id="mapillary-player" class="game-panorama_panorama__IuPsO" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else
                    {
                        canvas.innerHTML = `<div id="mapillary-player" class="br-game-layout__panorama" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                }
                else {
                    canvas.innerHTML = `<div id="mapillary-player" class="game-layout__panorama" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                }

                var div = document.getElementById("player");
                if (isBullseye || isLiveChallenge)
                {
                    div.prepend(canvas);
                    // setTimeout(drawmapMS(), 1000);
                }
                else
                {
                    div.appendChild(canvas);
                }

                function drawMapML()
                {
                    var {Viewer} = mapillary;

                    MapillaryPlayer = new Viewer({
                        accessToken: MAPILLARY_API_KEY,
                        container: 'mapillary-player', // the ID of our container defined in the HTML body
                    });

                    MapillaryPlayer.on('image', async (event) => {
                        // cnt = cnt + 1;
                        // console.log(cnt);
                        let image = event.image;
                        let pos = image.originalLngLat;
                        let cond = true;
                        for (const element of locHistory) {
                            if (element[2] == image.id)
                            {
                                cond = false;
                            }
                        }
                        if (cond)
                        {
                            switchCovergeButton.lat = pos.lat;
                            switchCovergeButton.lng = pos.lng;
                            switchCovergeButton.heading = image.compassAngle;
                            // console.log(pos);
                            locHistory.push([pos.lat, pos.lng, image.id, image.compassAngle]);
                        }
                        let btn = document.querySelector("button[data-qa='undo-move']");
                        if (btn !== null && locHistory.length > 1)
                        {
                            btn.disabled = false;
                            btn.classList.remove('styles_disabled__2YdHD');
                        }
                    });

                    MAPILLARY_INJECTED = true;
                }
                if (partialCreateMapillary)
                {
                    drawMapML();
                }
                else
                {

                    SCRIPT.addEventListener('load', () => {
                        myHighlight("Mapillary API Loaded");
                        // resolve(BMap);
                        drawMapML();
                        resolve();
                    })
                }
            }
        }
        else {
            resolve();
        }
    });
}

function changeInnerHTML(canvas1, init)
{
    canvas1.style.display = "";
    var div = document.getElementById("player");
    if (isBullseye || isLiveChallenge)
    {
        div.prepend(canvas1);
    }
    else
    {
        div.appendChild(canvas1);
    }

    let canvas;
    if (init)
    {
        canvas = document.createElement("div");
        canvas.id = "mapbox-player";
        canvas.style.cssText = `overflow: visible; zIndex: 1; position: 'absolute'; top: 0; left: 0; width: 100%; height: 100%;`;
        setTimeout(()=> {
            canvas.style.overFlow = 'visible';
           // canvas.style.width = '100%';
           // canvas.style.height = '100%';
        }
            , 1000);
        canvas1.appendChild(canvas);
    }
    else
    {
        document.getElementById("mapbox-player").classList.remove("inactive", "game-panorama_panorama__ncMwh", "game-panorama_panorama__IuPsO", "br-game-layout__panorama", "game-layout__panorama", "game-panorama_panorama__rdhFg");
    }
    canvas = document.getElementById("mapbox-player");
    if (isBattleRoyale) {
        if (isDuel)
        {
            canvas.classList.add("inactive");
        }
        else if (isBullseye)
        {
            canvas.classList.add("game-panorama_panorama__ncMwh");
        }
        else if (isLiveChallenge)
        {
            canvas.classList.add("game-panorama_panorama__IuPsO");
        }
        else
        {
            canvas.classList.add("br-game-layout__panorama");
        }
    }
    else {
        canvas.classList.add("game-layout__panorama");
    }
    if (rainLayer)
    {
        MapboxPlayer.resize();
    }
    // console.log(canvas);

}

function updateSunPosition(sunPos) {
    MapboxPlayer.setPaintProperty('sky', 'sky-atmosphere-sun', sunPos);
}

function getSunPosition(date) {
    const center = MapboxPlayer.getCenter();
    const sunPos = SunCalc.getPosition(
        date || Date.now(),
        center.lat,
        center.lng
    );
    const sunAzimuth = 180 + (sunPos.azimuth * 180) / Math.PI;
    const sunAltitude = 90 - (sunPos.altitude * 180) / Math.PI;
    return [sunAzimuth, sunAltitude];
}

// function handleRainLayer()
// {
//     if (typeof RainLayer !== typeof undefined)
//     {

//         MapboxPlayer.addLayer(rainLayer);

//         console.log("Rain Layer loaded");
//     }
//     else
//     {
//         setTimeout(handleRainLayer, 1000);
//     }
// }

function skyLayer(reset, time, style)
{
    try
    {
        if (reset.includes("reset"))
        {
            if (time == "")
            {
                time = [360, 30];
            }
            MapboxPlayer.addLayer({
                'id': 'sky',
                'type': 'sky',
                'paint': {
                    'sky-opacity': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        0,
                        0,
                        5,
                        0.3,
                        8,
                        1
                    ],
                    // set up the sky layer for atmospheric scattering
                    'sky-type': 'atmosphere',
                    // explicitly set the position of the sun rather than allowing the sun to be attached to the main light source
                    'sky-atmosphere-sun': time,
                    // set the intensity of the sun as a light source (0-100 with higher values corresponding to brighter skies)
                    'sky-atmosphere-sun-intensity': 5
                }
            });

            // handleRainLayer();


            // Reset Fog
        }
        let percentage;
        // console.log(time);

        if (time[1] <= 75)
        {
            percentage = 0;
        }
        else if (time[1] > 75 && time[1] <= 90)
        {
            percentage = (90 - time[1]) / 20;
        }
        else
        {
            percentage = 1;
        }

        // console.log(MapboxPlayer.getStyle());

        if (style)
        {
            MapboxPlayer.setPaintProperty(
                'heatmap',
                'heatmap-opacity',
                percentage * 0.35
            );
            MapboxPlayer.setPaintProperty(
                'satellite',
                'raster-brightness-max',
                0.25 + (1 - percentage) * 0.75
            );
            MapboxPlayer.setPaintProperty(
                'road-simple',
                'line-opacity',
                percentage * 0.25
            );
            MapboxPlayer.setPaintProperty(
                'bridge-case-simple',
                'line-opacity',
                percentage * 0.25
            );
            MapboxPlayer.setPaintProperty(
                'bridge-simple',
                'line-opacity',
                percentage * 0.25
            );
        }
        let fogVal = 100 - percentage * 100;
        // console.log(`rgba(${parseInt(fogVal)}, ${parseInt(fogVal)}, ${parseInt(fogVal)}, 1.0)`)
        let val = [0, 5, 0.1];
        if (ms_radius < 10000)
        {
            val[1] = ms_radius / 10000 * 4 + 1;
        }
        MapboxPlayer.setFog({ 'color': `hsl(0, 0, ${fogVal}%)` , 'range': [val[0], val[1]],'horizon-blend': val[2]});
        // console.log(MapboxPlayer.getStyle());
    }
    catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
}


// function fetchTime(lat, lng)
// {
//     return new Promise((resolve, reject) => {
//         fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=D95ISGQ041BQ&format=json&by=position&lat=${lat}&lng=${lng}`)
//             .then((response) => {resolve(response.json())})
//             .catch((error) => {console.log(error);});
//     });
// }
// fetchTime(global_lat, global_lng).then((data) => {

function styleMapboxAll(changeAttr, attrVal)
{
    let satelliteStyleBtn = document.getElementById("Satellite Type Button");
    const sunPositions = SunCalc.getTimes(
        Date.now(),
        global_lat,
        global_lng
    );

    if (changeAttr === "Dimension" || changeAttr === "All" )
    {
        if (changeAttr === "All")
        {
            attrVal = Dimension;
        }
        // console.log(["arrval", attrVal]);

        let tempRadius;
        if (attrVal)
        {
            // 3D mode = 1/2 radius + pitch.
            // From Unity Script documentation: https://docs.google.com/document/d/18nLXSQQLOzl4WpUgZkM-mxhhQLY6P3FKonQGp-H0fqI/edit#heading=h.wce3rggpxz7i
            // "*In 3D, radius is reduced by 50% but maximum viewing area with pitch is ~110%."
            tempRadius = ms_radius * 0.5;
        }
        else
        {
            // 2D mode = full radius.
            tempRadius = ms_radius;
        }

        let loc_centre = {lat: global_lat, lng: global_lng};
        let latlngBounds = getBBox2(loc_centre, tempRadius);
        // console.log([latlngBounds[0], latlngBounds[1]], [latlngBounds[2], latlngBounds[3]])
        let mpBounds = [
            [latlngBounds[1], latlngBounds[2]], // Southwest coordinates
            [latlngBounds[3], latlngBounds[0]] // Northeast coordinates
        ];

        MapboxPlayer.once("moveend", (x) => {
           setTimeout(()=>{
                // Wait for the map to load a bit and then reset the map.

                MapboxMarker.setLngLat([global_lng, global_lat]);

                MapboxPlayer.easeTo({
                    bearing: 0,
                    pitch: 0,
                    zoom: 0,
                    duration: 1000,
                });
           }, 1000);
        });

        MapboxPlayer.setMaxBounds(mpBounds);

        setTimeout(()=>{
            // Added by EC waiting a bit seems to make the the animation
            // more reliable. Sometimes it won't set the center properly.
            MapboxPlayer.setCenter([global_lng, global_lat]);
        }, 100);

        if (attrVal)
        {
            MapboxPlayer.dragRotate.enable();
            MapboxPlayer.touchZoomRotate.enableRotation();
        }
        else
        {
            MapboxPlayer.setPitch(0);
            MapboxPlayer.dragRotate.disable();
            MapboxPlayer.touchZoomRotate.disableRotation();
        }
    }
    if (changeAttr === "SunPos")
    {
        //         if (changeAttr === "All")
        //         {
        //             attrVal = satelliteStyleBtn.currentTime;
        //         }
        let sunPos = getSunPosition(sunPositions[attrVal]);
        updateSunPosition(sunPos);
        skyLayer("", sunPos, mapSty);
    }
    if (changeAttr === "mapSty")
    {
        if (attrVal)
        {
            MapboxPlayer.setStyle("mapbox://styles/jupaoqq/cl0xjs63k003a15ml3essawbk");
        }
        else
        {
            MapboxPlayer.setStyle("mapbox://styles/jupaoqq/cl0ro0tm0001l14nyi17a91rs");
        }

        // MapboxPlayer.addLayer(rainLayer);
        setTimeout(() => {
            skyLayer("reset", getSunPosition(sunPositions[satelliteStyleBtn.currentTime]), mapSty);
            if (!MapboxPlayer.getSource('mapbox-dem')) {
                MapboxPlayer.addSource('mapbox-dem', {
                    'type': 'raster-dem',
                    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                    'tileSize': 512,
                    'maxzoom': 14
                });
                // add the DEM source as a terrain layer with exaggerated height
                MapboxPlayer.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
            }
            MapboxPlayer.addLayer(rainLayer);
        }, 1000);
    }
    if (changeAttr === "Building" || changeAttr === "All")
    {
        if (changeAttr === "All")
        {
            attrVal = Building;
            console.log("building")
        }
        if (attrVal)
        {
            MapboxPlayer.setPaintProperty(
                'building-extrusion',
                'fill-extrusion-opacity',
                0.8
            );
        }
        else
        {
            MapboxPlayer.setPaintProperty(
                'building-extrusion',
                'fill-extrusion-opacity',
                0
            );
        }

    }
    if (changeAttr === "Weather" || changeAttr === "All")
    {
        if (changeAttr === "All")
        {
            attrVal = Weather;
        }
        if (attrVal)
        {
            rainLayer.setMeshOpacity(0.1);
            rainLayer.setRainColor("rgba(204, 204, 255, 1)");
        }
        else
        {
            rainLayer.setMeshOpacity(0);
            rainLayer.setRainColor("rgba(204, 204, 255, 0)");
        }
    }
}

function injectMapboxPlayer() {
    return new Promise((resolve, reject) => {
        if (!MAPBOX_INJECTED) {
            if (MAPBOX_API_KEY === "") {
                let canvas = document.getElementById("player");
                console.log("No Mapbox Key")
            }
            else {
                // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
                let switchCovergeButton = document.getElementById("switch");

                let canvas = document.createElement("sat-map");
                canvas.id = "sat_map";
                canvas.style.cssText = `z-index: 1; position: absolute; top: 0px; left: 0px; height: 100%; width: 100%;`;
                canvas.classList.add("sat_map");
                changeInnerHTML(canvas, true);


                // mapbox://styles/jupaoqq/cl0rnlwp9001914mz2vpinynt
                // mapbox://styles/jupaoqq/cl0ro0tm0001l14nyi17a91rs

                let SCRIPT;
                if (!partialCreateMapbox)
                {
                    const SCRIPT2 = document.createElement("script");
                    SCRIPT2.type = "text/javascript";
                    SCRIPT2.async = true;
                    SCRIPT2.src = `https://cdnjs.cloudflare.com/ajax/libs/suncalc/1.8.0/suncalc.min.js`;
                    document.body.appendChild(SCRIPT2);

                    SCRIPT = document.createElement("script");
                    SCRIPT.type = "text/javascript";
                    SCRIPT.async = true;
                    //SCRIPT.src = `https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js`;
                    SCRIPT.src = `https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js`;
                    document.body.appendChild(SCRIPT);
                    //document.querySelector('head').innerHTML += '<link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"/>';
                    document.querySelector('head').innerHTML += '<link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"/>';
                    handleSatColor(true, true);
                    SCRIPT.addEventListener('load', () => {
                        const SCRIPT3 = document.createElement("script");
                        SCRIPT3.type = "text/javascript";
                        SCRIPT3.async = true;
                        SCRIPT3.src = `https://cdn.jsdelivr.net/npm/mapbox-gl-rain-layer@latest/dist/mapbox-gl-rain-layer.min.js`;
                        document.body.appendChild(SCRIPT3);
                        SCRIPT3.addEventListener('load', () => {
                            myHighlight("Mapbox API and Rainlayer Loaded");
                            // resolve(BMap);
                            mapboxgl.accessToken = MAPBOX_API_KEY;

                            // jsfiddle for flickering panning issue with map: https://jsfiddle.net/api/post/library/pure/

                            MapboxPlayer = new mapboxgl.Map({
                                container: 'mapbox-player', // container ID
                                // Using this style appears to cause flickering when used with the mapbox-dem source below.
                                style: 'mapbox://styles/jupaoqq/cl0xjs63k003a15ml3essawbk', // style URL
                                center: [0, 0], // starting position [lng, lat]
                                zoom: 13, // starting zoom
                                pitch: 90,
                                bearing: 200
                            });

                            console.log("New Mapbox API Call");

                            MapboxMarker = new mapboxgl.Marker()
                                .setLngLat([0, 0])
                                .addTo(MapboxPlayer);
                            MapboxPlayer.addControl(new mapboxgl.NavigationControl(), 'top-left');
                            MapboxPlayer.addControl(new mapboxgl.ScaleControl({}));
                            MapboxPlayer.on('load', () => {
                                MapboxPlayer.addSource('mapbox-dem', {
                                    'type': 'raster-dem',
                                    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                                    'tileSize': 512,
                                    'maxzoom': 14
                                });

                                // add the DEM source as a terrain layer with exaggerated height
                                MapboxPlayer.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

                                rainLayer = new RainLayer({
                                    id: 'rain',
                                    source: 'rainviewer',
                                    scale: 'noaa'
                                });
                                //MapboxPlayer.addLayer(rainLayer); // Players don't seem to like rain.

                                // TODO
                                // MapboxPlayer.setFog({'range': [-1, 1.5], 'color': `rgba(255, 255, 255, 1.0)`,'horizon-blend': 0.1});
                                //styleMapboxAll("All", true);

                                skyLayer("reset", "", true);

                            });

                        });
                    });


                    MAPBOX_INJECTED = true;
                    resolve();

                }
                else
                {
                    resolve();
                }
            }
        }
        else {
            resolve();
        }
    });
}



function handleMapillary(latlng, options)
{
    console.log("handleMapillary")
    return;// Added by EC
    handleMapillaryHelper(latlng, options).then((data) => {
        //console.log(data.data)
        let idToSet = 0;
        let curDist = 100000000;
        for (const element of data.data) {
            // console.log(element)
            if (element.hasOwnProperty("computed_geometry"))
            {
                try {
                    let rCord = element.computed_geometry["coordinates"];
                    let dist = distance(latlng.lat,latlng.lng,rCord[1],rCord[0])
                    if (dist < curDist)
                    {
                        idToSet = element.id;
                        curDist = dist
                    }
                } catch (e) {
                    console.log("Error")
                }
            }
        }
        if (idToSet !== 0)
        {
            MapillaryPlayer.moveTo(idToSet).then(
                image => { //console.log(image);
                },
                error => { console.log(error); });
        }}).catch((error) => {
        console.log(error);
    });
}

function handleMapillaryHelper(latlng, options)
{
    return new Promise((resolve, reject) => {
        // console.log("1")
        let bbox = getBBox(latlng, options.meters);
        let URL = "https://graph.mapillary.com/images?access_token={0}&fields=id,computed_geometry&bbox={1}&limit={2}".replace('{0}', MAPILLARY_API_KEY).replace('{1}', bbox).replace('{2}', options.limit)
        // console.log(URL)
        fetch(URL)
            .then((response) => {resolve(response.json())})
            .catch((error) => {console.log(error);});
    });
}

function injectMapyPlayer() {
    return new Promise((resolve, reject) => {
        if (!MAPY_INJECTED) {
            if (MAPY_API_KEY === "") {
                let canvas = document.getElementById("player");
                MAPY_INJECTED = true;
                console.log("No Mapy Key")
            }
            else {

                // let [teleportBtn, teleportReverse, teleportMenu, teleportMoreBtn, teleportLessBtn, teleportDistResetBtn, switchCovergeButton, mainMenuBtn, timeMachineBtn, timeMachineOlderBtn, timeMachineNewerBtn, TeleportArisBtn, satelliteSwitchButton, RestrictBoundsBtn, RestrictBoundsDistBtn, RestrictMoreBtn, RestrictLessBtn, RestrictBoundsEnableBtn, RestrictResetBtn ] = setButtons();
                let switchCovergeButton = document.getElementById("switch");
                let SCRIPT;
                if (!partialCreateMapy)
                {
                    SCRIPT = document.createElement("script");
                    SCRIPT.type = "text/javascript";
                    SCRIPT.async = true;
                    SCRIPT.src = `https://api.mapy.cz/loader.js`;
                    document.body.appendChild(SCRIPT);
                }
                let canvas = document.createElement("czmap");
                if (isBattleRoyale) {
                    if (isDuel)
                    {

                        canvas.innerHTML = `<div id="mapy-player" class="inactive" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else if (isBullseye)
                    {
                        canvas.innerHTML = `<div id="mapy-player" class="game-panorama_panorama__ncMwh" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else if (isLiveChallenge)
                    {
                        canvas.innerHTML = `<div id="mapy-player" class="game-panorama_panorama__IuPsO" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                    else
                    {
                        canvas.innerHTML = `<div id="mapy-player" class="br-game-layout__panorama" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                    }
                }
                else {
                    canvas.innerHTML = `<div id="mapy-player" class="game-layout__panorama" style="zIndex: 99999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'"></div>`;
                }

                var div = document.getElementById("player");
                if (isBullseye || isLiveChallenge)
                {
                    div.prepend(canvas);
                    // setTimeout(drawmapMS(), 1000);
                }
                else
                {
                    div.appendChild(canvas);
                }

                var mapyPanoChange = function (signal) {
                    if (defaultPanoIdChange) {
                        let mapyLat = MapyPlayer.getPlace()._data.mark.lat;
                        let mapyLng = MapyPlayer.getPlace()._data.mark.lon;
                        let mapyHeading = toDegrees(MapyPlayer.getCamera().yaw);
                        switchCovergeButton.lat = mapyLat;
                        switchCovergeButton.lng = mapyLng;
                        switchCovergeButton.heading = mapyHeading;

                        if (locHistory.length > 0)
                        {
                            let toPush = true;
                            for (let locHy of locHistory)
                            {
                                if (mapyLat === locHy[0] && mapyLng === locHy[1])
                                {
                                    toPush = false;
                                }
                            }
                            if (toPush)
                            {
                                locHistory.push([mapyLat, mapyLng, mapyHeading]);
                            }
                        }
                        else
                        {
                            locHistory.push([mapyLat, mapyLng, mapyHeading]);
                        }
                        let btn = document.querySelector("button[data-qa='undo-move']");
                        if (locHistory.length > 1 && btn) {
                            btn.disabled = false;
                            btn.classList.remove('styles_disabled__2YdHD');
                        }
                    }
                    else
                    {
                        defaultPanoIdChange = true;
                    }
                }

                function crMap()
                {
                    MapyPlayer = new SMap.Pano.Scene(document.getElementById("mapy-player"));
                    var signals = MapyPlayer.getSignals();
                    signals.addListener(window, "pano-change", mapyPanoChange);
                }
                if (partialCreateMapy)
                {
                    crMap();
                    MAPY_INJECTED = true;
                }
                else
                {
                    SCRIPT.addEventListener('load', () => {
                        myHighlight("Mapy API Loaded");
                        MAPY_INJECTED = true;
                        Loader.async = true;
                        Loader.load(null, {pano: true}, crMap);
                        resolve();
                    })
                }
            }
        }
        else {
            resolve();
        }
    });
}


/**
 * Minimap presets
 */

let water_name_only =
    [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
let country_name_only =
    [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

let no_label_or_terrain =
    [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

let no_label =
    [
        {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

let blank =

    [
        {
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

let thick_border =

    [
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "weight": 1.5
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "weight": 3.5
                }
            ]
        }
    ]

let Indonesia =
    [
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

let dark = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
]

let default_preset = []

let presetMinimap = [[default_preset, "Default"],
                     [blank, "Blank"],
                     [water_name_only, "Oceanman"],
                     [country_name_only, "Impossible"],
                     [no_label_or_terrain, "Streaks"],
                     [no_label, "Easy 5K"],
                     [Indonesia, "POI only"],
                     [dark, "Dark Mode"],
                     [thick_border, "Borders"],
                     [default_preset, "Satellite"],
                     [default_preset, "Terrain"],
                     [default_preset, "Hybrid"],
                     [custom, "Custom", customMode]]

let GEOJSON_INVISIBLE =
    {
        strokeOpacity: 0,
        fillOpacity: 0,
        clickable: false,
    }

let presetOverlay = [["Clear",""],
                     ["Coverage",""],
                     ["Official",""],
                     ["OSM",""],
                     ["City Lights",""],
                     ["Watercolor",""],
                     ["Toner",""],
                     ["Fire",""],
                     ["Longitude", "https://raw.githubusercontent.com/Jupaoqq/Jupaoqq.github.io/main/lonl.json"],
                     ["Latitude", "https://raw.githubusercontent.com/Jupaoqq/Jupaoqq.github.io/main/latl.json"],
                     ["US County","https://raw.githubusercontent.com/CodeForCary/CountyDataUSA5m/master/cb_2017_us_county_5m.json"],
                     ["France","https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson"],
                     ["Time Zone", "https://raw.githubusercontent.com/treyerl/timezones/master/timezones_wVVG8.geojson"],
                     ["UK Parliament", "https://raw.githubusercontent.com/martinjc/UK-GeoJSON/master/json/electoral/gb/wpc.json"],
                     ["Custom", YOUR_URL]]

let spaceMinimap = [["Earth",""],
                    ["Moon", "https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/"],
                    ["Moon (Labels)", "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/"],
                    ["Mars", "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/"],
                    ["Mars (Labels)", "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/"],
                    ["Mars-Viking", "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/viking_mdim21_global/"],
                   ]

let spaceMinimap2 = [["Mercury", "mercury/mercury_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=MESSENGER_May2013"],
                     ["Venus", "venus/venus_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=MAGELLAN_color"],
                     ["Phobos", "mars/phobos_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=VIKING"],
                     ["Deimos", "mars/deimos_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=VIKING"],
                     ["Ceres", "asteroid_belt/ceres_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=Ceres_FC_global"],
                     ["Vesta", "asteroid_belt/vesta_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=Dawn_HAMO_global"],
                     ["Jupiter", "jupiter/jupiter_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI"],
                     ["Callisto", "jupiter/callisto_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=GALILEO_VOYAGER"],
                     ["Europa", "jupiter/europa_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=GALILEO_VOYAGER"],
                     ["Ganymede", "jupiter/ganymede_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=GALILEO_VOYAGER"],
                     ["Io", "jupiter/io_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=SSI_VGR_color"]
                    ]

let spaceMinimap3 = [["Saturn", "saturn/saturn_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI"],
                     ["Dione", "saturn/dione_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI_VOYAGER"],
                     ["Enceladus", "saturn/enceladus_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI"],
                     ["Iapetus", "saturn/iapetus_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI_VOYAGER"],
                     ["Mimas", "saturn/mimas_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI_MIMAS_MOSAIC"],
                     ["Rhea", "saturn/rhea_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI_VOYAGER"],
                     ["Tethys", "saturn/tethys_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI"],
                     ["Titan", "saturn/titan_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=CASSINI"],
                     ["Uranus", "uranus/uranus_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=JHT_VOYAGER_HST"],
                     ["Neptune", "neptune/neptune_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=JHT_VOYAGER"],
                     ["Pluto", "pluto/pluto_simp_cyl.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=NEWHORIZONS_PLUTO_MOSAIC"],
                    ]

let spaceList = ["Moon", "Mars", "Mercury", "Venus", "Phobos", "Deimos", "Ceres", "Vesta", "Jupiter", "Callisto", "Europa", "Ganymede", "Io",
                 "Saturn", "Dione", "Enceladus", "Iapetus", "Mimas", "Rhea", "Tethys", "Titan", "Uranus", "Neptune", "Pluto", "Solar System"];

function handleSpURL(url, x1, y1, z1)
{
    function tile2long(x,z) {
        return (x/Math.pow(2,z)*360-180);
    }
    function tile2lat(y,z) {
        var n=Math.PI-2*Math.PI*y/Math.pow(2,z);
        return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))));
    }

    let NWlon = tile2long(x1,z1)
    let NWlat = tile2lat(y1,z1)
    let SElon = tile2long(x1 + 1,z1)
    let SElat = tile2lat(y1 + 1,z1)
    return "https://planetarymaps.usgs.gov/cgi-bin/mapserv?map=/maps/" + url + "&WIDTH=256&HEIGHT=256&CRS=EPSG%3A4326&STYLES=&BBOX=" + `${SElat}%2C${NWlon}%2C${NWlat}%2C${SElon}`;
}

// return `https://tiles.mapgenie.io/games/gta5/los-santos/satellite/${z}/${x}/${y}.png`
// return `https://mapsv0.bdimg.com/tile/?udt=20200825&qt=tile&styles=pl&x=${x}&y=${y}&z=${z+2}`

let langDict = {
    "sn": ["fr"],
    "za": ["af"],
    "mg": ["mg", "fr"],
    "tn": ["ar"],
    "bd": ["bn"],
    "kh": ["km"],
    "in": ["hi"],
    "cn": ["zh"],
    "hk": ["zh"],
    "id": ["id"],
    "ir": ["fa"],
    "il": ["he"],
    "jp": ["ja"],
    "jo": ["ar"],
    "ky": ["ru", "ky"],
    "la": ["lo"],
    "my": ["ms"],
    "mn": ["mn"],
    "np": ["ne"],
    "ru": ["ru"],
    "sg": ["zh"],
    "kr": ["ko"],
    "lk": ["ta"],
    "tw": ["zh"],
    "th": ["th"],
    "ae": ["ar"],
    "vn": ["vi"],
    "al": ["sq"],
    "ad": ["es", "fr"],
    "at": ["de"],
    "be": ["nl", "fr"],
    "bg": ["bg"],
    "hr": ["hr"],
    "cy": ["el"],
    "cz": ["cs"],
    "dk": ["da"],
    "ee": ["et"],
    "fo": ["fo"],
    "fi": ["fi"],
    "fr": ["fr"],
    "de": ["de"],
    "gr": ["el"],
    "hu": ["hu"],
    "is": ["is"],
    "ie": ["ga"],
    "it": ["it"],
    "lv": ["lv"],
    "lt": ["lt"],
    "lu": ["lb", "fr", "de"],
    "mc": ["fr"],
    "nl": ["nl"],
    "mk": ["mk"],
    "no": ["no"],
    "pl": ["pl"],
    "pt": ["pt"],
    "ro": ["ro"],
    "sm": ["it"],
    "rs": ["sr"],
    "sk": ["sk"],
    "si": ["sl"],
    "es": ["es"],
    "se": ["sv"],
    "ch": ["de", "fr"],
    "tr": ["tr"],
    "ua": ["uk"],
    "cw": ["nl"],
    "do": ["es"],
    "gt": ["es"],
    "mx": ["es"],
    "pr": ["es"],
    "ar": ["es"],
    "bo": ["es"],
    "br": ["pt"],
    "cl": ["es"],
    "ec": ["es"],
    "pe": ["es"],
    "uy": ["es"]
};

// ch, lu, be, ad

let carteDict = {
    "AG": "agadir",
    "AS": "asilah",
    "CA": "casablanca",
    "ER": "errachidia",
    "ES": "essaouira",
    "FE": "fes",
    "IR": "ifrane",
    "MA": "marrakech",
    "ME": "meknes",
    "RA": "rabat",
};

let satType = [["Weather", "Weather: On", "Weather: Off"],
               ["Building", "Building: On", "Building: Off"],
               ["Dimension", "3D", "2D"],
               ["mapSty", "Satellite", "Road"]];

let satStyle = [["solarNoon","Noon"],
                ["sunriseEnd","Sunrise"],
                ["goldenHourEnd","Morning"],
                ["goldenHour","Evening"],
                ["sunsetStart","Sunset"],
                ["nadir","Midnight"],
                ["getlocal","Local Time"],
               ];



let HUD_ZINDEX_UPDATER = setInterval(()=>{
    // Added by EC
    let huds = document.querySelectorAll(`div[class*="Hud"i]`);

    huds.forEach((hudEl)=>{
        if (hudEl._zindexSet) return;
        hudEl.style.zIndex = '2';
        hudEl._zindexSet = true;
    })

}, 2000);


setInterval(function () {
         const guessmap = document.querySelector("div[data-qa='guess-map']");
             //const canvas = document.querySelector("#satMapContainer");
             const canvass = document.querySelectorAll("canvas");

             if (guessmap && !guessmap.__n) {
                     // Sometimes the guess map doesn't open back up.

                 guessmap.addEventListener("mouseover", function (e) {
                 if (!guessmap.activeClass) {
                     setTimeout(()=>{
                         guessmap.activeClass = Array.from(guessmap.classList).reduce( (x, a) => x + (/active/i.test(a) ? a : ""), "",);
                     }, 100);
                     return;
                 }
                 guessmap.classList.add(guessmap.activeClass);
                 });
                 guessmap.__n = true;
             }

             canvass.forEach(canvas =>{
                 if (canvas && canvas.__n) return;

                 canvas.addEventListener("mousedown", function () {
                     const guessmap = document.querySelector("div[data-qa='guess-map']");
                     if (!guessmap.activeClass) {
                         guessmap.activeClass = Array.from(guessmap.classList).reduce( (x, a) => x + (/active/i.test(a) ? a : ""), "",);
                     }
                     guessmap.classList.remove(guessmap.activeClass);
                 });

                 canvas.__n = true;
             });
  }, 2000);

function makeGuessMapHack(options){
      const guessButton = document.querySelector('[data-qa="perform-guess"]');
      if (guessButton){
        console.log(guessButton);

        // Geoguessr guess map is loaded.
        return;
      }

      if (document.querySelector('.baidu_guess_map')){
          // Remove duplicate or old guess map and button.
          // Timing out is one issue that could cause duplicate guess map and button.
          let baiduGuessMap = document.querySelector('.baidu_guess_map');
          baiduGuessMap.parentElement.removeChild(baiduGuessMap);

          let baiduGuessButton = document.querySelector('.baidu_guess_button');
          if (baiduGuessButton){
              baiduGuessButton.parentElement.removeChild(baiduGuessButton);
          }
      }

      const geoGuessContainer = document.querySelector(`[class*="game_guessMap"]`);
      geoGuessContainer.style.flexDirection = "column";

      let closeMiniMapTimer = null;

      options.mapContainer.addEventListener("mouseover", () =>{
        clearTimeout(closeMiniMapTimer);
            closeMiniMapTimer = setTimeout(function(){
            mapContainer.classList.remove(`baidu_guess_map_active`)
        }, 500);
    });


      const mapContainer = document.createElement("div");
      mapContainer.classList.add("baidu_guess_map");
      mapContainer.addEventListener("mouseover", () =>{
          clearTimeout(closeMiniMapTimer);
          mapContainer.classList.add(`baidu_guess_map_active`)
      });
      geoGuessContainer.appendChild(mapContainer);

      let map = new google.maps.Map(mapContainer, {
          center: { lat: 0, lng: 0 },
          zoom: 0,
          disableDefaultUI: true,
          clickableIcons: false,
          draggableCursor: "crosshair",
      });

      const bounds = new google.maps.LatLngBounds();
      bounds.extend(global_bounds.min);
      bounds.extend(global_bounds.max);

      map.fitBounds(bounds)

      let marker = new google.maps.Marker({
        map,
      //  label:{
      //          text: "5",
      //          color: "#ffffff",
      //          fontSize: "20px",
      //          fontWeight: "bold"
      //      }
        });

      let latLng = null;

      const clickHandler = map.addListener("click", playClick);

      function playClick(evt) {
        console.log(evt);
        latLng = evt.latLng.toJSON();
        guessBtn.disabled = false;
        guessBtn.classList.add('baidu_guess_button_enabled');
        marker.setPosition(evt.latLng);
      };

      const guessBtnContainer = document.createElement("div");
      const guessBtn = document.createElement("button");
      guessBtn.classList.add('baidu_guess_button');
      guessBtn.innerHTML = options.guessBtnText; //"Baidu Guess Button";
      guessBtn.style.cssText =
        "background: #526b7e; border-radius: 0px 0px 10px 10px; width: 100%; padding: 1em; cursor: pointer; font-family: var(--default-font);";
      guessBtn.disabled = true;
      guessBtn.addEventListener("click", (evt) => {
          if (guessBtn._doReload){
              location.reload();
              return;
          }

          const mapId = location.href.replace(/.*\/(.*)/, "$1");

          fetch(`https://www.geoguessr.com/api/v3/games/${global_data.token}`, {
              headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json",
                pragma: "no-cache",
                "sec-ch-ua":
                  '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Linux"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-client": "web",
              },
              referrer: location.href, // "https://www.geoguessr.com/game/rks2XFcZOIQlZQg9",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: `{"token":"${mapId}","lat\":${latLng.lat},"lng\":${latLng.lng},"timedOut":false, "skipRound": false}`,
              method: "POST",
              mode: "cors",
              credentials: "include",
          }).then(res => {
              return res.json();
          }).then(jSon => {
                console.log("jSon", jSon);

                const len = jSon.round;

                if (location.pathname.startsWith("/challenge/") || len === 5){
                    location.reload();
                    return;
                }

                const locationMarker = new google.maps.Marker({
                    map,
                    position: {lat: global_lat, lng: global_lng},
                    icon: options.markerIcon || 'http://maps.gstatic.com/mapfiles/ms2/micons/flag.png'
                });

                locationMarker.addListener('click', (e)=>{

                    window.open(options.locationUrl,  '_blank');
                }) ;

                if (!options.markerIcon){
                    let markerShadow = new google.maps.Marker({
                        clickable: false,
                        position: {lat: global_lat, lng: global_lng},
                        map: map,
                        icon:{
                            url: 'http://maps.google.com/mapfiles/ms/micons/flag.shadow.png',
                            //The size image file.
                        //  size: new google.maps.Size(225, 120),
                            //The point on the image to measure the anchor from. 0, 0 is the top left.
                        //  origin: new google.maps.Point(150, 0),
                            //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
                            anchor: new google.maps.Point(15, 32)
                        },
                        zIndex: (Math.round(global_lat*-100000)<<5)-1
                    });
                }

                mapContainer.classList.remove("baidu_guess_map_active");
                mapContainer.classList.add("baidu_guess_map_between_rounds");

                const interpolated = google.maps.geometry.spherical.interpolate({lat: global_lat, lng: global_lng}, marker.position, 0.5);

                const dist = jSon.player.guesses[len-1].distance.meters;

                const contentString = `
                <div id="content_string" style="color: rgb(40, 40, 40); font-size: 1.3rem; font-family: var(--default-font); font-style:italic; padding: 1rem;">
                    <div>
                        <span style="font-size:1.1rem;">Points:</span> <span style="font-weight: 700">${jSon.player.guesses[len-1].roundScoreInPoints.toLocaleString()}</span>
                    </div>
                    <div>
                        <span style="font-size:1.1rem;">Distance:</span> <span style="font-weight: 700">${(+dist.amount).toLocaleString()} <span style="font-weight: 100; font-size: 1.1rem;">${dist.unit}</span></span>
                    </div>
                </div>`;

                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    ariaLabel: "Uluru",
                    map: map,
                    position: interpolated,
                });

                setTimeout(()=>{
                   // Hack to hide scroll bars by painting them white. 
                   // It's a wierd bug that doens't happen to everyone.
                   let el = document.getElementById('content_string');
                   el.parentElement.parentElement.style.scrollbarColor = "white white";
                }, 100);

               const line= new google.maps.Polyline({
                    path: [{lat: global_lat, lng: global_lng}, marker.position],
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                    //geodesic: false, // If true infowindow won't be in middle of line.
                });

                line.setMap(map);

                const bounds = new google.maps.LatLngBounds();
                bounds.extend({lat: global_lat, lng: global_lng});
                bounds.extend( marker.position);

                google.maps.event.addListenerOnce(map, 'idle', function() {
                    map.fitBounds(bounds, 100)
                });

                guessBtn.innerHTML = "Click to reload page for next round!";
                guessBtn._doReload = true;

                localStorage['unity_immediate_load'] = true;

                google.maps.event.removeListener(clickHandler);

          });
      });

      guessBtnContainer.appendChild(guessBtn);

      geoGuessContainer.appendChild(guessBtnContainer);

      document.head.insertAdjacentHTML(
        "beforeend",
        `<style>
          .baidu_guess_map {
              --active-height: 4vh;
              --active-width: 4vw;
              width: max(15vw, var(--active-width));
              height: max(20vh, var(--active-height));
              border-radius: 10px 10px 0px 0px;
              position: relative;
              overflow: hidden;
              transition: 0.08s all ease;
          }

          .baidu_guess_map_active {
              --active-height: 75vh !important;
              --active-width: 60vw !important;
          }

          .baidu_guess_map_between_rounds {
              --parent-right-offset: 2rem;
              --active-height: 100vh !important;
              --active-width: calc(100vw - var(--parent-right-offset) * 2) !important;
          }

          .baidu_guess_button_enabled:hover {
              color: white;
          }
      </style>`);

      setTimeout(function(){
        let clockTimerEl = document.querySelector('[class*="clock-timer"]');
        if (clockTimerEl){
            clockTimerEl.parentElement.style.zIndex = '3';
        }
      }, 2000);
}



// ==UserScript==
// @name         GeoNoCar test
// @description  Redacts the car from geoguessr. Shift-K to toggle compass.
// @namespace    GeoNoCar
// @version      0.1.9
// @author       drparse
// @match        https://www.geoguessr.com/*
// @grant        unsafeWindow
// @run-at       document-start
// @updateURL    https://openuserjs.org/meta/drparse/GeoNoCar.meta.js
// @copyright 2020, drparse
// @license GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @noframes
// ==/UserScript==

(function() {
    'use strict';

function injected() {
    let globalGL = null;

    const OPTIONS = {
        colorR: 0.5,
        colorG: 0.5,
        colorB: 0.5,
    };

    // If the script breaks, search devtools for "BINTULU" and replace these lines with the new one
    const vertexOld = "const float f=3.1415926;varying vec3 a;uniform vec4 b;attribute vec3 c;attribute vec2 d;uniform mat4 e;void main(){vec4 g=vec4(c,1);gl_Position=e*g;a=vec3(d.xy*b.xy+b.zw,1);a*=length(c);}";
    const fragOld = "precision highp float;const float h=3.1415926;varying vec3 a;uniform vec4 b;uniform float f;uniform sampler2D g;void main(){vec4 i=vec4(texture2DProj(g,a).rgb,f);gl_FragColor=i;}";

    const vertexNew = `
        const float f=3.1415926;
        varying vec3 a;
        varying vec3 potato;
        uniform vec4 b;
        attribute vec3 c;
        attribute vec2 d;
        uniform mat4 e;
        void main(){
            vec4 g=vec4(c,1);
            gl_Position=e*g;
            a = vec3(d.xy * b.xy + b.zw,1);
            a *= length(c);

            potato = vec3(d.xy, 1.0) * length(c);
}`;
    const fragNew = `precision highp float;
        const float h=3.1415926;
        varying vec3 a;
        varying vec3 potato;
        uniform vec4 b;
        uniform float f;
        uniform sampler2D g;

        uniform float theArray1[4];
        uniform float theArray2[4];


        uniform float isNoob;
        uniform float theArray[8];
        uniform float transition;

uniform sampler2D sampler2d_logoImg;
uniform float u_showCustomPano;

        void main(){

vec2 aD = potato.xy / a.z;
float thetaD = aD.y;

float thresholdD1 = 0.6;
float thresholdD2 = 0.7;

float x = aD.x;
float y = abs(4.0*x - 2.0);
float phiD = smoothstep(0.0, 1.0, y > 1.0 ? 2.0 - y : y);

        float x1 = theArray[0];
        float y1 = theArray[1];
        float x2 = theArray[2];
        float y2 = theArray[3];

        vec4 gold = vec4(1.0,0.8431,0.0,1.0);
        vec4 blue = vec4(0.0,0.3412,0.7176,1.0);

        float r = smoothstep(-1.0, 1.0, transition);
        vec4 theColor = mix(gold, blue, r);

        if (x2 > x1){
            if (aD.x > x1 && aD.y > y1 && aD.x < x2 && aD.y < y2){
                if (isNoob == 1.0){
                    float lineWidth = 0.0025;
                    if ((aD.x < x1 + lineWidth)
                    || (aD.y < y1 + lineWidth)
                    || (aD.x > x2 - lineWidth)
                    || (aD.y > y2 - lineWidth)){

                        gl_FragColor = theColor;
                        //gl_FragColor = vec4(0.0,0.3412,0.7176,1.0);
                        return;
                    }
                } else {
                    gl_FragColor = vec4(0.0,0.3412,0.7176,1.0);
                    return;
                }
            }
        }  else {
            // x1 is greater than x2.
            if ((aD.y > y1 && aD.y < y2) && (aD.x > x1 || aD.x < x2)){
                if (isNoob == 1.0){
                    float lineWidth = 0.0025;
                    if (((aD.x < x1+lineWidth) && (aD.x > x1))
                       || (aD.x < x2 && aD.x > x2-lineWidth)
                       || (x2 == 0.0 && aD.x > 1.0-lineWidth)
                       || (aD.y < y1 + lineWidth)
                       || (aD.y > y2 - lineWidth)
                    ){
                        gl_FragColor = theColor; //vec4(0.0,0.3412,0.7176,1.0);
                        return;
                    }
                } else {
                    gl_FragColor = vec4(0.0,0.3412,0.7176,1.0);
                    return;
                }
            }
        }

        x1 = theArray[4];
        y1 = theArray[5];
        x2 = theArray[6];
        y2 = theArray[7];

        if (x2 > x1){
            if (aD.x > x1 && aD.y > y1 && aD.x < x2 && aD.y < y2){
                if (isNoob == 1.0){
                    float lineWidth = 0.0025;
                    if ((aD.x < x1 + lineWidth)
                    || (aD.y < y1 + lineWidth)
                    || (aD.x > x2 - lineWidth)
                    || (aD.y > y2 - lineWidth)){
                        gl_FragColor = theColor; //mix(gold, blue, r);
                        //gl_FragColor = vec4(1.0,0.8431,0.0,1.0);
                        return;
                    }
                } else {
                    gl_FragColor = vec4(1.0,0.8431,0.0,1.0);
                    return;
                }
            }
        } else {
            // x1 is greater than x2.
            if ((aD.y > y1 && aD.y < y2) && (aD.x > x1 || aD.x < x2)){
                if (isNoob == 1.0){
                    float lineWidth = 0.0025;
                    if (((aD.x < x1+lineWidth) && (aD.x > x1))
                       || (aD.x < x2 && aD.x > x2-lineWidth)
                       || (x2 == 0.0 && aD.x > 1.0-lineWidth)
                       || (aD.y < y1 + lineWidth)
                       || (aD.y > y2 - lineWidth)
                    ){
                        gl_FragColor = theColor; //vec4(1.0,0.8431,0.0,1.0);
                        return;
                    }
                } else {
                    gl_FragColor = vec4(1.0,0.8431,0.0,1.0);
                    return;
                }
            }
        }

//vec4 i = vec4(
//  thetaD > mix(thresholdD1, thresholdD2, phiD)
//  ? vec3(float(${OPTIONS.colorR}), float(${OPTIONS.colorG}), float(${OPTIONS.colorB})) // texture2DProj(g,a).rgb * 0.25
//  : texture2DProj(g,a).rgb
//,f);
//gl_FragColor=i;
    vec4 t = texture2DProj(g,a).rgba;

    if (u_showCustomPano == 1.0){
        if ((aD.y > 0.99 && aD.y < 1.0) && (aD.x > 0.99 || aD.x < 1.0)){
            // Draw circle at bottom to let player know script worked.
            gl_FragColor = vec4(1.0,0.8431,0.0,1.0);
            return;
        }
        vec4 logo = texture2DProj(sampler2d_logoImg, potato).rgba;
        //t = mix(t, logo, 1.0);
        t = logo; // mix(t, logo, 1.0);
    }

    //gl_FragColor=vec4(t.rgb,f);

    gl_FragColor=vec4(t.rgb,f);

    }`;

    function installShaderSource(ctx) {
        const g = ctx.shaderSource;
        function shaderSource() {
            if (typeof arguments[1] === 'string') {
                let glsl = arguments[1];
             //   console.log('BINTULU shader', glsl);
                if (glsl === vertexOld){
                     glsl = vertexNew;
                        globalGL = ctx;

                        let oldCtx = ctx.linkProgram;
                        ctx.linkProgram = function(...args){
                            let p = oldCtx.call(this, args[0]);

                            initWebGl(args[0]);

                            return p;
                        }
                }
                else if (glsl === fragOld) glsl = fragNew;
                return g.call(this, arguments[0], glsl);
            }
            return g.apply(this, arguments);
        }
        shaderSource.bestcity = 'bintulu';
        ctx.shaderSource = shaderSource;
    }

    function installGetContext(el) {
        const g = el.getContext;
        el.getContext = function() {
            if (arguments[0] === 'webgl' || arguments[0] === 'webgl2') {
                const ctx = g.apply(this, arguments);
                if (ctx && ctx.shaderSource && ctx.shaderSource.bestcity !== 'bintulu') {
                    installShaderSource(ctx);
                }
                return ctx;
            }
            return g.apply(this, arguments);
        };
    }

    const f = document.createElement;

    document.createElement = function() {
        if (arguments[0] === 'canvas' || arguments[0] === 'CANVAS') {
            const el = f.apply(this, arguments);
            installGetContext(el);
            return el;
        }
        return f.apply(this, arguments);
    };

    window.theArray = [];
    window.unityNerdTimer = null;
    window.ignoreUnityNerd = true;
    window.ignoreUnityNoob = true;
    window.isOkToShowCustomPano = false;

        async function initWebGl(program){
            let ell = document.querySelector('[aria-label="Street View"]');
            let eventt;

            triggerEvent(ell, "mouseup", eventt);

            let _trans = 0;
            window.unityNerdTimer = setInterval(function(){
                // webgl main loop
                if (window.ignoreUnityNerd && window.ignoreUnityNoob){
                    let uu_showCustomPano = globalGL.getUniformLocation(program, 'u_showCustomPano');
                    globalGL.uniform1f(uu_showCustomPano, window.isOkToShowCustomPano ? 1.0 : 0.0);
                    return;
                }

                let _theArray = globalGL.getUniformLocation(program, 'theArray');

                if (!_theArray) {
                    clearInterval(window.unityNerdTimer)
                    return;
                }

                let location = globalGL.getUniformLocation(program, "sampler2d_logoImg");
                globalGL.uniform1i(location, 1);

                let isNoob = globalGL.getUniformLocation(program, 'isNoob');
                let transition = globalGL.getUniformLocation(program, 'transition');
                let uu_showCustomPano = globalGL.getUniformLocation(program, 'u_showCustomPano');
                globalGL.uniform1fv(_theArray, new Float32Array(window.theArray.slice(0,8)));//[/*Nw*//*x*/0.40,/*y*/0.30, /*Se*//*x*/0.50, /*y*/0.40]));
                globalGL.uniform1f(isNoob, window.ignoreUnityNoob ? 0.0 : 1.0);
                globalGL.uniform1f(uu_showCustomPano, window.isOkToShowCustomPano ? 1.0 : 0.0);

                _trans += 0.1;

                globalGL.uniform1f(transition, Math.sin(_trans));

                triggerEvent(ell, "mouseout", eventt);

                globalGL.flush();
            }, 100);

            return;

        }

        function triggerRefresh(){
            let el = document.querySelector('[aria-label="Street View"]');
            let event;
            triggerEvent(el, "mouseout", event);
        }

        function triggerEvent( elem, type, event ) {
            // From stack overflow can't remember where.
            event = document.createEvent("MouseEvents");
            event.initMouseEvent(type, true, true, elem.ownerDocument.defaultView,
                                 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            elem.dispatchEvent( event );
        }

        function loadImg(_src, maskBool, callback){
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
            const gl = globalGL;

            if (!gl){
                setTimeout(function(){
                    loadImg(_src, maskBool, callback);
                }, 500);
                return;
            }

            const level = 0;
            const internalFormat = gl.RGBA;
            const width = 1;
            const height = 1;
            const border = 0;
            const srcFormat = gl.RGBA;
            const srcType = gl.UNSIGNED_BYTE;
            const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue

            const image = new Image();

            image.onload = () => {
                const texture = gl.createTexture();

                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(
                    gl.TEXTURE_2D,
                    level,
                    internalFormat,
                    srcFormat,
                    srcType,
                    image
                );

                // WebGL1 has different requirements for power of 2 images
                // vs. non power of 2 images so check if the image is a
                // power of 2 in both dimensions.
                if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
                    // Yes, it's a power of 2. Generate mips.
                    gl.generateMipmap(gl.TEXTURE_2D);
                } else {
                    // No, it's not a power of 2. Turn off mips and set
                    // wrapping to clamp to edge
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                }
                // Tell WebGL we want to affect texture unit 1
                //gl.activeTexture(gl.TEXTURE1);
                gl.activeTexture(maskBool? gl.TEXTURE2: gl.TEXTURE1);

               // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

                // Bind the texture to texture unit 1
                gl.bindTexture(gl.TEXTURE_2D, texture);

                gl.activeTexture(gl.TEXTURE0);
                console.log('loadImg onload');
                callback();
            };

            image.src = _src;
          //  image.src = "https://c7.alamy.com/360/WKMJE4/full-seamless-spherical-panorama-360-degrees-angle-view-on-bank-of-wide-river-in-front-of-bridge-in-city-center-360-panorama-in-equirectangular-proje-WKMJE4.jpg";
           // image.src = "https://i.imgur.com/ZONu5JU.jpeg";
            //image.src = "https://streetviewpixels-pa.googleapis.com/v1/tile?cb_client=apiv3&panoid=NK_fhzsEFds-fZW3pyKjzg&output=tile&x=2&y=1&zoom=3&nbt=1&fover=2";

            function isPowerOf2(value) {
                // Might not be necessary
                return (value & (value - 1)) === 0;
            }
        }
        window.loadImg = loadImg;
}

  eval(`(${injected.toString()})()`);

})();

    function unityNerdFn(data){

        // Reset theArray to hide rectangles.
        window.theArray = [0.1, 0.4, 0.3, 0.2, 0.5, 0.8, 0.7, 0.6];
        window.isOkToShowCustomPano = false;

        const isNerd =  (/\[unity nerd/i.test(data.mapName));
        const isNoob = (/\[unity noob/i.test(data.mapName));
        const isTimed = (/\[.*timed/i.test(data.mapName));
        const isUnhackable = (/\[.*UAC/i.test(data.mapName));

        console.log("isunhackable", isUnhackable);

        if (isUnhackable){
            let _url = hex2a(global_panoID);

            if (/http/i.test(_url) === false) {
                console.log("Didn't find url for unhackable.");
                window.isOkToShowCustomPano = false;
               // deactivateUnityNerd();
                return;
            }

            if (unityNerdFn.UAC_URLS[_url]){
                alert('Is this a repeat? Maybe refreshing the page will fix it?');
            }

            unityNerdFn.UAC_URLS[_url] = true;

            window.isOkToShowCustomPano = true;

            fetch(_url)
            .then((r) => r.blob())
            .then((blob) => {
                let _url = URL.createObjectURL(blob);

                window.loadImg(_url, false, () => {
                    setTimeout(()=>{
                    GoogleMapsObj.setCenter({lat:0,lng:0})
                    GoogleMapsObj.setZoom(2)
                    console.log("Resized map in loadImg callback.")
                    }, 1000);
                });
            });

            activateUnityNerd();
        }

        if (!isNerd && !isNoob) return;

        if (isTimed){
            let p = setInterval(function () {
                const el = document.elementFromPoint(2, 2);
                const ariaLabel = el.parentElement.getAttribute("aria-label");

                if (!ariaLabel || ariaLabel !== "Street View") {
                    return;
                }

                clearInterval(p);

                const timedWait = +data.mapName.replace(/.*\[.*timed.*?(\d+.?\d*)s.*/i, "$1");

                if (!timedWait){
                    doUnityNerd(data, 0);
                } else {
                    console.log('timed wait', timedWait);
                    doUnityNerd(data, timedWait);
                }

            }, 10);
            return;
        }

        doUnityNerd(data, 0);
    }
    unityNerdFn.UAC_URLS = [];

    let unityNerdTimer = null;

    function doUnityNerd(data, waitTimeSeconds){

        let curRound = data.rounds[data.rounds.length -1];

                    console.log('timed wait', waitTimeSeconds);
        console.time('timer');

        clearTimeout(unityNerdTimer);

        unityNerdTimer = setTimeout(() => {
          //console.log.bind(console, "1 second"), 1000);
          let t = [];
          let lat = curRound.lat.toFixed(14);
          let lng = curRound.lng.toFixed(14);

          t[3] = +(lat[lat.length - 1 - 1] + lat[lat.length - 1 - 0]) / 100;
          t[2] = +(lat[lat.length - 1 - 3] + lat[lat.length - 1 - 2]) / 100;
          t[1] = +(lat[lat.length - 1 - 5] + lat[lat.length - 1 - 4]) / 100;
          t[0] = +(lat[lat.length - 1 - 7] + lat[lat.length - 1 - 6]) / 100;

          t[7] = +(lng[lng.length - 1 - 1] + lng[lng.length - 1 - 0]) / 100;
          t[6] = +(lng[lng.length - 1 - 3] + lng[lng.length - 1 - 2]) / 100;
          t[5] = +(lng[lng.length - 1 - 5] + lng[lng.length - 1 - 4]) / 100;
          t[4] = +(lng[lng.length - 1 - 7] + lng[lng.length - 1 - 6]) / 100;


          window.theArray = t.map(el => el === 0? 1.0: el);

          console.log(t, window.theArray);
            console.timeEnd('timer');
        }, waitTimeSeconds * 1000);
    }

function activateUnityNerd(){
    window.ignoreUnityNerd = false;
}

function deactivateUnityNerd(){
     window.theArray = [];
   //  setTimeout(()=>{
        window.ignoreUnityNerd = true;
    // }, 500);
}

function activateUnityNoob(){
    window.ignoreUnityNoob = false;
}

function deactivateUnityNoob(){
     window.theArray = [];
     setTimeout(()=>{
        window.ignoreUnityNoob = true;
     }, 500);
}

function download(filename, text) {
    // https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function getOverlayView(map){
    var ov = new google.maps.OverlayView();
    ov.onAdd = function(){};
    ov.draw = function(){};
    ov.onRemove = function(){};
    ov.setMap(map);
    return ov;
}

    function showUACAnswerBtn(json = null){
        let unity_alert = document.querySelector('.unity_alert');
        let msg = document.createElement('div');
        msg.style.cssText = `color: white;`;
        msg.innerText = "Click here for UAC answers.";
        msg.onclick = function(e){
            if (!json) {
                unhackableAnsswersShowPrompt();
            } else {
                unhackableAnswers(json);
            }
            unity_alert.innerHTML = "";
            unity_alert.style.visibility = "hidden";
        };

        unity_alert.innerHTML = "";
        unity_alert.appendChild(msg);
        unity_alert.style.visibility = 'visible'
        setTimeout(()=>{
            unity_alert.style.visibility = 'hidden';
            unity_alert.innerHTML = "";
        }, 5000);
    }

    function unhackableAnsswersShowPrompt() {

        let _prompt = prompt("Paste UAC answer info. here:")

        if (!_prompt) return;

        unhackableAnswers(_prompt);
    }
     
    async function unhackableAnswers(json = null){
        let data = null;

        const PATHNAME = window.location.pathname;
        const token = getToken();
        const bounds = new google.maps.LatLngBounds();

        if (!global_data?.rounds || global_data.token !== token){
            let URL = null;

            if (PATHNAME.startsWith("/game/")) {
                URL = `https://www.geoguessr.com/api/v3/games/${token}`;
            }
            else if (PATHNAME.startsWith("/results/" )) {
                URL = `https://www.geoguessr.com/api/v3/challenges/${token}/game`;
             //   URL = `https://www.geoguessr.com/api/v3/results/highscores/${token}"`;
             //   URL = `https://www.geoguessr.com/api/v3/results/highscores/${token}?friends=false&limit=26&minRounds=5`;
            }

            global_data = await fetch(URL).then((response) => response.json());

            if (!global_data){
                alert('An unkown error happened.');
                return;
            }
        }

        try {
            data = JSON.parse(json);
        } catch (e){
            alert(e.message);
            console.log("From prompt", e.message);
            return
        }

        // Lower opacity for correct location overlays for effect.
        document.querySelectorAll("[data-qa=\"correct-location-marker\"]").forEach(el=> el.style.opacity = 0.2);

        let thisRoundData = {};

        for (let n = 0; n < global_data.rounds.length; n++){
            let panoId = global_data.rounds[n].panoId;

            if (!panoId) continue;

            let url = hex2a(panoId);

            if (!data[url]) continue;

            let latLng = data[url].latLng.split(',');
            latLng = {lat: +latLng[0], lng: +latLng[1]};

            thisRoundData[url] = data[url];

            global_data.rounds[n]._unhackable_answer = latLng;

            bounds.extend(latLng);

            const svgMarker = {
                // Path is just a filler for a 0 opacity marker.
                path: "M18.8-31.8c.3-3.4 1.3-6.6 3.2-9.5l-7-6.7c-2.2 1.8-4.8 2.8-7.6 3-2.6.2-5.1-.2-7.5-1.4-2.4 1.1-4.9 1.6-7.5 1.4-2.7-.2-5.1-1.1-7.3-2.7l-7.1 6.7c1.7 2.9 2.7 6 2.9 9.2.1 1.5-.3 3.5-1.3 6.1-.5 1.5-.9 2.7-1.2 3.8-.2 1-.4 1.9-.5 2.5 0 2.8.8 5.3 2.5 7.5 1.3 1.6 3.5 3.4 6.5 5.4 3.3 1.6 5.8 2.6 7.6 3.1.5.2 1 .4 1.5.7l1.5.6c1.2.7 2 1.4 2.4 2.1.5-.8 1.3-1.5 2.4-2.1.7-.3 1.3-.5 1.9-.8.5-.2.9-.4 1.1-.5.4-.1.9-.3 1.5-.6.6-.2 1.3-.5 2.2-.8 1.7-.6 3-1.1 3.8-1.6 2.9-2 5.1-3.8 6.4-5.3 1.7-2.2 2.6-4.8 2.5-7.6-.1-1.3-.7-3.3-1.7-6.1-.9-2.8-1.3-4.9-1.2-6.4z",
                fillColor: "rgb(0, 102, 204)",
                scale: 0.75,
                fillOpacity: 1,
                strokeColor: "rgb(0, 102, 204)",
                strokeOpacity: 1,
                anchor: new google.maps.Point(0, -20),
                labelOrigin: new google.maps.Point(0, -25)
            };

            let marker = new google.maps.Marker({
                position: latLng,
                map: GoogleMapsObj,
                icon: svgMarker,
                label:{
                    text: `${n+1}`,
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: "bold"
                }
            });

            marker.addListener('click', function(){
                //window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${latLng.lat},${latLng.lng}`, "_blank")
                window.open(data[url].locationUrl, "_blank")
            });

            unhackableAnswers.markers.push(marker);
        }

        if (Object.keys(thisRoundData).length === 0){
            alert("No answers found for this game.");
            return;
        }
        
        let resultRows = document.querySelectorAll('div[class*="results_row"]');
        resultRows.forEach(row =>{
            if (/selected/i.test(row.getAttribute('class'))){
                row.click();
            }
        })

        GoogleMapsObj.fitBounds(bounds)

        hideDottedConnectingLinesOnMap();

        if (!google.maps.OverlayView.prototype._setMap){
            // Listen for new overlays being made and use the latlng coordinates from them to
            // draw the connecting polylines.
            google.maps.OverlayView.prototype._setMap = google.maps.OverlayView.prototype.setMap;
            google.maps.OverlayView.prototype.setMap = function(...args){
                    setTimeout(()=>{
                    if (this.to && this.from) {
                        queOverlaysForUnhackable(this);
                        return;
                    }
                        if (!this.position) return;

                        this.div.firstElementChild.addEventListener('mouseover', (e)=>{
                            const dMarker = newDistanceMarker(this);
                            setTimeout(()=> {
                                dMarker.setMap(null);
                                dMarker._msgDiv.remove();
                            }, 2500);
                        })

                    }, 100);
                google.maps.OverlayView.prototype._setMap.apply(this, args);
            };
        }

        if (Object.keys(data).length <= 5) return;

        let _confirm = confirm("Do you want to download the answers for this game only, filtering out all other answers?");

        if (!_confirm) return;

        try {
            thisRoundData = JSON.stringify(thisRoundData);
        } catch(e){
            alert("Couldn't convert this game's answers for some reason.");
            console.log(e.message);
        }

        download("answers.json", thisRoundData);
    }
    unhackableAnswers.markers = [];

    function queOverlaysForUnhackable(overlay, dataIsReady){
        if (dataIsReady){
            queOverlaysForUnhackable._overlaysWaiting.forEach((overlay) =>{
                makePolylinesForUnhackable(overlay);
            });
            queOverlaysForUnhackable._overlaysWaiting = [];
            return;
        }

        let hasAnswers = global_data?.rounds?.some((round) => round?._unhackable_answer);
        if (!hasAnswers){
            queOverlaysForUnhackable._overlaysWaiting.push(overlay);
            return;
        }
        makePolylinesForUnhackable(overlay);
    }

    queOverlaysForUnhackable._overlaysWaiting = [];

    function makePolylinesForUnhackable(toFromOverlay){
        const _rounds = global_data.rounds;
        const div = toFromOverlay.div;
        const jsonFrom = toFromOverlay.from.toJSON(); 
        const jsonTo = toFromOverlay.to.toJSON(); // Guess location.

        let round = _rounds.filter( round =>{
            if (jsonFrom.lat === round.lat && jsonFrom.lng === round.lng){
                return true;
            }
        });
        
        round = round.length > 0? round[0] : null;
        
        if (round === null) return;

        if (!round._unhackable_answer) return;
        
        round._uacGuesses = round._uacGuesses? round._uacGuesses: [];
        round._uacGuesses.push(jsonTo);            

        const answer = round._unhackable_answer;
        const pos = jsonTo;

        const line = new google.maps.Polyline({
            path: [pos, answer],
            geodesic: true,
            strokeColor: "rgb(0, 102, 204)",
            //strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            //geodesic: false, // If true infowindow won't be in middle of line.
        });
        
        line.setMap(GoogleMapsObj);

        toFromOverlay.__to = toFromOverlay.to;

        Object.defineProperty(toFromOverlay, "to", {
            // Geoguessr re-uses old overlays instead of making a whole new overlay in some situations.
            set : function (value) { 
                // Listen for changes to the "to" property and remove line if set with new value.
                toFromOverlay.__to = value;
                line.setMap(null);
                if (toFromOverlay.div.children.length > 0){
                    makePolylinesForUnhackable(toFromOverlay);
                }
            },
            get : function () { return toFromOverlay.__to }
        });

        const observer = new MutationObserver(
            function (){
                // Remove polyline if div is gutted.
                if (toFromOverlay.div.children.length > 0) return;                  

                line.setMap(null);
                
                setTimeout(function(){
                    if (!location.pathname.startsWith("/results/")){
                        // Remove markers if not on results page.
                        observer.disconnect();
                        unhackableAnswers.markers.forEach((marker) => marker.setMap(null));
                        unhackableAnswers.markers = [];
                    }
                }, 5000);
            }
        );
        observer.observe(toFromOverlay.div, {childList: true, subtree: true });            
    }

    function makeStreetViewCanvasHidden(){
        document.head.insertAdjacentHTML("beforeend", `<style>${GENERAL_CANVAS} {visibility: hidden;}</style>`)
    }
    
    function hideDottedConnectingLinesOnMap(){
        document.head.insertAdjacentHTML("beforeend", `<style> div[class*="map_line"] {visibility: hidden;}</style>`)
    }

    function newDistanceMarker(overlay){
        const svgMarker = {
            // Path is just a filler for a 0 opacity marker.
            path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406z",
            fillOpacity: 0,
        };

        const pos = overlay.position.toJSON();
        const _rounds = global_data.rounds;
        let answer = _rounds.filter((round)=>{
            return round._uacGuesses.some((guess) => guess.lat == pos.lat && guess.lng == pos.lng); 
        });
        
        answer = answer[0]._unhackable_answer;

        const interpolated = google.maps.geometry.spherical.interpolate(answer, pos, 0.5);
        let distanceBetween = google.maps.geometry.spherical.computeDistanceBetween(pos, answer);

        const units = distanceBetween > 1000 ? "km" : "m";

        distanceBetween = distanceBetween >= 1000
                            ? (distanceBetween / 1000).toFixed(2)
                            : distanceBetween >= 100
                                ? distanceBetween.toFixed(2)
                                : distanceBetween.toFixed(3);


        distanceBetween = (+distanceBetween).toLocaleString();// Add commas for large numbers.

        document.head.insertAdjacentHTML("beforeend", `<style>.unhackableLabel {background: rgb(0, 102, 204); padding: 10px; border-radius: 5px;}</style>`)

        const distanceMarker = new google.maps.Marker({
            position: interpolated,
            icon: svgMarker,
            map: GoogleMapsObj,
            label: {
                text: `${distanceBetween} ${units}`,
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "bold",
                className: "unhackableLabel",
            },
            clickable: true,
        });

        distanceMarker._msgDiv = document.createElement('div');
        distanceMarker._msgDiv.innerHTML = `${distanceBetween} ${units}`;
        distanceMarker._msgDiv.style.cssText = "position: absolute; bottom: 5px; left: 5px; color: rgba(100,100,100,0.1); font-size: 13px;";
        document.body.appendChild(distanceMarker._msgDiv);

        return distanceMarker;
    };
