import { Transition } from '@headlessui/react'


const Transition_Hero = ({show, children}) => {
    return (
         <Transition
        show={show}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
        </Transition>
    )
}

export default Transition_Hero

