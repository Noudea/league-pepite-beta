
/**
 * Messages du chat.
 */
function ChatMessage() {

  return (
    <div className="message-container">
      <div className="icon-member">
      </div>

      <div className="message-user-information">
        <div className="username-chat">
          <p> NOM DE LA PERSONNE (BD  NOM + PRENOM) </p>
        </div> 

        <div className="dateMessage-chat">
          <p> DATE DU MESSAGE (BD  DATE) </p>
        </div>

      </div>

      <div className="message-content">
        <p> Contenu du message </p>
      </div>
    </div>
  )
}

export default ChatMessage