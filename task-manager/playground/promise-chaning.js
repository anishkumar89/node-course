require('../src/db/mongoose')
const User = require('../src/models/user')

// 6081073cfd2802490cdee3f1

// User.findByIdAndUpdate('6081073cfd2802490cdee3f1', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count;
}

updateAgeAndCount('608102c4f7d83c550436d8a2', 2).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})