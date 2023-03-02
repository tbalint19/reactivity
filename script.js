const data = (initialValue) => {
    let _value = initialValue
    let subscriptions = []

    const get = () => _value

    const set = (newValue) => {
        _value = newValue
        for (const fn of subscriptions) {
            fn(newValue)
        }
    }

    const subscribe = (fn) => {
        subscriptions.push(fn)
        fn(_value)
    }

    return {
        get,
        set,
        subscribe
    }
}

const renderPage = (val) => console.log(`Page: ${val}`)
const renderNavbar = (val) => console.log(`Navbar: ${val}`)

let number = data(5)
let double = data(null)

number.subscribe(num => double.set(num * 2))
double.subscribe(renderNavbar)

number.set(6)

number.set(152)

number.set(84)
