/**
 * BLOCK: Content timeline child - Save Block
 */

import classnames from "classnames"
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

const { dateI18n } = wp.date

const {
	RichText
} = wp.blockEditor

export default function save( props ) {
	const {
		block_id,
		headingTag,
		displayPostDate,
		icon,
		t_date,
		dateFormat,
		time_heading,
		time_desc,
	} = props.attributes

	var display_inner_date = true
	var icon_class = "uagb-timeline__icon-new out-view-uagb-timeline__icon "
	var post_date = t_date
	if ( 'custom' != dateFormat ) {

		post_date = dateI18n( dateFormat, t_date )
		if( post_date === "Invalid date" ){
			post_date = t_date
		}
	}

	var content_class = '';
	var dayalign_class = '';

	if( props.attributes.dayalign_class != 'undefined' && props.attributes.content_class != 'undefined'){
		content_class = props.attributes.content_class
		dayalign_class = props.attributes.dayalign_class
	}
	return (
		<article  className = { classnames(
			"uagb-timeline__field uagb-timeline__field-wrap",
			`uagb-timeline-child-${block_id}`
		) }>
			<div className = { classnames( content_class ) }>

				<div className = "uagb-timeline__marker out-view-uagb-timeline__icon">
					<span className = {icon_class}>{ renderSVG(icon) }</span>
				</div>

				<div className = { classnames( dayalign_class ) }>
					<div className="uagb-events-new" >
						<div className="uagb-timeline__events-inner-new" >
							<div className="uagb-timeline__date-hide uagb-timeline__date-inner" >
							{ displayPostDate != true && t_date &&
                                        <div className={ "uagb-timeline__inner-date-new" }>
                                        	{ post_date }
                                        </div>
							}
							</div>

							<div className="uagb-timeline-content">

								<div className="uagb-timeline__heading-text" >
									<RichText.Content
										tagName={ headingTag }
										value={ time_heading }
										className='uagb-timeline__heading'
									/>
								</div>

								<RichText.Content
									tagName= "p"
									value={ time_desc }
									className='uagb-timeline-desc-content'
								/>

								<div className="uagb-timeline__arrow"></div>

							</div>

						</div>
					</div>
				</div>
				{ display_inner_date && <div className = "uagb-timeline__date-new">
					{ displayPostDate != true && t_date &&
                        <div className={ "uagb-timeline__date-new" }>
                        	{ post_date }
                        </div>
					}
				</div>
				}
			</div>
		</article>
	)
}