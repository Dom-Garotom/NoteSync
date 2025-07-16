import SectionTitle from '@/src/components/atoms/SectionTitle'
import TextField from '@/src/components/atoms/TextField'
import React from 'react'
import { useFormContext } from 'react-hook-form'


const RegisterFormSection: React.FC = () => {
    const { control, formState } = useFormContext()
    const { errors } = formState

    return (
        <>
            <SectionTitle text='Criar conta' />

            <TextField
                label='Nome'
                formProps={{
                    name: 'name',
                    control: control
                }}
                textFieldAttributes={{
                    placeholder: 'Nome do usuário'
                }}
                errorMessage={errors.name?.message?.toString()}
            />

            <TextField
                label='Email'
                formProps={{
                    name: 'email',
                    control: control
                }}
                textFieldAttributes={{
                    placeholder: 'Email do usuário'
                }}
                errorMessage={errors.email?.message?.toString()}
            />

            <TextField
                label='Senha'
                formProps={{
                    name: 'password',
                    control: control
                }}
                textFieldAttributes={{
                    placeholder: 'Senha do usuário'
                }}
                errorMessage={errors.password?.message?.toString()}
            />

            <TextField
                label='Confirmar senha'
                formProps={{
                    name: 'confirmPassword',
                    control: control
                }}
                textFieldAttributes={{
                    placeholder: 'Confirme a senha do usuário'
                }}
                errorMessage={errors.confirmPassword?.message?.toString()}
            />

        </>
    )
}

export default RegisterFormSection