import { CaretDown, CaretUp } from '../../public/icons';
import styles from '/styles/Hero.module.css';
import useCollapse from 'react-collapsed';
export default function Collapsible(props) {
	const config = {
		defaultExpanded: props.defaultExpanded && false,
		collapsedHeight: props.collapsedHeight || 0
	};
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
	return (
		<div className={styles.collapsible}>
			<div className={styles.header} {...getToggleProps()}>
				<div className={styles.title}>{props.title}</div>
				<div>{isExpanded ? <CaretUp /> : <CaretDown />}</div>
			</div>
			<div {...getCollapseProps()}>
				<div className={styles.content}>{props.children}</div>
			</div>
		</div>
	);
}
