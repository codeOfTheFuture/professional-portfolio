interface Props {
	className: string;
	onClick: () => void;
}

const ThemeOption = ({ className, onClick }: Props) => {
	return (
		<div>
			<div className={className} onClick={onClick}></div>
		</div>
	);
};

export default ThemeOption;
