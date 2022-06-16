import bus from "./bus";


export default function flashMessage (type, message){

    bus.emit("flash", {
        message: message,
        type: type
    })
    
}

