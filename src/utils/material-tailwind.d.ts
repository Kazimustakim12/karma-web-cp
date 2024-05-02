import {} from "@material-tailwind/react";

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module "@material-tailwind/react" {
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface SelectProps extends EventCapture {
    placeholder?: unknown;
  }

  export interface BreadcrumbsProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TabProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TabPanelProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TabsBodyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TabsHeaderProps extends EventCapture {
    placeholder?: unknown;
  }
  // more...
}
