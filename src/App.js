import { Header } from './components/Header';
import { Main } from './components/Main'
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';


const App = () => (
  <>
    <Header />
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country/:name" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </Main>
  </>
)

export default App;