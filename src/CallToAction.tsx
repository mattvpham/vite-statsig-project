import { useGate } from "statsig-react";

export const CallToAction = () => {
  const { value: ctaGate } = useGate("cta_gate");
  console.log(ctaGate);

  if (!ctaGate) {
    return (
      <div>
        <button>Please click me</button>
      </div>
    );
  } else {
    return (
      <div>
        <button>CLICK ME NOW!!</button>
      </div>
    );
  }
};
