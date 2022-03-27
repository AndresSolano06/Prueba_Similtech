<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = "root"; $nombreBaseDatos = "parqueadero";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlParqueadero = mysqli_query($conexionBD,"SELECT * FROM automoviles WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlParqueadero) > 0){
        $Parqueadero = mysqli_fetch_all($sqlParqueadero,MYSQLI_ASSOC);
        echo json_encode($Parqueadero);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

//borrar pero se le debe de enviar una clave ( para borrado )
/*if (isset($_GET["borrar"])){
    $sqlParqueaadero = mysqli_query($conexionBD,"DELETE FROM automoviles WHERE id=".$_GET["borrar"]);
    if($sqlParqueaadero){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}*/
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $hora_entrada=$data->hora_entrada;
    $Placa=$data->Placa;
	$marca=$data->marca;
    $color=$data->color;
	$tipo=$data->tipo;
	$estado=$data->estado;
    if(($hora_entrada!="")&&($Placa!="")&&($marca!="")&&($color!="")&&($tipo!="")&&($estado!="")){        
        $sqlParqueadero = mysqli_query($conexionBD,"INSERT INTO automoviles(hora_entrada,Placa,marca,color,tipo,estado) VALUES('$hora_entrada','$Placa','$marca','$color','$tipo','$estado') ");
        echo json_encode(["success"=>1]);
    }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $hora_entrada=$data->hora_entrada;
	$hora_salida=$data->hora_salida;
    $Placa=$data->Placa;
	$marca=$data->marca;
    $color=$data->color;
	$tipo=$data->tipo;
	$cobro=$data->cobro;
	$estado=$data->estado;
    $sqlParqueadero = mysqli_query($conexionBD,"UPDATE automoviles SET hora_entrada='$hora_entrada',hora_salida='$hora_salida',Placa='$Placa',marca='$marca',color='$color',tipo='$tipo',cobro='$cobro',estado='$estado' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla empleados
$sqlParqueadero = mysqli_query($conexionBD,"SELECT * FROM automoviles ");
if(mysqli_num_rows($sqlParqueadero) > 0){
    $Parqueadero = mysqli_fetch_all($sqlParqueadero,MYSQLI_ASSOC);
    echo json_encode($Parqueadero);
}
else{ echo json_encode([["success"=>0]]); }


?>