function updateDocType(){

    var select = document.getElementById('docType');
    // var selectDocType = select.options[select.selectedIndex].text;
    var selectDocType = select.options[select.selectedIndex].value;
    console.log(selectDocType);

    // if(selectDocType == "docType-2"){
        
    // }
    document.getElementsByClassName("show")[0].classList.add("hide");
    document.getElementsByClassName("show")[0].classList.remove("show");
    console.log("list-"+selectDocType);
    document.getElementById("list-"+selectDocType).classList.remove("hide");
    document.getElementById("list-"+selectDocType).classList.add("show");
}