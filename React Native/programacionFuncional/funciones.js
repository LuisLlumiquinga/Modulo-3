/*ejecutarSumar=()=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    console.log("VALOR 1>>>>"+valor1+"VALOR 2>>>>"+valor2);
    
    let resultadoSuma;
    resultadoSuma=sumar(valor1, valor2);
    console.log(resultadoSuma);

    ejecutarOperacion(sumar);
}

ejecutarRestar=()=>{
    let valor1=recuperarFloat("txtValor1");
    let valor2=recuperarFloat("txtValor2");
    let resultadoRestar=restar(valor1, valor2);
    console.log(resultadoRestar);
}
*/
ejecutarOperacion=(operar)=>{
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultado;

    resultado=operar(valor1, valor2);
    console.log(resultado);
}



sumar=(sum1, sum2)=>{
    let resultado=sum1+sum2;
    return resultado;
}

restar=(num1, num2)=>{
    let resultado=num1-num2;
    return resultado;
}

ejecutar=(fn)=>{
    console.log("estoy ejecutando funciones...")
    fn();
}

imprimir=()=>{
    console.log("estoy imprimiendo")
}

saludar=()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL")
}

testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("soy una funcion sin nombre")
    });
}