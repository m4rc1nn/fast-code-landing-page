const handleExit = () => {
  document.getElementsByClassName('fc-alert-box')[0].style.display = 'none';
}

const handleShow = (type) => {
  let title = '';
  let description = '';
  let displayButton = true;
  switch(type) {
    case 'contact':
      title = 'Skontakuj się z nami:';
      description = 'E-mail: <span style="font-weight: 600;">mkowalczyk193@gmail.com</span> <br> Numer telefonu: <span style="font-weight: 600;">534-867-318</span>';
      displayButton = false;
      break;
    case 'e-commerce':
      title = 'E-commerce';
      description = 'Stworzymy dla ciebie profesjonalny sklep internetowy, zajemiemy się hostingiem i utrzymaniem domeny, dodamy przedmioty, skonfigurujemy kategorie i podpowiemy jak dobrze prowadzić i promować swój sklep internetowy.';
      break;
    case 'collaboration':
      title = 'Współprace';
      description = 'Załatwimy dla Ciebie dogodne warunki współpracy z największymi polskimi twórcami internetowymi, twoje produkty/usługi będą występowały na filmach i w postach, które mają wielotysięczne zasięgi. Zajmiemy się również przygotowaniem graficznym i komunikacyjnym.';
      break;
    case 'fanpage':
      title = 'Social Media';
      description = 'Poprawiadzimy za Ciebie Twoje social media (Facebook, Instagram, YouTube, Twitter, TikTok) tak, aby docierały one do jak największej grupy osób. Znamy się na obecnych standardach, dlatego możesz mieć pewność, że nasz marketing będzie świeży i zgodny z obecnymi trendami.';
      break;
    case 'cards': 
      title = 'Karty produktowe';
      description = 'Stworzymy dla Ciebie karty produktowe, czyli dedykowane strony, które są poświęcone tylko jednemu przedmiotowi (lub usłudze), które mają wygenerować jak największą sprzedaż. Przygotujemy grafiki, zakodujemy stronę i puścimy w świat!';
      break;
    case 'graphics':
      title = 'Grafika komputerowa';
      description = 'Indywidualnie dla Ciebie zaprojektujemy wszystkie materiały, czyli logo, baner, ulotke i wszystko inne co tylko będzie wymagał Twój biznes. Wszystkie stworzone przez nas materiały będą odpowiednio przeskalowane, gotowe do użycia wszędzie gdzie to będzie wymagane.';
      break;
    case 'stealer':
      title = 'Projekt Stealer';
      description = 'Użyte technologie: <span style="font-weight: 600">HTML, CSS, JavaScript, React.js, React Native, Node.js, PHP, REST API</span> <br> Opis: projekt zawierał zaprojektowanie i napisanie sklepu internetowego z oprogramowaniem, systemu API, aplikacji mobilnej i wtyczki do przeglądarki.<br> <br> Czas tworzenia (roboczogodzin): <span style="font-weight: 600">100 - 110</span>';
      break;
    case 'donation':
      title = 'Donation system';
      description = 'Użyte technologie: <span style="font-weight: 600">HTML, CSS, JavaScript, Node.js, REST API</span> <br> Opis: darmowy do użycia komercyjnego projekt dla streamerów, którzy przyjmują wpłaty (donejty). Cały kod dostępny jest na platformie github.com<br> <br> Czas tworzenia (roboczogodzin): <span style="font-weight: 600">15</span>';
      break;
    case 'ais':
      title = 'Sklep internetowy';
      description = 'Kompleksowa obsługa sklepu internetowego <span style="font-weight: 600">KUBUŚ</span> na platformie <span style="font-weight: 600">Allegro i Shopee</span>.<br> <br> Do zadań należało: <span style="font-weight: 600">obsługa klienta, obsługa zamówień, kompletowanie zamówień, tworzenie etykiet przesyłkowych, dbanie o promocje na platformie, np. BlackWeek, SuperSprzedawca.</span>';
      break;
  }
  document.getElementsByClassName('fc-alert-content-top-header')[0].innerHTML = title;
  document.getElementsByClassName('fc-alert-content-description')[0].innerHTML = description;
  document.getElementsByClassName('fc-alert-content-footer')[0].style.display = displayButton ? 'flex' : 'none';
  document.getElementsByClassName('fc-alert-box')[0].style.display = 'flex';
}