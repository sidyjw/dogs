import { useEffect } from "react";
import IHead from "types/components/Head";

function Head(props: IHead) {
  useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", props.description || "");
  }, [props.description, props.title]);

  return <head></head>;
}

export default Head;
