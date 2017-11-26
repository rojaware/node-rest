Create Express MongoDB REST API
Ref :: http://www.bogotobogo.com/MEAN-Stack/Building-REST-API-with-Node-Mongodb.php

1. mkdir xxx
2. cd xxx
3. create package.json :: npm init
4. install Express :: npm install express --save
5. create server.js and save it under root directory 
Let's make server.js:
~~~~~
  var express = require('express');
  var app = express();
  app.get('/', function(req, res) {
	  res.send('It works');
  });
  app.listen(3000);
  console.log('Listening on port 3000');
~~~~~
6. Run it :: node server.js
7. Test it :: http://localhost:3000/
8. Install mongoose, node-restful, etc :: npm install --save mongoose node-restful
9. Install body-parser :: npm install --save body-parser
10. Install nodemon :: npm install -g nodemon
11. run nodemon instead of node: :: nodemon server.js
12. update server.js
13. add api.js under routes
14. Test it :: http://localhost:3000/api/products
15. models/product.js
16. update api.js
17. Test it :: http://localhost:3000/api/products :: no data yet
18. Test on postman - Chrome extensions :: []
19. postman - post :: add test data
20. postman - DELETE

## Beginner's guide to MEAN Stack - MongoDB, Express.js, Angular 2 and Node.js
Nov 2, 2016 :: http://thelillysblog.com/2016/11/02/MEAN-stack-with-Angular2/

## Post Existing project into GitHub repository
Refer to https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/


## Add User Model
# Post 
~~~~
{
"userId" : "ravir2",
"fullName" : "Raja Ravir",
"role" : "petr-it-admin" 
}
{
"userId" : "balass2",
"fullName" : "Sasidharan Balasubramanian",
"role" : "gcm-admin" 
}
{
"userId" : "reamc2",
"fullName" : "Cheryl Ream",
"role" : "gcm-user" 
}
~~~~~
