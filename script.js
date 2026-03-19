function cambiarIndustria(tipo) {

const img = document.getElementById("imagen-industria");
const tabla = document.getElementById("tabla-industria");
const botones = document.querySelectorAll(".card");

/* SECCION PARA INTERCAMBIAR DE MAQUINA */
botones.forEach(btn => btn.classList.remove("active"));

if (tipo === "moda") {

botones[0].classList.add("active");

img.src = "images/maquina01.jpg";

tabla.innerHTML = `
<tr><th>Parámetro Técnico</th><th>Detalle de Ingeniería</th></tr>
<tr><td>Potencia del Tubo Láser</td><td>110W (Tubo de vidrio CO2 de larga vida útil)</td></tr>
<tr><td>Vida Útil del Tubo</td><td>8,000 - 10,000 horas (Bajo condiciones óptimas)</td></tr>
<tr><td>Sistema de Control</td><td>DSP Ruida 6445 (Estabilidad industrial)</td></tr>
<tr><td>Motores de Movimiento</td><td>Paso a paso trifásicos de alta resolución</td></tr>
<tr><td>Transmisión</td><td>Bandas síncronas reforzadas con alma de acero</td></tr>
<tr><td>Lente Focal</td><td>Seleniuro de Zinc (ZnSe) importado (Alta transmitancia)</td></tr>
<tr><td>Sistema de Aire</td><td>Bomba de asistencia de aire para evitar flamas</td></tr>
<tr><td>Voltaje de Operación</td><td>220V AC / 60Hz / 15A</td></tr>
`;

}

if (tipo === "auto") {

botones[1].classList.add("active");

img.src = "images/maquina02.jpg";

tabla.innerHTML = `
<tr><th>Parámetro Técnico</th><th>Detalle de Ingeniería</th></tr>
<tr><td>Área de Acolchado</td><td>$1800 \times 2200$ mm</td></tr>
<tr><td>Velocidad de Puntada</td><td>Regulable de 500 a 2500 RPM</td></tr>
<tr><td>Grosor Máximo de Capa</td><td>50 mm (Material comprimido)</td></tr>
<tr><td>Tipo de Aguja</td><td>Industrial Serie 135x5 (Diversos calibres)</td></tr>
<tr><td>Capacidad de Memoria</td><td>Hasta 1000 patrones de diseño (Archivos DST/DAT)</td></tr>
<tr><td>Sistema de Tracción</td><td>Servomotores Panasonic (Sincronización milimétrica)</td></tr>
<tr><td>Sensor de Rotura</td><td>Parada automática ante falta de hilo superior/inferior</td></tr>
`;

}

if (tipo === "marro") {

botones[2].classList.add("active");

img.src = "images/maquina03.jpg";

tabla.innerHTML = `
<tr><th>Parámetro Técnico</th><th>Detalle de Ingeniería</th></tr>
<tr><th>Herramienta Estándar</th><th>Cuchilla Oscilante Eléctrica (EOT)</th></tr>
<tr><th>Herramientas Opcionales</th><th>Punzón rotativo, marcador de tiza, herramienta de hendido</th></tr>
<tr><th>Bomba de Vacío</th><th>Turbina de 7.5 kW con silenciador</th></tr>
<tr><th>Zonificación de Vacío</th><th>6 zonas independientes controladas por válvula</th></tr>
<tr><th>Profundidad de Corte</th><th>0.1 mm a 50 mm (Según densidad)</th></tr>
<tr><th>Resolución Mecánica</th><th>$0.01$ mm</th></tr>
<tr><th>Guías Lineales</th><th>Marcas de precisión (PMI/HIWIN)</th></tr>

`;

}

}
