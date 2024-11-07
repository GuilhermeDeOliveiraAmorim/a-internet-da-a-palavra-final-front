import Image from "next/image";
import { Button } from "./ui/button";

type DecideButtonProps = {
  onPress: () => void;
  question: string;
  icon: string;
  index: number;
};

export default function DecideButton({
  onPress,
  question,
  icon,
  index,
}: DecideButtonProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <Button key={index} onClick={onPress} className="flex w-full p-10">
        <Image src={icon} alt={question} width={32} height={32} />
        <div className="ml-4 text-lg font-bold">{question}</div>
      </Button>
    </div>
  );
}
