"use client";

/* Calculo para estabilizar o layout no mobile*/

import { useVhFix } from "@/hooks/useVhFix";
export function VhProvider({children}:{children: React.ReactNode}) {
  useVhFix();
  return <>{children}</>; 
};
