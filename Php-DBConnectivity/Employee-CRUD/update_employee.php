<?php
include 'db_connect.php';

// Get form data
$id = $_POST['id'];
$name = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];

// Prepare and execute SQL statement
$sql = "UPDATE user SET name = ?, age = ?, email = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sisi", $name, $age, $email, $id);

if ($stmt->execute()) {
    echo "Employee updated successfully!";
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
    <title>Employee Updated</title>
</head>
<body>
    <br />
    <a href="add_employee.php">Add Another Employee</a> |
    <a href="display_employees.php">Display Employees</a> |
    <a href="index.php">Back to Home</a>
</body>
</html>
