import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Select Vehicle Type",
  "Select Package",
  "Select Date and Time",
  "Fill in",
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <div className=" bg-neutral-800 py-4 w-full">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <p className=" text-white">{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
