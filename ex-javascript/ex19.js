


function lanchonetePedidos(pedido, quantidade) {
    switch(pedido) {
        case 'cachorro quente':
            return quantidade * 3.00;
        case 'hamburguer simples':
            return quantidade * 4.00;
        case 'cheeseburguer':
            return quantidade * 5.50;
        case 'bauru':
            return quantidade * 7.50;
        case 'refrigerante':
            return quantidade * 3.50;
        case 'suco':
            return quantidade * 2.80;
        default:
            return 'produto não existente.' 
    }
}

console.log(` o seu pedido ficará R$: ${lanchonetePedidos('suco', 3)}`);