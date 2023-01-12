import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function DefaultTodoDetail() {
  const { todoId } = useParams();
  return !todoId ? (
    <TextWrapper>
      할 일 클릭하면 <br /> 상세 내용을 확인 할 수 있습니다.
    </TextWrapper>
  ) : (
    <></>
  );
}

const TextWrapper = styled.p`
  font-size: 30px;
  margin: 100px;
  line-height: 3rem;
`;
