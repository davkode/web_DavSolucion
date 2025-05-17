 <?php  
	$destino = "davsolucion@gmail.com";
	$nombre = $_POST["name"];
	$correo = $_POST["email"];
	$mensaje = $_POST["message"];
	
  $contenido = "nombre: " . $nombre . "\ncorreo: " . $correo . "\nmensaje: " . $mensaje;
 
  $header = "Enviado desde la pagina de contacto de davsolucion.com.co";

  mail($destino, $contenido);
?>