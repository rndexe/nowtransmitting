function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../../lp_json/kn_programme_data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }

document.getElementById('mediator').addEventListener("click",()=>{
    window.open("https://www.eventbrite.com/e/contagion-mediator-led-sessions-registration-145186343261?aff=ebdsoporgprofile")
})


function createPopup(title,subtitle,thumbnail,url){
    const popupcard = document.createElement('a')

    const popup = document.createElement("div")
    popup.className = "popup-exhibit"
    popup.id = "popup"
    popup.href = url;
    var image = document.createElement('img')
    image.src = thumbnail;
    image.style = 'width:33%; border-top-left-radius:10px; border-bottom-left-radius:10px; object-fit: cover;'
    

    // const overlay = document.createElement("div")
    // overlay.style = 'height:100%; z-index:99; width:100%; opacity:0.6; margin:0px; top:0; left:0; position:absolute; background-color:black;'
    // overlay.className = "m-3 w-auto flex flex-row"

    const text = document.createElement("div")
    text.style = "margin-left:10px; margin-top:10px; width:auto;"
    // text.className = "w-2/3 ml-5 mt-3"

    const titleText = document.createElement('p')
    const subtitleText = document.createElement('p')
    const click = document.createElement('p')

    text.appendChild(titleText);
    text.appendChild(subtitleText);
    text.appendChild(click);

    titleText.style = "color:#2d2d2d; z-index:100; overflow-wrap: break-word; font-size:20px; font-weight:bold;"
    titleText.className = "w-full font-baloo"
    titleText.innerText = title;

    subtitleText.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    subtitleText.className = "w-full font-baloo"
    subtitleText.innerText = subtitle;

    click.style = "color:#2d2d2d; font-size:30px; width:min-content; margin-left:auto; position:absolute; bottom:5px;; right:10px;"
    // click.className = "w-min ml-auto absolute bottom-0 right-5 font-trade"
    click.innerHTML = '&#8594;'
    popup.appendChild(image);
    //popup.appendChild(overlay);
    popup.appendChild(text);
    popupcard.appendChild(popup)
    return popupcard
}


function createProgramPopup(title,type,thumbnail,dateText,timeText,url){
    var popupcard = document.createElement('a')

    var popup = document.createElement("div")
    popup.className = "popup-programme"
    popup.id = "popup"
    popup.href = url;
    var image = document.createElement('img')
    image.src = thumbnail;
    image.style = 'width:33%; border-top-left-radius:10px; border-bottom-left-radius:10px; object-fit: cover;'
    
    var text = document.createElement("div")
    text.style = "margin-left:10px; margin-top:10px; width:auto;"
    // text.className = "w-2/3 ml-5 mt-3"

    var titleText = document.createElement('p')
    var typeText = document.createElement('p')
    var date = document.createElement('p')
    var time = document.createElement('p')

    var click = document.createElement('p')

    text.appendChild(titleText);
    text.appendChild(typeText);
    text.appendChild(date);
    text.appendChild(time);

    text.appendChild(click);

    titleText.style = "color:#2d2d2d; z-index:100; overflow-wrap: break-word; font-size:20px; font-weight:bold;"
    titleText.className = "w-full font-trade"
    titleText.innerHTML= title;

    typeText.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    typeText.className = "w-full font-trade"
    switch(type){
        case "KN_LECTURE": typeText.innerText = "ಉಪನ್ಯಾಸ";
        case "KN_FILM SCREENING": typeText.innerText = "ಚಲನ ಚಿತ್ರ ಪ್ರದರ್ಶನ";
        case "KN_WORKSHOP": typeText.innerText = "ಕಾರ್ಯಾಗಾರ";
        case "KN_EVENT": typeText.innerText = "ಕಾರ್ಯಕ್ರಮ";
    }
    //typeText.innerText = type;

    date.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    date.className = "w-full font-trade"
    date.innerText = dateText;

    time.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    time.className = "w-full font-trade"
    time.innerText = timeText;

    click.style = "color:#2d2d2d; font-size:30px; width:min-content; margin-left:auto; position:absolute; bottom:5px;; right:10px;"
    // click.className = "w-min ml-auto absolute bottom-0 right-5 font-trade"
    click.innerHTML = '&#8594;'
    popup.appendChild(image);
    popup.appendChild(text);
    popupcard.appendChild(popup)
    return popupcard
}

