# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Em ambos os casos, o script será carregado paralelamente à página, porém com o atributo 'async' o script será executado assim que seu carregamento for concluído, enquanto que com o atributo 'defer' o script será executado apenas quando a análise do HTML estiver finalizada. Os atributos são utilizados em conjunto para o caso de algum navegador não possuir suporte para algum deles.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Quando a API estiver pronta a função passada nesse parâmetro será chamada, neste caso, a função 'initMap'.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: A função é responsável pelo carregamento do mapa na página, ao retirar o parâmetro &callback=initMap, a função não é chamada e, portanto, o mapa não será exibido.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Retirando os parâmtros 'async' e 'defer' para carregar a API de forma síncrona e adicionando um evento no arquivo index.js que irá chamar a função quando a página estiver carregada, por exemplo:
google.maps.event.addDomListener(window, 'load', initMap) 

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R:`<link rel="manifest" href="manifest.json">`: Fornece informações sobre a aplicação em um arquivo de text (.json). Tem como objetivo permitir a instalação de aplicações web na tela inicial de um dispositivo móvel ou desktop.

  `<meta name="theme-color" content="">`: Serve para alterar a cor de tema em dispositivos Android.

  `<meta name="apple-mobile-web-app-capable" content="yes">`: Ativa o modo 'standalone'em dispositivos com iOS.

  `<meta name="apple-mobile-web-app-status-bar-style" content="black">`: Altera a aparência da barra de status em dispositivos com iOS.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Para ser considerada como PWA, é necessário criar o arquivo 'manisfest.json' com as informações da aplicação, adicionar uma cor tema no parâmetro 'content' da tag 'meta name= "theme-color"' e é necessário registrar um Service Worker.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: O método ngOnInit serve para adicionar funcionalidades na inicialização do componente. Os outros métodos são:

ngOnChanges() - O método é chamado antes de ngOnInit() e sempre que uma ou mais propriedades foram alteradas. O método recebe um objeto com o valor das propriedades anteriores e atuais.

ngDoCheck() - Detecta e age sobre mudanças que o Angular não é capaz de detectar sozinho.

ngAfterContentInit() - Responde após o Angular lançar o conteúdo externo na 'view' do componente ou na 'view' em que a diretiva está.

ngAfterViewInit() - Responde após o Angular inicializar as 'views' do componente e as 'views' filhas ou a 'view' em que a diretiva está.

ngAfterViewChecked() - Responde após o Angular checar as 'views' do componente e as 'views' filhas ou a 'view' em que a diretiva está.

ngOnDestroy() - Realiza uma limpeza logo antes do Angular destruir a diretiva ou componente pra evitar vazamentos de memória ('_memory leaks_').

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web Componets são um conjunto de diferentes tecnologias que permitem a criação de elementos personalizados reutilizáveis e utilizá-los em web apps.

 Além da reusabilidade, web components melhoraram a manutenção do código, podem rodar em diferentes browsers por serem desenvolvidos utilizando HTML, CSS e JavaScript e podem ser encapsulados, o que evita que o componente seja afetado por partes externas.

### c) Para que serve a tag ngFor do angular?
R: ngFor permite iterar sobre arrays ou objetos e criar templates para cada item.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: A variável legends está sendo definida como um array de strings e recebendo um array vazio.

### e) Como funciona a api Events do Ionic? Para que serve?
R: Serve para passar dados e mensagens entre páginas e componentes.

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: Flexbox é um modelo de layout que tem como ideia principal facilitar a responsividade, permitindo que os elementos tenham dimensões flexiveis para se adaptar ao tamanho do container em que estão inseridos. 

A tag ion-grid age como um container para as linhas e colunas.

A tag ion-row são componentes horizontais do sistema de grid e podem conter um número variável de colunas.

A tag ion-col são as células do sistema de grid. O conteúdo de um grid deve estar dentro de uma coluna, que por sua vez, deve estar dentro de uma linha.

O sistema de grid é baseado em um layout de 12 colunas com '_breakpoints_' baseados no tamanho da tela. A maior vantagem desse sistema é a criação de layouts personalizados para diferentes tamanhos de dispositivos.

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R: Erro de digitação no import do componente _LoadingController_, erro de referência ao método _dismissLoading_, demora na tela de _loading_ inicial e grande quantidade de fotos carregadas de uma vez.

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R: Erro de digitação no import do componente _LoadingController_, erro de referência ao método _dismissLoading_, demora na tela de _loading_ inicial e grande quantidade de fotos carregadas de uma vez.

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: O erro no import do componente impede que a aplicação rode, a referência errada ao método _dismissLoading_ faz com que gere um erro e a mensagem de _loading_ no início não suma. A demora na tela de carregamento inicial e a grande quantidade de fotos carregadas de uma vez deixam a aplicação lenta e afetam a experiência do usuário de forma negativa.

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: Neste caso, ao chamar a função _presentLoading_, ela espera até que seja criado e apresentado o indicador de carregamento da página.

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:A proposta das funções _async_/_await_ é de simplificar o uso de forma síncrona das _Promises_ e executar alguns procedimentos em um grupo de Promises. 

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts `import * as _ from 'lodash';`
R: A biblioteca _lodash_ promete facilitar a manipulação de arrays, objetos, strings, etc. e tornar o código mais limpo e fácil de manter.