# Focus Flow ⏱️

## Descrição do Projeto

O **Focus Flow** é um sistema de gerenciamento de tarefas com foco em produtividade, inspirado em técnicas como Pomodoro. Ele permite que o usuário organize suas tarefas, acompanhe o tempo gasto em cada uma e visualize o progresso de conclusão.  

O aplicativo foi desenvolvido com **React e TypeScript**, garantindo tipagem estática e maior segurança no código. Ele é ideal para estudantes, profissionais ou qualquer pessoa que queira aumentar a produtividade e o controle sobre suas tarefas diárias.

---

## Funcionalidades

- **Adicionar tarefas pendentes** com título e descrição.  
- **Mover tarefas para em andamento** e monitorar o tempo gasto em cada uma.  
- **Timer integrado**:  
  - Contagem regressiva configurável.  
  - Possibilidade de pausar e reiniciar o timer.  
  - Adição automática de 30 minutos caso o usuário não finalize a tarefa.  
  - Reset do timer quando a tarefa é finalizada.  
- **Finalizar tarefas** e movê-las para a lista de tarefas concluídas.  
- **Deletar tarefas** tanto pendentes quanto concluídas.  
- **Indicador de progresso** mostrando a porcentagem de tarefas finalizadas.  

---

## Tecnologias Utilizadas

- **Frontend**:  
  - React.js (hooks, componentes funcionais)  
  - TypeScript (tipagem estática)  
  - CSS Modules / Arquivos de estilo separados

- **Gerenciamento de Estado**:  
  - `useState` e `useEffect` para manipulação de estados e ciclo de vida do timer.  

- **Estrutura de Componentes**:  
  - `PreTasks` – Lista de tarefas pendentes com opção de adicionar.  
  - `InTasks` – Tarefas em andamento.  
  - `PostTasks` – Tarefas finalizadas.  
  - `Timer` – Contador regressivo para tarefas em andamento.  
  - `FormNewTask` – Formulário para criar novas tarefas.  
  - `FormConfirmNext` – Confirmação para passar tarefa para próxima etapa.  
  - `FormEndedTime` – Notificação quando o tempo da tarefa acaba, com opção de adicionar mais tempo ou finalizar.  

---

## Problema que o projeto resolve

Muitas pessoas têm dificuldade em organizar suas tarefas diárias e controlar o tempo que gastam em cada atividade. O **Focus Flow** resolve isso ao:

- Fornecer uma forma clara de **visualizar tarefas pendentes, em andamento e finalizadas**.  
- Permitir **controle de tempo** com o timer integrado, ajudando na gestão eficiente de atividades.  
- Facilitar o acompanhamento do progresso e **motivar o usuário a completar tarefas**.  
- Evitar a perda de foco ou procrastinação, oferecendo **extensão de tempo controlada** quando necessário.  

---

## Estrutura do Projeto

