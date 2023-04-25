var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['De 0 a 3', 'De 4 a 7', 'De 8 a 10'],
        datasets: [{
            label: 'Pagamentos',
            data: [4, 3, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Avaliação de tratamentos dos pacientes'
        }
    }
});

var ctxp = document.getElementById('myChar').getContext('2d');
var myChar = new Chart(ctxp, {
    type: 'pie',
    data: {
        labels: ['Pago', 'Falta'],
        datasets: [{
            label: 'Pagamentos',
            data: [500, 300],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Distribuição de pagamentos feitos pelos pacientes'
        }
    }
});