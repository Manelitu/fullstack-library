## Configurando e inicializando o projeto

Primeiramente deverá fazer o clone da aplicação em sua máquina:

Através do https
```
    git clone https://github.com/Manelitu/fullstack-library.git
```

Através do ssh
```
    git clone git@github.com:Manelitu/fullstack-library.git
```

Utilizamos o `npm install` para instalar todas as depedências utilizadas no projeto.

```
    npm install 
```
Para essa próxima etapa é necessário ter o arquivo `.env` configurado e o postgres instalado em sua máquina

Logo após a instalação, utilizamos o `npx prisma generate` para inicilizar e gerar um cliente prisma. 
```
    npx prisma generate
```

E, por fim, usamos o `npm run dev` para iniciar o servidor em modo de desenvolvimento utilizando a biblioteca `nodemon` no endereço: [http://localhost:3000](http://localhost:3000)
```
    npm run dev
```
