export const crossAnimation = () => {
  let buttonCross: HTMLElement = document.getElementById("menuBtn")!;
  buttonCross.classList.toggle('opened');
  buttonCross.setAttribute('aria-expanded', 'opened');
}
