<?php
$img = $_GET["img"];
$img = basename($img);
if(empty($img) || ! file_exists($img))
{
    header('Location: http://jdkaufma.com/img/');
}
else
{
    echo '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
		<title>Pictures!</title>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="/main.css" />
</head>
<body>
    <h1>A Picture for you!</h1>
    <div class="menu">
    <ul class="menu">
        <li class="menu"><a class="menu" href="/">Home</a></li>
        <li class="menu"><a class="menu" href="/img/">Pictures</a></li>
    </ul>
    <hr />
</div>';


    $img = $_GET["img"];
    $img = basename($img);
    echo "<img src='".$img."'>";
}
?>

<p class=footer>Maintained by theevocater</p>

</body>
</html>
