# API, REST e RESTFUL

## API

- Faz a comunicação entre serviços e fornece algumas funcionalidades do mesmo.
- É o intermediador entre a interface WEB ou mobile (Client) e o servidor da aplicação (Server).

## REST

- Delimita algumas obrigações na tranferência de *dados*
- Utiliza o Protocolo HTTP
- Resources: Uma entidade ou um objeto. Dentro de um Resouce possuí *dados*

## RESTFUL

### 6 NECESSIDADES (constraints) para ser RESTful

- _Uniform Interface_: Uma constância. API precisa ser coerente para quem vai consumi-lá. Fazendo sentido, e não confusa. Logo, coisas como:

1. O uso correto dos **verbos** HTTP;
2. **Endpoints** coerentes (todos os endpoints no plural, por exemplo);
3. Usar somente uma **linguagem** de comunicação (json) e não várias ao mesmo tempo;
4. Sempre enviar **respostas** aos clientes;

- _Client-server_: É a separação entre a parte Client e Server

- _Cacheable_: O cliente irá especificar se a resposta da requisição deverá ser explicíta ou não.

- _Stateless_: Cada requisição que o usuário faz deverá ter as devidas informações para o servidor entender e responder. A sessão do usuário deverá ser enviada em todas as requisições sem que o servidor lembre deste usuário, o servidor não poderá manter o estado (State) da requisição

- _Layered System_: O usuário acessa um endpoint sem precisar saber da complexidade por trás da aplicação

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.
