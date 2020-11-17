const User = (first, last) => ({
    firstName: first,
    lastName: last,
    fullName() {
        return this.firstName + this.lastName;
    }
})

const user = User('Johan', 'Lindgr3n')
console.log(user.fullName())

interface UserTyped {
    firstName: String,
    lastName: String
}

function createUserTyped(user: UserTyped) {
    return { firstName: user.firstName, lastName: user.lastName, fullName: () => this.firstName + this.lastName }
}

createUserTyped({ firstName: 'Johan', lastName: 'Lindgr3n' })