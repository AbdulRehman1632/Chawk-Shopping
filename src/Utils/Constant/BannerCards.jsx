import React from 'react'
import './BannerCards.css'

const BannerCards = ({items}) => {

  return (
    <div className='flex'>
        {
            items.map((value,index)=>{
                return(
                     <div>
        <div key={index} className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="BannerWrapper " style={{background:value.color}}>
                        <div className="ContentWrapper">
                            <div className="off">
                                <h2>{value.para1}</h2>
                            </div>

                            <div className="para">
                                <h5>{value.para2}</h5>
                            </div>

                            <div className="para2">
                                <h5>{value.para3}</h5>
                            </div>

                            <div className="para3">
                                <h6>{value.para4}</h6>
                            </div>

                        </div>

                        <div className="ImageWrapper">
                            <img src={value.image} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
                )
            })
        }
    </div>




  )
}

export default BannerCards
