for(i in list){
    if(Math.random()>=0.5){
        n=Math.random()*10
    }else{
        n=-1*Math.random()*10
    }
    x=(i+n)%list.lenght
}