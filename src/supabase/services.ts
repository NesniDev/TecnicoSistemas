import { supabase } from "./index"

const ERROR_CODE_ALREADY_EXISTS = '23505'
const ERROR_CODE_TABLE_NOT_FOUND = 'PGRST205'


export const saveForm = async (name: string, email: string, message: string) => {
    const { data, error } = await supabase.from('Form').insert({
        name,
        email,
        message
    })
    if (error?.code === ERROR_CODE_ALREADY_EXISTS) {
        return {
            duplicate: true,
            success: false,
            message: 'El correo electronico ya existe',
        }
    }
    if (error) {
        console.log(error)
        return {
            duplicate: false,
            success: false,
            message: 'Hubo un error al enviar el formulario',
        }
    }
    return {
        duplicate: false,
        success: true,
        error: null,
    
    }
}