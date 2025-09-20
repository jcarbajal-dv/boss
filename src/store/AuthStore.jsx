import { create } from "zustand";
import { useState } from "react";

export const useAuthStore = create((set, get) => ({

    signInWithMail: async(p)=> {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.password,
        })
        if(error){
            return null;
        }
    },

    signOut: async()=> {
        const {error} = await supabase.auth.signOut();

        if(error) throw new Error("Ocurrio un error al cerrar sesion" + error);
    }

    

}))