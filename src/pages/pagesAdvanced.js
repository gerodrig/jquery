import javascriptLogo from '/public/images/javascript.svg';
import jqueryLogo from '/public/images/jquery.svg';

export const pagesAdvanced = {
  component: `
  <div class="accordion-item">
  <div id ="section" class="accordion-header"><span class="accordion-arrow">&#9660;</span></div>
  <div id="accordionContent" class="accordion-content">
    <ul>
    </ul>
  </div>
</div>
  `,
  home: `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${jqueryLogo}" class="logo" alt="Vite logo" style="background: white; border-radius: 40px;"/>
    </a>
    <h1>jQuery Review Advanced</h1>
    <div id="accordion" class="accordion">
    
  </div>
</div>

    
    </div>
    `,
    section1: {
      title: 'DOM Manipulation',
      subTopics: [
      {
        title: 'DOM Ready',
        content: `
        <h1>DOM Event Ready</h1>
        <p>Typically, you will want to run your code after the DOM is ready. This is because the DOM is not ready until the page is fully loaded. If you try to access an element that is not yet loaded, you will get an error.</p> 
        <p>Below you will find example on how to call functions when DOM is ready</p>     
        `
      },
      {
        title: 'Execute Code in a defined page',
        content: ` 
        <h1>Execute Code in a defined page</h1>
        <p>The code defines a route object that maintains a collection of path-callback pairs. When route.run() is called, it iterates through the registered paths and runs the corresponding callback for the current path, which is determined by matching the path against the current URL. The example code adds a callback to the route for the "exercise2" path that logs a message to the console when that path is visited. Finally, the code immediately invokes an anonymous function that creates the route object and calls route.run(). check logs</p>
        `
      },
      {
        title: 'Tip - Use logical operator AND',
        content: `
        <h1>Tip - Use logical operator AND</h1>
        <p>The code checks if there is at least one h1 element in the DOM. The simplified version achieves this using a single line of code by using the logical AND operator && to check if $('h1').length is truthy (i.e., non-zero) and if so, logs the string 'h1 exists' to the console.</p>
        `
      },
      {
        title: 'Using jQuery is() Method',
        content: `
          <h1>Using jQuery is() Method</h1>
          <p>The code selects an element with class "element" using jQuery, and then performs a series of checks and animations on it.

          It first checks if the element is a div, and if so, logs a message to the console. It then checks if the element has the class "element", and logs a message to the console if it does. It also checks if the element is not visible, and logs a message to the console if it is not visible.
          
          After the checks, it animates the width of the element to 200 pixels over a duration of 1500 milliseconds using jQuery's animate function. Finally, it checks if the element is currently being animated, and logs a message to the console if it is.</p>
          <div class="element"></div>
          <style media="screen">
          .element {
            width: 50px;
            height: 50px;
            background-color: blue;
          }
          </style>
        `
      },
      {
        title: 'Counting DOM Elements',
        content: `
        <h1>Counting DOM Elements</h1>
        <p>Dummy extra element to be counted</p>
        <p>The code counts the total number of elements in the current HTML document using the jQuery selector $("*"). It then logs the count as a string to the console, with the message "There are [count] elements in the DOM". The code is enclosed in an immediately invoked function expression (IIFE) to prevent any naming conflicts with other JavaScript code on the page.</p>
        `
      },
      {
        title: 'Define function exists()',
        content: `
        <h1>Define function exists()</h1>
        <p>The code defines a jQuery plugin called exist that can be used on any jQuery object. The exist function returns a boolean value indicating whether the jQuery object contains any elements or not.

        The code then uses the exist function to check if a h1 element exists on the page using $('h1').exist(). If it exists, the string "h1 exists" is logged to the console. If it does not exist, the string "h1 does not exist" is logged to the console.
        
        The code then does a similar check for an element with a selector of l1, which does not exist on the page. The result of this check will always be false, so the string "l1 does not exist" is logged to the console.</p>
        `
      },
      {
        title: 'Using second argument of jQuery function $()',
        content: `
        <h1>Using second argument of jQuery function $()</h1>
        <p>The code first selects all the li elements inside the HTML elements with the IDs firstList and secondList, sets their color to red and blue respectively, and logs the HTML content of each li element to the console.

        Next, a new div element is created with an orange background color, a width and height of 30 pixels, and then animated to a width and height of 200 pixels. Finally, the div element is appended to the HTML element with the ID container.</p>

        <div id="container">
          <ul id="firstList">
            <li>First element</li>
            <li>Second element</li>
            <li>Third element</li>
          </ul>
          <ul id="secondList">
            <li>Blue</li>
            <li>Green</li>
            <li>Red</li>
          </ul>
        </div>

        `
      },
      {
        title: 'Editing links and inserting icons',
        content: `
        <h1>Editing links and inserting icons</h1>
        <p>The code iterates through all anchor tags (a) on the page, and if the hostname of an anchor tag is different from the current page's hostname, it sets the target attribute of that anchor tag to "_blank" to open the link in a new tab. Additionally, it appends an external link icon image to the anchor tag and styles it.</p>

        <ul>
          <li>
          <a href="exercise1">Go to exercise 1</a>
          </li>
          <li>
          <a href="exercise2">Go to exercise 2</a>
          </li>
          <li>
            <a href="https://www.gerar.ca">Go to my page</a>
          </li>
        </ul>
        `
      },
      {
        title: 'Mastering end() method',
        content: `
        <h1>Mastering end() method</h1>
        <p>The code efficiently finds and modifies the text of three elements on a web page. It first assigns the #breakfast element to the variable $breakfast, and then uses the jQuery find method to locate the child elements with class names .eggs, .toasty, and .bacon. It then modifies the text of each of these elements by chaining the text method to the find method. Finally, the end method is used to return to the $breakfast element, completing the method chaining.</p>
        <ul id="breakfast">
          <li class='eggs'>No</li>
          <li class='toasty'>No</li>
          <li class='bacon'>No</li>
        </ul>
        `
      },
      {
        title: 'Prevent Right Click and create a Custom Context Menu',
        content: `
        <h1>Prevent Right Click and create a Custom Context Menu</h1>
        <p>The code attaches an event listener to the contextmenu event of the document object. When the event is triggered (usually by right-clicking), the code prevents the default context menu from appearing, logs the mouse cursor's position, removes any previously created menu, and creates a new div element with a class of menu. The new menu is positioned at the mouse cursor's location, added to the h1 element, and animated to a width of 100 and height of 300.</p>

        <style media="screen">
        .menu {
          position: fixed;
          width: 50px;
          height: 50px;
          background-color: gray;
        }
        </style>
        `
      },
      {
        title: 'Breaking the iFrames',
        content: `
        <h1>Breaking the iFrames</h1>
        <p>This code checks if the current window is an iframe and not the top-level window. If it is an iframe, it logs a message to the console indicating that it is running inside an iframe. Then, it sets the location of the top-level window to the current window's location, effectively preventing the iframe from being loaded inside another iframe.</p>
        `
      },
      {
        title: 'Separate URL Parameters with anchor tags',
        content: `
        <h1>Separate URL Parameters with anchor tags</h1>
        <p>The code extracts a URL from a HTML element with the ID url, creates an a element with the extracted URL as its href, and appends several code elements to an HTML element with the ID container. These code elements contain different parts of the URL, including the host name, path name, protocol, port, search, and hash. The extracted URL and the different parts of the URL are logged to the console.</p>
        <p>URL to analyze</p>
        <p id="url">https://www.memorylanehomeliving.ca/#gallery</p>
        <div id="container"></div>
        <style media="screen">
        #container {
          display: flex;
          flex-direction: column;
          align-items: start;
        }
        </style>
        `
      },
      {
        title: 'Editable content including style',
        content: `
        <h1>Editable content including style</h1>
        <div>
          <p>The code sets the contenteditable attribute of an HTML element with the ID editableDiv to true. It then adds a click event listener to all 'button' elements, which retrieves the text content of the editableDiv element and logs it to the console when clicked.The code also includes commented-out sections for appending a style block to the HTML document and setting the contenteditable attribute of that style block to true. Try editing this the css below</p>
        </div>

        <div id="editableDiv">
          <h1>This content is editable</h1>
          <p>Try editing this content</p>
        </div>

        <button id="btn btn-primary">Save</button>
        <p>Check console when clicked</p>

        `
      },
      {
        title: 'Prevent that text is selected',
        content: `
         <h1>Prevent that text is selected</h1>
          <p id='paragraph'>The code adds a mousedown event listener to the document object. When the event is triggered, the code prevents the default behavior of the event, which is to select text. This prevents the user from selecting text on the page. Try to select this text and you wont be able to do it unless you disable javascript. TRYYY!!</p>
        `
      },

      ]
    },
    section2: {
      title: 'Performance - Optimizing our code',
      subTopics: [
      {
        title: 'Install jQuery CDN',
        content: `
        <h1>Install jQuery CDN</h1>
        <p>It is generally better to use a CDN (Content Delivery Network) to include a library like jQuery rather than including it using a script tag with a URL to the library file, like the example shown in the question. Here are some reasons why:

        Faster load times: CDNs usually have multiple servers distributed across various locations around the world, so when a user requests a file, it is served from the server closest to them. This reduces the latency and the time it takes for the file to load, resulting in a faster overall page load time.
        
        Increased reliability: CDNs are designed to handle heavy traffic loads, so they are typically more reliable than hosting the file yourself. If your server goes down, the file can still be served from the CDN.
        
        Version control: With a CDN, you can specify which version of a library you want to use in your code, and the CDN will serve that specific version. This makes it easy to update or roll back to a specific version of a library.
        
        Reduced bandwidth usage: By using a CDN, you can reduce the amount of bandwidth your server uses to serve files, which can save you money on hosting costs.
        
        Overall, using a CDN for libraries like jQuery is a best practice that can improve performance, reliability, and maintainability of your website or application.</p>

        <h3>https://developers.google.com/speed/libraries#/jquery</h3>
       
        `
      },
      {
        title: 'DOM Manipulation to the minimum',
        content: `
        <h1>DOM Manipulation to the minimum</h1>
        <p>The code measures the time it takes to append a list of 15 items to an HTML element with jQuery. It compares two different methods: the first method appends each item one by one to the HTML element, while the second method creates an array of list items and appends them all at once using the join() method. The second method is more efficient and takes less time to complete. The code then logs the time it took to complete each method to the console in milliseconds.</p>
        <div id="elem"></div>
        `
      },
      {
        title: 'Use JS when time is Critical',
        content: `
        <h1>Use JS when time is Critical</h1>
        <p>The code iterates through each list item element in a list with id "colors" using jQuery's each() method. It retrieves the id attribute of each list item element using JavaScript and logs it to the console. The commented-out jQuery code accomplishes the same thing but with a slightly longer syntax.</p>
        <ul id="colors">
          <li id="red">Red</li>
          <li id="blue">Blue</li>
          <li id="green">Green</li>
          <li id="yellow">Yellow</li>
          <li id="orange">Orange</li>
        </ul>
        `
      },
      {
        title: 'Optimize selectors',
        content: `
        <h1>Optimize selectors</h1>
        <p>The code measures the time taken to select and iterate over DOM elements using different selectors passed to the startSelector function. It then logs the time taken for each selector using the timer function which accepts a callback function as its argument. The callback function is executed and the time taken to complete the function is logged to the console. The code then calls startSelector function with different selectors, each time measuring the time taken to complete the selection and iteration. The results indicate that some selectors are faster than others.</p>
        <div id="bread">
          <div id="peanutButter" class="peanutButter">
        </div>
        `
      },
      {
        title: 'Save elements in Cache/Variables',
        content: `
        <h1>Save elements in Cache/Variables</h1>
        <p>The code removes three li elements from a list with id="numbers" in a more efficient way by first selecting the list items and storing them in a variable $numbers. Then, it chains the eq() method to remove the li elements with indices 0, 1, and 2 in that order. This is done using the end() method to go back to the original set of elements after each removal.</p>
        <ul id="numbers">
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
          <li>Fifth</li>
        </ul>
        `
      },
      {
        title: 'Define Duplicated Functions',
        content: `
        <h1>Define Duplicated Functions</h1>
        <p>The given code defines a function named showMenu that logs the string "Show menu" to the console. It then adds an event listener to both the #menuBtn and #menuLink elements using jQuery's click() method to call the showMenu function when clicked. This is considered better practice than defining anonymous arrow functions as event handlers for each element separately.</p>
        <button type="button" id="menuBtn" class="btn btn-outline-primary">Show Menu</button>

        <br><br>

        <a href="#" id="menuLink">Show Menu Link</a>
        `
      },
      {
        title: 'jQuery arrays as JS arrays',
        content: `
         <h1>jQuery arrays as JS arrays</h1>
         <p>The code creates an unordered list with 50 list items and appends it to an HTML element with the ID "list" using jQuery. Then, it measures the time it takes to iterate over the list items using a for loop and native JavaScript compared to using jQuery's each method. The output shows that the for loop with native JavaScript is much faster than using jQuery's each method.</p>
         <ul id="list">
         </ul>
        `
      },
      {
        title: 'Unlink elements from the DOM when we make complex modifications to them',
        content: `
        <h1>Unlink elements from the DOM when we make complex modifications to them</h1>
        <p>The code is measuring the time it takes to modify the width and height of a DOM element with the jQuery $element.width() and $element.height() methods. It performs the same operation twice: first using a slow method that is directly linked to the DOM element, and second using a faster method that unlinks the element from the DOM, performs the modifications, and then reattaches it. The second method is significantly faster, with a speedup of approximately 3x, as shown by the output of console.timeEnd().</p>
        <div id="container" style="background-color: blue"></div>
        `
      },
      {
        title: 'Dont wait for the DOM to be ready',
        content: `
        <h1>Dont wait for the DOM to be ready</h1>
        <p>The code waits for the Document Object Model (DOM) to be ready, creates a button with an ID of "button", and appends it to the paragraph element on the page. It also adds a click event listener to the button, which displays an alert when clicked. The event listener is attached using jQuery's on method, which listens for clicks on the document and filters them by the selector '#button'. INSTEAD OF USING READY USE DOCUMENT.ON(3 PARAMETERS)</p>
        `
      },
      {
        title: 'Create a style to modify multiple elements',
        content: `
        <h1>Create a style to modify multiple elements</h1>
        <p></p>
        `
      },
      ]
    },
    section3: {
      title: 'Events',
      subTopics: [
      {
        title: 'Detect if JS is enabled by adding a class to the HTML element',
        content: `
        <h1>Detect if JS is enabled by adding a class to the HTML element</h1>
        <p>The code appends a message to an element with the ID "app", informing the user that JavaScript is required to use the site. It then displays the message by setting its CSS "display" property to "block". It also hides the HTML element with the class "JS" by setting its CSS "display" property to "none".</p>

        `
      },
      {
        title: 'Listen for events of elements that are not yet in the DOM',
        content: ` 
        <h1>Listen for events of elements that are not yet in the DOM</h1>
        <p>The code creates a new unordered list element with id "list" inside an element with id "app". It then appends 10 list items with the text "old item i" to this unordered list.

        The code then creates an event listener that removes a list item from the unordered list when it is clicked and replaces it with a new list item with the text "new item i", where i is an incrementing counter starting at 1.
        
        The event listener is bound to the unordered list rather than the individual list items, allowing it to work with dynamically added list items.</p>
        <p style="color: red">Cllick on each list to remove</p>
        `
      },
      {
        title: 'Unique call to an event',
        content: `
        <h1>Unique call to an event</h1>
        <p>The code adds a button element with the text "Click me" to an HTML element with the ID "app". It then selects the newly created button element and attaches an event listener to it using jQuery's .one() method. This event listener listens for a click event on the button, and when it is triggered, it displays an alert message that says "Button clicked". The listener is set to only be triggered once, meaning that the button will only work once.</p>
        `
      },
      {
        title: 'Simulate Events and parameters',
        content: `
        <h1>Simulate Events and parameters</h1>
        <p>This code creates a slideshow div with a red background and adds a Next button below it. When the Next button is clicked, the background color of the slideshow changes to pink by default, but can be changed to a different color by passing a color parameter to the click event. The code also includes a simulation of the click event with a green color parameter in case the function is not found.</p>
        `
      },
      {
        title: 'Working with events when touching the screen',
        content: `
        <h1>Working with events when touching the screen</h1>
        <p>The code creates a movable ball on a web page, which can be dragged around by the user. It sets up an event listener on the ball for when the user clicks or touches it, and then calculates the starting position of the ball and the starting position of the user's mouse or touch event. As the user moves their mouse or finger, the ball is moved accordingly by changing its CSS position.</p>
        `
      },
      {
        title: 'Know your events',
        content: `
        <h1>Know your events</h1>
        <p>The code dynamically creates a holder div inside a container div with the ID "app" and appends five buttons to it. The first button is linked to an alert message when clicked, while the second button displays a message when the mouse cursor enters or leaves it. The third button displays a random number between 0 and 20 when clicked, while the fourth button is linked to an alert message that is triggered when clicked and is set with an additional temporary event listener. The fifth button removes the temporary event listener from the fourth button when clicked and displays an alert message to confirm its removal.</p>
        `
      },
      {
        title: 'Fast way to prevent default behavior',
        content: `
        <h1>Fast way to prevent default behavior</h1>
        <p>The code adds a link to an external website after each paragraph in the HTML document using jQuery's after() method. Then, it disables the click event on the link using the shorter syntax $('a').click(false);, which prevents the default action of the link from occurring.</p>
        <p style="color: red;">Below link wont work</p>

        `
      },
      {
        title: 'Chain Events',
        content: `
        <h1>Chain Events</h1>
        <p>The code creates a button with the ID "btnAction" and adds it to the last paragraph element on the page. It then attaches two event listeners to the button: one that returns the string "button" when clicked, and another that displays an alert message containing the result of the first event listener concatenated with the string "clicked".</p>
        `
      },
      {
        title: 'Create Custom Events',
        content: `
        <h1>Create Custom Events</h1>
        <p>The code creates three buttons with unique IDs ('btn1', 'btn2', and 'btn3') and appends them before an element with the ID 'container' using jQuery. Then, it creates references to these buttons and the container element.

        The code sets up event handlers on the container element for three custom events: 'jump', 'punch', and 'click'. When the 'jump' event is triggered on the container, an alert is displayed with the message "Jump". When the 'punch' event is triggered on the container with a data parameter, an alert is displayed with the message "Punching [data]!". When the 'click' event is triggered on the container, an alert is displayed with the message "Simulating a Click".
        
        Finally, the code sets up click event handlers on the three buttons. When the 'click' event is triggered on button1, it triggers the 'jump' event on the container. When the 'click' event is triggered on button2, it triggers the 'punch' event on the container with the string 'you' as the data parameter. When the 'click' event is triggered on button3, it triggers the 'click' event on the container.</p>
        <div id="container"></div>
        `
      },
      {
        title: 'Practice Game',
        content: `
        <h1>Practice Game</h1>
        <h2>The Rules</h2>
        <p>This game consists of 10 missions that are solved in their respective editor on the web. Each editor has tabs or tabs with HTML and JavaScript code, usually you must write in the JavaScript tab. You must use your JavaScript and jQuery skills to pass each test.</p>
        <p>You can use any jQuery function you want.
        Use the custom .blue() function of jQuery, which we extended to turn the element blue.Those are all the rules.
        You can go to the exercise here:
        </p>
        <a href="https://tutorialzine.com/2014/05/javascript-challenge-make-me-blue" target="_blank">Make me Blue - Optional Game</a>
        `
      },

      ]
    },
    section4: {
      title: 'Ajax',
      subTopics: [
      {
        title: 'Show the size of the file to be downloaded',
        content: `
          <h1>Show the size of the file to be downloaded</h1>
          <p>The code creates three anchor tags with assets to be downloaded, adds a class called fetchsize to all the anchor tags, and gets the size of the file for each anchor tag with the class fetchsize using an AJAX request. The size of the file is then displayed next to each anchor tag.</p>
        `
      },
      {
        title: 'Simplify Ajax Requests',
        content: `
          <h1>Simplify Ajax Requests</h1>
          <p><The code makes an asynchronous GET request to fetch data from the 1.json file located in the /public/data/ directory. If the request is successful, the message property of the returned data object is logged to the console and a new code component is created with the message as its content, which is then appended after the first p element in the document body. If the request fails due to the file not existing, a message is logged to the console./p>
        `
      },
      {
        title: 'Execute multiple Ajax requests in Parallel',
        content: `
          <h1>Execute multiple Ajax requests in Parallel</h1>
          <p>The code sends two asynchronous GET requests to two JSON files using jQuery's $.get() method and waits for both requests to finish using $.when(). Once both requests have completed, it extracts specific data from the responses and concatenates them into a string. It then creates a new code element using jQuery and sets its text to the concatenated string. Finally, it adds the code element after the first p element it finds on the page.

          If the requests fail, the code logs a message to the console saying that the file does not exist.</p>
        `
      },
      {
        title: 'Fetch your Public IP Address with jQuery',
        content: `
          <h1>Fetch your Public IP Address with jQuery</h1>
          <p>The code makes an AJAX GET request to the URL https://jsonip.com using the jQuery get() method. It expects a JSON response containing an ip property. Once the response is received, it creates a new HTML element (code) with the text "Your IP is " followed by the ip value, and inserts it after the first "p" element on the page.

          The code also includes a commented-out example of how to use a callback with the same API endpoint.</p>
        `
      },
      {
        title: 'Load external files into the DOM',
        content: `
          <h1>Load external files into the DOM</h1>
          <p></p>
          <p id="paragraph1"></p>
          <p id="paragraph2"></p>
          <p id="paragraph3"></p>
        `
      },
      {
        title: 'Serialize Objects',
        content: `
          <h1>Serialize Objects</h1>
          <p>The code creates a form element with two input fields (a text field and an email field) and a text area. It then appends the form to an element with the ID "container" in the HTML document.

          After that, the code creates a code element and appends three serialized representations of the form and an object called "brother" using various jQuery methods. Finally, it appends the code element after the "container" element in the HTML document.
            
          Serialization is the process of converting data structures or objects into a format that can be easily stored, transmitted, or processed. In the given code, jQuery provides three different methods for serializing data: serialize(), serializeArray(), and $.param().
          </p>
          <div id="container"></div>

          <style>
          form {
            display: flex;
            flex-direction: column;
            padding: 10px;
            gap: 10px;
          }
          </style>
        `
      },
      {
        title: 'Binary File Upload via Ajax',
        content: `
          <h1>Binary File Upload via Ajax</h1>
          <p>The code demonstrates how to upload a file using AJAX in jQuery. It first selects the file input and adds the multiple attribute to allow multiple files to be selected. When the upload button is clicked, it retrieves the selected file(s), checks if at least one file is selected, creates a FormData object, appends the first file to it, and sends an AJAX request to the server using the $.ajax() function. The success callback function logs the response data to the console. The code uses the contentType and processData options set to false to ensure that jQuery does not attempt to automatically process the data or set the content type.</p>
          <input type="file" id="uploadFile" />
          <button type="button" id="uploadButton">Upload File</button>
        `
      },
      {
        title: 'Get a Photograph from Facebook',
        content: `
          <h1>Get a Photograph from Facebook</h1>
          <p>The code creates an image element and appends it after the first paragraph on the page. It then sets the src attribute of the image element to a URL for a Facebook profile picture, which is retrieved using the Graph API. This code demonstrates how to dynamically add an image to a webpage using jQuery and how to set the source of the image element to an external URL.</p>
        `
      },
      {
        title: 'Get weather information from API',
        content: `
          <h1>Get weather information from API</h1>
          <h2>From openweathermap</h2>
          <a href="https://openweathermap.org/api" target="_blank">https://openweathermap.org/api</a>
          <p>This code demonstrates how to create a simple UI that prompts the user for an API key and then uses that key to fetch weather data from the OpenWeatherMap API. It uses jQuery to create and append input fields and a button to the DOM, and then listens for a click event on the button. When the button is clicked, it retrieves the input value, constructs a URL for the API request, and sends an AJAX request to the API using the $.get() method. If the request is successful, it serializes the data into a JSON string and appends it to the DOM. If the request fails, it displays an alert asking the user to enter a valid API key.</p>
          <div id="weather"></div>
          <style>
          #weather {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          #weather input {
            background-color: #f1f1f1;
            border: none;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            color: #000;
          }
          #wcode {
            width: 60%;
            background-color: #f1f1f1;
            border: none;
            padding: 12px 20px;
            //wrap text
            white-space: pre-wrap;
            margin: 8px 0;
            box-sizing: border-box;
            color: #000;
          }
          </style>
        `
      },
      {
        title: 'Get Latest Post From a Tumblr Blog',
        content: `
          <h1>Get Latest Post From a Tumblr Blog</h1>
          <p>The code fetches and displays the title, description, and the first image (if available) of a Tumblr blog using the Tumblr API. The code uses jQuery's $.getJSON() method to send an HTTP GET request to the Tumblr API endpoint and receives the response data in JSON format. The data is then parsed and the relevant information is extracted and displayed on the web page. If the requested blog does not exist, the code displays an error message./p>
          <div id="tumblr"></div>
        `
      },
      {
        title: 'Get a Geolocation From an IP Address',
        content: `
          <h1>Get a Geolocation From an IP Address</h1>
          <p>The code fetches geolocation information of a given IP address using a third-party API and outputs the result to the console and the webpage. If successful, the geolocation data is displayed as a JSON object on the webpage below the element with the ID geolocation. If the request fails, an alert message is displayed. The code demonstrates how to make an AJAX request using the jQuery $.getJSON() method and handle its success and failure events using the done() and fail() methods, respectively.</p>
          <div id="geolocation"></div>
          <style>
          #ipcode {
            width: 60%;
            background-color: #f1f1f1;
            border: none;
            padding: 12px 20px;
            //wrap text
            white-space: pre-wrap;
            margin: 8px 0;
            box-sizing: border-box;
            color: #000;
          }
          </style>

        `
      },
      {
        title: 'Public APIs',
        content: `
          <h1>Public APIs</h1>
          <p>Using APIs with AJAX can be a powerful way to fetch data from remote servers and integrate them into your web application. AJAX stands for Asynchronous JavaScript and XML and it allows you to make requests to the server without reloading the page.

          One way to get started with using APIs and AJAX is by exploring the collection of public APIs available on the GitHub repository at https://github.com/public-apis/public-apis#animals. This repository contains a list of APIs across different categories that are available for public use.
          
          To use an API listed on this repository, you can first obtain an API key from the provider's website or by following their instructions on how to access the data. Once you have the API key, you can make an AJAX request to the API endpoint using JavaScript's built-in fetch() method or the jQuery $.ajax() method.</p>
          <p>For example, let's say you want to use the "Dog CEO" API to fetch a random image of a dog. You can make an AJAX request to the API endpoint using the fetch() method as follows:</p>
          <div id="publicAPI">
          <code>
          fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
            // do something with the data
            console.log(data);
          })
          .catch(error => console.error(error));

          </code>
          </div>
          <p>This will send a request to the API endpoint and return a response containing a random image of a dog in JSON format. You can then parse the JSON data and use it to display the image on your webpage or perform any other desired action.

          Overall, using APIs with AJAX can be a great way to enrich your web application with external data. By exploring the public APIs available on the GitHub repository, you can find a wide range of data sources to integrate into your project.</p>

          <div id="dog"></div>

        `
      },
      {
        title: 'Using global Ajax Event Handlers',
        content: `
          <h1>Using global Ajax Event Handlers</h1>
          <p>The code is a demonstration of how to use jQuery to show and hide a preloader animation while performing an AJAX request to fetch data from a web API. When the AJAX request is started, the preloader is faded in, and when it is completed, the preloader is delayed by one second and then faded out. If the AJAX request is successful, the response data is logged to the console, and a new HTML element with the ID "users" is added to the page, displaying the JSON data in a formatted code block. If the AJAX request fails, an alert message is displayed.</p>

          <div id="preloader" class="text-center">
            <img src="/public/images/advanced/preloader.gif" alt="preloader">
          </div>
          <div id="users"></div>

          <style>
          #preloader {
            display: none;
          }
          </style>
        `
      },

      ]
    },
    section5: {
      title: 'Master Class',
      subTopics: [
      {
        title: 'JavaScript Console functions',
        content: `
          <h1>JavaScript Console functions</h1>
          <h2>Check the console for examples</h2>
          <p>This code demonstrates various methods that can be used with the JavaScript console, including logging messages, displaying formatted messages, displaying messages of different types, displaying data in a table, timing the execution of code, grouping and nesting console messages, and counting the number of times a particular message has been logged using console.count(). These methods are useful for debugging and testing JavaScript code.          </p>

          <ul>
          <li>console.log()</li>
          <li>console.error()</li>
          <li>console.warn()</li>
          <li>console.info()</li>
          <li>console.debug()</li>
          <li>console.table()</li>
          <li>console.time()</li>
          <li>console.timeEnd()</li>
          <li>console.group()</li>
          <li>console.groupEnd()</li>
          <li>console.groupCollapsed()</li>
          <li>console.timer() console.timerEnd()</li>
          <li>console.clear()</li>
          </ul>
        `
      },
      {
        title: 'Reuse your code with functions',
        content: `
          <h1>Reuse your code with functions</h1>
          <p>The code defines a jQuery plugin required which adds functionality to validate whether a form input has a required attribute, and to display an error message if the input is empty. The required function attaches a keyup event listener to the input field to check for its value and display or remove an error message accordingly. The showError function is used to create and insert the error message into the DOM.

          The plugin is then applied to two specific form input fields with IDs txtName and txtLastName.</p>
          <div id="container" class="has-error">
            <label>Name</label>
            <input type="text" id="txtName" class="form-control" placeholder="Name" required>
            <label>LastName</label>
            <input type="text" id="txtLastName" class="form-control" placeholder="Lastname" required>
          </div>
          <style>
            #container{
              margin-bottom: 20px;
            }

            #container label {
            float: left;
            margin-left: 10px;
            margin-top: 30px;
          }
          .has-error input {
            border: 1px solid red;
          }
          .text-error {
            float: left;
            color: red;
            margin-left: 10px;
            position: absolute;
          }
          </style>
        `
      },
      {
        title: 'Use Anonymous functions to Isolate Scope',
        content: `
          <h1>Use Anonymous functions to Isolate Scope</h1>
          <p>The code creates a button and a number counter and attaches them to a container element using jQuery. It then defines a jQuery plugin named count, which when applied to an element, increments the value of a counter by 1 each time the element is clicked. Finally, the code applies this count plugin to the button element to make it function as a counter button.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Fusion objects with $.extend()',
        content: `
          <h1>Fusion objects with $.extend()</h1>
          <p>The code adds a button to a container element using jQuery's append method. When this button is clicked, it triggers a function chatNotification with some pre-defined parameters. The concept being demonstrated is how to use jQuery to add elements to the DOM dynamically and to attach event handlers to them.</p>
          <div class="container"></div>
        `
      },
      {
        title: 'Use of function $.type()',
        content: `
          <h1>Use of function $.type()</h1>
          <p>The code explores the difference between the typeof operator and the $.type() method in jQuery. It demonstrates the behavior of these operators for various data types such as null, undefined, string, number, array, and regular expression. The typeof operator returns a string representing the data type of the operand, while the $.type() method is a more accurate way to determine the type of an object, including null and array types.</p>
        `
      },
      {
        title: 'Map() method',
        content: `
          <h1>Map() method</h1>
          <p>The code creates a list of checkboxes representing the days of the week, and updates a text element to display which days have been selected. The code demonstrates the use of jQuery to create and manipulate HTML elements, as well as event handling using the .on() method. The code also shows how to use JavaScript's .forEach() and .map() methods to iterate over arrays and manipulate their contents.</p>

          <div id="container"> </div>

          <style>
          #container ul{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 10px;
          }
          </style>
        `
      },
      {
        title: '$.grep() method',
        content: `
          <h1>$.grep() method</h1>
          <p>The code generates an array of dates for the current month and year, and then filters out all the Sundays from it. It then displays the number of Sundays in the month and the date of each Sunday in the month on the webpage. The concept being explained here is the usage of the $.grep() function in jQuery to filter an array based on a condition.</p>
          <div id="container"> </div>
        `
      },
      {
        title: 'Order Elements Inside a jQuery Collection',
        content: `
          <h1>Order Elements Inside a jQuery Collection</h1>
          <p>The given code creates 20 random numbers, displays them in an unordered list on a web page, and provides a button that, when clicked, orders the numbers in ascending order using JavaScript's sort() method and updates the list to reflect the ordered numbers. The code demonstrates the use of jQuery library for DOM manipulation in JavaScript.</p>

          <div id="container">

          </div>
        `
      },
      {
        title: 'Deferred/ Promises in jQuery',
        content: `
          <h1>Deferred/ Promises in jQuery</h1>
          <p>This code demonstrates how to read a JSON file using jQuery's ajax function and return a Promise object that can be used to handle the asynchronous response. The JSON_Reader function takes a filename as an argument and returns a Promise object that resolves to the parsed JSON data in case of success or rejects with an error object in case of failure. The returned Promise object is then used to handle the response using the done and fail methods, which respectively handle the success and failure scenarios by logging the corresponding data to the console.</p>
        `
      },
      {
        title: 'Call jQuery Methods Conditionally',
        content: `
          <h1>Call jQuery Methods Conditionally</h1>
          <p>The code demonstrates how to use a ternary operator in JavaScript to conditionally execute a jQuery method on an HTML element based on the value of a variable. The code selects an HTML element with the ID of "square", sets the initial direction to "down", and uses a ternary operator to decide whether to slide the element up or down based on the direction variable. Finally, the code executes the selected jQuery method on the element.</p>

          <div id="square"></div>

          <style>
          #square{
            height: 100px;
            width: 100px;
            background-color: blue;
            display: none;
          }
        `
      },
      {
        title: 'Convert Black and White Images to Color',
        content: `
          <h1>Convert Black and White Images to Color</h1>
          <p>This code demonstrates how to convert an image to black and white using the HTML5 canvas element and JavaScript. The code creates a canvas element, loads an image onto it, and then converts the image to grayscale when a button is clicked. The grayscale effect is achieved by setting the RGB values of each pixel in the image to the same value, which is the average of the original RGB values.</p>
          <div id="container"></div>

          <style>
          #container {
            display: flex;
            flex-direction: column;
          }
          </style>
        `
      },
      {
        title: 'Callback lists',
        content: `
          <h1>Callback lists</h1>
          <p>The code creates two buttons and a checkbox inside a container and demonstrates the use of jQuery's Callbacks object to execute a series of functions when an event occurs. The Callbacks object allows developers to create and manage a list of callbacks, which can be executed in a specific order when triggered. The code adds two callbacks to the Callbacks object and then triggers them when the user clicks on the first button or the second button, respectively. Additionally, the code demonstrates how the stopOnFalse option of the Callbacks object can be used to stop the execution of callbacks if one of them returns false.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Create Custom Pseudo Selectors',
        content: `
          <h1>Create Custom Pseudo Selectors</h1>
          <p>The code creates a button and a canvas element, loads an image, and provides functionality to convert the image to black and white upon clicking the button. The canvas element is used to manipulate the image by extracting the image data, converting each pixel to grayscale, and rendering the modified image back to the canvas. The concept demonstrated is basic image manipulation using HTML5 Canvas and JavaScript.</p>
          <div id="container">
            <p class="lipsum"> Lorem ipsum dolor sit amet consectetur elit </p>
            <p class="lipsum">dolor sit amet consectetur </p>
            <p class="lipsum">lorem ipsum ste expedita impedit accusamus optio nul</p>
            <p class="lipsum">repellendus eaque possimus ad officia</p>
            <p class="lipsum">lorum similique, necess</p>
          </div>
        `
      },
      {
        title: 'Customized Animations',
        content: `
          <h1>Customized Animations</h1>
          <p>The code snippets are a series of exercises that demonstrate various jQuery concepts.

          The first code snippet creates two buttons and one checkbox inside a container, and uses the $.Callbacks() function to create a callback list that can be called when the buttons are clicked. The code also demonstrates the use of the $.Callbacks('stopOnFalse') method to stop the callback list from executing when a particular condition is not met.
          
          The second code snippet uses jQuery to create five paragraphs with the class 'lipsum' and random length lipsum text, and demonstrates the use of the $.expr.pseudos.has method to filter elements based on their content.
          
          The third code snippet creates two buttons with the text "Show" and "Hide", respectively, and uses jQuery's animate method to add animation effects to an image when the buttons are clicked. It also demonstrates the use of the jQuery.easing object to create a custom easing function for the animation.</p>
          <div id="buttons"></div>
          <div id="container"></div>
        `
      },
      {
        title: 'Used customized animations',
        content: `
          <h1>Used customized animations</h1>
          <p>The code is demonstrating how to use the jQuery library to manipulate the CSS properties of a DOM element and to perform animations and asynchronous operations using the queue() function. It also shows how to check the length of the queue at various points during the execution of the code.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Customized CSS properties',
        content: `
          <h1>Customized CSS properties</h1>
          <p>The code is using jQuery to manipulate a DOM element with id "container". It sets some CSS properties like height, width, and background color to create a blue square. Additionally, it defines a new CSS hook named "rotate" using $.cssHooks. Finally, it applies the "rotate" CSS hook to the previously defined element and rotates it 45 degrees. This concept demonstrates how to define custom CSS hooks in jQuery and use them to manipulate DOM elements.</p>
          <div id="container"></div>
        `
      },
      {
        title: '$.proxy() method',
        content: `
          <h1>$.proxy() method</h1>
          <p>This code creates a button that toggles the visibility of an image and inserts the button and image into a container. It uses the jQuery $.proxy() method to set the context (the value of this) of the click event handler to the image element.</p>
          <div id="container"></div>
          
        `
      },
      {
        title: 'Send Callbacks to jQuery Functions',
        content: `
          <h1>Send Callbacks to jQuery Functions</h1>
          <p>This code filters paragraphs containing the word "lorem" (case-insensitive) and hides the rest. It adds a number to visible paragraphs and colors them green or blue depending on their index. It also truncates paragraphs longer than 30 characters and sets the color of a question element to red. The code then checks whether the first visible paragraph has a green or specific RGB color and sets the text of an answer element to the resulting boolean value. The code covers concepts such as filtering, modifying CSS styles, truncating text, and manipulating HTML elements using jQuery.</p>
          <div id="container"></div>
          <p class="lipsum"> Lorem ipsum dolor sit amet consectetur elit </p>
            <p class="lipsum">dolor sit amet consectetur </p>
            <p class="lipsum">lorem ipsum ste expedita impedit accusamus optio nul</p>
            <p class="lipsum">repellendus eaque possimus ad officia</p>
            <p class="lipsum">lorum similique, necess</p>

            <p id="question">Is first paragraph green? </p>
            <p id="answer"></p>
        `
      },

      ]
    },
    section6: {
      title: 'Plugins',
      subTopics: [
      {
        title: 'Test if Browser Supports HTML5 Features',
        content: `
          <h1>Test if Browser Supports HTML5 Features</h1>
          <h2><a href="https://modernizr.com/" target="_blank">Modernizr</a></h2>
          <p>The code adds the Modernizr library to the HTML page and checks the support of various features by iterating over the classes in the HTML tag, using Modernizr to detect support and appending the result to a container element on the page. The concept being demonstrated is feature detection using the Modernizr library, which allows web developers to detect whether a user's browser supports various HTML, CSS, and JavaScript features, and adjust the website behavior accordingly.</p>
          <div id="container"></div>
          <style>
          #container {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          </style>
        `
      },
      {
        title: 'Use Media Queries in jQuery and JavaScript',
        content: `
          <h1>Use Media Queries in jQuery and JavaScript</h1>
          <p>The code appears to be checking whether the screen is in portrait or landscape mode using a media query that targets a maximum width of 640 pixels and a portrait orientation. However, the code only checks for the initial screen orientation when the page is loaded and when the window is resized. It doesn't continuously check for changes in the screen orientation.

          To continuously check for changes in screen orientation, the code should use the addListener method on the mediaQuery object to add a listener that triggers a function when the screen orientation changes. This would allow the code to update the message dynamically as the user rotates their device.</p>
          <h2 style="color: red;">Resize screen to detect</h2>
          <div id="container"></div>
        `
      },
      {
        title: 'Accelerate the Webpage Loading',
        content: `
          <h1>Accelerate the Webpage Loading with Script Loading</h1>
          <p>To load the head.js library using the provided script tag, you can add the following code to the <head> section of your HTML document:</p>
          <p>After loading the head.js library, you can use it to asynchronously load other scripts and stylesheets. For example, suppose you want to load the jQuery library and a custom script file app.js using head.js. Here's an example code:</p>
          <p>The below code will load the jQuery library and app.js file asynchronously, and execute them in the order they were passed to head.load().

          head.js is useful for optimizing the performance of your web page by asynchronously loading scripts and stylesheets. It allows you to load resources in parallel, without blocking the page rendering, and execute them in the correct order. It also provides a convenient API for loading scripts based on conditions, such as whether a script is already loaded or whether the user is on a mobile device. Overall, head.js is a powerful tool for managing script and stylesheet loading in your web applications.</p>
        `
      },
      {
        title: 'Get Parameters from DOM Elements',
        content: `
          <h1>Get Parameters from DOM Elements</h1>
          <p>The code creates a notification system on a web page that allows users to click a button to generate random notifications. The notifications are displayed in a fixed position on the page and can be closed by clicking an "X" button within each notification. The code also logs the random number associated with each notification when it is clicked. The concept demonstrated in this code is how to use jQuery to create dynamic web page content and handle user interaction with that content.</p>
        `
      },
      {
        title: 'Perfect complement for jQuery and JavaScript Underscore',
        content: `
          <h1>Underscore Library</h1>
          <h2><a href="https://underscorejs.org/" target="_blank">Underscore</a></h2>

          <p></p>
          <div id="container"></div>
        `
      },
      {
        title: 'Simplify Date and Time Functions in JavaScript',
        content: `
          <h1>Simplify Date and Time Functions in JavaScript</h1>
          <h2><a href="https://momentjs.com/" target="_blank">Moment.js</a></h2>
          <p>The code demonstrates the usage of the JavaScript library Moment.js for working with dates and times. The Moment.js library is loaded dynamically using jQuery's $.getScript method, and several examples are provided to show how to format and manipulate dates using the library. The examples include displaying the current time, formatting dates in various ways, adding and subtracting time from dates, and displaying relative time. The examples are appended to a container element on the page using jQuery's append method.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Typescript 101',
        content: `
          <h1>Typescript 101</h1>
          <p>TypeScript is a strongly-typed programming language that is a superset of JavaScript, which means that it extends JavaScript by adding features that are not available in the original language. TypeScript adds static typing, classes, interfaces, and other features that help developers write more robust and maintainable code. By using TypeScript, developers can catch errors at compile-time rather than runtime, which can reduce the likelihood of bugs and improve the quality of code. TypeScript can be transpiled into JavaScript, which means that developers can write code in TypeScript and then generate equivalent JavaScript code that can be executed in a web browser or Node.js environment. Overall, TypeScript provides a way for developers to write safer and more scalable JavaScript code.</p>
        `
      },
      {
        title: 'LocalStorage Usage',
        content: `
          <h1>LocalStorage Usage</h1>
          <p>The code uses the jQuery library to check if the page's DOM has finished loading and then checks if the local storage contains a certain key. If the key is not found, it adds a notification message to the page and sets the key in the local storage. If the key is found, it adds a different notification message to the page. The concept demonstrated here is the use of local storage to store data on the client-side browser and retrieve it later, allowing for persistent data across different page loads.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Cut, Escalate, Blur Change Colors and More on Images',
        content: ` 
        <h1>Cut, Escalate, Blur Change Colors and More on Images</h1>
        <h2><a href="https://camanjs.com/" target="_blank">CamanJS</a></h2>
        <p>This code adds two buttons to change and reset the properties of an image using CamanJS library, which is a powerful image manipulation tool for the web. When the page is loaded, it inserts an image to the container, and CamanJS adjusts its brightness, contrast, sepia, and saturation. Then, the change button updates the image with the adjusted values, and the reset button restores the original image properties. The CamanJS library is loaded from a CDN using jQuery's $.getScript method.</p>
        <div id="container"></div>
        <style>
          #container {
            margin-top: 20px;
            display: flex;
            gap: 10px;
          }
        </style>
        `
      },
      {
        title: 'Read and Print a Markdown File',
        content: `
          <h1>Read and Print a Markdown File</h1>
          <h2><a href="https://cdnjs.com/libraries/markdown.js" target="_blank">Markdown.js</a></h2>
          <p>The code creates a web page where a user can enter markdown text, click a button to convert it to HTML, and view the converted HTML below the input field. The markdown.js library is used to convert the markdown text to HTML. The $.getScript() function is used to load the library from a remote CDN. The markdownLoad() function is called once the library has finished loading, and it sets up an event handler to perform the conversion and display the HTML when the button is clicked.</p>
          <div id="container"></div>
          <hr>
        `
      },
      {
        title: 'Animate Colors with jQuery',
        content: `
          <h1>Animate Colors with jQuery</h1>
          <h2><a href="https://cdnjs.com/libraries/jquery-color" target="_blank">jQuery Color</a></h2>
          <p>The code demonstrates how to use the jQuery library to animate the background color of an HTML element in response to a button click event. The code also shows how to dynamically load an external JavaScript file using the $.getScript() method in jQuery. Additionally, the code uses the jQuery.Color object to convert color names to RGB values.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Manage Animations with CSS',
        content: `
          <h1>Manage Animations with CSS</h1>
          <h2><a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a></h2>
          <p>The code loads a CSS animation library called "animate.css" using jQuery's append method, and then adds an event listener to a button that animates a blue box using the animateCss method. The animateCss method is a custom jQuery method that extends the behavior of jQuery by adding the ability to animate elements using CSS classes defined in the "animate.css" library. When the user clicks the "Animate" button, the blue box is animated using the "bounce" animation from the "animate.css" library, and the button is disabled while the animation is running. After the animation is finished, the button is enabled again.</p>
          <div id="container"></div>
         
        `
      },
      {
        title: 'Show a Background Video',
        content: `
          <h1>Show a Background Video</h1>
          <p>The code creates a video player on a webpage using the Vimeo player, with the video set to autoplay and loop. The video is positioned to cover the entire viewport, fixed in position, and inserted after an element with the ID of #container. The commented-out code seems to be an alternative way to position the video but with a lower z-index.</p>
          <div id="container"></div>
      

          <style>
          html, body{
            height: 100%;
            color: #fff;
          }

          #container{
            background: rgba(0,0,0,0.5);
            color: #fff;
            padding: 30px;
            border-radius: 10px;
          }

          </style>
        `
      },
      {
        title: 'Improve application dialogs Sweet Alert2',
        content: `
          <h1>Improve application dialogs Sweet Alert2</h1>
          <h2><a href="https://sweetalert2.github.io/" target="_blank">SweetAlert2</a></h2>
          <p>The code creates a button element with the text "Alert" and adds it to a container element. When the button is clicked, it triggers an event that displays a "success" message using the SweetAlert2 library. The code also loads the SweetAlert2 library dynamically using the $.getScript() function. The concept illustrated in this code is how to use a third-party library to display user-friendly and customizable alert messages in a web application.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Notifications in the Favicon Area',
        content: `
          <h1>Notifications in the Favicon Area</h1>
          <h2><a href="https://cdnjs.com/libraries/favico.js" target="_blank">Favico.js</a></h2>
          <p>The code demonstrates how to use the Favico.js library to dynamically update the favicon and title of a web page with a counter. It loads the Favico.js library using jQuery's $.getScript() method and passes a callback function loader as the second argument. The loader function creates a new Favico object with an animation setting, selects the title element using jQuery, and sets up an interval that updates the favicon and title every 1 second by incrementing a counter. This provides visual feedback to the user that the page is still active and responsive.</p>
          <div id="container">
          <h2>Check the icon image on the tab animate!</h2>
          </div>
        `
      },
      ]
    },
    section7: {
      title: 'Plugins 2',
      subTopics: [
      {
        title: 'Better Selectors Using Chosen',
        content: `
          <h1>Better Selectors Using Chosen</h1>
          <h2><a href="https://harvesthq.github.io/chosen/" target="_blank">Chosen</a></h2>
          <p>The code adds a jQuery plugin called "chosen" to a webpage and demonstrates how to use it to create a styled select element with customizable options. The plugin is loaded using the $.getScript method and initialized using the $('#select').chosen() method. The select element's options are created using an array of strings and dynamically added to the select element using a forEach loop. The selected option is displayed in a paragraph element below the select element and is updated dynamically using an on event listener.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Apply a Blur to Page Elements',
        content: `
          <h1>Apply a Blur to Page Elements</h1>
          <h2><a href="https://github.com/jakiestfu/Blur.js/" target="_blank">Blur.js</a></h2>
          <p >The code defines a jQuery plugin called blurjs that adds a blur effect to selected HTML elements using CSS. The plugin takes an optional options object as an argument with the following properties:

          customClass: a custom class name to use for the blurred element (default is blurjs).
          radius: the amount of blur to apply in pixels (default is 5).
          persist: a boolean indicating whether to keep the blurred element after it loses focus (default is false).
          The plugin works by appending a style element to the <head> of the document with the CSS styles necessary to create the blur effect. It then applies the custom class to the selected element and removes any previously applied blur classes.
          
          The plugin also includes a reset option that removes the blur effect from all elements previously selected with the blurjs plugin.
          
          Overall, the code provides a simple way to add a customizable blur effect to HTML elements using jQuery.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Create QR Codes Using jQuery',
        content: `
          <h1>Create QR Codes Using jQuery</h1>
          <h2><a href="https://larsjung.de/jquery-qrcode/" target="_blank">jQuery QR Code</a></h2>
          <p>The code is using jQuery to dynamically load a third-party library called jQuery QR Code and generate a QR code on a container element with a specified text. The $.getScript() function is used to asynchronously load the library, and once the library is loaded, the loadedQr() function is called to generate the QR code using the qrcode() function provided by the library.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Detect Faces Using jQuery',
        content: `
          <h1>Detect Faces Using jQuery</h1>"
          <h2><a href="https://facedetection.jaysalvat.com/" target="_blank">jQuery Face Detection</a></h2>
          <p>The code is demonstrating the use of the jQuery.faceDetection plugin to detect faces in an image. The code imports the necessary plugin and then creates an image and a button to detect faces. Once the image is loaded, the jQuery.faceDetection function is called to detect faces in the image. The detected faces are then highlighted by creating a div element with a white border around the face coordinates.</p>
          <div id="container"></div>

          <style>
          #container {
            position: relative;
            width: 800px;
            margin: 0 auto;
          }
          </style>
        `
      },
      {
        title: 'Trigger Fullscreen Mode',
        content: `
          <h1>Trigger Fullscreen Mode</h1>
          <h2><a href="https://www.jsdelivr.com/package/npm/bigscreen" target="_blank">BigScreen</a></h2>
          <p>The code demonstrates how to insert an image and a video player into a container, create a button to toggle fullscreen, and define events for the image and button. The concept demonstrated is the use of the BigScreen library to toggle fullscreen mode for HTML elements.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Grid System Like Pinterest',
        content: `
          <h1>Grid System Like Pinterest</h1>
          <h2><a href="https://masonry.desandro.com/" target="_blank">Masonry</a></h2>
          <p>Masonry is a popular JavaScript library used for creating responsive, grid-style layouts. It works by positioning elements vertically in columns with minimal vertical gaps, like a masonry wall. This layout is achieved by determining the available width of the container element and calculating the optimal column width based on the desired column count and the width of each individual element.

          To use Masonry, you typically start by initializing a new Masonry instance with a container element and specifying options like column width, gutter size, and item selector. Then, you add your individual elements to the container element, and Masonry will automatically position them within the grid layout.
          
          Masonry also provides a number of methods and events that can be used to manipulate the layout dynamically, such as adding or removing elements or adjusting the size of the container. This allows for a highly flexible and customizable layout that can adapt to different screen sizes and content types.</p>
          <p style="color: red;">Click on squares to delete them</p>
                    
        `
      },
      {
        title: 'Convert Inputs in Tags (knob)',
        content: `
          <h1>Convert Inputs in Tags (knob)</h1>
          <h2><a href="http://anthonyterrien.com/demo/knob/" target="_blank">jQuery Knob</a></h2>
          <p>The code demonstrates how to use the jQuery Knob library to create two input elements with knob UI, set their attributes and initialize them. The code then continuously updates the value of one of the input elements every second using a setInterval function. The concept being explained is how to create and update the values of knob UI input elements using the jQuery Knob library.</p>
          <div id="container"></div>

          <style>
          #container {
            display: flex;
            gap: 30px;
          }
          </style>
        `
      },
      {
        title: 'Work With Money and Currencies',
        content: `
          <h1>Work With Money and Currencies</h1>
          <h2><a href="http://openexchangerates.github.io/money.js/" target="_blank">Money.js</a></h2>
          <p>The given code loads a JavaScript library named "moneyjs.js" and fetches exchange rates data from a JSON file. It then generates a user interface in HTML for converting an amount from one currency to another using the exchange rates data. The interface includes two dropdowns for selecting currencies, an input field for entering an amount, and a button for triggering the conversion. When the button is clicked, the code retrieves the input amount and selected currencies, uses the exchange rates to calculate the converted amount, and displays the result on the screen.</p>
          <div id="container"></div>

          <style>
          #container {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 20px;
          }
        `
      },
      {
        title: 'Google Maps in a Simple Way',
        content: `
          <h1>Google Maps in a Simple Way</h1>
          <p>The code adds two scripts, one for Google Maps and another for GMaps, to the body element of an HTML page, then creates a map using an iframe element with the specified attributes and appends it to an element with ID "container". The code demonstrates how to add maps to an HTML page using JavaScript and external libraries.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Responsive Tables',
        content: `
          <h1>Responsive Tables</h1>
          <h2><a href="https://github.com/johnpolacek/stacktable.js/" target="_blank">Stacktable.js</a></h2>
          <p>The code is adding scripts and CSS files to the HTML document dynamically using jQuery. The scripts and CSS files are used to create a Google Map using the Google Maps API, create a table with dummy data, and apply the Stacktable plugin to the table to make it responsive. The concept being demonstrated is the ability to add and load external scripts and stylesheets dynamically at runtime, which allows for greater flexibility and customization in web development.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Create Input Masks',
        content: `
          <h1>Create Input Masks</h1>
          <h2><a href="https://cdnjs.com/libraries/jquery.maskedinput" target="_blank">jQuery Masked Input</a></h2>
          <p>The code creates a dynamic form with input fields based on the "inputs" array, appends them to the "container" element, and applies input masking using the jQuery Masked Input plugin. The concept demonstrated is input masking, which enforces a specific format for user input in form fields.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Highlight Differences Between Two Images',
        content: `
          <h1>Highlight Differences Between Two Images</h1>
          <h2><a href="https://zurb.com/playground/twentytwenty>" target="_blank">TwentyTwenty</a></h2>
          <p>The code snippet loads the "TwentyTwenty" jQuery plugin, which enables a before-and-after image comparison effect. It appends the required CSS and JavaScript files to the head and body of the document respectively, and initializes the plugin on the "#container" element once the window is fully loaded.</p>
      
          <div id="container" class="twentytwenty-container">
            <img src="/public/images/advanced/re4.jpg" alt="image1"  >
            <img src="/public/images/advanced/re4-2.jpg" alt="image2" >
          </div>

          <style>
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          #container {
            width: 400px;
            height: 1300px;

          }
        
          </style>
       
        `
      },
      {
        title: 'Instagram Filters Using Javascript',
        content: `
          <h1>Instagram Filters Using Javascript</h1>
          <h2><a href="https://camanjs.com/" target="_blank">CamanJS</a></h2>
          <p>The code demonstrates the concept of image manipulation using the CamanJS library. It loads an image of a chinchilla and adds it to a container element. It then creates a dropdown menu with various filter options. When a filter is selected, the code applies the chosen filter to the image using CamanJS and updates the displayed image. The CamanJS library is loaded via a CDN, and the loadContent function is executed once the library is loaded.</p>
          <div id="container"></div>
          <style>
          #container{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          </style>
        `
      },
      {
        title: 'Keyboard Shortcuts in your Web Application',
        content: `
          <h1>Keyboard Shortcuts in your Web Application</h1>
          <h2><a href="https://github.com/madrobby/keymaster" target="_blank">Keymaster</a></h2>
          <p>The code demonstrates the usage of the "keymaster" library, a lightweight JavaScript library for handling keyboard shortcuts. It loads the library, creates a paragraph element with instructions, and listens for two keyboard shortcuts (⌘+s/ctrl+s and ⌘+r/ctrl+r), displaying a message on the screen based on which shortcut was pressed.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Adjust Text in Web Pages',
        content: `
          <h1>Adjust Text in Web Pages</h1>
          <h2><a href="https://cdnjs.com/libraries/FitText.js" target="_blank">FitText.js</a></h2>
          <p style="color: blue;">Try resizing window and Title will autoadjust</p>
          <p>This code snippet is a concise example of using the FitText.js library to dynamically adjust the font size of an HTML header element (h1) to fit within its container. The $.getScript() function is used to load the FitText.js library, and upon loading, the 'loaded' callback function is called, which applies the fitText() method to the 'h1' element.</p>
        `
      },
      {
        title: 'Take a Picture From the Webcam',
        content: `
          <h1>Take a Picture From the Webcam</h1>
          <h2><a href="https://github.com/jhuckaby/webcamjs" target="_blank">WebcamJS</a></h2>
          <p>The code demonstrates the use of the WebcamJS library to capture and display a snapshot from a user's webcam. The concept explained is the integration of a webcam-based functionality using JavaScript and jQuery.

          Key points:
          
          Webcam settings are configured with width, height, image format, and quality.
          Webcam is attached to an HTML element with id 'container'.
          A 'Take a snapshot' button is created and inserted after the 'container' element.
          On button click, a snapshot is taken and displayed in the 'picture' element.
          The WebcamJS library is loaded via a CDN link, and the 'loaded' function is executed upon completion.</p>
          <div id="container"></div>
          <div id="picture"></div>
        `
      },
      {
        title: 'Dates Selector that is Responsive and Validated',
        content: `
          <h1>Dates Selector that is Responsive and Validated</h1>
          <h2><a href="https://amsul.ca/pickadate.js/" target="_blank">Pickadate.js</a></h2>
          <p>The code imports the necessary CSS and JavaScript files for the Pickadate.js library, initializes the date picker, and appends a date input field to a container element. The concept demonstrated is the use of jQuery's $.getScript and $.when methods for asynchronously loading multiple script files and executing a callback function once they are all loaded.</p>
          <div id="container"></div>
        `
      },
      {
        title: 'Manage a Drag and Drop Interface',
        content: `
          <h1>Manage a Drag and Drop Interface</h1>
          <h2><a href="https://www.dropzone.dev/" target="_blank">Dropzone.js</a></h2>
          <p>This JavaScript code uses jQuery and the Dropzone.js library to create a file drop zone inside a container element with the id 'container'. When the window loads, it appends a paragraph with the text 'Drop your file here:', styles the text, and adds the 'drop' class to the container. The drop zone is then initialized with a URL for uploading files. Additionally, it inserts a style for error messages and imports the Dropzone.js library from a CDN.</p>
          <p style="color: red;">Error if file is uploaded as upload is not implemented</p>
          <div id="container" ></div>

          <style>
          #container{
            width: 100%;
            border: 2px dashed #0087F7;
            padding: 40px;
          }

          
          </style>
        `
      },
      {
        title: 'Make Elements Vibrate for Emphasis',
        content: `
          <h1>Make Elements Vibrate for Emphasis</h1>
          <h2><a href="https://jackrugile.com/jrumble/" target="_blank">jRumble</a></h2>
          <p>This code demonstrates the use of jQuery and external libraries to create interactive web components. It consists of three examples:

          A date picker using the Pickadate.js library. It appends the necessary CSS and JS files, creates an input element for date selection, and initializes the date picker with a minimum date set to the current date.
          A file drop zone using the Dropzone.js library. It adds necessary styles and creates a drop zone to handle file uploads.
          An element rumble effect using the jRumble library. It creates two buttons to control the rumble effect on two different elements and imports the jRumble library to apply the effect.
          Each example uses the $(window).on('load', () => {...}); event to execute code when the page finishes loading.</p>
          <div id="container" ></div>
        `
      },
      {
        title: 'Create Dynamic Graphs',
        content: `
          <h1>Create Dynamic Graphs</h1>
          <h2><a href="https://www.chartjs.org/" target="_blank">Chart.js</a></h2>
          <p>This code creates an interactive bar chart using the Chart.js library. It initializes the chart with predefined labels and data, and sets the chart's appearance using colors and borders. Upon clicking the "updateData" button, the chart's dataset is updated with randomly generated values, and the chart is refreshed. The concept explained is data visualization using JavaScript and Chart.js.</p>
          <div id="container" class="row" >
            <div class="col-md-6">
              <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            <div class="col-md-6">
              <button type="button" id="updateData">Random Data</button>
            </div>
          </div>
          <style>
          #container{
            width: 800px;
          }
          </style>
        `
      },

      ]
    },
};

