let wrapper = document.getElementById('btnWrapper');
wrapper.style.setProperty('--groove-left', '12px');
let btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
        ThemeChange( i === 1);
        resetBtn(btns);
        wrapper.style.setProperty('--groove-left', `calc(12px + ${i * 50}%)`);
        wrapper.style.setProperty('--wraper-origin', `${i === 0 ? '75% top': '25% top'}`); // 动态修改原点位置
        wrapper.style.setProperty('--wraper-rotate',`${i === 0? -8 : 8}deg`)
        wrapper.className='rotateWrap';
        setTimeout(() => {
            // 给被点击的按钮添加选中样式，注意不要丢了原始样式
            btns[i].className = 'btn active';
        }, 500);
        setTimeout(() => {
            wrapper.className = ''
        }, 550); // 注意小细节！！！
        resetBtn(btns);
    })
}

function resetBtn() {
    for (let i = 0; i < btns.length; i++) {
        setTimeout(() => {
            btns[i].className = 'btn';
        },100);
    }
}
function ThemeChange(bol) {
    let body = document.body;
    body.className = bol ? 'dark' : ''
}
