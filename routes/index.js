import express from 'express';
// eslint-disable-next-line import/extensions
import speakersRoute from './speakers.js';
// eslint-disable-next-line import/extensions
import feedbackRoute from './feedback.js';

const router = express.Router();

export default function routes() {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());

  return router;
}
