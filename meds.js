function addToList () {
    // create the list of meds
    var node = document.createElement("Li");
  
    // parse in the values from the form
    var medname = document.getElementById("medname").value;
    var purposeButtons = document.getElementsByName("purpose"); 
    var purpose = "";
    for(let i = 0; i < purposeButtons.length; i++) { 
        if(purposeButtons[i].checked) {
          purpose = purposeButtons[i].value; 
        }
    }
    var range = document.getElementById("medRange").value;
    var tablets = document.getElementById("tablets").value;
    var takeWith = document.getElementById("takeWith").value;
    var additional = document.getElementById("additional").value;
  
    var entry = "Medication name: " + medname + "\n" + "Purpose: " + purpose + "\n" + "Dosage: " + range + "\n"
    + "Quantity of tablets: " + tablets + "\n" + "Take With: " + takeWith + "\n" + "Additional Info: " + additional + "\n";  
   console.log("print statement!!");   
  
    // make a line of text
    var textnode=document.createTextNode(entry);
    // add the text to the list
    node.appendChild(textnode);
    // add the list to the html file
    document.getElementById("list_item").appendChild(node);
}