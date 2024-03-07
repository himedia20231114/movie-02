import React from 'react';

// 컴포넌트로 값을 전달 : props  
    // poster_path
    // title
    // vote_average

function Movie({title, poster_path, vote_average}) {

    // 영화 정보를 제공 해주는 사이트 URL 
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"; 

    return (
        <div className = "movie-container">
            <img src= {IMG_BASE_URL + poster_path }  alt='영화 포스터' />
            <div className = "movie-info">
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>            
        </div>
    );
}

export default Movie;