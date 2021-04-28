import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

const { __ } = wp.i18n

const {
	RichText,
} = wp.blockEditor

export default function renderFaqChild( props, state ) {
    
    const { attributes, setAttributes } = props
	const {
		question,
		answer,
		icon,
		iconActive,
		layout,
		headingTag
	} = attributes

    const faqRenderIcon = () => {
		
		return (
			<>
				<span className="uagb-icon uagb-faq-icon-wrap">
					{ renderSVG(icon) }
				</span>
				<span className="uagb-icon-active uagb-faq-icon-wrap">
					{ renderSVG(iconActive) }
				</span>
			</>
		)
	}

    const faqRenderHtml = () => {

		return (
            <div className="uagb-faq-item" role="tab" tabIndex="0">
                <div className="uagb-faq-questions-button uagb-faq-questions">
                    { 'accordion' === layout && faqRenderIcon() }
                    <RichText
                        tagName={ ( 'span' != headingTag ) ? headingTag : 'div' }
                        placeholder={ __( "Question" ) }
                        value={ question }
                        onChange={ ( value ) => setAttributes( { question: value } ) }
                        className='uagb-question'
                        multiline={false}
                        allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
                    />
                </div>
                <div className="uagb-faq-content">
                    <span>
                        <RichText
                            tagName="p"
                            placeholder={ __( "Answer" ) }
                            value={ answer }
                            onChange={ ( value ) => setAttributes( { answer: value } ) }
                            multiline={false}
                            allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough', 'core/link' ]}
                        />
                    </span>
                </div>
            </div>
		)
	}

    return(
        <div className={ classnames(
            "uagb-faq-child__outer-wrap",
            `uagb-block-${ props.clientId.substr( 0, 8 ) }`,
            ( props.isSelected &&  ( false !== state.isFocused ) ) ? "uagb-faq__active" : ""
        ) }
        >
            { faqRenderHtml() }
        </div>
    );
}