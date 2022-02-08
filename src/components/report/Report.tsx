import { Box } from "@chakra-ui/react";
import React from "react";
import ReportItem from "./ReportItem";
import ReportSkeleton from "./ReportSkeleton";

function Report() {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <ReportSkeleton />
  ) : (
    <Box
      display="flex"
      flexWrap="wrap"
      flex="1"
      overflowY="scroll"
      sx={{
        a: {
          marginBottom: "16px",
        },
        "a:not(:nth-of-type(3n))": {
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
