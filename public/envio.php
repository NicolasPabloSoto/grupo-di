<?php

$destinatario = "nicolas.diseno@gmail.com";
$titulo = "Mensaje Enviado desde grupo-di website";

// Sanitizar los datos recibidos del formulario
$nombre = test_input($_POST['nombre']);
$mail = filter_var($_POST['correo'], FILTER_SANITIZE_EMAIL);
$empresa = test_input($_POST['empresa']);
$telefono = test_input($_POST['telefono']);
$mensaje = test_input($_POST['asunto']);
$saltoEnter = "\n";

// Comprobar que el correo es válido
if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) { 
    echo "Correo inválido.";
    exit;
}

// Crear los headers
$headers = array(
    'From' => 'alumnos@grupodi.com',
    'Reply-To' => $mail,
    'X-Mailer' => 'PHP/' . phpversion()
);

$mensajeCompleto = $nombre . $saltoEnter . $mail . $saltoEnter . $empresa . $saltoEnter . $telefono . $saltoEnter . $mensaje;

// Enviar el correo y verificar el resultado
if (mail($destinatario, $titulo, $mensajeCompleto, $headers)) {   
    echo "Mensaje enviado, te contactaremos a la brevedad. Gracias.";   
} else {
    echo "Error al enviar el mensaje.";
}

// Función para sanitizar inputs
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
