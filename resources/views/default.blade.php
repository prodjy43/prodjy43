<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1">
	
	<title>ProDJy</title>
	<!-- Loading third party fonts -->
	<link href="http://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700" rel="stylesheet" type="text/css">
	<!-- Loading main css file -->
	<link rel="stylesheet" href="css/font-awesome.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/css.css">
	<script src="js/jquery.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/app.js"></script>
	<script src="https://apis.google.com/js/platform.js"></script>
</head>
<body>
	<header class="site-header">
		<div class="top-header">
			<div class="container">
		
				<nav class="member-navigation pull-right">
					<a href="signup.php"><i class="fa fa-user"></i> Créer un compte</a>
					<a href="login.php"><i class="fa fa-lock"></i> Se connecter</a>
				</nav> <!-- .member-navigation -->
			</div> <!-- .container -->
		</div> <!-- .top-header -->

		<div class="bottom-header">
			<div class="container">
				<a href="index.php" class="branding pull-left">
					<h1 class="site-title">ProDJy<span> Gaming</span></h1> 
				</a> <!-- #branding -->

				<nav class="main-navigation pull-right">
					<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
					<ul class="menu">
						<li class="menu-item"><a href="news.php">News</a></li>
						<li class="menu-item"><a href="about-us.php">A propos</a></li>
						<li class="menu-item"><a href="stream.php">Stream</a></li>
						<li class="menu-item"><a href="videos.php">Vidéos</a></li>
					</ul>
				</nav> <!-- .main-navigation -->
			</div> <!-- .container -->
		</div> <!-- .bottom-header -->
	</header> <!-- .site-header -->
	<div class="container">
	@yield('content')
	</div>
	<footer class="site-footer wow fadeInUp">
		<div class="container">

			<div class="row">
				<div class="col-md-6">
					
					<div class=" branding">
						<h1 class="site-title"><a href="#">ProDJy <span>Gaming</span></a></h1> 
					</div> <!-- .branding -->

					<p class="copy">&copy; 2016 ProDJyGaming&reg; TheGameWithFun&reg;.</p>
				</div>
				
				<div class="col-md-6 align-right">
				
					<nav class="footer-navigation">
					
					</nav> <!-- .footer-navigation -->
				
					<div class="social-links">
						<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
						<a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
						<a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
						<a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a>
					</div> <!-- .social-links -->
				
				</div>
			</div>

		</div>
	</footer> <!-- .site-footer -->
</body>
</html>