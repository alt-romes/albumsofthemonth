var app = {
    model: {
    },
    view: {
        init: function () {
            
            var previousAlbunsEl = document.getElementById("previous-albums");
            previousAlbunsEl.innerHTML = ""
            for(var i=app.model.previous.length-1; i>=0; i--) {
                var timeframe;
                if (app.model.previous[i].month.toLowerCase()==app.model.current.month.toLowerCase() 
                        && app.model.previous[i].year == app.model.current.year)
                    timeframe = "this month"
                else
                    timeframe = ""
                
                if (i+1<app.model.previous.length 
                        && app.model.previous[i+1].month.toLowerCase()==app.model.previous[i].month.toLowerCase() 
                        && app.model.previous[i+1].year == app.model.previous[i].year)
                    timeframe = "";
                else
                    timeframe = `${app.model.previous[i].month.toLowerCase()} ${app.model.previous[i].year}` 

                var timeframehtml = "";
                if (timeframe!="")
                    timeframehtml = `<nav class="level is-mobile timeframe">
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <p>${timeframe}</p>
                                            </div>
                                        </div>
                                    </nav>`
                previousAlbunsEl.innerHTML += ` 
                        ${timeframehtml}
                        <nav class="level i-album">

							<div class="level-left">
							    <div class="level-item has-text-left">
								<img src="${app.model.previous[i].cover}" class="figure i-a-f">
								</img>
							    </div>
							</div>

                            <p class="level-item"><strong>${app.model.previous[i].name}</strong></p>

                            <div class="level-right">
                                <p class="level-item"><em>${app.model.previous[i].artist}</em></p>
                            </div>

                        </nav> `
            }
            document.getElementById("current-album").innerHTML = `
                                                                <div class="column is-5 is-">
									<figure class="post image">
									    <img src="${app.model.current.cover}">
									    </img>
									</figure>
                                                                </div>
                                                                <div class="column is-8 meta">
                                                                    <br>

                                                                    <div class="subtitle is-4 is-size-5-mobile meta-album">
                                                                        <p>${app.model.current.name}</p>
                                                                    </div>

                                                                    <div class="subtitle is-5 meta-artist is-size-6-mobile">
                                                                        <em>${app.model.current.artist}</em>
                                                                    </div>
                                                                    <div class="subtitle is-7 meta-week has-text-centered is-size-8-mobile">
                                                                        <b>#${app.model.previous.length}</b>
                                                                    </div>
                                                                </div>`
    }
    },
    controller: {
	loadJSON: function (callback) {

	    var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
	    xobj.open('GET', 'albums.json', true);
	    xobj.onreadystatechange = function () {
		  if (xobj.readyState == 4 && xobj.status == "200") {
		    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
		    callback(xobj.responseText);
		  }
	    };
	    xobj.send(null);
	},
	start: function () {
		this.loadJSON((r) => {
			app.model = JSON.parse(r);
			app.view.init();
		});	
        }
    }
}

app.controller.start();
