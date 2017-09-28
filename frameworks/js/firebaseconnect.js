
      <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

        


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

emailjs.init("user_1J2Jq55nrOHLMGy7n5fLf");

emailjs.send("gmail","registration_complete",{name: "James", notes: "Check this out!"});
//writeUserData(1000,"ernest","ernestsoo22@gmail.com");

alert("email sent");

function writeParData(userId,email,first,last,gender,tel,weight,tsize,state,country,occupation){
  //alert("called");
  firebase.database().ref('id1/' + userId).set({
    email: email,
    first:first,
    last:last,
    gender:gender,
    tel:tel,
    weight:weight,
    tsize:tsize,
    state:state,
    country:country,
    occupation:occupation
  });
 // alert("success run addRecord.");
  
}



//alert("new run1");

        setInterval(function(){
            
          if(window.sendFirebase)
          {
              writeParData(0007,window.email,window.first,window.last,window.genderstore,window.tel,window.weight,window.tsize,window.state,window.country,window.occupation);
              window.sendFirebase=false;
          }


        },10);

/*var idCounter = 077;
return firebase.database().ref('idcounter/'+ idCounter).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
  alert(username);
  // ...
});*/


}());