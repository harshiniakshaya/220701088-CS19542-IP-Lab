<?php
include 'db_connect.php';

// Fetch records
$sql = "SELECT * FROM user";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h1>Employee List</h1>";
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>";
    
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['name']}</td>
                <td>{$row['age']}</td>
                <td>{$row['email']}</td>
                <td>
                    <a href='edit_employee.php?id={$row['id']}'>Edit</a> |
                    <a href='delete_employee.php?id={$row['id']}'>Delete</a>
                </td>
            </tr>";
    }
    
    echo "</table>";
} else {
    echo "No employees found.";
}

// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee List</title>
</head>
<body>
    <a href="add_employee.php">Add Employee</a> |
    <a href="index.php">Back to Home</a>
</body>
</html>
