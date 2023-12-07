const bracket1 = document.getElementById("bracket1P2")
const bracketText1 = document.getElementById("bracketText1")
const bracketPar1 = document.getElementById("bracketPar1")

const check1 = document.getElementById("check1")
const check2 = document.getElementById("check2")
const check3 = document.getElementById("check3")

const bracket2 = document.getElementById("bracket2P2")
const bracketText2 = document.getElementById("bracketText2")
const bracketPar2 = document.getElementById("bracketPar2")

const bracket3 = document.getElementById("bracket3P2")
const bracketText3 = document.getElementById("bracketText3")
const bracketPar3 = document.getElementById("bracketPar3")

function closeCheck(){
    check1.classList.remove("checkclosed")
    check2.classList.remove("checkclosed")
    check3.classList.remove("checkclosed")   
    check1.classList.add("checkopen")
    check2.classList.add("checkopen")
    check3.classList.add("checkopen")  
}

function openCheck(){
    check1.classList.remove("checkopen")
    check2.classList.remove("checkopen")
    check3.classList.remove("checkopen")   
    check1.classList.add("checkclosed")
    check2.classList.add("checkclosed")
    check3.classList.add("checkclosed") 
}


function openBracket1(){
    bracket1.classList.remove("closedb1P2");
    bracket1.classList.add("openb1P2");
    bracketText1.classList.remove("bracketTextclosed")
    bracketText1.classList.add("bracketTextopen")
    bracketPar1.classList.remove("bracketParclosed")
    bracketPar1.classList.add("bracketParopen")
}

function closeBracket1(){
    bracket1.classList.remove("openb1P2");
    bracket1.classList.add("closedb1P2");  
    bracketText1.classList.remove("bracketTextopen")
    bracketText1.classList.add("bracketTextclosed") 
    bracketPar1.classList.remove("bracketParopen")
    bracketPar1.classList.add("bracketParclosed")
}

bracket1.addEventListener("click", function(){
    if(bracket1.classList.contains("closedb1P2")){
        openBracket1()
        closeCheck()
    } else{
        closeBracket1()
        if(bracket2.classList.contains("closedb2P2") && bracket3.classList.contains("closedb3P2")){
        openCheck()            
        } else{
            closeCheck()
        }

    }
})


function openBracket2(){
    bracket2.classList.remove("closedb2P2");
    bracket2.classList.add("openb2P2");
    bracketText2.classList.remove("bracketTextclosed")
    bracketText2.classList.add("bracketTextopen")
    bracketPar2.classList.remove("bracketParclosed")
    bracketPar2.classList.add("bracketParopen")
}

function closeBracket2(){
    bracket2.classList.remove("openb2P2");
    bracket2.classList.add("closedb2P2");  
    bracketText2.classList.remove("bracketTextopen")
    bracketText2.classList.add("bracketTextclosed") 
    bracketPar2.classList.remove("bracketParopen")
    bracketPar2.classList.add("bracketParclosed")
}

bracket2.addEventListener("click", function(){
    if(bracket2.classList.contains("closedb2P2")){
        openBracket2()
        closeCheck()
    } else{
        closeBracket2()
        if(bracket1.classList.contains("closedb1P2") && bracket3.classList.contains("closedb3P2")){
            openCheck()            
            } else{
                closeCheck()
            }
    }
})

function openBracket3(){
    bracket3.classList.remove("closedb3P2");
    bracket3.classList.add("openb3P2");
    bracketText3.classList.remove("bracketTextclosed")
    bracketText3.classList.add("bracketTextopen")
    bracketPar3.classList.remove("bracketParclosed")
    bracketPar3.classList.add("bracketParopen")
}

function closeBracket3(){
    bracket3.classList.remove("openb3P2");
    bracket3.classList.add("closedb3P2");  
    bracketText3.classList.remove("bracketTextopen")
    bracketText3.classList.add("bracketTextclosed") 
    bracketPar3.classList.remove("bracketParopen")
    bracketPar3.classList.add("bracketParclosed")
}

bracket3.addEventListener("click", function(){
    if(bracket3.classList.contains("closedb3P2")){
        openBracket3()
        closeCheck()
    } else{
        closeBracket3()
        if(bracket1.classList.contains("closedb1P2") && bracket2.classList.contains("closedb2P2")){
            openCheck()            
        } else{
                closeCheck()
        }
    }
})


