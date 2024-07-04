import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('._landing-body .header__burger');
const menu = document.querySelector('._landing-body .header__menu');
const hero = document.querySelector('._landing-body .hero');

if (burger) {
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');

        if (hero) {
            hero.classList.toggle('_active');
        }

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }
    })
}

const menuLinks = document.querySelectorAll('._landing-body .header__menu nav a');
if (menuLinks) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (menu.classList.contains('_open')) {
                unLockPadding();

                burger.classList.remove('_active');
                menu.classList.remove('_open');

                if (hero) {
                    hero.classList.remove('_active');
                }
            }

        })
    })

}