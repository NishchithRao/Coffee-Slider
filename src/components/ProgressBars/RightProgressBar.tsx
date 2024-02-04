import { BaseTrack } from "./BaseTrack";
import Label from "./Label";
import { ProgressBarProps } from "./LeftProgressBar";

const RightProgressBar = ({
  value = 0,
  animatedRef,
  label,
  translate,
}: ProgressBarProps) => {
  const bgAlpha = value < 0.5 ? 0.5 : 1;
  const bg = `rgba(66,66,66,${bgAlpha})`;
  return (
    <BaseTrack bg={bg} invertedDirection animatedRef={animatedRef}>
      <Label
        translateValue={translate}
        color="#c4c4c4"
        label={label}
        value={value}
      />
    </BaseTrack>
  );
};

export { RightProgressBar };
