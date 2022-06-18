export default function Toggle({ isOn, onClick, className }) {
	return (
		<div className={className} checked={isOn} onClick={onClick}>
			<div className="bar1" />
			<div className="bar2" />
			<div className="bar3" />
		</div>
	);
}
