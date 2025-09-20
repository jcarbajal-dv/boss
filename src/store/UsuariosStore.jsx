import {create} from 'zustand';
import { InsertarUsuarios } from '../index';  

export const useUsuariosStore = create((set,get) => ({

    insertarUsuarioAdmin: async(P)=> {
        const {data, error} = await supabase.auth.signUp({
            email: P.correo,
            password: P.pass,

        });
        console.log("data del registro del usuario ", data);
        if(error) return;
        await InsertarUsuarios({idAuth: data.user.id, fechaRegistro: new Date(), tipoUser: "Admin"})

    },
}));