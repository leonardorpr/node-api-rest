const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const controllers = requireDir('./controllers');

// Auth
routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);

// Auth routes
routes.use(authMiddleware);

// Tweets
routes.post('/tweets', controllers.tweetController.create);
routes.delete('/tweets/:id', controllers.tweetController.destroy);

// Likes
routes.post('/like/:id', controllers.likeController.toggle);

// Users
routes.get('/me', controllers.userController.me);
routes.get('/feed', controllers.userController.feed);
routes.put('/users', controllers.userController.update);

// Follows
routes.post('/follow/:id', controllers.followController.create);
routes.delete('/unfollow/:id', controllers.followController.destroy);

module.exports = routes;
