//Variables for header and section elements 
let header = document.querySelector('header');
let section = document.querySelector('section');

//Variable to store request URL 
let requestURL = "https://jasonasselin.github.io/Test9/deals.json";

//XHR object 
let request = new XMLHttpRequest(); 

//Opening a new request
request.open('GET', requestURL);

//Setting up the request to accept JSON
request.responseType = 'json';

//Sending the request  
request.send();


// Step Seven - adding an event handler that listens for onload event of the JSON file/object 
request.onload = function() {
  let iScreamInc = request.response; 
  console.log(iScreamInc);
  populateHeader(iScreamInc); 
  weirdDeals(iScreamInc);  
}

// Step Eight - set up populateHeader function to fill in the header function 
function populateHeader(jsonObj) {
  
  // grab the company name from JSON object and then create a new element, adding text and appending to the header
  
  let headerH1 = document.createElement('h1'); 
  headerH1.textContent = jsonObj['main'];
  header.appendChild(headerH1);
  
  //grab the company info and established date and add a new paragraph to your HTML that displays this info 
  
  let headerPara = document.createElement('p');
  headerPara.textContent = 'Check out the top 5 ' + jsonObj['main'];
  header.appendChild(headerPara);
}

// define the topflavours function to show the flavours

function weirdDeals(jsonObj) {
  
  //bind top flavours object to a variables 
  let weirdDeals = jsonObj['weirdDeals'];
  
  for (let i = 0; i < weirdDeals.length; i++) {
    //create a few different elements 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');
    
    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://jasonasselin.github.io/Test9/images/' + weirdDeals[i].image);
    img.setAttribute('alt', weirdDeals[i].image );
    
    h2.textContent = weirdDeals[i].name; 
    p1.textContent = 'Price: $' + weirdDeals[i].price;
    p2.textContent = 'Description: ' + weirdDeals[i].description;
    
    let features = weirdDeals[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li'); 
      listItem.textContent = features[j];
      list.appendChild(listItem); 
    }
    
    // Append each element to article, then append article to section 
    
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article); 
     
  }

}

  

