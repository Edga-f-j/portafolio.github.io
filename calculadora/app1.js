    let operacion = '';
    let resultado = '';

    function agregarNumero(numero) {
        operacion += numero;
        document.getElementById('pantalla').value = operacion;
    }

    function operar(operador) {
        operacion += ` ${operador} `;
        document.getElementById('pantalla').value = operacion;
    }

    function calcular() {
        try {
            resultado = eval(operacion);
            document.getElementById('pantalla').value = resultado;
            operacion = resultado;
        } catch (error) {
            document.getElementById('pantalla').value = 'Error';
        }
    }

    function limpiar() {
        operacion = '';
        document.getElementById('pantalla').value = '';
    }