
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

 var idcounter;
 var datab;

//alert("new run5");

        setInterval(function(){

          if(window.sendFirebase)
          {
            alert("text");
            alert(window.paymentmethod);

              var ref = firebase.database().ref("idcounter/");

              ref.on("value", function(data) {
                datab = data.val();
               // console.log(datab);

              //  alert(datab['id']);
                idcounter = parseInt(datab['id']);
              }, function (error) {
                console.log("Error: " + error.code);
              });


              var idcounter = idcounter +1;

              writeParData(idcounter,window.email,window.first,window.last,window.genderstore,window.tel,window.weight,window.tsize,window.state,window.country,window.occupation);





              firebase.database().ref('idcounter').set({
                id: idcounter
              });


                                    if(window.paymentmethod=='bank')
                                    {

                                        sendEmailBank();
                                        alert("email bank sent");
                                        //window.paymentmethod == '';
                                        window.paymentmethod='done';

                                  }
                                  else if (window.paymentmethod=='meet') {

                                    sendEmailMeet();
                                    alert("email meet sent");
                                    //window.paymentmethod == '';
                                    window.paymentmethod='done';

                                }

              window.sendFirebase=false;
          }



        },100);

        alert("yoohoo1");

        setInterval(function(){





           },100);


/*var idCounter = 077;
return firebase.database().ref('idcounter/'+ idCounter).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
  alert(username);
  // ...
});*/


}());
