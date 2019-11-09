import IChatUser from "./IChatUser";
import IChatMessage from "./IChatMessage";

export default interface IRoom {
    users: IChatUser[],
    messages: IChatMessage[],
}