var exhibitcards = document.getElementById('exhibit-card')

loadJSON(function(json) {
    var newjson = [
        {
            "title": "ಮ್ಯಾಪಿಂಗ್‌ ಖಾಲೆರಾ: ಎರಡು ನಗರದ ಕಥೆಗಳು",
            "subtitle": "ಖಾಲೆರಾ ಇತಿಹಾಸಗಳ ಅಧ್ಯಯನದ ನಡುವೆ",
            "url": "/kn/exhibits/mapping-cholera/",
            "thumbnail": "/static/img/K_Exhibit_Thumbnail.jpg"
        },
        {
            "title": "ಮಾಲ್‌ವೇರ್‌ ಪ್ರದರ್ಶನಾಲಯ",
            "subtitle": "ಕ್ರಶಿಂಗ್‌ ದಿ 80 ಸ್‌ ಆಂಡ್‌ 90ಸ್‌ ಮಾಲ್ವೇರ್‌ ಪಾರ್ಟಿ",
            "url": "/kn/exhibits/malware-museum/",
            "thumbnail": "/static/img/J_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ವೆಂಡೆಲ್‌ ಸ್ಟಾನ್ಲೇ: ವೈರಾಣು ಇತಿಹಾಸದ ಚಿತ್ರಣ",
            "subtitle": "ಸಾವು ಬದುಕಿನ ನಡುವಣ ವಿಚಿತ್ರ ಸ್ವಭಾವದ ಕುತೂಹಲಕಾರಿ ವೈರಾಣುಗಳು",
            "url": "/kn/exhibits/wendell-stanley/",
            "thumbnail": "/static/img/P_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ಗಾಜಿನ ಕೊಠಡಿ: ತಪ್ಪು ಮಾಹಿತಿ ಸಂಚಿಕೆ",
            "subtitle": "ದಿನನಿತ್ಯದ ತಂತ್ರಜ್ಞಾನದಲ್ಲಿರುವ ನಿಗೂಢತೆಯನ್ನು ಭೇದಿಸುವ ಪರಿ",
            "url": "/kn/exhibits/the-glass-room/",
            "thumbnail": "/static/img/G_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "21ನೇ ಶತಮಾನದಲ್ಲಿ ವ್ಯಾಪನಗಳು",
            "subtitle": "ಹಲವು ವರ್ಷಗಳಿಂದ ಸಾಗಿ ಬಂದಿರುವ ಸೂಕ್ಷ್ಮಾಣುಗಳ ಸತತ ಸಂಶೋಧನೆ",
            "url": "/kn/exhibits/contagion-21st-century/",
            "thumbnail": "/static/img/O_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ಥೇರಿಯಾಕ್‌ | ರೋಗ ನಕ್ಷೆ",
            "subtitle": "ರೋಗಗಳ ಏರಿಳಿತ ಮತ್ತು ಹರಿವನ್ನು ಅಂಕಿತ ಗೊಳಿಸುವ ನಕ್ಷೆ.",
            "url": "/kn/exhibits/theriak/",
            "thumbnail": "/static/img/E_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ಜೀವರೋಧಕಗಳಲ್ಲಿ ಇರುವೆಗಳು",
            "subtitle": "ನಮ್ಮ ರಕ್ಷಣೆಗಾಗಿ ಸೂಕ್ಷ್ಮ ಜೀವಿಗಳು",
            "url": "/kn/exhibits/ant-antibiotics/",
            "thumbnail": "/static/img/F_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ಆಧುನಿಕ ಔಷಧಗಳ ರೂಪು ರೇಖೆ",
            "subtitle": "ಸೂಕ್ಷ್ಮಾಣು ಬ್ಯಾಕ್ಟೀರಿಯಾ ಕಥೆಗಳು – ಪ್ರತಿರೋಧಕಗಳ ಅರಿವು ಇಲ್ಲಿದೆ",
            "url": "/kn/exhibits/moulding-modern-medicine/",
            "thumbnail": "/static/img/N_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ದ್ರವ ಸಂವಾದಗಳು",
            "subtitle": "ಕಳಂಕದ ಹೊರೆ",
            "url": "/kn/exhibits/fluid-dialogues/",
            "thumbnail": "/static/img/M_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ಬಾಂಬೆ ಪ್ಲೇಗ್‌ ಚಿತ್ರಾಕೃತಿ",
            "subtitle": "ಬಾಂಬೆ ಪ್ಲೇಗ್‌ ನ ಪರ್ಯಾಯ ಪರಿಕಲ್ಪನೆ",
            "url": "/kn/exhibits/bombay-plague/",
            "thumbnail": "/static/img/C_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ಬ್ರಿಟಿಷ್‌ ಆಡಳಿತದ ಭಾರತದಲ್ಲಿ ಪ್ಲೇಗ್‌ ನಿಯಂತ್ರಣ",
            "subtitle": "ಪ್ಲೇಗ್‌ ರೋಗ ಪಿಡುಗಿನ ಇತಿಹಾಸದ ದೃಶ್ಯ ಪ್ರತಿಬಿಂಬ",
            "url": "/kn/exhibits/plague-british-india/",
            "thumbnail": "/static/img/A_Exhibit_Thumbnail.jpg"
          },
         {
            "title": "2020 ದೂರ ದೃಷ್ಟಿ",
            "subtitle": "ಮಾಹಿತಿ ಜಾಲ-ಸಮೂಹವನ್ನು ಬಿಡಿಸುವ ಬಗೆ",
            "url": "/kn/exhibits/2020-vision/",
            "thumbnail": "/static/img/B_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ದಿ ಕೆಮೇಲಿಯನ್‌ ಪ್ರಾಜೆಕ್ಟ್‌",
            "subtitle": "ದೂರ ನಿಯಂತ್ರಣ: ಭಾವನೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ವ್ಯಾಪನಗಳು",
            "url": "/kn/exhibits/chameleon-project/",
            "thumbnail": "/static/img/L_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "17 ಪ್ರಕರಣಗಳ ಹೊನಲು",
            "subtitle": "ಅನಿಶ್ಚಿತತೆಯ ನಡುವೆ",
            "url": "/kn/exhibits/cluster-17-cases/",
            "thumbnail": "/static/img/H_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "ಕೋವಿಡ್-19 ‌ಒಳಾಂಗಣ ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶಿ",
            "subtitle": "ವೈರಾಣುವಿನ, ಒಳಾಂಗಣ ಜೀವನ",
            "url": "/kn/exhibits/indoor-safety-guidelines/",
            "thumbnail": "/static/img/I_Exhibit_Thumbnail.jpg"
          },
        {
          "title": "ಜಗತ್ತು ನಕ್ಕು- ನಲಿಯುವ ತಾಣವಾಗಿದ್ದಾಗ",
          "subtitle": "ಜಾಗತಿಕ ಅನುಭವದ ಪ್ರಣಾಲಿಕೆಯನ್ನು ಪತ್ತೆ ಮಾಡುವ ಹಾದಿ",
          "url": "/kn/exhibits/when-world-laugh/",
          "thumbnail": "/static/img/D_Exhibit_Thumbnail.jpg"
        },      
    ];
    network.addEventListener("click",function (params){
       exhibitcards.innerHTML = "";
       document.getElementById("networktext").className = "networktext"
       document.getElementById("canvas-1").className = "networkbg"
       document.getElementById("mynetwork").className = "mynetwork"
       document.getElementById("buttonpath").setAttribute('d','M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z');

       var n = this.getNodeAt(params.pointer.DOM)
       //window.location = json[n-8].url;
       //Once programmes are added, check for 8 < n < 23 here and check for n > 23 again for programmes
       if(n!=undefined){
            if(n>23){                
                var newjs = json.filter((event)=>{
                    //TODO 1
                    //change date here to change each weeks programmes
                    return (new Date(event.date) >= new Date('2021','5','7')) && (new Date(event.date) <= new Date('2021','5','13'))
                });
               // console.log(newjs)

                var pop = createProgramPopup(
                    newjs[n-24].title,
                    newjs[n-24].type.split(",")[0].toUpperCase(),
                    newjs[n-24].thumbnail,
                    newjs[n-24].date,
                    newjs[n-24].time,
                    newjs[n-24].url
                    );

                pop.href = newjs[n-24].url;
                document.getElementById("networktext").className = "networktext blur"
                document.getElementById("canvas-1").className = "networkbg blur"
                document.getElementById("mynetwork").className = "mynetwork blur"
                exhibitcards.appendChild(pop)
                
            }else{
                var pop = createPopup(newjson[n-8].title,newjson[n-8].subtitle,newjson[n-8].thumbnail,newjson[n-8].url);
                pop.href = newjson[n-8].url
                document.getElementById("networktext").className = "networktext blur"
                document.getElementById("canvas-1").className = "networkbg blur"
                document.getElementById("mynetwork").className = "mynetwork blur"
                exhibitcards.appendChild(pop)
            }
       }
      
    })
});


