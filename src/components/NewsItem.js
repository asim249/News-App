import React  from 'react'

const NewsItem = (props) =>  {
    let {title, descripition, imageUrl, newsUrl, author, date, source} = props;
     return (
       <div className='my-3'>
            <div className="card position-relative" style={{width: "18rem"}}>
              <img className="card-img-top" src={!imageUrl ? "https://images.wsj.net/im-31250556/social" : imageUrl} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{title}
                      <div style={{
                        position: "absolute",
                        right: "0px",
                        top: "0px",
                        zIndex: "1",
                        justifyContent:"flex-end"
                      }}
                      >
                          <span className='badge rounded-pill bg-danger btn tiny-btn'>{source}
                          </span>
                     </div>
                  </h5>
                  <p className="card-text">{descripition}</p>
                  <p class="card-text"><small class="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                  <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
              </div>
           </div>
      </div>
    )
  }

export default NewsItem
