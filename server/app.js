var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());

let randArr = [];
let usersMock = [{
  login:'dimegusew',
  password:'12345678',
  avatarUrl:'https://avatars1.githubusercontent.com/u/3763844?s=400&v=4',
  dateBirth: '27.07.1993',
  firstName:'Dmitry',
  secondName:'Gusew',
  email:'12345@mail.ru'
},
{
  login: 'Darth Wader',
  password:12345678,
  avatarUrl:"",
  dateBirth:"",
  firstName:'',
  secondName:'',
  email:'deathstar@mail.ru'
}
];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/json', function(request, response){
  console.log(request.body);
  let currentUser = usersMock.filter((user)=>user.login===request.body.login)
  let isLoginCorrect = currentUser.length!==0;
  let isPasswordCorrect = isLoginCorrect? currentUser[0].password == request.body.password :false;

  let res = {user:currentUser[0], isLoginCorrect,isPasswordCorrect};
   response.send(res);
});
app.listen(3000, () => console.log('Express app listening on localhost:3000'));
