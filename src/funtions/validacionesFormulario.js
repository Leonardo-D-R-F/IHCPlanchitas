alert("CARGO");
function takeOutOrderType(){
   let  typeOrder = document.getElementById("typeOrder").value;
   if (typeOrder === "PARA MESA"){
    console.log("Creando")
    document.getElementById("containerAmountOfPeople").innerHTML = '<div class="" id="amountOfPeople">'+
    '<div class="">'+
      '<label for="validationCustom01" class="form-label text-white" >Cantidad de personas</label>'+
  '</div>'+
    '<div>'+
       '<select class="form-control form-select"  id="hour" aria-label=" select example" required>'+
          '<option selected disabled value="">De 1 a 8</option>'+
          '<option value="1">1</option>'+
           ' <option value="2">2</option>'+
           ' <option value="3">3</option>'+
            '<option value="4">4</option>'+
            '<option value="5">5</option>'+
            '<option value="6">6</option>'+
            '<option value="7">7</option>'+
            '<option value="8">8</option>'+
          
        '</select>'+
        '<div class="invalid-feedback">'+
            'El campo Cantidad de personas es requerido.'+
          '</div>'+
    '</div>'+
  '</div> ;';
   }else{
     
    document.getElementById("containerAmountOfPeople").innerHTML = "";

   }
}

  function confirmOrder() {
    validated = true;
    verifyDate();   
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            if (!form.checkValidity()) {
              validated=false;
            }
            form.classList.add('was-validated')
        })
            if (validated) {
                Swal.fire({
                    title: 'El pedido se a realizado con exito',
                    text: 'revise su whatsapp con los detalles de confirmacion de su Orden',
                    icon: 'success',
                    allowOutsideClick: false,
                    confirmButtonText: 'Aceptar'
                }).then((result) => { 
                    if (result.isConfirmed) {
                        window.location.href = "menu.html";
                    }
                })
            }
}
function theDateIsWeekendOrNull() {
  let booleanResponse = false;
  let formDateValue = new Date(document.getElementById("txtDate").value);
  let day = formDateValue.getDay();
  if (formDateValue == "Invalid Date"){
    booleanResponse = true;
  }
  return booleanResponse; 
}
function verifyDate(){
  let selectedDate = document.getElementById("txtDate");
  if(theDateIsWeekendOrNull()){
    selectedDate.classList.add("is-invalid");
    selectedDate.classList.add("dateError");
    selectedDate.classList.remove("dateValid");
    selectedDate.classList.remove("is-valid");
    validated = false;
  }else{
    selectedDate.classList.remove("is-invalid");
    selectedDate.classList.add("dateValid");
    selectedDate.classList.remove("dateError");
    selectedDate.classList.add("is-valid");
    validated = true;
  }
}
function addAttributeForMindate(){
  let dateToday = new Date();
  let month = dateToday.getMonth() + 1;
  let day = dateToday.getDate()+1;
  var year = dateToday.getFullYear();

  let daysInMonth = new Date(year,month,0).getDate();
 
  if(daysInMonth===day){
      month = month + 1 ;
      day = 0; 
  }
  if(month < 10)
      month = '0' + month.toString();
  if(day < 10)
      day = '0' + day.toString();
  let minDate = year + '-' + month + '-' + day;
  document.getElementById("txtDate").setAttribute("min", minDate);
}  

addAttributeForMindate();