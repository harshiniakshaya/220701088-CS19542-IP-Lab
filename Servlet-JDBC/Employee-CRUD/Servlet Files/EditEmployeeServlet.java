package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/EditEmployee")
public class EditEmployeeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final String DB_URL = "jdbc:mysql://localhost:3306/employee";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        int id = Integer.parseInt(request.getParameter("id"));

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            
            String readSQL = "SELECT * FROM user WHERE id = ?";
            PreparedStatement readStmt = conn.prepareStatement(readSQL);
            readStmt.setInt(1, id);
            ResultSet rs = readStmt.executeQuery();

            if (rs.next()) {
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String email = rs.getString("email");

                out.println("<h1>Edit Employee</h1>");
                out.println("<form action='UpdateEmployee' method='post'>");
                out.println("<input type='hidden' name='id' value='" + id + "'>");
                out.println("<label for='name'>Name:</label>");
                out.println("<input type='text' id='name' name='name' value='" + name + "' required><br><br>");
                out.println("<label for='age'>Age:</label>");
                out.println("<input type='number' id='age' name='age' value='" + age + "' required><br><br>");
                out.println("<label for='email'>Email:</label>");
                out.println("<input type='email' id='email' name='email' value='" + email + "' required><br><br>");
                out.println("<input type='submit' value='Update Employee'>");
                out.println("</form>");
                out.println("<br><a href='index.html'>Back to Home</a>");
            } else {
                out.println("Employee not found.");
            }

            rs.close();
            readStmt.close();
            conn.close();
        } catch (Exception e) {
            out.println("Error: " + e.getMessage());
        }
    }
}
