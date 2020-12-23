# Clone do YouTube com NodeJS e VanillaJS

<h2 align="center"> 
	🚧  Em construção...  🚧
</h2>

### Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video

## Backend

- MVC Pattern (Model-View-Controller)
- View:
  Esta parte será feita com o Pugjs (view engine para o express) e vamos modificar as configurações do express no app.set(). O pug vai renderizar uma página com template html
- Locals : res.locals cria variáveis global que podemos usar no template

### MongoDB

- Models: Models são criados do schema usando o método mongoose.model()
- Schema: A document schema is a JSON object that allows you to define the shape and content of documents
- Relacionamentos: Exemplo de relacionamento entre um comentário e um vídeo

```javascript
video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
  },
```

- Babel
- Async/Await
- Usar o try/catch
- Multer Middleware
- ESLint: checar o código e acusar os erros
- Webpack: loaders para sccs, sass => colocar no main.pug o link para o css e o script
- Passportjs: lida com autenticação
- Boas práticas no uso de cookies
