// ==UserScript==
// @name         WikiXplore script for map-making.app
// @namespace    WikiXplore
// @version      0.4 
// @description  WikiXplore script for map-making.app.
// @author       echandler
// @match        https://map-making.app/maps/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=map-making.app
// @grant        none
// @downloadURL  https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/WikiXplore%20Helper%20Script/wikiXploreHelperScript.user.js
// @updateURL    https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/WikiXplore%20Helper%20Script/wikiXploreHelperScript.user.js 
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// ==/UserScript==

const wikiXplore_helper_btn = document.createElement('button');

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

        map.addListener('click',async function(e){
            console.log(e); 
            let rad = 10000;
            let limit = 1;

            if (e.domEvent.ctrlKey){
                rad = 1000;
                limit = 400;

                setTimeout(()=>{
                    // This created a unnecessary location, we need to delete it as a convienence.
                    const delBtn = document.querySelector('.button--destructive');
                    if (!delBtn || delBtn.innerText !== 'Delete') return;
                    delBtn.click();
                }, 1000);

                const cityCircle = new google.maps.Circle({
                    // Copied from google maps circle example.
                    // https://developers.google.com/maps/documentation/javascript/examples/circle-simple
                    strokeColor: "#ff982f",
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.0,
                    map: map,
                    center: e.latLng,
                    radius: rad,
                });

                setTimeout(()=>{
                    // Remove circle
                    cityCircle.setMap(null);
                }, 2000);
            //    make1000meterMarkers(e);
                //return;
            }

            let ll = e.latLng.toJSON();

            const pages = await getWikiArticles(ll, rad, limit);

            if (e.domEvent.ctrlKey){
                console.log(pages);
                makeMarkersFromPages(e, pages);

                // Let user know how many pages were found.
                wikiXplore_helper_btn.innerHTML = `${pages.length} pages found in ${rad}m radius.`;
                clearTimeout(wikiXplore_helper_btn.msgTimer);
                wikiXplore_helper_btn.msgTimer = setTimeout(()=> wikiXplore_helper_btn.innerHTML = wikiXplore_helper_btn._innerHTML, 5000);

                return;
            }

            if (!pages || marker._pageid === pages[0].pageid) return;

            marker.setPosition({lat: pages[0].lat, lng: pages[0].lon});
            marker._pageid = pages[0].pageid;

        const iwBody = document.createElement('div');
        iwBody.style.cssText = `font-size: 1.2em;`;
        iwBody.id = `wikiXplore_body`;
        iwBody.innerHTML = `
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
            <div>`;

            const getImageDiv = document.createElement('div');
            getImageDiv.style.cssText = `color:grey; margin-top: 1em; cursor:pointer;`;
            getImageDiv.innerHTML = "Show an image from page.";
            getImageDiv.addEventListener('click', async ()=>{
                const req = await getWikiArticleImage(pages[0].pageid);
                console.log(req)

                getImageDiv.style.cursor = ''; 


                if (!req[pages[0].pageid]?.thumbnail?.source) {
                    getImageDiv.innerHTML= `Check link to article for images.`;
                    return;
                }

                getImageDiv.innerHTML = `<img src="${req[pages[0].pageid].thumbnail.source.replace("50px", "300px")}">`;
            });
            iwBody.appendChild(getImageDiv);

            infowindow.setContent(iwBody);
        });
    }, 1000);

    wikiXplore_helper_btn._innerHTML = "WikiXplore helper";
    wikiXplore_helper_btn.innerHTML = wikiXplore_helper_btn._innerHTML;
    document.body.appendChild(wikiXplore_helper_btn);
    wikiXplore_helper_btn.addEventListener('click', showAlert);
    
})();

let _markers = [];
let _dupMarkers = {};

