function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const recordName = document.querySelector("main").dataset.record;
const ul = document.querySelector("#playlist");
const url = '/data/playlist.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let record = data.records.find(r => r.title === recordName)

         record.playlist.map(function(song) {
            let li = createNode('li');
            li.innerHTML = song.trackNumber + ' ' + song.title;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
