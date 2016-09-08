import './globals/jquery.js';
import 'foundation-sites/dist/foundation';
import svg4everybody from 'svg4everybody';
import ready from './ready';

ready(() => {
  $(document).foundation();
  svg4everybody()
});
