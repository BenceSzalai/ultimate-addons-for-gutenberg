/**
 * BLOCK: Team
 */

import classnames from "classnames"
import UAGB_Block_Icons from "@Controls/block-icons"
import renderSVG from "@Controls/renderIcon"
import edit from "./edit"
import save from "./save"
import deprecated from "./deprecated"
import attributes from "./attributes"
import "./editor.scss"
import "./style.scss"

import { __ } from '@wordpress/i18n';

const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/team", {
	title: uagb_blocks_info.blocks["uagb/team"]["title"],
	description: uagb_blocks_info.blocks["uagb/team"]["description"],
	icon: UAGB_Block_Icons.team,
	keywords: [
		__( "team",'ultimate-addons-for-gutenberg' ),
		__( "members",'ultimate-addons-for-gutenberg' ),
		__( "uag",'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	example: {},
	edit,
	save,
	deprecated,
} )
