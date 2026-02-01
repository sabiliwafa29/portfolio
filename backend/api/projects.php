<?php
/**
 * Projects API Endpoint
 * Retro Web Portfolio
 */

require_once '../config/cors.php';
require_once '../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];

// Sample projects data (replace with database queries in production)
$projects = [
    [
        "id" => 1,
        "title" => "Retro Game Engine",
        "description" => "A pixel-perfect game engine built with modern technologies but retro aesthetics.",
        "technologies" => ["JavaScript", "Canvas", "WebGL"],
        "image" => "placeholder-project-1.png",
        "link" => "https://github.com/example/retro-game-engine"
    ],
    [
        "id" => 2,
        "title" => "Terminal Portfolio",
        "description" => "An interactive terminal-style portfolio website with command-line navigation.",
        "technologies" => ["React", "Node.js", "CSS"],
        "image" => "placeholder-project-2.png",
        "link" => "https://github.com/example/terminal-portfolio"
    ],
    [
        "id" => 3,
        "title" => "Pixel Art Generator",
        "description" => "Convert images to pixel art with customizable resolution and color palettes.",
        "technologies" => ["Python", "PIL", "Flask"],
        "image" => "placeholder-project-3.png",
        "link" => "https://github.com/example/pixel-art-generator"
    ]
];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $project = array_filter($projects, fn($p) => $p['id'] === $id);
            if (!empty($project)) {
                echo json_encode(array_values($project)[0]);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "Project not found"]);
            }
        } else {
            echo json_encode($projects);
        }
        break;
    
    case 'POST':
        // Handle create project
        $data = json_decode(file_get_contents("php://input"));
        echo json_encode(["message" => "Project created", "data" => $data]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["message" => "Method not allowed"]);
        break;
}
?>
