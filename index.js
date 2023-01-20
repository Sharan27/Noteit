const express = require('express')
const mongoose = require('mongoose')
const Note = require('./models/Note')
const User = require('./models/User')
const HiddenNote = require('./models/HiddenNote')
const app = express()
const port = 3000
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("static"));

mongoose.connect('mongodb+srv://notesroot:Reset123@notesapp.mtytgmg.mongodb.net/test?tls=true&tlsAllowInvalidCertificates=true&tlsAllowInvalidHostnames=true', function(error){
    if(!error){
      console.log("Connected")
    }

});


app.get('/', (req, res) => {
  res.sendFile("pages/index.html", {root : __dirname})
})

app.get('/login', (req, res) => {
  res.sendFile("pages/login.html", {root : __dirname})
})

app.get('/signup', (req, res) => {
  res.sendFile("pages/signup.html", {root : __dirname})
})

app.get('/hiddenauth', (req, res) => {
  res.sendFile("pages/hiddenauth.html", {root : __dirname})
})
app.get('/hidden', (req, res) => {
  res.sendFile("pages/hidden.html", {root : __dirname})
})

// Endpoints for APIs
app.post('/getnotes', async (req, res) => {
    let notes = await Note.find({email: req.body.email})
    res.status(200).json({success: true, notes})
})

app.post('/login', async (req, res) => {
    let user = await User.findOne(req.body)
    if(!user){
      res.status(200).json({success: false, message: "No user found"})
    }
    else{
      res.status(200).json({success: true, user:{email: user.email, name: user.name}, message: "User found"})
    }

})

app.post('/signup', async(req, res) => {
    const {usertoken} = req.body
    console.log(req.body)
    let user = await User.create(req.body)
    res.status(200).json({success:true, user: user})
})

app.post('/addnote', async (req, res) => {
    const {usertoken} = req.body
    let note = await Note.create(req.body)
    res.status(200).json({success:true, note})
})


app.post('/deletenote', async (req, res) => {
  const {usertoken} = req.body
  HiddenNote.findOneAndDelete(req.body)
  let notes = await Note.findOneAndDelete(req.body)
  res.status(200).json({success:true, notes})
})

//HIDDEN NOTE SECTION
app.post('/loginhidden', async (req, res) => {
  let user = await User.findOne(req.body)
  if(!user){
    res.status(200).json({success: false, message: "No user found"})
  }
  else{
    res.status(200).json({success: true, user:{email: user.email}, message: "User found"})
  }

})
app.post('/hidenote', async (req, res) => {
  const {usertoken} = req.body
  HiddenNote.create(req.body)
  let notes = await Note.findOneAndDelete(req.body)
  res.status(200).json({success:true, notes})
})

app.post('/addhiddennote', async (req, res) => {
  const {usertoken} = req.body
  let note = await HiddenNote.create(req.body)
  res.status(200).json({success:true, note})
})

app.post('/deletehiddennote', async (req, res) => {
  const {usertoken} = req.body
  let notes = await HiddenNote.findOneAndDelete(req.body)
  res.status(200).json({success:true, notes})
})

app.post('/gethiddennotes', async (req, res) => {
  let notes = await HiddenNote.find({email: req.body.email})
  res.status(200).json({success: true, notes})
})

app.post('/unhidenote', async (req, res) => {
  const {usertoken} = req.body
  Note.create(req.body)
  let notes = await HiddenNote.findOneAndDelete(req.body)
  res.status(200).json({success:true, notes})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})