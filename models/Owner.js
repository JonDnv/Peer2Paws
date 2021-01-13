module.exports = function (sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {
    OwnerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    OwnerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Owner.associate = (models) => {
    Owner.hasMany(models.Animal, {
      onDelete: "cascade",
    });
  };
  return Owner;
};
