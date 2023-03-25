import { useState } from "react";

export const useHandlerHeader = () => {
    const [show, setShow] = useState(false);
    function handleClick() {
        setShow(!show);
    }
    return { show, handleClick };
};