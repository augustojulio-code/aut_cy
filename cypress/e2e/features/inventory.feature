# language: pt
Funcionalidade: Inventário

  @needsAuth @regression
  Cenário: Visualizar produtos na página de inventário
    Dado que estou na página de inventário
    Então devo ver a lista de produtos

  @needsAuth @regression
  Esquema do Cenário: Ordenar produtos por "<ordenacao>"
    Dado que estou na página de inventário
    Quando seleciono a ordenação "<ordenacao>"
    Então devo ver a lista de produtos

    Exemplos:
      | ordenacao          |
      | Name (A to Z)      |
      | Name (Z to A)      |
      | Price (low to high)|
