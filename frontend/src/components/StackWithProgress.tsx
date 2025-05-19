import type { FC } from "react";
import { Progress } from "./ui/progress";
type Props = {
  stack: string;
  progress: number;
};

const StackWithProgress: FC<Props> = ({ stack, progress }) => {
  return (
    <div className="w-full text-sm flex flex-col gap-2">
      <div className="flex w-full dark:text-zinc-100 justify-between font-medium items-center">
        <span>{stack}</span>
        <span className="text-main font-medium">{progress}%</span>
      </div>
      <div>
        <Progress className="h-2" value={progress}></Progress>
      </div>
    </div>
  );
};

export default StackWithProgress;
