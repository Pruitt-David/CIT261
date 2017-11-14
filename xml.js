
function Start() { 
    var key = "410ae816ebfc530cb61e454917f053ff";
    var data = "https://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=" + key;
    var http_request = new XMLHttpRequest();
    var displayName;
    var displayDescription;
    
    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4) {
            try{
                var jsonObject = JSON.parse(http_request.responseText);
                displayName = jsonObject.name;
                displayDescription = jsonObject.weather[0].description;
                document.getElementById("changeMe").innerHTML = displayName + " " + displayDescription;
            }catch (e) {
                console.log(e.toString());
            }    
        }        
    };

    http_request.open("GET", data, true); 
    http_request.send(); 
    }

Start();
