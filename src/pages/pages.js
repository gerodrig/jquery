import javascriptLogo from '/public/images/javascript.svg';
// import viteLogo from '/vite.svg';
import jqueryLogo from '/public/images/jquery.svg';

export const pages = {
  home: `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${jqueryLogo}" class="logo" alt="Vite logo" style="background: white; border-radius: 40px;"/>
    </a>
    <h1>jQuery Review</h1>
    <div>
      <ul>

      </ul>
    </div>
   
  </div>`,
  exercise1: `
    <h1>Basics</h1>
    <h3>Change to red the class hello</h3>
    <ul class='hello'>
        <li> Hello 1</li>
        <li> Hello 2</li>
        <li> Hello 3</li>
    </ul>
    <h3>Change to bold the class bold</h3>
    <ul class='bold'>
        <li> Hello 1</li>
        <li> Hello 2</li>
        <li> Hello 3</li>
    </ul>
    `,
  exercise2: `
    <div class="container">
    <h1>Selectors and Chaining</h1>
    <hr>
      <div class="row">
        <div class="col-sm-4">
           <img src="/public/images/nophoto.jpeg" alt="" class="img-circle" />
        </div>
        <div class="col-sm-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis iure ad harum dignissimos magnam alias a iste saepe quam ipsum, sed, pariatur maiores modi! Laboriosam, dolorem. Et doloribus harum quo?</p>
        </div>
        <div class="col-sm-3">
            <ul>
                <li>Math</li>
                <li>Programming</li>
                <li>Analisis</li>
                <li>Physics</li>
                <li>Geography</li>
            </ul>
        </div>
      </div>
    </div>
    `,
  exercise3: `
    <div class="container">
        <h1>Events</h1>
        <hr>

        <p>Show in console when buttotn is clicked</p>
        <button id="button1" class="btn btn-primary">Click Event</button>
        <br>

        <img src="/public/images/chinchilla.jpeg" alt="chinchilla" class="chin mt-5" style="width: '200px'; height: 200px;" />

        <br>

        <a id="link" href="https://www.gerar.ca/" target="_blank" class="btn btn-warning mt-5">Gerar Webpage</a>
    </div>
    `,
  exercise4: `
    <div class="container">
        <h1>Accordion</h1>
        <hr>

        <div align="center">
            <dl>
                <dt>Accordion Title</dt>
                <dd>This is the Accordion Content</dd>
                <dt>Accordion Title</dt>
                <dd>This is the Accordion Content</dd>
                <dt>Accordion Title</dt>
                <dd>This is the Accordion Content</dd>
                <dt>Accordion Title</dt>
                <dd>This is the Accordion Content</dd>
                <dt>Accordion Title</dt>
                <dd>This is the Accordion Content</dd>
                <dt>Accordion Title</dt>
                <dd>This is the Accordion Content</dd>
            </dl>
        
        </div>
        <style>
        dl{
                width: 500px;
        }
            dd{
                margin: 0;
                padding: 10px;
            }
            dt{
                cursor: pointer;
                font-size: 18px;
                background-color: #e3e3e3;
                border-bottom: 1px solid #c5c5c5;
                border-top: 1px solid #fff;
        </style>
    </div>
    `,
  exercise5: `
    <div class="container">
        <h1>On and Bind</h1>
        <hr>

        <h3>Click me!!!</h3> 


        <style>
            h3 {
                cursor: pointer;
            }
        </style>
    </div>
    `,
  exercise6: `
    <div class="container">
        <h1>Dynamic Table</h1>
        <h2>Multiplication table <small>for 3</small></h2>
        <hr>

        <select class="form-control" id="base">
            <option value="2">2</option>
            <option value="3" selected>3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>

        <button class="btn btn-primary mt-4">Add line</button>
        <br>
        <br>

        <table class="table table-striped">
            <tr>
                <th>Base</th>
                <th>x</th>
                <th>Number</th>
                <th>=</th>
                <th>Result</th>
            </tr>
        </table>
        <style>
            h3 {
                cursor: pointer;
            }
        </style>
    </div>
    `,
  exercise7: `
    <div class="container">
        <h1>Objects 101</h1>
        <h3>Learning the basics</h3>
        <hr>

        <h1 id="chin">&#x1F42D</h1>
        <button id="jump" class="btn btn-success mt-4">Chinchilla Run</button>
        <button id="pause" class="btn btn-warning mt-4">Chinchilla Pause</button>

    </div>

    <style>
    .jump {
        transform: translateX(-100%);
        animation: move 4s linear infinite;
      }
      
      @keyframes move {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(100%);
        }
      }
      
      .bounce {
        animation: bounce 0.5s linear;
      }
      
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
    </style>
    `,
  exercise8: `
    <div class="container">
        <h1>Objects 202</h1>
        <h3>Create elements using objects</h3>
       
        <hr>
        <h3>Keycode pressed</h3>

    </div>
    `,
  exercise9: `
    <div class="container">
        <h1>Change Colors</h1>
        <h3>Change colors using jQuery</h3>
       
        <hr>
        <div class="box">
        <span class="emoji">&#x1F42D</span>
        </div>
        <select class="form-control mt-4">

        </select>

    </div>

    <style>
      .emoji {
        font-size: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;

      }

    </style>
    `,
  exercise10: `
    <div class="container">
        <h1>Change Colors</h1>
        <h3>Change colors using jQuery</h3>
       
        <hr>
        <div class="box">
        <span class="emoji">&#x1F42D</span>
        </div>
        <select class="form-control mt-4">

        </select>

    </div>

    <style>
      .emoji {
        font-size: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;

      }

    </style>
    `,
  exercise11: `
    <div class="container text-center">
	
	<h1>Objects Practice Change Color 2</h1>
    <h3>Vehicle Example Color Picker</h3>
	<hr>
	

	<div class="divPreloader">
		<img src="/public/images/loading.gif" class="imgLoader img-fluid">
	</div> 
	
	<div class="divPreview">
		<img id="tesla-car" class="img-fluid">
	</div>

	<div class="form-group">
	    <div class="col-sm-offset-4 col-sm-5">
	      	<select id="changeColor" class="form-control">
	      		
	      	</select>
	    </div>
	</div>
</div>
    <style>
      .form-control {
        position: relative;
        top: -150px;
        left: 70%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 5px;

      }

      @media (max-width: 1000px) {
        .form-control {
          position: relative;
          top: -50px;
          left: 70%;
        }
      
        
      }

      .divPreloader {
        position: absolute;
        opacity: 0.4;
      }
      </style>
    `,
  exercise12: `
    <div class="container text-center">
	
	<h1>Data Attribute</h1>
    <h3>Data Attributes in components</h3>
	<hr>
    <h4>Hover over the images to check type</h4>
    <div class="container d-flex flex-column">
    <img src="/public/images/1.jpg" class="img-fluid" data-type="jpg">
    <br>
    <br>
    <img src="/public/images/2.png" class="img-fluid" data-type="png">
    <br>
    <br>
    <div>
      <h1 class="attr"></h1>
    </div>
    </div>
    `,
    exercise13: `
      <div class="container text-center">

      <h1>Change color 3</h1>
      <h3>E-shop exercise</h3>
      <hr>

      <div class="container">
      <div class="row">

		<div class="col-sm-2">
		    <section class="panel">
		        <div class="panel-body">
					
					<img src="/public/images/eshop/shirts/thumbs/white.jpg" class="imgThumb img-thumbnail" data-color="white">
					<img src="/public/images/eshop/shirts/thumbs/gray.jpg" class="imgThumb img-thumbnail" data-color="gray">
					<img src="/public/images/eshop/shirts/thumbs/black.jpg" class="imgThumb img-thumbnail" data-color="black">
					<img src="/public/images/eshop/shirts/thumbs/red.jpg" class="imgThumb img-thumbnail" data-color="red">
					<img src="/public/images/eshop/shirts/thumbs/pink.jpg" class="imgThumb img-thumbnail" data-color="pink">
					<img src="/public/images/eshop/shirts/thumbs/green.jpg" class="imgThumb img-thumbnail" data-color="green">

		        </div>
		    </section>
		</div>

		<div class="col-sm-5">
		    <section class="panel">
		        <div class="panel-body">
					
					<img id="shirtColor" src="/public/images/eshop/shirts/large/white.jpg" data-color="white">

		        </div>
		    </section>
		</div>

		<div class="col-sm-4">
		    <section class="panel">
		        <div class="panel-body">
					<h2>Special Shirt <small id="lblColor">white</small></h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum provident doloremque ipsam beatae neque quo saepe voluptatibus, sunt hic delectus nam perspiciatis ut atque, minus minima, rem reiciendis dolor harum!.
						<br>
						<br>
					</p>
					<p>
						<h4>Rating</h4>
						<img src="/public/images/eshop/star1.png" class="imgRating">
						<img src="/public/images/eshop/star1.png" class="imgRating">
						<img src="/public/images/eshop/star1.png" class="imgRating">
						<img src="/public/images/eshop/star1.png" class="imgRating">
						<img src="/public/images/eshop/star2.png" class="imgRating">
						<br>
						<br>
					</p>
					<p>
						<h3>Price <small>$10</small></h3>
					</p>

		        </div>
		    </section>
		</div>

	</div>
      </div>
      <style>
      .imgThumb{
        display: block;
        cursor: pointer;
      }
      
      .imgRating{
        width: 30px;
        height: 30px;
      }
      </style>
`,
exercise14: `
<div class="container text-center">
  <h1>Animations</h1>
  <h3>jQuery animate</h3>
  <hr>

  <button data-direction="up" class="btn btn-primary">Move Up</button>
  <button data-direction="down" class="btn btn-primary">Move Down</button>
  <button data-direction="left" class="btn btn-primary">Move Left</button>
  <button data-direction="right" class="btn btn-primary">Move Right</button>
  <button data-direction="reset" class="btn btn-danger">Reset</button>

  <br>
  <br>

  <div class="red-box"></div>

<div class="container">
</div>

<style>
.red-box {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
`,
exercise15: `
<div class="container text-center">
  <h1>Animations 2</h1>
  <h3>jQuery animate size</h3>
  <hr>

  <div class="red-box"></div>
  <br>
  <br>
  <button data-action="size" class="btn btn-primary">Size</button>
 



<div class="container">
</div>

<style>
.red-box {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: red;

}
</style>
`,
exercise16: `
<div class="container text-center">
  <h1>Animations</h1>
  <h3>jQuery animate</h3>
  <hr>

  <button data-direction="up" class="btn btn-primary">Move Up</button>
  <button data-direction="down" class="btn btn-primary">Move Down</button>
  <button data-direction="left" class="btn btn-primary">Move Left</button>
  <button data-direction="right" class="btn btn-primary">Move Right</button>
  <button data-action="size" class="btn btn-warning">Bigger</button>
  <button data-direction="reset" class="btn btn-danger">Reset</button>

  <br>
  <br>

  <div class="red-box"></div>
  <div class="blue-box"></div>

<div class="container">
</div>

<style>
.red-box {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: red;
  float: left;
  margin-right: 10px;
}

.blue-box {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: blue;
  float: left;
  margin-right: 10px;
}
</style>
`,
exercise17: `
<div class="container text-center">

<h1>Animation 3</h1>
<h3>Slideshow</h3>
<hr>

<div class="slideShow">
  <ul>
    <li><img src="/public/images/slideshow/slide1.png"></li>
    <li><img src="/public/images/slideshow/slide2.png"></li>
    <li><img src="/public/images/slideshow/slide3.png"></li>
    <li><img src="/public/images/slideshow/slide4.png"></li>
  </ul>
</div>
<button data-action="prev" class="btn btn-primary slideButton">Prev</button>
<button data-action="next" class="btn btn-primary slideButton">Next</button>
<br>
<br>
<p>
lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quae, voluptas, voluptate, quod, quibusdam quidem quos quia quas quisq
dolorum quod quibusdam quia quisquam quae voluptas voluptate quidem quos.
</p>
<style>
.slideShow {
  // background-color: red;
  width: 600px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 10px;
}

.slideShow ul {
  padding: 0;
  list-style: none;
  margin-left: 0;
  display: flex;
}
</style>
`,
exercise18: `
<div class="container text-center">

<h1>Animation 4</h1>
<h3>Slideshow - 2</h3>
<hr>

<div class="slideShow">
  <ul>
    <li><img src="/public/images/slideshow/slide1.png"></li>
    <li><img src="/public/images/slideshow/slide2.png"></li>
    <li><img src="/public/images/slideshow/slide3.png"></li>
    <li><img src="/public/images/slideshow/slide4.png"></li>
  </ul>
</div>

<div class="slideShowButtons">
  <div data-idx="0" class="slideButton"></div>
  <div data-idx="1" class="slideButton"></div>
  <div data-idx="2" class="slideButton"></div>
  <div data-idx="3" class="slideButton"></div>
</div>

<br>
<br>
<p>
lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quae, voluptas, voluptate, quod, quibusdam quidem quos quia quas quisq
dolorum quod quibusdam quia quisquam quae voluptas voluptate quidem quos.
</p>
<style>
.slideShow {
  // background-color: red;
  width: 600px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 10px;
}

.slideShow ul {
  padding: 0;
  list-style: none;
  margin-left: 0;
  display: flex;
}

.slideShowButtons {
  position: relative;
  width: 600px;
  display: flex;
  top: -30px;
  justify-content: center;
  margin: 0 auto;
}

.slideShowButtons .slideButton {
  cursor: pointer;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background-color: #ccc;
  margin-right: 5px;
}
</style>
// `,
exercise19: `
<div class="container text-center">

<h1>BigBox Notification Plugin 1</h1>
<h3>Modals</h3>
<hr>

<div class="bigBoxModal">
</div>


</div>
<link rel="stylesheet" href="/public/styles/bigBoxContainer.css">
`,
exercise20: `
<div class="container text-center">

<h1>Small Notification Plugin 2</h1>
<h3>Notification</h3>
<hr>


</div>
`,
exercise21: `
<div class="container text-center">

<h1>Notification Plugin 3</h1>
<h3>Chat Notification</h3>
<hr>


</div>
`,
exercise22: `
<div class="container text-center">

<h1>Ajax Requests</h1>
<h3>JSON Manipulation</h3>
<hr>

<div class="container">
  <h1>Information data: <small id="nameLabel">()</small></h1>
  <hr>

  <table class="table table-striped">
    <tr>
        <td>Photo</td>
        <td><img src="" id="photo" class="img-thumbnail" alt="Photo"></td>
    </tr>
    <tr>
        <td>Name</td>
        <td><input type="text" id="txtName" class="form-control"></td>
    </tr>
    <tr>
        <td>Address</td>
        <td><input type="text" id="txtAddress" class="form-control"></td>
    </tr>
    <tr>
        <td>Phone</td>
        <td><input type="text" id="txtPhone" class="form-control"></td>
    </tr>
    <tr>
        <td>Gender</td>
        <td><input type="text" id="txtGender" class="form-control"></td>
    </tr>
  </table>
</div>
`,
exercise23: `
<div class="container text-center">

<h3>JSON Array Manipulation</h3>
<hr>

<div class="container">
  <h1>Information data: <small id="nameLabel">Multiple people</small></h1>
  <hr>

  <table class="table table-striped">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Tags</th>
    </tr>
  </table>
</div>
`,
exercise24: `
<div class="container text-center">

<h1>Ajax Requests 3</h1>
<h3>Weather - Consume API</h3>
<hr>

<div class="weather-container">
  <div class="location">
    <h2 id="city"></h2>
    <h3 id="country"></h3>
  </div>
  <div class="weather">
    <div class="icon"><img id="icon" src="" alt="weather icon"></div>
    <div class="description">
      <h3 id="main"></h3>
      <p id="description"></p>
    </div>
    <div class="temperature">
      <h1 id="temp"></h1>
      <p>Feels like: <span id="feels-like"></span></p>
    </div>
  </div>
  <div class="details">
    <p>Pressure: <span id="pressure"></span> hPa</p>
    <p>Humidity: <span id="humidity"></span>%</p>
    <p>Wind: <span id="windSpeed"></span> m/s</p>
    <p>Cloudiness: <span id="cloudiness"></span>%</p>
    <p>Sunrise: <span id="sunrise"></span></p>
    <p>Sunset: <span id="sunset"></span></p>
  </div>
</div>

<link rel="stylesheet" href="/public/styles/weather.css">
`,
};


// test: `
// <div class="container text-center">

// <h1>Title</h1>
// <h3>Subtitle</h3>
// <hr>

// <div class="container">
// </div>
// `,