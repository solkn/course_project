const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./course');

const Lesson = sequelize.define('Lesson', {
  lesson_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  course_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'course_id'
    }
  },
  lesson_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lesson_description: DataTypes.TEXT,
  lesson_icon: DataTypes.STRING,
  lesson_date: DataTypes.DATE,
  lesson_order: DataTypes.INTEGER
}, { timestamps: true });

Course.hasMany(Lesson, { foreignKey: 'course_id' });
Lesson.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = Lesson;
