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

// Clear the body first
document.body.innerHTML = ""

let div = document.createElement("div");
div.innerHTML = `
    <div id="left-content">
        <p id="title">Welcome to the <span className="brand">Iron Bank</span></p>
        <p className="text">Our mission is to serve our community.</p>
        <p className="text">We offer the following:</p>
        <ul id="list">
            <li>Commercial Lending</li>
            <li>Personal Banking</li>
            <li>Castle Loans</li>
            <li>Dragon Loans</li>
        </ul>
        <p className="text">Talk to us today!</p>
    </div>
    <div id="right-content">
        <div id="okta-login-container" />
    </div>
`
div.id ="content"
document.body.appendChild(div);

var config = OktaUtil.getSignInWidgetConfig();
var oktaSignIn = new OktaSignIn(config);
oktaSignIn.renderEl({ el: '#okta-login-container' },
    OktaUtil.completeLogin,
    function(error) {
        // Logs errors that occur when configuring the widget.
        // Remove or replace this with your own custom error handler.
        console.log(error.message, error);
    }
);