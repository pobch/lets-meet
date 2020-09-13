import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Report } from './Report'
import { Create } from './Create'
import { Nav } from './Nav'
import { Home } from './Home'
import { NotFound } from './NotFound'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/report" component={Report} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export { App }
