import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
// eslint-disable-next-line import/extensions
import routes from './routes/index.js';

const app = express();

const port = 3000;
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.set('view engine', 'ejs');
app.set('views', path.join(dirname, './views'));

app.use(express.static(path.join(dirname, './static')));

app.use('/', routes());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
