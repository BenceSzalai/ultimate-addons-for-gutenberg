/**
 * BLOCK: UAGB - post-grid
 */

// Import block dependencies and components
import edit from "./edit"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import ".././style.scss"
import ".././editor.scss"


const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/post-grid", {
	title: uagb_blocks_info.blocks["uagb/post-grid"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-grid"]["description"],
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	keywords: [
		__( "post",'ultimate-addons-for-gutenberg' ),
		__( "grid",'ultimate-addons-for-gutenberg' ),
		__( "uag",'ultimate-addons-for-gutenberg' ),
	],
	edit,
	example: {},
	// Render via PHP
	save() {
		return null
	},
} )

