(function(){


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD060gGJBBETuyFa8x2eAJ_mxwwTx2rhes",
    authDomain: "kuching-powerlifting-1.firebaseapp.com",
    databaseURL: "https://kuching-powerlifting-1.firebaseio.com",
    projectId: "kuching-powerlifting-1",
    storageBucket: "kuching-powerlifting-1.appspot.com",
    messagingSenderId: "400604160536"
  };
  firebase.initializeApp(config);



var database = firebase.database();




//writeUserData(1000,"ernest","ernestsoo22@gmail.com");


function writeParData(userId,email,first,last,gender,tel,weight,tsize){
  alert("called");
  firebase.database().ref('id1/' + userId).set({
    email: email,
    first:first,
    last:last,
    gender:gender,
    tel:tel,
    weight:weight,
    tsize:tsize
  });
  alert("success run addRecord.");
  
}

alert("new run1");

        setInterval(function(){
            
          if(window.sendFirebase)
          {
              writeParData(0006,window.email,window.first,window.last,window.genderstore,window.tel,window.weight,window.tsize);
              window.sendFirebase=false;
          }


        },10);




}());