// ==UserScript==
// @name         map-making.app nerd/noob script for Unity script
// @description  Customize locations for Geoguessr maps that work with the Unity script. 
// @namespace    Unity script 
// @version      0.3
// @author       echandler 
// @match        https://map-making.app/maps/*
// @grant        unsafeWindow
// @run-at       document-start
// @updateURL    https://github.com/echandler/Geoguessr-Unity-Script-Fork/raw/main/Nerd-Noob%20Map%20Making%20Script/unityNerdScript.user.js
// @copyright    2024 echandler 
// @license      MIT 
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

uniform float theArray[8];
uniform float isNoob;
uniform float transition;

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
        vec4 _theColor = mix(gold, blue, r); 
        vec4 theColor = mix(vec4(texture2DProj(g,a).rgb,f), _theColor, 0.5);

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

    gl_FragColor=vec4(texture2DProj(g,a).rgb,f);
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

    function addCompassStyle() {
        let style = document.createElement('style');
        style.id = 'bintulu_nocompass';
        style.innerHTML = '.compass { display: none } .game-layout__compass { display: none }';
        document.head.appendChild(style);
    }

    addCompassStyle();

    document.addEventListener('keydown', (evt) => {
      if (!evt.repeat && evt.code === 'KeyK' && evt.shiftKey && !evt.altKey && !evt.ctrlKey && !evt.metaKey) {
          let style = document.getElementById('bintulu_nocompass');
          if (!style) {
              addCompassStyle();
          } else {
              style.remove();
          }
      }
   });

