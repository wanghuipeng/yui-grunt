//包装函数
module.exports = function(grunt){
	//任务配置，所有插件的配置信息
	grunt.initConfig({
		//获取package.json的信息
		pkg:grunt.file.readJSON('package.json'),
		//uglify插件的配置信息
		uglify:{
			options:{
				stripBanners:true,
				banner:'/*!<%=pkg.name%>-<%=pkg.version%>.js<%=grunt.template.today("yyyy-mm-dd")%>*/\n'
			},
			build:{
				src:'src/js/yui.js',
				dest:'build/js/yui.min.js'
			}
		},
		//cssmin插件的配置信息
		cssmin:{
			options:{
				stripBanners:true,
				banner:'/*!<%=pkg.name%>-<%=pkg.version%>.js<%=grunt.template.today("yyyy-mm-dd")%>*/\n'
			},
			build:{
				src:'src/css/yui.css',
				dest:'build/css/yui.min.css'
			}
		},
		//imagemin插件的配置信息
		imagemin:{
            options: {  
            	stripBanners:true,
		        banner:'/*!<%=pkg.name%>-<%=pkg.version%>.js<%=grunt.template.today("yyyy-mm-dd")%>*/\n',
                optimizationLevel: 3 //定义 PNG 图片优化水平 （0-7）  
            },  
            build:{  
            	expand: true,
                cwd: 'src/images/',
                src: ['**/**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                dest: 'build/images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
            }  
		},
		//jshint插件的配置信息
		jshint:{
			build:['Gruntfile.js','src/*.js'],
			options:{
				jshintrc:'.jshintrc'
			}
		},
		
		//watch插件的配置信息
		watch:{
			build:{
				files:['src/js/yui.js','src/css/yui.css'],
				tasks:['jshint','uglify','cssmin'],
				options:{spawn:false}
			}
		}
	});
	//告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default',['jshint','uglify','cssmin','imagemin','watch']);
};
