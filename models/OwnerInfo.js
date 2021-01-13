module.exports = function (sequelize, DataTypes) {
  var OwnerInfo = sequelize.define("OwnerInfo", {
    // The email cannot be null, and must be a proper email before creation
    OwnerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null
    OwnerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  OwnerInfo.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    OwnerInfo.hasMany(models.AnimalInfo, {
      onDelete: "cascade",
    });
  };
  return OwnerInfo;
};
