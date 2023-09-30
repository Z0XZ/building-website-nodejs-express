import express from 'express';

const router = express.Router();

export default function feedbackRoute() {
  router.get('/', (request, response) => response.send('Feedback page'));
  router.post('/', (request, response) => response.send(`Feedback form posted`));
  return router;
}
