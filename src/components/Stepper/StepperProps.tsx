export interface StepperProps {
    step: number;
    totalSteps: number;
    change: (newStep: number) => void;
}
