const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./course');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: DataTypes.STRING,
  your_city: DataTypes.STRING,
  course_taken: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'course_id'
    }
  },
  progress_percentage: DataTypes.INTEGER
}, { timestamps: true });

Course.hasMany(User, { foreignKey: 'course_taken' });
User.belongsTo(Course, { foreignKey: 'course_taken' });

module.exports = User;
