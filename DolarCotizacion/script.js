// Referencias a los elementos del DOM
const chartContainer = document.getElementById('chart-container');
const infoBox = document.getElementById('info-box');
const cryptoName = document.getElementById('crypto-name');
const cryptoLogo = document.getElementById('crypto-logo');
const dateElement = document.getElementById('date');

// Configuración del nombre y logo de la criptomoneda
const cryptoDetails = {
    name: 'Dólar',
    logo: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-one-hundred-dollar-bill-png-image_9209957.png', // URL del logo
};

cryptoName.textContent = cryptoDetails.name;
cryptoLogo.src = cryptoDetails.logo;
cryptoLogo.alt = `${cryptoDetails.name} Logo`;

// Datos locales (mock)
const localData = [
    { time: "2024-11-16 00:15:00", open: 28.00, high: 31.26, low: 28.79, close: 28.82, volume: 0.0},
    { time: "2024-11-17 00:15:00", open: 28.82, high: 30.30, low: 29.30, close: 30.15, volume: 0.0},
    { time: "2024-11-18 00:15:00", open: 28.82, high: 30.30, low: 29.30, close: 30.15, volume: 0.0},
    { time: "2024-11-19 00:15:00", open: 30.15, high: 30.20, low: 28.90, close: 29.43, volume: 0.0},
    { time: "2024-11-20 00:15:00", open: 29.43, high: 30.05, low: 28.20, close: 28.44, volume: 0.0},
    { time: "2024-11-21 00:15:00", open: 28.44, high: 34.50, low: 29.00, close: 32.65, volume: 0.0},
    { time: "2024-11-22 00:15:00", open: 32.65, high: 39.50, low: 30.50, close: 37.20, volume: 0.0},
    { time: "2024-11-23 00:15:00", open: 37.20, high: 37.00, low: 31.50, close: 36.85, volume: 0.0},
    { time: "2024-11-25 00:15:00", open: 36.85, high: 35.50, low: 29.00, close: 32.50, volume: 0.0},
    { time: "2024-11-26 00:15:00", open: 32.50, high: 35.00, low: 28.90, close: 33.30, volume: 0.0},
    { time: "2024-11-27 00:15:00", open: 33.30, high: 34.30, low: 29.90, close: 32.20, volume: 0.0},
    { time: "2024-11-28 00:15:00", open: 32.20, high: 32.50, low: 28.95, close: 31.15, volume: 0.0},
    { time: "2024-11-29 00:15:00", open: 31.15, high: 34.00, low: 30.90, close: 33.15, volume: 0.0},
    { time: "2024-12-01 00:15:00", open: 33.15, high: 33.70, low: 33.20, close: 33.60, volume: 0.0},
    { time: "2024-12-02 00:15:00", open: 33.60, high: 35.25, low: 35.10, close: 35.10, volume: 0.0},
    { time: "2024-12-03 00:15:00", open: 35.10, high: 35.30, low: 34.70, close: 34.95, volume: 0.0},
    { time: "2024-12-04 00:15:00", open: 34.95, high: 36.05, low: 35.85, close: 35.95, volume: 0.0},
    { time: "2024-12-05 00:15:00", open: 35.95, high: 35.60, low: 35.50, close: 35.80, volume: 0.0},
    { time: "2024-12-06 00:15:00", open: 35.80, high: 35.00, low: 34.15, close: 34.50, volume: 0.0},
    { time: "2024-12-07 00:15:00", open: 34.50, high: 33.90, low: 33.10, close: 33.50, volume: 0.0},
    { time: "2024-12-08 00:15:00", open: 33.50, high: 33.80, low: 33.20, close: 33.50, volume: 0.0},
    { time: "2024-12-09 00:15:00", open: 33.50, high: 31.70, low: 31.30, close: 31.50, volume: 0.0},
    { time: "2024-12-11 00:15:00", open: 33.50, high: 29.00, low: 28.40, close: 28.50, volume: 0.0},
    { time: "2024-12-12 00:15:00", open: 28.50, high: 31.25, low: 30.90, close: 31.15, volume: 0.0},
    { time: "2024-12-13 00:15:00", open: 31.15, high: 31.50, low: 30.90, close: 31.20, volume: 0.0},
    { time: "2024-12-14 00:15:00", open: 31.20, high: 31.10, low: 30.80, close: 30.95, volume: 0.0},
    { time: "2024-12-16 00:15:00", open: 30.95, high: 31.00, low: 30.00, close: 30.50, volume: 0.0},
    { time: "2024-12-17 00:15:00", open: 30.50, high: 30.00, low: 29.70, close: 29.80, volume: 0.0},
    { time: "2024-12-18 00:15:00", open: 29.80, high: 31.50, low: 29.90, close: 31.30, volume: 0.0},
];

// Crear el gráfico
const chart = LightweightCharts.createChart(chartContainer, {
    width: chartContainer.offsetWidth,
    height: chartContainer.offsetHeight,
    layout: { backgroundColor: '#1e1e1e', textColor: '#d1d4dc' },
    grid: { vertLines: { color: '#2b2b2b' }, horzLines: { color: '#2b2b2b' } },
    timeScale: { borderColor: '#485c7b', timeVisible: true, secondsVisible: true },
    rightPriceScale: { borderColor: '#485c7b' },
});

// Serie de velas
const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
  });

// Serie de volumen
const volumeSeries = chart.addHistogramSeries({
    color: '#4A90E2',
    priceFormat: { type: 'volume' },
    scaleMargins: { top: 0.8, bottom: 0 },
});

// Serie de análisis técnico (SMA)
const smaSeries = chart.addLineSeries({
    color: '#ff9800',
    lineWidth: 2,
});

// Convertir los datos al formato adecuado
const candlestickData = localData.map(d => ({
    time: new Date(d.time).getTime() / 1000, // Convertir a UNIX timestamp
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    volume: d.volume,
}));

const volumeData = localData.map(d => ({
    time: new Date(d.time).getTime() / 1000, // Convertir a UNIX timestamp
    value: d.volume,
}));

// Configurar el gráfico con los datos locales
candlestickSeries.setData(candlestickData);
volumeSeries.setData(volumeData);

// Calcular SMA
function calculateSMA(data, period) {
    const sma = [];
    for (let i = period - 1; i < data.length; i++) {
        const sum = data.slice(i - period + 1, i + 1).reduce((acc, d) => acc + d.close, 0);
        sma.push({ time: data[i].time, value: sum / period });
    }
    return sma;
}

// Calcular y agregar la SMA al gráfico
smaSeries.setData(calculateSMA(candlestickData, 3));

// Mostrar la fecha actual con hora, minuto y segundo
function displayCurrentDate() {
    const today = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    dateElement.textContent = today.toLocaleDateString('es-ES', options);
}

displayCurrentDate(); // Mostrar la fecha al cargar
infoBox.textContent = 'Datos cargados correctamente.';


// Ejecutar funciones
fetchMarketData();
setInterval(fetchMarketData, 30000); // Actualizar datos cada 30 segundos
setInterval(displayCurrentDate, 1000); // Actualizar la fecha cada segundo
