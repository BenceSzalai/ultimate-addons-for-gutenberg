(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{347:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),l=n(0),o=wp.components,u=o.PanelBody,c=o.ToggleControl,i=o.RangeControl,s=o.TextControl,d=wp.blockEditor.InspectorControls,b=function(e){var t=e=e.parentProps,n=t.attributes,a=t.setAttributes,o=n.textareaRequired,b=n.rows,m=n.placeholder;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,r.a.createElement(u,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},r.a.createElement(c,{label:Object(l.__)("Required","ultimate-addons-for-gutenberg"),checked:o,onChange:function(){return a({textareaRequired:!o})}}),r.a.createElement(s,{label:Object(l.__)("Placeholder","ultimate-addons-for-gutenberg"),value:m,onChange:function(e){return a({placeholder:e})}}),r.a.createElement(i,{label:Object(l.__)("Number of lines","ultimate-addons-for-gutenberg"),value:b,onChange:function(e){return a({rows:e})},min:2,max:10,allowReset:!0}))))};t.default=r.a.memo(b)}}]);