ejecutarSumar=()=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    console.log("VALOR 1>>>>"+valor1+"VALOR 2>>>>"+valor2);
    
    let resultadoSuma;
    resultadoSuma=sumar(valor1, valor2);
    console.log(resultadoSuma);
}

ejecutarRestar=()=>{
    let valor1=recuperarFloat("txtValor1");
    let valor2=recuperarFloat("txtValor2");
    let resultadoRestar=restar(valor1, valor2);
    console.log(resultadoRestar);
}

sumar=(sum1, sum2)=>{
    let resultado=sum1+sum2;
    return resultado;
}

restar=(num1, num2)=>{
    let resultado=num1-num2;
    return resultado;
}

