class Header {
  constractor() {
    const elem = document.createElement('div')
    console.log(elem)
    elem.innerHTML = 'This is header'
    document.body.appendChild(elem)
  }
}

class Content {
  constractor() {
    const elem = document.createElement('div')
    elem.innerHTML = 'This is header'
    document.body.appendChild(elem)
  }
}

class Footer {
  constractor() {
    const elem = document.createElement('div')
    elem.innerHTML = 'This is header'
    document.body.appendChild(elem)
  }
}

class Page {
  constructor() {
    new Header()
    new Content()
    new Footer()
  }
}