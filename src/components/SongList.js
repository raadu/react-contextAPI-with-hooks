import React, {useState, useEffect} from 'react';
import NewSongForm from './NewSongForm';
import uuid from 'uuid/v1';

const SongList = () => {

    const [songs, setSongs] = useState([
        {title: "Boulevard of broken dreams", id:1},
        {title: "Aurora Dreams", id:2},
        {title: "Charlie Brown", id:3}
    ]);
    const [age, setAge] = useState(20);

    const addSong = (title) => 
    {
        setSongs([...songs, {title, id:uuid()}]);
    }

    useEffect(()=> {
       console.log("use effect hooks",songs); 
    }, [songs]);

    useEffect(()=> {
        console.log("use effect hooks",age); 
     }, [age]);

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
                <button onClick={()=>setAge(age+1)}>
                    Add 1 to age: {age}
                </button>
            </div>
    ); //end of return()
} //end of SongList func comp

export default SongList;