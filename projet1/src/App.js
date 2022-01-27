import Home from "./pages/home";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Menu from "./pages/menu";
import {BrowserRouter ,Switch ,Route} from "react-router-dom";
import "./style/tout.scss"


function App() {
  return ( <div className="brows">
    <BrowserRouter>
    <Switch>
      
      <Route path="/menu" exact component={Menu} />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/reservation" exact component={Reservation} />
    </Switch>
    </BrowserRouter></div>
  );
}

export default App;



