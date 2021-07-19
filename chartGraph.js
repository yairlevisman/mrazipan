



var db = firebase.firestore();


console.log("hh");
var counitiy=[],SizeOrders=0;
var  currentMonth= 7,amountMonth=0;
var DictDateAmount={},CountMonths=[],AllMonth=12;

function GetData(){
            db.collection("Cake").get().then((querySnapshot) => {
            
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data()['CakeName']);
                    CakeName.push(doc.data()['CakeName']);
                    PricesCake.push(doc.data()['CakePrice']);
                
                
                });
            });



            for(i=0;i<AllMonth;i++)
            {
                CountMonths.push(0);
            
            }

            db.collection("Order").get().then((querySnapshot) => {
            
                querySnapshot.forEach((doc) => {
                
                    var d1=  doc.data()['date'];
                    CountMonths[d1.toDate().getMonth()]+=doc.data()['count'];
                        //CountMonths[d1.toDate().getMonth()]=8;
                     //   console.log(d1.toDate().getMonth());

                
                });
            });
            return CountMonths;
            //console.log(CountMonths);

}

 var chartData=[];


var arr=[];
var dataa={};
arr=CountMonths;
dataa['data']=CountMonths;
   //GetCountOfMonth(orders);

function CreateGarph(ar){
    var newOrders=[];
    for(i=0;i<AllMonth;i++)
    {
        CountMonths.push(0);
    
    }
    db.collection("Order").get().then((querySnapshot) => {
 
        querySnapshot.forEach((doc) => {
        
            var d1=  doc.data()['date'];
            newOrders[d1.toDate().getMonth()]+=doc.data()['count'];
                //CountMonths[d1.toDate().getMonth()]=8;
             //   console.log(d1.toDate().getMonth());
        
        });
    });
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

        const label=MONTHS;

          //  console.log(CountMonths[6])
            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                labels:label, //["M", "T", "W", "T", "F", "S", "S"],
                datasets: [{
                  label: 'Amount of Dilivaries in month',
                  data:[0,0,0,0,0,0,11,0,0,0,0,0],//newOrders,
                  backgroundColor: "rgba(153,255,51,1)"
                }
             //  , {
             //    label: 'oranges',
             //    data: CountMonths, //[30, 29, 5, 5, 20, 3, 10],
             //    backgroundColor: "rgba(255,153,0,1)"
             //  }
            ]
              },
              options: {
                            responsive: true,
                            maintainAspectRatio:true,
                            title:{
                                display:true,
                                text:'Amount Dilivireies at Months'
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },
                            scales: {
                                xAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Year 2021'
                                    }
                                }],
                                yAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Amount of dilivries'
                                    }
                                }]
                            }
                        }
            });

          
          
            const labels = MONTHS;
            var data = {
              labels: labels,
              datasets: [{
                label: 'Count Diliviries at this month ',
                data: [0,0,0,0,0,0,11,0,0,0,0,0],//CountMonths,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            
              }]
            };






            var ctx2 = document.getElementById("myChart2").getContext('2d')
            var stackedLine = new Chart(ctx2, {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                       // y: {
                 //
                       //     stacked: true
                       // }
                    },
                    // Container for pan options
                    pan: {
                        // Boolean to enable panning
                        enabled: true,
                    
                        // Panning directions. 
                        mode: 'x',
                    
                        speed: 1
                    },
                
                    // Container for zoom options
                    zoom: {
                        // enable zooming
                        enabled: true,                      
                        // Zooming directions. 
                        mode: 'x',
                        }
                    }
                });
            
}

GetData();
CreateGarph(CountMonths);