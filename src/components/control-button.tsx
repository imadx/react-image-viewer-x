import type { FC, ReactNode } from "react";
import classes from "./control-button.module.scss";

interface ControlButtonProps {
	children: ReactNode;
	onClick?: () => void;
}

export const ControlButton: FC<ControlButtonProps> = ({
	children,
	onClick,
}) => {
	return (
		<button type="button" onClick={onClick} className={classes.button}>
			{children}
		</button>
	);
};
