import React from 'react';
import styled from 'styled-components';

function Logins() {
    const handleCLick = () => {
        const clientId = "71b1942353e544d0bda653a821cde9fc";
        const redirectURL = "http://localhost:3000/";
        const apiUrl = "http://accounts.spotify.com/authorize"
        const scope = ['user-read-email',
        'user-read-private','user-modify-playback-state',
        'user-read-playback-state',
        'user-read-currently-playing','user-read-recently-played',
        'user-read-playback-position',
        'user-top-read'];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`;
    }
  return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify" />
            <button onClick ={handleCLick}>Connect Spotify</button>
        </Container>
  )
}

export default Logins;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #1db954;
    gap: 5rem;
    img {
        height: 20vh;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;