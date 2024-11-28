import menuStyle from "./styles/menu.scss"

import { classNames } from "../util/lang"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Menu({ displayClass }: QuartzComponentProps) {
  return <div id="mobile-menu" className={classNames(displayClass, "menu")}>
    <svg id="menu" className={classNames(displayClass, "menu")} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
}

Menu.afterDOMLoaded = `
var menuElement = document.getElementById('menu');
var mobileExplorer = document.getElementById('mobileExplorer');
var explorerNodeLinks = document.getElementsByClassName('explorerNodeLink');
var html = document.getElementsByTagName('html')[0];
var initStyles = html.style ?? '';
menuElement.addEventListener("click", () => {
  if (['none', ''].includes(mobileExplorer.style.display)) {
    html.style.overflowY = "hidden";
    mobileExplorer.style.display = 'block';
  } else {
    html.style.overflowY = "auto";
    mobileExplorer.style.display = 'none';
  }
});

// Event handler for links. Need to set the body back to scrollable.
for (const explorerNodeLink of explorerNodeLinks) {
  explorerNodeLink.addEventListener("click", () => {
    if (!['none', ''].includes(mobileExplorer.style.display)) {
      html.style.overflowY = "auto";
    }
    return true;
  }, true);
};
`

Menu.css = menuStyle;

export default (() => Menu) satisfies QuartzComponentConstructor