self.__uv$config = {
    prefix: '/s/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    // Absolute paths to the deep folder
    handler: '/data/local/pages/unlocker/ultraviolet/uv.handler.js',
    bundle: '/data/local/pages/unlocker/ultraviolet/uv.bundle.js',
    config: '/data/local/pages/unlocker/ultraviolet/uv.config.js',
    // Point to the bridge file you just fixed in the root
    sw: '/uv-sw.js' 
};
