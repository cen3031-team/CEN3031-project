# Twitter Trends
CEN3031 Project- Twitter Trends

# API Endpoints
The following endpoints correspond to requests that can be made to the backend server as well as an example of a successfull return
#### Get all global twitter trends
```javascript
GET /api/trends/
Returns:
{ trends:
   [ { name: '#ENGvSCO',
       url: 'http://twitter.com/search?q=%23ENGvSCO',
       promoted_content: null,
       query: '%23ENGvSCO',
       tweet_volume: 22580 },
     { name: '#iTrustChowkidar',
       url: 'http://twitter.com/search?q=%23iTrustChowkidar',
       promoted_content: null,
       query: '%23iTrustChowkidar',
       tweet_volume: 21351 },
     { name: '#TeamGOT7',
       url: 'http://twitter.com/search?q=%23TeamGOT7',
       promoted_content: null,
       query: '%23TeamGOT7',
       tweet_volume: 3729973 } ],
  as_of: '2019-03-16T19:26:40Z',
  created_at: '2019-03-16T19:24:08Z',
  locations: [ { name: 'Worldwide', woeid: 1 } ] }
```
#### Create New User
```javascript
POST /api/user/
Request body:
    user: {
        username: 'username_here',
        password: 'password_here',
        first_name: 'user's first name',
        last_name: 'user's last name'
    } 
    
Returns:
{ username: 'user@gmail.com',
  password: 'userPass',
  first_name: 'userFirst',
  last_name: 'userLast',
  _id: 5c8d4a71ae4b4921f0408e8c }
```

# Frontend Controller
This section describes angular controller methods
(contd)

Contributors:
Katie Syron
Jonathan Lai
Sean O'Reilly
Zeeshan Habib