import ChatMessage from '../components/chatMessage'
import ChannelList from '../components/channel'

/**
 * Page globale du chat
 */
function AccueilChat () {
  return (
    <div className='accueil-container h-100 w-100'>
      <div className='row'>
        <button
          className='navbar-toggler toggler-example' type='button' data-toggle='collapse' data-target='#navbarSupportedContent1'
          aria-controls='navbarSupportedContent1' aria-expanded='false' aria-label='Toggle navigation'
        >
          <span className='dark-blue-text'><i className='fas fa-bars fa-1x' /></span>
        </button>
        <div className='col-3 left-bar'>
          <div className='row side-bar'>
            <div className='container'>
              <div className='row'>
                <div className='col-10'>
                  <span className='canaux'> Canaux </span>
                </div>
                <div className='col-2'>
                  <button className='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className='row side-bar-2'>
            <div className='input-group search-bar w-75'>
              <span className='input-group-text' id='basic-addon1'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </span>
              <input type='text' className='form-control' placeholder='Rechercher' aria-label='Rechercher' aria-describedby='basic-addon1' />
            </div>
            <div className='canaux'>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
              <div className='canal'>
                test
              </div>
            </div>
          </div>
          <div className='row side-bar-3'>
            <div className='col-12'>
              <img className='' />
              <span className='name-usr'>Jonathan CIERP</span>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-arrow-down-short' viewBox='0 0 16 16'>
                <path fill-rule='evenodd' d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='col-8' />
      </div>
      <div className='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>CRĖER</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <input type='text' className='form-control' id='recipient-name' placeholder='Nom' />
                </div>
                <div className='form-group'>
                  <textarea className='form-control' id='message-text' placeholder='Description' />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Fermer</button>
              <button type='button' className='btn btn-primary'>Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccueilChat
