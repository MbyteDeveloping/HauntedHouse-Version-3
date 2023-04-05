import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function animations() {
  var Cont = { val: 0 },
    NewVal = 100

  let tl = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-wrapper',
      start: 'top top',
      end: 'bottom bottom',
      pin: false,
      scrub: 1,
    },
  })

  tl.to(
    Cont,
    {
      duration: 7,
      ease: 'none',
      val: NewVal,
      roundProps: 'val',
      onUpdate: function () {
        document.querySelector('.progress-number').innerHTML = Cont.val + '%'
      },
    },
    0
  )

  gsap.to('.progress-bar', {
    scrollTrigger: {
      trigger: '.section-wrapper',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
    width: '100%',
    duration: 7,
    ease: 'none',
  })

  gsap.to('#content-1', {
    scrollTrigger: {
      trigger: '#section-1',
      start: '100% 80%',
      endtrigger: '#section-1',
      end: '0% 50%',
      toggleActions: 'restart restart reverse reverse',
    },
    opacity: 0,
    zIndex: 0,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#content-2', {
    scrollTrigger: {
      trigger: '#section-2',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  let navDissappear = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-2',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart none none reverse',
    },
  })

  if (window.innerWidth > 992) {
    navDissappear.to('.nav-link', {
      opacity: 0,
      duration: 0.7,
      ease: 'Power2.Out',
    })
  }

  navDissappear
    .to('#nav-button-text', {
      opacity: 0,
      width: 0,
      display: 'none',
      duration: 0.4,
      ease: 'Power1.Out',
    })

    .to('#nav-button', {
      marginLeft: '2.6rem',
      marginRight: '2.6rem',
      duration: 0.4,
      ease: 'Power1.Out',
    })

  gsap.to('#content-3', {
    scrollTrigger: {
      trigger: '#section-3',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#content-4', {
    scrollTrigger: {
      trigger: '#section-4',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#content-5', {
    scrollTrigger: {
      trigger: '#section-5',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#content-6', {
    scrollTrigger: {
      trigger: '#section-6',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#content-7', {
    scrollTrigger: {
      trigger: '#section-7',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart none reverse reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })
}
