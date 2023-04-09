import '../styles/playlist-page.scss'
import { createSongItem } from './song-item';

fetch("json/sampleData.json")
    .then((data) => data.json())
    .then((songs) => {
        let songsContainer = document.querySelector("#playlist-page .songs .songs__list");
        songs.forEach((song) => {
            let songElement = createSongItem(song);
            songsContainer.appendChild(songElement);
        })

    });