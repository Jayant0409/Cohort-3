//                                                  PERSONAL CLI (Command line interface)


/*
const fs = require("fs");

function main(fileName){
    //console.log(process.argv)
    fs.readFile(fileName, "utf-8",function(err,data){
        if(err){
            console.log("error aa gaya!",err.message)
        }
        let total=0;
        for (let i = 0; i < data.length; i++){
            if(data[i]==" "){
             total++;   
            }
        }
        console.log(total+1);
    })
}

main(process.argv[2]);
//"C:\Cohort\javascript\Nodejs\a.txt"
//"C:\Users\004ja\Desktop\javascript"

*/

//                                own CLI

const fs= require('fs');
const{ Command } = require('commander');
const program= new Command();

program
.name('File related CLI')
.description('CLI to do file based tasks')
.version('0.8.0');

program.command('count_words')
.description('Count the number of words in a file')
.argument('<file>','file to count')
.action((file)=>{
    fs.readFile(file,'utf8',(err,data)=> {
    if (err) {
      console.log(err);
    }
    else{
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
    }
 });
});


program.command('count_sentences')
.description('Count the number of lines in a file')
.argument('<file>','file to count')
.action((file)=>{
    fs.readFile(file,'utf8',(err,data)=> {
    if (err) {
      console.log(err);
    }
    else{
        const lines = data.split('/n').length;
        console.log(`There are ${lines} lines in ${file}`);
    }
 });
});

program.parse();


/*
PS C:\Cohort\javascript\week-4-Nodejs> notepad $PROFILE
>> function worldcli { node C:\Cohort\javascript\week-4-Nodejs\index.js @args }
>> worldcli -h
Usage: File related CLI [options] [command]

CLI to do file based tasks

  -h, --help              display help for command

Commands:
  count_words <file>      Count the number of words in a file
  count_sentences <file>  Count the number of lines in a file
  help [command]          display help for command
PS C:\Cohort\javascript\week-4-Nodejs> worldcli count_words C:\Cohort\javascript\week-4-Nodejs/a.txt
There are 6 words in C:\Cohort\javascript\week-4-Nodejs/a.txt
PS C:\Cohort\javascript\week-4-Nodejs> worldcli count_words C:\Cohort\javascript\week-4-Nodejs/b.txt
There are 1 words in C:\Cohort\javascript\week-4-Nodejs/b.txt
PS C:\Cohort\javascript\week-4-Nodejs>

*/