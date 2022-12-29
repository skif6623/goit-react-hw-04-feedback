import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const rootReducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'good':
      return {
        ...state,
        good: state.good + 1,
      };
    case 'neutral':
      return {
        ...state,
        neutral: state.neutral + 1,
      };
    case 'bad':
      return {
        ...state,
        bad: state.bad + 1,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);
