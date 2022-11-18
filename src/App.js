import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './components/Home'
import DetailsPage from './components/DetailsPage'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={DetailsPage} />
      <Route path="/notfound" component={NotFound} />
      <Redirect to="/notfound" />
    </Switch>
  </BrowserRouter>
)

export default App
