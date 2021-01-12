module.exports = function (sequelize, DataTypes) {
  var AnimalInfo = sequelize.define("AnimalInfo", {
    // The email cannot be null, and must be a proper email before creation

    // The password cannot be null
    AnimalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    About: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  AnimalInfo.associate = (models) => {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    AnimalInfo.belongsTo(models.OwnerInfo, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  AnimalInfo.associate = (models) => {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    AnimalInfo.belongsTo(models.PetType, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return AnimalInfo;
};
