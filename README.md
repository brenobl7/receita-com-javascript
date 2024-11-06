# Calculadora de Ingredientes

Seu objetivo neste trabalho é desenvolver uma calculadora de ingredientes para o seu site de receitas.

O objetivo é que o usuário deve entrar quantas porções de comida ele deseja, e a calculadora deve dizer automaticamente
qual a quantidade de cada um dos ingredientes que o usuário deve usar.

## Importante

Copie para a pasta deste repositório todos os arquivos que você desenvolveu para seu site de receitas, **porém**
não copie a pasta `.git`, e nem a pasta `.github` (se houver)!

Arquivos que **você deve copiar:**

* pastas 
* .html
* .css
* .js 
* .png, .jpg, .gif - imagens em geral

Arquivos que **você não deve copiar:**

* .py (se houver)
* README.md
* .gitignore
* Qualquer outro arquivo desconhecido que você não se lembre de ter criado ou mexido.

## Dicas

* Faça o trabalho com o console do seu navegador aberto (e.g. F12 no Google Chrome). Se houver algum erro no código-fonte
  em Javascript, o console não apenas irá dizer com uma mensagem em vermelho, como também irá apontar em qual linha está
  o problema.
  * Da mesma maneira, o console irá dizer qual o tipo de problema que seu código tem, em inglês. Copie e cole a mensagem
    de erro no Google para descobrir o que ela significa.
* Como Javascript é uma linguagem de programação interpretada, você pode copiar e colar o código das funções no próprio 
  console do navegador, e fazer testes.

## Requisitos

* A receita que você irá usar é a mesma dos trabalhos anteriores dessa disciplina.
* Você deverá calcular na mão qual a relação entre porções _vs_ ingredientes, para cada um dos ingredientes. Por exemplo,
  se a receita original for 

```
Ovos cozidos
Ingredientes
1 ovo
200ml de água
Sal a gosto
```

E o usuário desejar duas porções dessa receita, a calculadora deverá dizer que nova quantidade de ingredientes será

```
Ovos cozidos
Ingredientes
2 ovos
400ml de água
Sal a gosto
```

Perceba que não existe uma maneira "certa" ou "única" de implementar essa calculadora no seu site. Você é livre para 
implementá-la da maneira que bem entender: pode colocá-la na página principal do seu site; ou então criar uma nova página
apenas para ela; ou incluí-la em uma seção de ingredientes do site. Você é quem decide.

## Recursos 

São dados dois exemplos de sites que usam o DOM -- [Document Object Model](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
para manipular páginas HTML: 

* O [exemplo01](exemplo01) possui diversas funcionalidades - como trocar o texto de uma página, a sua cor, etc.
* O [exemplo02](exemplo02) é mais próximo do que a calculadora deve ser. Você não precisa fazê-la exatamente igual à este
  exemplo, mas ele é um bom ponto de partida.

Além disso, é **impossível** fazer este trabalho utilizando apenas os conhecimentos que vimos em aula. Você **deve** pesquisar
no Google maneiras de como implementar recursos. Por exemplo, uma busca por _como trocar o texto de um parágrafo em javascript_
irá trazer diversas páginas com pessoas com a mesma dúvida que você; use isto ao seu favor!

## Nota

A avaliação desse trabalho será subjetiva. Quanto mais próximo do objetivo principal do trabalho o seu exercício estiver,
melhor a nota.

## Bibliografia

* [Document Object Model](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
* [Element](https://developer.mozilla.org/pt-BR/docs/Web/API/Element)
* [Arrays em Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
* [Biblioteca Math em Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)