project.currentStyle = {
    fillColor: 'white'
};
var ballPositions = [];

function getVector(radians, length) {
    return new Point({
        // Convert radians to degrees:
        angle: radians * 180 / Math.PI,
        length: length
    });
}

const infobutton = document.getElementById('infobutton');
const legendcard = document.getElementById('legendcard');
const languagebutton = document.getElementById('languagebutton')
infobutton.addEventListener('click',()=>{
    if(legendcard.style.visibility == 'visible'){
        legendcard.style.visibility = 'hidden';
        languagebutton.style.visibility = "visible"

        document.getElementById("networktext").className = "networktext"
        document.getElementById("canvas-1").className = "networkbg"
       document.getElementById("mynetwork").className = "mynetwork"
        document.getElementById('overlay').style.visibility = 'hidden';
        document.getElementById("buttonpath").setAttribute('d','M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z');

    }
    else{
        exhibitcards.innerHTML = "";
        languagebutton.style.visibility = "hidden"
        legendcard.style.visibility = 'visible';
        document.getElementById("networktext").className = "networktext blur"
        document.getElementById("canvas-1").className = "networkbg blur"
        document.getElementById("mynetwork").className = "mynetwork blur"
        document.getElementById('overlay').style.visibility = 'visible';
        document.getElementById("buttonpath").setAttribute('d','M6 18L18 6M6 6l12 12');

    }
})

