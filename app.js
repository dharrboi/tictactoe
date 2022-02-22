rows = [
    ["a1","a2","a3"],
    ["a4","a5","a6"],
    ["a7","a8","a9"],
    ["a1","a4","a7"],
    ["a2","a5","a8"],
    ["a3","a6","a9"],
    ["a1","a5","a9"],
    ["a3","a5","a7"]
]
reset_rows = [
    ["a1","a2","a3"],
    ["a4","a5","a6"],
    ["a7","a8","a9"],
    ["a1","a4","a7"],
    ["a2","a5","a8"],
    ["a3","a6","a9"],
    ["a1","a5","a9"],
    ["a3","a5","a7"]
]
const btn = document.querySelectorAll('.box');
let flag=1;
for(let i=0; i<=8; i++){
    btn[i].addEventListener('click', function(){
        ch = null;
        if(flag%2==1){
            flag++;
            ch="X";
        }
        else{
            flag++;
            ch="O";
        }
        btn[i].innerText=ch;
        btn[i].style.cssText += 'pointer-events:none; cursor:default;';
        console.log("a"+(i+1));
        for(let k=0; i<9; k++){
            for(let x=0; x<=8; x++){
                if(rows[x]==['X','X','X']){
                    console.log("X WINS")
                }
            }
            for(let j=0; j<=2; j++){
                let cell = 'a'+(i+1);
                if(rows[k][j]==cell){
                    rows[k][j]=ch;
                }
            }
        }
    })
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    for(let i=0; i<=8; i++){
        btn[i].innerText="";
        btn[i].style.cssText -= 'pointer-events:none; cursor:default;';
        rows=reset_rows;
    }
})

