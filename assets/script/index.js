function calculator(){
    var altura = document.querySelector("#altura").value;
    var peso = document.querySelector("#peso").value;
    
    var imc = (peso / altura**2).toFixed(2);
    var texto = "";
    if(imc < 18.5){
        texto = "IMC: " + imc + " Grau: 0 | Classificação: Magreza";
    }else if(imc < 24.9){
        texto = "IMC: " + imc + " Grau: 0 | Classificação: Normal";
    }else if(imc < 29.9){
        texto = "IMC: " + imc + " Grau: 1 | Classificação: Sobrepeso";
    }else if(imc < 39.9){
        texto = "IMC: " + imc + " Grau: 2 | Classificação: Obesidade";
    }else if(imc > 39.9){
        texto = "IMC: " + imc + " Grau: 3 | Classificação: Obesidade Grave";
    }
    
    document.querySelector("#resultado").innerText= texto;
}