/**
* Template Name: Selecao
* Updated: Jan 29 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * To collapse the cases and drive lists
   */
  setTimeout(() => {
    const collapsibleItems = document.querySelectorAll('.faq-list > li');
    collapsibleItems.forEach(item => {
      item.addEventListener('click', () => {
        // Close all items except the one clicked
        collapsibleItems.forEach(otherItem => {
          if (otherItem !== item) {
            const collapseTarget = otherItem.querySelector('[data-bs-toggle="collapse"]');
            const collapseContent = otherItem.querySelector('.collapse');
            if (collapseTarget && collapseContent) {
              collapseTarget.classList.add('collapsed');
              collapseContent.classList.remove('show');
            }
          }
        });
      });
    });
  }, 1000); 

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with offset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * JavaScript to handle smooth scrolling without changing the URL
   */
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scrollto');

    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('#header').offsetHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  });

  /**
   * cta and index href handler
   */
  document.addEventListener('DOMContentLoaded', function() {
    var logoHeaderBtn = document.getElementById('logo-header-btn');
    var logoAnchorBtn = document.getElementById('logo-anchor-btn');
    var footerBtn = document.getElementById('footer-btn');
    var ctaBtn = document.getElementById('cta-btn');

    const localPolicyLink = "../assets/document/Helping-Hand-Policy.html";
    const localDirectiveLink = "../assets/document/Helping-Hand-Logo-Directives.html";

    // For github pages deployement
    // const prodPolicyLink = "/helping-hand/assets/document/Helping-Hand-Policy.html";
    // const prodDirectiveLink = "/helping-hand/assets/document/Helping-Hand-Logo-Directives.html";

    // For vercel deployment
    const prodPolicyLink = "/assets/document/Helping-Hand-Policy.html";
    const prodDirectiveLink = "/assets/document/Helping-Hand-Logo-Directives.html";


    var isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (isLocalhost) {
      ctaBtn.href = localPolicyLink;
      logoHeaderBtn.href = localDirectiveLink;
      logoAnchorBtn.href = localDirectiveLink;
      footerBtn.href = localDirectiveLink;
    } else {
      ctaBtn.href = prodPolicyLink;
      logoHeaderBtn.href = prodDirectiveLink;
      logoAnchorBtn.href = prodDirectiveLink;
      footerBtn.href = prodDirectiveLink;
    }
  });

  /**
   * Portfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Portolio activity flipper
   */
  document.addEventListener('DOMContentLoaded', function() {
    const detailLinks = document.querySelectorAll('.details-link');
    const backLinks = document.querySelectorAll('.back-link');
  
    detailLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.portfolio-card');
        card.style.transform = 'rotateY(180deg)';
      });
    });
  
    backLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.portfolio-card');
        card.style.transform = 'rotateY(0deg)';
      });
    });
  });

  /**
   * Testimonials slider
   */
  setTimeout(() => {
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  }, 1000);

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
