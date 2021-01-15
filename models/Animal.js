module.exports = function (sequelize, DataTypes) {
  var Animal = sequelize.define("Animal", {
    TypeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    OwnerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    OwnerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AnimalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    About: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImageLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Animal;
};
