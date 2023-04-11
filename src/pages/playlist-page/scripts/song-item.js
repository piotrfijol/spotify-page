import { appendChildren, createElement } from "../../../global-scripts/scripts/dom";
import heartIcon from "../../../assets/heart.svg";

function createSongMenu() {
    let menuContainer = createElement('div', '', 'song__menu');
    let menu = createElement('div', '', 'menu');
    let menuDot = createElement('div', '', 'menu__dot');
    
    let menuFavorite = createElement('div', '', 'song__ favorite');
    let heartImage = new Image();
    heartImage.src = heartIcon;
    
    menuFavorite.appendChild(
        heartImage
    )

    appendChildren(
        menu,
        menuDot,
        menuDot.cloneNode(),
        menuDot.cloneNode()
    );

    menuContainer.appendChild(menuFavorite);
    menuContainer.appendChild(menu);

    return menuContainer;
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

export function createSongItem(song) {
     
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