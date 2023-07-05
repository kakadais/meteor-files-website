import { Template } from 'meteor/templating';
import './about.jade';
import './about.sass';

Template.about.onRendered(function() {
  window.IS_RENDERED = true;
});

Template.about.helpers({
  date() {
    return new Date().getFullYear();
  },
});
