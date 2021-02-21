/**
 * BLOCK: Post Content
 */
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/post-content", {
	title: uagb_blocks_info.blocks["uagb/post-content"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-content"]["description"],
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( "Post Content" ),
		__( "post" ),
		__( "uag" ),
	],
	edit,
	save,
	attributes
} );