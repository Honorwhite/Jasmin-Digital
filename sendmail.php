<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['conName'];
    $lastname = $_POST['conLName'];
    $email = $_POST['conEmail'];
    $phone = $_POST['conPhone'];
    $message = $_POST['conMessage'];

    $to = "jasmindigitalsocial@gmail.com";
    $subject = "Yeni İletişim Formu Mesajı - Jasmin Digital";
    
    $email_content = "İsim: $name $lastname\n";
    $email_content .= "E-posta: $email\n";
    $email_content .= "Telefon: $phone\n";
    $email_content .= "Mesaj:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Mesajınız başarıyla gönderildi.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Mesaj gönderilirken bir hata oluştu.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Geçersiz istek.']);
}
?> 