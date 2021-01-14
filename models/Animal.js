

module.exports = function (sequelize, DataTypes) {
  var Animal = sequelize.define("Animal", {
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
  Animal.associate = (models) => {
    Animal.belongsTo(models.Owner, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Animal.associate = (models) => {
    Animal.belongsTo(models.PetType, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Animal;
};
