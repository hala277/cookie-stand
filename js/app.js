'use strict';
let contaner = document.getElementById('salesCookies');



let Seattle = {
    storeName : 'Seattle',
    //min/max hourly customers
    minHCustomers: 23,
    maxHCustomers: 65,
    AvgCookie: 6.3,
    hour : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    customerPerH:[],
    Total:0,
    salesArray:[],
    getNumberOfCustomer: function(min ,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    
   getsales:function(){
       for(let i =0;i < this.hour.length;i++){
        this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
        this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
        this.Total += this.salesArray[i];
    
       }
      
   },


render :function(){

let h2Element = document.createElement('h2');
contaner.appendChild(h2Element);
h2Element.textContent = this.storeName;
let ulElement = document.createElement('ul');
contaner.appendChild(ulElement);

for(let i =0; i < this.salesArray.length;i++){
    let liElement = document.createElement('li');
    liElement.textContent = `${this.hour[i]} : ${this.salesArray[i]} cookies`;
   // hour[i]+':'+this.salesArray[i]+'cookies';
   ulElement.appendChild(liElement);
    
}

let liElement = document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent = `total : ${this.Total} cookies`;

}
};
//Seattle.getNumberOfCustomer(23,65);
Seattle.getsales();
console.log(Seattle);
Seattle.render();


let Tokyo = {
    storeName : 'Tokyo',
    //min/max hourly customers
    minHCustomers: 3,
    maxHCustomers: 24,
    AvgCookie: 1.2,
    hour : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    customerPerH:[],
    Total:0,
    salesArray:[],
    getNumberOfCustomer: function(min ,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    
   getsales:function(){
       for(let i =0;i < this.hour.length;i++){
        this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
        this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
        this.Total += this.salesArray[i];
    
       }
      
   },


render :function(){

let h2Element = document.createElement('h2');
contaner.appendChild(h2Element);
h2Element.textContent = this.storeName;
let ulElement = document.createElement('ul');
contaner.appendChild(ulElement);

for(let i =0; i < this.salesArray.length;i++){
    let liElement = document.createElement('li');
    liElement.textContent = `${this.hour[i]} : ${this.salesArray[i]} cookies`;
   // hour[i]+':'+this.salesArray[i]+'cookies';
   ulElement.appendChild(liElement);
    
}

let liElement = document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent = `total : ${this.Total} cookies`;

}
};

Tokyo.getsales();
console.log(Tokyo);
Tokyo.render();


let Dubai = {
    storeName : 'Dubai',
    //min/max hourly customers
    minHCustomers: 11,
    maxHCustomers: 38,
    AvgCookie: 3.7,
    hour : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    customerPerH:[],
    Total:0,
    salesArray:[],
    getNumberOfCustomer: function(min ,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    
   getsales:function(){
       for(let i =0;i < this.hour.length;i++){
        this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
        this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
        this.Total += this.salesArray[i];
    
       }
      
   },


render :function(){

let h2Element = document.createElement('h2');
contaner.appendChild(h2Element);
h2Element.textContent = this.storeName;
let ulElement = document.createElement('ul');
contaner.appendChild(ulElement);

for(let i =0; i < this.salesArray.length;i++){
    let liElement = document.createElement('li');
    liElement.textContent = `${this.hour[i]} : ${this.salesArray[i]} cookies`;
   // hour[i]+':'+this.salesArray[i]+'cookies';
   ulElement.appendChild(liElement);
    
}

let liElement = document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent = `total : ${this.Total} cookies`;

}
};

Dubai.getsales();
console.log(Dubai);
Dubai.render();


let Paris = {
    storeName : 'Paris',
    //min/max hourly customers
    minHCustomers: 20,
    maxHCustomers: 38,
    AvgCookie: 2.3,
    hour : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    customerPerH:[],
    Total:0,
    salesArray:[],
    getNumberOfCustomer: function(min ,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    
   getsales:function(){
       for(let i =0;i < this.hour.length;i++){
        this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
        this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
        this.Total += this.salesArray[i];
    
       }
      
   },


render :function(){

let h2Element = document.createElement('h2');
contaner.appendChild(h2Element);
h2Element.textContent = this.storeName;
let ulElement = document.createElement('ul');
contaner.appendChild(ulElement);

for(let i =0; i < this.salesArray.length;i++){
    let liElement = document.createElement('li');
    liElement.textContent = `${this.hour[i]} : ${this.salesArray[i]} cookies`;
   // hour[i]+':'+this.salesArray[i]+'cookies';
   ulElement.appendChild(liElement);
    
}

let liElement = document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent = `total : ${this.Total} cookies`;

}
};

Paris.getsales();
console.log(Paris);
Paris.render();


let Lima = {
    storeName : 'Lima',
    //min/max hourly customers
    minHCustomers: 2,
    maxHCustomers: 16,
    AvgCookie: 4.6,
    hour : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    customerPerH:[],
    Total:0,
    salesArray:[],
    getNumberOfCustomer: function(min ,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    
   getsales:function(){
       for(let i =0;i < this.hour.length;i++){
        this.customerPerH.push(this.getNumberOfCustomer(this.minHCustomers,this.maxHCustomers));
        this.salesArray.push(Math.ceil(this.customerPerH[i]*this.AvgCookie));
        this.Total += this.salesArray[i];
    
       }
      
   },


render :function(){

let h2Element = document.createElement('h2');
contaner.appendChild(h2Element);
h2Element.textContent = this.storeName;
let ulElement = document.createElement('ul');
contaner.appendChild(ulElement);

for(let i =0; i < this.salesArray.length;i++){
    let liElement = document.createElement('li');
    liElement.textContent = `${this.hour[i]} : ${this.salesArray[i]} cookies`;
   // hour[i]+':'+this.salesArray[i]+'cookies';
   ulElement.appendChild(liElement);
    
}

let liElement = document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent = `total : ${this.Total} cookies`;

}
};

Lima.getsales();
console.log(Lima);
Lima.render();
//random number of customers per hour[]->array
//for each customer i shold do n sales array
//sales will be [random number from (random number of customers per hour)*avg]

