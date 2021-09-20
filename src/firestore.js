import { db } from './config.js';

const user_data={
    name: 'Mukul Kolpe',
    email: 'mukulkolpe45@gmail.com',
    phone: '1117772228',
    address: 'hjkjbkjbjb',
    city: 'Mumbai'
};

db.collection("items")
  .doc("1")
  .get()
  .then((doc) => {
    console.log(doc.data());
  }).catch((err) => {
    console.log(err);
    });


db.collection("items")
  .doc("2")
  .set(user_data)
  .then(() => {
    console.log("Item added to the database");
  })
  .catch((err) => {
    console.log(err);
  });

db.collection('items').doc('2').onSnapshot(
    function(doc){
        console.log(doc.data());
    }
    )