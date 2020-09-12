import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DateDisplay } from './DateDisplay'
import { DateSelector } from './DateSelector'
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
        <Route exact path="/selector" component={DateSelector} />
        <Route exact path="/display" component={DateDisplay} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export { App }
