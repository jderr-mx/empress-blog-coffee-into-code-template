import postRoute from 'empress-blog/routes/post';
import { inject as service } from '@ember/service';

export default class PostRoute extends postRoute{
  @service metaTags;

  afterModel({post}) {
    this.metaTags.getHeadTags(post);
  }
}
