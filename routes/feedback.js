import express from 'express';

const router = express.Router();

export default function feedbackRoute(params) {
  const { feedbackService } = params;
  router.get('/', async (request, response) => {
    const feedback = await feedbackService.getList();
    return response.json(feedback);
  });

  router.post('/', (request, response) => response.send(`Feedback form posted`));
  return router;
}
