"use client";

import { Suspense } from "react";
import CheckoutContent from "./checkoutcontext";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}