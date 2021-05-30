let dom = document.querySelector("#root")

let element = React.createElement(
    'p', {}, 'hello React App!'
)

ReactDOM.render(element, dom)