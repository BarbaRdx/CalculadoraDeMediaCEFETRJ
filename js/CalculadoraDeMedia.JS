function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
  }
  
  function calcula(){
    
    var notaP1 = parseFloat(document.getElementById("notaP1").value);
    var notaP2 = parseFloat(document.getElementById("notaP2").value);
    document.getElementById("resultado").innerHTML="";
  
    var mediaInicial = (notaP1 + notaP2)/2;
  
    if (mediaInicial >= 6) {
        console.log ("Sua nota foi "+ mediaInicial +"! Você está aprovado!");
        document.getElementById("resultado").innerHTML="Sua nota foi "+ mediaInicial +"! Você está aprovado!";
    }
    else if (mediaInicial < 3){
        console.log ("Você foi reprovado! Sua média foi " + mediaInicial);
        document.getElementById("resultado").innerHTML="Você foi reprovado! Sua média foi " + mediaInicial;
    }
    else if (mediaInicial > 3 && mediaInicial < 6){
      console.log ("Você precisa fazer a prova final! Sua média foi " + mediaInicial + ". Quando fizer a PF, insira sua nota e calcule novamente!");
      document.getElementById("resultado").innerHTML="Você precisa fazer a prova final! Sua média foi " + mediaInicial + ". Quando fizer a PF, insira sua nota e calcule novamente!";
      
      if(document.getElementById("notaPF").value != ""){
    
        var notaPF = parseFloat(document.getElementById("notaPF").value);
        var mediaFinal = (mediaInicial + notaPF)/2;
  
          if (mediaFinal >= 5){
            console.log ("Você tirou " + notaPF + " na prova final. Portanto, você foi aprovado! Sua média final foi " + mediaFinal + "!");
            document.getElementById("resultado").innerHTML="Você tirou " + notaPF + " na prova final. Portanto, você foi aprovado! Sua média final foi " + mediaFinal + "!";
          }
          else {
           console.log ("Você foi reprovado :( Tente novamente no próximo período! Sua média final foi " + mediaFinal +"!");
            document.getElementById("resultado").innerHTML="Você foi reprovado :( Tente novamente no próximo período! Sua média final foi " + mediaFinal +"!";
          }
      }
    }
    
  }