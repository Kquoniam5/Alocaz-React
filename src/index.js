import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Particuliers from './views/particuliers'
import Professionnels from './views/professionnels'
import NotreProjet from './views/notre-projet'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Particuliers} path="/particuliers" />
        <Route exact component={Professionnels} path="/professionnels" />
        <Route exact component={NotreProjet} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
