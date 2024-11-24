import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faStopwatch, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mobile_image from "../assets/images/mobile_image.jpg" 

const InstallApp = () => {
    return (
        <>
            <div className="install-app-section">
                {/* Feature Icons */}
                <div className="features">
                    <div className="feature-item">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTag} size="2x" color="#ff9000" />
                        </div>
                        <p>Daily Discounts</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#ff9000" />
                        </div>
                        <p>Live Tracing</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <FontAwesomeIcon icon={faStopwatch} size="2x" color="#ff9000" />
                        </div>
                        <p>Quick Delivery</p>
                    </div>
                </div>

                {/* App Installation Section */}
                <div className="install-container">
                    {/* Mobile Preview */}
                    <div className="mobile-preview">
                        <img
                            src={mobile_image}
                            alt="Mobile Preview"
                            className="mobile-image"
                        />
                    </div>

                    {/* App Info */}
                    <div className="app-info">
                        <h2>Install the app</h2>
                        <p>
                            It's never been easier to order food.<br></br> Look for the finest discounts
                            and you'll be lost<br></br> in a world of delectable food.
                        </p>
                        <div className="download-buttons">
                            <button className="google-play">
                                <FontAwesomeIcon icon={faGooglePlay} size="lg" />
                                Google Play
                            </button>
                            <button className="app-store">
                                <FontAwesomeIcon icon={faApple} size="lg" />
                                App Store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstallApp