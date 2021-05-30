import React from 'react'
import mangoswapImage from '../../asset/mangoswap.png'
import './mangoswap.css'

const Mangoswap = () => {
    return (
        <div className="mangoswap-content">
            <div>
                <div className="mangoswap-header-content">
                    <div className="mangoswap-header">
                        <div className="mangoswap-logo">
                            <i class="fas fa-arrow-left left-arrow-mangoswap"></i>
                            <img src={mangoswapImage} alt="name" />
                            <h3 className="mangoswap-header-h3">Mangoswap</h3>
                        </div>
                        <div >
                            <div className="mangoswap-fund-raised">
                                <h4>Funds raised</h4>
                                <p>50% complete</p>
                            </div>
                            <h3>$200,000/$400,000</h3>
                        </div>
                        <div>
                            <hr className="mangoswap-horizontal-colo"/>
                            <hr className="mangoswap-horizontal-gray"/>
                        </div>
                        <button className="fund-mangoswap-button">Fund Startup</button>
                    </div>
                </div>
                <div className="mangoswap-body">
                    <div className="mangoswap-sidebar">helo</div>
                    <div className="mangoswap-about">
                        <h3>About startup</h3>
                        <p className="mangoswap-p">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <hr />
                        <h3 className="mangoswap-h3">Vision</h3>
                        <p className="mangoswap-p">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mangoswap
