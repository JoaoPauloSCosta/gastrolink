import React from 'react';

const BlogDetails = () => {
  return (
    <div className="blog-detail-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-4">
          <div className="col-12">
            <div className="blog-detail-image">
              <img src="/assets/images/blog-detail.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-detail-content">
              <h2>Título do Blog</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
