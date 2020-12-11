const {
	SelectControl
} = wp.components

const { __ } = wp.i18n

const AdvancedAnimationControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
	
	return (props) => {
		const { Fragment } = wp.element;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		const blocks_name = props.name;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected &&  ( blocks_name.substr(0, 5) === 'uagb/' ) &&
					<InspectorAdvancedControls>
						<SelectControl
							label={ __( "Animation" ) }
							value={ attributes.animationfield }
							onChange={ ( value ) => setAttributes( { animationfield: value } ) }
							options={ [
								{ value: " ", label: __( "None" ) },
								{ value: "fadeInDown", label: __( "fadeInDown" ) },
								{ value: "fadeInUp", label: __( "fadeInUp" ) },
								{ value: "fadeIn", label: __( "fadeIn" ) },
								{ value: "fadeInLeft", label: __( "fadeInLeft" ) },
								{ value: "fadeInRight", label: __( "fadeInRight" ) },
								{ value: "lightSpeedIn", label: __( "lightSpeedIn" ) },
								{ value: "slideInDown", label: __( "slideInDown" ) },
								{ value: "slideInLeft", label: __( "slideInLeft" ) },
								{ value: "slideInRight", label: __( "slideInRight" ) },
								{ value: "slideInUp", label: __( "slideInUp" ) },
								{ value: "bounceIn", label: __( "bounceIn" ) },
								{ value: "bounceDown", label: __( "bounceDown" ) },
								{ value: "bounceLeft", label: __( "bounceLeft" ) },
								{ value: "bounceInRight", label: __( "bounceInRight" ) },
								{ value: "bounceInUp", label: __( "bounceInUp" ) },
								{ value: "rotateIn", label: __( "rotateIn" ) },
								{ value: "rotateInDownLeft", label: __( "rotateInDownLeft" ) },							
							] }
							help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) } 
						/>
						<SelectControl
							label={ __( "Hover Animation" ) }
							value={ attributes.animationhoverfield }
							onChange={ ( value ) => setAttributes( { animationhoverfield: value } ) }
							options={ [
								{ value: " ", label: __( "None" ) },
								{ value: "push", label: __( "Push" ) },
								{ value: "pulse", label: __( "Pulse" ) },
								{ value: "bounce", label: __( "Bounce" ) },
								{ value: "pop", label: __( "Pop" ) },
								{ value: "grow", label: __( "Grow" ) },
								{ value: "pulse-grow", label: __( "Pulse-grow" ) },
								{ value: "pulse-shrink", label: __( "Pulse-shrink" ) },							
							] }
							help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
						/>
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'AdvancedAnimationControls');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'uagb/advanced-animation-control',
	AdvancedAnimationControls
);

function ApplyAnimateClass(extraProps, blockType, attributes) {
	
	const { 
		animationfield,
		animationhoverfield
	 } = attributes;
	
	if ( typeof animationfield !== 'undefined' && animationfield) {	
		extraProps.className = extraProps.className + ' uag-animation-' + animationfield;
		extraProps.className = extraProps.className + '  uag-animation-speed';
	}
	
	if ( typeof animationhoverfield !== 'undefined' && animationhoverfield) {	
		extraProps.className = extraProps.className + ' uag-hover-animation-' + animationhoverfield;
	}

	return extraProps;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'uagb/apply-animation-class',
	ApplyAnimateClass,
);