function makeMarkersFromPages(e, pages,_ignoreDups, _image, _altimage, _label){
    const image = _image || "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const altImage = _altimage || `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9btVUqDnYQcchQnSyIiuimVShChVArtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouUeF9SaBHjhcf7OO+ew3v3Af56malmxxigapaRSsSFTHZVCL4ihC50w4cZiZn6nCgm4Vlf99RHdRfjWd59f1avkjMZ4BOIZ5luWMQbxFObls55nzjCipJCfE48atAFiR+5Lrv8xrngsJ9nRox0ap44QiwU2lhuY1Y0VOJJ4qiiapTvz7iscN7irJarrHlP/sJwTltZ5jqtISSwiCWIECCjihLKsBCjXSPFRIrO4x7+QccvkksmVwmMHAuoQIXk+MH/4PdszfzEuJsUjgOdL7b9MQwEd4FGzba/j227cQIEnoErreWv1IHpT9JrLS16BPRtAxfXLU3eAy53gIEnXTIkRwrQ8ufzwPsZfVMW6L8FetbcuTXPcfoApGlWyRvg4BAYKVD2use7Q+1z+7enOb8fPlJykmBeKEcAAAAGYktHRAAvACQAnpIhU9UAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCAYJBSRtfQxJAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAqxJREFUSMftlTtMU2EUx3/fbUEKUoraoSRgTJXER2KMoA7MaKKbCXFAjejo5uCoXQ2DLmriI9qFOPgctMSoC8bEiIMm6GA0ovJSA1gutJR7/w58xYr4IN44eZK73POd33fO+c7DSAoDEfs5QA7IAx7fxABlQAWwBAgBAgrAlLWZAXwk7ezq6tobjUYft7S0nJK0SdJqSSslNaTT6Q1NTU0H4/H4+Ugk8tCCFAqFxhOJxI22trb9khok1UgqM5KUSqU4fmaMZVs83J6ubIVfeOn7vu95XnS6tm6t07AeEo14K1bhVFZTGY9TFY+j10/JdqfZWOmf7OnpOQcMheeCCsVwkkdJHj5WPf74XvNMLodTv46C6zLtuhQmJ/Fcl1JZunU7lXX1vD1xaAfQDeTDpQc+PYCqNRBZv20O9CdSXl5eBiwHBpz5yvcXwc+xKDHGFB8t/APQm4IPZxcPtZVgnIU0+QEYvgBaPBTnZ4rpQfh8GZQPCAhQGILR0+CPBASE2VxOpMHrCwg4l4K74N8PEAigl7+HOot9Re8F5O4ECATIP4dsd4BAgOwjcPsCBAIMX5ntrFIJAzQ2Nr5j7EQ9NXvArFigdt6A9wT0DGY+wXg/5JrwCrsYvr2NutkZ6RcHrCTdTKVSl2Kx2GcqNojYQRHdJ5ZsFk61ksnkq/b29mudnZ2dkg5JOpDJZI60trZeJxRTc3PzI0m7Ja0zkgRcBe4D05lMJtrb21sLkEgkpjo6Ogbt7VPAKJC1497YlVBjUzcC9BeBV4BbwEfgizX4Lmi7Z7LApN03BigHllrgBDBeHLCyHowAQ9ZYpTVtoQUL8y3QsQ4Y68RMKdCzINfCtVCzGGNK/3uSiuHLGKPwfIPia80z/NW0Vunlf1WHgXbKf+C/ASpIoFfSBX8F/gpFYTclMQyvQwAAAABJRU5ErkJggg==`;

    for(let n = 0; n < pages.length; n++){
        const _latLng = {lat: pages[n].lat, lng: pages[n].lon};

        if (_dupMarkers[JSON.stringify(_latLng)]){
            // Should probably use pageid instead of coordinates.
            continue;
        }

        _dupMarkers[JSON.stringify(_latLng)] = true;

        const marker1 = new google.maps.Marker({
            map: map,
            icon: image,
            label: _label,
        });
        marker1.state = null;        

        _markers.push(marker1);

        marker1.addListener('click', (e)=>{
            if (marker1.state == null){
                marker1.setIcon(altImage);
                iwSeenCheck.checked = true;
                marker1.state = false; 
            }

            if (document.getElementById(`wikiXplore_body_${n}`)){
                infowindow1.close();
                return;
            }

            infowindow1.open({
                map: map,
                anchor: marker1,
            });
        });

        const infowindow1 = new google.maps.InfoWindow({
                map: map,
                anchor: marker1,
        });

        marker1.setPosition(_latLng);

        const iwBody = document.createElement('div');
        iwBody.style.cssText = `font-size: 1.2em;`;
        iwBody.id = `wikiXplore_body_${n}`;
        iwBody.innerHTML = ` 
            <div style="color:grey;">WikiXplore Helper Script</span></div>
            </br>
            <div style="color:grey;">title: <span style="color:black;">${pages[n].title}</span></div>
            <a style="color:grey;" href="https://en.wikipedia.org/?curid=${pages[n].pageid}" target="_blank"  >Link to wiki article</a>
            </br>
            </br>
            <div style="color:grey;">dist:  <span style="color:black;"> ${pages[n].dist}</span></div>
            <div style="color:grey;">lat:  <span style="color:black;"> ${pages[n].lat}</span></div>
            <div style="color:grey;">lon:  <span style="color:black;"> ${pages[n].lon}</span></div>
            <div style="color:grey;">ns:  <span style="color:black;"> ${pages[n].ns}</span></div>
            <div style="color:grey;">pageid:  <span style="color:black;"> ${pages[n].pageid}</span></div>
            <div style="color:grey;">primary:  <span style="color:black;"> ${pages[n].primary}</span></div>
        `;
        
        const iwSeenCheck = document.createElement('input');
        iwSeenCheck.style.cssText = `margin-top: 1em; margin-right: 1em;`;
        iwSeenCheck.id = `_seen_${n}`;
        iwSeenCheck.type = 'checkbox';
        iwSeenCheck.addEventListener('click', (e)=>{
            if (marker1.state == false || marker1.state === null){
                marker1.setIcon(image);
                marker1.state = true; 
            } else {
                marker1.setIcon(altImage);
                marker1.state = false; 
            }
        });
        iwBody.appendChild(iwSeenCheck);

        const iwSeenCheckLabel = document.createElement('label');
        iwSeenCheckLabel.style.cssText = `color:grey; margin-top: 1em;`;
        iwSeenCheckLabel.innerText = "Location is done.";
        iwSeenCheckLabel.setAttribute('for', `_seen_${n}`);
        iwBody.appendChild(iwSeenCheckLabel);

        const getImageDiv = document.createElement('div');
        getImageDiv.style.cssText = `color:grey; margin-top: 1em;cursor: pointer;`;
        getImageDiv.innerHTML = "Show an image from page.";
        getImageDiv.addEventListener('click', async ()=>{
            const req = await getWikiArticleImage(pages[n].pageid);
            console.log(req)
            if (!req[pages[n].pageid]?.thumbnail?.source) {

                getImageDiv.innerHTML= `Check link to article for images.`;
                return;
            }

            const img = document.createElement('img');
            img.src =req[pages[n].pageid].thumbnail.source.replace("50px", "300px");
            getImageDiv.innerHTML = '';
            getImageDiv.appendChild(img) 
        });
        iwBody.appendChild(getImageDiv);
//        infowindow1.setContent(`<div id="wikiXplore_body_${n}" style="font-size: 1.2em;">
//            <div style="color:grey;">WikiXplore Helper Script</span></div>
//            </br>
//            <div style="color:grey;">title: <span style="color:black;">${pages[n].title}</span></div>
//            <a style="color:grey;" href="https://en.wikipedia.org/?curid=${pages[n].pageid}" target="_blank"  >Link to wiki article</a>
//            </br>
//            </br>
//            <div style="color:grey;">dist:  <span style="color:black;"> ${pages[n].dist}</span></div>
//            <div style="color:grey;">lat:  <span style="color:black;"> ${pages[n].lat}</span></div>
//            <div style="color:grey;">lon:  <span style="color:black;"> ${pages[n].lon}</span></div>
//            <div style="color:grey;">ns:  <span style="color:black;"> ${pages[n].ns}</span></div>
//            <div style="color:grey;">pageid:  <span style="color:black;"> ${pages[n].pageid}</span></div>
//            <div style="color:grey;">primary:  <span style="color:black;"> ${pages[n].primary}</span></div>
//        <div>`);
        infowindow1.setContent(iwBody);
        infowindow1.close();
    }    
}

