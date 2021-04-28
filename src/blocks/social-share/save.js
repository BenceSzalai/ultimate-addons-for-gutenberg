/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames";

const {
	InnerBlocks
} = wp.blockEditor;

export default function save( props ) {

	const { className } = props;

	const {
		block_id,
		social_layout,
	} = props.attributes;

	return (
		<div className={ classnames(
			className,
			"uagb-social-share__outer-wrap",
			`uagb-social-share__layout-${social_layout}`,
			`uagb-block-${ block_id}`
		) }>
			<div className="uagb-social-share__wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
