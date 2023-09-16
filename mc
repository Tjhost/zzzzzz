<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Protection</title>
</head>
<body>
    <div id="login-form">
        <h1>Enter Password</h1>
        <form action="#" method="post" onsubmit="return checkPassword()">
            <input type="password" placeholder="Password" id="password" name="password">
            <input type="submit" value="Submit">
        </form>
    </div>

    <div id="content" style="display: none;">
        <!-- Your protected content here -->
        <p>This is your protected content.</p>
        <a href="Vault.jar" download>Download File</a>
    </div>

    <script>
        function checkPassword() {
            var enteredPassword = document.getElementById("password").value;
            var correctPassword = "Bob434"; // Replace with your actual password

            if (enteredPassword === correctPassword) {
                document.getElementById("login-form").style.display = "none";
                document.getElementById("content").style.display = "block";
                return true;
            } else {
                alert("Incorrect password. Please try again.");
                return false;
            }
        }
    </script>
</body>
</html>
