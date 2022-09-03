document.body.onload = () => {
  [...document.getElementsByClassName('fc-offer-content')].forEach((element, index) => {
    document.getElementsByClassName('fc-offer-img')[index].style.height = element.offsetHeight + 'px';
  });
  
  [...document.getElementsByClassName('fc-offer-img')].forEach((element, index) => {
    document.getElementsByClassName('fc-offer-content')[index].style.height = element.offsetHeight + 'px';
  });
}