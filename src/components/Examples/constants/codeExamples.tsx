export const codeExamples = [
  {
    path: "SPrinciple",
    description:
      "Problemas: A classe User está tratando tanto a lógica de negócios do usuário quanto a persistência no banco de dados e envio de e-mail. Isso viola o princípio da responsabilidade única.",
    wrongExample: `class User {
          private username: string;
          private email: string;
          
          constructor(username: string, email: string) {
            this.username = username;
            this.email = email;
          }
          
          public saveToDatabase(): void {
            // Lógica para salvar o usuário no banco de dados
            console.log("Salvando usuário {this.username} no banco de dados.");
          }
          
          public sendEmailNotification(): void {
            // Lógica para enviar um e-mail de notificação
            console.log("Enviando e-mail de notificação para {this.email}.");
          }
        }`,
    howToFix:
      "Solução (Aplicando SRP): Vamos corrigir isso dividindo as responsabilidades em classes separadas para a lógica do usuário, persistência no banco de dados e envio de e-mail.",
    improvements: [
      "A classe User agora é responsável apenas por representar um usuário e não se preocupa com a persistência de dados ou envio de e-mails.",
      "As responsabilidades de persistência no banco de dados e envio de e-mails foram movidas para as classes UserDatabase e EmailService, respectivamente, seguindo o princípio da responsabilidade única.",
    ],
    correctedExample: `class User {
          private username: string;
          private email: string;
        
          constructor(username: string, email: string) {
            this.username = username;
            this.email = email;
          }
        
          getUsername(): string {
            return this.username;
          }
        
          getEmail(): string {
            return this.email;
          }
        }
        
        class UserDatabase {
          public save(user: User): void {
            // Lógica para salvar o usuário no banco de dados
            console.log("Salvando usuário {user.getUsername()} no banco de dados.");
          }
        }
        
        class EmailService {
          public sendNotification(email: string): void {
            // Lógica para enviar um e-mail de notificação
            console.log("Enviando e-mail de notificação para {email}.");
          }
        }
        `,
  },
  {
    path: "OPrinciple",
    description:
      "Problemas: A classe Shape precisa ser modificada sempre que uma nova forma é adicionada, violando o princípio Aberto/Fechado.",
    wrongExample: `
    class Shape {
      private type: string;
      private width: number;
      private height: number;
      private radius: number;
    
      constructor(type: string, width: number, height: number, radius: number) {
        this.type = type;
        this.width = width;
        this.height = height;
        this.radius = radius;
      }
    
      public calculateArea(): number {
        if (this.type === 'rectangle') {
          return this.width * this.height;
        } else if (this.type === 'circle') {
          return Math.PI * this.radius ** 2;
        }
    
        throw new Error('Unsupported shape.');
      }
    }`,
    howToFix:
      "Solução (Aplicando OCP): Vamos corrigir isso aplicando o princípio OCP através do uso de herança e polimorfismo.",
    improvements: [
      "Agora temos uma interface Shape que define um contrato para calcular a área de uma forma.",
      "As classes Rectangle e Circle implementam a interface Shape e fornecem suas próprias implementações do método calculateArea().",
      "Podemos adicionar novas formas (por exemplo, um quadrado) sem modificar a classe Shape, seguindo o princípio Aberto/Fechado.",
    ],
    correctedExample: `
    interface Shape {
      calculateArea(): number;
    }
    
    class Rectangle implements Shape {
      private width: number;
      private height: number;
    
      constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
      }
    
      public calculateArea(): number {
        return this.width * this.height;
      }
    }
    
    class Circle implements Shape {
      private radius: number;
    
      constructor(radius: number) {
        this.radius = radius;
      }
    
      public calculateArea(): number {
        return Math.PI * this.radius ** 2;
      }
    }`,
  },
  {
    path: "LPrinciple",
    description:
      "Problema: A classe Square herda da classe Rectangle, mas a herança nesse contexto viola o princípio da substituição de Liskov. Por exemplo, se você tentar usar um objeto Square como se fosse um Rectangle, ele pode levar a resultados inesperados.",
    wrongExample: `
    class Rectangle {
      protected width: number;
      protected height: number;
    
      constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
      }
    
      public setWidth(width: number): void {
        this.width = width;
      }
    
      public setHeight(height: number): void {
        this.height = height;
      }
    
      public getArea(): number {
        return this.width * this.height;
      }
    }
    
    class Square extends Rectangle {
      public setWidth(width: number): void {
        this.width = width;
        this.height = width;
      }
    
      public setHeight(height: number): void {
        this.height = height;
        this.width = height;
      }
    }
    `,
    howToFix:
      "Solução (Aplicando LSP): Vamos corrigir isso reavaliando a hierarquia de classes e garantindo que a herança respeite o princípio de substituição de Liskov.",
    improvements: [
      "Agora, Rectangle e Square implementam a mesma interface Shape, garantindo que qualquer instância de Square possa ser usada no lugar de uma instância de Rectangle sem alterar a correção do programa.",
      "A relação de herança entre Square e Rectangle foi removida, evitando assim a violação do princípio de substituição de Liskov.",
    ],
    correctedExample: `
    interface Shape {
      getArea(): number;
    }
    
    class Rectangle implements Shape {
      protected width: number;
      protected height: number;
    
      constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
      }
    
      public getArea(): number {
        return this.width * this.height;
      }
    }
    
    class Square implements Shape {
      private side: number;
    
      constructor(side: number) {
        this.side = side;
      }
    
      public getArea(): number {
        return this.side * this.side;
      }
    }
    `,
  },
  {
    path: "IPrinciple",
    description:
      "Problema: A interface Worker está violando o princípio da segregação de interfaces, pois nem todos os tipos de trabalhadores precisam de funcionalidades de comer e dormir.",
    wrongExample: `
    interface Worker {
      work(): void;
      eat(): void;
      sleep(): void;
    }
    `,
    howToFix:
      "Solução (Aplicando ISP): Vamos dividir a interface em interfaces mais específicas para melhor aderir ao princípio da segregação de interfaces.",
    improvements: [
      "Agora temos interfaces mais específicas (Workable, Eatable, Sleepable) em vez de uma única interface genérica (Worker).",
      "As classes Worker e Robot implementam apenas as interfaces relevantes para elas, aderindo ao princípio da segregação de interfaces.",
    ],
    correctedExample: `
    interface Workable {
      work(): void;
    }
    
    interface Eatable {
      eat(): void;
    }
    
    interface Sleepable {
      sleep(): void;
    }
    
    class Worker implements Workable, Eatable, Sleepable {
      public work(): void {
        console.log('Working...');
      }
    
      public eat(): void {
        console.log('Eating...');
      }
    
      public sleep(): void {
        console.log('Sleeping...');
      }
    }
    
    class Robot implements Workable {
      public work(): void {
        console.log('Working...');
      }
    }
    
    `,
  },
  {
    path: "DPrinciple",
    description:
      "Problema: A classe OrderManager está violando o princípio da inversão de dependência, pois depende diretamente de uma implementação concreta da classe Logger.",
    wrongExample: `
    class Logger {
      public log(message: string): void {
        console.log(Logging: {message});
      }
    }
    
    class OrderManager {
      private logger: Logger;
    
      constructor() {
        this.logger = new Logger();
      }
    
      public processOrder(order: string): void {
        // Lógica para processar o pedido
        this.logger.log('Order processed: ' + order);
      }
    }
    
    `,
    howToFix:
      "Solução (Aplicando DIP): Vamos corrigir isso introduzindo uma interface LoggerInterface e usando a inversão de dependência para depender de uma abstração, não de uma implementação concreta.",
    improvements: [
      "A classe OrderManager agora depende de uma abstração (LoggerInterface) em vez de uma implementação concreta, seguindo o princípio da inversão de dependência.",
      "Isso permite a flexibilidade de trocar a implementação de Logger por qualquer outra classe que implemente LoggerInterface sem modificar OrderManager.",
    ],
    correctedExample: `
    interface LoggerInterface {
      log(message: string): void;
    }
    
    class Logger implements LoggerInterface {
      public log(message: string): void {
        console.log(Logging: {message});
      }
    }
    
    class OrderManager {
      private logger: LoggerInterface;
    
      constructor(logger: LoggerInterface) {
        this.logger = logger;
      }
    
      public processOrder(order: string): void {
        // Lógica para processar o pedido
        this.logger.log('Order processed: ' + order);
      }
    }
    `,
  },
];
