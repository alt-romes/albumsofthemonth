var app = {
    model: {
    },
    view: {
        init: function () {
            document.getElementById("current-album").innerHTML = `<div class="column is-5">
                                                                    <img class="post image" src="${app.model.current.cover}">
                                                                        <div class="post-container"></div>
                                                                    </img>
                                                                </div>
                                                                <div class="column is-8 meta">
                                                                    <br>

                                                                    <div class="subtitle is-4 meta-album">
                                                                        <p>${app.model.current.name}</p>
                                                                    </div>

                                                                    <div class="subtitle is-5 meta-artist">
                                                                        <em>${app.model.current.artist}</em>
                                                                    </div>
                                                                    <div class="subtitle is-7 meta-week has-text-centered">
                                                                        <b>#${app.model.current.week}</b>
                                                                    </div>
                                                                </div>`
            var previousAlbunsEl = document.getElementById("previous-albums");
            previousAlbunsEl.innerHTML = ""
            for(var i=0; i<app.model.previous.length; i++) {
                previousAlbunsEl.innerHTML += `<nav class="level is-mobile i-album">
                                                    <div class="level-item">
                                                        <img src="${app.model.previous[i].cover}" class="figure i-a-f">
                                                            <div class="container"></div>
                                                        </img>
                                                    </div>
                                                    <p class="level-item"><strong>${app.model.previous[i].name}</strong></p>
                                                    <p class="level-item"><em>${app.model.previous[i].artist}</em></p>
                                                    <p class="level-item"><strong class="is-size-7">#${app.model.previous[i].week}</strong></p>
                                                </nav>`
            }
    }
    },
    controller: {
        start: function () {
            app.model = albums
            app.view.init();
        }
    }
}

app.controller.start();