
import { Songs } from "./MySongs";

const artists = [];

const getArtist = () => {
    Songs.forEach(song => {
        if (!artists.some(artista => artista.name === song.artists)) {
            artists.push(
                {
                    name: song.artists,
                    imgArtist : song.artistImg
                }
            );
        }
    });
}

getArtist();

export default artists;