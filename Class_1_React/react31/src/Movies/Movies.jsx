const Movies = () => {
    let movie_name = "War-2";
    let actor = "HR";
    let actress = "KA";
    let war_image = 'https://www.99notes.in/wp-content/uploads/2025/03/world-war-2.jpg';

    return (
        <div>
            <h2>Movies Camp</h2>
            <h3>Movie Name: {movie_name}</h3>
            <h4>Actor Name: {actor}</h4>
            <h4>Actress Name: {actress}</h4>
            <img src={war_image} alt="World War 2" width="300" />
        </div>
    );
};

export default Movies;
