<?php
    $destino = "lablancadev@hotmail.com";
    $name = $_POST["Nombre"];
    $email = $_POST["email"];
    $theme = $_POST["Tema"];
    $message = $_POST["Mensaje"];
    $contenido = "Nombre: " . $name . "\nEmail: " . $email . "\nTema: " . $theme "\nMensaje: " . $message;
    mail($destino, "Contacto a través de la web", $contenido);
    
?>

<!-- Pendiente probar formulario cuando suba el código fuente a un servicio de alojamiento web -->