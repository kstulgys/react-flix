import React from "react";

export default function Loader() {
  return (
    <div class="w-100 h-100 d-flex align-items-center justify-content-center">
      <svg
        width="200px"
        height="200px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        class="lds-ripple"
        style={{ background: "none" }}
      >
        <circle
          cx="50"
          cy="50"
          r="3.944"
          fill="none"
          ng-attr-stroke="{{config.c1}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="#e15b64"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="2"
            keySplines="0 0.2 0.8 1"
            begin="-1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="2"
            keySplines="0.2 0 0.8 1"
            begin="-1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="27.1801"
          fill="none"
          ng-attr-stroke="{{config.c2}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="#f47e60"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="2"
            keySplines="0 0.2 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="2"
            keySplines="0.2 0 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
