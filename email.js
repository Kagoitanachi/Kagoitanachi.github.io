const form = document.querySelector('from');

function sendEmail(){

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kagoitanachi@gmail.com",
    Password : "1EB5821E847C861A724DB0BBFA4E0450C4FA",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}