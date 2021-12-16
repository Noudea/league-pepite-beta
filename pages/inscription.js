import Link from 'next/link'

function Inscription() {
  // TODO
  return (
    <div className="vertical-center">
        <div className="vertical-center h-100 w-100 inscription-container">
            <div className="col-12 col-xl-3 border-container">
                <h2>S'inscrire</h2>
                <form name="inscription" method="POST" action="/api/auth/register">
                    <input id="name" className="form-control" name="name" required type="text" placeholder="Nom"/>
                    <input id="firstname" className="form-control" name="firstname" required type="text" placeholder="Prénom" />
                    <input id="email-inscription" className="form-control" type="email" name="email" required placeholder="Email" />
                    <input id="password" className="form-control" name="password" type="password" required placeholder="Mot de passe" />
                    <button className="btn btn-primary w-100" type="submit">S'inscrire</button>
                </form>
                <p> Vous êtes déjà inscrit ? <span> <Link href="/"> Se connecter </Link> </span></p>
            </div>
        </div>    
    </div>
    )
  }

export default Inscription