const chartContainer = document.getElementById('chart-container');
const infoBox = document.getElementById('info-box');
const cryptoName = document.getElementById('crypto-name');
const cryptoLogo = document.getElementById('crypto-logo');
const dateElement = document.getElementById('date');


// Configura el nombre y el logo dinámicamente
const cryptoDetails = {
    name: 'ArgyCoin (AYC)',
    logo: 'https://pbs.twimg.com/profile_images/1628520220544335883/Y_USf6LP_400x400.png', // URL del logo
    href: "https://finanzasargy.github.io/finanzas.github.io/index.html"
};

cryptoName.textContent = cryptoDetails.name;
cryptoLogo.src = cryptoDetails.logo;
cryptoLogo.alt = `${cryptoDetails.name} Logo`;

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

// Obtener datos desde una API
async function fetchMarketData() {
    try {
        const response = await fetch('https://apimocha.com/cotitunia/criptocoins-ArgyCoin');
        if (!response.ok) throw new Error('Error al obtener datos de la API');
        const data = await response.json();

        // Convertir y asegurar que cada 'time' sea un UNIX timestamp válido
        const candlestickData = data.map(d => ({
            time: new Date(d.time).getTime() / 1000, // Convertir 'time' a UNIX timestamp
            open: d.open || 0,
            high: d.high || 0,
            low: d.low || 0,
            close: d.close || 0,
            volume: d.volume || 0,
        }));

        const volumeData = data.map(d => ({
            time: new Date(d.time).getTime() / 1000, // Convertir 'time' a UNIX timestamp
            value: d.volume || 0,
        }));

        candlestickSeries.setData(candlestickData);
        volumeSeries.setData(volumeData);

        // Calcular SMA
        smaSeries.setData(calculateSMA(candlestickData, 3));

        infoBox.textContent = 'Datos cargados correctamente.';
    } catch (error) {
        console.error(error);
        infoBox.textContent = 'Error al cargar datos.';
    }
}

// Generar datos por minuto a partir de los datos diarios
function generateMinuteData(data) {
    const minuteData = [];
    data.forEach(d => {
        const startDate = new Date(d.time * 1000);
        for (let i = 0; i < 1440; i++) { // 1440 minutos en un día
            const newTime = new Date(startDate);
            newTime.setMinutes(startDate.getMinutes() + i);
            minuteData.push({
                time: Math.floor(newTime.getTime() / 1000), // Convertir a segundos
                open: d.open,
                high: d.high,
                low: d.low,
                close: d.close,
                volume: d.volume / 1440, // Suponiendo volumen distribuido por minuto
            });
        }
    });
    return minuteData;
}

// Calcular SMA
function calculateSMA(data, period) {
    const sma = [];
    for (let i = period - 1; i < data.length; i++) {
        const sum = data.slice(i - period + 1, i + 1).reduce((acc, d) => acc + d.close, 0);
        sma.push({ time: data[i].time, value: sum / period });
    }
    return sma;
}

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


// Actualizar datos automáticamente cada 30 segundos
fetchMarketData(); // Cargar los datos inicialmente
setInterval(fetchMarketData, 30000);
