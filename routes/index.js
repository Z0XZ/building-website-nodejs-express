import express from 'express';
// eslint-disable-next-line import/extensions
import speakersRoute from './speakers.js';
// eslint-disable-next-line import/extensions
import feedbackRoute from './feedback.js';

const router = express.Router();

export default function routes(params) {
  const { speakerService } = params;

  router.get('/', async (request, response) => {
    const topSpeakers = await speakerService.getList();
    const artwork = await speakerService.getAllArtwork();
    response.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers, artwork });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
}
