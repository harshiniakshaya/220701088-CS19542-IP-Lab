<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $query = "DELETE FROM EMPDETAILS WHERE EMPID = $id";
    mysqli_query($conn, $query);

    header("Location: index.php");
    exit();
}
?>
