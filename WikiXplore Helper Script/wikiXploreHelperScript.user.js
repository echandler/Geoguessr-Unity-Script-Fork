// ==UserScript==
// @name         WikiXplore script for map-making.app
// @namespace    WikiXplore
// @version      2024-07-28
// @description  WikiXplore script for map-making.app.
// @author       echandler
// @match        https://map-making.app/maps/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=map-making.app
// @grant        none
// @downloadURL  https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/WikiXplore%20Helper%20Script/wikiXploreHelperScript.user.js
// @updateURL    https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/WikiXplore%20Helper%20Script/wikiXploreHelperScript.user.js 
// ==/UserScript==

(function() {
    'use strict';
    const int = setInterval(async ()=> {
        if (!map) return;

        clearInterval(int);

        const marker = new google.maps.Marker({
            map,
        });

        marker.addListener('click', (e)=>{
            infowindow.open({
                map: map,
                anchor: marker,
            });
        });

        const infowindow = new google.maps.InfoWindow({
                map: map,
                anchor: marker,
        });

        map.addListener('click', function(e){

            let ll = e.latLng.toJSON();
            let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=geosearch&gscoord=${ll.lat}|${ll.lng}&gsradius=10000&gslimit=1&format=json`;

            console.log(url)
        
            fetch(url)
                .then(function(response){return response.json();})
                .then(function(response) {

                let pages = response.query.geosearch;
                if (pages.length == 0) return;

                marker.setPosition({lat: pages[0].lat, lng: pages[0].lon});

                infowindow.setContent(`<div style="font-size: 1.2em;">
                    <div style="color:grey;">WikiXplore Helper Script</span></div>
                    </br>
                    <div style="color:grey;">title: <span style="color:black;">${pages[0].title}</span></div>
                    <a style="color:grey;" href="https://en.wikipedia.org/?curid=${pages[0].pageid}" target="_blank"  >Link to wiki article</a>
                    </br>
                    </br>
                    <div style="color:grey;">dist:  <span style="color:black;"> ${pages[0].dist}</span></div>
                    <div style="color:grey;">lat:  <span style="color:black;"> ${pages[0].lat}</span></div>
                    <div style="color:grey;">lon:  <span style="color:black;"> ${pages[0].lon}</span></div>
                    <div style="color:grey;">ns:  <span style="color:black;"> ${pages[0].ns}</span></div>
                    <div style="color:grey;">pageid:  <span style="color:black;"> ${pages[0].pageid}</span></div>
                    <div style="color:grey;">primary:  <span style="color:black;"> ${pages[0].primary}</span></div>
                <div>`)

            }).catch(function(error){console.log(error);});
        });
    }, 1000);
    // Your code here...
})();
