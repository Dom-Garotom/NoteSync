import { createContext } from 'react';

interface CreateMenuContextProps {
    isVisible : boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateMenuContextDefaultValue: CreateMenuContextProps = {
isVisible : false ,
setIsVisible : () => ''
};

export const CreateMenuContext = createContext<CreateMenuContextProps>(
    CreateMenuContextDefaultValue,
);
