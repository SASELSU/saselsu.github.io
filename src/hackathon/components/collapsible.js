import {useEffect, useState} from "react"
import "./collapsible.css"

// i made this with this tutorial: https://www.youtube.com/watch?v=Y6AfeQIgtVw
function Collapsible({items, keepOthersOpen}) {

  const [collapsibleItems, setCollapsibleItems] = useState(null)
  useEffect(() => {
    if (items) {
      setCollapsibleItems([
        ...items.map(item => ({
          ...item,
          toggled: false
        }))
      ])
    }
  }, [items])

  function handleCollapsibleToggle(clickedItem){
    setCollapsibleItems([
      ...collapsibleItems.map((item) => {
        let toggled = item.toggled

        if (clickedItem.id === item.id){
          toggled = !item.toggled
        }
        else if (!keepOthersOpen){
          toggled = false
        }

        return{
          ...item,
          toggled
        }
      })
    ])
  }

  return(
    <>
      <div className="collapsible-parent">
      {collapsibleItems?.map((listItem, key) => {
        return(
          <div className={`collapsible ${listItem.toggled ? 'toggled' : ''}`} key={key}>
            <button className="toggle" onClick={() => handleCollapsibleToggle(listItem)}>
              <p className="greenParagraph">{listItem.label}</p>
              <div className="direction-indicator">{listItem.toggled ? <div>&and;</div> : <div>&or;</div>}</div>
            </button>
            <div className="content-parent">
              <div className="content">{listItem.renderContent()}</div>
            </div>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default Collapsible