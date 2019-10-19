import React, { Component } from 'react';

class Container extends React.Component {


constructor(props) {
      super(props);
      
      this.state = {
         photos:[],
      }
     
   };

  componentDidMount() {
    fetch('http://blogfordeveloper.com/react/admin/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(apidata => this.setState({ photos:apidata }));

      //console.log(this.state.photos);

     
  }


   render() {
      return (

<section>
<main class="main-wrapper" id="container"> 
  
  
  <div class="wrapper">
    <div class="">


                      


      <ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4 masonry">
       
  {this.state.photos.map(photo =>
        <li class="masonry-item grid" key={photo.id}>
          <figure class="effect-sarah"> 

          <img src={photo.featured_image.size_medium} alt="" />

            <figcaption>

              <h2>

             {photo.title.rendered}

              </h2>
              <p>{photo.excerpt.rendered}</p>
              <a href="details.html">View more</a> </figcaption>
          </figure>
        </li>
     )}

      </ul>
    </div>
  </div>
</main>
<div class="clear-both"></div>
</section>

);
   }
}
export default Container;