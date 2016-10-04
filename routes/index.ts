import * as express from 'express';
import {TopicMiddleware} from "../middlewares/topic";
import topicsRouter from '../routes/topics/index';
import usersRouter from '../routes/users/index';
import adminRouter from '../routes/admin/index';
import apiRouter from '../routes/api/index';
import pagesRouter from '../routes/pages/index';
import {TopicDocument} from '../models/topic';
import {getTopicCategoryByDomainName} from '../lib/topic-category';
import {getTopics, getTopicsCount} from '../lib/topic';

const mainRouter = express.Router();
mainRouter.use('/api', apiRouter);
mainRouter.use('/admin', adminRouter);
mainRouter.use('/pages', pagesRouter);
mainRouter.use('/topics', topicsRouter);
mainRouter.use('/users', usersRouter);

// Top Route
mainRouter.get(
  '/',
  (req, res, next) => {
    // Variables to pass to render
    let rendTopics: TopicDocument[];
    let rendCount: number;
    let OptionsOfGetTopics;

    Promise.resolve()
      // Set Condition option for getTopics, getTopicsCount
      // Need to create filter method
      .then(() => OptionsOfGetTopics = {
        cat: null,
        srcText: req.query['srcText'],
        limit: 10,
        page: +req.query['page'] || 1,
      })

      // Get topics and count of topics in its condition
      .then(() => getTopics(OptionsOfGetTopics))
      .then(topics => rendTopics = topics || [])
      .then(() => getTopicsCount(OptionsOfGetTopics))
      .then(c => rendCount = c || 0)

      // Render Page
      .then(() => {
        res.render('pages/index', {
          renderGlobal: req['renderGlobal'],
          srcText: req.query['srcText'],
          topics: rendTopics,
          curPage: OptionsOfGetTopics.page,
          maxPage: Math.ceil(rendCount / OptionsOfGetTopics.limit),
        });
      })
      .catch(next);
  });


export default mainRouter;