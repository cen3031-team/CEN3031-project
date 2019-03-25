function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
            }]
        },
    });
}

$("#renderBtn").click(
    function () {
        data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart(data, labels);
    }
);

var labels = [
    "Vote for blue",
    "vote for red",
];
var data = [
    70,
    30,
    20,
];

var label =[];
var volume= [];
for(var i in trends) {
        label.push(trends[i].name);
        volume.push(trends[i].tweet_volume);
      }

console.log(trends);

var pie = document.getElementById("pieChart").getContext('2d');
var myChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [
            {
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor:'rgba(75, 192, 192, 0.2)',
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Tweet Volume"
        }
    }
});