function metaball(ball1, ball2, v, handle_len_rate, maxDistance) {
    var center1 = ball1.position;
    var center2 = ball2.position;
    var radius1 = ball1.bounds.width / 2;
    var radius2 = ball2.bounds.width / 2;
    var pi2 = Math.PI / 2;
    var d = center1.getDistance(center2);
    var u1, u2;

    if (radius1 == 0 || radius2 == 0)
        return;

    if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
        return;
    } else if (d < radius1 + radius2) { // case circles are overlapping
        u1 = Math.acos((radius1 * radius1 + d * d - radius2 * radius2) /
                (2 * radius1 * d));
        u2 = Math.acos((radius2 * radius2 + d * d - radius1 * radius1) /
                (2 * radius2 * d));
    } else {
        u1 = 0;
        u2 = 0;
    }

    var angle1 = (center2 - center1).getAngleInRadians();
    var angle2 = Math.acos((radius1 - radius2) / d);
    var angle1a = angle1 + u1 + (angle2 - u1) * v;
    var angle1b = angle1 - u1 - (angle2 - u1) * v;
    var angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
    var angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;
    var p1a = center1 + getVector(angle1a, radius1);
    var p1b = center1 + getVector(angle1b, radius1);
    var p2a = center2 + getVector(angle2a, radius2);
    var p2b = center2 + getVector(angle2b, radius2);

    // define handle length by the distance between
    // both ends of the curve to draw
    var totalRadius = (radius1 + radius2);
    var d2 = Math.min(v * handle_len_rate, (p1a - p2a).length / totalRadius);

    // case circles are overlapping:
    d2 *= Math.min(1, d * 2 / (radius1 + radius2));

    radius1 *= d2;
    radius2 *= d2;

    var path = new Path({
        segments: [p1a, p2a, p2b, p1b],
        style: ball1.style,
        closed: true
    });
    var segments = path.segments;
    segments[0].handleOut = getVector(angle1a - pi2, radius1);
    segments[1].handleIn = getVector(angle2a + pi2, radius2);
    segments[2].handleOut = getVector(angle2b - pi2, radius2);
    segments[3].handleIn = getVector(angle1b + pi2, radius1);
    return path;
}


var handle_len_rate = 2.4;
var circlePaths = [];
var radius = 50;
var metaballlength = 150
var connections = new Group();

if(window.outerWidth < window.outerHeight){
    metaballlength = 50;
}

function generateConnections(paths) {
    // Remove the last connection paths:
    connections.children = [];
    for (var i = 0, l = paths.length; i < l; i++) {
        for (var j = i - 1; j >= 0; j--) {
            var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, metaballlength);
            if (path) {
                connections.appendTop(path);
                path.removeOnMove();
            }
        }
    }
}





