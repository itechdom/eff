// use our webpack.config.js to 
// build our modules
var gulp = require('gulp');
var webpack = require('gulp-webpack');

var config = {
	devtool: 'sourcemap',
	output: {
		filename: 'bundle.js',
		publicPath:'/dist/'
	},
	module: {
		loaders: [
			 { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
       		{ test: /\.html$/, loader: 'raw' },
			{test: /\.scss$/, loader: "style!css!sass"},
			{test: /\.less$/, loader: "style!css!less"},
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	}
};

module.exports = function(options) {
gulp.task('webpack', function(){
	return gulp.src(options.src)
		.pipe(webpack(config))
		.pipe(gulp.dest(options.dist));
});
};
