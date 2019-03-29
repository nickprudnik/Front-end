import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.scss';

class PlaneSeats extends Component {
    render() {
        return(
            <div className="plane">
                <div class="cockpit">
                    <h1>Please select seats</h1>
                </div>
                <div className="exit exit--front fuselage">    
                </div>
                <div className="cabin fuselage">
                    <div className="rowA">
                        <div className="seat">
                        <input type="checkbox" id="1A" />
                        <label for="1A">1A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="2A" />
                        <label for="2A">2A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="3A" />
                        <label for="3A">3A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" disabled id="4A" />
                        <label for="4A">4A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="5A" />
                        <label for="5A">5A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="6A" />
                        <label for="6A">6A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="7A" />
                        <label for="7A">7A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="8A" />
                        <label for="8A">8A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="9A" />
                        <label for="9A">9A</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="10A" />
                        <label for="10A">10A</label>
                        </div>
                    </div>
                    <div className="rowB">
                        <div className="seat">
                        <input type="checkbox" id="1B" />
                        <label for="1B">1B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="2B" />
                        <label for="2B">2B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="3B" />
                        <label for="3B">3B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" disabled id="4B" />
                        <label for="4B">4B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="5B" />
                        <label for="5B">5B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="6B" />
                        <label for="6B">6B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="7B" />
                        <label for="7B">7B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="8B" />
                        <label for="8B">8B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="9B" />
                        <label for="9B">9B</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="10B" />
                        <label for="10B">10B</label>
                        </div>
                    </div>
                    <div className="rowC">
                        <div className="seat">
                        <input type="checkbox" id="1C" />
                        <label for="1C">1C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="2C" />
                        <label for="2C">2C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="3C" />
                        <label for="3C">3C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" disabled id="4C" />
                        <label for="4C">4C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="5C" />
                        <label for="5C">5C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="6C" />
                        <label for="6C">6C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="7C" />
                        <label for="7C">7C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="8C" />
                        <label for="8C">8C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="9C" />
                        <label for="9C">9C</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="10C" />
                        <label for="10C">10C</label>
                        </div>
                    </div>
                    <div className="row-space"/>
                    <div className="rowD">
                        <div className="seat">
                        <input type="checkbox" id="1D" />
                        <label for="1D">1D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="2D" />
                        <label for="2D">2D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="3D" />
                        <label for="3D">3D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" disabled id="4D" />
                        <label for="4D">4D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="5D" />
                        <label for="5D">5D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="6D" />
                        <label for="6D">6D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="7D" />
                        <label for="7D">7D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="8D" />
                        <label for="8D">8D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="9D" />
                        <label for="9D">9D</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="10D" />
                        <label for="10D">10D</label>
                        </div>
                    </div>
                    <div className="rowE">
                        <div class="seat">
                        <input type="checkbox" id="1E" />
                        <label for="1E">1E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="2E" />
                        <label for="2E">2E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="3E" />
                        <label for="3E">3E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" disabled id="4E" />
                        <label for="4E">4E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="5E" />
                        <label for="5E">5E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="6E" />
                        <label for="6E">6E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="7E" />
                        <label for="7E">7E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="8E" />
                        <label for="8E">8E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="9E" />
                        <label for="9E">9E</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="10E" />
                        <label for="10E">10E</label>
                        </div>
                    </div>
                    <div className="rowF">
                        <div className="seat">
                        <input type="checkbox" id="1F" />
                        <label for="1F">1F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="2F" />
                        <label for="2F">2F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="3F" />
                        <label for="3F">3F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" disabled id="4F" />
                        <label for="4F">4F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="5F" />
                        <label for="5F">5F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="6F" />
                        <label for="6F">6F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="7F" />
                        <label for="7F">7F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="8F" />
                        <label for="8F">8F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="9F" />
                        <label for="9F">9F</label>
                        </div>
                        <div className="seat">
                        <input type="checkbox" id="10F" />
                        <label for="10F">10F</label>
                        </div>
                    </div>
                    </div>
                </div>    
        )
    }
}

export default withRouter(PlaneSeats)