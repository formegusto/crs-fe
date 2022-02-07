import {
  Box,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Line, LineChart, ReferenceLine, XAxis } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 700, amt: 2400 },
  { name: "Page B", uv: 300, pv: 400, amt: 2100 },
  { name: "Page C", uv: 700, pv: 300, amt: 2550 },
  { name: "Page D", uv: 400, pv: 700, amt: 2400 },
  { name: "Page E", uv: 300, pv: 400, amt: 2100 },
  { name: "Page F", uv: 700, pv: 300, amt: 2550 },
];

function ReportItem() {
  const {
    colors: { graph },
  } = useTheme();

  return (
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
        아파트 10% 80% 시뮬레이팅 보고서 1
      </Text>
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
            10% ~ 80%
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
  );
}

export default ReportItem;
