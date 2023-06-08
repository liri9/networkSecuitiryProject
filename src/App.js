import Menu from "./menu"
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <Menu/>
   </Provider>
    )}
export default App;
