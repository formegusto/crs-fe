import { Box } from "@chakra-ui/react";
import ReportItem from "./ReportItem";

function Report() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flex="1"
      overflowY="scroll"
      sx={{
        ".report-item": {
          marginBottom: "16px",
        },
        ".report-item:not(:nth-child(3n))": {
          marginRight: "24px",
        },
      }}
    >
      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />
    </Box>
  );
}

export default Report;
