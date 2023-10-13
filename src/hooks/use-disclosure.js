import { useState } from 'react'

const useDisclosure = (defaultValue = false) => {
    const [value, setValue] = useState(defaultValue)

    const open = () => {
        setValue(true)
    }

    const close = () => {
        setValue(false)
    }

    return {
        isOpen: value,
        open,
        close
    }
}

export default useDisclosure