var i=0;
function selectTab(tabNo){
   console.log(tabNo);

   document.getElementsByClassName("show")[0].classList.add("hide");
   document.getElementsByClassName("show")[0].classList.remove("show");
   
    document.getElementById("tabcontent-"+ tabNo).classList.remove("hide");
    document.getElementById("tabcontent-"+ tabNo).classList.add("show");

    if(i!=0){
        document.getElementsByClassName("active")[0].classList.remove("active");
    }
    document.getElementById("tab-" + tabNo).classList.add("active");
    i = i+1
}

function checkForm(){
    let val1 = document.forms["contactUs"]["name"].value;
    let val2 = document.forms["contactUs"]["message"].value;
    if (val1 == ""){
        document.getElementById("erro1").innerHTML=" This filed couldn't be empty";
        return false;
    }
    if (val2 == ""){
        document.getElementById("erro2").innerHTML=" This filed couldn't be empty";
        return false;
    }

}

//pre loader

window.addEventListener("load",function(){
    document.querySelector(".loader").classList.add("hide");
});