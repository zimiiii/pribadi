<?php 
$conn = mysqli_connect('localhost','root','','smk1');

function query ($query){
    global $conn;
    $result = mysqli_query($conn,$query);
    $rows = [];
    while($row= mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }   
    return $rows;
}

function tambah($data){
    global $conn;
    $photo = $data ['photo'];
    $nama = $data ['nama'];
    $nis = $data ['nis'];
    $email = $data ['email'];
    $kelamin = $data ['kelamin'];
    $query = "INSERT INTO datakita VALUES('','$photo','$nama','$nis','$email','$kelamin')";
    mysqli_query($conn,$query);
    return mysqli_affected_rows($conn);
}

function delete ($id){
    global $conn;
    mysqli_query($conn,"DELETE FROM datakita WHERE id = $id");
    return mysqli_affected_rows($conn);
}

function ubah($data){
    global $conn;
$id = $data ['id'];
$photo = htmlspecialchars ($data ['photo']);
$nama = htmlspecialchars ($data ['nama']);
$nis = htmlspecialchars ($data ['nis']);
$email = htmlspecialchars ($data ['email']);
$kelamin = htmlspecialchars ($data ['kelamin']);

$query = "UPDATE datakita SET
photo = '$photo',
nama = '$nama',
nis = '$nis',
email = '$email',
kelamin = '$kelamin'
    WHERE id=$id";
    mysqli_query($conn, $query);
    return mysqli_affected_rows($conn);
}

function cari($keyword){
    $query = "SELECT * FROM data_siswa
    WHERE
    nama LIKE '%Keyword%'OR
    nis LIKE '%Keyword%'OR
    email LIKE '%Keyword%'
    ";
    return query($query);
}
?>