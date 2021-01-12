module.exports = function (sequelize, DataTypes) {
  var PetType = sequelize.define("PetType", {
    // The email cannot be null, and must be a proper email before creation

    // The password cannot be null
    TypeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  PetType.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    PetType.hasMany(models.AnimalInfo, {
      onDelete: "cascade",
    });
  };
  return PetType;
};
