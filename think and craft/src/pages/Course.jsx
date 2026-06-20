import React from "react";
import { useParams } from "react-router-dom";

export default function Course() {

  const { id } = useParams();

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        الدورة رقم {id}
      </h1>

      <p className="mt-4">
        تفاصيل الدورة التعليمية.
      </p>

    </div>
  );
}