function showAlert(){
    let p = new window.Sweetalert2({
    html: `
        <div>WikiXplore tools</div>

        <div>
            Paste JSON locations here: 
        </div>

        <textarea id="_jsonLocs" rows="4" cols="50" placeholder="Export JSON locations to the clipboard and paste here."></textarea>

        <div>
            <button type="button" id="checkDistBtn" disabled class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Distance check</button>
            <button type="button" id="doDistCheckBtn" class="swal2-confirm swal2-styled" aria-label="" style="display: none;">Start distance check</button>
        </div>

        <div id="_runCheck" style="display:none;">
            <div>
                Select distance from Wiki page (meters): <input type="number" id="_distance" value="100">
            </div>
            <div>
                Remove duplicate Wiki pages: <input type="checkbox" id="_dups">
            </div>

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
        </div>

        <div>
            <button type="button" id="_delMarkersBtn" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Delete Wiki markers.</button>
        </div> 
        
        <div>
            <input style="display: none;" type="number" id="_currentNum" value="0">
        </div>

        <div id="_sv" style="width: 100%;">
            <button type="button" id="_showSV" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Show streetview and wiki pages.</button>
        </div>

        <div id="_viewCont" style="width: 100%; height: fit-content; display: none;">
            <button type="button" id="_prevLoc" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Prev</button>
            <button type="button" id="_saveLocBtn" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Save Location</button>
            <button type="button" id="_nextLoc" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Next</button>
            <div>
                <iframe id="_iframe"></iframe>
            </div>

            <textarea style="margin-top: 1em;" id="_savedLocs" rows="4" cols="50"placeholder="Saved locations will be saved here in JSON format."></textarea>
        </div>

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
    const delMarkersBtn = document.getElementById('_delMarkersBtn');
    const jsonInput = document.getElementById('_jsonLocs');
    const dupta = document.getElementById('_duplicateLocs');
    const regta = document.getElementById('_rejectedLocs');
    const filtta = document.getElementById('_filteredLocs');
    const locNumber = document.getElementById('_locNum');
    const checkDupsBox = document.getElementById('_dups');
    const checkDistBtn =document.getElementById('checkDistBtn'); 
    const doDistCheckBtn =document.getElementById('doDistCheckBtn'); 
    const runCheckContainer =document.getElementById('_runCheck'); 
    const showSV =document.getElementById('_showSV'); 
    const viewCont =document.getElementById('_viewCont'); 
    const iframe =document.getElementById('_iframe'); 
    const currentNum =document.getElementById('_currentNum'); 
    
    
    delMarkersBtn.addEventListener('click', ()=>{
        _markers.forEach(m => m.setMap(null));
        _markers = [];
        _dupMarkers = {};
    });

    checkDistBtn.addEventListener('click', ()=>{
        checkDistBtn.style.display = "none";
        doDistCheckBtn.style.display = "";
        runCheckContainer.style.display = "";
    });
    checkDistBtn.disabled = false;
    
    doDistCheckBtn.addEventListener('click', doDistCheck);
    function doDistCheck(e){
        if (jsonInput.value == ""){
            alert("Script needs JSON locations to continue.");
            return;
        } 

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
            const loc = jsonObj.customCoordinates[n];
            const latLng = {lat: loc.lat, lng: loc.lng};

            setTimeout(async()=>{
      //          let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=geosearch&gscoord=${latLng.lat}|${latLng.lng}&gsradius=10000&gslimit=1&format=json`;

      //          locNumber.innerText = n + 1;

      //          fetch(url)
      //              .then(function(response){return response.json();})
      //              .then(function(response) { 
      //              nn += 1;

      //              let pages = response.query.geosearch;
      //              if (pages.length == 0) return;

                   if (!document.getElementById('doDistCheckBtn')) return; // Make sure button is in DOM aka the alert is open.

                   locNumber.innerText = `${(n + 1)} / ${jsonObj.customCoordinates.length}`;

                    let pages = await getWikiArticles(latLng, 10000, 1);

                    nn += 1; 

                    if (!pages) return;

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
              //  });
                
              
            }, time);

            time += 250;
        }

        function fillTextAreas(){
            filtta.innerHTML = JSON.stringify(filtObj);
            regta.innerHTML = JSON.stringify(regObj);
            dupta.innerHTML = JSON.stringify(dupObj);
        }

    }
    
    showSV.addEventListener('click', ()=>{
        if (jsonInput.value == ""){
            alert("Script needs JSON locations to continue.");
            return;
        } 
        
        let _date = 0; 

        currentNum.style.display = '';

        currentNum.addEventListener('change', (e)=>{
            if (currentNum.value > jsonObj.customCoordinates.length){
                currentNum.value = jsonObj.customCoordinates.length;
            }

            if (currentNum.value < 1){
                currentNum.value = 1;
            }

            n = currentNum.value-1;

            updateSVandIframe(n);
        });

        const _sv = document.getElementById("_sv");
        _sv.style.height = "35vh";
        const panorama = new google.maps.StreetViewPanorama(
            _sv,
            {
                pov: { heading: 165, pitch: 0 },
                zoom: 1,
            },
        );
        
        viewCont.style.display = "";

        const filtObj = {"name":editor.map.name,"customCoordinates":[],"extra":{"tags":{},"infoCoordinates":[]}};
        const dupObj = {"name":editor.map.name,"customCoordinates":[],"extra":{"tags":{},"infoCoordinates":[]}};
        const regObj = {"name":editor.map.name,"customCoordinates":[],"extra":{"tags":{},"infoCoordinates":[]}};
        const dupsObj = {};
        let pages = [{}];

        const jsonObj = JSON.parse(jsonInput.value);
        
        let n = 0;

        updateSVandIframe(0);

        document.getElementById('_prevLoc').addEventListener('click', ()=>{
            n -= 1;
            if (n < 0){
                n = jsonObj.customCoordinates.length-1;
            }
            updateSVandIframe(n);
        });

        document.getElementById('_nextLoc').addEventListener('click', ()=>{
            n += 1;
            if (n >= jsonObj.customCoordinates.length){
                n = 0;
            }

            updateSVandIframe(n);
        });
        
        const saveObj = {"name":editor.map.name,"customCoordinates":[],"extra":{"tags":{},"infoCoordinates":[]}};

        document.getElementById('_saveLocBtn').addEventListener('click', ()=>{
            saveObj.customCoordinates.push(jsonObj.customCoordinates[n]);
            
            const savedLocsTA = document.getElementById('_savedLocs');
            savedLocsTA.innerHTML = JSON.stringify(saveObj);

            let msg = prompt("Message to display on marker for this location.");
            makeMarkersFromPages(null, pages, "ignoreDups === true", "https://maps.gstatic.com/mapfiles/ms2/micons/flag.png","https://maps.gstatic.com/mapfiles/markers2/icon_green.png", msg );
        });
        
        let timer = null;

        async function updateSVandIframe(){

            if (Date.now() - _date < 500) {
                currentNum.value = n+1;
                _date = Date.now();
                clearTimeout(timer);
                timer = setTimeout(updateSVandIframe, 500);
                return;
            }

            _date = Date.now();

            currentNum.value = n+1;
            
            let loc = jsonObj.customCoordinates[n];
            let latLng = {lat: loc.lat, lng: loc.lng};
            panorama.setPosition(latLng);
            panorama.setPov({ heading: loc.heading, pitch: loc.pitch});
            
            pages = await getWikiArticles(latLng, 1000, 1);

            if (!pages) return;
            
            let cc = 'en';
            iframe.src = `https://${cc}.wikipedia.org/?curid=${pages[0].pageid}`;

            iframe.style.width = "100%";
            iframe.style.height = "500px";
        } 
    });
    
}

async function getWikiArticles(ll, rad, limit){
    // Geosearch api: https://www.mediawiki.org/wiki/API:Geosearch
    // Use generator to get thumbnails.
    let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=geosearch&gscoord=${ll.lat}|${ll.lng}&gsradius=${rad}&gslimit=${limit}&format=json`;

    console.log(url)

    return await fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {

            let pages = response.query.geosearch;
            if (pages.length == 0) null;
            return pages;
        }).catch(function (error) { console.log(error); });
}

async function getWikiArticleImage(pageid){
    let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&pageids=${pageid}&prop=pageimages&format=json`;
    return await fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) {

            let pages = response.query.pages;
            if (pages.length == 0) null;
            return pages;
        }).catch(function (error) { console.log(error); });
}
