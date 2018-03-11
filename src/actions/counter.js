import {
  INCREMENT,
  DECREMENT
} from '../actions';

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}