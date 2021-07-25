
    document.addEventListener('contextmenu', event => event.preventDefault());
    // indix matrex 
    var Mine=[[0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0]
            ];
    // founction in 10 numbar raandumle in matrex     
    function randomDistribution(){
        for(var i=0;i<10;i++)
        {
            var rnand_1=Math.random();
            var rnand_2=Math.random();
            Mine[Math.floor(rnand_1*9)][Math.floor(rnand_2*9)]='*';
        }
    }
    randomDistribution()
    chak()
    
    //  Acsses the <div> insid <td>       
    var mytab=document.getElementById('tab').getElementsByTagName('div');
    //  Acsses the <td> 
    var mytd=document.getElementById('tab').getElementsByTagName('td');
    //  Acsses the <tabl>
    var mytab_1=document.getElementById('tab')
    //Acsess the <tr>
    var mytr=document.getElementById('tab').getElementsByTagName('tr');
    
    //creat the <tabl> and <tr> <td> 
    z=0;
    for(var i=0;i<9;i++)
    {
        var inddd=document.createElement('tr');
        mytab_1.appendChild(inddd);
        inddd.setAttribute('id',i);
        for(var j=0;j<9;j++)
        {
            var tdtab=document.createElement('td')
            inddd.appendChild(tdtab)
            var div_in_td=document.createElement('div')
            tdtab.appendChild(div_in_td)
            div_in_td.setAttribute('id',j)
            //not print 0 and *
            if(Mine[i][j]!=0){div_in_td.innerHTML=Mine[i][j];}
            z++
        }  
    }
    
    // function for sheck the element in matrex 
    //verticl indax
    //(i+1---j)=> if(i<8)
    //(i---j+1 )=> if(j<8)
    //(i-1---j )=> if(i>0)
    //(i---j-1)=> if(j>0)
    //digonal indax
    // (i+1---j+1)=>if(i<8 && j<8)
    //(i-1---j-1)=> if(j>0 && i>0)
    //(i+1---j-1)=> if(i>0 && i<8)
    //(i-1---j+1)=> if(i>0 && j<8)
    
    function chak(){
        for(var i=0; i<9;i++)
        {
            for(var j=0;j<9;j++)
            {
                if (i>0 && Mine[i-1][j]=='*' &&  Mine[i][j]!==Mine[i-1][j]){
                    Mine[i][j]+=1
                }
                if (i<8 && Mine[i+1][j]=='*' &&  Mine[i][j]!==Mine[i+1][j]){
                    Mine[i][j]+=1
                }            
                if (j<8 && Mine[i][j+1]=='*' &&  Mine[i][j]!==Mine[i][j+1]){
                    Mine[i][j]+=1
                }
                if (j>0 && Mine[i][j-1]=='*' &&  Mine[i][j]!==Mine[i][j-1]){
                    Mine[i][j]+=1
                }
                if (i<8 && j<8 && Mine[i+1][j+1]=='*' &&  Mine[i][j]!==Mine[i+1][j+1]){
                    Mine[i][j]+=1
                }
                if (j>0 && i>0 && Mine[i-1][j-1]=='*' &&  Mine[i][j]!==Mine[i-1][j-1]){
                    Mine[i][j]+=1
                }
                if (i>0 && i<8 && Mine[i+1][j-1]=='*' &&  Mine[i][j]!==Mine[i+1][j-1]){
                    Mine[i][j]+=1
                }
                if (i>0 && j<8 && Mine[i-1][j+1]=='*' &&  Mine[i][j]!==Mine[i-1][j+1]){
                    Mine[i][j]+=1
                }          
            }
        }
    }
    
    // function loss for prisention all div 
    function loss(){
        for( var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                if(mytr[i].children[j].children[0].textContent!=='*')
                {
                    mytr[i].children[j].children[0].style.visibility='visible';
                }
                else
                {
                    mytr[i].children[j].children[0].style.visibility='visible';
                    mytr[i].children[j].children[0].style.backgroundImage='url(icon/lon.png)';
                    mytr[i].children[j].children[0].style.backgroundSize='100% 100%';
                }
            }
        }   
        setTimeout(() =>{
             document.querySelector(".lose").style.visibility="visible";
             clearInterval(set_1);
            }, 1000);
    }
    // function for event onclick in element
    let stop=0;
    function eveen(a,b)
    { 
        if(stop===0){
            timer() 
            stop=2;
        }
        if(Mine[a][b]>0)
        {
            mytr[a].children[b].children[0].style.visibility='visible';
        }
        else if (Mine[a][b]=='*'){ 
            loss() 
        }
        else{
             open(a,b);
            /// mytr[a].children[b].children[0].style.visibility='visible';      
        }
    }
    
    function open(i,j){
    
        for(var di=-1;di<=1;di++){
            for(var dj=-1;dj<=1;dj++){
                var i1=i+di;
                var j1=j+dj;
                if(i1>=0 && i1<=8 && j1>=0 && j1<=8 && Mine[i1][j1]!='*' && Mine[i1][j1]!='w')
                {
                    if(mytr[i1].children[j1].children[0].style.visibility=='visible'){continue}
                    mytr[i1].children[j1].children[0].style.visibility='visible';
    
                    eveen(i1,j1);           
                }
            }
        }
    }
    // is event for click in mause raeth
    function eveen_2(a,b){
        mytr[a].children[b].style.backgroundImage="url('icon/n3.png')"; 
        mytr[a].children[b].style.backgroundSize="100% 100%";
        Mine[a][b]='w';   
        won();
    }
    //add event for all element
    function satAtrebut(){
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                mytr[i].children[j].setAttribute("oncontextmenu",`eveen_2(${i},${j})`)
                mytr[i].children[j].setAttribute("onclick",`eveen(${i},${j})`)  
            }
        }
    }
    satAtrebut();
    
    function won(){
        var m=0;
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
               if(Mine[i][j]=='*'){
                   m=m+1;
               }
            }
        }
        if(m===0){
            setTimeout(() => {
                document.querySelector(".lose h1").innerHTML=" You win !";
                document.querySelector(".lose").style.visibility="visible";
                clearInterval(set_1);     
            }, 1000);
        }
    }
    let set_1
    function timer(){
        let n=0;
        set_1= setInterval(() => {
            document.querySelector(".new_game_and_timing .time").innerHTML=n;
            n+=1;
        }, 1000);
    }
    
    function onlo(){
        
    }
