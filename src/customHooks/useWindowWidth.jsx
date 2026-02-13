import { useEffect, useState } from "react";

export function useWindowWidth() {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)

        return () => removeEventListener("resize", handleResize)
    })
    return width
}