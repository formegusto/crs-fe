import {
  Box,
  Flex,
  Spinner,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { Line, LineChart, ReferenceLine, XAxis } from "recharts";
import API from "../../api";
import { PosGraphStep, stepToName } from "../../store/common/viewData";
import ProcessConnector from "../../store/process/connector";
import { ReportBase } from "../../store/process/types";

const data = [
  { name: "Page A", uv: 400, pv: 700, amt: 2400 },
  { name: "Page B", uv: 300, pv: 400, amt: 2100 },
  { name: "Page C", uv: 700, pv: 300, amt: 2550 },
  { name: "Page D", uv: 400, pv: 700, amt: 2400 },
  { name: "Page E", uv: 300, pv: 400, amt: 2100 },
  { name: "Page F", uv: 700, pv: 300, amt: 2550 },
];

type CustomProps = {
  originalReport: ReportBase;
};

interface Props extends ConnectedProps<typeof ProcessConnector>, CustomProps {}

function ReportItem({ confirmAlert, ui: { alert }, originalReport }: Props) {
  const id = React.useState<string>(originalReport._id);
  const [report, setReport] = React.useState<ReportBase>(originalReport);
  const {
    colors: { graph },
  } = useTheme();

  const changeReport = React.useCallback(async () => {
    try {
      const res = await API["process"].getProcess(id[0]);
      const newReport = res.data.data as any;

      setReport(newReport);
      confirmAlert();
    } catch (err) {
      console.error(err);
    }
  }, [id, confirmAlert]);

  React.useEffect(() => {
    if (alert) {
      if (alert.id === id[0]) {
        changeReport();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert, id]);

  return (
    <Link
      to="/report"
      state={{
        id: id,
      }}
    >
      <Box
        className="report-item"
        border="1px"
        borderRadius="16px"
        borderColor="modeborder"
        width="292px"
        boxSizing="border-box"
        padding="16px 12px"
        cursor="pointer"
        transition="0.3s"
        sx={{
          "& .recharts-wrapper": {
            cursor: "pointer !important",
          },
        }}
      >
        <Text textStyle="h6" marginBottom="6px">
          {report.title}
        </Text>
        {PosGraphStep.includes(report.step) ? (
          <LineChart width={268} height={180} data={data}>
            <XAxis dataKey="name" hide />
            <ReferenceLine x="Page D" stroke={graph.red} />
            <Line
              type="monotone"
              dataKey="uv"
              stroke={graph.red}
              dot={false}
              animationDuration={1500}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke={graph.blue}
              dot={false}
              animationDuration={1500}
            />
          </LineChart>
        ) : (
          <Flex
            width="268px"
            height="180px"
            justify="center"
            align="center"
            direction="column"
          >
            <Spinner
              size="lg"
              speed="1.5s"
              thickness="4px"
              color="modetext"
              mb={8}
            />
            <Text textStyle="p2">
              현재 <b>"{stepToName[report.step]}"</b>단계 진행중입니다.
            </Text>
            <Text textStyle="p2">
              평균분석이 완료되면 결과를 확인할 수 있습니다.
            </Text>
          </Flex>
        )}

        <Box display="flex" marginBottom="8px">
          <Stat>
            <StatLabel color="modern.200">세대 총 사용량</StatLabel>
            <Text textStyle="p2" fontWeight="bold">
              9,990kWh
            </Text>
          </Stat>
          <Stat>
            <StatLabel color="modern.200">공동설비사용량</StatLabel>
            <Text textStyle="p2" fontWeight="bold">
              {report.minPer}% ~ {report.maxPer}%
            </Text>
          </Stat>
        </Box>
        <Box display="flex">
          <Stat>
            <StatLabel color="modern.200">종합계약</StatLabel>
            <StatHelpText opacity={1}>
              <StatArrow type="increase" color="graph.red" />
              <Text textStyle="p2" fontWeight="bold" as="span">
                35%
              </Text>
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel color="modern.200">종합계약</StatLabel>
            <StatHelpText opacity={1}>
              <StatArrow type="decrease" color="graph.blue" />
              <Text textStyle="p2" fontWeight="bold" as="span">
                35%
              </Text>
            </StatHelpText>
          </Stat>
        </Box>
      </Box>
    </Link>
  );
}

export default ProcessConnector(ReportItem);
