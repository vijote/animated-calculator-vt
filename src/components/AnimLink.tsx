import { flushSync } from "react-dom";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTransitionContext } from "../context/transition";

interface LinkProps {
    to: string
    children: React.ReactNode
    className?: string
    canAnimate?: boolean
    hide?: boolean
}

function AnimLink(props: LinkProps) {
    const navigate = useNavigate();
    const linkRef = useRef<HTMLAnchorElement>(null)
    const location = useLocation();
    const { nextRoute, previousRoute, setNextRoute, setPreviousRoute } = useTransitionContext()
    const comesFromPropRoute = previousRoute === props.to
    const goesToPropRoute = nextRoute === props.to

    function handleClick(event: React.MouseEvent) {
        event.preventDefault();

        if(props.to === location.pathname) return;
        
        if (linkRef.current && props.canAnimate) {
            const style = linkRef.current.style as CSSStyleDeclarationVTN
            style.viewTransitionName = 'animate';
        }

        const transition = document.startViewTransition(() => {
            flushSync(() => {
                setNextRoute(props.to)
                setPreviousRoute(location.pathname)
                navigate(props.to);
            });
        });

        transition.finished.finally(() => {
            setNextRoute(null)
            setPreviousRoute(null)
            if (linkRef.current && props.canAnimate) {
                const style = linkRef.current.style as CSSStyleDeclarationVTN
                style.viewTransitionName = '';
            }
        })
    }

    return (
        <a data-hide={props.hide} ref={linkRef} className={`link ${props.className ? props.className : ""} ${(comesFromPropRoute || goesToPropRoute) && props.canAnimate ? "animate" : ""}`} href={props.to} onClick={handleClick}>
            {props.children}
        </a>
    );
}

export default AnimLink