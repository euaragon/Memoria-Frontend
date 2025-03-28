﻿

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


function cuadroFallosIndex() {
   
    const ctx = document.getElementById('cuadro-fallos-index');

    const data = {
        labels: [
            'Descentralizadas I',
            'Descentralizadas II',
            'Recursos',
            'Gobierno',
            'Municipalidades',
            'DAEC'
        ],
        datasets: [{
            label: 'Cuentas falladas en 2024',
            data: [50, 25, 24, 44, 24, 5],
            hoverOffset: 4
        }]
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
            position: 'bottom',
            labels: {
                fontColor: '#333',
                fontSize: 12,
            }
        }
    };

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}

function cuadroFallosCuentas() {

    const ctx = document.getElementById('cuadro-fallos-cuentas');

    const data = {
        labels: [
            'Descentralizadas I',
            'Descentralizadas II',
            'Recursos',
            'Gobierno',
            'Municipalidades',
            'DAEC'
        ],
        datasets: [{
            label: 'Cuentas falladas en 2024',
            data: [50, 25, 24, 44, 24, 5],
            hoverOffset: 4
        }]
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




function Fiscalizadora() {
    const ctx = document.getElementById('fiscalizadora').getContext('2d');

    const data = {
        labels: ['IV 2023', 'I 2024', 'II 2024', 'III 2022'],
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
           'Arquitectos', 'Analistas','Profesores y Técnicos', 'Servicios Generales', 'Ingenieros', 'Abogados y Procuradores', 'Licenciados y Otros', 'Contadores', 'Contratos de Locación y Servicios'
        ],
        datasets: [{
            label: "Cantidad",
            data: [3,6,6,67,7,32,31,121,2],
            hoverOffset: 4
        }]
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
            position: 'bottom',
            labels: {
                fontColor: '#333',
                fontSize: 10,
            }
        }

    };

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

//function Recursos() {
//    am5.ready(function () {

//        // Create root element
//        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//        var root = am5.Root.new("personal");


//        // Set themes
//        // https://www.amcharts.com/docs/v5/concepts/themes/
//        root.setThemes([
//            am5themes_Animated.new(root)
//        ]);


//        // Create chart
//        // https://www.amcharts.com/docs/v5/charts/xy-chart/
//        var chart = root.container.children.push(am5xy.XYChart.new(root, {
//            panX: true,
//            panY: true,
//            wheelX: "panX",
//            wheelY: "zoomX",
//            pinchZoomX: true
//        }));

//        // Add cursor
//        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
//        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
//        cursor.lineY.set("visible", false);


//        // Create axes
//        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
//        xRenderer.labels.template.setAll({
//            rotation: -90,
//            centerY: am5.p50,
//            centerX: am5.p100,
//            paddingRight: 15
//        });

//        xRenderer.grid.template.setAll({
//            location: 1
//        })

//        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
//            maxDeviation: 0.3,
//            categoryField: "country",
//            renderer: xRenderer,
//            tooltip: am5.Tooltip.new(root, {})
//        }));

//        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//            maxDeviation: 0.3,
//            renderer: am5xy.AxisRendererY.new(root, {
//                strokeOpacity: 0.1
//            })
//        }));


//        // Create series
//        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
//            name: "Series 1",
//            xAxis: xAxis,
//            yAxis: yAxis,
//            valueYField: "value",
//            sequencedInterpolation: true,
//            categoryXField: "country",
//            tooltip: am5.Tooltip.new(root, {
//                labelText: "{valueY}"
//            })
//        }));

//        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
//        series.columns.template.adapters.add("fill", function (fill, target) {
//            return chart.get("colors").getIndex(series.columns.indexOf(target));
//        });

//        series.columns.template.adapters.add("stroke", function (stroke, target) {
//            return chart.get("colors").getIndex(series.columns.indexOf(target));
//        });


//        // Set data
//        var data = [{
//            country: "ARQUITECTOS",
//            value: 3
//        }, {
//            country: "ANALISTAS",
//            value: 6
//        }, {
//            country: "PROFESORES Y TÉCNICOS",
//            value: 6
//        }, {
//            country: "TAREAS ADMINISTRATIVAS Y SERVICIOS GENERALES",
//            value: 67
//        }, {
//            country: "INGENIEROS",
//            value: 7
//        }, {
//            country: "ABOGADOS Y PROCURADORES",
//            value: 32
//        }, {
//            country: "LICENCIADOS Y OTROS",
//            value: 31
//        }, {
//            country: "CONTADORES",
//            value: 121
//        }, {
//            country: "CONTRATOS DE LOCACIÓN Y SERVICIOS",
//            value: 2
//        }];

//        xAxis.data.setAll(data);
//        series.data.setAll(data);


//        // Make stuff animate on load
//        // https://www.amcharts.com/docs/v5/concepts/animations/
//        series.appear(1000);
//        chart.appear(1000, 100);

//    }); // end am5.ready()
//}


function Jornadas() {
    const ctx = document.getElementById('jornada').getContext('2d');

    const data = {
        labels: [
            "BUENOS AIRES",
            "CATAMARCA",
            "CHACO",
            "ENTRE RÍOS",
            "FORMOSA",
            "JUJUY",
            "MENDOZA",
            "RÍO NEGRO",
            "SAN JUAN",
            "SANTA FE"
        ],
        datasets: [{
            label: 'CANTIDAD DE TRABAJOS PRESENTADOS',
            data: [3, 4, 3, 3, 1, 1, 10, 1, 3, 1],
            hoverOffset: 4
        }]
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
            position: 'bottom',
            labels: {
                fontColor: '#333',
                fontSize: 12,
            }
        }
    };

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });


}

function Calidad() {
    const ctx = document.getElementById('calidad').getContext('2d');

    const data = {
        labels: ['2018', '2019', '2020', '2021', '2022 *'],
        datasets: [{
            label: 'Cuentas falladas',
            data: [159, 158, 161, 165, 132],
            backgroundColor: '#2bc299',
        },
        {
            label: 'Tiempo promedio para fallo en días corridos',
            data: [199, 202, 170, 167, 137],
            backgroundColor: '#ffae99',
        }]
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