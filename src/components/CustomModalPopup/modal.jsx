
import './modal.css';


const Modal=({id,header,body,footer})=>{
    return(
        <div id={id || 'modal'}>
         <div className="Content">
            <div className="header">
                <span className="close-Modal-icon">&times;</span>
                <h2>{header?header:'Header'}</h2>
            </div>
            <div className="body">
              {
                body?body: <div>Body m kucchu nhi h</div>
              }
            </div>
            <div className="footer">
              <h2>{footer?footer : 'Footer'}</h2>
            </div>
         </div>
        </div>
    )
}
export default Modal;