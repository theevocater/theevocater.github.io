#!/bin/bash
for i in large*.png
do 
newname=thumb${i#large}
newname=${newname%png}jpg
if [[ ! (-e $newname)  ]] ; then
	echo "Createing $newname"
	convert $i -thumbnail 400x300 -quality 75 $newname
fi
done
