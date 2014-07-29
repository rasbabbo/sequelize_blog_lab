module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
      migration.createTable('posts', 
      { id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    content: DataTypes.TEXT
    })
    .complete(done)
  },


  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('posts')
    .complete(done)
  }
}
