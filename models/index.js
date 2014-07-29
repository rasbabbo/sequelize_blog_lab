var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , env       = process.env.NODE_ENV || 'development'
  , config    = require(__dirname + '/../config/config.json')[env]
  , sequelize = new Sequelize(config.database, config.username, config.password, config)
  , db        = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

//Associations
db.author.hasMany(db.posts);
db.post.belongsTo(db.author);

// db.post.create({content: "WoooHOOO!"})
//   .success(function(postObj){
//     console.log("Crazy", postObj);
//   });

// db.author.create({name: "Ol Fitz"})
//   .success(function(authorObj){
//     console.log("Crazy", authorObj);
//   });

db.post.create({content: "Along came a spider"})
  .success(function(post){
    db.author.find(1).success(function(author){
      author.setPosts([post])
        .success(function(author){
         console.log(author)
      })
    });
});


module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db)
