function Post(sequelize, DataTypes){
  return sequelize.define('post', {
    name: DataTypes.TEXT
  });
};



module.exports = Post;