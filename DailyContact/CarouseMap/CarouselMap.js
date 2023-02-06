window.addEventListener('load', function () {
    var leftArrow = this.document.querySelector('.lf');
    var rightArrow = this.document.querySelector('.lr');

    //鼠标移动到左箭头位置跟换图片，有灰色背景的图片
    leftArrow.addEventListener('mouseenter', function () {
        this.style.backgroundPosition = '0 0';
    });
    leftArrow.addEventListener('mouseleave', function () {
        this.style.backgroundPosition = '-83px 0';
    });
    rightArrow.addEventListener('mouseenter', function () {
        this.style.backgroundPosition = '-42px 0';
    });
    rightArrow.addEventListener('mouseleave', function () {
        this.style.backgroundPosition = '-123px 0';
    });

    //获取图片和下标
    var imgs = this.document.querySelectorAll('.img');
    var dots = this.document.querySelector('.dots').querySelectorAll('span');

    //设置图片index,标记当前页数

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('data-index', i);
    }

    //获取index
    var current = this.document.querySelector('.current');
    var currentIndex = current.getAttribute('data-index');

    //左右箭头的图片显示
    //上一张或者最后一张
    leftArrow.addEventListener('click', function () {
        if (currentIndex > 0) {
            //    上一张图片.移除当前显示
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[--currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            // 一道最后一张图片的位置
            currentIndex = 4;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    });
    //右箭头 同理
    rightArrow.addEventListener('click', changeImage);

    var timer = this.setInterval(changeImage, 8000);

    function changeImage() {
        if (currentIndex < 4) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[++currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }

    }

    //下方原点显示
    for (let i = 0; i < dots.length; i++) {
        dots[i].setAttribute('data-index', i);
        dots[i].addEventListener('click', function () {
            var index = this.getAttribute('data-index');
            if (index != currentIndex) {
                imgs[currentIndex].classList.remove('current');
                dots[currentIndex].classList.remove('square');
                imgs[index].classList.add('current');
                dots[index].classList.add('square');
                currentIndex = index;
            }
        })
    }


});