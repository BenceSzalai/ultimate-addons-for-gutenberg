/**
 * BLOCK: Price List
 */


import UAGB_Block_Icons from "@Controls/block-icons"
import edit from "./edit"
import save from "./save"
import attributes from "./attributes"
import "./style.scss"

import { __ } from '@wordpress/i18n';

const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/restaurant-menu-child", {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: uagb_blocks_info.blocks["uagb/restaurant-menu-child"]["title"], // Block title.
	description:uagb_blocks_info.blocks["uagb/restaurant-menu-child"]["description"], // Block description.
	icon: UAGB_Block_Icons.restaurant_menu, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( "pricelist" ),
		__( "menu" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	parent: [ "uagb/restaurant-menu" ],
	attributes,
	edit,
	save,
} )
