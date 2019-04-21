const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = Express()
const route = require('express').Router()
const db = require('./data')


// teams
route.get('/teams',  (_, res, next) => {
  try {
    const data = db.teams;
    res.json({ data })
  } catch (error) {
    next(error)
  }
})

route.get('/teams/:id',  (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const data = db.teams.find(t => t.id === id);
    res.json({ data })
  } catch (error) {
    next(error)
  }
})

// profiles
route.get('/profiles',  (_, res, next) => {
  try {
    const data = db.profiles;
    res.json({ data })
  } catch (error) {
    next(error)
  }
})

route.get('/profiles/:id',  (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const data = db.profiles.find(p => p.id === id);
    res.json({ data })
  } catch (error) {
    next(error)
  }
})

// memes
route.get('/memes', (req, res, next) => {
  try {
    const id = Number(req.params.teamId);
    const data = db.memesTeams;
    res.json({ data })
  } catch (error) {
    next(error)
  }
})


// chat 
route.get('/chat', (req, res, next) => {
  try {
    const data = db.chat;
    res.json({ data })
  } catch (error) {
    next(error)
  }
})


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', route)

const port = process.env.PORT || 3003

app.listen(port, () => console.log('run...'))