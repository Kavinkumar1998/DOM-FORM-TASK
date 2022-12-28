var formsubmit=document.querySelector(".details")
formsubmit.addEventListener("submit",(e)=>{
    e.preventDefault();
    var firstName=document.querySelector('[placeholder="Enter your firstname"]')
    var lastName=document.querySelector('[placeholder="Enter your lastname"]')
    var address=document.querySelector('[placeholder="Enter your address"]')
    var pincode=document.querySelector('[placeholder="Enter your area pincode"]')
    var gender=document.querySelector('.gender')
    var ChoiceOfFood=document.querySelector('.foods')
    var State=document.querySelector('.state')
    var Country=document.querySelector('.Country')
    var TableRow= document.createElement('tr')
    var TableDatas= [firstName,lastName,address,pincode,gender,ChoiceOfFood,State,Country]
    for(var i=0;i<TableDatas.length;i++){
       var tabletext = document.createElement('td')
       tabletext.innerText = TableDatas[i].value
    TableRow.appendChild(tabletext)
}
document.querySelector('tbody').appendChild(TableRow)
for(let i of TableDatas){
   i.value = ""
}
})