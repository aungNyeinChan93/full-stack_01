import CustomeButton from "@/components/custome_ui/CustomeButton";
import React from "react";

const UITestPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <CustomeButton
          className="border border-green-600 w-[400px]"
          variant="danger"
          fontSize="large"
        >
          Testing CustomeButton!
        </CustomeButton>
      </main>
    </React.Fragment>
  );
};

export default UITestPage;
