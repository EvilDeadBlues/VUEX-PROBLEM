export default interface INewUser {
    username: string,
    email: string,
    ip: string,
    verificationToken: string,
    verificationTokenExpiration: string,
    password: string,
    method: number,
}