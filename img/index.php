<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
		<title>Pictures!</title>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="/main.css" />
</head>
<body>
    <h1>A random picture for you</h1>
    <div class="menu">
    <ul class="menu">
        <li class="menu"><a class="menu" href="/">Home</a></li>
        <li class="menu"><a class="menu" href="/img/">Pictures</a></li>
    </ul>
    <hr />
</div>
<?php
$extensions = array('jpg','jpeg','gif','png','bmp');
$images_folder_path = '.';
$url_to_folder = '/img/';
$images = array();

// Open directory and read images
if ($handle = opendir($images_folder_path)) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
            
			// get file extension
			$ext = strtolower(substr(strrchr($file, "."), 1));
            // get file prefix
			$pre = strtolower(strchr($file, "-", true));
			if(in_array($ext, $extensions) && $pre != "thumb")
			{
    			$images[] = $file;
			}
        }
    }
    closedir($handle);
}

if(!empty($images)) // Do we have something to show?
{
$src = $images[array_rand($images, 1)];

echo "<img src='".$url_to_folder.$src."'>";
echo "<p class=footer><a href=show_img.php?img=".$src.">Permalink</a></p>";
}
else
{
echo '<p>No images were found</p>';
}
?>

<p class=footer>Maintained by theevocater</p>

</body>
</html>
