function getClientId() {
  if (!OktaUtil) return undefined;
  var requestContext = OktaUtil.getRequestContext();
  if (requestContext && requestContext.app && requestContext.app.value.id) {
    return requestContext.app.value.id;
  }
}

var head = document.head;
var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://markvong-o.github.io/OktaCSS/' + getClientId() + '.css';
head.appendChild(link);

console.log(getClientId(), "testing this...");


let text = document.createElement('<p style="color:green;">This is a test text');
document.body.appendChild(text);
