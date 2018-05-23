import * as React from 'react';
import * as PropTypes from 'prop-types';
import Counter from '../components/Counter';
import {createRenderer, ShallowRenderer} from 'react-test-renderer/shallow';


import {IAppState} from '../../main/Model';
import {mount, ReactWrapper} from 'enzyme';
import muiTheme from '../../muiTheme';



import {Store} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from '../../main/Module';

const mountWithContext = (node:any):ReactWrapper<any, any> => mount(node, {
  context: { muiTheme: muiTheme },
  childContextTypes: { muiTheme: PropTypes.object },
});

describe('Counter', () => {
  let renderer:ShallowRenderer;
  let store:Store<IAppState>;
  let counterElement:JSX.Element;

  beforeEach(() => {
    store = createStore<IAppState>(
      rootReducer,
      { counterList: { allIds: [1], items: [{id: 1, value: 0, name: 'Name'}] }, routing: {location:null}},
    );
    renderer = createRenderer();
    counterElement = React.createElement(Counter, {id: 1, store: store} as any) ;
  });

  afterEach(() => {
    // empty
  });

  it('should render without crash', () => {
    expect(renderer.render(counterElement)).toMatchSnapshot();
  });

  describe('when', () => {

    let counter:ReactWrapper<any, any>;
    let value:ReactWrapper<any, any>;
    let increment:ReactWrapper<any, any>;
    let decrement:ReactWrapper<any, any>;
    let hoverArea:ReactWrapper<any, any>;
    let getRemove:() => ReactWrapper<any, any>;

    const init = () => {
      counter = mountWithContext(counterElement);
      value = counter.find('[data-t-id="value"]');
      decrement = counter.find('[data-t-id="decrement"]').find('EnhancedButton');
      increment = counter.find('[data-t-id="increment"]').find('EnhancedButton');
      hoverArea = counter.find('[data-t-id="hover-area"]');
      getRemove =  () => counter.find('[data-t-id="remove"]');
    };

    beforeEach(() => {
      init();
    });

    it('clicking increment should increment counter', () => {
      expect(Number(value.text())).toEqual(0);

      increment.simulate('click');
      expect(Number(value.text())).toEqual(1);

      increment.simulate('click');
      expect(Number(value.text())).toEqual(2);

    });

    it('clicking decrement should decrement counter', () => {
      expect(Number(value.text())).toEqual(0);

      decrement.simulate('click');
      expect(Number(value.text())).toEqual(-1);

      decrement.simulate('click');
      expect(Number(value.text())).toEqual(-2);

    });


    it('hovering "hover area" should show remove button', () => {

      expect( getRemove().exists() ).toBeFalsy();
      hoverArea.simulate('mouseenter');
      expect( getRemove().exists() ).toBeTruthy();

    });

  });
});
