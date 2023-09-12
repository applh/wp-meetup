( function ( blocks, element ) {
    var el = element.createElement;

    // WARNING: utiliser le même nom que dans block.json
    blocks.registerBlockType( 'meetup/mon-bloc', {
        edit: function () {
            return el( 'p', {}, 'Hello World (from the editor).' );
        },
        save: function () {
            return el( 'p', {}, 'Hola mundo (from the frontend).' );
        },
    } );
} )( window.wp.blocks, window.wp.element );