//import socialHidden from "./modules/socialHidden.js";

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

    const pageHidden = () => {
        const pageBtn = document.querySelectorAll('.about');
        const pageUp = document.querySelector('.main');
        const pageDown = document.querySelector('.maindetails');
        const pageUpWr = document.querySelector('.mainwrapper');
        const pageDownWr = document.querySelector('.maindetailswrapper');
        //const headerMain = document.getElementById('headermain');
        //const mainContent = document.querySelector('.main_content-descr');
        //const mainContentHeader = document.querySelector('.maindetails_content_descr');
        //const mainDetailsContentDescr = document.querySelector('.main_content_header');
        //const mainDetailsContent = document.querySelector('.main_content_header');

        //headermain h1
        //main_content-descr - descr
        //main_content_header - header

        //maindetails_content_descr
        //maindetails_content_img

        pageBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(i == 0){
                    pageUp.classList.add('animate__backOutLeft');
                    pageDown.classList.add('animate__backInUp');
                    pageUp.classList.remove('animate__backInDown');
                    pageDown.classList.remove('animate__backOutLeft');
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';

                    

                    //headerMain.classList.remove('animate__backOutLeft');
                    //mainContent.classList.remove('animate__backInLeft');
                    //mainContentHeader.classList.remove('animate__backInUp');
                    //mainDetailsContentDescr.classList.add('animate__backInUp');
                    //mainDetailsContent.classList.add('animate__backInUp');
                } else if (i == 1){
                    pageUp.classList.remove('animate__backOutLeft');
                    pageDown.classList.remove('animate__backInUp');
                    pageUp.classList.add('animate__backInDown');
                    pageDown.classList.add('animate__backOutLeft');
                    pageDownWr.style.display = 'none';
                    pageUpWr.style.display = 'block';

                    //headerMain.classList.add('animate__backOutLeft');
                    //mainContent.classList.add('animate__backInLeft');
                    //mainContentHeader.classList.add('animate__backInUp');
                    //mainDetailsContentDescr.classList.remove('animate__backInUp');
                    //mainDetailsContent.classList.remove('animate__backInUp');

                }
            })
        })



    }
    const pageHiddenAll = () => {
        const pageBtn = document.querySelectorAll('.about');
        const pageUp = document.querySelector('.beauty');
        const pageDown = document.querySelector('.beautydetails');
        const pageUpWr = document.querySelector('.mainwrapper');
        const pageDownWr = document.querySelector('.maindetailswrapper');
        const pageUpimgMax = document.querySelector('.beauty_content-img');
        const pageUpimgMin = document.querySelector('.beauty_content-img-imgsmall');
        const pageUpDescr = document.querySelector('.beauty_content-descr');
        const pageDownContentDescr = document.querySelector('.beautydetails_content_descr');
        const pageDownContentImg = document.querySelector('.beautydetails_content_img');
        const pageDownShare = document.querySelector('.share');

        pageBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(i == 0){
                    pageUpimgMax.classList.add('animate__slideInUp');
                    pageUpimgMin.classList.add('animate__zoomIn');
                    pageUpDescr.classList.add('animate__fadeInLeft');
                    pageDownContentDescr.classList.add('animate__fadeInLeft');
                    pageDownContentImg.classList.add('animate__slideInUp');
                    pageDownShare.classList.add('animate__zoomIn');
                    pageUpWr.style.display = 'none';
                    pageDownWr.style.display = 'block';
                } else if (i == 1){
                    pageUp.classList.remove('animate__backOutLeft');
                    pageDown.classList.remove('animate__backInUp');
                    pageUp.classList.add('animate__backInDown');
                    pageDown.classList.add('animate__backOutLeft');
                    pageDownWr.style.display = 'none';
                    pageUpWr.style.display = 'block';
                }
            })
        })
    }

    const pageScroll = () => {
        const sectionUp = document.getElementById('up');
        const sectionDown = document.getElementById('down');

        const pageBtn = document.querySelectorAll('.about');
        const pageUp = document.querySelector('.beauty');
        const pageDown = document.querySelector('.beautydetails');
        const pageUpWr = document.querySelector('.mainwrapper');
        const pageDownMain = document.querySelector('.main');
        const pageUpWrMain = document.querySelector('.maindetails');
        const pageDownWr = document.querySelector('.maindetailswrapper');
        const pageUpimgMax = document.querySelector('.beauty_content-img');
        const pageUpimgMin = document.querySelector('.beauty_content-img-imgsmall');
        const pageUpDescr = document.querySelector('.beauty_content-descr');
        const pageDownContentDescr = document.querySelector('.beautydetails_content_descr');
        const pageDownContentImg = document.querySelector('.beautydetails_content_img');
        const pageDownShare = document.querySelector('.share');

        sectionUp.addEventListener('wheel', (e) => {
            e.preventDefault()
            
            if(e.deltaY < 0){

                pageUpimgMax.classList.add('animate__slideInUp');
                pageUpimgMin.classList.add('animate__zoomIn');
                pageUpDescr.classList.add('animate__fadeInLeft');
                pageDownContentDescr.classList.remove('animate__fadeInLeft');
                pageDownContentImg.classList.remove('animate__slideInUp');
                pageDownShare.classList.remove('animate__zoomIn');
                pageUpWr.style.display = 'block';
                pageDownWr.style.display = 'none';

            } else {
                

                pageUpimgMax.classList.remove('animate__slideInUp');
                pageUpimgMin.classList.remove('animate__zoomIn');
                pageUpDescr.classList.remove('animate__fadeInLeft');
                pageDownContentDescr.classList.add('animate__fadeInLeft');
                pageDownContentImg.classList.add('animate__slideInUp');
                pageDownShare.classList.add('animate__zoomIn');
                pageUpWr.style.display = 'none';
                pageDownWr.style.display = 'block';
            }

        })
        sectionDown.addEventListener('wheel', (e) => {
           e.preventDefault()
            
           if(e.deltaY > 0){
               pageUpWr.style.display = 'none';
               pageDownWr.style.display = 'block';

               pageUpimgMax.classList.remove('animate__slideInUp');
               pageUpimgMin.classList.remove('animate__zoomIn');
               pageUpDescr.classList.remove('animate__fadeInLeft');
               pageDownContentDescr.classList.add('animate__fadeInLeft');
               pageDownContentImg.classList.add('animate__slideInUp');
               pageDownShare.classList.add('animate__zoomIn');

           } else {
               

               pageUpimgMax.classList.add('animate__slideInUp');
               pageUpimgMin.classList.add('animate__zoomIn');
               pageUpDescr.classList.add('animate__fadeInLeft');
               pageDownContentDescr.classList.remove('animate__fadeInLeft');
               pageDownContentImg.classList.remove('animate__slideInUp');
               pageDownShare.classList.remove('animate__zoomIn');
               pageUpWr.style.display = 'block';
               pageDownWr.style.display = 'none';
           }

        })
                
    }


      
    socialHiddenMin();
    pageHidden();
    pageHiddenAll();
    pageScroll();
});