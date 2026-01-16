<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first_name'];
    $lastName = $_POST['second_name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // SMTP настройки
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // 🟡 ВАЖНО: Замени с твоя Gmail и App Password
        $mail->Username = 'kagoitanachi@gmail.com';
        $mail->Password = 'bmyi ceag jpmj seyj'; // Не е паролата ти, виж по-долу

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // От кого е имейлът
        $mail->setFrom($email, "$firstName $lastName");

        // До кого да бъде изпратен
        $mail->addAddress('kagoitanachi@gmail.com');

        // Съдържание
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = "Име: $firstName $lastName\nEmail: $email\n\nСъобщение:\n$message";

        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'the message was successfully sent.']);
		exit;
    } catch (Exception $e) {
        echo "Имейл не беше изпратен. Грешка: {$mail->ErrorInfo}";
    }
}
?>
