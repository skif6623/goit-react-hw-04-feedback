import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const rootReducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'good/setGood':
      return {
        ...state,
        good: state.good + actions.payload,
      };
    case 'neutral/setNeutral':
      return {
        ...state,
        neutral: state.neutral + actions.payload,
      };
    case 'bad/setBad':
      return {
        ...state,
        bad: state.bad + actions.payload,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
