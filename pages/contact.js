import { useEffect } from "react";
import { useAppContext } from "../contexts/state";

export default function Contact() {
  const sharedState = useAppContext();
  const setWindowTitle = sharedState.windowTitle[1];

  useEffect(() => {
    setWindowTitle("Contact");
  }, []);

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <p>- Under maintenance 🔨 -</p>
      </div>
    </>
  );
}
