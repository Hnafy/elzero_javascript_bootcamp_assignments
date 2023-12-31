let start = 10;
let end = 100;
let exclude = 40;

// Output
for (;start <= end;start++){
    if (start === exclude){
        continue;
    }
    console.log(start);
}