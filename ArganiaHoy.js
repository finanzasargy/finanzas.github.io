// app.js

document.addEventListener("DOMContentLoaded", () => {
  const data = {
    resumenDiario: {
      cambioOficial: "$36,23",
      cambioBlue: "$45",
      inflacion: {
        diaria: "1.2%",
        mensual: "8.4%",
        anual: "112%"
      },
      produccionIndustrial: "+2.1%",
      pbiActual: "$245.000M",
      pbiPotencial: "$290.000M",
      reservas: "US$ 15.800M",
      balanceFiscal: "-$12.4B",
      finAcuerdoDias: 10
    },
    datosMonetarios: {
      tasaInteres: "22%",
      emision: "$0",
      ofertaDemanda: "Equilibrada",
      tensionMonetaria: "3.8/10",
      intervencion: "No hubo"
    },
    consumoPrecios: {
      precios: {
        canasta: "$115.000",
        nafta: "$390/litro",
        transporte: "$180",
        alquiler: "$210.000"
      },
      variacionSectorial: {
        alimentos: "+6.1%",
        textil: "+4.2%",
        construccion: "+7.5%"
      }
    },
    comercioExterior: {
      exportaciones: "US$ 220M",
      importaciones: "US$ 180M",
      tratados: "Tratado MERCOSUR-Pacífico en negociación",
      productos: {
        exportados: ["Soja", "Litio", "Software"],
        importados: ["Electrónica", "Medicamentos"]
      },
      fmi: "US$ 5.000M / US$ 45.000M"
    },
    empleoSociedad: {
      empleo: "91.2%",
      desempleo: "8.8%",
      censo: "48.2M hab.",
      convocatorias: "3.500 vacantes en salud y educación",
      cursos: ["Hidrógeno Verde", "Logística", "Programación"]
    },
    notificaciones: [
      "⚠️ Inflación diaria superó el 3%: 3.4%",
      "📢 Medidas económicas nuevas: Tope a alquileres y baja de IVA alimentos",
      "📰 Nuevo salario promedio publicado: $520.000"
    ],
    herramientas: [
      "🔄 Convertidor Peso ↔ Dólar",
      "💡 Calculadora de inflación acumulada",
      "🧾 Simulador de impuestos al consumo",
      "💬 Foro ciudadano"
    ],
    comunicados: {
      resumen: "Se unifica tipo de cambio, baja retenciones",
      conferencia: "Julieta Medina – 'Vamos por la estabilización definitiva'",
      evento: "Licitación de deuda – 3 de junio"
    }
  };

  const seccion = (id, html) => {
    document.getElementById(id).innerHTML = html;
  };

  seccion("resumen-diario", `
    <h2 class="titulo-seccion">📱 Resumen Diario</h2>
    <p>📈 Tipo de cambio oficial: ${data.resumenDiario.cambioOficial} | Blue: ${data.resumenDiario.cambioBlue}</p>
    <p>🛒 Inflación: Diaria ${data.resumenDiario.inflacion.diaria} | Mensual ${data.resumenDiario.inflacion.mensual} | Anualizada ${data.resumenDiario.inflacion.anual}</p>
    <p>🏭 Producción industrial (ayer): ${data.resumenDiario.produccionIndustrial}</p>
    <p>📉 PBI actual: ${data.resumenDiario.pbiActual} | Potencial: ${data.resumenDiario.pbiPotencial}</p>
    <p>💵 Reservas internacionales: ${data.resumenDiario.reservas}</p>
    <p>🏛️ Balance fiscal diario: ${data.resumenDiario.balanceFiscal}</p>
    <p>⏳ Fin del acuerdo "Inflación 0%": ${data.resumenDiario.finAcuerdoDias} días</p>
  `);

  seccion("datos-monetarios", `
    <h2 class="titulo-seccion">💹 Datos Monetarios</h2>
    <p>💰 Tasa BCRA: ${data.datosMonetarios.tasaInteres}</p>
    <p>🪙 Emisión de dinero: ${data.datosMonetarios.emision}</p>
    <p>📊 Oferta vs. Demanda de dinero: ${data.datosMonetarios.ofertaDemanda}</p>
    <p>🧯 Índice de Tensión Monetaria: ${data.datosMonetarios.tensionMonetaria}</p>
    <p>🔄 Intervención cambiaria: ${data.datosMonetarios.intervencion}</p>
  `);

  seccion("consumo-precios", `
    <h2 class="titulo-seccion">📦 Consumo y Precios</h2>
    <p>🏷️ Precios: Canasta ${data.consumoPrecios.precios.canasta} | Nafta ${data.consumoPrecios.precios.nafta} | Transporte ${data.consumoPrecios.precios.transporte} | Alquiler ${data.consumoPrecios.precios.alquiler}</p>
    <p>📉 Variación intermensual por sector: Alimentos ${data.consumoPrecios.variacionSectorial.alimentos}, Textil ${data.consumoPrecios.variacionSectorial.textil}, Construcción ${data.consumoPrecios.variacionSectorial.construccion}</p>
  `);

  seccion("comercio-relaciones", `
    <h2 class="titulo-seccion">🌍 Comercio Exterior y Relaciones</h2>
    <p>🚢 Exportaciones: ${data.comercioExterior.exportaciones} | Importaciones: ${data.comercioExterior.importaciones}</p>
    <p>💬 ${data.comercioExterior.tratados}</p>
    <p>📦 Más exportados: ${data.comercioExterior.productos.exportados.join(", ")} | Más importados: ${data.comercioExterior.productos.importados.join(", ")}</p>
    <p>🏦 FMI (usado/total): ${data.comercioExterior.fmi}</p>
  `);

  seccion("empleo-sociedad", `
    <h2 class="titulo-seccion">👥 Empleo y Sociedad</h2>
    <p>👩‍💼 Empleo: ${data.empleoSociedad.empleo} | Desempleo: ${data.empleoSociedad.desempleo}</p>
    <p>🧾 Censo 2025: ${data.empleoSociedad.censo}</p>
    <p>💼 Convocatorias: ${data.empleoSociedad.convocatorias}</p>
    <p>📚 Cursos estratégicos: ${data.empleoSociedad.cursos.join(", ")}</p>
  `);

  seccion("notificaciones", `
    <h2 class="titulo-seccion">🔔 Notificaciones</h2>
    ${data.notificaciones.map(n => `<p>${n}</p>`).join("")}
  `);

  seccion("herramientas", `
    <h2 class="titulo-seccion">🧰 Herramientas</h2>
    ${data.herramientas.map(h => `<p>${h}</p>`).join("")}
  `);

  seccion("comunicados", `
    <h2 class="titulo-seccion">📢 Comunicados Oficiales</h2>
    <p>📰 Resumen: ${data.comunicados.resumen}</p>
    <p>🎙️ Conferencia: ${data.comunicados.conferencia}</p>
    <p>📅 Próximo evento: ${data.comunicados.evento}</p>
  `);
});
