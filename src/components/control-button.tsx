import type { FC, ReactNode } from "react";
import { StyledButton } from "./control-button.styles.ts";

interface ControlButtonProps {
	children: ReactNode;
	onClick?: () => void;
}

export const ControlButton: FC<ControlButtonProps> = ({
	children,
	onClick,
}) => {
	return (
		<StyledButton type="button" onClick={onClick}>
			{children}
		</StyledButton>
	);
};
