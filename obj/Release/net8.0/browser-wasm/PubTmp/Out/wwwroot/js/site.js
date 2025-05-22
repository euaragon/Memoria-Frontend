function abrirPdf(urlRecibida) {
    const backendUrl = 'https://www.tribcuentasmendoza.gob.ar/MemoriaAPI/api/Fallos/pdf/';
    const digId = urlRecibida.split('/').pop(); // Intenta extraer el DigId de la URL recibida
    const urlBackendCompleta = backendUrl + digId;
    window.open(urlBackendCompleta, '_blank');
}

window.blazorHasLoaded = false;

window.setupZoom = (imageId) => {
    console.log("setupZoom called with ID:", imageId);
    const image = document.getElementById(imageId);
    const container = image.parentElement;

    if (!image || !container) {
        console.error("Image or container not found for ID:", imageId);
        return;
    }

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const zoomFactor = 1.6;
        const offsetX = (x / rect.width) * (1 - 1 / zoomFactor) * 100;
        const offsetY = (y / rect.height) * (1 - 1 / zoomFactor) * 100;

        image.style.transformOrigin = `${x}px ${y}px`;
        image.style.transform = `scale(${zoomFactor}) translate(-${offsetX}%, -${offsetY}%)`;
    });

    container.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
};

window.addEventListener('load', () => {
    if (window.setupZoom && document.getElementById("organigramaImagen")) {
        window.setupZoom("organigramaImagen");
    }
});
document.addEventListener("click", function (event) {
    let offCanvas = document.querySelector(".offcanvas.show");
    if (offCanvas && !offCanvas.contains(event.target)) {
        DotNet.invokeMethodAsync("Memoria-2023", "CloseCanvas");
    }
});

let chartInstance = null;
let chartInstanceIndex = null;


window.cuadroFallosIndex = () => {
    fetch('https://www.tribcuentasmendoza.gob.ar/MemoriaAPI/api/Fallos/fallos2024/cantidad-por-sector')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
         
            const dataSinTotal = data.slice(1);

            const labels = dataSinTotal.map(item => item.sector);
            const cantidades = dataSinTotal.map(item => item.cantidadTotal);

            const ctx = document.getElementById('cuadro-fallos-index').getContext('2d');
            if (chartInstance) {
                chartInstance.destroy();
            }
            chartInstance = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '',
                        data: cantidades,
                        backgroundColor: [
                          
                            'rgba(54, 162, 235)',
                           
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            fontColor: '#333',
                            fontSize: 12,
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar los datos unificados de fallos por sector:', error);
        });
};

window.cuadroFallosCuentas = () => {
    fetch('https://www.tribcuentasmendoza.gob.ar/MemoriaAPI/api/Fallos/fallos2024/cantidad-por-sector')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
         
        const dataSinTotal = data.slice(1);

        const labels = dataSinTotal.map(item => item.sector);
        const cantidades = dataSinTotal.map(item => item.cantidadTotal);

        const ctx = document.getElementById('cuadro-fallos-cuentas').getContext('2d');
        if (chartInstance) {
            chartInstance.destroy();
        }
        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    data: cantidades,
                    backgroundColor: [
                      
                        'rgba(54, 162, 235)',
                      
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: '#333',
                        fontSize: 12,
                    }
                }
            }
        });
    })
        .catch(error => {
            console.error('Error cargando datos:', error);
            window.blazorHasLoaded = true; // Asegúrate de que la bandera se establezca incluso en caso de error
            if (window.informBlazorOfLoad) {
                window.informBlazorOfLoad();
            }
        });
};

document.addEventListener('DOMContentLoaded', () => {
    window.cuadroFallosCuentas();
});

function Fiscalizadora() {
    const ctx = document.getElementById('fiscalizadora').getContext('2d');

    const data = {
        labels: ['IV 2023', 'I 2024', 'II 2024', 'III 2024'],
        datasets: [{
            label: 'Cumplieron con todos los requisitos',
            data: [70, 71, 78, 78],
            backgroundColor: '#0074D9',
        }, {
            label: 'No cumplieron con todos los requisitos',
            data: [1, 0, 0, 0],
            backgroundColor: '#FFD700',
        }]
    };

    const options = {
        responsive: true, // Asegura que el gráfico sea responsivo
        maintainAspectRatio: false, // Permite que la altura se ajuste
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 80, // Ajusté el máximo para que quepa la barra más alta
                }
            }]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#333',
                fontSize: 12,
            }
        }
    };

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function Recursos() {
    const ctx = document.getElementById('personal');

    const data = {
        labels: [
            'Bioingenieros', 'Arquitectos', 'Analistas', 'Profesores y Técnicos',
            'Servicios Generales', 'Ingenieros', 'Abogados y Procuradores',
            'Licenciados', 'Contadores', 'Contratos de Locación', 'En Comisión'
        ],
        datasets: [{
            label: "Cantidad",
            data: [1, 3, 5, 16, 56, 7, 30, 30, 119, 3, 1],
            backgroundColor: [
                '#2c3e50'
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        responsive: true,
maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 70,
                ticks: {
                    color: '#333'
                }
            },
            x: {
                ticks: {
                    color: '#333'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: '#333',
                    font: {
                        size: 10
                    }
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}



function Calidad() {
    const ctx = document.getElementById('calidad').getContext('2d');

    const data = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: 'Cantidad de cuentas falladas en los 8 meses (hasta 240 días)',
                data: [113,99,128,129,135,129],
                borderColor:'#435aa5',
                backgroundColor: '#6976b8',
                type: 'line',
                order: 0
            },
            {
                label: 'Tiempo promedio para fallo en días corridos',
                data: [199, 202, 170, 167, 161, 134],
                borderColor:'#851036',
                backgroundColor: '#ffae99',
                type: 'line',
                order: 0
            },
            {
            label: 'Cuentas falladas',
            data: [159, 158, 161, 165, 165,136],
            backgroundColor: '#2bc299',
        }
       ]
    };

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 70,
                }
            }]
        },
        legend: {
         
            display: true,
            position: 'top',
            labels: {
                fontColor: '#333',
                fontSize: 12,
            }
        }
    };


    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function AuditoriaExt() {
    am5.ready(function () {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout
        }));


        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(am5percent.PieSeries.new(root, {
            alignLabels: true,
            calculateAggregates: true,
            valueField: "value",
            categoryField: "category"
        }));

        series.slices.template.setAll({
            strokeWidth: 3,
            stroke: am5.color(0xffffff)
        });

        series.labelsContainer.set("paddingTop", 30)


        // Set up adapters for variable slice radius
        // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
        series.slices.template.adapters.add("radius", function (radius, target) {
            var dataItem = target.dataItem;
            var high = series.getPrivate("valueHigh");

            if (dataItem) {
                var value = target.dataItem.get("valueWorking", 0);
                return radius * value / high
            }
            return radius;
        });


        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([{
            value: 79,
            category: "OBRAS PÚBLICAS"
        }, {
            value: 1,
            category: "ADMINISTRATIVO CONTABLE"
        }, {
            value: 28,
            category: "JUICIOS"
        }]);


        // Create legend
        // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
        var legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50,
            marginTop: 15,
            marginBottom: 15
        }));

        legend.data.setAll(series.dataItems);


        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series.appear(1000, 100);

    }); // end am5.ready()
}