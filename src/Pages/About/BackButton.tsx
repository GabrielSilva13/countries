import { Button, Icon } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const history = useNavigate();
  function goBack() {
    history(-1);
  }
  return (
    <Button onClick={goBack} mt="10">
      <Icon as={AiOutlineArrowLeft} fontSize="20" mr="2" />
      Back
    </Button>
  );
}
