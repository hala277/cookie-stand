'use strict';
let contaner = document.getElementById('salesCookies');
let myform = document.getElementById('myform');
myform.addEventListener('submit',addStore);
let hour = [' 6:00am ',' 7:00am ',' 8:00am ',' 9:00am ',' 10:00am ',' 11:00am ',' 12:00pm ',' 1:00pm ',' 2:00pm ',' 3:00pm ',' 4:00pm ',' 5:00pm ',' 6:00pm ',' 7:00pm '];
let tableElment = document.createElement('table');
let salmonCookies =[];
contaner.appendChild(tableElment);




function SalmonCookie(storeName, minHCustomers,maxHCustomers,AvgCookie){
this.name = storeName;
this.minHC = minHCustomers;
this.maxHC = maxHCustomers;
this.avgCookies = AvgCookie;
this.customerPerH = [];
this.salesArray = [];
this.Total = 0;
salmonCookies.push(this);

}
console.log(salmonCookies);
SalmonCookie.prototype.getNumberOfCustomer = function(min ,max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);


}




function addStore(event){
    event.preventDefault();
    let name = event.target.name.value;
    let minHC = event.target.minHC.value;
    let maxHC = event.target.maxHC.value;
    let avgCookies = event.target.avgCookies.value;
    let newStore = new SalmonCookie(name,minHC,maxHC,avgCookies);
    tableElment.deleteRow(-1);
   console.log(salmonCookies);
   
    newStore.getsales();
    newStore.render();
    //==let footer1 = document.getElementById('footer');
    
    
     creatTableFooter();
    
    // creatTableFooter.textContent = '';
    // this.Total = 0;
    //  creatTableFooter();
   

}


SalmonCookie.prototype.getsales=function(){
    for(let i =0;i < hour.length; i++){
     this.customerPerH.push(this.getNumberOfCustomer(this.minHC,this.maxHC));
     this.salesArray.push(Math.ceil(this.customerPerH[i]*this.avgCookies));
     this.Total += this.salesArray[i];
 
    }
    console.log(this.Total);
}


function creatTableHeader(){
let trElment = document.createElement('tr');
tableElment.appendChild(trElment);

let tdElment1 = document.createElement('td');
trElment.appendChild(tdElment1);
tdElment1.textContent = ' ';

for(let i =0 ; i < hour.length;i++){
let tdElment = document.createElement('td');
trElment.appendChild(tdElment);
tdElment.textContent = hour[i] + ' ';
 }

 let tdElment2 = document.createElement('td');
 trElment.appendChild(tdElment2);
 tdElment2.textContent = 'Daily Location Total ';


}

 SalmonCookie.prototype.render = function(){
    let trElment = document.createElement('tr');
    tableElment.appendChild(trElment);

    
   let tdElment = document.createElement('td')
   trElment.appendChild(tdElment);
   tdElment.textContent = this.name;
    
   for(let i =0; i < hour.length;i++){
   let tdElment2 = document.createElement('td')
   trElment.appendChild(tdElment2);
    tdElment2.textContent = this.salesArray[i];
   } 
   let tdElment1 = document.createElement('td');
   trElment.appendChild(tdElment1);
   tdElment1.textContent = this.Total;
}
 function creatTableFooter(){
     let tfootElment = document.createElement('tfoot');
     tableElment.appendChild(tfootElment);

    let trElment = document.createElement('tr');
    tfootElment.appendChild(trElment);
    
    let tdElment1 = document.createElement('td');
    trElment.appendChild(tdElment1);
    tdElment1.textContent = 'Total ';

    let dailyTotal=0;
    for(let i =0; i< salmonCookies.length;i++){
        dailyTotal += salmonCookies[i].Total;
    }
    for(let i =0; i<hour.length; i++){
        let totalcuntry=0;
        for(let x = 0; x < salmonCookies.length; x++){
            totalcuntry = totalcuntry + salmonCookies[x].salesArray[i];
        }
       
    let tdElment2 = document.createElement('td');
    trElment.appendChild(tdElment2);
    tdElment2.textContent = totalcuntry;
    }
    let tdElment3 = document.createElement('td');
    trElment.appendChild(tdElment3);
    tdElment3.textContent = dailyTotal;
    
   
    }
    

