// Функція для створення QR-коду з геолокацією
function createGeoQRCode(latitude, longitude) {
    const mapLink = `https://www.google.com/maps/place/${latitude},${longitude}`;
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: mapLink,
      width: 250,
      height: 250,
    });
  }
  
  // Задаємо координати з Google Maps посилання
  const latitude = 50.319701;
  const longitude = 26.5282648;
  
  // Викликаємо функцію для створення QR-коду
  createGeoQRCode(latitude, longitude);
  