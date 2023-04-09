import gsap from 'gsap';

let nCounter = 0;
export const chatNotification = (options) => {
  //create unique id for each notification
  const notiID = `notificationID-${nCounter++}`;

 //append scripts to the head
 $('head').append(
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
  );

  $('head').append('<link rel="stylesheet" href="/src/styles/chatNotification.css">');

  options = $.extend({
    color: undefined,
    name: undefined,
    location: undefined,
    image: undefined,
    timeout: 3000,

  }, options);
    
    //append the notification to the body
    if($('.chatNotificationContainer').length === 0){
    $('body').append('<div class="chatNotificationContainer"></div>');
    }
    

    // chatNotificationContainer

    $('.chatNotificationContainer').append(`<div id='${notiID}' class="chatNotification"></div>`);
    
    if(options.color){
    $('#'+notiID).css('background-color', options.color);
    }

    //create a div with the class chatNotificationPhoto with an image
    if(options.image){
      $('#'+notiID).append(`<div class="chatNotificationPhoto"><img src=${options.image} alt="Avatar"></div>`);
    }
    
    //create a div with the class chatNotificationTextContainer and append it to the chatNotification
    $('#'+notiID).append(`<div class="chatNotificationTextContainer">
    <span class="chatNotificationContainerTitle">${options.name}</span>
    <span class="chatNotificationContainerSubtitle">${options.location}</span>
    </div>`);

    //create a div with the class chatNotificationColorContainer and append it to the chatNotification
    $('#'+notiID).append('<div class="chatNotificationIcon"><i class="fa-regular fa-comment-dots fa-bounce fa-2xl" style="color: #3d0198;"></i></div>');

        //animate modal
        animateIn(notiID);

        //destroy message after timeout
        setTimeout(() => {
            animateOut(notiID);
        }, options.timeout);

};


function animateIn(id){
  const notification = $('#'+id);

  const tl = gsap.timeline();

  tl.fromTo(
    notification,
    {y: 0, x: 350, duration: 1, opacity: 0 },
    {y: 0, x: -200, opacity: 1, duration: 0.9, ease: 'bounce.out' }
  );
};

function animateOut(id){
  const notification = $('#'+id);

  const tl = gsap.timeline();

  // tl.to(
  //   notification,
  //   {y: 0, x: 100, opacity: 0, duration: 1.3, onComplete: () => notification.remove() }
  // );
  tl.to( notification, { duration: 1, x:"+= 200px" } )
		  .to( notification, { duration: 1, opacity: 0, onComplete: () => notification.remove(), onCompleteParams:[id] }, "-=1" )
		  .to( notification, {duration: 0.8, height: "0px", marginTop: "0px", onComplete: () => notification.remove(), onCompleteParams:[id] } );
};