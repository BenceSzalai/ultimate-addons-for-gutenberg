/**
 * BLOCK: FAQ
 */

import styling from "./styling"
import faqSettings from "./settings";
import renderFaq from "./render";
import React, { useEffect } from 'react';

const { compose } = wp.compose
const { select, withSelect } = wp.data;

const faq = [];	

let prevState;

const faqComponent = props => {
 
	useEffect(() => { // Replacement for componentDidMount.
		
		const { attributes, setAttributes } = props

		const {
			questionBottomPaddingDesktop,
			vquestionPaddingDesktop,
			questionLeftPaddingDesktop,
			hquestionPaddingDesktop,
			questionBottomPaddingTablet,
			vquestionPaddingTablet,
			questionLeftPaddingTablet,
			hquestionPaddingTablet,
			questionBottomPaddingMobile,
			vquestionPaddingMobile,
			questionLeftPaddingMobile,
			hquestionPaddingMobile,
		} = attributes;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } )

		setAttributes( { schema: JSON.stringify( props.schemaJsonData ) } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-faq-" + props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
		for ( let i = 1; i <= 2; i++ ) {		
			faq.push(	
				{	
					"question": "What is FAQ?",	
					"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",	
				}	
			);	
		}
		
		if ( 10 === questionBottomPaddingDesktop && 10 !== vquestionPaddingDesktop ) {

			setAttributes( { questionBottomPaddingDesktop: vquestionPaddingDesktop } );
		}
		if ( 10 === questionLeftPaddingDesktop && 10 !== hquestionPaddingDesktop ) {

			setAttributes( { questionLeftPaddingDesktop: hquestionPaddingDesktop } );
		}

		if ( 10 === questionBottomPaddingTablet && 10 !== vquestionPaddingTablet ) {

			setAttributes( { questionBottomPaddingTablet: vquestionPaddingTablet } );
		}
		if ( 10 === questionLeftPaddingTablet && 10 !== hquestionPaddingTablet ) {

			setAttributes( { questionLeftPaddingTablet: hquestionPaddingTablet } );
		}

		if ( 10 === questionBottomPaddingMobile && 10 !== vquestionPaddingMobile ) {

			setAttributes( { questionBottomPaddingMobile: vquestionPaddingMobile } );
		}
		if ( 10 === questionLeftPaddingMobile && 10 !== hquestionPaddingMobile ) {

			setAttributes( { questionLeftPaddingMobile: hquestionPaddingMobile } );
		}
		prevState = props.schemaJsonData
		
	}, [])

	useEffect(() => { // Replacement for componentDidUpdate.
		
		var element = document.getElementById( "uagb-style-faq-" + props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( props )
		}

		const getChildBlocks = select('core/block-editor').getBlocks( props.clientId );

		getChildBlocks.forEach((faqChild, key) => {
			faqChild.attributes.headingTag = props.attributes.headingTag;
		});

		if (
			JSON.stringify( props.schemaJsonData ) !==
			JSON.stringify( prevState )
		) {
			props.setAttributes({
				schema: JSON.stringify(props.schemaJsonData)
			});

			prevState = props.schemaJsonData
		}

	}, [props] )

	return (
		<>
			{ faqSettings( props ) }
			{ renderFaq( props ) }
		</>
	)
}

export default compose(
	withSelect( ( select, ownProps ) => {
		const page_url = select( "core/editor" ).getPermalink();
		const { __experimentalGetPreviewDeviceType = null } = select( "core/edit-post" );

    	const deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

		let faq_data = {};
		const json_data = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"@id": page_url,
			"mainEntity": []
		};
		const faqChildBlocks = select( "core/block-editor" ).getBlocks( ownProps.clientId );

		faqChildBlocks.forEach( ( faqChild, key ) => {

			faq_data = {
				"@type" : "Question",
				"name" : faqChild.attributes.question,
				"acceptedAnswer" : {
					"@type" : "Answer",
					"text" : faqChild.attributes.answer
				}
			}
			json_data["mainEntity"][key] = faq_data;
		});
		
		return {
			deviceType,
			schemaJsonData: json_data
		};
	} )
) ( faqComponent )
