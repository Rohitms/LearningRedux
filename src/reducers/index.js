// Reducer
import { combineReducers } from 'redux'

const songsReducer = () => {
return [
  {title:'No Scrubs', duration: '4:05'},
  {title:'Macarina', duration:'5:02'},
  {title:'tada', duration: '3:26'},
  {title:'bla bla', duration: '2:55'}
]
}

const selectedSongReducer = (selectedSong=null , action) =>{
  if (action.type === 'SONG_SELCTED'){
    return action.payload
  }
  return selectedSong
}


export default  combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
