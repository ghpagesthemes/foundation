import svg4everybody from 'svg4everybody';
import './globals/jquery';
import './globals/foundation';
import ready from './ready';

ready(() => {
  $(document).foundation();
  svg4everybody();
});
