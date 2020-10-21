import React from "react";

import MenuItem from '../menu-item/menu-item-components'
import './directory-styles.scss'

// need state so need class
class Direcroty extends React.Component {
  constructor() {
    super();
    this.state = {
        sections:[
            {
              title: 'toys',
              imageUrl: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'beds',
              imageUrl: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'collars',
              imageUrl: 'https://images.unsplash.com/photo-1532983523122-9f7448e9e6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60g',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'clothes',
              imageUrl: 'https://images.unsplash.com/photo-1583337260546-28b6bf66d004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'cakes',
              imageUrl: 'https://images.unsplash.com/photo-1578729370305-131f65fbd716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
    }
  }
  render() {
      return (
        <div className='directory-menu'>
            {this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))}
        </div>
      )
  }
}

export default Direcroty;
