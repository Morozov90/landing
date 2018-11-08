

handleResize = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('.header__container');
  
    if (scrollTop > 100 && this.scrollTop < 101) {
      header.classList.add('active__header');
    }
    if (this.scrollTop > 100 && scrollTop < 101) {
      header.classList.remove('active__header');
    }
  this.scrollTop = scrollTop
};

window.addEventListener('scroll', handleResize);

