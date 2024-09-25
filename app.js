const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const courseRoutes = require('./routes/courseRoute');
const lessonRoutes = require('./routes/lessonRoute');
const lessonContentRoutes = require('./routes/lessonContentRoute');
const userRoutes = require('./routes/userRoute');
const progressRoutes = require('./routes/progressRoute');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config(); // To load environment variables


// Create the Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/lesson-content', lessonContentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/progress', progressRoutes);

// Sync with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced successfully');
});


const PORT = process.env.PORT || 80;

// Start the server
app.listen(PORT, () => {
  console.log('Server is running');
});
