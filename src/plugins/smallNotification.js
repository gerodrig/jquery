import gsap from "gsap";

export const smallNotification = (options) => {
  options = $.extend(
    {
      title: undefined,
      subtitle: undefined,
      content: undefined,
      fa: 'fa-solid fa-bell fa-shake fa-xl',
      img: '/public/images/smallNotification/chinchilla.jpeg',
      timeout: 2000,
    },
    options
  );
  //append scripts to the head
  $('head').append(
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
  );

  $('head').append('<link rel="stylesheet" href="/public/styles/smallNotification.css">');

  //append the notification to the body
  $('body').append('<div class="smallNotification"></div>');

  //create a div with the class smallContainer with an image
  $('.smallNotification').append(
    `<div class="smallNotificationPhoto"><img src=${options.img} alt="Avatar"></div>`
  );

  //create a div with the class smallNotificationTextContainer and append it to the smallNotification
  $('.smallNotification').append(`<div class="smallNotificationTextContainer">
    <span class="smallNotificationContainerTitle">${options.title}</span>
    <span class="smallNotificationContainerSubtitle">${options.subtitle}</span>
    </div>`);

  //create a div with the class smallNotificationcolorContainer and append it to the smallNotification
  $('.smallNotification').append(
    '<div class="smallNotificationColorContainer"></div>'
  );

  //create a div with the class smallNotificationColorText and append it to the smallNotificationColorContainer
  $('.smallNotificationColorContainer').append(
    '<div class="smallNotificationColorText"><i class="fa-solid fa-music fa-beat" style="color: #7505a8;"></i><span>Mimi Martinez 93.1fm</span></div>'
  );

  //create a div with the class smallNotificationColor Icon and append it to the smallNotificationColorContainer
  $('.smallNotificationColorContainer').append(
    `<div class="smallNotificationColorIcon"><i class="${options.fa} fa-xl" style="color: #fcf5ff;"></i></div>`
  );

  //create a div with the class smallNotification shadow and append it to the smallNotificationColorContainer
  $('.smallNotificationColorContainer').after(
    '<div class="smallNotificationShadow"></div>'
  );

  //create the chatbox effect
  $('.smallNotificationColorContainer').before(
    '<div class="smallNotificationChat"></div>'
  );

    //animate modal
    animateIn();

    //destroy message after timeout
    setTimeout(() => {
        animateOut();
    }, options.timeout);
};

function animateIn() {
  const notfication = $('.smallNotification');

  const tl = gsap.timeline();

  tl.fromTo(
    notfication,
    {y: 0, x: 350, duration: 1, opacity: 0 },
    {y: 0, x: -200, opacity: 1, duration: 0.9, ease: 'bounce.out' }
  );
}


function animateOut() {
  const notfication = $('.smallNotification');

  const tl = gsap.timeline();

  tl.to(
    notfication,
    {y: 0, x: 100, opacity: 0, duration: 1.3, onComplete: () => notfication.remove() }
  );

  
}