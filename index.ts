import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';


/**
 * Instantiate Express Application
 * below are settings of app.
 */
const app: express.Express = express();

/**
 * App View Settings
 */
app.set('views', './views');
app.set('view engine', 'pug');

/**
 * Route for static files.
 * this is temporary way in only development.
 * use Nginx to serve static files.
 */
app.use(express.static(path.join(__dirname, '../public')));

/**
 * Parse http post body, cookie
 */
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/**
 * Start server
 */
app.listen(3000, () => {
  console.info('Server start listening on 3000');
});