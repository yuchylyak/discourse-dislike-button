import { withPluginApi } from 'discourse/lib/plugin-api'
import { h } from 'virtual-dom'
import Qwe from '../lib/transform-post'

function initializePlugin(api) {
  api.replaceIcon('d-unliked', 'far-thumbs-up');
  api.replaceIcon('d-liked', 'thumbs-up');
  api.replaceIcon('d-undisliked', 'far-thumbs-down');
  api.replaceIcon('d-disliked', 'thumbs-down');

  // api.decorateWidget('post-contents:after-cooked', helper => {
    // console.log(helper.getModel(), 'from decorate')
    // console.log(h)
  // })
  
  // api.attachWidgetAction('post-contents', 'dislike', (qwe) => {
  //   const { attrs, currentUser, keyValueStore } = this;
  //   console.log(Qwe.postAtts, 'still works')
  // 
  //   if (!currentUser) {
  //     keyValueStore &&
  //       keyValueStore.set({ key: "dislikedPostId", value: attrs.id });
  //     return this.sendWidgetAction("showLogin");
  //   }
  // 
  //   if (this.capabilities.canVibrate) {
  //     navigator.vibrate(VIBRATE_DURATION);
  //   }
  // 
  //   if (attrs.disliked) {
  //     return this.sendWidgetAction("toggleDislike");
  //   }
  // 
  //   const $thumb = $(`[data-post-id=${attrs.id}] .toggle-dislike .d-icon`);
  //   $thumb.closest("button").addClass("has-dislike");
  // 
  //   const scale = [1.0, 1.5];
  //   return new Promise(resolve => {
  //     animateThumb($thumb, scale[0], scale[1], () => {
  //       animateThumb($thumb, scale[1], scale[0], () => {
  //         this.sendWidgetAction("toggleDislike").then(() => resolve());
  //       });
  //     });
  //   });
  // });

  // api.addPostMenuButton('dislike', () => {
  //   return {
  //     action: 'dislike',
  //     icon: 'thumbs-down',
  //     className: 'dislike',
  //     title: 'post.controls.dislike',
  //     position: 'first'  // can be `first`, `last` or `second-last-hidden`
  //   };
  // });
}

export default {
  name: 'change-icons',
  initialize() {
    withPluginApi('0.8.6', api => initializePlugin(api));
  }
};
