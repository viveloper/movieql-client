import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from '../queries';
import MovieCard from './MovieCard';

const Details = props => {
  const {
    match: {
      params: { movieId }
    }
  } = props;

  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
      {({ loading, error, data }) => {
        if (loading) return <div>loading</div>;
        if (error) return <div>error</div>;
        return (
          <>
            <section className="jumbotron text-center">
              <div className="container">
                <img src={data.movie.medium_cover_image} alt="..." />
                <h1>{data.movie.title}</h1>
                <p className="lead text-muted">
                  {data.movie.description_intro}
                </p>
                <p>
                  <button className="btn btn-primary my-2">
                    {data.movie.rating}
                  </button>
                  {/* <a href="" className="btn btn-secondary my-2">
                    Secondary action
                  </a> */}
                </p>
              </div>
            </section>

            <div className="album py-5 bg-light">
              <div className="container">
                <div className="text-center mb-5">
                  <h2>Related Movies</h2>
                  <hr />
                </div>
                <div className="row">
                  {data.suggestions.map(suggestionMovie => (
                    <MovieCard
                      key={suggestionMovie.id}
                      movie={suggestionMovie}
                      history={props.history}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};

export default Details;
