export const mobileMenuToggle = () => {
  let buttonCross: HTMLElement = document.getElementById("menuBtn")!;
  let menu: HTMLElement = document.getElementById("mobileMenu")!;
  let htmlBody: HTMLElement = document.getElementById('body')!;

  buttonCross.classList.toggle('opened');
  buttonCross.setAttribute('aria-expanded', 'opened');

  menu.classList.toggle('hide');
  htmlBody.classList.toggle('no-scroll');

  console.log(htmlBody);
}