creatTableHeader();


let Seattle = new SalmonCookie('Seattle',23,65,6.3);
let Tokyo = new SalmonCookie('Tokyo',3,24,1.2);
let Dubai = new SalmonCookie('Dubai',11,38,3.7);
let Paris = new SalmonCookie('Paris',20,38,2.3);
let lima = new SalmonCookie('lima',2,16,4.6);

Seattle.getNumberOfCustomer(23,65);
Seattle.getsales();
Seattle.render();

Tokyo.getNumberOfCustomer(23,65);
Tokyo.getsales();
Tokyo.render();

Dubai.getNumberOfCustomer(23,65);
Dubai.getsales();
Dubai.render();

Paris.getNumberOfCustomer(23,65);
Paris.getsales();
Paris.render();

lima.getNumberOfCustomer(23,65);
lima.getsales();
lima.render();

//  creatTableFooter();

  
// // Seattle.Total;

         
        
      
      
//Seattle.Total;

// for(let i =0;i<salmonCookies.length;i++ ){
//       salmonCookies[i].getsales();
//      salmonCookies[i].render();
//      salmonCookies[i].Total;
//     }
// let Seattle = {
//     storeName : 'Seattle',
//     //min/max hourly customers
//     minHCustomers: 23,
//     maxHCustomers: 65,
//     AvgCookie: 6.3,
    
    // customerPerH:[],
    //  Total:0,
    // salesArray:[],
    // getNumberOfCustomer: function(min ,max){
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // },
    
//    getsales:function(){
//        for(let i =0;i < hour.length;i++){
//         this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
//         this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
//         this.Total += this.salesArray[i];
    
//        }
      
 //  },


// render :function(){

// let h2Element = document.createElement('h2');
// contaner.appendChild(h2Element);
// h2Element.textContent = this.storeName;
// let ulElement = document.createElement('ul');
// contaner.appendChild(ulElement);

// for(let i =0; i < this.salesArray.length;i++){
//     let liElement = document.createElement('li');
//     liElement.textContent = `${hour[i]} : ${this.salesArray[i]} cookies`;
//    // hour[i]+':'+this.salesArray[i]+'cookies';
//    ulElement.appendChild(liElement);
    
// }

// let liElement = document.createElement('li');
// ulElement.appendChild(liElement);
// liElement.textContent = `total : ${this.Total} cookies`;

// }
// };
// //Seattle.getNumberOfCustomer(23,65);
// Seattle.getsales();
// console.log(Seattle);
// Seattle.render();


// let Tokyo = {
//     storeName : 'Tokyo',
//     //min/max hourly customers
//     minHCustomers: 3,
//     maxHCustomers: 24,
//     AvgCookie: 1.2,
   
//     customerPerH:[],
//     Total:0,
//     salesArray:[],
//     getNumberOfCustomer: function(min ,max){
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
    
//    getsales:function(){
//        for(let i =0;i < hour.length;i++){
//         this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
//         this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
//         this.Total += this.salesArray[i];
    
//        }
      
//    },


// render :function(){

// let h2Element = document.createElement('h2');
// contaner.appendChild(h2Element);
// h2Element.textContent = this.storeName;
// let ulElement = document.createElement('ul');
// contaner.appendChild(ulElement);

// for(let i =0; i < this.salesArray.length;i++){
//     let liElement = document.createElement('li');
//     liElement.textContent = `${hour[i]} : ${this.salesArray[i]} cookies`;
//    // hour[i]+':'+this.salesArray[i]+'cookies';
//    ulElement.appendChild(liElement);
    
// }

// let liElement = document.createElement('li');
// ulElement.appendChild(liElement);
// liElement.textContent = `total : ${this.Total} cookies`;

// }
// };

// Tokyo.getsales();
// console.log(Tokyo);
// Tokyo.render();


