"use client";
import TableSkeleton from "@/components/admin/orders/TableSkeleton";
import { useState } from "react";

export default function AdminOrders() {
  const [loading] = useState(true);

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className="py-6 pl-6 pr-10">
      {/* <DataTable
        columns={columns}
        data={foodOrders || []}
        setFoodOrders={setFoodOrders}
      /> */}
    </div>
  );
}
