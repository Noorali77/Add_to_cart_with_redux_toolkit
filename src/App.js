import AppRouter from './Config/Router.js';
import {Provider} from 'react-redux';
import store from './Store/index.js'
function App() {
  return (
    <>
    <Provider store={store}>
    <AppRouter/>
    </Provider>
    </>
  );
}

export default App;