// let Dubai = {
//     storeName : 'Dubai',
//     //min/max hourly customers
//     minHCustomers: 11,
//     maxHCustomers: 38,
//     AvgCookie: 3.7,
    
//     customerPerH:[],
//     Total:0,
//     salesArray:[],
//     getNumberOfCustomer: function(min ,max){
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
    
//    getsales:function(){
//        for(let i =0;i < hour.length;i++){
//         this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
//         this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
//         this.Total += this.salesArray[i];
    
//        }
      
//    },


// render :function(){

// let h2Element = document.createElement('h2');
// contaner.appendChild(h2Element);
// h2Element.textContent = this.storeName;
// let ulElement = document.createElement('ul');
// contaner.appendChild(ulElement);

// for(let i =0; i < this.salesArray.length;i++){
//     let liElement = document.createElement('li');
//     liElement.textContent = `${hour[i]} : ${this.salesArray[i]} cookies`;
//    // hour[i]+':'+this.salesArray[i]+'cookies';
//    ulElement.appendChild(liElement);
    
// }

// let liElement = document.createElement('li');
// ulElement.appendChild(liElement);
// liElement.textContent = `total : ${this.Total} cookies`;

// }
// };

// Dubai.getsales();
// console.log(Dubai);
// Dubai.render();


// let Paris = {
//     storeName : 'Paris',
//     //min/max hourly customers
//     minHCustomers: 20,
//     maxHCustomers: 38,
//     AvgCookie: 2.3,
   
//     customerPerH:[],
//     Total:0,
//     salesArray:[],
//     getNumberOfCustomer: function(min ,max){
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
    
//    getsales:function(){
//        for(let i =0;i < hour.length;i++){
//         this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
//         this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
//         this.Total += this.salesArray[i];
    
//        }
      
//    },


// render :function(){

// let h2Element = document.createElement('h2');
// contaner.appendChild(h2Element);
// h2Element.textContent = this.storeName;
// let ulElement = document.createElement('ul');
// contaner.appendChild(ulElement);

// for(let i =0; i < this.salesArray.length;i++){
//     let liElement = document.createElement('li');
//     liElement.textContent = `${hour[i]} : ${this.salesArray[i]} cookies`;
//    // hour[i]+':'+this.salesArray[i]+'cookies';
//    ulElement.appendChild(liElement);
    
// }

// let liElement = document.createElement('li');
// ulElement.appendChild(liElement);
// liElement.textContent = `total : ${this.Total} cookies`;

// }
// };

// Paris.getsales();
// console.log(Paris);
// Paris.render();


// let Lima = {
//     storeName : 'Lima',
//     //min/max hourly customers
//     minHCustomers: 2,
//     maxHCustomers: 16,
//     AvgCookie: 4.6,
  
//     customerPerH:[],
//     Total:0,
//     salesArray:[],
//     getNumberOfCustomer: function(min ,max){
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
    
//    getsales:function(){
//        for(let i =0;i < hour.length;i++){
//         this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
//         this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
//         this.Total += this.salesArray[i];
    
//        }
      
//    },


// render :function(){

// let h2Element = document.createElement('h2');
// contaner.appendChild(h2Element);
// h2Element.textContent = this.storeName;
// let ulElement = document.createElement('ul');
// contaner.appendChild(ulElement);

// for(let i =0; i < this.salesArray.length;i++){
//     let liElement = document.createElement('li');
//     liElement.textContent = `${hour[i]} : ${this.salesArray[i]} cookies`;
//    // hour[i]+':'+this.salesArray[i]+'cookies';
//    ulElement.appendChild(liElement);
    
// }

// let liElement = document.createElement('li');
// ulElement.appendChild(liElement);
// liElement.textContent = `total : ${this.Total} cookies`;

// }
// };

// Lima.getsales();
// console.log(Lima);
// Lima.render();
// //random number of customers per hour[]->array
// //for each customer i shold do n sales array
// //sales will be [random number from (random number of customers per hour)*avg]
