"use client";

import CustomeButton from "@/components/custome_ui/CustomeButton";
import MyHeader from "@/components/custome_ui/MyHeader";
import React from "react";

const UITestPage = () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex flex-col justify-center items-center">
        <CustomeButton
          className="border border-green-600 w-[400px]"
          variant="danger"
          fontSize="large"
        >
          Testing CustomeButton!
        </CustomeButton>

        <CustomeButton
          variant="pink"
          fontSize="sm"
          onClick={(e) => alert(JSON.stringify(e.target, null, 2))}
        >
          Btn two
        </CustomeButton>

        <MyHeader bgColor="red">Red</MyHeader>
        <MyHeader bgColor="green" className="mt-4">
          green
        </MyHeader>
        <MyHeader bgColor="sky" className={"mt-4"}>
          Sky
        </MyHeader>
      </main>
    </React.Fragment>
  );
};

export default UITestPage;
