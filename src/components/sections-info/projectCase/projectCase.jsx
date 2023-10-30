import React from 'react'
import { Link } from 'react-router-dom'

import adeoluEletu from '../../../assets/img/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'
import marekLevak from '../../../assets/img/marek-levak-zANXcXyByos-unsplash.jpg'
import oliDale from '../../../assets/img/oli-dale-xjSkI_seiZY-unsplash.jpg'
import carlosMuza from '../../../assets/img/carlos-muza-hpjSkU2UYSU-unsplash.jpg'

const projectCase = () => {
  return (
    <section className="project-case w-100">
        <div className="container d-flex flex-column align-items-center">
            <p className="highlight">Project & case studies</p>
            <h2 className="display-3">Let's looks our global projects</h2>
            <div className="objects">
                <Link to="#" className="object">
                    <img src={adeoluEletu} alt="" loading="lazy" />
                    <h3>Grow your business</h3>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque placerat vestibulum. Aenean sit amet elementum sem, quis tempor magna. Duis enim est, aliquam et magna fringilla, dapibus rhoncus enim. Nulla eget fermentum nibh. Aliquam aliquam neque id velit blandit, non tristique justo iaculis.</p>
                        <p>Vivamus mollis luctus erat non dictum. Donec luctus mauris eget lectus rhoncus, vehicula molestie enim faucibus. In hac habitasse platea dictumst. Sed suscipit faucibus volutpat. Nam tempor tellus ac turpis blandit, eu porttitor odio consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dignissim in risus in maximus. Vestibulum pulvinar quam facilisis, bibendum est id, mattis quam.</p>
                    </div>
                    <div className="btngroup">
                        <div className="btn btn-w">Read more</div>
                    </div>
                </Link>
                <Link to="#" className="object">
                    <img src={marekLevak} alt="" loading="lazy" />
                    <h3>Why your client needs a responsive website</h3>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque placerat vestibulum. Aenean sit amet elementum sem, quis tempor magna. Duis enim est, aliquam et magna fringilla, dapibus rhoncus enim. Nulla eget fermentum nibh. Aliquam aliquam neque id velit blandit, non tristique justo iaculis.</p>
                        <p>Vivamus mollis luctus erat non dictum. Donec luctus mauris eget lectus rhoncus, vehicula molestie enim faucibus. In hac habitasse platea dictumst. Sed suscipit faucibus volutpat. Nam tempor tellus ac turpis blandit, eu porttitor odio consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dignissim in risus in maximus. Vestibulum pulvinar quam facilisis, bibendum est id, mattis quam.</p>
                    </div>
                    <div className="btngroup">
                        <div className="btn btn-w">Read more</div>
                    </div>
                </Link>
                <Link to="#" className="object">
                    <img src={oliDale} alt="" loading="lazy" />
                    <h3>Educate your emplyees to get better results</h3>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque placerat vestibulum. Aenean sit amet elementum sem, quis tempor magna. Duis enim est, aliquam et magna fringilla, dapibus rhoncus enim. Nulla eget fermentum nibh. Aliquam aliquam neque id velit blandit, non tristique justo iaculis.</p>
                        <p>Vivamus mollis luctus erat non dictum. Donec luctus mauris eget lectus rhoncus, vehicula molestie enim faucibus. In hac habitasse platea dictumst. Sed suscipit faucibus volutpat. Nam tempor tellus ac turpis blandit, eu porttitor odio consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dignissim in risus in maximus. Vestibulum pulvinar quam facilisis, bibendum est id, mattis quam.</p>
                    </div>
                    <div className="btngroup">
                        <div className="btn btn-w">Read more</div>
                    </div>
                </Link>
                <Link to="#" className="object">
                    <img src={carlosMuza} alt="" loading="lazy" />    
                    <h3>Business insigts is a important piece of your business</h3>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque placerat vestibulum. Aenean sit amet elementum sem, quis tempor magna. Duis enim est, aliquam et magna fringilla, dapibus rhoncus enim. Nulla eget fermentum nibh. Aliquam aliquam neque id velit blandit, non tristique justo iaculis.</p>
                        <p>Vivamus mollis luctus erat non dictum. Donec luctus mauris eget lectus rhoncus, vehicula molestie enim faucibus. In hac habitasse platea dictumst. Sed suscipit faucibus volutpat. Nam tempor tellus ac turpis blandit, eu porttitor odio consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dignissim in risus in maximus. Vestibulum pulvinar quam facilisis, bibendum est id, mattis quam.</p>
                    </div>
                    <div className="btngroup">
                        <div className="btn btn-w">Read more</div>
                    </div>
                </Link>
            </div>
            <div className="btngroup">
                <Link to="#" className="btn btn-b">All recent projects</Link>
            </div>
        </div>
    </section>
  )
}

export default projectCase