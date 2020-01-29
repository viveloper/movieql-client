import React from 'react';

const MovieCard = ({ movie, history }) => {
  const onClickView = movieId => {
    history.push(`/details/${movieId}`);
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Thumbnail"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
          <image href={movie.medium_cover_image} width="100%" height="100%" />
        </svg>
        <div className="card-body">
          <p className="card-text">{movie.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => onClickView(movie.id)}
              >
                View
              </button>
            </div>
            <small className="text-muted">{movie.rating}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
