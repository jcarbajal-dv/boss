import {create} from 'zustand';
import { InsertarUsuarios, supabase } from '../index';  

export const useUsuariosStore = create((set,get) => ({

    insertarUsuarioAdmin: async(p)=> {
        const {data, error} = await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,

        });
        console.log("data del registro del usuario auth ", data);
        if(error) return;
        const dataUser = await InsertarUsuarios({
            idAuth: data.user.id, 
            fechaRegistro: new Date(), 
            tipoUser: "Admin",
        });
        return dataUser;

    },
}));