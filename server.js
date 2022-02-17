require('dotenv').config()
const express = require('express');
const app = express();
const fruits = require('./models/fruits'); // importing fruits from wherever it is
const vegetables = require('./models/vegetable'); // importing fruits from wherever it is

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//MIDDLEWARE\\
//app.use is what we use to set middleware
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.body)
    next()
})

//INDEX week10day3
app.get('/fruits', (req, res) => {
    res.render('fruits/Index', { fruits })
});
app.get('/vegetables', (req, res) => {
    res.render('vegetables/Index', { vegetables })
});
//NEW 
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})


//DELETE

//UPDATE


//CREATE

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})


app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
})


//EDIT

//SHOW week10day3

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
   res.render('fruits/Show', {
       fruit: fruits[req.params.indexOfFruitsArray]
   })
})
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('vegetables/Show', {
        vegetable: vegetables[req.params.indexOfVegetablesArray]
    })
 })

app.listen(3000, () => {
    console.log('If your reading this Im still listening');
})
















// // load express
// const express = require('express');


// //create our expres app by invoking

// const app = express();
// // imported all the data from fruits JS
// const  fruits = require('./models/fruits.js')

// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

// const React = require('react')
// class Show extends React.Component {
//    render () {
//     return (
//       <h1> Show Page </h1>
//      );
//     }
//  }
//  module.exports  = Show;

// // create fruit array and save it in the variable  called fruits aka fake database

// // const fruits = ['apple', 'banana', 'pear'];
// //  create a route  with a parameter called indexoffruitsarray

// // app.get('/:indexOfFruitsArray', (req, res) => {
// //     res.send(fruits[req.params.indexOfFruitsArray]);
// // });


// // setting new parameters then we call  localhost:3000/hello/bob/bobbybob in the browser
// // : seperates the parameter
// // You can also type messare by using/
// // every req response is different
// // the variables are called url parameters and accessible
// //blavity

// // app.get('/hello/:firstname/:lastname', (req, res) => {
// // 	console.log(req.params);
// //     console.log(req.query)
// // 	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
// // });
// // const fruits = [
// //     {
// //         name:'apple',
// //         color: 'red',
// //         readyToEat: true
// //     },
// //     {
// //         name:'pear',
// //         color: 'green',
// //         readyToEat: false
// //     },
// //     {
// //         name:'banana',
// //         color: 'yellow',
// //         readyToEat: true
// //     }
// // ];

// //INDEX WEEK10DAY3
// // creating the index route
// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });
// // new 
// //put this above your Show route
// app.get('/fruits/new', (req, res) => {
//     res.render('new');
// });






// //add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// })
// class Index extends React.Component {
//     render() {
//         const { fruits } = this.props;
//         return (
//                 <div>
//                     <h1>Fruits Index Page</h1>
//                     <ul>
//                         {fruits.map((fruit, i) => {
//                             return (
//                                 <li>
//                                     The{' '}
//                                     <a href={`/fruits/${i}`}>
//                                         {fruit.name}
//                                     </a>{' '}
//                                     is {fruit.color} <br></br>
//                                     {fruit.readyToEat
//                                         ? `It is ready to eat`
//                                         : `It is not ready to eat`}
//                                     <br />
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>
//         );


// app.listen(3000,() => {
//     console.log('If your reading this Im still listening');
// });


// CRUD create,read,update and delete data.


//
// HTTP Action-CRUD Operator
// GET-	Read
// POST-Create
// PUT-Update
// DELETE-Delete


// URL-	HTTP Verb-Action Used For
// /photos/	-GET-index-	Displaying a list of all photos
// /photos/new	-GET-new-Display HTML form for creating a new photo
// /photos-	POST-create-Create a new photo
// /photos/:id	-GET-show-Display a specific photo
// /photos/:id/edit	-GET-edit-Return an HTML form for editing a photo
// /photos/:id	-PATCH/PUT-update-Update a specific photo
// /photos/:id	-DELETE	-destroy-Delete a specific photo


// In your own words, describe MVC.-This helps organize the data
// - Models are the cook
    // - prepares food/data
    // - Views are the customer
    //     - consumes food/data
    // - Controllers are the waiter
    //     - brings food from cook to customer
    //     - has no idea how food/data is prepared
    //     - has no idea how the food/data is consumed
// What does the acronym INDUCES stand for
// What is and Index Route and How does it differ from a Show Route?