module.exports = function (sequelize, DataTypes) {
  var PetType = sequelize.define("PetType", {
    TypeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  PetType.associate = (models) => {
    PetType.hasMany(models.Animal, {
      onDelete: "cascade",
    });
  };
  return PetType;
};
