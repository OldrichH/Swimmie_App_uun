import { CircularProgress, CircularProgressProps } from "@mui/material";
import * as Styled from "./ProgressBar.styled";
import { useEffect, useState } from "react";

interface KnownProps {
    progressValue: number;
    progressColor: string;
}

interface AdditionalProps {
    [key: string]: any;
}

type ProgressBarProps = KnownProps & CircularProgressProps & AdditionalProps;

const ProgressBar = ({
    progressValue,
    progressColor,
    ...props
}: ProgressBarProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) =>
                prev < progressValue ? prev + 5 : progressValue
            );
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, [progressValue]);

    return (
        <Styled.CenteredContainer color={progressColor}>
            <CircularProgress
                {...props}
                value={progress}
                variant="determinate"
            />
            <Styled.Paragraph color={progressColor}>
                {progressValue}%
            </Styled.Paragraph>
        </Styled.CenteredContainer>
    );
};

export default ProgressBar;
