var numbers =[0];
var answer = 0;
var numpresses = 0;

var mode = "";

var currentNumber =0;

function SetNumber(e){
    let id = e.target.id;
    numbers[currentNumber] = (numbers[currentNumber] *(10)) + Number((id).slice(-1));
    document.getElementById("Answer").innerHTML = numbers[currentNumber];
}

function SetOpp(e){
    let id2 = e.target.id;
    numpresses = 0;
    currentNumber+=1;
    numbers.push(0)
    
    switch(id2)
    {
        case("cell11"): 
        {
            mode = "+" ;
            break;
        }  
        case("cell12"):
        {
            mode = "-";
            break;
           
        }    
        case ("cell13"):
        {
            mode = "*";
            break;
        }
        case ("cell14"):
        {
            mode = "/";
            
            break;
        }
        case ("cell15"):
        {
            mode = "%";
            
            break;
        }
        case ("cell16"):
            {
                switch(mode)
                {
                    case("+"):
                            { 
                             answer=numbers[currentNumber-1] + numbers[currentNumber-2];
                            break;}
                    case("-"):
                        { answer=numbers[currentNumber-1] - numbers[currentNumber-2];
                            break;}
                    case("*"):
                        { answer=numbers[currentNumber-1] * numbers[currentNumber-2];
                            break;}
                    case("/"):
                        { answer=numbers[currentNumber-1] / numbers[currentNumber-2];
                            break;}
                    case("%"):
                        { answer=numbers[currentNumber-1] % numbers[currentNumber-2];
                            break;}

                    default:
                        {
                            answer = numbers[currentNumber-1];
                            break;
                        }
                }
            }
        
            document.getElementById("Answer").innerHTML = answer;

    }


}