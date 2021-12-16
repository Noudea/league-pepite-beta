import Link from "next/link"

/**
 * Alimenter la liste des canaux disponibles pour l'utilisateur.
 */
function ChannelList() {

  return (
    <div className="channel-container">
      <div className="icon-channel">
      </div>
      <Link href="/"> Nom du salon </Link> 
    </div>
  )
}

export default ChannelList