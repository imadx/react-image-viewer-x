import type { FC, ReactNode } from "react";

interface ControlButtonProps {
	children: ReactNode;
	onClick?: () => void;
}

export const ControlButton: FC<ControlButtonProps> = ({
	children,
	onClick,
}) => {
	return (
		<button type="button" onClick={onClick} className="text-white p-2">
			{children}
		</button>
	);
};
