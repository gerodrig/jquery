import { scriptDiv, scriptDiv2 } from '../helpers/printScript';
import { pagesAdvanced } from '../pages/pagesAdvanced';

import { chatNotification } from '../plugins/chatNotification';

export const routerAdvanced = {
  exercise1: function () {
    newExercise('section1', 1);

    scriptDiv2(`$(document).ready(() => console.log('DOM ready'));`);
    scriptDiv2(`$(() => console.log('DOM ready sample 2'));`);
    scriptDiv(`
    (() => {
        r( pageLoaded );
        function r(f){
            /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 10) : f()
        }
    
            function pageLoaded() {
                console.log('DOM ready sample 3');
            }
    })();
    `);
  },
  exercise2: function () {
    newExercise('section1', 2);

    const script = `(()=>{
        const route = {
          _routes: {},
          add: function (path, callback) {
            this._routes[path] = callback;
          },
          run: function () {
            $.each(this._routes, function (path) {
              if (location.href.match(path)) {
                //if the path matches the current url, run the callback
                this();
              }
            });
          },
        };
    
        route.add('exercise2', function () {
            console.log('I am on exercise 2, this code will run only on this page');
        });
    
        route.run();
    })();`;
    scriptDiv2(script);
  },
  exercise3: function () {
    newExercise('section1', 3);
    const script = `(() => {
            //long way
            if( $('h1').length){
            console.log('h1 exists');
            }

            //Simplified way
            $('h1').length && console.log('h1 exists');
        })();`;

    scriptDiv2(script);
  },
  exercise4: () => {
    newExercise('section1', 4);

    const script = `(() => {
            const $element = $('.element');

        //is a div
        $element.is('div') && console.log('is a div');
        
        //check clas
        $element.is('.element') && console.log('has the element class');

        //is this visible
        $element.is(':not(:visible)') && console.log('element is  invisible');

        //animate
        $element.animate({ 'width': '200px' }, 1500);

        //check if it is animated
        $element.is(':animated') && console.log('element is animated');
        })();`;
    scriptDiv2(script);
  },
  exercise5: () => {
    newExercise('section1', 5);

    const script = `(() => {
            const howMany = $('*').length;

            console.log('There are ' + howMany + ' elements in the DOM');
        })();`;

    scriptDiv2(script);
  },
  exercise6: () => {
    newExercise('section1', 6);

    const script = `(() => {
            $.fn.exist = function(){
                return this.length > 0;
            };

            console.log($('h1').exist() ? 'h1 exists' : 'h1 does not exist');
            console.log($('l1').exist() ? 'h1 exists' : 'l1 does not exist');
        })();`;

    scriptDiv2(script);
  },
  exercise7: () => {
    newExercise('section1', 7);

    const script = `(() => {
            $('li', '#firstList').css('color', 'red').each(function(){
                console.log($(this).html());
            });
            $('li', '#secondList').css('color', 'blue').each(function(){
                console.log($(this).html());
            }
            );
    
            const div = $('<div>', {
                id: 'newDiv',
                css: {
                    'background-color': 'orange',
                },
                width: '30px',
                height: '30px',
                animate: {
                    'width': '200px',
                    'height': '200px',
                }
            });
            div.appendTo('#container');
        })();`;

    scriptDiv2(script);
  },
  exercise8: () => {
    newExercise('section1', 8);

    //if link is external add target="_blank"
    const script = `$('a').each(function(){
            if(this.hostname != location.hostname ){
                $(this).attr('target', '_blank');
                //add icon image
                $(this).append('<img id="external" src="/src/assets/advanced/external-links.png" />');
                $('#external').css({
                    'width': '20px',
                    'margin-left': '5px',
                })
            }
        });`;

    scriptDiv2(script);
  },
  exercise9: () => {
    newExercise('section1', 9);

    const script = `(() => {

        //inneficient way to find elements
        // $('.eggs').text('Eggs Yummy');
        // $('.toasty').text('Toasty Yammy');
        // $('.bacon').text('Bacon Yukky');

        //efficient way to find elements
        const $breakfast = $('#breakfast');

        $breakfast.find('.eggs').text('Eggs Yummy').end()
                .find('.toasty').text('Toasty Yammy').end()
                .find('.bacon').text('Bacon Yukky');

    })();`;

    scriptDiv2(script);
  },
  exercise10: () => {
    newExercise('section1', 10);

    const script = `(() => {
        $(() => {
            $(document).on('contextmenu', (e) => {
                e.preventDefault();

                console.log(e.offsetX, e.offsetY);

                $('.menu').remove();

                const $menu = $('<div>', {
                    'class': 'menu',
                    'css': {
                        'top': e.offsetY,
                        'left': e.offsetX,
                    },
                    'animate': {
                        'width': '100',
                        'height': '300',
                    }
                });

                $menu.appendTo('h1');
            });
        })
    })();`;

    scriptDiv2(script);
  },
  exercise11: () => {
    newExercise('section1', 11);

    const script = `(() => {
        if( window != window.top){
            console.log('I am in an iframe');
            //prevent the iframe from being loaded in another iframe
            window.top.location = window.location;
        };    
    })();`;

    scriptDiv2(script);
  },
  exercise12: () => {
    newExercise('section1', 12);

    const script = `(() => {
            const url = $('#url').text();
            console.log(url);
    
            const a = $('<a>', {href: url});
    
            $('#container').append($('<code>',{
                text: 'Host name: ' + a.prop('hostname'),
            })).append($('<code>',{
                text: 'Path name: ' + a.prop('pathname'),
            })).append($('<code>',{
                text: 'Protocol: ' + a.prop('protocol'),
            })).append($('<code>',{
                text: 'Port: ' + a.prop('port'),
            })).append($('<code>',{
                text: 'Search: ' + a.prop('search'),
            })).append($('<code>',{
                text: 'Hash: ' + a.prop('hash'),
            }));
        })();`;

    scriptDiv2(script);
  },
  exercise13: () => {
    newExercise('section1', 13);

    (() => {
      //one way to make content editable
      // $('h1, p').attr('contenteditable', 'true');

      $('#editableDiv').attr('contenteditable', 'true');

      $('button').on('click', () => {
        const text = $('#editableDiv').text();
        console.log(text);
      });

      //append style to body
      // const $style = $('<style>', {
      //     id: 'divStyle',
      //     text: `
      //     body {
      //         background-color: orange;
      //         position: relative;
      //       }
      //       body {
      //         font-size: 20px;
      //         color: blue;
      //       }
      //       `
      // });
      // $style.appendTo('html');

      // $('#divStyle').css({
      //     display: 'block',
      //     whiteSpace: 'pre',
      // }).attr('contenteditable', 'true');
    })();
  },
  exercise14: () => {
    newExercise('section1', 14);

    const script = `(() => {
            $('#paragraph').attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
        })();`;

    scriptDiv2(script);
  },
  exercise15: () => {
    newExercise('section2', 1);

    const script = `<script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>`;
    scriptDiv(script);
  },
  exercise16: () => {
    newExercise('section2', 2);

    const script = `(() => {
            //check timing
            const start = new Date().getTime();
            //bad way to do it
            const $elem = $('#elem');
            // for(let i = 0; i <= 100; i++){
            //     $elem.append('<li>' + i + '</li>');
            //     //body append would take longer
            // }
    
            //good way to do it
            const arr = [];
            for(let i = 0; i <= 15; i++){
                arr.push('<li>' + i + '</li>');
            }
            //append all at once
            $elem.append(arr.join(''));
    
            //end time
            const end = new Date().getTime();
            console.log("Time: " + (end - start) + "ms");            
        })();`;

    scriptDiv2(script);
  },
  exercise17: () => {
    newExercise('section2', 3);

    const script = `(() => {
            $('#colors li').each(function(){
                //using jquery
                // const id = $(this).attr('id');
                //IN THIS CASE IS BETTER TO USE JAVASCRIPT
                const id = this.id;
                console.log(id);
            });
        })();`;
    scriptDiv2(script);
  },
  exercise18: () => {
    newExercise('section2', 4);

    const script = `(() => {
            const startSelector =(selector) => {
                timer(() => { // selector = '#colors li' example
                console.log(selector);
                for(let i = 0; i < 10000; i++){
                    $(selector);
                }
            });
        };
    
            startSelector('#bread div:first'); //61ms
            startSelector('#bread div'); //19ms
            startSelector('#bread .peanutButter'); //16ms
            startSelector('.peanutButter'); //14ms
            startSelector('#bread'); //6ms

            function timer(fn) {
                const startTime = new Date().getTime();
                  fn();
                  const endTime = new Date().getTime();
                  console.log("Time: " + (endTime - startTime) + "ms");
              }
        })();`;
    scriptDiv2(script);
  },
  exercise19: () => {
    newExercise('section2', 5);

    const script = `(() => {
      //bad practice for removing li elements

      // $('#numbers li').eq(2).remove();
      // $('#numbers li').remove();
      // $('#numbers li').remove();

      //better way
      const $numbers = $('#numbers li');

      // $numbers.eq(2).remove();
      // $numbers.eq(1).remove();
      // $numbers.eq(0).remove();

      //best way
      $numbers.eq(0).remove().end()
                .eq(1).remove().end()
                .eq(2).remove();
    })();`;
    scriptDiv2(script);
  },
  exercise20: () => {
    newExercise('section2', 6);

    const script = `(() => {
        //bad practice
        // $('#menuBtn').on('click', () => console.log('Show menu'));
        // $('#menuLink').on('click', () => console.log('Show menu'));

        //better practice
        //define function and they will be called when the event is triggered
        const showMenu = () => console.log('Show menu');
        // $('#menuBtn, #menuLink').on('click', showMenu);
        $('#menuBtn, #menuLink').click( showMenu);
    })();`;
    scriptDiv2(script);
  },
  exercise21: () => {
    newExercise('section2', 7);

    const script = `(() => {
        //create 50 li items and append to ul
        $('#list').append(new Array(50).fill(0).map((_, i) => '<li> item ' + (i + 1) + '</li>'));

        const arr = $('li');
        const iterations = 1000000;
        console.time('native cycle');

        for(let i = 0; i < iterations; i++){
            const arrLength = arr.length;
            for(let j = 0; j < arrLength; j++){
                arr[j];
            }
        }
        console.timeEnd('native cycle'); //55.90ms

        //It is slower using jquery
        console.time('forEach cycle');
        for(let i = 0; i < iterations; i++){
            arr.each(function(i, el){
                this;
            });
        }
        console.timeEnd('forEach cycle'); // 672.20ms
    })();`;
    scriptDiv2(script);
  },
  exercise22: () => {
    newExercise('section2', 8);

    const script = `(() => {
        //slow way to modify the DOM
        const iterations = 1000;
        const $element = $('#container');

        console.time('slow way DOM linked');
        for(let i = 0; i < iterations; i++){
            $element.width( Math.round(Math.random() * 100) );
            $element.height( Math.round(Math.random() * 100) );
        }

        console.timeEnd('slow way DOM linked'); // 62.11s

        //fast way to modify the DOM unlinking the elements
        console.time('fast way DOM unlinked');
        const $parent = $element.parent();
        $element.detach();

        for(let i = 0; i < iterations; i++){
            $element.width( Math.round(Math.random() * 100) );
            $element.height( Math.round(Math.random() * 100) );
        }

        $element.appendTo($parent);

        console.timeEnd('fast way DOM unlinked'); // 21.11s
    })();`;
    scriptDiv2(script);
  },
  exercise23: () => {
    newExercise('section2', 9);

    const script = `(() => {
            //wait for the DOM to be ready to reference button
            // $(document).ready(() => {
            //     $('#button').on('click', () => alert('Button clicked'));
            // });

            //wait for the DOM to be ready to reference button
            $(document).on('click', '#button', () => alert('Button clicked'));

            //create button and append to body
            const $button = $('<button id="button">Click me</button>');
            $('p').after($button);
        })();`;
    scriptDiv2(script);
  },
  exercise24: () => {
    newExercise('section2', 10);

    const script = `(() => {
            //create ul and append  100 li items
            $('p').after('<ul id="list"></ul>');
            const $list = $('#list');
            $list.append(new Array(100).fill(0).map((_, i) => '<li> item ' + (i + 1) + '</li>'));

            //slow way
            // $('li').css({
            //     'background-color': 'blue',
            //     'color': 'white',
            //     'list-style': 'none',
            // })
            
            //fast way
            const style = $('<style>');
            style.text('li { background-color: blue; color: white; list-style: none; }');
            style.appendTo('body');
        })();`;
    scriptDiv2(script);
  },
  exercise25: () => {
    newExercise('section3', 1);

    const script = `(() => {
            $('#app').append('<div id="message">This site requires JAVASCRIPT!, please activate it</div>');
            $('#message').css({
                'display': 'block',
            })  
            $('html.JS').css({
                display: 'none',
            });

            //add JS class to head
            $(function(){
                $('html').addClass('JS');
            });
            
        })();`;
    scriptDiv2(script);
  },
  exercise26: () => {
    newExercise('section3', 2);

    const script = `(() => {
            $('#app').append('<ul id="list"></ul>');
            const $list = $('#list');
            //create a list of 10 items with text "old item " and append to ul
            $list.append(new Array(10).fill(0).map((_, i) => '<li> old item ' + (i + 1) + '</li>'));
    
            //create an event that when a li is clicked it will be removed and then create a new li with text "new item"
    
            let counter = 1;
            //This wont work for new list items
            // $('li').on('click', function(){
            //     $(this).remove();
            //     $list.append('<li> new item ' + counter + '</li>');
            // });
    
            //This will work for new list items
            $list.on('click', 'li', function(){
                $(this).remove();
                $list.append('<li> new item ' + counter++ + '</li>');
            });
        })();`;
    scriptDiv2(script);
  },
  exercise27: () => {
    newExercise('section3', 3);

    const script = `(() => {
            $('#app').append('<button type="button" id="btnAction">Click me</button>');

            const $btnAction = $('#btnAction');

            //button only must work once
            $btnAction.one('click', function(){
                alert('Button clicked and will not work again');
            });
        })();`;
    scriptDiv2(script);
  },
  exercise28: () => {
    newExercise('section3', 4);
    const script = `(() => {
            //create div with class "slideshow" and style with w400 h200 and red background
            $('#app').append('<div class="slideshow"></div>');
            $('.slideshow').css({
                'width': '400px',
                'height': '200px',
                'background-color': 'red',
            });
            //add next button
            $('.slideshow').after('<button type="button" id="btnNext">Next</button>');

            //define function when next button is clicked
            $('#btnNext').on('click', function(e, color){
                color = color || 'pink';

                //change background color
                $('.slideshow').css({
                    'background-color': color,
                });
            });

            //simulate trigger in case function is not found    
            $('#btnNext').trigger('click', ['green']);
        })();`;
    scriptDiv2(script);
  },
  exercise29: () => {
    newExercise('section3', 5);
    const script = `(() => {
            const style = $('<style>').appendTo('body');
            style.text('#ball { width: 100px; height: 100px; background-color: orange; border-radius: 100%; position: absolute; top: 200px; }');

            const ball = $('<div id="ball"></div>').appendTo('#app');
            let startPosition = {};
            let elementPosition = {};

            //add listener to ball
            ball.on('mousedown touchstart', function(e){
                e.preventDefault();

                e = ( e.originalEvent.touches ) ? e.originalEvent.touches[0] : e;

                startPosition = {
                    x: e.pageX,
                    y: e.pageY,
                };
                elementPosition = {
                    x: $(this).offset().left,
                    y: $(this).offset().top,
                };

                ball.on('mousemove.rem touchmove.rem', function(e){
                    e = ( e.originalEvent.touches ) ? e.originalEvent.touches[0] : e;

                    const moveX = e.pageX - startPosition.x;
                    const moveY = e.pageY - startPosition.y;

                    ball.css({
                        'left': elementPosition.x + moveX,
                        'top': elementPosition.y + moveY,
                    });
                });
            });
        })();`;
    scriptDiv2(script);
  },
  exercise30: () => {
    newExercise('section3', 6);

    const script = `(() => {
            //create a div with id holder and 5 buttons
            $('p').after('<div id="holder"></div>');
            const $holder = $('#holder');
            $holder.append(new Array(4).fill(0).map((_, i) => '<button type="button" id="btn' + (i + 1) + '">Button ' + (i + 1) + '</button>'));
            $holder.append('<button type="button" id="btn5" style="margin-left: 400px; background-color: green;">Clear</button>');

            const button1 = $('#btn1');
            const button2 = $('#btn2');
            const button3 = $('#btn3');
            const button4 = $('#btn4');
            const button5 = $('#btn5');
            const paragraph = $('<p id="btn2Paragraph" style="color: red; margin-right: 500px"></p>').appendTo('#app');

            button1.on('click', () => alert('Button 1 clicked'));
            button2.on('mouseenter mouseleave', (e) => {
                paragraph.text('Mouse enter/leave button 2');

                //if mouseleave remove paragraph
                if (e.type === 'mouseleave') {
                    paragraph.text('');
                }
                console.log('Mouse enter/leave button 2')   
            });
            button3.on('click', Math.round(Math.random() * 20), (e) => alert('Random number is ' + e.data));
            button4.on('click.temp', () => alert('Button 4 Temp triggered'));

            //remove button 4 event
            button5.on('click', () => {
                button4.off('click.temp');
                alert('Button 4 Temp event removed');
            });
        })();`;
    scriptDiv2(script);
  },
  exercise31: () => {
    newExercise('section3', 7);
    const script = `(() => {
            $('p').last().after('<a href="https://www.gerar.ca" target="_blank">Go to my site</a>');

            //Long way to do it
            // $('a').on('click', function(e){
            //     e.preventDefault();
            // });

            //another way to do it
            // $('a').on('click', (e) => false);

            //shorter way
            // $('a').on('click', false);
            $('a').click(false);
        })();`;
    scriptDiv2(script);
  },
  exercise32: () => {
    newExercise('section3', 8);
    const script = `(() => {
            //Create a button with btnAction id
            $('p').last().after('<button type="button" id="btnAction">Click me</button>');

            const button = $('#btnAction');

            //add event listener to button
            button.on('click', () => 'button');
            
            //create another event for button to alert the result of the first event
            button.on('click', ({result},) => alert(result + ' clicked'));
        })();`;
    scriptDiv2(script);
  },
  exercise33: () => {
    newExercise('section3', 9);
    const script = `(() => {
      //create 3 buttons and append before id container
      $('#container').before('<button type="button" id="btn1">Jump</button>');
      $('#container').before('<button type="button" id="btn2">Punch</button>');
      $('#container').before('<button type="button" id="btn3">Click</button>');

      const button1 = $('#btn1'),
        button2 = $('#btn2'),
        button3 = $('#btn3');

      const container = $('#container');

      container.on(
        {
        jump: () => {alert('Jump')},
        punch: (e, data) => alert('Punching ' + data + '!' ),
        click: () => alert('Simulating a Click'),
        }
      );

      button1.on('click', () => container.trigger('jump'));
      button2.on('click', () => container.trigger('punch', ['you']));
        button3.on('click', () => container.trigger('click'));
    })();`;
    scriptDiv2(script);
  },
  exercise34: () => {
    newExercise('section3', 10);
  },
  exercise35: () => {
    newExercise('section4', 1);

    const script = `(() => {
        ///create 2 anchor tags with assets to be downloaded
        $('p').last().after('<a href="/src/assets/chinchilla.jpeg" target="_blank">Chinchilla 1</a>');
        $('a').after('<a href="/src/assets/chinchilla2.jpeg" target="_blank">Chinchilla 2</a>');
        $('a').last().after('<a href="/src/assets/1.jpg" target="_blank">Image 1</a>');

        // add class fetchsize to all anchor tags
        $('a').addClass('fetchsize');

        //get all a tags with class fetchsize and check their size
        $('a.fetchsize').each(function() {
            const link = $(this);

            //get the size of the file
            $.ajax({
                type: 'HEAD',
                url: link.href,
                complete: function(xhr) {
                    const size = humanizeDataSize(xhr.getResponseHeader('Content-Length'));
                    // console.log(humanizeDataSize(size));
                    link.append('<span> (' + size + ')</span>');
                }
            });
        });
        function humanizeDataSize(size) {
            // return in kilobytes
            const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
        
          let ord = Math.floor(Math.log(size) / Math.log(1024));
          ord = Math.min(Math.max(0, ord), units.length - 1);
        
            const s = Math.round(size / Math.pow(1024, ord) * 100) / 100;
            return s + ' ' + units[ord];
        
        }
    })();`;
    scriptDiv2(script);
  },
  exercise36: () => {
    newExercise('section4', 2);
    const script = `(() => {
            $.get('/src/assets/data/1.json').done(({message}) => {
                console.log(message);
                //create a code component and append to the body
                $('p').after('<code>' + message + '</code>');
                
            }).fail(() => console.log('File does not exist'));
        })();`;
    scriptDiv2(script);
  },
  exercise37: () => {
    newExercise('section4', 3);
    const script = `(() => {
      $.when($.get('/src/assets/data/1.json'), $.get('/src/assets/data/2.json'))
        .then((res1, res2) => {
            const {message} = res1[0];
            const {name, age } = res2[0];
            const $code = $('<code>').text(message + ' ' + name + ' ' + age);
            $('p').after($code);
        })
        .fail(() => console.log('File does not exist'));
    })();`;
    scriptDiv2(script);
  },
  exercise38: () => {
    newExercise('section4', 4);
    const script = `(() => {
        $.get('https://jsonip.com', ({ip}) => {
            const $code = $('<code>').text('Your IP is ' + ip);
            $('p').after($code);
        });

        //using callback
        // $.get('https://jsonip.com/?callback=?', ({ip}) => console.log(ip));
    })();`;
    scriptDiv2(script);
  },
  exercise39: () => {
    newExercise('section4', 5);

    const script = `(() => {
        const par1 = $('#paragraph1'),
              par2 = $('#paragraph2'),
              par3 = $('#paragraph3');
    
        par1.load('/src/assets/data/exercise39.txt');
        par2.load('/src/assets/data/exercise39.html #header');
        par3.load('/src/assets/data/exercise39.html .whatever');
    })();`;
    scriptDiv2(script);
  },
  exercise40: () => {
    newExercise('section4', 6);

    const script = `(() => {
        //create a form with id form and 2 inoputs and a text area
        const $form = $('<form>').attr('id', 'form');
        const $input1 = $('<input>').attr({type: 'text', name: 'lawyer', value: 'Mimi Martinez'});
        const $input2 = $('<input>').attr({type: 'email', name: 'email', value: 'Mimi@lawyer.com'});
        const $textarea = $('<textarea>').attr({name: 'message'}).text('I am a lawyer');
        $form.append($input1, $input2, $textarea);
        $('#container').append($form);

        const $code = $('<code></code>');
        $code.append('serialize 1: ' + $form.serialize());
        const brother = {
            type: 'Teddy Bear',
            name: 'Benito',
        }
        $code.append('<br>serialize 2: ' + $.param(brother));
        $code.append( '<br>serialize 3: ' + $form.serializeArray());
        $('#container').after($code);
    })();`;
    scriptDiv2(script);
  },
  exercise41: () => {
    newExercise('section4', 7);

    const script = `(() => {
        
        const fileInput = $('#uploadFile');
        const button = $('#uploadButton');

        //add multiple to fileINput
        fileInput.attr('multiple', true);

        button.on('click', () => {
            const files = fileInput.prop('files');
            console.log(files);

            if (files.length === 0) {
                alert('Please select a file');
                return;
            };

            const formData = new FormData();

            formData.append('file', files[0]);

            $.ajax({
                url: 'https://reqres.in/api/users',
                data: formData,
                contentType: false,
                processData: false,
                type: 'POST',
                success: (data) => {
                    console.log(data);
                }
            });
        });
    })();`;
    scriptDiv2(script);
  },
  exercise42: () => {
    newExercise('section4', 8);

    const script = `(() => {
        //create img and append after the p
        const $img = $('<img>').attr('src', '');
        $('p').after($img);

        const page = 'canchinrescue';
        const url = 'https://graph.facebook.com/' + page + '/picture?type=large';

        $('img').attr('src', url);
    })();`;
    scriptDiv2(script);
  },
  exercise43: () => {
    newExercise('section4', 9);

   const script = `(() => {
        const input = $('<input>').attr({
            type: 'text',
            name: 'apikey',
            placeholder: 'Enter your API key',
        })
        const button = $('<button>').text('Get Weather');

        $('#weather').append(input, button);

        button.on('click', () => {
            const apiKey = input.val();
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=Airdrie,uk&appid=' + apiKey;
            $.get(url).done((data) => {
                console.log(data);
                //serialize the data and append to the button in a code tag
                const $code = $('<code>').attr('id', 'wcode').css({marginTop: '20px'}).text(JSON.stringify(data));
                $('#weather').after($code);

            }).fail(() => {
                alert('Please enter a valid API key');
            });
        });
    })();`;
    scriptDiv2(script);    
  },
  exercise44: () => {
    newExercise('section4', 10);

    const script = `(() => {
        const blog = 'heymonsterboy.tumblr.com';
        const post = $('#tumblr');
        const url = 'http://' + blog + '/api/read/json?callback=?';

        $.getJSON(url).done((data) => {
            console.log(data);
            const $post = $('#tumblr');
           $post.append('<h2>' + data.tumblelog.title + '</h2>');
            $post.append('<p>' + data.tumblelog.description + '</p>');
            
            if(data.posts[0]['photo-url-250']){
                $post.append('<img src="' + data.posts[0]['photo-url-250'] + '">');
            }

        }).fail(() => {
            alert('Blog does not exist');
        });
    })();`;
    scriptDiv2(script);
  },
  exercise45: () => {
    newExercise('section4', 11);

    const script = `(() => {
        const ip = '38.140.119.156';
        const api = 'http://www.geoplugin.net/json.gp?ip='

        $.getJSON(api + ip).done((data) => {
            console.log(data);
            const $code = $('<code>').attr('id', 'ipcode').css({marginTop: '20px'}).text(JSON.stringify(data));
            $('#geolocation').after($code);
        }).fail(() => {
            alert('IP does not exist');
        });
    })();`;
    scriptDiv2(script);
  },
  exercise46: () => {
    newExercise('section4', 12);

    const script = `(() => {
        
        const api = 'https://dog.ceo/api/breed/pug/images/random';
        const $img = $('<img>').attr('src', '');

        $.getJSON(api).done((data) => {
            console.log(data);
            $img.attr('src', data.message);
            $('#dog').append($img);
        }).fail(() => {
            alert('Dog does not exist');
        });
    })();`
    scriptDiv2(script);
  },
  exercise47: () => {
    newExercise('section4', 13);

    const script = `(() => {
        const preloader = $('#preloader');
        const doc = $(document);
        
        doc.ajaxStart(() => {
            preloader.fadeIn();
        });
        
        doc.ajaxComplete(() => {
            preloader.delay(1000).fadeOut();
        });

        $.get('https://reqres.in/api/users').done((data) => {
            console.log(data);

            const $code = $('<code>').attr('id', 'users').css({marginTop: '20px'}).text(JSON.stringify(data));
            $('#users').after($code);

        }).fail(() => {
            alert('Error');
        });
    })();`;
    scriptDiv2(script);
  },
    exercise48: () => {
    newExercise('section5', 1);
    const script = `(() => {
        console.log('Mimi Chinchilla');
        console.log('%cThis is a custom message', 'color: red; font-size: 20px');
        console.error('Error message');
        console.warn('Warning message');
        console.info('Information message');
        console.debug('Debug message');
        console.table({name: 'Mimi', species: 'Chinchilla', is: 'a', cutie: true});
        console.time('timer');
        console.timeEnd('timer');
        console.group('Group');
        console.log('This is a group');
        console.groupEnd('Group');
        console.groupCollapsed('Collapsed Group');
        console.log('This is a collapsed group');
        console.groupEnd('Collapsed Group');
       for(let i = 0; i < 10; i++){
           console.count('Count');
       }
    })();`;
    scriptDiv2(script);
    },
    exercise49: () => {
        newExercise('section5', 2);

        const script = `(() => {

            $.fn.required = function(){

                const input = $(this);
                const help = "";
    
                if(input.attr('required')){
                    showError(input);
                }
    
                input.on('keyup', () => {
                    if(input.val().length > 0){
                        input.next('.text-error').remove();
                    } else {
                        showError(input);
                    }
                });
            };


            function showError(input){
                const $error = $('<div class="text-error"><small>This field is required</small></div>');
                input.after($error);
            }
                $('#txtName').required();
                $('#txtLastName').required();
            })();`;
        scriptDiv2(script);                                           
    },
    exercise50: () => {
        newExercise('section5', 3);

        const script = `(() => {
            //insert a number and a button counter 
            const $number = $('<p id="number">0</p>');
            const $button = $('<button id="counter">Counter</button>');
            $('#container').append($number, $button);

            (function($){
                $.fn.count = function(){
                    $('#number').text(parseInt($('#number').text()) + 1);
                }

            $button.click(() => $button.count());
            })(jQuery);
        })();`;
        scriptDiv2(script);
    },
    exercise51: () => {
        newExercise('section5', 4);

        (() => {
            $('.container').append('<button class="btn btn-primary" id="chatNotification1">Notification 1</button>');
      
            $('#chatNotification1').on('click', function () {
            chatNotification({
                image: '/src/assets/chatNotification/Ethan.jpeg',
                name: 'Mimi Martinez',
                location: 'Airdrie, AB'
                });
            });
        })();
        

        const script = `(() => {
            $('.container').append('<button class="btn btn-primary" id="chatNotification1">Notification 1</button>');
      
            $('#chatNotification1').on('click', function () {
            chatNotification({
                image: '/src/assets/chatNotification/Ethan.jpeg',
                name: 'Mimi Martinez',
                location: 'Airdrie, AB'
                });
            });
        })();`;
        scriptDiv(script);
    },
    exercise52: () => {
        newExercise('section5', 5);

       const script = `(() => {
            console.log(typeof null);
            console.log( $.type(null) );

            console.log(typeof undefined);
            console.log( $.type(undefined) );

            console.log(typeof 'text');
            console.log( $.type('text') );

            console.log(typeof 123);
            console.log( $.type(123) );

            console.log(typeof []);
            console.log( $.type([]) );

            console.log(typeof /abc/);
            console.log( $.type(/abc/) );
        })();`;
        scriptDiv2(script);
    },
    exercise53: () => {
        newExercise('section5', 6);

        const script = `(() => {
            //array for days of the week
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            const $ul = $('<ul>').css('list-style', 'none');
            $ul.appendTo('#container');

            days.forEach((day) => {
                const element = $('<li><input type="checkbox" class="day">' + day + '</li>');
                // set input id inside li to day
                element.find('input').attr('id', day.toLowerCase()).css('margin-right', '10px');
                $ul.append(element);
            });
            $('#monday').prop('checked', true);

            //update a text with the number of days selected
            const $text = $('<p id="text">[Monday] selected</p>');
            $text.insertAfter('#container');

            //update the text when a checkbox is checked
            $('.day').on('change', function () {
                const $days = $('.day:checked');
                $text.text('[' + $days.map((i, day) => {
                    //uppercase first letter
                    return $(day).attr('id').charAt(0).toUpperCase() +
                        $(day).attr('id').slice(1);
                }).get().join(', ') + '] selected');
            });
        })();`;
        scriptDiv2(script);
    },
    exercise54: () => {
        newExercise('section5', 7);

        const script = `(() => {
            //create and array from 1 to 31
            const month_days = Array.from(Array(31), (_, i) => i + 1);
            const today = new Date();
            const currentYear = today.getFullYear();

            //check how many Sundays
            const sundays = $.grep(month_days, (day) => {
    
                const month = today.getMonth();
                const date = new Date(currentYear, month, day);
                return date.getDay() === 0;
            });
            console.log({sundays});
            $('<p>').attr('id', 'sundays').text('There are ' + sundays.length + ' Sundays in this month').css('color', 'blue').appendTo('#container');

            //print each sunday of the month
            
            const currentMonth = today.toLocaleString('default', { month: 'long' });
            

            sundays.forEach((sunday) => {
                //get the month name
                $('<p>').text('Sunday ' + sunday + ' ' + currentMonth + ' ' + currentYear).appendTo('#container');
            });
        })();`;
        scriptDiv2(script);
    },
    exercise55: () => {
        newExercise('section5', 8);

        const script = `(() => {
            //create 20 random numbers
            const numbers = Array.from(Array(20), () => Math.floor(Math.random() * 100));
            $('<button type="button">Order Asc</button>').css({marginBottom: '20px'}).appendTo('#container');
            $('<button type="button">Order Desc</button>').css({marginLeft: '20px'}).appendTo('#container');
            $('<ul id="numbers">').appendTo('#container');
    
            numbers.forEach( el => {
                $('<li>').text(el).appendTo('#numbers');
            });
    
            //order the numbers if button is clicked
            $('button').on('click', function () {
                // $('#numbers').empty();
                // numbers.sort((a, b) => a - b);
                // numbers.forEach( el => {
                //     $('<li>').text(el).appendTo('#numbers');
                // });
                const nums = $('#numbers li');
                if ($(this).text().includes('Asc')) {
                nums.sort((a, b) => {
                    return $(a).text() - $(b).text();
                });
            
            } else {
                nums.sort((a, b) => {
                    return $(b).text() - $(a).text();
                });
            }
            $('#numbers').empty().append(nums);
            });
        })();`;
        scriptDiv2(script);
    },
    exercise56: () => {
        newExercise('section5', 9);

        const script = `(() => {
            
            function JSON_Reader(file){

                const data = $.Deferred();

                $.ajax({
                    url: '/src/assets/data/' + file + '.json',
                    dataType: 'json',
                    success: function (response) {
                        data.resolve(response);
                    },
                    error: function (error) {
                        data.reject(error);
                    }
                    });
                    return data.promise();
                }
                const result = JSON_Reader('1');

                result.done(function (response) {
                    console.log('received data: ' ,response);
                });

                result.fail(function (error) {
                    console.log('error: ', error);
                });
        })();`;
        scriptDiv2(script);
    },
    exercise57: () => {
        newExercise('section5', 10);

        const script = `(() => {
            const element = $('#square');
            let direction = 'down';

            // if(direction === 'up'){
            //     element.slideUp();
            // } else {
            //     element.slideDown();
            // }

            element[direction === 'up' ? 'slideUp' : 'slideDown']();
        })();`;
        scriptDiv2(script);
    },
    exercise58: () => {
        newExercise('section5', 11);

        const script = `(() => {
            $('<button type="button" id="btn">Convert to Black and White</button>').css({marginBottom: '20px'}).appendTo('#container');

            $('<canvas id="canvas" width="220" height="319" />').appendTo('#container');

            const image = $('<img>');
            const canvas = $('#canvas')[0];
            const ctx = canvas.getContext('2d');

            image.on('load', function () {
                ctx.drawImage(this, 0, 0);
            });

            image.attr('src', '/src/assets/chinchilla.jpeg');

            $('#btn').on('click', function () {
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                let gray = 0;

                for (let i = 0; i < data.length; i += 4) {
                    gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = gray;
                    data[i + 1] = gray;
                    data[i + 2] = gray;
                }

                ctx.putImageData(imageData, 0, 0);
            });
        })();`;
        scriptDiv2(script);
    },       
    exercise59: () => {
        newExercise('section5', 12);

        const script = `(() => {
            //create 2 buttons and 1 checkbox inside container
            $('<button type="button" id="btn1">Button 1</button>').css({marginLeft: '20px'}).appendTo('#container');
            $('<button type="button" id="btn2">Button 2</button>').css({marginLeft: '20px'}).appendTo('#container');
            $('<input type="checkbox" id="checkbox" checked />').css({marginLeft: '20px'}).appendTo('#container');

            const callback =  $.Callbacks();
            console.log(callback);

            callback.add((msg) => {
                console.log(msg);
            })

            callback.add(() => {
                console.log('--------');
            });

            $('#btn1').on('click', function () {
                callback.fire('Line 1');
                callback.fire('Line 2');
                callback.fire('Line 3');

            });

            const callbackFlag = $.Callbacks('stopOnFalse');

            callbackFlag.add(() => {
                return $('#checkbox').is(':checked');
            });
            callbackFlag.add(() => {
                console.log('Checkbox is checked buttons is enabled');
                alert('Checkbox is checked buttons is enabled, check console for info on button 1');
            });

            $('#btn2').on('click', () => {
                callbackFlag.fire();
            });
        })();`;
        scriptDiv2(script);
    },
    exercise60: () => {
        newExercise('section5', 13);

        const script = `(() => {
            //create 5 paragraphs inside container with class 'lipsum' and random length lipsum text
            $.expr.pseudos.has = $.expr.createPseudo((text) => {
                return (el) => {
                    return ( el.textContent || el.innerText || jQuery(el).text() || '').toLowerCase().indexOf(text.toLowerCase()) > -1;
                };
            });

            const element = $('.lipsum:has(lorem)');

            console.log(element);
        })();`;
        scriptDiv2(script);
    },
    exercise61: () => {
        newExercise('section5', 14);

        const script = `(() => {
            //create 2 buttons one saying show and other hide
            $('<button type="button" id="show">Show</button>').css({marginLeft: '20px'}).appendTo('#buttons');
            $('<button type="button" id="hide">Hide</button>').css({marginLeft: '20px'}).appendTo('#buttons');
            $('<img id="chinchi" src="/src/assets/chinchilla2.jpeg" />').css({width: '200px', height: '200px', marginTop: '20px'}).appendTo('#container');

            jQuery.easing.bounce = function (x, t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
                }
            };

            const element = $('#chinchi');

            $('#show').on('click', function () {

                //anima a slow slideDown
                element.stop().animate({
                    bottom: 0,
                    opacity: 1
                }, 1500, 'bounce');
                //anima a slow fadeOut
                // element.fadeIn('slow');

            });

            $('#hide').on('click', function () {
                // element.fadeOut('slow');
                element.stop().animate({
                    opacity: 0,
                    bottom: -500
            });
        });
        })();`;
        scriptDiv2(script);
    },
    exercise62: () => {
        newExercise('section5', 15);

        const script = `(() => {
            const element = $('#container').css({
                backgroundColor: 'blue',
                width: '20px',
                height: '20px',
                textAlign: 'center',
                lineHeight: '40px',
                color: 'white'
            })

            console.log('elements start ');
            console.log(element.queue());
            
            element.animate({
                width: '200px',
                height: '200px',
            }, 1000);

            element.queue(function(next){
                $.get('/src/assets/data/1.json', function(r){
                    element.text(r.message);
                    next();
                })
            });

            console.log(element.queue().length);

            element.animate({
                borderRadius: '20',
            }, 800);
            console.log(element.queue().length);

        })();`;
        scriptDiv2(script);
    },
    exercise63: () => {
        newExercise('section5', 16);
        const script = `(() => {
            const element = $('#container').css({
                height: '30px',
                width: '30px',
                backgroundColor: 'blue',
            });

            //using customized css elementos
            $.cssHooks['rotate'] = {
                set: function (el, value) {
                    console.log(value);
                    el.style.transform = 'rotate(' + parseInt(value, 10) + 'deg)';
                },
            };
            element.css('rotate', 45);
        })();`;
        scriptDiv2(script);        
    },
    exercise64: () => {
        newExercise('section5', 17);

        const script = `(() => {
            //create a button to toggle image and insertbefore container
            $('<button type="button" id="toggle">Show / Hide</button>').insertBefore('#container');
            //insert image in container
            $('<img id="chinchilla" src="/src/assets/smallNotification/chinchilla.jpeg" />').css({width: '200px', height: '200px', marginTop: '20px', borderRadius: '80px'}).appendTo('#container');

            //toggle using proxy method:
            $('#toggle').on('click', $.proxy(function () {
                $(this).toggle();
            }, $('#chinchilla')))
        })();`;
        scriptDiv2(script);
    },
    exercise65: () => {
        newExercise('section5', 18);

        const script = `(() => {
            //create 3 inputs 
            for( let i = 0; i < 3 ; i++){
                $('<input type="text" id="input' + (i + 1) + '" />').css({width: '260px', margin: '10px 0'}).insertBefore('#container');
            }

            //write their id on each one
            $('input[type=text]').val(function(){
                return this.id;
            });

            //filter to exclude all ps that include word lipsum
            const p = $('.lipsum');

            p.filter(function(){
                return $(this).text().match(/lorem/i) !== null;
            }).hide();

            const par = p.filter(':visible')

            //add a number to the paragraph with prepend
            par.prepend(function(index){   
                return ( index + 1) + ") ";
            });

            //color green even and blue odds
            par.css('color', function(index){
                return index % 2 === 1 ? 'blue' : 'green';
            });

            //control if paragraph is too long

            p.html( function(){
                let content = $(this).text();

                return content.length > 30 
                    ?  content.slice(0, 30) + '...' 
                    : content; 
            });

            //rgb(33, 37, 41)

            $('#question').css('color', 'red');

            const answer = (p.eq(0).is(function(){
                return $(this).css('color').match(/green|rgb\(33, 37, 41\)|#00FF00/i)})); 

            $('#answer').text(answer);
        })();`;
        scriptDiv2(script);
    },
    exercise66: () => {
        newExercise('section6', 1);

        const script = `(() => {
            //add modernizer library
            $('<script src="/src/libs/modernizr-custom.js"></script>').appendTo('head');

            //get all the classes in html tag
            const classes = $('html').attr('class').trim().split(' ');
            classes.push('audio');

            classes.forEach( (item) => {
                let text = item[0].toUpperCase() + item.slice(1);
                const supported = Modernizr[item] || false;
                let span = $('<span></span>').text(supported).css('color', supported ? 'green' : 'red');

                $('<code id="fontface">Supports ' + text + '? ' + '</code>').append(span).appendTo('#container');
            });
        })();`;
        scriptDiv2(script);
    },
    exercise67: () => {
        newExercise('section6', 2);

        const script = `(() => {
            const w = $(window);

            w.on('resize', function(){

                $('#message').remove();

                const mediaQuery = window.matchMedia('(max-width: 640px) and (orientation: portrait)');
                
                if(mediaQuery.matches){
                    $('<p id="message">Screen is in portrait mode</p>').appendTo('#container');
                } else {
                    $('<p id="message">Screen is in landscape mode</p>').appendTo('#container');
                }
            });
        })();`;
        scriptDiv2(script);
    },
    exercise68: () => {
        newExercise('section6', 3);

        const script = `<head>
            //other head elements
            <script src="https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js"
              integrity="sha512-8Nk/zoTKjNixnM15wXjpF26KR4Ln87cc5Yllc5xP54wwbcKnljAAn2JP+tYAS8+4e7s/XK8XTiDH0Ltw2fmoBQ=="
              crossorigin="anonymous" referrerpolicy="no-referrer">
            </script>
          </head>

          head.load('https://code.jquery.com/jquery-3.6.0.min.js', 'js/app.js');
          `
        scriptDiv(script);
    },
    exercise69: () => {
        newExercise('section6', 4);

        const script = `(() => {
            //create div notifications
            const container = $('<div id="container"></div>').css({
                position: 'fixed',
                top: '20px',
                right: '0',
            }).appendTo('#app');

            //create button to show notifications
            $('<button type="button" id="show">Show notifications</button>').insertAfter('p');
            $('<p>Check console</p>').css('color', 'red').insertAfter('#show');

            $('#show').on('click', function(){

                const random = Math.floor(Math.random() * 1000);
                //create notification
                const notification = $('<div class="notification"></div>').text('Mimicita ' + random ).css({
                    width: '150px',
                    height: '100px',
                    backgroundColor: 'purple',
                    padding: '10px',
                    marginBottom: '10px',
                    color:  'white',
                }).appendTo(container);

                notification.append(' <a href="">X</a>');

                //if notification is clicked, print alert with the random number
                
            });
            container.on('click', '.notification', function(){
                // alert(random);
                console.log($(this).text().split(' ')[1]);
            });
    
            container.on('click', '.notification a', function(e){
                e.preventDefault();
                $(this).parent().slideUp(500, function(){
                    $(this).remove();
                });
            });
        })();`;
        scriptDiv2(script);
    },
    exercise70: () => {
        newExercise('section6', 5);

        const script = `(() => {
            //import library
            let arr = [];
            const obj = {
                name: 'Mimicita',
                age: 5,
                color: 'gray',
                weight: '1lb',
            }
            console.log(obj);
            // check if library is loaded
            $.getScript('https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-umd-min.js', function() {
                 //create an array of 20 random numbers wait until the library is loaded
                 arr = _.range(15).map( () => Math.floor(Math.random() * 15));
                 //console.log(arr);
                 //append pair numbers to container
                 $('<p>Pair numbers: ' + _.filter( arr, (num) => num % 2 === 0) + '</p>').appendTo('#container');
                 //max number
                    $('<p>Max number: ' + _.max(arr) + '</p>').appendTo('#container');
                //sorted number from Max to Min
                $('<p>Sorted number from Max to Min: ' + _.sortBy(arr, (num) => -num) + '</p>').appendTo('#container');

                //shuffle numbers
                $('<p>Shuffle numbers: ' + _.shuffle(arr) + '</p>').appendTo('#container');

                //unique numbers
                $('<p>Unique numbers: ' + _.uniq(arr) + '</p>').appendTo('#container');

                //get keys from object
                $('<p>Keys from object: ' + _.keys(obj) + '</p>').appendTo('#container');

                //get values from object
                $('<p>Values from object: ' + _.values(obj) + '</p>').appendTo('#container');

                //get pairs from object
                $('<p>Pairs from object: ' + _.pairs(obj) + '</p>').appendTo('#container');

                //check how many elements are in the object
                $('<p>Number of elements in the object: ' + _.size(obj) + '</p>').appendTo('#container');
                
            });
        })();`;
        scriptDiv2(script);
    },
    exercise71: () => {
        newExercise('section6', 6);

        const script = `(() => {
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js', function() {
                console.log(moment().format('HH:mm:ss'));
                console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

                console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
                // Output: "April 4th 2023, 10:30:15 am"
                let myDate = moment('2023-04-04', 'YYYY-MM-DD');
                console.log(myDate.format('dddd, MMMM Do YYYY'));
                // Output: "Tuesday, April 4th 2023"
                let tomorrow = moment().add(1, 'day');
                console.log(tomorrow.format('dddd, MMMM Do YYYY'));
                // Output: "Wednesday, April 5th 2023"
       
                let myDate2 = moment('2023-04-04T10:00:00');
                console.log(myDate2.fromNow());
                // Output: "in a few seconds"

                 // Create the first example paragraph
                let example1 = $('<p>').text("Current time: " + moment().format('HH:mm:ss'));
                // Create the second example paragraph
                let example2 = $('<p>').text("Formatted date and time: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
                // Create the third example paragraph
                let example3 = $('<p>').text("Date object formatted as a string: " + moment('2023-04-04', 'YYYY-MM-DD').format('dddd, MMMM Do YYYY'));
                // Create the fourth example paragraph
                let example4 = $('<p>').text("Date object with 1 day added: " + moment().add(1, 'day').format('dddd, MMMM Do YYYY'));
                // Create the fifth example paragraph
                let example5 = $('<p>').text("Relative time: " + moment('2023-04-04T10:00:00').fromNow());

                // Append all the example paragraphs to the #container element
                $('#container').append(example1, example2, example3, example4, example5);
            });
        })();`;
        scriptDiv2(script);
    },
    exercise72: () => {
        newExercise('section6', 7);
    },
    exercise73: () => {
        newExercise('section6', 8);

        const script = `(() => {
            $(document).ready(function() {
                //only show once if there is local storage dont show
                if (localStorage.getItem('notification') === null) {
                    console.log('no local storage');
                    $('<div class="notification">This is is the first time loading the page</div>').appendTo('#container');
                } else {
                    $('<div class="notification">This is not the first time loading the page check local storage</div>').appendTo('#container');
                }
                localStorage.setItem('notification', 'true');
            });
        })();`;
        scriptDiv2(script);
    },
    exercise74: () => {
        newExercise('section6', 9);

        const script = `(() => {

            //create buttons to change and reset image
            $('<div>').attr('id', 'buttons').insertBefore('#container');
            $('<button>').attr('id', 'change').text('Change').appendTo('#buttons');
            $('<button>').attr('id', 'reset').text('Reset').css('margin-left', '20px').appendTo('#buttons');

            const loadContent = function(){
                
                $('<img>').attr({
                    id: 'chinnie',
                    src: '/src/assets/chinchilla3.png',                   
                }).appendTo('#container');
                
                Caman('#chinnie', function () {
                    this.brightness(10);
                    this.contrast(30);
                    this.sepia(60);
                    this.saturation(-30);
                    this.render();
                  });

                  console.log(document.getElementById('chinnie'));

                $('<img>').attr('src', '/src/assets/chinchilla3.png').appendTo('#container');
            };

            let changed = true;
            //Buttons events
            $('#change').on('click', function() {
                Caman('#chinnie', function () {
                if(changed)  return;
                
                this.brightness(10);
                this.contrast(30);
                this.sepia(60);
                this.saturation(-30);
                this.render();
                  });
            });

            $('#reset').on('click', function() {
                Caman('#chinnie', function () {
                    this.reset();
                    this.render();
                    changed = false;
                  });
            });

            //add script to head
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js', loadContent);

        })();`;
        scriptDiv2(script);
    },
    exercise75: () => {
        newExercise('section6', 10);

        const script = `(() => {
            
            const markdownLoad = () => {
                console.log(markdown.toHTML( "Hello *World*!" ) );

            //Events
            $('#convert').on('click', function() {
                const html = $('#markdown').val();

                const converted = markdown.toHTML(html);

                console.log(converted);

                $('#markToHtml').html(converted);          
            });
            };

            //create textarea
            $('<textarea>').attr({
                id: 'markdown',
                placeholder: 'Enter markdown here',
                cols: '80',
                rows: '10',
                class: 'form-control',
            }).appendTo('#container');

            //create button
            $('<button>').attr({
                id: 'convert',
                class: 'btn btn-primary',
            }).text('Convert').css('marginBottom', '20px').insertBefore('#container');

            //create paragraph where the markdown will be converted
            $('<div>').attr('id', 'markToHtml').css('margin-top', '40px').insertAfter('#container');


            //load script 
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js', markdownLoad);
        })();`;
        scriptDiv2(script);
    },
    exercise76: () => {
        newExercise('section6', 11);

       const script = `(() => {
            
            $('<button>').attr('id', 'animate').text('Animate').insertBefore('#container');

            const container = $('#container');
            //set container to 150 x 150
            container.css({
                width: '150px',
                height: '150px',
                marginTop: '20px',
                backgroundColor: 'white',
            });

            //Event for animate button
            $('#animate').on('click',  () => {
                const $button = $('#animate');
                const $temp = $('<p>').insertAfter('#container');
                $button.prop('disabled', true);

                const rgb = (color) => {
                    $temp.text(jQuery.Color(color).toRgbaString());
                };
                
                container.animate({ backgroundColor: 'blue' }, () => rgb('blue'))
                        .animate({ backgroundColor: 'green' }, () => rgb('green'))
                        .animate({ backgroundColor: 'red' },() => rgb('purple'))
                        .animate({ backgroundColor: 'yellow' }, () => {
                            rgb('yellow');
                            $button.prop('disabled', false);
                            $temp.remove();
                            container.css('backgroundColor', 'white');
                        } )
            });

            //load script
            $.getScript('https://code.jquery.com/color/jquery.color-2.2.0.min.js' );
        })();`;
        scriptDiv2(script);
    },
    exercise77: () => {
        newExercise('section6', 12);

        const script = `(() => {
            //load script
            $('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">');
            
            //load blue box
            const container = $('#container');

            //extend jqery with animate.css
            $.fn.extend({
                animateCss: function (animationName) {
                    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animate__animated ' + animationName).one(animationEnd, () => {
                        this.removeClass('animate__animated ' + animationName);
                    });
                },
            });

            //set container to 150 x 150
            container.css({
                width: '150px',
                height: '150px',
                backgroundColor: 'blue',
            });

            //load animate.css
            container.animateCss('animate__animated animate__bounce');

            //create button
            $('<button>').attr('id', 'animate').text('Animate').css('margin-top', '20px').insertAfter('#container');

            //Event for animate button
            $('#animate').on('click',  () => {
                //block button while animation is running
                $('#animate').prop('disabled', true);
                container.animateCss('animate__animated animate__bounce');

                // container.animateCss('animate__fadeIn animate__delay-2s');
                
                //unblock button after animation is done
                setTimeout(() => {
                    $('#animate').prop('disabled', false);
                }   , 1000);
            }
            );
        })();`;
        scriptDiv2(script);        
    },
    exercise78: () => {
        newExercise('section6', 13);

        (() => {
            const $video = $(`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/472573751?h=327deec962&autoplay=1&loop=1&color=ffffff&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`).insertAfter('#container');

        //   $('#background-video').css({
        //     position: 'fixed',
        //     top: 0,
        //     left: 0,
        //     width: '100vw',
        //     height: '100vh',
        //     zIndex: -1,
        //   });
           
           $video.css({
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                    // zIndex: -1,
                });
                $video.attr('autoplay', true);
           
        })();
        
    },
    exercise79: () => {
        newExercise('section6', 14);

        const script = `(() => {
            //create button to launch alert
            $('<button>').attr('id', 'alert').text('Alert').appendTo('#container');

            //define Event
            $('#alert').on('click', () => {

                //load sweet alert success
                Swal.fire({
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    icon: 'success',
                    confirmButtonText: 'Close Alert',
                    confirmButtonColor: '#3085d6',
                });
            });

            //load sweet alert library
            $.getScript('https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.all.min.js');
        })();`;
        scriptDiv2(script);
    },
    exercise80: () => {
        newExercise('section6', 15);

        const script = `(() => {
            const loader = () => {
                const favico = new Favico({
                    // animation: 'popFade',
                    animation: 'slide',
                });
                const title = $('title');
                let counter = 1;
                setInterval(() => {
                    favico.badge(counter);
                    title.text('(' + counter++ + ') jQuery App');
                }, 1000);
            };
            // const title = $('title');
            // let counter = 1;

            // setInterval(() => {
            //     title.text('(' + counter++ + ') jQuery App');
            // }, 1000);
            //load favicon library
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.4/favico.min.js', loader);
        })();`;
        scriptDiv2(script);
    },
    exercise81: () => {
        newExercise('section7', 1);

        const script = `(() => {
            const options = ['chinchilla', 'rabbit', 'degu', 'hamster', 'guinea pig'];
            const loadPlugin = () => {
                //get css
                $('head').append('<link rel="stylesheet" type="text/css" href="/src/libs/chosen/chosen.css">');
                const select = $('<select>').attr('id', 'select').css({
                    width: '300px',
                }).appendTo('#container');
                //append options to select
                options.forEach((option) => {
                    const text = option.charAt(0).toUpperCase() + option.slice(1);
                    $('<option>').text(text).attr('value', option).appendTo(select);
                });
                //initialize chosen
                $('#select').chosen();

                const selection = $('<p id="selection">').text('You selected: ' + options[0]).css({
                    marginTop: '20px',
                    color: 'red',
                }).appendTo('#container');

                $('#select').on('change', function(){
                    selection.text('You selected: ' + $(this).val());                    
                });
            };
            //add plugin to jquery
            $.getScript('/src/libs/chosen/chosen.jquery.js', loadPlugin )
        })();`;
        scriptDiv2(script);
    },
    exercise82: () => {
        newExercise('section7', 2);

        const script = `(() => {
            const blurLoaded = () => {
                //create button and append to container and set data attribute blur false
                const btn = $('<button>').attr('id', 'blur').text('Toggle Blur').appendTo('#container');

                //define event
                btn.on('click', function() {
                    //get text class in p tag
                    const $p = $('p');
                    const pClass = $p.attr('class') ?? '';
                    if(pClass.includes('blur')) {
                        $.blurjs('reset');
                        //unblock selet text in p
                        $p.css('user-select', 'auto');
                    } else {
                        $p.blurjs();
                        //block selet text in p
                        $p.css('user-select', 'none');
                    }
                });
            };
            //import script 
            $.getScript('/src/libs/blur/blur.js', blurLoaded);
        })();`;
        scriptDiv2(script);
    },
    exercise83: () => {
        newExercise('section7', 3);

        const script = `(() => {
            const loadedQr = () => {
                
                $('#container').qrcode({
                    text: 'https://www.youtube.com/watch?v=WfZ8-gAM0qs',
                });
            };
            

            //load qrcode library
            $.getScript('/src/libs/qr/jquery-qr.js', loadedQr);
        })();`;
        scriptDiv2(script);
    },
    exercise84: () => {
        newExercise('section7', 4);

        const script = `(() => {
            const loaded = () => {
                console.log('loaded');

                //append image to container
                const img = $('<img>').attr({
                    src: '/src/assets/advanced/faces.jpeg',
                    id: 'image',
                    class: 'image',
                }).appendTo('#container');    

                //create button to detect faces
                const btn = $('<button>').attr('id', 'detect').text('Detect Faces').css({
                    marginTop: '20px',
                }).insertAfter('#container');

                //define event
                
                $('#image').on('load', function() {
                    btn.on('click', function() {
                        $('#image').faceDetection({
                            complete: function (faces) {
                                faces.forEach((face) => {
                                    $('<div>', {
                                        'class': 'face',
                                        'css': {
                                            'position': 'absolute',
                                            'left': face.x * face.scaleX + 'px',
                                            'top': face.y * face.scaleY + 'px',
                                            'width': face.width * face.scaleX + 'px',
                                            'height': face.height * face.scaleY + 'px',
                                            'border': '2px solid white',
                                        }
                                    }).insertAfter(this);
                                });
                            },
                        });
                    });
                    });
            };


            //import script 
            $.getScript('/src/libs/facedetection/jquery.facedetection.min.js', loaded);

        })();`;
        scriptDiv2(script);
    },
    exercise85: () => {
        newExercise('section7', 5);

        const script = `(() => {
            const loaded = () => {
                //insert image to container
                const $img = $('<img id="#image">').attr({
                    src: '/src/assets/chinchilla3.png',
                    style: 'width: 50%; height: 50%; cursor: pointer;',

                }).appendTo('#container');

                const $video = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/zlljYjfejIg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>').css({
                    marginTop: '20px',
                }).appendTo('#container');

                //create button to toggle fullscreen
                const $btn = $('<button>').attr('id', 'toggle').text('Toggle Fullscreen').insertAfter('#container');
                
                //define event
                $img.on('click', function() {
                    BigScreen.toggle(this);
                });
                // BigScreen.toggle();
                $btn.on('click', function() {
                    BigScreen.toggle($video[0]);
                });
            };
            
            //load script
            $.getScript('https://cdn.jsdelivr.net/npm/bigscreen@2.0.5/bigscreen.min.js', loaded);
        })();`;
        scriptDiv2(script);
    },
    exercise86: () => {
        newExercise('section7', 6);

        (() => {
               //import script after body
               $('body').append('<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>');

                //add style to head
                $('<style media="screen">').text(`
                    .cards {
                        width: 100%;
                    }

                    .card {
                        width: 200px;
                        margin: 10px;
                        border-radius: 8px;
                        cursor: pointer;
                    }

                    .x1 {
                        height: 200px;
                        background-color: #f44336;
                    }

                    .x2 {
                        height: 300px;
                        background-color: #e91e63;
                    }

                    .x3 {
                        height: 400px;
                        background-color: #9c27b0;
                    }
                    .x4 {
                        height: 500px;
                        background-color: #2196f3;
                    }
                    `).appendTo('head');

                    //create cards
                    const $cards = $('<div>').attr('class', 'cards').appendTo('#app');
                    const arrElem = [];

                    for(let i = 0; i <= 20; i++) {
                        //create card with rand x1 x2 x3 x4 class
                        const rand = Math.floor(Math.random() * 4) + 1;
                        const myClass = 'x' + rand;

                        arrElem.push('<div class="card ' + myClass + '"></div>');
                    }
                      $cards.append(arrElem.join(''));      
                    
                      setTimeout(() => {
                          $cards.masonry({
                              itemSelector: '.card',
                          })
                      }, 500);

                      //remove element on click except first
                        $cards.on('click', '.card', function() {
                            if($(this).index() !== 0) {
                                $cards.masonry('remove', this).masonry('layout');
                            }
                        }
                    );
        })();
        
    },
    exercise87: () => {
        newExercise('section7', 7);

        const script = `(() => {
            //import script and append to body
            $('body').append('<script src="/src/libs/knob/jquery-knob.js"></script>');

            //create an input
            let counter = 0;
            const $input = $('<input>').attr({
                type: 'text',
                class: 'dial',
                value: counter,
                'data-min': 0,
                'data-max': 50,
                'data-fgColor': '#5E2CA5',
                'data-bgColor': '#D1B2FF',
                'data-readOnly': true,
            }).appendTo('#container');

            //create another knob
            const $input2 = $('<input>').attr({
                type: 'text',
                class: 'dial',
                value: 23,
                'data-min': 0,
                'data-max': 50,
            }).appendTo('#container');

            //create knob
            $('.dial').knob();


            //change value 
            setInterval(() => {
                if(counter > 50){
                    counter = 0;
                }
                    $input.val(counter++).trigger('change');
            }, 1000);
        })();`;
        scriptDiv2(script);
    },
    exercise88: () => {
        newExercise('section7', 8);

    const script = `(() => {
            //append money.js script to body
            $('body').append('<script src="/src/libs/moneyjs/moneyjs.js"></script>');

            // $.get('https://openexchangerates.org/api/latest.json', {app_id: 'API_KEY'}, function(data) {
            //     const {rates} = data;
            //     console.log(JSON.stringify(rates));
            // });
            //get rates from JSON File
            $.getJSON('/src/libs/moneyjs/rates.json', function(data) {
                fx.rates = data;
                fx.base = 'USD';
    
                //create date of April 8th 2023 on this format April 8, 2023
                const date = new Date(2023, 3, 8).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
    
                //append a paragraph to container indicating type of currency on date
                $('<p>').text('Rate for currency: ' + date).css({color: 'blue'}).appendTo('#container');
                //appned a label convert from
                $('<label>').text('Convert from: ').appendTo('#container');
                //append a select with options
                const $select = $('<select>').attr('id', 'select').appendTo('#container');
    
                //append options to select
                for(const key in fx.rates) {
                    $('<option>').attr('value', key).text(key).appendTo($select);
                }
                //set default value to USD
                $select.val('USD');

                //append a label convert to
                $('<label>').text('Convert to: ').appendTo('#container');
                //append a select with options clone the select from above
                const $select2 = $select.clone().attr('id', 'select2').appendTo('#container');

                //set default value to MXN  
                $select2.val('MXN');

                //append a label amount
                $('<label>').text('Amount: ').appendTo('#container');
                //append an input
                $('<input>').attr({
                    type: 'number',
                    id: 'amount',
                    value: 1,
                }).appendTo('#container');

                //append a button
                const btn = $('<button>').text('Convert').attr('id', 'convert').insertAfter('#container');

                btn.click(() => {
                    //get value from input
                    const amount = $('#amount').val();
                    //get value from select
                    const from = $('#select').val();
                    //get value from select2
                    const to = $('#select2').val();

                    //convert add , every 3 digits
                    const result = fx(amount).from(from).to(to).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                    $('#result').remove();
                    //append a paragraph to container with the result
                    $('<p id="result">').text('Result: ' + result).css({color: 'blue', fontSize: '24px'}).appendTo('#container');
                });
            });
        })();`;
        scriptDiv2(script);        
    },
    exercise89: () => {
        newExercise('section7', 9);

        const script = `(() => {
            //add maps script
            $('body').append('<script src="https://maps.google.com/maps/api/js?sensor=true"></script>');

            //add gmaps script
            $('body').append('<script src="/src/libs/maps/gmaps.js"></script>');

            //  new GMaps({
            //     div: '#container',
            //     lat: 40.7128,
            //     lng: -74.0060,
            //     zoom: 12,
            // });

            //create a map with an iframe
            $('<iframe>').attr({
                src: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19969.541316859784!2d-113.99038345!3d51.27077255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1680991755801!5m2!1sen!2sca',
                width: '600',
                height: '450',
                style: 'border:0;',
                allowfullscreen: '',
                loading: 'lazy',
                referrerpolicy: 'no-referrer-when-downgrade',
            }).appendTo('#container');
            
        })();`;
        scriptDiv2(script);
    },
    exercise90: () => {
        newExercise('section7', 10);

        const script = `(() => {
            //add css to head
            $('head').append('<link rel="stylesheet" href="/src/libs/stacktable/stacktable.css">');
            //add script to body
            $('body').append('<script src="/src/libs/stacktable/stacktable.js"></script>');

            const columns = [ 'First Name', 'Last Name', 'Age', 'Location', 'Phone' ];

            //Create a table wit dummy data using for loop
            const table = $('<table class="table table-striped">').css({
                width: '1200px',
                border: '1px solid black',  
            }).attr('id', 'table').appendTo('#container');
            const thead = $('<thead>').css({
                backgroundColor: 'black',
                color: 'white',
            }).appendTo(table);
            const tr = $('<tr>').appendTo(thead);
            
            columns.forEach(column => {
                $('<th>').text(column).appendTo(tr);
            });
            
            const tbody = $('<tbody>').appendTo(table);
            for(let i = 0; i < 10; i++) {
                const tr = $('<tr>').appendTo(tbody);
                for(let j = 0; j < 5; j++) {
                    $('<td>').text('data').appendTo(tr);
                }
            }

            //import stackable
            $('#table').stacktable();

            //add p
            $('<p>').text('Shrink window to see stackable in action').css({
                color: 'red',
                fontSize: '24px',
            }).insertAfter('#container');
        })();`;
    scriptDiv2(script); 
    },
    exercise91: () => {
        newExercise('section7', 11);

        const script = `(() => {
            const inputs = ['Date', 'Phone', 'NSS', 'Color' ];

            const loaded = () => {
                //create inputs based on the array and append to the container
                const $container = $('#container');
                inputs.forEach(input => {
                   const $element = $container.append($('<label>').text(input))
                              .append($('<input>').attr({
                                type: 'text',
                                id: input.toLowerCase(),
                                class: 'form-control',}))
                                .append($('<br>'));                         
                });
            $('#date').mask('99/99/9999');
            $('#phone').mask('(999) 999-9999');
            $('#nss').mask('99-9999999');
            $('#color').mask('#****');
            };

            //import jquery mask plugin
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js', loaded);
        })();`;
        scriptDiv2(script);
    },
    exercise92: () => {
        newExercise('section7', 12);

        (() => {
            //load css
            $('head').append('<link rel="stylesheet" href="/src/libs/twentytwenty/twentytwenty.css">');
            $(window).on('load', function() {
                $("#container").twentytwenty();
            });

            //load js
            $('body').append('<script src="/src/libs/twentytwenty/jquery.event.move.js"></script>');
            $('body').append('<script src="/src/libs/twentytwenty/jquery.twentytwenty.js"></script>');
        
        })();
        
    },
    exercise93: () => {
        newExercise('section7', 13);

        const script = `(() => {
             const loadContent = function(){
                 const $img = $('<img>').attr('src', '/src/assets/chinchilla3.png').appendTo('#container');

                   //create a selector with filters
                const filters = ['selectFilter', 'vintage', 'lomo', 'clarity', 'sinCity', 'sunrise', 'crossProcess', 'orangePeel', 'love', 'grungy', 'jarques', 'pinhole', 'oldBoot', 'glowingSun', 'hazyDays', 'herMajesty', 'nostalgia', 'hemingway', 'concentrate'];

                const $container = $('#container');
                const $select = $('<select>').attr({
                    id: 'filter',
                    class: 'form-control',
                }).css({
                    width: '400px',
                    margin: '20px auto',
                    border: '1px solid black',
                }).insertBefore($container);
                filters.forEach(filter => {
                    const text = filter.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
                    $('<option>').attr('value', filter).text(text).appendTo($select);
                });

                const dropdown = $('#filter');
                let canvas = $();

                dropdown.on('change', function() {
                    const filter = this.value;
                    const tmp = $('<canvas>').prependTo($container).hide();

                Caman(tmp[0], $img.attr('src'), function(){
                    canvas.remove();
                    canvas = tmp.show();

                    if(filter in this) {
                        this[filter]().render();
                    }
                } );
                });
                dropdown.trigger('change');
             };
 
             //add script to head
             $.getScript('https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.pack.js', loadContent);
        })();`;
        scriptDiv2(script);
    },
    exercise94: () => {
        // ⌘
        newExercise('section7', 14);

        const script = `(() => {
            //load script keymaster
            $('body').append('<script src="/src/libs/keymaster/keymaster.js"></script>');

            const $container = $('#container');

            //create a p
            $('<p>').text('Press ⌘+s or ctrl+s or ctrl+r').css({
                color: 'blue',
                fontSize: '24px',
            }).insertBefore($container);

            key('⌘+s, ctrl+s', () => {
                $container.empty();
                $container.append($('<p>').text('You pressed ⌘+s or ctrl+s').css({
                    color: 'red',
                }));
                return false;
            });

            key('⌘+r, ctrl+r', () => {
                $container.empty();
                $container.append($('<p>').text('You pressed ⌘+r or ctrl+r').css({
                    color: 'red',
                }));
                return false;
            });
        })();`;
        scriptDiv2(script);
    },
    exercise95: () => {
        newExercise('section7', 15);

        const script = `(() => {
            const loaded = () => {

                $('h1').fitText();
            };

            //load script
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/FitText.js/1.2.0/jquery.fittext.js', loaded);
        })();`;
        scriptDiv2(script);
    },
    exercise96: () => {
        newExercise('section7', 16);

        const script = `(() => {
            const loaded = () => {
                Webcam.set({
                    width: 320,
                    height: 240,
                    image_format: 'jpeg',
                    jpeg_quality: 90
                });

                Webcam.attach('#container');

                //insert button
                const $button = $('<button>').attr({id: 'snapshot'}).text('Take a snapshot').css({
                    margin: '20px 0',
                }).insertAfter('#container');

                $button.on('click', () => {

                    Webcam.snap(function(data_uri) {
                        const $picture = $('#picture');
                        $picture.empty();

                        $picture.append($('<p>').text('Here is your picture: ').css({
                            color: 'blue',
                            fontSize: '24px',
                        }));

                        $('<img id="camPhoto">').attr('src', data_uri).css({
                            width: '320px',
                            height: '240px',
                        }).appendTo($picture);
                    });
                });
            };

            //get the script
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.min.js', loaded);
        })();`;
        scriptDiv2(script);
    },
    exercise97: () => {
        newExercise('section7', 17);

        const script = `(() => {
            //append link to head
            $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.4/themes/default.css" />');
            $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.4/themes/default.date.css" />');

            const loaded = () => {

                $(window).on('load', () => {
                    // console.log('loaded');
                    $('#container').append($('<p>').text('Pick a date: ').css({
                        color: 'blue',
                        fontSize: '24px',
                    }).append($('<input>').attr({
                        type: 'text',
                        id: 'date',
                        class: 'form-control',
                    })));
    
                    //initialize pickdate
                    $('#date').pickadate({
                        min: new Date(),
                    });
                });
            };
            
            //import 2 scripts
            $.when(
                $.getScript('https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.4/picker.js'),
                $.getScript('https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.4/picker.date.js'),
                $.getScript('https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.6.4/picker.time.js'),
                //deferred  
                $.Deferred(function(deferred) {
                    $(deferred.resolve);
                })
            ).done(loaded);
        })();`;
        scriptDiv2(script);
    },
    exercise98: () => {
        newExercise('section7', 18);

        const script = `(() => {

            $(window).on('load', () => {
                const $container = $('#container');
                console.log('loaded');
                $container.append($('<p>').text('Drop your file here: ')).css({
                    color: 'blue',
                    fontSize: '24px',
                });

                //container add class drop
                $container.addClass('drop');

                $('.drop').dropzone({
                    url: '/upload',
                });
            });

            //insert style dz-error-message
            $('head').append('<style>.dz-error-message{color: red;}</style>');

            
            //import script
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.js');
        })();`;
        scriptDiv2(script);
    },
    exercise99: () => {
        newExercise('section7', 19);

        const script = `(() => {
            $(window).on('load', () => {
                const $container = $('#container').css({
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'blue',
                    margin: '20px auto',
                });

                const $app = $('#app');

                //add button after container
                const $button = $('<button>').attr({id: 'button'}).text('Start Rumble').insertAfter($container);

                const $button2 = $('<button>').attr({id: 'button2'}).text('Start All Rumble').css({
                    margin: '20px 0',
                }).insertAfter($button);

                $container.jrumble({
                    x: 10,
                    y: 10,
                    rotation: 4,
                });

                $app.jrumble({
                    x: 10,
                    y: 10,
                    rotation: 4,
                });

                $button.on('click', () => {
                    const text = $button.text();
                    if(text === 'Start Rumble') {
                        $container.trigger('startRumble');
                        $button.text('Stop Rumble');
                    } else {
                        $container.trigger('stopRumble');
                        $button.text('Start Rumble');
                    }
                });

                $button2.on('click', () => {
                   //timeout to stop rumble
                    $app.trigger('startRumble');
                     setTimeout(() => {
                        $app.trigger('stopRumble');
                    }, 3000);
                });
            });

            //import script
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jrumble/1.3.0/jquery.jrumble.min.js');
        })();`;
        scriptDiv2(script);
    },
    exercise100: () => {
        newExercise('section7', 20);

        const script = `(() => {

            $(window).on('load', () => {
                const $context = $('#myChart');

                const myChart = new Chart($context, {
                    type: 'bar',
                    data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                    },
                    options: {
                    scales: {
                        y: {
                        beginAtZero: true
                        }
                    }
                    }
                });

                $("#updateData").on('click', () => {
                    const arr = [];
                    //generate random numbers
                    for(let i = 0; i < 6; i++) {
                        arr.push(Math.floor(Math.random() * 100));
                    }

                    myChart.data.datasets[0].data = arr;
                    myChart.update();
                });
            });
            //import library
            $.getScript('https://cdn.jsdelivr.net/npm/chart.js');
        })();`;
        scriptDiv2(script);
    },
}

function newExercise(section, exericse) {
  const app = document.querySelector('#app');
  app.innerHTML = pagesAdvanced[section]['subTopics'][exericse - 1]['content'];
  $('p').css('text-align', 'left');
  $('p').css('margin-left', '20px');
  const hr = $('<hr>').css({
    width: '70%',
    height: '1px',
    backgroundColor: 'black',
  })
  $('h1').after(hr);
}

function timer(fn) {
  const startTime = new Date().getTime();
  fn();
  const endTime = new Date().getTime();
  console.log('Time: ' + (endTime - startTime) + 'ms');
}

function humanizeDataSize(size) {
  // return in kilobytes
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];

  let ord = Math.floor(Math.log(size) / Math.log(1024));
  ord = Math.min(Math.max(0, ord), units.length - 1);

  const s = Math.round((size / Math.pow(1024, ord)) * 100) / 100;
  return s + ' ' + units[ord];
}
