


class CaixaDaLanchonete {


    constructor() {
        this.itens = [
            { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
            { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        ];


    }

    calcularValorDaCompra(metodoDePagamento, itens) {

        let pagamentos = ["dinheiro", "debito", "credito"];




        let total = 0
        let percorre = [];

        let listapercorrida = function (percorre, item) {
            return percorre.includes(item)
        }

        for (let itemof of itens) {
            let [item, quant] = itemof.split(",");
            
            percorre.push(item)


            if (!pagamentos.includes(metodoDePagamento)) {
                return "Forma de pagamento inválida!";
            }
    
            if (!this.itens.includes(itens.codigo)) {
    
                if (itens.length === 0) {
                    return "Não há itens no carrinho de compra!";
                }
                else {
                    return "Item inválido!"
                }
            }

            


            if (quant <= 0) {
                return "Quantidade inválida!";
            }

            if (metodoDePagamento === "dinheiro" &&
                listapercorrida(percorre, "chantily") &&
                !listapercorrida(percorre, "cafe")) {
                return 'Item extra não pode ser pedido sem o principal'

            }
            if (metodoDePagamento === "debito" &&
                listapercorrida(percorre, "chantily") &&
                !listapercorrida(percorre, "cafe")) {
                return 'Item extra não pode ser pedido sem o principal'

            }
            if (metodoDePagamento === "credito" &&
                listapercorrida(percorre, "chantily") &&
                !listapercorrida(percorre, "cafe")) {
                return 'Item extra não pode ser pedido sem o principal'

            }
            if (metodoDePagamento === "credito" &&
                listapercorrida(percorre, "queijo") &&
                !listapercorrida(percorre, "sanduiche")) {
                return 'Item extra não pode ser pedido sem o principal'

            }
            if (metodoDePagamento === "debito" &&
                listapercorrida(percorre, "queijo") &&
                !listapercorrida(percorre, "sanduiche")) {
                return 'Item extra não pode ser pedido sem o principal'

            }

            if (item == this.itens) {
                const valor = itemof.valor * quant
                total += valor
            }
        }

        if (metodoDePagamento === "dinheiro") {
            total *= 0.95
        } else if (metodoDePagamento === "credito") {
            total *= 1.03
        }





        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }




}
export { CaixaDaLanchonete }


