require('../src/db/mongoose')
const Task = require('../src/models/task')

// 60810643e36edf5334085a54

// Task.findByIdAndDelete('60810643e36edf5334085a54').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed  })
    return count;
}

deleteTaskAndCount('6081305e610cbd62b4a0c424', false).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})