import web
render = web.template.render('templates/')

urls = (
	'/', 'index', '/login', 'login', '/signup', 'signup'
)

class index:
	def GET(self):
		return render.index();

class login:
	def GET(self):
		return render.login();

class signup:
	def GET(self):
		return render.signup();
		
if __name__ == '__main__':
	app = web.application(urls, globals())
	app.run()
