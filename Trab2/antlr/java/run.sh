file=$1
if getopts ":b:" opt 
then 
sh ./build.sh
file=$2
fi

#create .dot file
java Trab2 $file

#get name of the file without the extension
fileName=${file%.*}

#create the tree
dot -Tpdf ${fileName}.dot -o ${fileName}.pdf