export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: 'owner',
    });
  };

  return Comment;
};