var DIR = "/static/img/lp_assets/";


var blobSize = 145;
var blobSizeBlue = 130;
var nodeDistance1 = 300;
var nodeDistance2 = 500;
if(window.outerWidth < window.outerHeight){
    blobSize = 250;
    nodeDistance1 = 700;
    nodeDistance2 = 1000;
    blobSizeBlue = 180;
}


var nodes = new vis.DataSet([
    { id: 8,  shape:"circle", opacity:0.9, group: 1,x:1000,y:0, borderWidth: 0,  font:  { size: blobSize, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/2.png", */ label: "  " /*label: "2020 Vision"*/},
    { id: 9,  shape:"circle", opacity:0.9, group: 2,x:700,y:0, borderWidth: 0, font:   { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/9.png", */ label: "  " /*label: "Covid-19 Indoor Safety Toop"*/},
    { id: 10, shape:"circle", opacity:0.9, group: 4,x:600,y:0, borderWidth: 0, font:   { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/12.png",*/ label: "  " /*label: "Chameleon Project"*/},
    { id: 11, shape:"circle", opacity:0.9, group: 2,x:600,y:0, borderWidth: 0, font:   { size: blobSize, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/4.png", */ label: "  " /*label: "When the World Was A Laugh"*/},
    { id: 12, shape:"circle", opacity:0.9, group: 4,x:690,y:5,  borderWidth: 0, font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/13.png",*/ label: "  " /*label: "Fluid Dialogues"*/},
    { id: 13, shape:"circle", opacity:0.9, group: 1,x:900,y:10, borderWidth: 0,  font: { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/7.png", */ label: "  " /*label: "The Glassroom: Misinformation Edition"*/},

    { id: 14, shape:"circle", opacity:0.9, group: 3,x:-400,y:700, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/11.png",*/ label: "  " /*label: "Mapping Cholera"*/},
    { id: 15, shape:"circle", opacity:0.9, group: 4,x:-400,y:650, borderWidth: 0,  font:  { size: blobSize, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/5.png", */ label: "  " /*label: "Theriak Disease Map"*/},
    { id: 16, shape:"circle", opacity:0.9, group: 2,x:-350,y:600, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/10.png",*/ label: "  " /*label: "Malware Museum"*/},
    { id: 17, shape:"circle", opacity:0.9, group: 4,x:-350,y:500, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/14.png",*/ label: "  " /*label: "Alexander Fleming"*/},
    { id: 18, shape:"circle", opacity:0.9, group: 4,x:-300,y:780, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/1.png", */ label: "  " /*label: "Controlling the Plague in British India"*/},

    { id: 19, shape:"circle", opacity:0.9, group: 1, x:2000,y:500, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/8.png", */ label: "  " /*label: "A Cluster of 17 Cases"*/},
    { id: 20, shape:"circle", opacity:0.9, group: 2, x:2140,y:600, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/15.png",*/ label: "  " /*label: "Robert Koch Cholera Map"*/},
    { id: 21, shape:"circle", opacity:0.9, group: 2, x:2500,y:550, borderWidth: 0,  font:  { size: blobSize, color:"#fff" }, color: {border:  "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/16.png",*/ label: "  " /*label: "Crystallizing Viral History"*/},
    { id: 22, shape:"circle", opacity:0.9, group: 1, x:1900,y:700, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/3.png", */ label: "  " /*label: "Drawing the Bombay Plague"*/},
    { id: 23, shape:"circle", opacity:0.9, group: 2, x:2390,y:750, borderWidth: 0,  font:  { size: blobSize,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/6.png", */ label: "  " /*label: "Ants and Antimicrobial Resistance"*/},

    { id: 1, x:850,y:800, fixed:true, shape:"image", image: DIR + 'kn-mapping.svg',       size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Mapping" */},
    { id: 2, x:850,y:800, fixed:true, shape:"image", image: DIR + 'kn-documenting.svg',   size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Documenting"*/},
    { id: 3, x:850,y:800, fixed:true, shape:"image", image: DIR + 'kn-experimenting.svg', size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Experimenting"*/},
    { id: 4, x:850,y:800, fixed:true, shape:"image", image: DIR + 'kn-narrating.svg',     size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Narrating"*/},
]);

var opac = 0;
var exhibitlength = 400;

var newEdges = new vis.DataSet([
    {from: 8, to: 9,   length:nodeDistance1, color:{opacity:opac}},
    {from: 9, to: 10,  length:nodeDistance1, color:{opacity:opac}},
    {from: 10, to: 11, length:nodeDistance1, color:{opacity:opac}},
    {from: 11, to: 12, length:nodeDistance1, color:{opacity:opac}},
    {from: 12, to: 13, length:nodeDistance1, color:{opacity:opac}},
    {from: 13, to: 10, length:nodeDistance1, color:{opacity:opac}},


    {from: 14, to: 15, length:nodeDistance2, color:{opacity:opac}},
    {from: 15, to: 16, length:nodeDistance2, color:{opacity:opac}},
    {from: 16, to: 15, length:nodeDistance2, color:{opacity:opac}},
    {from: 17, to: 18, length:nodeDistance2, color:{opacity:opac}},
    {from: 18, to: 14, length:nodeDistance2, color:{opacity:opac}},
    {from: 16, to: 15, length:nodeDistance1, color:{opacity:opac}},

    
    {from: 19, to: 20, length:nodeDistance1, color:{opacity:opac}},
    {from: 20, to: 21, length:nodeDistance1, color:{opacity:opac}},
    {from: 21, to: 22, length:nodeDistance1, color:{opacity:opac}},
    {from: 22, to: 23, length:nodeDistance1, color:{opacity:opac}},
    {from: 23, to: 19, length:nodeDistance1, color:{opacity:opac}},
    {from: 22, to: 20, length:nodeDistance1, color:{opacity:opac}},


    
    //connections between different bigger blobs

    
    {from: 1, to: 2, length:500, color:{opacity:opac}},
    {from: 2, to: 3, length:500, color:{opacity:opac}},
    {from: 3, to: 4, length:500, color:{opacity:opac}},
    {from: 4, to: 1, length:500, color:{opacity:opac}},
    
]);

//add stuff to check for date here
var d = new Date()
var date = d.getDate()
var month = d.getMonth()
var year = d.getFullYear()

//TODO 2 
// add more nodes here to change the number of programmes for wach week
nodes.add({ id: 24,  shape:"circle", group: 1,x:800,y:1800, borderWidth: 0,  font:  { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 25,  shape:"circle", group: 1,x:-100,y:700,  borderWidth: 0,  font: { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 26,  shape:"circle", group: 1,x:700,y:1550,  borderWidth: 0,  font:    { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 27,  shape:"circle", group: 1,x:1800,y:700, borderWidth: 0,  font:  { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 28,  shape:"circle", group: 1,x:800,y:0,  borderWidth: 0,  font: { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 29,  shape:"circle", group: 1,x:1900,y:600, borderWidth: 0,  font:  { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 30,  shape:"circle", group: 1,x:-200,y:750, borderWidth: 0,  font:  { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 31,  shape:"circle", group: 1,x:600,y:0, borderWidth: 0,  font:  { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 32,  shape:"circle", group: 1,x:800,y:1800, borderWidth: 0,  font:  { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
nodes.add({ id: 33,  shape:"circle", group: 1,x:800,y:1800, borderWidth: 0,  font:  { size: blobSizeBlue, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});



var bgnodes = new vis.DataSet([
    { id: 1, shape:"image", image: DIR + "kn-trigger.svg", size:200, x:800,y:0,group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>TRIGGER</b>"*/},
    { id: 2, shape:"image", image: DIR + "kn-spillover.svg", size:200, x:0,y:800,  group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>SPILL</b>\n<b>OVER</b>"*/},
    { id: 3, shape:"image", image: DIR + "kn-transmission.svg", size:200, x:1600,y:800,  group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>TRANS</b>\n<b>MISSION</b>"*/},
    { id: 4, shape:"image", image: DIR + "kn-hindsight.svg", size:200, x:800,y:800,  group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>HINDSIGHT</b>"*/},
]);


// create an array with edges
var bgedges = new vis.DataSet([
    { from:1, to: 2,   length:1000, color: {opacity: 0} },
    { from:2, to: 4,   length:1000, color: {opacity: 0} },
    { from:4, to: 3,   length:1000, color: {opacity: 0} },
    { from:3, to: 1,   length:1000, color: {opacity: 0} },
    { from:2, to: 3,   length:1500, color: {opacity: 0} },
    
]);



var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: newEdges,
    
};
var options = {
    layout:{
        // randomSeed:2
    },
    nodes:{
        shapeProperties: {
            useBorderWithImage: false,
        },
    },
    interaction: { 
        hover: true,
        zoomView: false,
        dragView:false,
    },
   

    physics: {
        "repulsion": {
        centralGravity: 0.001,
        springLength: 195,
        springConstant: 0.075,
        nodeDistance: 220,
        damping: 1,
        },
        maxVelocity: 0.03,
        minVelocity: 0.001,
        solver: "repulsion"
    }


};
var network = new vis.Network(container, data, options);


var newcontainer = document.getElementById("networktext");
var newdata = {
    nodes: bgnodes,    
    edges:bgedges,        
};
var newoptions = {
    layout:{
        // randomSeed:2
    },
    nodes:{
        shapeProperties: {
            useBorderWithImage: false,
        },
    },
    interaction: { 
        hover: true,
        zoomView: false,
    },
    physics: {
        "repulsion": {
        centralGravity: 0.001,
        springLength: 195,
        springConstant: 0.075,
        nodeDistance: 300,
        damping: 1,
        },
        maxVelocity: 0.0001,
        minVelocity: 0.0001,
        solver: "repulsion"
    }



};
var newnetwork = new vis.Network(newcontainer, newdata, newoptions);


function hideNodes(){
    nodes.update({id: 1, hidden: true});
    nodes.update({id: 2, hidden: true});
    nodes.update({id: 3, hidden: true});
    nodes.update({id: 4, hidden: true});
}

function showStuff(x){
    switch(x){
        case 1: 
            nodes.update({id: 1, hidden: false});
            break;

        case 2: 
            nodes.update({id: 2, hidden: false});
            break;

        case 3: 
            nodes.update({id: 3, hidden: false});
            break;
        
        case 4: 
            nodes.update({id: 4, hidden: false});
            break;
    }
    
    
}

var moving = false;

network.on("hoverNode",function (params){
    network.canvas.body.container.style.cursor = 'pointer'
    hideNodes()
    //showStuff(this.getNodeAt(params.pointer.DOM));
    var id = this.getNodeAt(params.pointer.DOM)
    if(id == 8 || id==19 || id==22 || id==13){
        showStuff(1)
    }else if(id==20 || id==21 || id==16 || id==9 || id==11 || id==23){
        showStuff(2)
    }
    else if(id==14){
        showStuff(3)
    }
    else if(id==17 || id==12 || id==15 || id==18 || id==10){
        showStuff(4)
    }
    if(id>23){
        //TODO 3 
        //change programme node ids here to change subtheme
        if(id == 30){
            showStuff(1)
        }
        if(id == 25 || id == 26 || id == 33){
            showStuff(2)
        }
        else if(id == 27 || id == 29 || id == 31 || id == 32){
            showStuff(3)
        }
        else if(id == 24 || id == 28){
            showStuff(4)
        }

    }
});

network.on("blurNode", function (params) {
    network.canvas.body.container.style.cursor = 'default'
    hideNodes()
});



var blobRadius = 45;
var offset = 10;
if(window.outerWidth < window.outerHeight){
    blobRadius = 15;
    offset = 5;
}

function updater(){
    project.clear()
    var nodeID = [8,10,14,17,19,24,25,27,29,31,33];
    
    ballPositions = [];
    for(const item in nodeID){
        const node = network.getPositions([nodeID[item]])[nodeID[item]]
        const corner = network.canvasToDOM({
            x: node.x,
            y: node.y
        })

        var arr = []
        arr.push(corner.x+offset)
        arr.push(corner.y+offset)
        ballPositions.push(arr)
    }
    
    var circlePaths = [];
    for (var i = 0, l = ballPositions.length; i < l; i++) {
        var circlePath = new Path.Circle({
            center: ballPositions[i],
            radius: blobRadius,
        });
        circlePaths.push(circlePath);
    }

    var connections = new Group();
    function generateConnections(paths) {
        // Remove the last connection paths:
        //connections.children = [];

        for (var i = 0, l = paths.length; i < l; i++) {
            for (var j = i - 1; j >= 0; j--) {
                var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, metaballlength);
                if (path){
                    connections.appendTop(path);
                    path.removeOnMove();
                }
            }
        }
    }
    generateConnections(circlePaths);

}



function onMouseMove(event) {
    updater()
}

network.on("afterDrawing",function(params){
    updater()
})


