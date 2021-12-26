function generateBar(i) {
    document.getElementById('degree').innerHTML = '...' + i + '%'
    let timeId = setTimeout(generateBar, 12, ++i);
    let beautyContent = document.querySelector('.beauty_content-descr');
    let beautyImg = document.querySelector('.beauty_content-img');
    let smallImg = document.querySelector('.beauty_content-img-imgsmall');
    const pageDownWr = document.querySelector('.maindetailswrapper');
    if (i == 99) {
       document.getElementById('loading').style.display = "none";
       document.getElementById('container').style.display = "block";
       clearTimeout(timeId);
       beautyContent.classList.add('animate__fadeInLeftBig')
       beautyImg.classList.add('animate__fadeInRightBig')
       smallImg.classList.add('animate__fadeInDownBig')
    }
 }
 document.getElementById('container').style.display = "none";
 setTimeout(generateBar, 12, 1);