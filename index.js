const quiz = document.querySelector('#quiz') //pegar a div com o id "quiz" a partir do DOM, no documento.
const template = document.querySelector('template') //pegar todos os elementos HTML da tag <template> do HTML e jogar na variável "template"

const corretas = new Set()
// new - criar coisas novas



const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "variável = valor",
      "var nome = valor",
      "let nome = valor",
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes métodos é usado para exibir uma janela de alerta com uma mensagem em JavaScript?",
    respostas: [
      "messageBox()",
      "alert()",
      "prompt()",
    ],
    correta: 1
  },
  {
    pergunta: "Como você comentaria uma única linha em JavaScript?",
    respostas: [
      "// Comentário",
      "<!-- Comentário -->",
      "/* Comentário */",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de comparar se duas variáveis têm o mesmo valor em JavaScript?",
    respostas: [
      "variable1 = variable2",
      "variable1 == variable2",
      "variable1 === variable2",
    ],
    correta: 2
  },
  {
    pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
    respostas: [
      "Math.round()",
      "Math.ceil()",
      "Math.floor()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual símbolo é usado para concatenar strings em JavaScript?",
    respostas: [
      "&",
      "+",
      "|",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a estrutura de controle de fluxo usada para executar repetidamente um bloco de código em JavaScript?",
    respostas: [
      "if-else",
      "switch-case",
      "for-loop",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual destes é um tipo de dados primitivo em JavaScript?",
    respostas: [
      "Object",
      "Array",
      "Boolean",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a forma correta de escrever um comentário de várias linhas em JavaScript?",
    respostas: [
      "// Comentário",
      "<!-- Comentário -->",
      "/* Comentário */",
    ],
    correta: 2
  },
]; // CRIADO PELO CHATGPT → uma array chamada "perguntas" onde os elementos alocados são 10 objetos(cada um, uma questão) com as propriedades "pergunta", "respostas" e "correta". A primeira e a última contêm, respectivamente, uma string(texto) e um valor numérico(0 a 2) como valores. a propriedade "respostas" tem como valor uma outra array com três elementos, sendo eles as alternativas para marcar. Cada elemento é uma alternativa de resposta e, como estão em uma array, são marcadas com as posições 0, 1 e 2. Logo, a propriedade "correta" mostra qual posição da array dentro de "respostas" é a correta.

const totalDePerguntas = perguntas.length //serve para contar o total de perguntas. o lenght conta a partir do 1, não do 0

const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){ //estrutura de repetição. repete tudo o que está dentro das chaves enquanto o que está dentro dos parênteses é verdadeiro(criar uma variável que irá de 0 a 9, as posições da array "perguntas" e ir de uma em uma. a variável "item" pode ser usada nos comandos abaixo como a posição[pergunta] da array "perguntas" que o "for" está analisando)

  const quizItem = template.content.cloneNode(true) 
  //clonar todos os nodes(pedaço da estrutura do documento, que pode ser uma tag[elemento], texto, atributo, comentários, etc) que estão no conteúdo do template(selecionado por meio do querySelector) para a variável criada "quizItem". Lembre-se que isso ocorrerá toda vez que a estrutura se repetir). >>>> Logo, pense que a variável quizItem é tudo o que está na tag <template> no HTML. <<<<

  quizItem.querySelector('h3').textContent = item.pergunta 
  //pegar o h3 pelo querySelector no template e atribuir o valor (de texto, string) da propriedade "pergunta" do item-ésimo(item - variável criada no "for" e é a posição da array "perguntas" que a estrutura está analisando, ou seja, vai pegar o valor da propriedade "perguntas" do elemento da posição da array e trocar pelo o que está de texto no h3 do quizItem, que é a variável que contém os nodes do template) elemento da array "perguntas"

    for(let resposta of item.respostas){ // mais uma estrutura de repetição para pegar cada uma das três alternativas, indo em cada uma dos três elementos da array dentro da propriedade "respostas" do item-ésimo objeto da array "perguntas"

      const dt = quizItem.querySelector('dl dt').cloneNode(true) 
      // criar a variável "dt" e jogar nela o clone dos nodes do filho do elemento "dl" dentro de quizItem(relembrando: a variável com o clone de todos os nodes de "template"), que aqui é "Resposta A", originalmente, no HTML.

      dt.querySelector('span').textContent = resposta
      //pegou dentro da variável o elemento(um dos nodes) <span> e jogou dentro a variável criada no for que corresponde um dos elementos da array dentro da propriedade "respostas"

      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      //alteroru o atributo "name" do input dentro de dt pela concatenação entre a string "pergunta" e um número obtido por meio da array "perguntas", que pega qual a posição nessa array a partir da variável item. Assim, cada input será nomeado com pergunta-0 ; pergunta-1 e assim por diante, resolvendo o problema de todos os radios de todas as perguntas estarem inteligados, um excluindo o outro.

      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      // em cada uma das alternativas que vão passar por este "for", vai pegar qual o valor do índice da array "item.respostas" que a alternativa analisada está tratando e jogar como o "value" do input(um radio, uma das alternativas), fazendo com que as alternativas retornem valores diferentes(0, 1 e 2) para depois definirmos como resposta correta. a função indexOf pega qual elemento nos referimos na array e retorna qual a posição que ele está na array. Note que a variável "resposta" corresponde a um elemento da array que estamos no referindo; a array com as três alternativas. Logo, colocar o "resposta" dentro de indexOf é dizer que estamos nos referindo a uma das alternativas em específico e queremos saber a psoição dela. Pegando a posicão dela, colocamos como o valor do input em questão. Muito show.

      dt.querySelector('input').onchange /*  <- to ligado na mudança ta */ = (event /* nome da funcao */) => { /* o que a funcao vai fazer quando disparada */
       const estaCorreta = event.target.value /* <- qual o valor do negócio selecionado, ou seja, saber qual carinha está clicado*/ == item.correta // isso daí vai dar uma resposta booleana, pois o duplo sinal de '=' é um comparador. Se for verdadeira a senteça, retorna true, se for falsa, retorna false.

       corretas.delete(item) //se encontrar o item, vai deletar(reinicia a contagem da pergunta em específico). se não houver, não apagar nada.
       if(estaCorreta){ // note que isso é o mesmo que if(estaCorreta == true)
          corretas.add(item) //meio que adicionar +1 no contador caso correta
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas // escrever lá em baixo a partir da alteração do conteúdo de texto da variável mostrarTotal, que é o span dentro de #acertos, concatenando a quantidade de corretas, colocando a string ' de ' no meio e colocando o que o contador de perguntas retorna, que sempre vai ser 10 nesse caso.
      }
      //criação de uma função que tem como gatilho a mudança de algum valor retornado num input




      quizItem.querySelector('dl').appendChild(dt)
      //pegou o <dl> dentro de quizItem e jogou como filho da variável criada neste for, "dt". Por algum motivo, isso fez com que as alternativas aparecessem na tela. Pelo visto, tirou o <dt> como filho de <dl> no quizItem e colocou diretamente como dilho da variável "dt". Ainda não sei como fez colocar na tela.
    }

  quizItem.querySelector('dl dt').remove() //remover o "Resposta A", tirando o <dt> que está dentro de <dl>. Ou seja, removemos o que tínhamos escrevido em HTML como exemplo de alternativa.

  quiz.appendChild(quizItem) //colocou como filho da var "quiz"(a div sem nada) a var "quizItem", colocando o template(do HTML) clonado e alterado nesta última, fazendo tudo aparecer na tela, pois a div agora tem conteúdo, e essa div já estava "aparecendo" no HTML. Pense nessa div vazia como uma telinha. Colocamos o conteúdo alterado pelo "for" a partir do modelo criado em HTML nessa telinha.
  
}






// meu método, baseado nos estudos de c++ :
// for(let i = 0; i<=9; i++){
//   alert(perguntas[i].respostas[perguntas[i].correta])
// }