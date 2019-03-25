import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import AllCandies from './AllCandies';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag
          <Link to="/">Home</Link>
          <Link to="/candies">All Candies</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <Route exact path="/" component={Home} />
        <Route exact path="/candies" component={AllCandies} />
      </div>
    </Router>
  );
};

export default Root;
