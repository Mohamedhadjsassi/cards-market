import React from 'react'
import './StyleArticle.css'
import Description from './Description'
import Image from './Image'
import Title from './Title'
import Price from './Price'
import Button from './Button'
function Article({title,image ,disc , prix}) {
    return (
<div className='art'>

<Title title={title}/>
<Image image={image}/>
<Description text={disc}/>
<Price price={prix}/>
<Button/>
</div>

    )
  

}
export default Article

