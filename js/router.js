import { backgrounds } from './backgrounds.js'
import { activeMenu } from './action.js'

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]
    const background = backgrounds[pathname]

    document.body.style.backgroundImage = background

    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#app').innerHTML = html)

    activeMenu()
  }
}