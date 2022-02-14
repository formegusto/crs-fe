import { Flex, Box, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import UIConnector from "../../store/ui/connector";
import React from "react";

type Props = {
  isLink?: boolean;
  hideDrawer: () => void;
  message?: string;
};

function AlertItem({ isLink, hideDrawer, message }: Props) {
  const navigate = useNavigate();

  const moveReport = React.useCallback(() => {
    hideDrawer();
    navigate("/report");
  }, [navigate, hideDrawer]);

  return (
    <Flex flexDirection="column" paddingBottom={`${isLink ? "20px" : "28px"}`}>
      <Flex
        direction="row"
        padding="0 20px 0"
        align="center"
        marginBottom="6px"
      >
        <CheckCircleIcon textStyle="h5" />
        <Text textStyle="p2" color="modern.200" marginLeft="8px" flex="1">
          작업 완료
        </Text>
        <Text textStyle="p2" fontWeight="regular" color="modern.200">
          2022.02.04 13:00
        </Text>
      </Flex>
      <Box padding="0 20px 0 26px" textStyle="p2">
        {message
          ? message
          : "“아파트 10% 80% 시뮬레이팅 보고서 1” 의 평균분석 작업이 완료 됐습니다.유사도 분석 작업을 시작합니다."}
      </Box>
      {isLink && (
        <Flex
          direction="row"
          justify="flex-end"
          align="flex-end"
          padding="0 20px 0"
        >
          <Text
            color="modern.200"
            textStyle="p2"
            fontWeight="regular"
            textDecoration="underline"
            cursor="pointer"
            as="a"
            onClick={moveReport}
          >
            평균분석 결과 확인 하기
          </Text>
        </Flex>
      )}
    </Flex>
  );
}

export default UIConnector(AlertItem);
