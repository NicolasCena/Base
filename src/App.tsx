import Menu from "./components/Menu";
import "./styles/index.scss";
import { Provider } from 'react-redux'
import { store } from "./02-component-patterns/redux/store";

function App() {
  return (
<<<<<<< Updated upstream
    <>
      <Menu />
    </>
=======
    <Provider store={store}>
      <Menu />
      </Provider>
>>>>>>> Stashed changes
  );
}

export default App;
