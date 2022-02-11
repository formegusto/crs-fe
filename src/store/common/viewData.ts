import { ReportStep } from "../process/types";

export const PosGraphStep: ReportStep[] = ["similarity-analysis"];

export const stepToName: { [type: string]: string } = {
  init: "초기화",
  start: "시작",
  "load-excel": "엑셀 읽기",
  "data-preprocessing": "데이터 전처리",
  "bill-calc": "청구서 계산",
  "normal-analysis": "일반 분석",
  "mean-analysis": "평균 분석",
  "similarity-analysis": "유사도 분석",
};
