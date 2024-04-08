import { useEffect, useRef, useState } from "react";

export default function useClipBoard() {
  const [isCopied, setIsCopied] = useState(false);
  const clipBoardEL = useRef(null);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  useEffect(() => {
    const currentEl = clipBoardEL.current;

    if (clipBoardEL) {
      // handler function for the copy button
      currentEl.addEventListener("click", handleCopyClick);
    }

    function handleCopyClick() {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(clipBoardEL.current.textContent)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          const timer = setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      if (clipBoardEL) {
        currentEl.removeEventListener("click", handleCopyClick);
        clearTimeout(timer);
      }
    };
  }, []);

  return { clipBoardEL, isCopied };
}
