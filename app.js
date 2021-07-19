
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp(firebaseConfig);
console.log('wwww',firebaseConfig);
firebase.auth.Auth.Persistence.Local

var db = firebase.firestore();


var PricesCake=[],orders=[];
var CakeName=[];
var urlss={};
var Cakes=[];
var tot;
/******************************tesssssssssssssssssssssssssssssssssssst database*/

$("#db").click(function()
{
    /*
    firebase.auth().createUserWithEmailAndPassword("email123@gmail.com", "password");
    
      // Add a new document in collection "cities"
    db.collection("cities2").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(() => {
        console.log("Document successfully written!");
    })*/
    db.collection("Cake").add({
        CakeName: "שנייק וניל",
        CakePrice: "$40",
        ImgSrc:"שנייק וניל (קרם פסטייר עם שוקלד צ'יפס).jpeg"
    })
    db.collection("Cake").add({
        CakeName: "רוגלעך חלבי מושחט",
        CakePrice: "$50",
        ImgSrc:"רוגלעך חלבי מושחט.jpeg"
    })
    db.collection("Cake").add({
        CakeName: "רוגלעך קלאסי",
        CakePrice: "$40",
        ImgSrc:"רוגלעך קלאסי.jpeg"
    })
    db.collection("Cake").add({
        CakeName: "שבלול קינמון",
        CakePrice: "$30",
        ImgSrc:"שבלול קינמון.jpeg"
    })
    db.collection("Cake").add({
        CakeName: "מבצע!! 2 מארזים רוגלעך קלאסי ב50 שח",
        CakePrice: "$50",
        ImgSrc:"מבצע!! 2 מארזים רוגלעך קלאסי ב50 שח.jpeg"
    })
    db.collection("Cake").add({
        CakeName: "עוגת גבינה וחמאה",
        CakePrice: "$40",
        ImgSrc:"עוגת גבינה וחמאה- חדש !!.jpeg"
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    

});
/************************************************************************************ */

$("#buy").click(function()
{

    var today = new Date();
    db.collection("Order").doc().set({
    CakeName:Cakes,
    Price:tot,
    date: today,
    count:count1
    })
    .then(() => {
        console.log("Document successfully written!");
        alert("Successfull Order")
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    

});


$("#db2").click(function()
{
  window.location.href="graph.html";

});

$("#db3").click(function()
{
  window.location.href="home.html";

});


/************************************************************************************** */


var margin = {
    top:300,
    right: 300,
    bottom: 80,
    left: 500
},
width=300,
height=150;

var svg = d3.select('body').select('.container').select('.row');
var cols,cards,cbody,images,titles,texts,addBtn,urll,count=0,current,imagesUrl;
var urls={};
var urrls=[];
var c=0,flag=true;

db.collection("Cake").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {

      db.collection("ImagesUrl").get().then((querySnapshot2) => {
        querySnapshot2.forEach((docc) => {
          if(doc.data()['ImageCake']==docc.data()['CakeName'] && flag==true){
            c=4;
            flag=false;
               urll=docc.data()['ImageUrl'];
               urrls.push(urll)
          }
         
         
  
        })
        });
                cols=svg.append('div')
                        .attr('class','col-md-4 col-lg-4');

                cards=cols.append('div')
                         .attr('class','card');

                        
                cbody=cards.append('div')
                         .attr('class','card-body');


                  images=cbody.append('img')
                                
                                .attr('class','img')
                                .attr("id" , count)                          
                                .attr("src",'images/'+doc.data()['ImgSrc'] )
                                .attr("alt","...");
                count++;
                titles=cbody.append('h3')
                            .attr('class','card-title')
                            .text( doc.data()['CakeName']);

                texts=cbody.append('h4')
                           .attr('class','card-text')
                           .text( doc.data()['CakePrice']);

                addBtn=cbody.append('a')
                            .attr('class','btn btn-primary')
                            .attr('id','style1')
                            .text('Add to Cart')
                            .on("click", function() {
                              //addToCartButtons= document.getElementsByClassName('btn-primary')
                              for(let i = 0; i < addToCartButtons.length; i++){
                                //testEvent=1;
                                addToCartButtons[i].addEventListener('click', addToCart)
                               // console.log(addToCartButtons[i])
                               //addToCartButtons[i].on("click",addToCart)
                                
                            }
                            
                           
                           
                           });; 
                
    });
  
});