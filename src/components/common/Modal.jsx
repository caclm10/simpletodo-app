import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { cn } from '@/lib'

const Modal = ({
    isOpen = false,
    isAppear = false,
    isCenter = false,
    onClose = () => { },
    children
}) => {
    return (
        <Transition appear={isAppear} show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50"></div>
                </Transition.Child>

                <div className={cn(
                    "fixed left-0 top-0 w-screen h-screen flex justify-center py-16",
                    isCenter ? "items-center" : "items-start"
                )}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="flex flex-col w-full max-w-md transform rounded-md bg-white transition-all max-h-full overflow-hidden overscroll-y-none relative">
                            <button type="button" className="absolute top-3 right-4" onClick={onClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="m7 7l10 10M7 17L17 7"
                                    />
                                </svg>
                            </button>
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

Modal.Header = ({ title = "" }) => (
    <div className="px-6 py-4">
        <Dialog.Title as="h4" className="font-semibold text-xl">{title}</Dialog.Title>
    </div>
)

Modal.Body = ({ children }) => (
    <div className="flex-1 overflow-auto px-6 py-2">
        {children}
    </div>
)

Modal.Footer = ({ children }) => (
    <div className="flex items-center justify-end space-x-1.5 px-6 py-4">
        {children}
    </div>
)

export default Modal