<?php
include 'db_connect.php';

// Get form data
$name = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];

// Prepare and execute SQL statement
$sql = "INSERT INTO user (name, age, email) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sis", $name, $age, $email);

if ($stmt->execute()) {
    echo "Employee added successfully!";
} else {
    echo "Error adding employee: " . $conn->error;
}

// Close connection
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Added</title>
</head>
<body>
    <br />
    <a href="add_employee.php">Add Another Employee</a> |
    <a href="display_employees.php">Display Employees</a> |
    <a href="index.php">Back to Home</a>
</body>
</html>
