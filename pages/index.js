import Link from 'next/link'

function Connexion() {
	
	return (
		<div className="vertical-center">
        	<div className="vertical-center h-100 w-100 connexion-container">
				<div className="col-12 col-xl-3 border-container">
					<h2> Se connecter </h2>
					<form name="connexion" method="POST" action="connexion/?success=true">
						<input id="email" className="form-control" type="email" name="email" required placeholder="Email" />
						<input id="password" className="form-control" name="password" type="password" required placeholder="Mot de passe" />
						<button className="btn btn-primary w-100" type="submit">Se connecter</button>
					</form>
					<p> Vous n'êtes pas encore inscrit ? <span> <Link href="/inscription"> S'inscrire </Link> </span></p>
				</div>
			</div>
		</div>
		)
	}

	export default Connexion