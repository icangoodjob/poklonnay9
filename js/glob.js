window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    function eventFire(el, etype){
        if (el.fireEvent) {
          el.fireEvent('on' + etype);
      } else {
          var evObj = document.createEvent('Events');
          evObj.initEvent(etype, true, false);
          el.dispatchEvent(evObj);
      }
  }
  const socialHiddenMin = () => {
    const btnSoc = document.querySelectorAll('.share');
    const social = document.querySelectorAll('.social_min');
    const close = document.querySelectorAll('.cross_min');
    btnSoc.forEach((item, i) => {
        item.addEventListener('click', () => {
            if(social[i].style.display == 'block'){
                social[i].style.display = 'none';
                document.body.style.overflow = "";
            } else {
                social[i].style.display = 'block';
                document.body.style.overflow = "hidden";
            }
        })
    })
    close.forEach((item, i) => {
        item.addEventListener('click', () => {
            social.forEach((item) => {item.style.display = "none";});
            document.body.style.overflow = "";
        });
    }) 
    social.forEach((item) => {item.addEventListener("click", () => {
        social.forEach((item) => {item.style.display = "none";});
        document.body.style.overflow = "";
    });});  
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
                mainDetailsContentHeader.classList.add('animate__backInLeft');
                mainDetailsContentImg.classList.add('animate__backInRight');
                pageDownShare.classList.add('animate__zoomIn');
                pageUpWr.style.display = 'none';
                pageDownWr.style.display = 'block';
                window.scrollBy(0, 1);
            } else if (i == 1){
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
    document.addEventListener('wheel', (e) => {
        if (e.deltaY < 0 && window.scrollY <= 0){
            pageUpWr.style.display = 'block';
            pageDownWr.style.display = 'none';
            mainContentHeader.classList.add('animate__fadeInLeft');
            mainContentDescr.classList.add('animate__zoomIn');
        }
        if (e.deltaY > 0 && window.scrollY <= 0){
            pageUpWr.style.display = 'none';
            pageDownWr.style.display = 'block';
            pageDownWr.classList.add('animate__fadeInUp');
            mainContentHeader.classList.remove('animate__fadeInLeft');
            mainContentDescr.classList.remove('animate__zoomIn');
            document.body.style.overflow = 'hidden';
            setTimeout(function(){
                document.body.style.overflow = 'hidden auto';
            }, 300)
        }
    }) 
}
// function bodyBlock() {
//     const pageBtn = document.querySelectorAll('.about');
//     const pageDownWr = document.querySelector('.maindetailswrapper');
//     if (window.innerWidth <= 1024) {
//         document.body.style.overflow = 'hidden';
//         pageBtn.forEach((item, i) => {
//             item.addEventListener('click', () => {
//                 if(i == 0) {
//                     document.body.style.overflow = 'hidden auto';
//                 } else {
//                     document.body.style.overflow = 'hidden';
//                 } 
//             })
//         })
//         if (pageDownWr.classList.contains('animate__fadeInUp')) {
//             document.body.style.overflow = 'hidden auto';
//         } else {
//             document.body.style.overflow = 'hidden';
//         }
//     }
// }
// bodyBlock();
pageScrollTwo();
socialHiddenMin();
pageHidden();
});