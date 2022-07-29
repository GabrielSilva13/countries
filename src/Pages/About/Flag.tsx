import { Img } from "@chakra-ui/react";

interface FlagProps {
  img: string;
}

export function Flag({ img }: FlagProps) {
  return (
    <Img
      justifyContent={["center", "center", "flex-start"]}
      w={"560px"}
      src={img}
    />
  );
}
