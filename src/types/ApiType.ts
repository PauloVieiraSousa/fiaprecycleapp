type User = {
    name: string,
    email: string  
}

type Wallet = {
    balance: number,
    address: string,
    mnemonics: string
}


type Account = {
    user: User,
    wallet: Wallet
}


type Store = {
    name: string,
    category: string,
    address: string,
    favorite: boolean
}

type Dashboard = {
    user: User
    wallet: {
        balance: number
    }
}
