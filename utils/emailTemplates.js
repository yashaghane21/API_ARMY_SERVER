const registrationTemplate = (email) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to API Army</title>
  <style>
    body, html { margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; }
    .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden; }
    .header { background-color: #1a73e8; color: #ffffff; text-align: center; padding: 20px; }
    .header h1 { margin: 0; font-size: 24px; }
    .body { padding: 20px; color: #333333; }
    .body h2 { font-size: 20px; margin-top: 0; color: #1a73e8; }
    .body p { font-size: 16px; margin: 10px 0; }
    .footer { background-color: #f4f4f4; text-align: center; padding: 15px; font-size: 14px; color: #777777; }
    .footer a { color: #1a73e8; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Welcome to API Army</h1>
    </div>
    <div class="body">
      <h2>Hello,</h2>
      <p>Thank you for registering with <strong>API Army</strong>! Your account has been successfully created.</p>
      <p>Here are your account details:</p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <p>If you have any questions or need assistance</p>
      <p>Best regards,<br>The API Army Team</p>
    </div>
    <div class="footer">
      <p>You received this email because you signed up for API Army. If you have any questions, <a href="mailto:support@apiarmy.com">contact us</a>.</p>
      <p>&copy; 2025 API Army (TCET CSE). All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const securityAlertTemplate = (email, ipAddress, timestamp) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Security Alert - API Army</title>
  <style>
    body, html { margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; }
    .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden; }
    .header { background-color: #ff4d4d; color: #ffffff; text-align: center; padding: 20px; }
    .header h1 { margin: 0; font-size: 24px; }
    .body { padding: 20px; color: #333333; }
    .body h2 { font-size: 20px; margin-top: 0; color: #ff4d4d; }
    .body p { font-size: 16px; margin: 10px 0; }
    .footer { background-color: #f4f4f4; text-align: center; padding: 15px; font-size: 14px; color: #777777; }
    .footer a { color: #1a73e8; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
    .body .danger { color: #ff4d4d; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Security Alert</h1>
    </div>
    <div class="body">
      <h2>Hello Admin,</h2>
      <p>There were <strong>5 failed login attempts</strong> for the following account:</p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>IP Address:</strong> ${ipAddress}</li>
        <li><strong>Time:</strong> ${timestamp}</li>
      </ul>
      <p>The account has been temporarily locked for <strong>15 minutes</strong> to prevent further unauthorized access.</p>
      <p class="danger">We finding that hacker is trying to Brute Force Attack </p>
      <p>If this was not you, please take immediate action to secure your account.</p>
      <p>Best regards,<br>The API Army Security Team</p>
    </div>
    <div class="footer">
      <p>You received this email because you are an admin of API Army. If you have any questions, <a href="mailto:support@apiarmy.com">contact us</a>.</p>
      <p>&copy; 2023 API Army. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = { registrationTemplate, securityAlertTemplate };