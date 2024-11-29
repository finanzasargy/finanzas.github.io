// URL de la API
const apiUrl = "https://apimocha.com/cotitunia/criptocoins-ArgyCoin";

// Array para almacenar las criptomonedas (en este caso solo "Argy")
const cryptocurrencies = [
  {
    name: "Argy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvv4HUWmaXAXP_XaqZDIEb8U-HMAbYyGqcA&s",
    volume: "", // Este valor se actualizará con la API
    lastPurchase: "", // Este valor también se actualizará con la API
    variation: "", // Este valor se actualizará con el cálculo
    url: "https://eda6733d-8c9e-4404-a017-3ac0baf220e5-00-3p6b059op2ftm.janeway.replit.dev/ArgyCripto/ArgyCotizacion.html" // URL de la página de ArgyCoin
  },
  // Puedes agregar más criptomonedas aquí si es necesario
];

// Función para obtener los datos de la API
async function fetchCryptoData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Obtiene la última y la penúltima entrada de la lista
    const lastData = data[data.length - 1];
    const secondLastData = data[data.length - 2];

    // Actualiza los datos de la criptomoneda "Argy"
    cryptocurrencies[0].volume = `T$ ${lastData.volume.toLocaleString()}`;
    cryptocurrencies[0].lastPurchase = `T$ ${lastData.price.toFixed(2)}`;

    // Calcula la variación entre el precio de la última y penúltima entrada
    const priceVariation = calculateVariation(secondLastData.price, lastData.price);
    cryptocurrencies[0].variation = `${priceVariation.toFixed(2)}%`;

    // Actualiza la interfaz de usuario
    updateUI();
  } catch (error) {
    console.error("Error al obtener los datos de la API", error);
  }
}

// Función para calcular la variación en porcentaje entre dos precios
function calculateVariation(previousPrice, currentPrice) {
  const variation = ((currentPrice - previousPrice) / previousPrice) * 100;
  return variation;
}

// Función para actualizar la UI con los datos de la criptomoneda
function updateUI() {
  const container = document.getElementById('crypto-container');
  container.innerHTML = "";  // Limpiar el contenedor antes de agregar los nuevos datos

  cryptocurrencies.forEach(crypto => {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2', 'shadow-sm', 'w-10');

    // Creamos el contenido HTML para la tarjeta
    card.innerHTML = `
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <img src="${crypto.image}" alt="${crypto.name}" class="rounded-circle mb-3" width="52" height="52">
        <h5 class="card-title text-center">${crypto.name}</h5>
        <p class="card-text">Volume: <span class="valor">${crypto.volume}</span></p>
        <p class="card-text">Last Purchase: <span class="valor">${crypto.lastPurchase}</span></p>
        <p class="card-text">Variation: <span class="color-red">${crypto.variation}</span></p>
        <button class="btn btn-outline-primary btn-block" data-url="${crypto.url}">Details</button>
      </div>
    `;

    container.appendChild(card);

    // Añadir el evento para redirigir al hacer clic en el botón
    const button = card.querySelector('button');
    button.addEventListener('click', (event) => {
      const url = event.target.getAttribute('data-url');
      window.location.href = url;  // Redirigir a la URL
    });
  });
}

// Llamamos a la función para obtener los datos de la API y actualizar la UI
fetchCryptoData();



$(function () {

  'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
    $('.overlay').toggleClass('open')
    $(this).toggleClass('collapsed');

  })

  $(".overlay, .close-menu").on('click', function(){
    $('[data-toggle="offcanvas"]').click()
  })
})
