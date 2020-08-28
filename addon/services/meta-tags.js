import Service, { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class MetaTagsService extends Service {
  @service headData;

  getHeadTags(post) {
    const config = getOwner(this).resolveRegistration('config:environment');
    const headTags = [
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: `${config.blog.twitter}`
      },
      {
        name: 'twitter:title',
        content: post.title
      },
      {
        name: 'twitter:image',
        content: `${config.blog.host}${post.image}`
      },
      {
        name: 'twitter:image:alt',
        content: post.title
      },
      {
        name: 'twitter:description',
        content: post.content
      },
    ];
    this.headData.set('headTags', headTags);
  }
}
