

<?php
header("Content-Type: application/json");
$data = array(
    "name" => "Henri Hyvarinen",
    "description" => "Some information about yourself."
);
echo json_encode($data);
?>
