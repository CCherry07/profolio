import { RefObject, useEffect } from "react";

type CallBack = (event: MouseEvent) => void

export const useClickTargetOutsite = (targetRef: RefObject<HTMLElement>, callBack: CallBack) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!targetRef.current || targetRef.current.contains(event.target as HTMLElement)) return
      callBack(event)
    }
    document.addEventListener("click", listener)
    return () => {
      document.removeEventListener("click", listener)
    }
  }, [targetRef, callBack])
}
