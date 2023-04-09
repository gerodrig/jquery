import gsap from 'gsap';

export const notification = (options, callback) => {
  //append scripts to the head
  $('head').append(
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
  );

  options = $.extend({
    fa: 'fa-regular fa-thumbs-up',
    title: undefined,
    text: undefined,
    button: 'Accept'
  }, options)

  //check that title and text are defined
if(!options.title){
throw new Error('Title is not defined');
}

if(!options.text){
throw new Error('Text is not defined');
}

  $('body').append('<div class="bigBoxModal"></div>');

  const $modal = $('.bigBoxModal');

  //create the background
  $modal.before('<div class="bigBoxBackground"></div>');

  // bring the modal to the front
  $modal
    .css({
      zIndex: 9999999,
      display: 'block',
    })
    .attr('align', 'center');

  //add close button
  $modal.append('<div class="closeModal"><i class="fa fa-times"></i></div>');
  //add modal icon
  $modal.append(
    `<div class="bigBoxIcon"><i class='${options.fa} fa-2xl'></i></div>`
  );

  //create modal content
  $modal.append('<div class="modalContent"></div>');
  $('.modalContent').append(
    `<span class="modalTitle">${options.title}</span><span class="modalText">${options.text}</span>`
  );

  //create button
  $modal.append(`<button class="modalButton">${options.button}</button>`);

    //animate modal
    animateIn();

  //close modal
  $('.closeModal').click(function () {
    animateOut();

    if(typeof callback === 'function'){
        callback('closeModal');
    }
  });

  //click main button
  $('.modalButton').click(function () {
    animateOut();

    if(typeof callback === 'function'){
        callback('main button');
    }
  });
};

function animateIn() {
  //animate modal so it appears with elastic effect
  let $background = $('.bigBoxBackground');
  let $modal = $('.bigBoxModal');

  const tl = gsap.timeline();
    tl.to($background, {
    duration: 0.2,
    opacity: 0.3,
    })
    .fromTo(
    $modal,
    {
      duration: 0.2,
      scale: 0.8,
      opacity: 0,
      y: -50,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
      y: 0,
    }
  );
}

function animateOut(){
    //animate modal so it disappears with elastic effect
    let $background = $('.bigBoxBackground');
    let $modal = $('.bigBoxModal');

    
    const tl = gsap.timeline();
        tl.to($modal, {
        duration: 0.3,
        opacity: 0,
        y: -0.3,
        onComplete: () => $modal.remove()
        })
        .to($background, {
        duration: 0.3,
        opacity: 0,
        onComplete: () => $background.remove()
        })
}

