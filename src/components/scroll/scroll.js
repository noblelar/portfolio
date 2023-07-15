import React, { Component } from "react";
import './scroll.css';

// let visibility = window.addEventListener('scroll', (e) => {
//     let scroll_position = window.scrollY;
//     // your code
//     let visi = '';
//     if (window.scrollY >= 50) {
//         visi = 'visible';
//     } else {
//         visi = 'hidden';

//     }
//     console.log(visi);
//     return visi;
// });


class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
        };
    }

    // ! Onscroll function not in use at the moment
    onClickScroll = () => {
        console.log(window.scrollY)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            // Add smooth scrolling behavior if desired
          });
    }

    handleScrollToTop = () => {
        const scrollToTop = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 0) {
            window.scroll(0, scrollTop - Math.min(scrollTop, 10)); // Adjust the scrolling speed by modifying the second parameter (here, 20)
            window.requestAnimationFrame(scrollToTop);
          }
        };
    
        window.requestAnimationFrame(scrollToTop);
      };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollTop = window.scrollY;
        const isScrolleds = scrollTop > 80;

        this.setState({ isScrolled: isScrolleds });
    };


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    render() {
        const { isScrolled } = this.state;
        return (
            <div className={isScrolled ? 'visible' : 'hidden'} onClick={this.handleScrollToTop}>
                <button className="Btn" >
                    {/* {window.onscroll} */}
                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                    <p className="text">Back to Top</p>
                </button>
            </div>
        )
    }

}


export default Scroll;