import React from "react";
import RecoReportComponent from "../components/RecoReportComponent";
import RecoReportSkeleton from "../components/report/RecoReportSkeleton";

function ReportPage() {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? <RecoReportSkeleton /> : <RecoReportComponent />;
}

export default ReportPage;
