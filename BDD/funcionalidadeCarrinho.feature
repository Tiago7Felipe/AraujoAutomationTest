        # language: pt

        Funcionalidade: Itens do carrinho Carrinho

        Contexto:
        Dado que esteja acessando a pagina "https://www.araujo.com.br"

        Cenário: Adicionar item ao carrinho atraves da busca
        Quando passar o <produto> para pesquisa
        Então devo adicionar um item dentre os resultados ao carrinho
        E o produto deve constar no carrinho
            Exemplos:
            | produtos      |
            | neosaldina    |


        Cenário: Excluir item do carrinho
        Quando remover <produto> do carrinho
        Então ele não deve constar mais no carrinho
        Exemplos:
            | produtos      |
            | neosaldina    |