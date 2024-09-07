--javascript code
function sendmail(){
    var params ={
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_093u6ex","template_pbhvj1f"params).then(function(res){
        alert("email sent succesfully");
    })
}
