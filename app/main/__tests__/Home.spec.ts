import * as React from 'react';
import Home from '../components/Home';
import {createRenderer, ShallowRenderer} from 'react-test-renderer/shallow';


describe('Home', () => {
  let renderer:ShallowRenderer;
  beforeEach(() => {
    renderer = createRenderer();
  });

  afterEach(() => {
    // empty
  });

  it('should render without crashing', () => {
    const home = renderer.render( React.createElement(Home) );
    expect(home).toMatchSnapshot();
  });
});
