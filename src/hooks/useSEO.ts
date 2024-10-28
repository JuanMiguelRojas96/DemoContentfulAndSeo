import { useEffect, useRef } from "react";


export default function useSEO(title: string, description: string): void {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(document.querySelector('meta[name="description"]'));


  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = title + " - AppPelículas";
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title]);


  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    if (description) {
      metaDescription?.setAttribute('content', description);
    }

    return () => metaDescription?.setAttribute('content', previousDescription?.getAttribute('content') ?? '');
  }, [description]);

}