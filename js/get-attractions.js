var listCities = ["Paris", "Berlin"];
var listattractions = ["attraction1", "attraction2", "attraction3"];

fetch('/data/attractions.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    data.forEach(d => {
        //TODO: Only the user, how to get current userid??
        //   if (d.userid == userid) {
        listCities.forEach(c => {
            var divCity = document.createElement("h3");
            divCity.innerHTML = c;

            mainContainer.appendChild(divCity);
            listattractions.forEach(a => {
                var divAttraction = document.createElement("div");
                divAttraction.innerHTML = d["cities"][c][a]["name"] + ": " + d["cities"][c][a]["visited"];
                mainContainer.appendChild(divAttraction);
                var button = document.createElement("button");
                button.id = c + "_" + d["cities"][c][a]["name"].replaceAll(" ", "");
                button.innerHTML = "Change";
                button.setAttribute(
                    'style',
                    'background-color: blue; color: white; width: 100px; ',
                );
                //TODO: Implement Functionality, that when button is pressed, the visit attribute changes --> JSON File gets overwritten
                button.onclick = function () {
                    alert('here be dragons');
                    return false;
                };
                mainContainer.appendChild(button);
            })
        }
        )

        //  }
    })


    /*  for (var i = 0; i < data.length; i++) {
          var div = document.createElement("div");
          //   div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
          div.innerHTML = data[i]["cities"]["Paris"]["attraction1"]["name"] + ": " + data[i]["cities"]["Paris"]["attraction1"]["visited"];

          mainContainer.appendChild(div);
      }*/
}

//   document.getElementById("testWriting").onclick = function () { myFunction() };
//  const fs = require('fs');
/*  function myFunction(req, res) {
    fs.readFile('data.json', 'utf-8', (err, datastring) => {
    console.log(err);
    let data = JSON.parse(datastring);
    if (!req.session.vis)
        req.session.vis = 1;
    else
        req.session.vis++;
    data.vis = req.session.vis;



    res.render("index.ejs", data);
    data.visit++;
    const datatoString = JSON.stringify(data);
    fs.writeFile('data.json', datatoString, err => {
        if (err) {
            throw err;
        } else {
            console.log('JSON String is saved')
        }
    })
});
    document.getElementById("testWriting").innerHTML = "YOU CLICKED ME!";
}*/