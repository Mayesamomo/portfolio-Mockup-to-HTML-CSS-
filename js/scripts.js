function toggleMenu() {
    let menu = document.querySelector(".__navlist");
    menu.classList.toggle("show-small");
  }

  //when the page is done loading hide the loader
window.addEventListener('load', function() {
  var loader = document.querySelector('.loader');
  setTimeout(function() {
    loader.classList.add('hide');
  }, 2000); // 2000 milliseconds = 3 seconds before showing content
});