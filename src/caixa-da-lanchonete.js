


class CaixaDaLanchonete {
    constructor() {
        this.itens = {
          cafe: { descricao: 'Café', valor: 3.0 },
          chantily: { descricao: 'Chantily (extra do Café)', valor: 1.5 },
          suco: { descricao: 'Suco Natural', valor: 6.2 },
          sanduiche: { descricao: 'Sanduíche', valor: 6.5 },
          queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.0 },
          salgado: { descricao: 'Salgado', valor: 7.25 },
          combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.5 },
          combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.5 }
        }
      }

    calcularValorDaCompra(metodoDePagamento, itens) {

        let pagamentos = ["dinheiro", "debito", "credito"];


        let total = 0
        let percorre = [];

        //Função para percorrer a lista de Itens
        let listapercorrida = function (percorre, item) {
            return percorre.includes(item)
        }
        //Percorre a lista de Itens e organiza
        for (const itemof of itens) {
            const [item, quant] = itemof.split(",");
            percorre.push(item)


        //Verifica modo de Pagamento valido 
            if (!pagamentos.includes(metodoDePagamento)) {
                return "Forma de pagamento inválida!";
            }            

            //Quantida de itens valido para a compra
            if (quant <= 0) {
                return "Quantidade inválida!";
            }
            //Verificações unitaria
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
            if (
                metodoDePagamento === 'debito' &&
                listapercorrida(percorre, 'queijo') &&
                !listapercorrida(percorre, 'sanduiche')
              ) {
                return 'Item extra não pode ser pedido sem o principal'
              }

              //Percorre os itens faz e soma 
            if (item in this.itens) {
                const itemValor = this.itens[item].valor * parseInt(quant)
                total += itemValor
            } else {
                return 'Item inválido!'
              
            }
        }
        //verifica de há itens no carrinho
        if (percorre.length == 0) {
            return "Não há itens no carrinho de compra!"
        }
        //Desconto de 5% e Acrescimo de 3%
        if (metodoDePagamento === "dinheiro") {
            total *= 0.95
        } else if (metodoDePagamento === "credito") {
            total *= 1.03
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`
    }




}
export { CaixaDaLanchonete }


