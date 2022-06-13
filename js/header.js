const links = document.querySelectorAll(".header__nav ul a");

function activateLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("activate");
  }
}

links.forEach(activateLink);