window.theArray = "[/*Nw*//*x*/0.40,/*y*/0.30, /*Se*//*x*/0.50, /*y*/0.40]";

        async function initWebGl(program){
            let ell = document.querySelector('[aria-label="Street View"]');
            let eventt;
 //           triggerEvent(ell, "mouseup", eventt);
let _trans = 0;

            let p = setInterval(function(){
                let _theArray = globalGL.getUniformLocation(program, 'theArray');

                if (!_theArray) return;

                let isNoob = globalGL.getUniformLocation(program, 'isNoob');
                let transition = globalGL.getUniformLocation(program, 'transition');

                globalGL.uniform1fv(_theArray, new Float32Array(window.theArray.slice(0,8)));//[/*Nw*//*x*/0.40,/*y*/0.30, /*Se*//*x*/0.50, /*y*/0.40]));
                globalGL.uniform1f(isNoob, window.ignoreUnityNoob ? 0.0 : 1.0);
                
                _trans += 0.1;

                globalGL.uniform1f(transition, Math.sin(_trans));

                //console.log('initwebgl', theArray);

                triggerEvent(ell, "mouseout", eventt);

                //globalGL.flush();
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
}

  unsafeWindow.eval(`(${injected.toString()})()`);
  
  let p = setInterval(() => {
      if (!unsafeWindow.map) return;
      console.log(unsafeWindow.map)
      clearInterval(p);
      doIt();
  }, 500);

  function doIt(){
    let oldPos = {
                lat: 0, 
                lng: 0, 
            };

    unsafeWindow.map.addListener('click', function(e){ function _t() {
            if (!unsafeWindow.streetView.location){
                setTimeout(_t, 10);
                return;
            }
            console.log(unsafeWindow.streetView.location.latLng.lat())

            let lat_lng = {
                lat: unsafeWindow.streetView.location.latLng.lat().toFixed(10),
                lng: unsafeWindow.streetView.location.latLng.lng().toFixed(10),
            };
            
            if (lat_lng.lat === oldPos.lat && lat_lng.lng === oldPos.lng){
                setTimeout(_t, 10);
                return;
            }

            oldPos = lat_lng;

            let locs = unsafeWindow.locations;
             
            for (let n = 0; n < locs.length; n++){
                
                if (locs[n].location.lat.toFixed(10) === lat_lng.lat && locs[n].location.lng.toFixed(10) === lat_lng.lng){
                    console.log(locs[n]);
                    let arr = getDataInTag(locs[n].tags);

                    if (!arr){
                        updateTag(locs[n].tags, [/*Nw*//*x*/"0.30",/*y*/"0.35", /*Se*//*x*/"0.34", /*y*/"0.45", "0.36", "0.35", "0.40", "0.45", "nerd"]) 
                        arr = getDataInTag(locs[n].tags);
                    }

                    unsafeWindow.theArray = arr; 
                    break;
                }
            }
        }
        _t();
    });      
  }
    makeMenu();

    unsafeWindow.ignoreUnityNoob = true;

    function makeMenu(){
        let dropDown = document.createElement("select");
        dropDown.style.cssText = `position: absolute; right: 1em; bottom: 10em; width: 5em;`;
        document.body.appendChild(dropDown);
        
        let options = ["Blue", "Gold"];
        options.forEach((option, idx)=>{
            let opt = document.createElement('option');
            opt.value = idx+1;
            opt.innerText = option;
            dropDown.appendChild(opt);
        });
        
        let checkBox = document.createElement('input');
        checkBox.id = "_checkbox";
        checkBox.type = "checkbox";
        checkBox.style.cssText = `position: absolute; right: 15em; bottom: 10em;`;
        checkBox.addEventListener('change', function(e){
            if (checkBox.checked){
                unsafeWindow.ignoreUnityNoob = false;
            } else {
                unsafeWindow.ignoreUnityNoob = true;
            }
        })
        document.body.appendChild(checkBox);
        
        let checkBoxLabel = document.createElement('label');
        checkBoxLabel.setAttribute('for', checkBox.id);
        checkBoxLabel.style.cssText = `position: absolute; right: 5.5em; bottom: 8em; width: 6em;`;
        checkBoxLabel.innerText = "Noob mode";

        document.body.appendChild(checkBoxLabel);

        let textInput = document.createElement('input');
        textInput.style.cssText = "position: absolute; right: 7em; bottom: 7.5em; width: 11.5em;"
        textInput.placeholder = "Paste data here..."
        document.body.appendChild(textInput);

        let btnConvert = document.createElement("button");
        btnConvert.innerText = 'Convert';
        btnConvert.style.cssText = "position: absolute; right: 1em; bottom: 7.5em;"
        btnConvert.addEventListener('click', (evt)=>{
            let json = JSON.parse(textInput.value);
            let coords = json.customCoordinates;

            for (let n = 0; n < coords.length; n++){
                let lat = coords[n].lat.toFixed(14).split('');
                let lng = coords[n].lng.toFixed(14).split('');

                let tags = coords[n].extra.tags;
                const data = getDataInTag(tags);
                
                if (!data) continue;
                
                let len = data.length - 1;

                lng[lng.length -1 - 0] = data[len-1].split('')[3];
                lng[lng.length -1 - 1] = data[len-1].split('')[2];
                lng[lng.length -1 - 2] = data[len-2].split('')[3];
                lng[lng.length -1 - 3] = data[len-2].split('')[2];
                lng[lng.length -1 - 4] = data[len-3].split('')[3];
                lng[lng.length -1 - 5] = data[len-3].split('')[2];
                lng[lng.length -1 - 6] = data[len-4].split('')[3];
                lng[lng.length -1 - 7] = data[len-4].split('')[2];
                
                lat[lat.length -1 - 0] = data[len-5].split('')[3];
                lat[lat.length -1 - 1] = data[len-5].split('')[2];
                lat[lat.length -1 - 2] = data[len-6].split('')[3];
                lat[lat.length -1 - 3] = data[len-6].split('')[2];
                lat[lat.length -1 - 4] = data[len-7].split('')[3];
                lat[lat.length -1 - 5] = data[len-7].split('')[2];
                lat[lat.length -1 - 6] = data[len-8].split('')[3];
                lat[lat.length -1 - 7] = data[len-8].split('')[2];
                
                coords[n].lng = parseFloat(lng.join(''));
                coords[n].lat = parseFloat(lat.join(''));

            }
            
            download(json.name + " modified.json", JSON.stringify(json));
        })
        document.body.appendChild(btnConvert);

        let btnLeft = document.createElement("button");
        btnLeft.innerText = "Left";
        btnLeft.style.cssText = "position:absolute; right: 14.5em; bottom: 5em; width: 4em;"
        //btnLeft.addEventListener('click', (evt)=>{
        btnEvents(btnLeft, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 0 : 4;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] -= 0.01;
            if (ta[idx] < 0)unsafeWindow.theArray[idx] = 0.99;

            ta[idx+2] -= 0.01;
            if (ta[idx+2] < 0)unsafeWindow.theArray[idx+2] = 0.99;

            updateCurrentTag(); 
        });

        document.body.appendChild(btnLeft);

        let btnRight = document.createElement("button");
        btnRight.innerText = "Right";
        btnRight.style.cssText = "position:absolute; right: 10em; bottom: 5em; width: 4em;"
        //btnRight.addEventListener('click', (evt)=>{
        btnEvents(btnRight, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 0 : 4;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] += 0.01;
            if (ta[idx] >= 1.0) unsafeWindow.theArray[idx] = 0.0;

            ta[idx+2] += 0.01;
            if (ta[idx+2] >= 1.0) unsafeWindow.theArray[idx+2] = 0.00;

            updateCurrentTag(); 
        });

        document.body.appendChild(btnRight);

        let btnUp = document.createElement("button");
        btnUp.innerText = "Up";
        btnUp.style.cssText = "position:absolute; right: 5.5em; bottom: 5em; width: 4em;"
        //btnUp.addEventListener('click', (evt)=>{
        btnEvents(btnUp, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 1 : 5;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] -= 0.01;
            ta[idx+2] -= 0.01;

            updateCurrentTag(); 
        });

        document.body.appendChild(btnUp);

        let btnDown = document.createElement("button");
        btnDown.innerText = "Down";
        btnDown.style.cssText = "position:absolute; right: 1em; bottom: 5em; width: 4em;"
        //btnDown.addEventListener('click', 
        btnEvents(btnDown, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 1 : 5;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] += 0.01;
            ta[idx+2] += 0.01;

            updateCurrentTag(); 
        });

        document.body.appendChild(btnDown);

        let btnHeightUp = document.createElement("button");
        btnHeightUp.innerText = "H. Up";
        btnHeightUp.style.cssText = "position:absolute; right: 10em; bottom: 3em; width: 6em;"
        //btnHeightUp.addEventListener('click', (evt)=>{
        btnEvents(btnHeightUp, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 1 : 5;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] -= 0.01;

            updateCurrentTag(); 
        });

        document.body.appendChild(btnHeightUp);

        let btnHeightDown = document.createElement("button");
        btnHeightDown.innerText = "H. Down";
        btnHeightDown.style.cssText = "position:absolute; right: 3em; bottom: 3em; width: 6em;"
        //btnHeightDown.addEventListener('click', (evt)=>{
        btnEvents(btnHeightDown, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 1 : 5;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] += 0.01;

            updateCurrentTag(); 
        });

        document.body.appendChild(btnHeightDown);

        let btnWidthUp = document.createElement("button");
        btnWidthUp.innerText = "W. In";
        btnWidthUp.style.cssText = "position:absolute; right: 10em; bottom: 1em; width: 6em;"
        //btnWidthUp.addEventListener('click', (evt)=>{
        btnEvents(btnWidthUp, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 2 : 6;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] -= 0.01;
            if(ta[idx] < 0) ta[idx] = 0.99;
            updateCurrentTag(); 
        });

        document.body.appendChild(btnWidthUp);

        let btnWidthDown = document.createElement("button");
        btnWidthDown.innerText = "W. Out";
        btnWidthDown.style.cssText = "position:absolute; right: 3em; bottom: 1em; width: 6em;"
        //btnWidthDown.addEventListener('click', (evt)=>{
        btnEvents(btnWidthDown, (evt)=>{
            const ta = unsafeWindow.theArray;
            const idx = dropDown.value === '1'? 2 : 6;

            ta.forEach((el,idx,arr) => { if (el !== "nerd") arr[idx] = parseFloat(el); });

            ta[idx] += 0.01;
            if(ta[idx] >= 1.0) ta[idx] = 0.0;

            updateCurrentTag(); 
        });

        document.body.appendChild(btnWidthDown);
    }
    
    let mouseRepeatRate = null;
    let mouseDelay = null;

    function btnEvents(_btn, _event){
        _btn.addEventListener('mousedown', function(e){
            mouseDelay = setTimeout(()=>{
                mouseRepeatRate = setInterval(function(){
                    _event(e);
                }, 50);
            }, 300);
        });
        _btn.addEventListener('mouseup', function(e){
            clearTimeout(mouseDelay);
            clearInterval(mouseRepeatRate);
            _event(e);
        });
    }

    function updateCurrentTag(){
        let loc = getLocation();
        if (!loc){
            clearTimeout(mouseDelay);
            clearInterval(mouseRepeatRate);
            alert("Can't find Location. Has the location been saved?");
            return;
        }

        unsafeWindow.theArray.forEach((el,idx,arr) => { 
            if (el === "nerd") return;
            el = +el;
            arr[idx] = el.toFixed(2); 
        });
        if (!loc.tags){
            clearTimeout(mouseDelay);
            clearInterval(mouseRepeatRate);
            alert("Can't find tags. Has the location been saved?");
            return;
        }
        updateTag(loc.tags, unsafeWindow.theArray);
    }

    function getLocation(){
            let lat_lng = {
                lat: unsafeWindow.streetView.location.latLng.lat(),
                lng: unsafeWindow.streetView.location.latLng.lng(),
            };
            let locs = unsafeWindow.locations;
            for (let n = 0; n < locs.length; n++){
                if (locs[n].location.lat === lat_lng.lat && locs[n].location.lng === lat_lng.lng){
                    console.log(locs[n]);
                    return locs[n];
                    break;
                }
            }
         return null;
    }

    function updateTag(tags, value){
        for (let n = 0; n < tags.length; n++){
            try {
                let json = JSON.parse(tags[n]);
                if (json[json.length-1] === 'nerd'){
                    tags[n] = JSON.stringify(value); 
                    return;
                }
            } catch(e){
               continue; 
            } 
        }
        
        // Didn't find the nerd.
        tags.push(JSON.stringify(value));
    }
    
    function getDataInTag(tags){
        let ret = tags.find( el =>{
            try {
                let json = JSON.parse(el);
                if (json[json.length-1] === 'nerd'){
                    return true;
                }
            } catch(e){
                return false;
            } 
        });
        
        if (!ret) return null;

        return JSON.parse(ret);
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
})();
