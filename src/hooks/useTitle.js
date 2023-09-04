import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Kids Sports | ${title}`;
  }, [title]);
};

export default useTitle;
