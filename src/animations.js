import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { ScrollSmoother } from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollSmoother)

export default function Animations() {
  let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
  })
}
