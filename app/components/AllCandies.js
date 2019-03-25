import React from 'react';
import { connect } from 'net';
import fetchCandies from '../reducers/index';

export class AllCandies extends React.Component {
  componentDidMount() {
    this.props.fetchCandies();
  }
  render() {
    const { loading, candies } = this.props;

    if (loading) return <div>Loading...</div>;

    return (
      <div>
        {candies.map(candy => {
          return (
            <div key={candy.id}>
              <img src={candy.imageUrl} />
              <h2>{candy.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = state => ({
  loading: state.loading,
  candies: state.candies,
});

const mapDispatch = dispatch => ({
  fetchCandies: () => dispatch(fetchCandies()),
});

export default connect(mapState, mapDispatch);
