import '../styles/playlist-page.scss'

fetch("json/sampleData.json")
    .then((data) => data.json())
    .then((songs) => {
        let songsContainer = document.querySelector("#playlist-page .songs .songs__list");
        songs.forEach((song) => {
            let songElement = createSongItem(song);
            songsContainer.appendChild(songElement);
        })

    });

function createSongMenu() {
    let menuContainer = createElement('div', '', 'song__menu');
    let menu = createElement('div', '', 'menu');
    let menuDot = createElement('div', '', 'menu__dot');

    appendChildren(
        menu,
        menuDot,
        menuDot.cloneNode(),
        menuDot.cloneNode()
    );

    menuContainer.appendChild(menu);

    return menuContainer;
}

function createSongItem(song) {
     
    let songElement = createElement('div', '', 'song');
    let songOrder   = createElement('p', song.order, 'song__name');
    let songMain    = createElement('div', '', 'song__main');

    appendChildren(
        songMain,
        createElement('img', '', '', {
            src: song.album.img["112"]
        }),
        createSongInfoColumn(song.album.name, song.songName)
    );
    
    let authorsColumn = createSongInfoColumn("Authors", song.authors.join(", "));
    authorsColumn.classList.add("author");

    let durationColumn = createSongInfoColumn("Time", song.duration);
    durationColumn.classList.add("duration");

    let menu = createSongMenu();

    appendChildren(
        songElement,
        songOrder,
        songMain,
        authorsColumn,
        durationColumn,
        menu
    );

    return songElement

} 

function createSongInfoColumn(label, data) {
    let column = createElement('div', '', 'song__info');
    appendChildren(
        column,
        createElement('p', label, 'song__ label'),
        createElement('p',  data, 'song__ data')
    )

    return column;
}

function createElement(type, textContent, classList, otherOptions = {}) {
    let el = document.createElement(type);
    el.textContent = textContent;
    el.classList = classList;

    if(Object.keys(otherOptions).length) {
        for(let key in otherOptions) {
            el.setAttribute(key, otherOptions[key]);
        }
    }

    return el;
}

function appendChildren(parent, ...children) {
    children.forEach((childElement) => {
        parent.appendChild(childElement);
    });
}
