import React from 'react'
import cassandraWarren from '../../../assets/img/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import amandaTulling from '../../../assets/img/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg'
import jackMcDogglas from '../../../assets/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import './testimonials.css'
import Button from '../../utilities/button/button'

const testimonials = () => {
  return (
    <section className="testimonials w-100">
        <div className="container d-flex flex-column">
            <p className="highlight">Testimonial</p>
            <h2 className="display-3">What our client says</h2>
            <div className="cards d-flex">
                <div className="card">
                    <div className="stars highlight">★★★★★</div>
                    <p className="quote">"Lorem ipsum dolor, sit amet consectetur adipiscing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="person d-flex">
                        <img src={cassandraWarren} alt="Cassandra Warren" loading="lazy" />
                        <div className="text">
                            <h3 className="name">Cassandra Warren</h3>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="stars highlight">★★★★★</div>
                    <p className="quote">"Lorem ipsum dolor, sit amet consectetur adipiscing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="person d-flex">
                        <img src={amandaTulling} alt="Amanda Tulling" loading="lazy" />
                        <div className="text">
                            <h3 className="name">Amanda Tulling</h3>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="stars highlight">★★★★★</div>
                    <p className="quote">"Lorem ipsum dolor, sit amet consectetur adipiscing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="person d-flex">
                        <img src={jackMcDogglas} alt="Jack McDogglas" loading="lazy" />
                        <div className="text">
                            <h3 className="name">Jack McDogglas</h3>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btngroup">
            
                <Button btn="true" color="black" title="All reviews" />
            </div>
        </div>
    </section>
  )
}

export default testimonials