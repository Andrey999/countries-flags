import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main'
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';


const App = () => {
  const [countries, setCountries] = useState([]);



  function colonOdd (num) {
    let str = num.toString();
    let result = [str[0]];
    console.log(result);
    for(var i=1; i<str.length; i++) {
        if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
          result.push(':', str[i]);
         }
        else {
          result.push(str[i]);
        }
    }
    return result.join('');  
  }

document.writeln(colonOdd(55639217)); // 5:5









  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;