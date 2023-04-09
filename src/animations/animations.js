import gsap, { Bounce, Elastic } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

export class Animations {
  $component;
  constructor(component) {
    //component must be passed and check that component is jQuery object
    if (!component) {
      throw new Error('Component is not defined');
    }
    if (!(component instanceof jQuery)) {
      throw new Error('Component is not jQuery object');
    }
    this.$component = component;
  }

  move(direction) {
    //clear all previous animations
    this.$component.clearQueue();
    switch (direction) {
      case 'up':
      case 38:
        this.$component.animate(
          {
            top: '-=50px',
          },
          200
        );

        break;
      case 'down':
      case 40:
        this.$component.animate(
          {
            top: '+=50px',
          },
          200
        );
        break;
      case 'left':
      case 37:
        this.$component.animate(
          {
            left: '-=50px',
          },
          200
        );
        break;
      case 'right':
      case 39:
        this.$component.animate(
          {
            left: '+=50px',
          },
          200
        );
        break;
      case 'reset':
      case 46:
        this.$component.animate(
          {
            left: '0px',
            top: '0px',
            width: '50px',
            height: '50px',
          },
          1000
        );

      default:
        break;
    }
  }
  sizeAnimation() {
    this.$component
      .animate(
        {
          width: '+=100px',
          height: '+=100px',
        },
        200
      )
      .animate(
        {
          width: '-=100px',
          height: '-=100px',
        },
        200
      )
      .animate(
        {
          opacity: 0.1,
        },
        1500,
        function () {
          this.remove();
        }
      );
  }
  size() {
    this.$component.animate(
      {
        width: '+=100px',
        height: '+=100px',
      },
      200
    );
  }
}

export class AnimationsGS {
  $component;

  constructor(component) {
    //component must be passed and check that component is jQuery object
    if (!component) {
      throw new Error('Component is not defined');
    }
    if (!(component instanceof jQuery)) {
      throw new Error('Component is not jQuery object');
    }
    this.$component = component;
  }

  move(direction) {
    switch (direction) {
      case 'up':
      case 38:
        gsap.to(this.$component, {
          duration: 0.2,
          y: '-=50px',
        });

        break;
      case 'down':
      case 40:
        gsap.to(this.$component, {
          duration: 0.2,
          y: '+=50px',
        });
        break;
      case 'left':
      case 37:
        gsap.to(this.$component, {
          duration: 0.2,
          x: '-=50px',
        });
        break;
      case 'right':
      case 39:
        gsap.to(this.$component, {
          duration: 0.2,
          x: '+=50px',
        });
        break;
      case 'reset':
      case 46:
        gsap.to(this.$component, {
          duration: 1,
          x: '0px',
          y: '0px',
          width: '50px',
          height: '50px',
        });
      default:
        break;
    }
  }
  sizeAnimation() {
    //register plugin adn create timeline

    gsap
      .timeline()
      .to(this.$component, {
        duration: 0.2,
        width: '+=100px',
        height: '+=100px',
      })
      .to(this, {
        // red in hex
        backgroundColor: 'red',
      });
  }
}

export class SlideShow {
  $component;
  $points;
  current;
  width;
  length;
  interval = setInterval(() => {
    this.moveGsap('next');
  }, 1500);

  constructor(component, current = 0, width = 600) {
    //component must be passed and check that component is jQuery object
    if (!component) {
      throw new Error('Component is not defined');
    }
    if (!(component instanceof jQuery)) {
      throw new Error('Component is not jQuery object');
    }
    this.$component = component;
    this.$points = $('.slideShowButtons')
    this.current = current;
    this.width = width;
    this.length = this.$component.children().length;

    //color first point to purple if found
    this.$points.children().eq(0).css('background-color', '#58167d');

  }

  move(direction, click = false) {
    if (click) clearInterval(this.interval);

    direction === 'next' ? this.current-- : this.current++;

    if (this.current > 0) {
      this.current = -(this.length - 1);
    } else if (this.current <= -this.length) {
      this.current = 0;
    }

    let margin = this.current * this.width;

    this.$component.animate(
      {
        marginLeft: margin,
      },
      400
    );
  }

  moveGsap(direction, click = false) {

    direction === 'next' ? this.current-- : this.current++;

    if (this.current > 0) {
      this.current = -(this.length - 1);
    } else if (this.current <= -this.length) {
      this.current = 0;
    }

    this.moveByPoint(this.current, click);
    // this.$component.animate({
    //     marginLeft: margin,
    // }, 400);
  }
  moveByPoint(current, click){
    if (click) clearInterval(this.interval);

    let margin = current * this.width;

    let $currentPoint = this.$points.children().eq(-current);
    let $restPoints = this.$points.children().not($currentPoint);

    let tl = gsap.timeline();

    tl.to(this.$component, {
        duration: 1.2,
        marginLeft: margin,
        ease: Elastic.easeOut.config(1, 0.75),
      }).to($currentPoint, {
        duration: 0.5,
        backgroundColor: '#58167d',
      }, '-=1.2').to($restPoints, {
        duration: 0.5,
        backgroundColor: '#ccc',
      }, '-=1.2');

  }
}
