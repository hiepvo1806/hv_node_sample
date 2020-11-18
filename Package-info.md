## Packages
### Parsing cookies
> "cookie-parser": "~1.4.4"


### for npm script to set the environment variable
> "cross-env": "^6.0.3"


### Should not use console.log for debug, use this one, read from configuration for all the on/off. Also with named of entity that print debug info
> "debug": "~2.6.9"
> b = require('debug')('worker:b')




### http server
>  "express": "~4.16.1"



### View engine, handle bar
>    "hbs": "~4.0.4",

### http error with sample, just for create a 401 error easier
>    "http-errors": "~1.6.3",



```
var createError = require('http-errors')
var express = require('express')
var app = express()
 
app.use(function (req, res, next) {
  if (!req.user) return next(createError(401, 'Please login to view this page.'))
  next()
})
```

### logger, save log to file,cycle delete, chunk log file, etc
>    "morgan": "~1.9.1"

### showing icon, like fa in bs
> feather-icons

### popup, tooltips for bs 4.5
> popper.js

### more promise for file handling, copy,move, 
> fs-extra

### DB: LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values.
> level

### DB: Mongo db get client, mongoose
> mongodb

```
const MongoClient = mongodb.MongoClient;
if (!client) client = await MongoClient.connect(process.env.MONGO_URL);
```

### Creates a stream.Writable to a file which is rotated. Rotation behaviour can be deeply customized; optionally, classical UNIX logrotate behaviour can be used.
> rotating-file-stream

### ORM to SQL: sequelize
> sequelize

### DB: connect directly to sql
> sqlite3
```
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});
 
db.close();
```

### Read configuration from file yaml, then parse this to object
> js-yaml

```
 const yamltext = await fs.readFile(process.env.SEQUELIZE_CONNECT, 'utf8');
        const params = jsyaml.safeLoad(yamltext, 'utf8');
        if (typeof process.env.SEQUELIZE_DBNAME !== 'undefined'
                && process.env.SEQUELIZE_DBNAME !== '') {
            params.dbname = process.env.SEQUELIZE_DBNAME;
        }
```

### CLI for nodejs program

> commander

### server: api
> restify

### client for api calling
> restify-clients

### Combo
Configuration
- xài yaml file  + biến environment, process.env.xxx
- mà load từ file = fs-extra
- parse ra object = js-yaml

ghi log:
- gán từng file prefix + bật tắt log: debug
- log nài ghi xuống file : morgan
- mà muốn rotate log file theo ngày + xóa bớt: rotating-file-stream

# Progress
11-10: 320
44%

11/11 353

12/11
10h43 19

13/11
10h12: 117
5h32: 170

16/11
262(278) = 37% 11h

17/11 
38% 271 
10h53: 288
3h15: 312
5h43: 322

18/11
11h:50 329 48%

3h42: 349
5h50: 367