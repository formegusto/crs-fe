import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { ReportBase } from "../store/process/types";

type ItemProps = {
  title?: string;
};

const data = [
  { name: "Page A", uv: 400, pv: 700, amt: 2400 },
  { name: "Page B", uv: 300, pv: 400, amt: 2100 },
  { name: "Page C", uv: 700, pv: 300, amt: 2550 },
  { name: "Page D", uv: 400, pv: 700, amt: 2400 },
  { name: "Page E", uv: 300, pv: 400, amt: 2100 },
  { name: "Page F", uv: 700, pv: 300, amt: 2550 },
];

const barData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function RecoReportItem({
  title,
  children,
}: React.PropsWithChildren<ItemProps>) {
  return (
    <Box bgColor="modebox">
      {title && (
        <Text className="title" textStyle="h3" color="modehead">
          {title}
        </Text>
      )}
      <Flex
        direction="row"
        margin={`${title ? "0" : "36px"} 48px 32px`}
        wrap="wrap"
        sx={{
          "& > *": {
            minWidth: "466px",
            minHeight: "calc(482px / 2)",
            marginBottom: "16px",
          },
          "& > *:nth-of-type(1n)": {
            marginRight: "16px",
          },
          "& .single,.comp": {
            fontWeight: "bold",
          },
          "& .single": {
            color: "graph.blue",
          },
          "& .comp": {
            color: "graph.red",
          },
        }}
      >
        {children}
      </Flex>
    </Box>
  );
}

type Props = ReportBase;
function RecoReportComponent({ recoPercentage, meanAnalysis }: Props) {
  const {
    colors: { graph },
  } = useTheme();

  return (
    <Flex
      direction="column"
      sx={{
        "& > :not(:last-child)": {
          margin: "0 0 24px",
        },
        "& > :first-of-type > .title": {
          margin: "0px 48px 24px",
        },
        "& > :not(:first-of-type) > .title": {
          margin: "32px 48px 24px",
        },
      }}
    >
      <RecoReportItem title="평균치 분석 결과">
        <Text textStyle="h2" fontWeight="thin">
          공동설비사용량
          <br />
          <b>{recoPercentage}%</b>를 기준으로
          <br />
          이상은 <span className="single">단일계약</span>
          <br />
          이하는 <span className="comp">종합계약</span>이 적합해요.
        </Text>
        <Flex alignItems="center" justify="center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={meanAnalysis!.positiveCount}>
              <XAxis dataKey="percentage" hide />
              <ReferenceLine
                x={meanAnalysis!.changePer.positiveCount}
                stroke={graph.red}
              />
              <Line
                type="monotone"
                dataKey="comp"
                stroke={graph.red}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="single"
                stroke={graph.blue}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Flex>
      </RecoReportItem>
      <RecoReportItem>
        <Text textStyle="h2" fontWeight="thin" marginBottom="16px">
          아파트 전체 요금,
          <br />
          공동설비사용요금,
          <br />
          평균 손해율 분석 결과입니다.
        </Text>
        <Flex alignItems="center" justify="center" direction="column">
          <Text textStyle="h5" width="100%">
            아파트 전체 요금
          </Text>
          <ResponsiveContainer width="100%" height={241}>
            <LineChart data={meanAnalysis!.bill}>
              <XAxis dataKey="percentage" hide />
              <ReferenceLine
                x={meanAnalysis!.changePer.bill}
                stroke={graph.red}
              />
              <Line
                type="monotone"
                dataKey="comp"
                stroke={graph.red}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="single"
                stroke={graph.blue}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <Text textStyle="p2" width="100%">
            공동설비사용량 <b>{meanAnalysis!.changePer.bill}%</b>를 기준으로
            이상은 <span className="single">단일계약</span> 이하는{" "}
            <span className="comp">종합계약</span>이 적합해요.
          </Text>
        </Flex>
        <Flex alignItems="center" justify="center" direction="column">
          <Text textStyle="h5" width="100%">
            평균 손해율
          </Text>
          <ResponsiveContainer width="100%" height={241}>
            <LineChart data={meanAnalysis!.lossRatio}>
              <XAxis dataKey="percentage" hide />
              <ReferenceLine
                x={meanAnalysis!.changePer.lossRatio}
                stroke={graph.red}
              />
              <Line
                type="monotone"
                dataKey="comp"
                stroke={graph.red}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="single"
                stroke={graph.blue}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <Text textStyle="p2" width="100%">
            공동설비사용량 <b>{meanAnalysis!.changePer.lossRatio}%</b>를
            기준으로 이상은 <span className="single">단일계약</span> 이하는{" "}
            <span className="comp">종합계약</span>이 적합해요.
          </Text>
        </Flex>
        <Flex alignItems="center" justify="center" direction="column">
          <Text textStyle="h5" width="100%">
            공동설비사용요금
          </Text>
          <ResponsiveContainer width="100%" height={241}>
            <LineChart data={meanAnalysis!.publicBill}>
              <XAxis dataKey="percentage" hide />
              <ReferenceLine
                x={meanAnalysis!.changePer.publicBill}
                stroke={graph.red}
              />
              <Line
                type="monotone"
                dataKey="comp"
                stroke={graph.red}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="single"
                stroke={graph.blue}
                dot={false}
                animationDuration={1500}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <Text textStyle="p2" width="100%">
            공동설비사용량 <b>{meanAnalysis!.changePer.publicBill}%</b>를
            기준으로 이상은 <span className="single">단일계약</span> 이하는{" "}
            <span className="comp">종합계약</span>이 적합해요.
          </Text>
        </Flex>
      </RecoReportItem>
      <RecoReportItem title="가구별 평균 한 달 사용량 분포">
        <Text textStyle="h2" fontWeight="thin">
          고르게 분포되어 있지 않으면
          <br />
          공동설비사용량이 증가할 때
          <br />
          단일계약상에서
          <br />
          형평성의 문제가 발생해요.
        </Text>
        <Flex alignItems="center" justify="center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <Bar dataKey="uv" fill={graph.green} />
            </BarChart>
          </ResponsiveContainer>
        </Flex>
      </RecoReportItem>
      <Box />
      <RecoReportItem title="유사도분석치">
        <Text textStyle="h2" fontWeight="thin">
          1년 사용량 패턴 중에서
          <br />
          전체적인 패턴들과
          <br />
          가장 유사한 패턴들로 구성되어
          <br />
          만들어지는 패턴입니다.
        </Text>
        <Flex alignItems="center" justify="center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <ReferenceLine x="Page D" stroke={graph.red} />
              <Line
                type="monotone"
                dataKey="uv"
                stroke={graph.green}
                dot={false}
                animationDuration={1500}
                strokeWidth={0.5}
                strokeOpacity={0.7}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke={graph.green}
                dot={false}
                animationDuration={1500}
                strokeWidth={0.5}
                strokeOpacity={0.7}
              />
            </LineChart>
          </ResponsiveContainer>
        </Flex>
      </RecoReportItem>

      <Box>
        <Text textStyle="h3" color="modehead" margin="24px 48px">
          유사도분석치 분석은 현재 진행 중 입니다.
          <br />
          잠시 후 결과를 확인해주세요.
        </Text>
      </Box>
    </Flex>
  );
}

export default RecoReportComponent;
