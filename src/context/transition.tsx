import { createContext, useState, useContext } from 'react'

interface TransitionContext {
    nextRoute: string | null
    setNextRoute: (newValue: string | null) => void
    previousRoute: string | null
    setPreviousRoute: (newValue: string | null) => void
}

const transitionContext = createContext({
    nextRoute: null,
    setNextRoute: (_newValue: string | null) => { },
    previousRoute: null,
    setPreviousRoute: (_newValue: string | null) => { }
} as TransitionContext)

export function useTransitionContext() {
    const context = useContext(transitionContext)

    return context;
}

function TransitionProvider({ children }: { children: React.ReactNode }) {
    const [nextRoute, setNextRoute] = useState<string | null>(null)
    const [previousRoute, setPreviousRoute] = useState<string | null>(null)


    return <transitionContext.Provider value={{ nextRoute, setNextRoute, previousRoute, setPreviousRoute }}>
        {children}
    </transitionContext.Provider>
}

export default TransitionProvider