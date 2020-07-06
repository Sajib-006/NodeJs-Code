const { forOwn } = require("lodash");

function func (a){
    console.log(a);
};

fun= (a) => {
    console.log(a);
};


func('sajib');
fun('uddip');

var obj = (id,name)=> ( {id:id, name:name} );
obj(4,'sajib');
console.log(obj);
console.log(obj.id, obj.name);

var obj2 = function setNameIds(id, name) {
    return {
      id: id,
      name: name
    };
  };
console.log(obj2);

const smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
  ];
smartPhones.forEach(sm =>{
    console.log(sm.name,sm.price);
});

// ES5
var prices = smartPhones.map(function(smartPhone) {
    return smartPhone.price;
  });
  
  console.log(prices); // [649, 576, 489]

// ES6
const prices2 = smartPhones.map(smartPhone => smartPhone.price);
console.log(prices2); // [649, 576, 489]

const blogs = [
    {title: 'How to keep fit', snippet: 'Health'},
    {title: 'How to program in C', snippet: 'Programming'},
    {title: 'Taking balance diet', snippet: 'Health'},
    {title: 'How to learn node.js', snippet: 'Programming | Node.js'}
];
var articles = [
    {title: "Man Discovers Different Opinion", author: "Reginald", date: "9/2/45"},
    {title: "Tigers Aren't Great Pets", author: "Simon", date: "4/13/95"},
    {title: "Eating Cake for Breakfast", author: "Katie", date: "8/20/13"}
];

if(blogs.length >0){ 
     blogs.forEach(blog => { 
        console.log(blog.title)
        console.log( blog.snippet)
    })
    
} 

<% if(blogs.length >0){ %>
    <% blogs.forEach(blog => { %>
        <h3 class="title"><%= blog.title %></h3>
        <p class="snippet"><%= blog.snippet %> </p>
    <% }) %>
    
<% } %>

<% comments.forEach(function(comment){ %>
    <p><strong><%= comment.author %></strong></p>
    <p><%= comment.content %></p>
<% }) %>