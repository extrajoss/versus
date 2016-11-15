

module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    inviteId: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM('male', 'female', 'other'), // eslint-disable-line
    imageIndex: DataTypes.INTEGER,
    treeIndex: DataTypes.INTEGER,
    tree: DataTypes.JSON,
  }, {
    classMethods: {
      associate(models) {
        Result.belongsTo(models.Experiment);
      },
    },
  });

  return Result;
};