<?php
// Файлы phpmailer
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/POP3.php';
require 'PHPMailer/src/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$tel = $_POST['tel'];
$radio = $_POST['private'];

// Настройки PHPMailer
$mail = new PHPMailer();
try {
  $mail->isSMTP();   
  $mail->CharSet = "utf-8";
  $mail->SMTPAuth   = true;
  $mail->SMTPDebug = 1;

  // Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'shodik91@gmail.com'; // Логин на почте
  $mail->Password   = 'RasamaxaMdd6035438@'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('noreply@example.com', 'Mailer');// Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('shodik91@gmail.com', 'Владельцу ресурса chinalaw.ru');  
  // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

  // Формирование самого письма
  $title = "Заголовок письма";
  $body = "<h1>Новая заявка с сайта</h1>";

  if(trim(!empty($name))) {
    $body.='<p><strong>Имя:</strong> '.$name.'</p>';
  }

  if(trim(!empty($tel))) {
    $body.='<p><strong>Телефон:</strong> '.$tel.'</p>';
  }

  if(trim(!empty($radio))) {
    $body.='<p><strong>Недвижимость:</strong> '.$radio.'</p>';
  }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    
  $mail->send();

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}