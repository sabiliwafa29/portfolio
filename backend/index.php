<?php
/**
 * API Entry Point
 * Retro Web Portfolio
 */

require_once 'config/cors.php';

echo json_encode([
    "name" => "Retro Web Portfolio API",
    "version" => "1.0.0",
    "endpoints" => [
        "GET /api/projects" => "List all projects",
        "GET /api/projects?id={id}" => "Get single project",
        "POST /api/projects" => "Create new project",
        "GET /api/contact" => "Get contact information",
        "POST /api/contact" => "Submit contact form"
    ]
]);
?>
