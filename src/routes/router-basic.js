import { pages } from '../pages/pages.js';
import { scriptDiv, scriptDiv2 } from '../helpers/printScript';

import { Animations, AnimationsGS, SlideShow } from '../animations/animations';

//Plugins
import { notification } from '../plugins/notification';
import { smallNotification } from '../plugins/smallNotification';
import { chatNotification } from '../plugins/chatNotification';

export const routerBasic = {
  exercise1: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise1'];

    // createJQuery();

    // add the following script after the page loads. //?Shorter version is $(function() { ... });
    $(document).ready(function () {
      //create div with script content
      scriptDiv(
        `jQuery('.hello').css('color', 'red') 
        //OR
        $('.hello').css('color', 'red')
        `
      );
      //change to red to class hello
      // jQuery('.hello').css('color', 'red');
      $('.hello').css('color', 'red');

      scriptDiv(
        `jQuery('.bold').css('font-weight', 'bold') 
        //OR 
        $('.bold').addClass('hello').css('font-weight', 'bold');`
      );
      // jQuery('.bold').addClass('hello').css('font-weight', 'bold');
      $('.bold').addClass('hello').css('font-weight', 'bold');
    });
  },
  exercise2: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise2'];

    const script = `$('img')
        .attr(
          'src',
          'https://avatars.githubusercontent.com/u/41840132?s=400&u=193934f52bc50fb6bee7edcb711da524d36e1d37&v=4'
        )
        .addClass('img-fluid rounded-circle').css({'width': '200px', 'height': '200px'});`;

    //pass the script and convert it to text
    scriptDiv2(script);

    //change tex text in paragraph
    const script2 = `$('.col-sm-5').find('p').text('this is my profile picture that was added using jQuery from github');`;
    scriptDiv2(script2);

    //unordered list bullet points removed with jquery and underline added and add a different color to the first 5 list items
    const script3 = `$('ul').css('list-style-type', 'none');`;

    scriptDiv2(script3);

    const script4 = `$('ul').find('li').eq(0).css('color', 'red').end().eq(1).css('color', 'blue').end().eq(2).css('color', 'green').end().eq(3).css('color', 'purple').end().eq(4).css('color', 'orange');`;

    scriptDiv2(script4);
  },
  exercise3: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise3'];

    const script0 = `$(document).ready(function () {
      alert('page was completely loaded');
    });`;

    scriptDiv2(script0);

    const script = `$('#button1').on('click', function () {
      alert('button1 clicked');
    });`;

    scriptDiv2(script);

    const script2 = `$('.chin').on('mouseenter', function () {
      //change image src
      $('.chin').attr('src', 'src/assets/chinchilla2.jpeg')
                .css('cursor', 'pointer')
                .css('border', '1px solid blue');
    });`;

    scriptDiv2(script2);

    const script3 = `$('.chin').on('mouseleave', function () {
      $('.chin').attr('src', 'src/assets/chinchilla.jpeg');
    });`;

    scriptDiv2(script3);

    const script4 = `$('#link').on('click', function(e) {
      e.preventDefault();
      console.log('link1 clicked');

      const link = $(this).attr('href');
      console.log(link);
      // window.location = link;
    });`;
    scriptDiv2(script4);
  },
  exercise4: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise4'];
  
    //anonymous auto invoked function
    const script = `(function () {
      const dds = $('dd');
  
      dds.hide();
      dds.eq(0).show();
  
      $('dt').on('mouseenter', function () {
        dds.slideUp(200);
        $(this).next().slideDown(200);
      });
    })();`;
  
    scriptDiv2(script);
  },
  exercise5: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise5'];
  
    const script = `(function(){
  
      let counter = 0;
      
  $('body').on('click','h3', function(){
        
        const dynamicH3 = "<h3 id='h3-" + (counter + 1) + "'>Dynamic" + (++counter) + "</h3>";
        // $('body').prepend(dynamicH3);
        $('.container').append(dynamicH3);
  
        if(counter === 2){
          $('#h3-2').bind('click', function(){
            console.log('dynamic function h3-2 clicked');
          });
        }
      });
    })();`;
  
    scriptDiv2(script);
  },
  exercise6: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise6'];
  
    // (function () {
    //   const base = 3;
    //   let counter = 0;
    //   $('button').on('click', function () {
  
    //     const newRow = `
    //     <tr>
    //       <td>${base}</td>
    //       <td>x</td>
    //       <td>${++counter}</td>
    //       <td>=</td>
    //       <td>${base * counter}</td>
    //     </tr>
    //     `
    //     $('table').append(newRow);
    //   });
    // }());
  
    const script = `(function () {
    let base = $('#base').val();
    let counter = 0;
    
    //if base is changed clear the table except header
    $('#base').on('change', function () {
      $('table').find('tr:gt(0)').remove();
      base = $(this).val();
      counter = 0;
    });
  
    $('button').on('click', function () {
  
      const newRow = \`
      <tr>
        <td>\${base}</td>
        <td>x</td>
        <td>\${++counter}</td>
        <td>=</td>
        <td>\${base * counter}</td>
      </tr>
      \`
      $('table').append(newRow);
    });
  }());`;
  
    scriptDiv2(script);
  },
  exercise7: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise7'];
  
    //execute after loading
    const script = `$(document).ready(function () {
      const chinchilla = {
        name: 'Chinchilla',
        age: 2,
        color: 'grey',
        weight: 3,
        isCute: true,
        teeth: ['small', 'sharp', 'yellow'],
        hump: true,
        jump: function () {
          console.log('Chinchilla is in parkour mode!!');
          $("#chin").addClass("jump");
          setTimeout(function() {
            $("#chin").removeClass("bounce");
          }, 500);
        },
        pause: function () {
          console.log('Chinchilla was paused');
          $("#chin").removeClass("jump").removeClass("bounce");
        }
      }
  
      console.log(chinchilla);
  
      $('#jump').on('click', function () {
        chinchilla.jump();
      });
      $('#pause').on('click', function () {
        chinchilla.pause();
      });    
    });`;
    scriptDiv2(script);
  },
  exercise8: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise8'];
  
    const script = `$('\<input\>', {
      type: 'text',
      class: 'form-control',
      placeholder: 'Enter your name',
    })
      .appendTo('.container')
      .on('keypress', function (e) {
        //append
        //create a code component inisde a div that will be appended to the container after the input and include the key pressed
        $('<div>').append($('<code>').text(e.which)).appendTo('.container');
      });`;
  
    scriptDiv2(script);
  },
  exercise9: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise9'];
  
    const script = `(function(){
      const colorView = {
        colors: ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'brown', 'white'],
    
        render: function () {
          this.colors.forEach(function (color) {
            $("<option>",{
              value: color,
              text: color[0].toUpperCase() + color.slice(1),
            }).appendTo('select');
          });
        }
      }
    
      colorView.render();
    
      $('.box').css({
        'background-color': $('select').val(),
        //align center
        margin: '0 auto',
        height: '400px',
        width: '400px',
      });
    
      $('select').on('change', function () {
        $('.box').css('background-color', $(this).val());
      });
    })();`;
  
    scriptDiv2(script);
  },
  exercise10: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise10'];

    const script = `(function(){
        const colorView = {
          colors: ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'brown', 'white'],
      
          render: function () {
            this.colors.forEach(function (color) {
              $("<option>",{
                value: color,
                text: color[0].toUpperCase() + color.slice(1),
              }).appendTo('select');
            });
          }
        }
      
        colorView.render();
      
        $('.box').css({
          'background-color': $('select').val(),
          //align center
          margin: '0 auto',
          height: '400px',
          width: '400px',
        });
      
        $('select').on('change', function () {
          $('.box').css('background-color', $(this).val());
        });
      })();`;
    
      scriptDiv2(script);
  
    },
  exercise11:  function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise11'];
  
    const script = `(function () {
      var teslaView = {
        loader: $('.divPreloader'),
        colors: ['white','red', 'gray'],
        //function change color
        changeColor: function (image) {
          const $loader = this.loader;
          //animate loader
          $loader.fadeIn(150);
          //if image is not defined
          if (!image) {
            image = 'src/assets/tesla/modelS-' + this.colors[0] +'.jpg';
  
          }
  
          $('<img>',{
            src: image,
            class: 'img-fluid',
          }).on('load',function(){
            //hide loader
            $('.divPreview').find('img').remove();
            //show image
            $(this).appendTo('.divPreview');
  
            //hide loader
            $loader.fadeOut(150);
          })
        },
        //main function
        render: function (options) {
          //expand options
          $.extend(this, options);
          this.colors.forEach((color) => {
            $('<option>', {
              value: color,
              text: color[0].toUpperCase() + color.slice(1),
            }).appendTo('#changeColor');
          });
  
          //change function
          $('#changeColor').bind('change', function () {
            const color = $(this).val();
            const imageSrc = 'src/assets/tesla/modelS-' + color + '.jpg';
  
            //execute change color function
            teslaView.changeColor(imageSrc);
            // $('#tesla-car').attr('src', imageSrc);
          });
          //chang the image for the first time
          teslaView.changeColor();
        },
      };
      //intiailize render
      teslaView.render({
        colors: ['white', 'blue', 'brown', 'darkred', 'red', 'gray', 'green', 'black'],
      });
    })();`;
    scriptDiv2(script);
  },
  exercise12: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise12'];
  
    const script = `(function(){
      $('img').css('cursor', 'pointer');
      $('img').on('mouseenter', function () {
        $('.attr').text("image type: " + $(this).data('type')).show();
      }); 
      $('img').on('mouseleave', function () {
        //remove text in attr
        $('.attr').text("").hide();
      }); 
    })();`;
    scriptDiv2(script);
  },
  exercise13: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise13'];
  
    (() => {
      $('.imgThumb').on('mouseenter', function () {
        //console.log the data-color attribute
        const color = $(this).data('color');
        const url = 'src/assets/eshop/shirts/large/' + color + '.jpg';
        //change the image color color is different in panel-body>img
        if (color !== $('.panel-body').find('img').data('color')) {
          $('#shirtColor').attr('src', url).data('color', color);
          //change the small text with the color selected
          $('#lblColor').text(color);
        }
      });
    })();
  },
  exercise14: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise14'];
  
    (function () {
      const animate = new Animations($('.red-box'));
  
      $('button').on('click', function () {
        const direction = $(this).data('direction');
  
        animate.move(direction);
      });
  
      //animate with arrow keys
      $(document).on('keyup', function (e) {
        animate.move(e.which);
      });
    })();
  
    const script = `
      const animate = new Animations($('.red-box'));
  
      $('button').on('click', function(){
        const direction = $(this).data('direction');
  
        animate.move(direction);
      });
  
      //animate with arrow keys
      $(document).on('keyup', function(e){
        animate.move(e.which);
      });`;
  
    scriptDiv(script);
  },
  exercise15: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise15'];
  
    (() => {
      const animate = new Animations($('.red-box'));
  
      //select buuton by data-action = size
      $('button[data-action="size"]').on('click', function () {
        animate.sizeAnimation();
      });
    })();
    const script = `
    const animate = new Animations($('.red-box'));
  
    //select button by data-action = size
    $('button[data-action="size"]').on('click', function () {
      animate.sizeAnimation();
    });
    `;
    scriptDiv(script);
  },
  exercise16: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise16'];
  
    (() => {
      const animateJQuery = new Animations($('.red-box'));
      const animateGS = new AnimationsGS($('.blue-box'));
  
      $('button').on('click', function () {
        const direction = $(this).data('direction');
        animateJQuery.move(direction);
        animateGS.move(direction);
      });
  
      //animate with arrow keys
      $(document).on('keyup', function (e) {
        animateJQuery.move(e.which);
        animateGS.move(e.which);
      });
  
      $('button[data-action="size"]').on('click', function () {
        animateJQuery.size();
        animateGS.sizeAnimation();
      });
    })();
  
    const script = `
    const animateJQuery = new Animations($('.red-box'));
      const animateGS = new AnimationsGS($('.blue-box'));
  
      $('button').on('click', function(){
        const direction = $(this).data('direction');
        animateJQuery.move(direction);
        animateGS.move(direction);
      });
  
      //animate with arrow keys
      $(document).on('keyup', function(e){
        animateJQuery.move(e.which);
        animateGS.move(e.which);
      });
  
      $('button[data-action="size"]').on('click', function () {
        animateJQuery.size();
        animateGS.sizeAnimation();
      });
    `;
    scriptDiv(script);
  },
  exercise17: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise17'];
  
    (() => {
      const animateSlides = new SlideShow($('.slideShow ul'));
  
      $('button').on('click', function () {
        const direction = $(this).data('action');
        // animateSlides.move(direction, true);
        animateSlides.moveGsap(direction, true);
      });
    })();
  
    const script = `
    const animateSlides = new SlideShow($('.slideShow ul'));
  
      $('button').on('click', function(){
        const direction = $(this).data('action');
        // animateSlides.move(direction, true);
        animateSlides.moveGsap(direction, true);
      });
    `;
    scriptDiv(script);
  },
  exercise18: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise18'];
  
    (() => {
      const animateSlides = new SlideShow($('.slideShow ul'));
  
      $('.slideButton').on('click', function () {
        const idx = -$(this).data('idx');
        animateSlides.moveByPoint(idx, true);
      });
    })();
  
    const script = `
    const animateSlides = new SlideShow($('.slideShow ul'));
  
      $('button').on('click', function(){
        const direction = $(this).data('action');
        // animateSlides.move(direction, true);
        animateSlides.moveGsap(direction, true);
      });
    `;
    scriptDiv(script);
  },
  exercise19: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise19'];
  
    (() => {
      //add button to launch the modal after the hr
      $('hr').after(
        '<button class="btn btn-primary" id="launchModal">Launch Modal</button>'
      );
  
      $('#launchModal').on('click', function () {
        
        notification({
          title: 'Notification',
          text: 'This is a notification',
          button: 'Access to the site'
        },function(button){
          alert(button);
      });
  
      //add modal to the body of the div
      });
      $();
    })();
  },
  exercise20: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise20'];
    smallNotification({
      title: 'Hello there',
      subtitle: 'Naughty Chinnies are ready to rock',
      content: 'Mimi Martinez 97.1fm',
    });
  },
  exercise21: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise21'];
  
    (() => {
      $('.container').append('<button class="btn btn-primary" id="chatNotification1">Notification 1</button>');
      $('.container').append('<button class="btn btn-primary" id="chatNotification2">Notification 2</button>');
  
      $('#chatNotification1').on('click', function () {
        chatNotification({
          image: '/src/assets/chatNotification/Ethan.jpeg',
          name: 'Mimi Martinez',
          location: 'Airdrie, AB'
        });
      }
      );
      $('#chatNotification2').on('click', function () {
        chatNotification({
          name: 'Mimi Martinez',
          location: 'Airdrie, AB'
        });
      }
      );
  
    })();
  
  },
  exercise22: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise22'];
  
    const script = `(()=> {
      $.ajax({
          type: 'GET',
          url: 'src/assets/json/register.json',
          dataType: 'json',
      }).done(function(data){
          console.log('Success');
          $('#nameLabel').text(data.name);
          $('#photo').attr('src', data.photo);
          $('#txtName').val(data.name);
          $('#txtAddress').val(data.address);
          $('#txtPhone').val(data.phone);
          $('#txtGender').val(data.gender);
      }).fail(function(){
          console.log('Something went wrong');
      }).always(function(){
          console.log('Complete');
      });
    })();`;
    scriptDiv2(script);
  },
  exercise23: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise23'];
  
    (()=> {
      $.ajax({
          type: 'GET',
          url: 'src/assets/json/register2.json',
          dataType: 'json',
      }).done(function(data){
          console.log('Success');
          let people = data;
          people.forEach(person => {
  
            //get the tags for person
            let tags = '';
            person.tags.forEach(tag => {
              tags += `<span class="badge bg-primary">${tag}</span> `;
            });
  
            console.log(tags);
  
            let html = `
              <tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${tags}</td>
              </tr>
            `
  
            $('.table').append(html);
          });
      }).fail(function(){
          console.log('Something went wrong');
      }).always(function(){
          console.log('Complete');
      });
    })();
  },
  exercise24: function () {
    const app = document.querySelector('#app');
    app.innerHTML = pages['exercise24'];
  
    const script = `(()=> {
      let imgUrl = ' https://openweathermap.org/img/wn/10d@2x.png';
      $.ajax({
          type: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/weather?lat=51.2699768&lon=-113.9889491&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0',
          dataType: 'json',
      }).done(function(data){
          console.log('Success');
  
          imgUrl = imgUrl.replace('10d', data.weather[0].icon);
          $('#icon').attr('src', imgUrl);
          $('#city').text(data.name);
          $('#country').text(data.sys.country);
          $('#main').text(data.weather[0].main);
          $('#description').text(data.weather[0].description);
          $('#temp').text(data.main.temp);
          $('#feels_like').text(data.main.feels_like);
          $('#pressure').text(data.main.pressure);
          $('#humidity').text(data.main.humidity);
          $('#windSpeed').text(data.wind.speed);
          $('#cloudiness').text(data.clouds.all);
          $('#sunrise').text(data.sys.sunrise);
          $('#sunset').text(data.sys.sunset);
      }).fail(function(){
          console.log('Something went wrong');
      }).always(function(){
          console.log('Complete');
      });
    })();`;
    scriptDiv2(script);
  },
};
