//Un modelo es como una tabla de datos
//Simplemente es un objeto para almacenamiento de datos
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true, // Eliminar espacios del texto
        unique: true
    },

    password:{
        type: String,
        required: true
    }
})

export default mongoose.model('User', userSchema)

