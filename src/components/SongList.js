import React, {useState} from 'react';
import NewSongForm from './NewSongForm';
import uuid from 'uuid/v1';

const SongList = () => {

    const [songs, setSongs] = useState([
        {title: "Boulevard of broken dreams", id:1},
        {title: "Aurora Dreams", id:2},
        {title: "Charlie Brown", id:3}
    ]);

    const addSong = (title) => 
    {
        setSongs([...songs, {title, id:uuid()}]);
    }

    return (
        <div className="song-list">
                <ul>
                    {songs.map((song) => {
                        return(
                            <li key={song.id}>{song.title}</li>
                        );
                    })}
                </ul>
                <NewSongForm 
                    addSong = {addSong}/>
            </div>
    ); //end of return()
} //end of SongList func comp

export default SongList;