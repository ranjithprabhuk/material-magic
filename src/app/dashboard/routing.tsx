import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export const NestedView = ({ match }: any) => {
  return (
    <div>
      <Link to={`${match.url}/info`}>Info - </Link>
      <Link to={`${match.url}/about`}>About - </Link>
      <Link to={`${match.url}/contacts`}>Contact</Link>
      <Switch>
        <Route exact path={match.url} render={() => <h3>Please select a sectionjjj:</h3>} />
        <Route path={`${match.url}/:sectionName`} component={SubView} />
      </Switch>
    </div>
  );
};

const SubView = ({ match }: any) => (
  <div>
    <h3>Section: {match.params.sectionName}</h3>
  </div>
);
