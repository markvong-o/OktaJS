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

let div = document.createElement("div");
div.innerHTML = `
    <div id="left-content">
        <p id="title">Welcome to the <span class="brand">Iron Bank</span></p>
        <p class="text">Our mission is to serve our community.</p>
        <p class="text">We offer the following:</p>
        <ul id="list">
            <li>Commercial Lending</li>
            <li>Personal Banking</li>
            <li>Castle Loans</li>
            <li>Dragon Loans</li>
        </ul>
        <p class="text">Talk to us today!</p>
    </div>
    <div id="right-content">
    </div>
`
div.id ="content"
document.body.appendChild(div);

document.getElementById("right-content").appendChild(document.getElementById("okta-login-container"))
