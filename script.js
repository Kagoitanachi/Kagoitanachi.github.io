<script>
document.getElementById("emailconteineremailconteiner").addEventListener("send", function(e){
    e.preventDefault(); // Спира презареждането

    const formData = new FormData(this);

    fetch("send_email_with_phpmailer.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        showPopup(data);
        document.getElementById(emailconteiner).reset(); // по избор
    })
    .catch(err => {
        showPopup("Something gone wrong. The message didn't send..");
    });
});

function showPopup(message) {
    const popup = document.getElementById("popup");
    popup.innerText = message;
    popup.style.display = "block";
    popup.style.opacity = 1;

    setTimeout(() => {
        popup.style.opacity = 0;
        setTimeout(() => popup.style.display = "none", 500);
    }, 4000); // Показва се за 4 секунди
}
</script>