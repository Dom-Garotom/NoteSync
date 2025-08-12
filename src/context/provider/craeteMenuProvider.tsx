import React, { ReactNode, useState } from 'react'
import { CreateMenuContext } from '../model/createMenuModel'

interface CreateMenuProviderProps {
    children: ReactNode
}

const CreateMenuProvider: React.FC<CreateMenuProviderProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <CreateMenuContext.Provider value={{
            isVisible,
            setIsVisible
        }}>
            {children}
        </CreateMenuContext.Provider>
    )
}

export default CreateMenuProvider