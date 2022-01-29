const srcPath = 'src';
const destPath = 'build';

const config = {
    src: {
        root: srcPath,
        html: `${srcPath}/html`,
        sass: `${srcPath}/scss`,
        js: `${srcPath}/js`,
        images: `${srcPath}/assets/img`,
        fonts: `${srcPath}/assets/fonts`,    

    },

    dest: {
        root: destPath,
        html: destPath,
        css: `${destPath}/css`,
        js: `${destPath}/js`,
        images: `${destPath}/img`,
        fonts: `${destPath}/assets/fonts`,    
    },

    setEnv(){
        this.isProd = process.argv.includes('--prod');
        this.isDev = !this.isProd;
    }
}

export default config;