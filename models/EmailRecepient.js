module.exports = function (sequelize, DataTypes) {
  var EmailRecepient = sequelize.define("EmailRecepient", {
    RecName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RecEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return EmailRecepient;
};
