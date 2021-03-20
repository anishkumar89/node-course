// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = x => x * x

// console.log(square(3))

const event = {
    eventName: 'Birthday Party',
    guestList: ['Anish', 'Puja', 'Ishan'],
    printGuestList () {
        console.log('Guest List for '+ this.eventName)
        this.guestList.forEach(guest => console.log(guest + ' is attending ' + this.eventName))
    }
}

event.printGuestList()