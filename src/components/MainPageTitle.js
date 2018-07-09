import React from 'react'
import AnimatedWrapper from './../utils/AnimatedWrapper';

const MainPageTitle = (props) => {
	return (
        <div className="list-books-title">
          <h1>Terence Reads
	          <br />
	          <span>Udacity React Nanodegree · Project</span>
          </h1>
        </div>
	)

}

const MainPageTitleComponent = AnimatedWrapper(MainPageTitle)

export default MainPageTitleComponent
