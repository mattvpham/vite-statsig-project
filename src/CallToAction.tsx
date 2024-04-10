import { Statsig, useGate } from "statsig-react";

export const CallToAction = () => {
  const { value: ctaGate } = useGate("cta_gate");
  console.log(ctaGate);

  if (!ctaGate) {
    return (
      <div>
        <button onClick={() => Statsig.logEvent("cta_clicked")}>
          Please click me
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => Statsig.logEvent("cta_clicked")}>
          CLICK ME NOW!!
        </button>
      </div>
    );
  }
};
