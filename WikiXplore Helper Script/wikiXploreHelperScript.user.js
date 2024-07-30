// ==UserScript==
// @name         WikiXplore script for map-making.app
// @namespace    WikiXplore
// @version      0.3 
// @description  WikiXplore script for map-making.app.
// @author       echandler
// @match        https://map-making.app/maps/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=map-making.app
// @grant        none
// @downloadURL  https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/WikiXplore%20Helper%20Script/wikiXploreHelperScript.user.js
// @updateURL    https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/WikiXplore%20Helper%20Script/wikiXploreHelperScript.user.js 
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
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
            if (document.getElementById("wikiXplore_body")){
                infowindow.close();
                return;
            }

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

                infowindow.setContent(`<div id="wikiXplore_body" style="font-size: 1.2em;">
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

    const btn = document.createElement('button');
    btn.innerHTML = "WikiXplore helper";
    document.body.appendChild(btn);
    btn.addEventListener('click', showAlert);
    
})();

function showAlert(){
    let p = new window.Sweetalert2({
    html: `
        <div>WikiXplore tools</div>

        <div>
            Select distance from Wiki page (meters): <input type="number" id="_distance" value="100">
        </div>

        <div>
            Remove duplicate Wiki pages: <input type="checkbox" id="_dups">
        </div>

        <div>
            Paste JSON locations here: 
        </div>

        <textarea id="_jsonLocs" rows="4" cols="50" placeholder="Export JSON locations to the clipboard and paste here."></textarea>

        <button type="button" id="checkBtn" disabled class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Run Check</button>

        <div>
            Checking location # <span id="_locNum">0</span>
        </div>

        <div>
            Filtered Locations: 
        </div>

        <textarea id="_filteredLocs" rows="4" cols="50"></textarea>

        <div>
            Duplicate Locations: 
        </div>

        <textarea id="_duplicateLocs" rows="4" cols="50"></textarea>

        <div>
            Rejected Locations: 
        </div>

        <textarea id="_rejectedLocs" rows="4" cols="50"></textarea>

        <div>
            Pro tip: Open map-making.app in a new tab and switch back to this one to copy and paste info. 
        </div>
  `,
   allowOutsideClick: false, 
});
  
   setTimeout(init, 1000);
}

function init(){
    const distInput = document.getElementById('_distance');
    const jsonInput = document.getElementById('_jsonLocs');
    const dupta = document.getElementById('_duplicateLocs');
    const regta = document.getElementById('_rejectedLocs');
    const filtta = document.getElementById('_filteredLocs');
    const locNumber = document.getElementById('_locNum');
    const checkDupsBox = document.getElementById('_dups');
    const checkBtn =document.getElementById('checkBtn'); 

    checkBtn.addEventListener('click', ()=>{
        let dist = parseInt(distInput.value);

        const filtObj = {"name":editor.map.name,"customCoordinates":[],"extra":{"tags":{},"infoCoordinates":[]}};
        const dupObj = {"name":editor.map.name,"customCoordinates":[],"extra":{"tags":{},"infoCoordinates":[]}};
        const regObj = {"name":editor.map.name,"customCoordinates":[],"extra":{"tags":{},"infoCoordinates":[]}};
        const dupsObj = {};
       
        const jsonObj = JSON.parse(jsonInput.value);

        console.log(locations)
        
        let time = 0;
        let nn = 0;

        for (let n = 0; n < jsonObj.customCoordinates.length; n++){
            let loc = jsonObj.customCoordinates[n];
            let latLng = {lat: loc.lat, lng: loc.lng};

            setTimeout(()=>{
                let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=geosearch&gscoord=${latLng.lat}|${latLng.lng}&gsradius=10000&gslimit=1&format=json`;

                locNumber.innerText = n + 1;

                fetch(url)
                    .then(function(response){return response.json();})
                    .then(function(response) { 
                    nn += 1;

                    let pages = response.query.geosearch;
                    if (pages.length == 0) return;

                    if (checkDupsBox.checked && dupsObj[pages[0].pageid]){

                        dupObj.customCoordinates.push(locations[n]);

                        if (nn >= locations.length-1){
                            fillTextAreas();
                        }
                        return;
                    }         

                    dupsObj[pages[0].pageid] = true;
                    
                    if (pages[0].dist > dist){
                        
                        regObj.customCoordinates.push(loc);

                        if (nn >= locations.length-1){
                            fillTextAreas();
                        }
                        return;
                    }

                    filtObj.customCoordinates.push(loc);

                    if (nn >= locations.length-1){
                        fillTextAreas();
                    }
                });
                
              
            }, time);

            time += 250;
        }

        function fillTextAreas(){
            filtta.innerHTML = JSON.stringify(filtObj);
            regta.innerHTML = JSON.stringify(regObj);
            dupta.innerHTML = JSON.stringify(dupObj);
        }
    });
    checkBtn.disabled = false;
}
