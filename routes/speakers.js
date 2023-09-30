import express from 'express';

const router = express.Router();

export default function speakersRoute() {
  router.get('/', (request, response) => response.send('Speakers list'));
  router.get('/:shortname', (request, response) =>
    response.send(`Detail page of ${request.params.shortname}`)
  );
  return router;
}
