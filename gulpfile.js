var gulp = require('gulp');
var cp = require('child_process');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');

console.log('gulp start');

gulp.task('default', function() {
	console.log('Default task called');
});

gulp.task('clean:build', function() {
	del('./public/js/*');
});

gulp.task('build', ['clean:build'], function() {
	return gulp.src('./app/app.js')
		.pipe(webpack(webpackConfig))
		.on('error', function handleError() {
			this.emit('end');
		})
		.pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
	return gulp.watch('./app/**/*', ['build']);
});

gulp.task('restore-database', function() {
	return gulp.src('./data/restore.json')
		.pipe(rename('db.json'))
		.pipe(gulp.dest('./data'));
});

gulp.task('serve:api', ['restore-database'], function(done) {
	cp.exec('node ./node_modules/json-server/bin/index.js --watch ./data/db.json --port 3001', {stdio: 'inherit'})
	.on('close', done);
});

gulp.task('serve:node', function(done) {
	nodemon({
		exec: 'node ./node_modules/babel-cli/bin/babel-node.js ./server.js',
		watch: ['server.js'],
		ext: 'js html'
	});
});

gulp.task('serve', ['serve:node', 'serve:api']);
gulp.task('watch', ['build', 'watch:build']);
gulp.task('default', ['serve']);