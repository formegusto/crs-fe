import {
  Button,
  Flex,
  Icon,
  Image,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Assets from "../../assets";
import {
  IoBusinessOutline,
  IoTimeOutline,
  IoFlashOutline,
  IoReturnDownForward,
} from "react-icons/io5";
import React from "react";

type Props = {
  initialFocus: React.Ref<any>;
};

function RegistForm({ initialFocus }: Props) {
  return (
    <Flex as="form">
      <Flex margin="8px 20px 0" direction="column">
        <Input
          ref={initialFocus}
          size="md"
          variant="unstyled"
          placeholder="제목을 입력해주세요."
          textStyle="p1"
        />
        {/* Reference Cell */}
        <Flex direction="column" marginTop="24px">
          <Flex direction="row" height="18px" align="center" marginBottom="8px">
            <CheckCircleIcon textStyle="h6" />
            <Text textStyle="p1" marginLeft="6px">
              15분 측정 파일 예시
            </Text>
          </Flex>
          <Image src={Assets.Reference.refCell} width="100%" />
          <Flex
            direction="column"
            padding="8px"
            sx={{
              "& > div:not(:first-of-type)": {
                marginTop: "4px",
              },
            }}
          >
            <Flex direction="row">
              <Icon as={IoTimeOutline} textStyle="p1" marginRight="6px" />
              <Text textStyle="p2" fontWeight="regular">
                A~F 열은 날짜와 시간이 기록되어야 합니다.
              </Text>
            </Flex>
            <Flex direction="row">
              <Icon as={IoBusinessOutline} textStyle="p1" marginRight="6px" />
              <Text textStyle="p2" fontWeight="regular">
                3~5 행은 아파트명-동-호수로 고유한 가구 이름으로 구성되어야
                합니다.
              </Text>
            </Flex>
            <Flex direction="row" color="modetext">
              <Icon as={IoFlashOutline} textStyle="p1" marginRight="6px" />
              <Text textStyle="p2" fontWeight="regular">
                6행 부터는 측정값이 기록되어야 합니다.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Input
              variant="flushed"
              placeholder="1년치 15분 측정 엑셀 파일을 업로드 해주세요."
            />
            <Button
              colorScheme="blueinput"
              color="modern.50"
              fontSize="p2"
              minWidth="90px"
            >
              파일 선택하기
            </Button>
          </Flex>
        </Flex>
        <Flex direction="row" height="14px" align="center" marginTop="24px">
          <CheckCircleIcon textStyle="p1" />
          <Text textStyle="p2" marginLeft="6px">
            시뮬레이션 할 공동설비사용량의 범위를 설정해주세요.
          </Text>
        </Flex>
        <RangeSlider
          colorScheme="blueinput"
          defaultValue={[20, 80]}
          marginTop="14px"
          min={10}
          max={90}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Flex
          direction="row"
          marginTop="14px"
          color="modetext"
          paddingRight="14px"
        >
          <Icon as={IoReturnDownForward} textStyle="p2" marginRight="4px" />
          <Text fontSize="10px" lineHeight="14px">
            아파트 전체 사용량에서 공동설비사용량이 차지할 percentage의 범위를
            의미합니다. 시작 지점부터 끝 지점까지 공동설비사용량을 1% 씩
            늘려가면서 임의의 청구서를 만들어내고, 종합계약이 유리해지는 특정
            공동설비사용량 n% 지점을 시뮬레이션 결과로 추천해줍니다.
          </Text>
        </Flex>
      </Flex>
      <Button
        position="absolute"
        bottom="0"
        colorScheme="blueinput"
        color="modern.50"
        fontSize="p2"
        minWidth="100%"
        borderRadius={0}
      >
        등록하기
      </Button>
    </Flex>
  );
}

export default RegistForm;
