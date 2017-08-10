<?php

    $codeName = "The MUT370S Server";
    echo ("Starting $codeName.php");

    $servername = "198.54.223.13";
    $username = "stud1";
    $password = "123456";
   
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    try {
        $conn = new PDO("mysql:host=$servername;dbname=microbet", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
        file_put_contents($betLogFile, $e->getMessage(), FILE_APPEND);
    }
  