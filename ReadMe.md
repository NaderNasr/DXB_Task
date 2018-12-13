# Run a local server

`Browsers have security restrictions in place to make loading files from your local file system difficult, to prevent devious people from putting scripts on their websites that will steal your information.`

`Many programming languages have simple HTTP servers built in. They are not as full featured as production servers such as Apache or NGINX, however they should be sufficient for testing your three.js application.`



# Node.js server
## Node.js has a simple HTTP server package. To install:

`npm install http-server -g`

To run (from your local directory):

`http-server . -p 8000`
