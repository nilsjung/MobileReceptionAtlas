import React from 'react';
import { createStore, applyMiddleware, } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import Root from './components/Root/Root'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App