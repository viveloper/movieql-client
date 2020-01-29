import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from '../queries';
import MovieCard from './MovieCard';

const Home = props => {
  console.log('render Home');
  return (
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return <div>loading</div>;
        if (error) return <div>error</div>;

        return (
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {data.movies.map(movie => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    history={props.history}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Home;
