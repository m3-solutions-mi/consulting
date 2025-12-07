class Treemap {
    chart_instance = null;
    chart_id = null;
    data = null;
    options = {
        series: [{ name: '', data: [] }],
        legend: {
            show: false
        },
        chart: {
            height: 200,
            type: 'treemap',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            offsetY: -5,
        },
        colors: [
            '#4CAF50',
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        },
        _title: {
            text: 'Basic Treemap'
        }
    };
    constructor(id) {
        this.chart_id = id;
    }
    render(data) {
        this.options.series[0].data = data;
        this.chart_instance = new ApexCharts(document.querySelector(this.chart_id), this.options);
        this.chart_instance.render();
        console.log(this.chart_id, this.options);
    }
}

//-------------------------------------------
// Experience Treemap Chart 
//-------------------------------------------
new Treemap('#chart').render([
    { x: ['SW Dev', '25+'], y: 25 },
    { x: ['Project', 'Mgmt'], y: 10 },
    { x: ['Team', 'Leader'], y: 9 },
    { x: ['SW', 'Applications'], y: 15 },
    { x: ['Custom', 'Software'], y: 18 },
    { x: ['Data', 'Analytics'], y: 15 },
    { x: 'Other', y: 8 },
]);

//-------------------------------------------
// Software Languages Treemap Chart 
//-------------------------------------------
new Treemap('#chart2').render([
    { x: ['Node', '12+'], y: 10 },
    { x: 'Angular', y: 10 },
    { x: 'ASP', y: 5 },
    { x: 'PSQL', y: 7 },
    { x: 'MDB', y: 10 },
    { x: 'Oracle', y: 5 },
    { x: 'GIT', y: 10 },
    { x: 'CSS', y: 10 },
    { x: 'JS', y: 10 },
    { x: 'HTML', y: 10 },
    { x: 'C#', y: 15 },
    { x: 'Chrome', y: 7 },
]);

//-------------------------------------------
// Products Created Treemap Chart 
//-------------------------------------------
new Treemap('#chart3').render([
    { x: ['AVL', 'PULSE'], y: 30 },
    { x: ['Load', 'Ramp'], y: 14 },
    { x: ['Data', 'Sheet'], y: 11 },
    { x: ['Log', 'Analysis'], y: 16 },
    { x: ['Log', 'Viewer'], y: 13 },
    { x: ['Location', 'Tracking'], y: 21 },
    { x: ['Program', 'Tracking'], y: 13 },
    { x: ['PULSE', 'Public API'], y: 21 },
    { x: ['Grafana', 'Dashboards'], y: 17 },
]);

//-------------------------------------------
// Applications Knowledge Treemap Chart 
//-------------------------------------------
new Treemap('#chart4').render([
    { x: ['AVL', 'PULSE'], y: 30 },
    { x: ['DSP', 'Adapt'], y: 10 },
    { x: ['MTS', 'VXIN'], y: 10 },
    { x: ['AVL', 'PUMA'], y: 10 },
    { x: ['AVL', 'LYNX'], y: 10 },
    { x: ['AVL', 'iGEM'], y: 10 },
    { x: ['AVL', 'SANTORIN'], y: 10 },
    { x: ['PLC'], y: 10 },
    { x: ['A&D', 'iTest'], y: 10 },
    { x: '. . .', y: 5 },
]);

//-------------------------------------------
// Customers List 
//-------------------------------------------
const template = `<span class="w3-tag w3-green w3-round w3-padding _w3-margin" style="margin-bottom:5px;">{0}</span>`
let html = '';
//* Sealed Power,Hi-Lex,Inalfa Roof Systems,
`Cummins Global,Honda,GM - Pontiac GPS, GM Milford Proving Grounds,A123,GM - Warren Battery Lab, GM - Italy,
        Toyota,Ferrari,Pilot Automotive,Rivian,Ford,Detroit Diesel,TUV,Borg Warner,
        Stellantis,Volkswagon,Power Co,Catepillar,John Deere,Rouche Racing,Penske Racing,Toyota Racing,
        Mack Truck, Volvo Truck, California ARB,Johnson Mathey,Perkins UK,Meritor,
        Aramco,Chrysler,Nissan,LG,Peterbilt,Intertek,
        . . .`.split(',').forEach((v) => {
    html += template.replace('{0}', v) + '\n';
})
document.getElementById('customers').innerHTML = html;