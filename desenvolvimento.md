## 1. Benchmarking e Prototipação

Primeiro passo foi olhar em sites de concorrentes como são feitos os simuladores de ligação. Como não consegui achar simuladores como o proposto pelo exercício, pesquisei simuladores de empréstimo bancário, que seguem a mesma linha.

Depois utilizei a ferramenta Figma para fazer a prototipação de como seria o simulador.
* A premissa desta página é que o cliente já conhece o produto FaleMais, não havendo necessidade de ter informações sobre o produto. Assim o foco é apenas a simulação.
* Foram usadas cores apresentadas no site da própria Vizir.
* A ilustração e logos são vetores open source.

O protótipo final e as propostas podem ser encontradas [aqui](https://www.figma.com/file/RDvCjm7LZBq4MMVAIgbgTm/Simulador-Telzir?node-id=1%3A2). 

<br>

## 2. Desenvolvimento

Foi escolhido o Angular pelo fato de possuir os Reactive Forms, que são robutos, reusáveis e testáveis, diferentes de outras tecnologias similares como React e VUE. E como os inputs são a parte principal da aplicação, esta foi considerada a tecnologia que mais se adapta ao problema.

A apresentação das informações foi escolhida de forma que pode ser extensivel, então caso no futuro haja novas possibilidades de ligação, poderão ser adicionadas sem problema.

O design deve ser resposível para qualquer tamanho de tela.
