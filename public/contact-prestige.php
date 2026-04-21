<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

error_reporting(E_ALL);
ini_set("display_errors", 0); // set 1 for debugging
$response = ["status" => "error", "message" => "Invalid request"];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer/PHPMailer.php';
require 'libs/PHPMailer/SMTP.php';
require 'libs/PHPMailer/Exception.php';

$email_host = 'smtp.hostinger.com';
$email_username = 'contact@yulaglobus-neo.com';
$email_password = 'YulaGroup@1'; // replace
$email_port = 587;

// Database credentials
$servername = "localhost";
$username = "u265939643_yula";
$password = "Yula-Globus@1";
$dbname = "u265939643_yula";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $phone = htmlspecialchars($_POST['mobile'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (!$name || !$email || !$message) {
        echo json_encode(["status" => "error", "message" => "Missing required fields!"]);
        exit;
    }

    // Save to database
    $stmt = $conn->prepare("INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $message);
    $stmt->execute();
    $stmt->close();

    try {
        // Send to Admin
        $adminMail = new PHPMailer(true);
        $adminMail->isSMTP();
        $adminMail->Host = $email_host;
        $adminMail->SMTPAuth = true;
        $adminMail->Username = $email_username;
        $adminMail->Password = $email_password;
        $adminMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $adminMail->Port = $email_port;

        $adminMail->setFrom($email_username, 'Yula Group');
        $adminMail->addAddress('peracause@gmail.com');
        // $adminMail->addAddress('rakesh.tattvahilife@gmail.com');
        // $adminMail->addAddress('rakeshnia11@gmail.com');
        $adminMail->Subject = 'New Contact Form Submission';
        $adminMail->isHTML(true);
        $adminMail->Body = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f5f7fa; padding:20px; margin:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
    <tr>
      <td style="background:#004aad; color:#ffffff; padding:20px; text-align:center; border-top-left-radius:8px; border-top-right-radius:8px;">
        <h2 style="margin:0;">📩 New Contact Submission</h2>
      </td>
    </tr>
    <tr>
      <td style="padding:20px; color:#333333;">
        <p style="margin:0 0 15px;">A new inquiry has been received from the website:</p>
        <table cellpadding="8" cellspacing="0" width="100%" style="border-collapse:collapse;">
          <tr style="background:#f9f9f9;">
            <td width="30%" style="font-weight:bold;">Name:</td>
            <td>' . $name . '</td>
          </tr>
          <tr>
            <td style="font-weight:bold;">Email:</td>
            <td>' . $email . '</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="font-weight:bold;">Phone:</td>
            <td>' . $phone . '</td>
          </tr>
          <tr>
            <td style="font-weight:bold;">Message:</td>
            <td>' . $message . '</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background:#f0f0f0; padding:15px; text-align:center; font-size:12px; color:#666;">
        This is an automated email from <strong>Yula Group Website</strong>.
      </td>
    </tr>
  </table>
</body>
</html>';
        $adminMail->send();

        // Send Auto Reply to User
        $userMail = new PHPMailer(true);
        $userMail->isSMTP();
        $userMail->Host = $email_host;
        $userMail->SMTPAuth = true;
        $userMail->Username = $email_username;
        $userMail->Password = $email_password;
        $userMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $userMail->Port = $email_port;

        $userMail->setFrom($email_username, 'Yula Group');
        $userMail->addAddress($email);
        $userMail->Subject = 'Thank You for Contacting Yula Group!';
        $userMail->isHTML(true);
        $userMail->Body = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Thank You for Contacting Us</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f5f7fa; padding:20px; margin:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
    <tr>
      <td style="background:#004aad; color:#ffffff; padding:20px; text-align:center; border-top-left-radius:8px; border-top-right-radius:8px;">
        <h2 style="margin:0;">Thank You, ' . $name . '!</h2>
      </td>
    </tr>
    <tr>
      <td style="padding:20px; color:#333333;">
        <p>We have received your inquiry and truly appreciate your interest in <strong>Yula Group</strong>.</p>
        <p>Our team will review your request and get back to you shortly.</p>
        <p style="margin:20px 0; padding:15px; background:#f9f9f9; border-left:4px solid #004aad;">
          <strong>If you need immediate assistance:</strong><br>
           Email: <a href="mailto:contact@yulaglobus-neo.com">contact@yulaglobus-neo.com</a><br>
           Phone: +91 88970 35800
        </p>
        <h3 style="margin-top:20px;">Your Submitted Details:</h3>
        <table cellpadding="8" cellspacing="0" width="100%" style="border-collapse:collapse;">
          <tr style="background:#f9f9f9;">
            <td width="30%" style="font-weight:bold;">Name:</td>
            <td>' . $name . '</td>
          </tr>
          <tr>
            <td style="font-weight:bold;">Phone:</td>
            <td>' . $phone . '</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="font-weight:bold;">Email:</td>
            <td>' . $email . '</td>
          </tr>
          <tr>
            <td style="font-weight:bold;">Message:</td>
            <td>' . $message . '</td>
          </tr>
        </table>
        <p style="margin-top:25px;">Best Regards,<br><strong>Yula Group Team</strong></p>
      </td>
    </tr>
    <tr>
      <td style="background:#f0f0f0; padding:15px; text-align:center; font-size:12px; color:#666;">
        ' . date("Y") . ' Yula Group. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>';

        $userMail->send();

        $response = ["status" => "success", "message" => "Emails sent successfully!"];
    } catch (Exception $e) {
        $response = ["status" => "error", "message" => "Mailer Error: " . $e->getMessage()];
    }
}

echo json_encode($response);
exit;
