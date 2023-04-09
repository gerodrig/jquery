import crossroads from 'crossroads';
import hasher from 'hasher';

import { pages } from '../pages/pages.js';
import { pagesAdvanced } from '../pages/pagesAdvanced.js';

import { routerBasic } from './router-basic';
import { routerAdvanced } from './router-advanced';

// Define the routes
export function initRoutes() {
  addRoutes();
  function parsePath() {
    const path = window.location.pathname;
    const route = path === '/' ? '' : path;
    crossroads.parse(route);
    
  
  }

  // Listen for URL changes using the HTML5 history API
  window.addEventListener('popstate', parsePath);
  parsePath();

  // Listen for hash changes using hasher
  hasher.initialized.add(parsePath);
  hasher.changed.add(parsePath);
  hasher.init();
}

export function addRoutes() {
  // Home page
  //   addRoute('', function() {
  //     const app = document.querySelector('#app');
  //     app.innerHTML = '<h1>Home page</h1>';
  //   });

  addRoute('', function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['home'];

    $('#app').append('<div id="btnMenu"></div>');

    //create 2 buttons one that says basic and the other one advanced using jquery
    $('#btnMenu').append(
      '<button id="basic" class="btn btn-primary me-4">Basic</button><button class="btn btn-success" id="advanced">Advanced</button>'
    );

    $('#basic').on('click', () => {
      window.location.href = '/basic'; // set URL hash to
    });

    $('#advanced').on('click', () => {
      window.location.href = '/advanced'; // set URL hash to
    });
  });

  addRoute('basic', function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['home'];

    //delete the ul bullets
    $('ul').css('list-style-type', 'none');

    //define the first link
    $('ul').prepend(`<li><a href="/">Home</a></li>`);
    //add the links dynamically
    Object.keys(pages).forEach((page, index) => {
      // capitalize first letter

      if (page !== 'home') {
        //find first h1 and extract content from text
        const title = pages[page].match(/<h1>(.*?)<\/h1>/)[1];

        $('ul').append(
          `<li><a href="/basic/${page}">Exercise ${index} - ${title}</a></li>`
        );
      }
    });
  });

  addRoute('advanced', function () {
    const app = document.querySelector('#app');
    app.innerHTML = pagesAdvanced['home'];

    // $('#accordion').append(pagesAdvanced['component']);

    //create sections dynamically
    let idx = 1;
    Object.keys(pagesAdvanced).forEach((page) => {
      if (page.includes('section')) {
        const title =
          page[0].toLocaleUpperCase() +
          page.slice(1, page.length - 1) +
          ' ' +
          page[page.length - 1] +
          ' - ' +
          pagesAdvanced[page]['title'];
        //create section
        $('#accordion').append(pagesAdvanced['component']);
        //append page as text inside div before span
        $('#section').attr('id', page).find('span').before(title);

        const subpages = pagesAdvanced[page]['subTopics'];
        //apend subpages to section
        
        subpages.forEach((subpage) => {
          //append subpage to ul comnponennt that is inside a below div
          $(`#${page}`)
            .next('#accordionContent')
            .find('ul')
            .append(
              `<li><a href="/advanced/exercise${idx++}">${subpage.title}</a></li>`
            );
        });
      }
    });

    $(document).ready(function () {
      $('.accordion-header').click(function () {
        $(this).parent().toggleClass('active');
        $(this).find('.accordion-arrow').toggleClass('rotate-down');
      });
    });

    $('li').on('click', function () {
      window.location = $(this).find('a').attr('href');
      return false;
    });
  });

}


// Basic exercises
Object.keys(routerBasic).forEach((key) => {
  addRoute(`basic/${key}`, routerBasic[key]);
});

// Advanced exercises
Object.keys(routerAdvanced).forEach((key,index) => {
  const path = `exercise${index + 1}`
  addRoute(`advanced/${path}`, routerAdvanced[path]);
});




// addRoute('exercise1', routerBasic.exercise1);
// addRoute('/exercise2', routerBasic.exercise2);
// addRoute('/exercise3', routerBasic.exercise3);
// addRoute('/exercise4', routerBasic.exercise4);
// addRoute('/exercise5', routerBasic.exercise5 );
// addRoute('/exercise6', routerBasic.exercise6 );
// addRoute('/exercise7', routerBasic.exercise7 );
// addRoute('/exercise8', routerBasic.exercise8 );
// addRoute('/exercise9', routerBasic.exercise9 );
// addRoute('/exercise10', routerBasic.exercise10 );
// addRoute('/exercise11', routerBasic.exercise11 );
// addRoute('/exercise12', routerBasic.exercise12 );
// addRoute('/exercise13', routerBasic.exercise13 );
// addRoute('/exercise14', routerBasic.exercise14 );
// addRoute('/exercise15', routerBasic.exercise15 );
// addRoute('/exercise16', routerBasic.exercise16 );
// addRoute('/exercise17', routerBasic.exercise17 );
// addRoute('/exercise18', routerBasic.exercise18 );
// addRoute('/exercise19', routerBasic.exercise19 );
// addRoute('/exercise20', routerBasic.exercise20 );
// addRoute('/exercise21', routerBasic.exercise21 );
// addRoute('/exercise22', routerBasic.exercise22 );
// addRoute('/exercise23', routerBasic.exercise23 );
// addRoute('/exercise24', routerBasic.exercise24 );

// addRoute('/exercise4', function () {
//   const app = document.querySelector('#app');
//   app.innerHTML = pages['exercise2'];
// });

export function addRoute(route, handler) {
  crossroads.addRoute(route, handler);
}
