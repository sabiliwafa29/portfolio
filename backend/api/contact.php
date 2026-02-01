<?php
/**
 * Contact API Endpoint
 * Retro Web Portfolio
 */

require_once '../config/cors.php';
require_once '../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Return contact information
        $contact = [
            "email" => "your.email@example.com",
            "github" => "https://github.com/yourusername",
            "linkedin" => "https://linkedin.com/in/yourusername",
            "twitter" => "https://twitter.com/yourusername"
        ];
        echo json_encode($contact);
        break;
    
    case 'POST':
        // Handle contact form submission
        $data = json_decode(file_get_contents("php://input"));
        
        if (!isset($data->name) || !isset($data->email) || !isset($data->message)) {
            http_response_code(400);
            echo json_encode(["message" => "Missing required fields"]);
            exit();
        }

        // Validate email
        if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(["message" => "Invalid email format"]);
            exit();
        }

        // In production, you would save to database or send email here
        // For now, we'll just return success
        echo json_encode([
            "success" => true,
            "message" => "Message received! I'll get back to you soon.",
            "data" => [
                "name" => htmlspecialchars($data->name),
                "email" => htmlspecialchars($data->email),
                "message" => htmlspecialchars($data->message)
            ]
        ]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["message" => "Method not allowed"]);
        break;
}
?>
