import React from 'react'
import { Link } from 'react-router-dom'

import cassandraWarren from '../../../assets/img/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import amandaTulling from '../../../assets/img/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg'
import jackMcDogglas from '../../../assets/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import HighlightHeading from '../../utilities/highlightHeading/HighlightHeading'

const testimonials = () => {
    const highlight = 'Testimonial'
    const title = 'What our client says'

  return (
    <section className="testimonials w-100">
        <div className="container d-flex flex-column">
            <HighlightHeading
                _highlight={highlight} _title={title}
            />
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
                <Link to="#" className="btn btn-b">All reviews</Link>
            </div>
        </div>
    </section>
  )
}

export default testimonials