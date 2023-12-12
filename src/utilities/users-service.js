import * as usersAPI from './users-api'

export async function signUp(userData){
    const token = await usersAPI.signup(userData)
    return token
}