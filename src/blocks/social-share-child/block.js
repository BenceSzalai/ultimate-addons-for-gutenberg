/**
 * BLOCK: Social Share Child
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"
import deprecated from "./deprecated"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/social-share-child", {
	title: uagb_blocks_info.blocks["uagb/social-share-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/social-share-child"]["description"],
	icon: UAGB_Block_Icons.social_share_child,
	category: uagb_blocks_info.category,
	parent: [ "uagb/social-share" ],
	keywords: [
		__( "social share",'ultimate-addons-for-gutenberg' ),
		__( "icon",'ultimate-addons-for-gutenberg' ),
		__( "uag",'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	edit,
	save,
	deprecated,
} )
