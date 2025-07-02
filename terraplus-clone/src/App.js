import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'; // Keep this for global styles if any, or remove if all moved to public/css
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Header scroll effect
    const header = document.querySelector('header');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        header.classList.add('compact');
      } else {
        header.classList.remove('compact');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Hamburger menu functionality
    const hamburgerBtn = document.querySelector('.hamburger_btn');
    const nav = document.querySelector('.nav');
    const buttonsWrap = document.querySelector('.buttons_wrap');

    const handleHamburgerClick = () => {
      nav.classList.toggle('active');
      if (nav.classList.contains('active')) {
        setTimeout(() => {
          buttonsWrap.style.opacity = '1';
        }, 400);
      } else {
        buttonsWrap.style.opacity = '0';
      }
    };

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', handleHamburgerClick);
    }

    // Animated Form (from script.js)
    const inputs = document.querySelectorAll('.input_animation');
    inputs.forEach(input => {
      const updateInputClass = () => {
        if (input.value.trim() !== '') {
          input.classList.add('has_content');
        } else {
          input.classList.remove('has_content');
        }
      };
      input.addEventListener('input', updateInputClass);
      input.addEventListener('blur', updateInputClass);
      updateInputClass(); // Initial check
    });

    // GSAP Animations (from source.html inline script)
    /* Section 1 */
    const section1 = document.querySelector('.section_1');
    if (section1) {
      const card = section1.querySelector('.card');
      const titleWrap = card ? card.querySelector('.title_wrap') : null;
      const h5 = titleWrap ? titleWrap.querySelector('h5') : null;
      const p = titleWrap ? titleWrap.querySelector('p') : null;
      const imageWrap = card ? card.querySelector('.image_wrap img') : null;
      const scrollDown = card ? card.querySelector('#scroll_down') : null;

      gsap.set([section1, card, h5, p, imageWrap, scrollDown], { opacity: 0 });

      gsap.to([section1, card, h5, p, imageWrap, scrollDown], {
        scrollTrigger: {
          trigger: ".section_1",
          start: "top 60%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        duration: 1,
        delay: 0.1,
        onStart: () => {
          if (h5) {
            h5.classList.add('animate__animated', 'animate__fadeInDown');
            h5.style.setProperty('--animate-duration', '1s');
            h5.style.setProperty('--animate-delay', '0.2s');
          }
          if (p) {
            p.classList.add('animate__animated', 'animate__fadeInUp');
            p.style.setProperty('--animate-duration', '1s');
            p.style.setProperty('--animate-delay', '0.4s');
          }
          if (imageWrap) {
            imageWrap.classList.add('animate__animated', 'animate__zoomIn');
            imageWrap.style.setProperty('--animate-duration', '1s');
            imageWrap.style.setProperty('--animate-delay', '0.6s');
          }
          if (scrollDown) {
            scrollDown.classList.add('animate__animated', 'animate__fadeInUp');
            scrollDown.style.setProperty('--animate-duration', '1s');
            scrollDown.style.setProperty('--animate-delay', '0.8s');
          }
        },
        onReverseComplete: () => {
          if (h5) h5.classList.remove('animate__animated', 'animate__fadeInDown');
          if (p) p.classList.remove('animate__animated', 'animate__fadeInUp');
          if (imageWrap) imageWrap.classList.remove('animate__animated', 'animate__zoomIn');
          if (scrollDown) scrollDown.classList.remove('animate__animated', 'animate__fadeInUp');
        }
      });
    }

    /* Section 2 */
    const section2 = document.querySelector('.section_2');
    if (section2) {
      const heading = section2.querySelector('h2');
      const card1 = section2.querySelector('.card_1');
      const card2 = section2.querySelector('.card_2');
      const card3 = section2.querySelector('.card_3');

      gsap.set([section2, heading, card1, card2, card3], { opacity: 0 });
      gsap.to(section2, {
        scrollTrigger: {
          trigger: ".section_2",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        onStart: () => {
          if (heading) {
            heading.classList.add('animate__animated', 'animate__fadeInDown');
            heading.style.setProperty('--animate-duration', '1s');
            heading.style.setProperty('--animate-delay', '0.2s');
          }
          if (card1) {
            card1.classList.add('animate__animated', 'animate__fadeInLeft');
            card1.style.setProperty('--animate-duration', '1s');
            card1.style.setProperty('--animate-delay', '0.4s');
          }
          if (card2) {
            card2.classList.add('animate__animated', 'animate__fadeInLeft');
            card2.style.setProperty('--animate-duration', '1s');
            card2.style.setProperty('--animate-delay', '0.6s');
          }
          if (card3) {
            card3.classList.add('animate__animated', 'animate__fadeInRight');
            card3.style.setProperty('--animate-duration', '1s');
            card3.style.setProperty('--animate-delay', '0.4s');
          }
        },
        onReverseComplete: () => {
          if (heading) {
            heading.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (card1) {
            card1.classList.remove('animate__animated', 'animate__fadeInLeft');
          }
          if (card2) {
            card2.classList.remove('animate__animated', 'animate__fadeInLeft');
          }
          if (card3) {
            card3.classList.remove('animate__animated', 'animate__fadeInRight');
          }
        }
      });
    }

    /* Section 3 */
    const section3 = document.querySelector('.section_3');
    if (section3) {
      const heading = section3.querySelector('h2');
      const cards = section3.querySelectorAll('.card_wrap .card');

      gsap.set([section3, heading, ...cards], { opacity: 0 });

      gsap.to(section3, {
        scrollTrigger: {
          trigger: ".section_3",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        onStart: () => {
          if (heading) {
            heading.classList.add('animate__animated', 'animate__fadeInDown');
            heading.style.setProperty('--animate-duration', '1s');
            heading.style.setProperty('--animate-delay', '0.2s');
          }
          cards.forEach((card, index) => {
            card.classList.add('animate__animated', 'animate__fadeInUp');
            card.style.setProperty('--animate-duration', '1s');
            card.style.setProperty('--animate-delay', `${0.4 + index * 0.1}s`);

            const img = card.querySelector('img');
            if (img) {
              img.classList.add('animate__animated', 'animate__zoomIn');
              img.style.setProperty('--animate-duration', '0.8s');
              img.style.setProperty('--animate-delay', `${0.5 + index * 0.1}s`);
            }

            const label = card.querySelector('.card_label span');
            if (label) {
              label.classList.add('animate__animated', 'animate__fadeInUp');
              label.style.setProperty('--animate-duration', '1s');
              label.style.setProperty('--animate-delay', `${0.6 + index * 0.1}s`);
            }
          });
        },
        onReverseComplete: () => {
          if (heading) {
            heading.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          cards.forEach((card) => {
            card.classList.remove('animate__animated', 'animate__fadeInUp');
            const img = card.querySelector('img');
            const label = card.querySelector('.card_label span');
            if (img) {
              img.classList.remove('animate__animated', 'animate__zoomIn');
            }
            if (label) {
              label.classList.remove('animate__animated', 'animate__fadeInUp');
            }
          });
        }
      });
    }

    /* Section 4 */
    const section4 = document.querySelector('.section_4');
    if (section4) {
      const card = section4.querySelector('.card');
      const heading = section4.querySelector('h2');
      const subheading = section4.querySelector('h5');
      const paragraph = section4.querySelector('p');
      const button = section4.querySelector('.more_details_btn');

      gsap.set([section4, heading, subheading, paragraph, button], { opacity: 0 });

      gsap.to(section4, {
        scrollTrigger: {
          trigger: ".section_4",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        onStart: () => {
          if (heading) {
            heading.classList.add('animate__animated', 'animate__fadeInDown');
            heading.style.setProperty('--animate-duration', '1s');
            heading.style.setProperty('--animate-delay', '0.2s');
          }
          if (subheading) {
            subheading.classList.add('animate__animated', 'animate__fadeInUp');
            subheading.style.setProperty('--animate-duration', '1s');
            subheading.style.setProperty('--animate-delay', '0.4s');
          }
          if (paragraph) {
            paragraph.classList.add('animate__animated', 'animate__fadeInUp');
            paragraph.style.setProperty('--animate-duration', '1s');
            paragraph.style.setProperty('--animate-delay', '0.6s');
          }
          if (button) {
            button.classList.add('animate__animated', 'animate__pulse');
            button.style.setProperty('--animate-duration', '1.2s');
            button.style.setProperty('--animate-delay', '0.8s');
          }
        },
        onReverseComplete: () => {
          if (heading) {
            heading.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (subheading) {
            subheading.classList.remove('animate__animated', 'animate__fadeInUp');
          }
          if (paragraph) {
            paragraph.classList.remove('animate__animated', 'animate__fadeInUp');
          }
          if (button) {
            button.classList.remove('animate__animated', 'animate__pulse');
          }
        }
      });
    }

    /* Section 5 */
    const section5 = document.querySelector('.section_5');
    if (section5) {
      const card1 = section5.querySelector('.card_1');
      const card2 = section5.querySelector('.card_2');
      const svg1 = card1 ? card1.querySelector('svg') : null;
      const svg2 = card2 ? card2.querySelector('svg') : null;
      const h5_1 = card1 ? card1.querySelector('h5') : null;
      const h5_2 = card2 ? card2.querySelector('h5') : null;
      const h6_1 = card1 ? card1.querySelector('h6') : null;
      const h6_2 = card2 ? card2.querySelector('h6') : null;
      const p1 = card1 ? card1.querySelector('p') : null;
      const p2 = card2 ? card2.querySelector('p') : null;
      const btn1 = card1 ? card1.querySelector('.read_more_btn') : null;
      const btn2 = card2 ? card2.querySelector('.read_more_btn') : null;

      gsap.set([section5, svg1, svg2, h5_1, h5_2, h6_1, h6_2, p1, p2, btn1, btn2], { opacity: 0 });

      gsap.to([section5, svg1, svg2, h5_1, h5_2, h6_1, h6_2, p1, p2, btn1, btn2], {
        scrollTrigger: {
          trigger: ".section_5",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        onStart: () => {
          if (svg1) {
            svg1.classList.add('animate__animated', 'animate__zoomIn');
            svg1.style.setProperty('--animate-duration', '0.8s');
            svg1.style.setProperty('--animate-delay', '0.2s');
          }
          if (h5_1) {
            h5_1.classList.add('animate__animated', 'animate__fadeInDown');
            h5_1.style.setProperty('--animate-duration', '1s');
            h5_1.style.setProperty('--animate-delay', '0.4s');
          }
          if (h6_1) {
            h6_1.classList.add('animate__animated', 'animate__fadeInDown');
            h6_1.style.setProperty('--animate-duration', '1s');
            h6_1.style.setProperty('--animate-delay', '0.6s');
          }
          if (p1) {
            p1.classList.add('animate__animated', 'animate__fadeInUp');
            p1.style.setProperty('--animate-duration', '1s');
            p1.style.setProperty('--animate-delay', '0.8s');
          }
          if (btn1) {
            btn1.classList.add('animate__animated', 'animate__pulse');
            btn1.style.setProperty('--animate-duration', '1.2s');
            btn1.style.setProperty('--animate-delay', '1s');
          }
          if (svg2) {
            svg2.classList.add('animate__animated', 'animate__zoomIn');
            svg2.style.setProperty('--animate-duration', '0.8s');
            svg2.style.setProperty('--animate-delay', '0.3s');
          }
          if (h5_2) {
            h5_2.classList.add('animate__animated', 'animate__fadeInDown');
            h5_2.style.setProperty('--animate-duration', '1s');
            h5_2.style.setProperty('--animate-delay', '0.5s');
          }
          if (h6_2) {
            h6_2.classList.add('animate__animated', 'animate__fadeInDown');
            h6_2.style.setProperty('--animate-duration', '1s');
            h6_2.style.setProperty('--animate-delay', '0.7s');
          }
          if (p2) {
            p2.classList.add('animate__animated', 'animate__fadeInUp');
            p2.style.setProperty('--animate-duration', '1s');
            p2.style.setProperty('--animate-delay', '0.9s');
          }
          if (btn2) {
            btn2.classList.add('animate__animated', 'animate__pulse');
            btn2.style.setProperty('--animate-duration', '1.2s');
            btn2.style.setProperty('--animate-delay', '1.1s');
          }
        },
        onReverseComplete: () => {
          if (svg1) {
            svg1.classList.remove('animate__animated', 'animate__zoomIn');
          }
          if (h5_1) {
            h5_1.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (h6_1) {
            h6_1.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (p1) {
            p1.classList.remove('animate__animated', 'animate__fadeInUp');
          }
          if (btn1) {
            btn1.classList.remove('animate__animated', 'animate__pulse');
          }
          if (svg2) {
            svg2.classList.remove('animate__animated', 'animate__zoomIn');
          }
          if (h5_2) {
            h5_2.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (h6_2) {
            h6_2.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (p2) {
            p2.classList.remove('animate__animated', 'animate__fadeInUp');
          }
          if (btn2) {
            btn2.classList.remove('animate__animated', 'animate__pulse');
          }
        }
      });
    }

    /* Section 6 */
    const section6 = document.querySelector('.section_6');
    if (section6) {
      const leftWrap = section6.querySelector('.left_wrap');
      const rightWrap = section6.querySelector('.right_wrap');
      const heading = leftWrap ? leftWrap.querySelector('h2') : null;
      const leftP = leftWrap ? leftWrap.querySelector('p') : null;
      const leftBtn = leftWrap ? leftWrap.querySelector('.pill_btn_darkgreen') : null;
      const textContents = rightWrap ? rightWrap.querySelectorAll('.text_content') : [];

      const allElements = [section6, heading, leftP, leftBtn];
      textContents.forEach(content => {
        const date = content.querySelector('.date');
        const category = content.querySelector('.category');
        const p = content.querySelector('p');
        const btn = content.querySelector('.pill_btn_darkgreen');
        if (date) allElements.push(date);
        if (category) allElements.push(category);
        if (p) allElements.push(p);
        if (btn) allElements.push(btn);
      });

      gsap.set(allElements, { opacity: 0 });

      gsap.to(allElements, {
        scrollTrigger: {
          trigger: ".section_6",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        onStart: () => {
          if (heading) {
            heading.classList.add('animate__animated', 'animate__fadeInDown');
            heading.style.setProperty('--animate-duration', '1s');
            heading.style.setProperty('--animate-delay', '0.2s');
          }
          if (leftP) {
            leftP.classList.add('animate__animated', 'animate__fadeInUp');
            leftP.style.setProperty('--animate-duration', '1s');
            leftP.style.setProperty('--animate-delay', '0.4s');
          }
          if (leftBtn) {
            leftBtn.classList.add('animate__animated', 'animate__pulse');
            leftBtn.style.setProperty('--animate-duration', '1.2s');
            leftBtn.style.setProperty('--animate-delay', '0.6s');
          }
          textContents.forEach((content, index) => {
            const date = content.querySelector('.date');
            const category = content.querySelector('.category');
            const p = content.querySelector('p');
            const btn = content.querySelector('.pill_btn_darkgreen');
            const baseDelay = 0.4 + index * 0.3;
            if (date) {
              date.classList.add('animate__animated', 'animate__fadeInDown');
              date.style.setProperty('--animate-duration', '1s');
              date.style.setProperty('--animate-delay', `${baseDelay}s`);
            }
            if (category) {
              category.classList.add('animate__animated', 'animate__fadeInDown');
              category.style.setProperty('--animate-duration', '1s');
              category.style.setProperty('--animate-delay', `${baseDelay + 0.1}s`);
            }
            if (p) {
              p.classList.add('animate__animated', 'animate__fadeInUp');
              p.style.setProperty('--animate-duration', '1s');
              p.style.setProperty('--animate-delay', `${baseDelay + 0.2}s`);
            }
            if (btn) {
              btn.classList.add('animate__animated', 'animate__pulse');
              btn.style.setProperty('--animate-duration', '1.2s');
              btn.style.setProperty('--animate-delay', `${baseDelay + 0.3}s`);
            }
          });
        },
        onReverseComplete: () => {
          if (heading) {
            heading.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (leftP) {
            leftP.classList.remove('animate__animated', 'animate__fadeInUp');
          }
          if (leftBtn) {
            leftBtn.classList.remove('animate__animated', 'animate__pulse');
          }
          textContents.forEach((content) => {
            const date = content.querySelector('.date');
            const category = content.querySelector('.category');
            const p = content.querySelector('p');
            const btn = content.querySelector('.pill_btn_darkgreen');
            if (date) {
              date.classList.remove('animate__animated', 'animate__fadeInDown');
            }
            if (category) {
              category.classList.remove('animate__animated', 'animate__fadeInDown');
            }
            if (p) {
              p.classList.remove('animate__animated', 'animate__fadeInUp');
            }
            if (btn) {
              btn.classList.remove('animate__animated', 'animate__pulse');
            }
          });
        }
      });
    }

    /* Section 7 */
    const section7 = document.querySelector('.section_7');
    if (section7) {
      const leftWrap = section7.querySelector('.left_wrap');
      const rightWrap = section7.querySelector('.right_wrap');
      const heading = leftWrap ? leftWrap.querySelector('h2') : null;
      const textContent = leftWrap ? leftWrap.querySelector('.text_content') : null;
      const btn = leftWrap ? leftWrap.querySelector('.pill_iconic_btn_darkgreen') : null;
      const img = rightWrap ? rightWrap.querySelector('img') : null;

      gsap.set([section7, heading, textContent, btn, img], { opacity: 0 });

      gsap.to([section7, heading, textContent, btn, img], {
        scrollTrigger: {
          trigger: ".section_7",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 1,
        onStart: () => {
          if (heading) {
            heading.classList.add('animate__animated', 'animate__fadeInDown');
            heading.style.setProperty('--animate-duration', '1s');
            heading.style.setProperty('--animate-delay', '0.2s');
          }
          if (textContent) {
            textContent.classList.add('animate__animated', 'animate__fadeInUp');
            textContent.style.setProperty('--animate-duration', '1s');
            textContent.style.setProperty('--animate-delay', '0.4s');
          }
          if (btn) {
            btn.classList.add('animate__animated', 'animate__pulse');
            btn.style.setProperty('--animate-duration', '1.2s');
            btn.style.setProperty('--animate-delay', '0.6s');
          }
          if (img) {
            img.classList.add('animate__animated', 'animate__zoomIn');
            img.style.setProperty('--animate-duration', '1s');
            img.style.setProperty('--animate-delay', '0.8s');
          }
        },
        onReverseComplete: () => {
          if (heading) {
            heading.classList.remove('animate__animated', 'animate__fadeInDown');
          }
          if (textContent) {
            textContent.classList.remove('animate__animated', 'animate__fadeInUp');
          }
          if (btn) {
            btn.classList.remove('animate__animated', 'animate__pulse');
          }
          if (img) {
            img.classList.remove('animate__animated', 'animate__zoomIn');
          }
        }
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hamburgerBtn) {
        hamburgerBtn.removeEventListener('click', handleHamburgerClick);
      }
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
