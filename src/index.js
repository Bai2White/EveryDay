// import _ from 'lodash'; webpack.ProvidePlugin 已配置

function component() {
  let element = document.createElement(div);
  element.innerHtml = join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
