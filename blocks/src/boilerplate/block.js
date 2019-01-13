/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

import classnames from 'classnames';
import './style.scss';

/**
 * Register block
 */
export default registerBlockType( 'pbrocks-boilerplate/boilerplate', {
	title: __( 'Block Boilerplate', 'pbrocks-boilerplate' ),

	description: __( 'An example block.', 'pbrocks-boilerplate' ),

	category: 'pbrocks-boilerplate',

	icon: {
		background: '#29c8aa',
		foreground: '#ffffff',
		src:'admin-site',
	},

	keywords: [
		__( 'Boilerplate', 'pbrocks-boilerplate' ),
		__( 'Hello World', 'pbrocks-boilerplate' ),
		__( 'Example', 'pbrocks-boilerplate' ),
	],
	attributes: {
	},

	edit: props => {
		const { className } = props;
		return (
            <div className="{ className } " >
			<h2>{ __( 'Hello Backend!!', 'pbrocks-boilerplate' ) }</h2>
			<h2 className="message-love">{ __( 'Love,', 'pbrocks-boilerplate' ) }</h2>
			<h3>{ __( 'the Edit method', 'pbrocks-boilerplate' ) }</h3>
			<h4>{ __( '(in block.js).', 'pbrocks-boilerplate' ) }</h4>
			</div>
		);
	},

	save: props => {
		const { className } = props;
		return (
            <div className="message-frontend" >
			<h2>{ __( 'Hello Frontend!!', 'pbrocks-boilerplate' ) }</h2>
			<h2 className="message-love">{ __( 'Love,', 'pbrocks-boilerplate' ) }</h2>
			<h3>{ __( 'the Save method', 'pbrocks-boilerplate' ) }</h3>
			<h4>{ __( '(in block.js).', 'pbrocks-boilerplate' ) }</h4>
			</div>
		);
	},
});
