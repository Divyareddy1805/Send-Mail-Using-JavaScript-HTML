# Send-Mail-Using-JavaScript-HTML
//HTML CODE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <label for="name":>Name</label>
            <input id="name"type="text>"
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email"type="email"
        </div>
    <div>
        <label for="mobile">Mobile:</label>
        <input id="mobile"type="text">
    </div>
    <div>
        <label for="message">Messge:</label>
        <input id="message"type="text">
    </div>
    <div>
        <button Onclick="sendMail()"type="Submit">Submit</button>
    </div>
</body>
</html>
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "h4g7YeqvbOsU4hq8c",
      });
   })();
</script>
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
