import React, { Component } from 'react';

class Container extends React.Component {


constructor(props) {
      super(props);
      
      this.state = {
         photos:[],
      }
     
   };

  componentDidMount() {
    fetch('https://server3.kproxy.com/servlet/redirect.srv/sruj/saoaayskuujhzbkiz/p1/react/admin/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(apidata => this.setState({ photos:apidata }));

     
  }


   render() {
      return (

<section>
<main class="main-wrapper" id="container"> 
  

  
  <div class="wrapper">
    <div class="">


                      <ul>
                          {this.state.photos.map(photo =>
                            <li key={photo.id}>
                              {photo.id}
                            
                            </li>
                          )}
                        </ul>


      <ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4 masonry">
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/01.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/02.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/03.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/04.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/05.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/06.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/07.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/08.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/09.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/10.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/11.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/12.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/13.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/14.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/16.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
        <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/17.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
         <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/18.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
         <li class="masonry-item grid">
          <figure class="effect-sarah"> <img src="assets/images/gallery/19.jpg" alt="" />
            <figcaption>
              <h2>Photo <span>Title</span></h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</main>
</section>

);
   }
}
export default Container;