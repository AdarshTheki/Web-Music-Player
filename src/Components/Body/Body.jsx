import React, { useState } from 'react'

export default function Body({query='', spotify}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

      async function fetchPlaylists() {
          setLoading(true);
          try {
              const result = await spotify.getPlaylist(playlistId);
              setPlaylists(result);
          } catch (error) {
              console.error(error);
          } finally {
              setLoading(false);
          }
      }
  
  return (
    <div>
      
    </div>
  )
}
