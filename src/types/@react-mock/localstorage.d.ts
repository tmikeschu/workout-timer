declare module "@react-mock/localstorage" {
  import React from "react";
  export const LocalStorageMock: React.FC<{ items: Record<string, string> }>;
}
