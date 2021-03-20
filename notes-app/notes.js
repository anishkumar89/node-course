const fs = require('fs')
const chalk = require('chalk')
const { stringify } = require('querystring')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    debugger
    
    if(!duplicateNote){
        notes.push({
            title : title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep) 
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

const readNote = (title) => {
    const notes = loadNotes()
    const availableNote = notes.find(note => note.title === title)
    if(availableNote){
        console.log(chalk.inverse(availableNote.title))
        console.log(availableNote.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach(note => console.log(chalk.yellow.inverse(note.title)))

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}