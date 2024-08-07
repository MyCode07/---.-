export const stickyHeader = () => {
    const header = document.querySelector('._landing-body header');
    if (!header) return

    const headerheigth = header.getBoundingClientRect().height / 3;

    const sticky = () => {
        if (window.scrollY > headerheigth) {
            header.classList.add('_sticky')
        }
        else {
            header.classList.remove('_sticky')
        }
    }

    sticky();
    window.addEventListener('scroll', sticky);
}