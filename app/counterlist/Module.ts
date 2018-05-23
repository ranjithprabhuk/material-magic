
import { ICounterList, ICounter } from './Model';
import * as _ from 'lodash';

//
// ActionConstants
//
export type CounterListAddItem = 'counterlist/CounterListAddItem';
export const CounterListAddItem: CounterListAddItem = 'counterlist/CounterListAddItem';

export type CounterListRemoveItem = 'counterlist/CounterListRemoveItem';
export const CounterListRemoveItem: CounterListRemoveItem = 'counterlist/CounterListRemoveItem';

export interface ICounterListActionAddItem {
  type: CounterListAddItem;
}
export interface ICounterListActionRemoveItem {
  type: CounterListRemoveItem;
  id: number;
}

export type CounterListAction = ICounterListActionAddItem | ICounterListActionRemoveItem;


export type CounterIncrement = 'counterlist/CounterIncrement';
export const CounterIncrement: CounterIncrement = 'counterlist/CounterIncrement';

export type CounterDecrement = 'counterlist/CounterDecrement';
export const CounterDecrement: CounterDecrement = 'counterlist/CounterDecrement';

export type CounterNameChange = 'counterlist/CounterNameChange';
export const CounterNameChange: CounterNameChange = 'counterlist/CounterNameChange';


export interface ICounterActionIncrement {
  type: CounterIncrement;
  id: number;
}

export interface ICounterActionDecrement {
  type: CounterDecrement;
  id: number;
}

export interface ICounterActionNameChange {
  type: CounterNameChange;
  id: number;
  newName: string;
}

export type CounterAction = ICounterActionIncrement | ICounterActionDecrement | ICounterActionNameChange;


//
// Action creators
//

export function addCounter():ICounterListActionAddItem {
  return {type: CounterListAddItem};
}

export function removeCounter(id:number):ICounterListActionRemoveItem {
  return {type: CounterListRemoveItem, id: id};
}

export function incrementCounter(id:number):ICounterActionIncrement {
  return {type: CounterIncrement, id:id};
}

export function decrementCounter(id:number):ICounterActionDecrement {
  return {type: CounterDecrement, id:id};
}

export function changeCounterName(id:number, newName:string):ICounterActionNameChange {
  return {type: CounterNameChange, id: id, newName: newName };
}


//
// Reducers
//

const initialCounterListState: ICounterList = {
  allIds: [],
  items: [],
};

const initialCounterState: ICounter = {
  id: 0,
  value: 0,
  name: '',
};

function createNewItem( state: ICounter[] ):ICounter {
  const id = state.length > 0 ? Math.max(...state.map(i => i.id)) + 1 : 0;
  const item = { ... initialCounterState, id: id, name: `Counter #${id}` };
  return item;
}

// Nested counter reducers
export function counterReducers(state: ICounter = initialCounterState, action: CounterAction): ICounter {
  switch (action.type) {
    case CounterIncrement:
      return { ...state, value: state.value + 1 };

    case CounterDecrement:
      return { ...state, value: state.value - 1 };

    case CounterNameChange:
      return { ...state, name: action.newName };

    default:
      return state;
  }
}

// Nested counter list items reducers
function counterListItemsReducer(state: ICounter[], action: CounterListAction | CounterAction): ICounter[] {
  switch (action.type) {
    case CounterListAddItem:
      return [ ...state, createNewItem(state) ];
    case CounterListRemoveItem:
      return _.remove(state, (item) => item.id !== action.id);
    case CounterIncrement:
    case CounterDecrement:
    case CounterNameChange:
      return state.map( item => item.id === action.id ? counterReducers(item, action) : item );
    default:
      return state;
  }
}

// main counterlist state reducer to be combined to root
export default function reducer(state: ICounterList = initialCounterListState, action: CounterListAction | CounterAction): ICounterList {
  const items = counterListItemsReducer(state.items, action);
  return {items: items, allIds: items.map( item => item.id) };
}
