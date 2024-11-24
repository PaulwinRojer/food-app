import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const ReadyToOrder = () => {
    return (
        <>
            <section id="ready-to-order"> 
                <h2 style={{color:"#ff0000"}}>
                    Are you ready to order <br></br>with the best deals?
                </h2>
                <button className="order-button">
                    Proceed to Order
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                {/* </div> */}
            </section>
        </>
    )
}

export default ReadyToOrder