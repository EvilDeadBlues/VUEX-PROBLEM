import IChatUser from "./IChatUser";

export default interface IMessage {
    Sender: IChatUser,
    Content: string,
}