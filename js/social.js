window.addEventListener('DOMContentLoaded', () => {
  'use strict'
  const socialHidden = () => {

    const btn = document.querySelector('.form_social');
    const block = document.querySelector('.social_block');
    const social = document.querySelector('.social');
    const close = document.querySelector('.cross');
    
    btn.addEventListener('click', () => {
      block.classList.add('active');
      block.classList.remove('hidden');
      social.classList.add('active');
      social.classList.remove('hidden');
      document.body.style.overflow = "hidden";
    });
    close.addEventListener('click', () => {
      block.classList.remove('active');
      block.classList.add('hidden');
      social.classList.add('hidden');
      social.classList.remove('active');
      document.body.style.overflow = "";
    });
    social.addEventListener('click', () => {
      social.classList.add('hidden');
      social.classList.remove('active');
      block.classList.add('hidden');
      block.classList.remove('active');
      document.body.style.overflow = "";
    });
  };
  const socialHiddenMin = () => {
    const btnSoc = document.querySelectorAll('.share');
    const social = document.querySelectorAll('.social_min');
    const close = document.querySelectorAll('.cross_min');
    btnSoc.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        if(social[i].style.display == 'block'){
          social[i].style.display = 'none';
        } else {
          social[i].style.display = 'block';
        }
      })
      document.addEventListener('click', function(e){
        social[i].style.display = 'none';
        document.body.style.overflow = '';
      })
    })
    close.forEach((item, i) => {
      item.addEventListener('click', () => {
        social[i].style.display = "none";
      });
    });
  };

  const pageHidden = () => {
    const pageBtn = document.querySelectorAll('.about');
    const pageUp = document.getElementById('up');
    const pageDown = document.getElementById('down');
    const pageUpWr = document.querySelector('.mainwrapper');
    const pageDownWr = document.querySelector('.maindetailswrapper');
    pageBtn.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        if(i == 0){
          pageUp.classList.remove('animate__backInDown');
          pageDown.classList.add('animate__fadeInUp');
          pageUpWr.style.display = 'none';
          pageDownWr.style.display = 'block';
          window.scrollTo(0, 1);
        } else if (i == 1){
          pageUp.classList.add('animate__backInDown');
          pageDown.classList.remove('animate__fadeInUp');
          pageUpWr.style.display = 'block';
          pageDownWr.style.display = 'none';
          window.scrollTo(0, 0);
        }
      })
    })
  }

  const pageHiddenAll = () => {
    const pageBtn = document.querySelectorAll('.about');
    const pageUpWr = document.querySelector('.mainwrapper');
    const pageDownWr = document.querySelector('.maindetailswrapper');
    const pageDownShare = document.querySelector('.share');
    const mainContentHeader = document.querySelector('.main_content_header');
    const mainContentDescr = document.querySelector('.main_content-descr');
    const mainDetailsContentHeader = document.querySelector('.maindetails_content_descr');
    const mainDetailsContentImg = document.querySelector('.maindetails_content_img');
    pageBtn.forEach((item, i) => {
      item.addEventListener('click', () => {
        if(i == 0){
          mainContentHeader.classList.remove('animate__backInLeft');
          mainContentDescr.classList.remove('animate__backInRight');
          pageDownShare.classList.add('animate__zoomIn');
          pageUpWr.style.display = 'none';
          pageDownWr.style.display = 'block';
          window.scrollBy(0, 1);
        } else if (i == 1){
          mainContentHeader.classList.add('animate__backInLeft');
          mainContentDescr.classList.add('animate__backInRight');
          mainDetailsContentHeader.classList.remove('animate__backInLeft');
          mainDetailsContentImg.classList.remove('animate__backInRight');
          pageDownWr.style.display = 'none';
          pageUpWr.style.display = 'block';
        }
      })
    })
  }
  const pageScrollTwo = () => {
    const sectionUp = document.getElementById('up');
    const sectionDown = document.getElementById('down');
    const pageUpWr = document.querySelector('.mainwrapper');
    const pageDownWr = document.querySelector('.maindetailswrapper');
    const pageDownShare = document.querySelector('.share');
    const mainDetails = document.querySelector('.maindetail');
    const mainContentHeader = document.querySelector('.main_content_header');
    const mainContentDescr = document.querySelector('.main_content-descr');
    const mainDetailsContentHeader = document.querySelector('.maindetails_content_descr');
    const mainDetailsContentImg = document.querySelector('.maindetails_content_img');

    // let bC = document.querySelector('.beauty-content');
    // let bCposition = window.bC.scrollHeight;
    // console.log(bCposition);
    document.addEventListener('wheel', (e) => {
      if (e.deltaY < 0 && window.scrollY <= 0){
        pageUpWr.style.display = 'block';
        pageDownWr.style.display = 'none';
      }
      if (e.deltaY > 0 && window.scrollY <= 0){
        pageUpWr.style.display = 'none';
        pageDownWr.style.display = 'block';
        pageDownWr.classList.add('animate__fadeInUp');
        document.body.style.overflow = 'hidden';
        setTimeout(function(){
          document.body.style.overflow = 'hidden auto';
        }, 300)
      }
    }) 
  }
  // function bodyBlock() {
  //   const pageBtn = document.querySelectorAll('.about');
  //   const pageDownWr = document.querySelector('.maindetailswrapper');
  //   if (window.innerWidth <= 1024) {
  //     document.body.style.overflow = 'hidden';
  //     pageBtn.forEach((item, i) => {
  //       item.addEventListener('click', () => {
  //         if(i == 0) {
  //           document.body.style.overflow = 'hidden auto';
  //         } else {
  //           document.body.style.overflow = 'hidden';
  //         } 
  //       })
  //     })
  //     if (pageDownWr.classList.contains('animate__fadeInUp')) {
  //       document.body.style.overflow = 'hidden auto';
  //     } else {
  //       document.body.style.overflow = 'hidden';
  //     }
  //   }
  // }
  // bodyBlock();
  pageScrollTwo();
  socialHiddenMin();
  pageHidden();
  socialHidden();
});
