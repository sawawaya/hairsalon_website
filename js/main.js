'use strict'

{   //Tab Menu
    const navItems = document.querySelectorAll('.global-nav ul li a');
    const tabMenu = document.querySelector('.tab-menu');
    const tabPosition = tabMenu.getBoundingClientRect();
    const access = document.querySelector('.access');
    const accessPosition = access.getBoundingClientRect();
    const menuItems = document.querySelectorAll('.tab-menu ul li a');
    const contents = document.querySelectorAll('.content');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const style1 = document.querySelector('.style1');
    const style2 = document.querySelector('.style2');


    // タブメニューの切り替え
    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');
    
            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(clickedItem.dataset.id).classList.add('active');        
        });
    });

    // グローバルナビからタブメニューへスクロール
    document.addEventListener('DOMContentLoaded', () => {
        navItems.forEach(navItem => {
            navItem.addEventListener('click', e => {
                e.preventDefault();

                const target = navItem.getAttribute('href');

                navItems.forEach(nav => {
                    if (nav === navItem) {
                        nav.classList.add('active');
                    } else {
                        nav.classList.remove('active');
                    }
                });

                menuItems.forEach(item => {
                    if ('#' + item.dataset.id === target) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
        
                contents.forEach(content => {
                    if (target === '#top') {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else if (target === '#access') {
                        window.scrollTo({
                            top: accessPosition.top -5,
                            behavior: 'smooth'
                        });
                    } else if ('#' + content.id === target) {
                        content.classList.add('active');
                        window.scrollTo({
                            top: tabPosition.top - 5,
                            behavior: 'smooth'
                        });
                    } else {
                        content.classList.remove('active');
                    }
                });

            });
        });
    });

    // スタイルタブの画像切り替え
    nextBtn.addEventListener('click', () => {
        style2.classList.remove('disappear');
        prevBtn.classList.remove('disappear');
        nextBtn.classList.add('disappear');
        style1.classList.add('disappear');
    });

    prevBtn.addEventListener('click', () => {
        style1.classList.remove('disappear');     
        nextBtn.classList.remove('disappear');
        prevBtn.classList.add('disappear');
        style2.classList.add('disappear');
    });

}

{   //sp

    // Menu
    const open = document.getElementById('menu-open');
    const overlay = document.querySelector('.sp-menu-overlay');
    const close = document.getElementById('menu-close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });

    // ヘアスタイルの追加
    const style2 = document.querySelector('.style2');
    const addBtn = document.querySelector('.style-add-sp');

    addBtn.addEventListener('click', () => {
        style2.classList.add('appear');
        addBtn.classList.add('btnHide');
    });
}