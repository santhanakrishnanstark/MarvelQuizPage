var i=1;  var k=1; var score=0;  var name; var review=0;
    $(".msg1").hide();
    $(".msg2").hide();
     $(".msg3").hide();
     $(".msg4").hide();
    $(".msg5").hide();

$(document).ready(function(){
    
     $(".msg1").fadeIn(2000);
    $(".msg2").fadeIn(4000);
     $(".msg3").fadeIn(4000);
     $(".msg4").fadeIn(4000);
     $(".msg5").fadeIn(4000);
    
    $(".marvelquestion .questions").hide();
    $("#sbut").bind("click",storeName);
    $(".msg5").bind("click",nextQ); 
    $("#one").bind("click",addOneStar);
    $("#two").bind("click",addTwoStar);
    $("#three").bind("click",addThreeStar);
    $("#four").bind("click",addFourStar);
    $("#five").bind("click",addFiveStar);
});

 function nextQ(){
       var ans=$("input[name=qs"+(i)+"]:checked").val();
       checkAnswer(ans); 
     //move to next question
     $("#intro").hide(1000);
        if(i<=10){ 
            $(".questions").hide(); $("#q"+(i+1)+"").show().addClass("animate");
            i++;
         }
        else
        { alert('quiz end');
        }
    }
function show(){
    var dbref = firebase.database().ref();
    dbref.child("Fans").child(name).child("Score").set(score);
    $("#s").text('Your Score is out of 10 : '+score);
}
function storeName(){
     name=$(".msg4").val();
    var dbref = firebase.database().ref();
    dbref.child("Fans").child(name).child("Name").set(name);
     $("#intro").hide(1000);
    $(".questions").hide(); $("#q1").show().addClass("animate");
}
 
function checkAnswer(a){
    var ans="";
    var fireref = firebase.database().ref().child("Answers/q"+k+"");
    fireref.on('value',function(snapshot){
         ans= snapshot.val();
        if(ans == a){
            score+=1; 
           // alert('right');
        } else{ 
           // alert('wrong'); 
        }
        k++;
    });
    
}

function addOneStar(){
    $("#one").toggleClass("checked");
    review+=1;
    var dbref = firebase.database().ref();
    dbref.child("Fans").child(name).child("Review").set(review);
}

function addTwoStar(){
    $("#one,#two").toggleClass("checked");
    review+=2;
     var dbref = firebase.database().ref();
    dbref.child("Fans").child(name).child("Review").set(review);
}
function addThreeStar(){
    $("#one,#two,#three").toggleClass("checked");
    review+=3;
     var dbref = firebase.database().ref();
    dbref.child("Fans").child(name).child("Review").set(review);
}
function addFourStar(){
    $("#one,#two,#three,#four").toggleClass("checked");
    review+=4;
     var dbref = firebase.database().ref();
    dbref.child("Fans").child(name).child("Review").set(review);
}
function addFiveStar(){
    $("#one#one,#two,#three,#four,#five").toggleClass("checked");
    review+=5;
     var dbref = firebase.database().ref();
    dbref.child("Fans").child(name).child("Review").set(review);
}
