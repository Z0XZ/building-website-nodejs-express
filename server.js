import express from 'express';
import { fileURLToPath } from 'url';
import cookieSession from 'cookie-session';
import path from 'path';
// eslint-disable-next-line import/extensions
import FeedbackService from './services/FeedbackService.js';
// eslint-disable-next-line import/extensions
import SpeakerService from './services/SpeakerService.js';
// eslint-disable-next-line import/extensions
import routes from './routes/index.js';

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const app = express();

const port = 3000;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['asdTata3gf4563', 'GASasfwecewr523'],
  })
);

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.set('view engine', 'ejs');
app.set('views', path.join(dirname, './views'));

app.locals.siteName = 'ROUX Meetups';

app.use(express.static(path.join(dirname, './static')));

app.use(async (request, response, next) => {
  try {
    const names = await speakerService.getNames();
    response.locals.speakerNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use(
  '/',
  routes({
    feedbackService,
    speakerService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
