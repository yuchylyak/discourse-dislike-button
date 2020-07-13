import Component from "@ember/component";
import { userPath } from "discourse/lib/url";
import { formatUsername } from "discourse/lib/utilities";
import { normalize } from "discourse/components/user-info";
import { renderAvatar } from "discourse/helpers/user-avatar";
import { computed } from "@ember/object";
import { prioritizeNameInUx } from "discourse/lib/settings";

export default Component.extend({
  usersTemplates: computed("users.[]", function() {
    return (this.users || []).map(user => {
      console.log(user);
      let name = user.name;
      let username = user.username;
      let role = user.admin ? 'Admin' : 'Moderator'
      let prioritizeName = prioritizeNameInUx(name, this.siteSettings);
      let hideName = false;
      if (name && normalize(username) === normalize(name)) {
        hideName = true;
      }

      return {
        name,
        username,
        role,
        userPath: userPath(username),
        avatar: renderAvatar(user, { imageSize: "large" }),
        title: user.title || "",
        formatedUsername: formatUsername(username),
        prioritizeName,
        hideName
      };
    });
  })
});
