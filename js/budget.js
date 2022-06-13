const parameters = new URLSearchParams(location.search);

function activateProducts(parameters) {
  const element = document.getElementById(parameters);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activateProducts);
